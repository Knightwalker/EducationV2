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

app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomUUID();
    const postId = req.params.id;
    const { content } = req.body;

    const comments = commentsByPostId[postId] || [];
    comments.push({
        id: commentId,
        content: content
    });
    commentsByPostId[postId] = comments;

    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log("Listening on 4001");
})