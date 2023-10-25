import express from "express";
import { randomUUID } from "node:crypto";
import cors from "cors";

const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    const comments = commentsByPostId[postId] || [];

    res.status(200).send(comments);
});

app.post("/posts/:id/comments", async (req, res) => {
    const commentId = randomUUID();
    const postId = req.params.id;
    const { content } = req.body;

    const comment = {
        id: commentId,
        content: content,
        postId: postId,
        status: "pending"
    }

    const comments = commentsByPostId[postId] || [];
    comments.push(comment);
    commentsByPostId[postId] = comments;

    const event = {
        type: "CommentCreated",
        data: comment
    }

    try {
        const response = await fetch("http://localhost:4005/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        });
        console.log("Created Comment: SUCCESS");
    } catch (err) {
        console.log("Created Comment: ERROR");
    }

    res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
    console.log("Received Event", req.body.type);
    const { type, data } = req.body;

    if (type === "CommentModerated") {
        const { id, postId, content, status } = data;

        const comments = commentsByPostId[postId];
        const comment = comments.find((x) => {
            return x.id === id;
        });
        comment.status = status;

        const event = {
            type: "CommentUpdated",
            data: comment
        }

        try {
            const response = await fetch("http://localhost:4005/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
            });
            console.log("SUCCESS");
        } catch (err) {
            console.log("ERROR");
        }
    }

    res.status(200).send("OK");
});

app.listen(4001, () => {
    console.log("Listening on 4001");
});