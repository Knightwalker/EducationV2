import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
     origin: "http://localhost:3000"
}));
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});

app.post("/events", (req, res) => {
    const { type, data } = req.body;

    if (type === "PostCreated") {
        const { id, title } = data;

        posts[id] = {
            id: id,
            title: title,
            comments: []
        }
    }

    if (type === "CommentCreated") {
        const { id, content, postId, status } = data;
        
        const post = posts[postId];
        post.comments.push({ id: id, content: content, status: status });
    }

    if (type === "CommentUpdated") {
        const { id, content, postId, status } = data;
        
        const post = posts[postId];
        const comment = post.comments.find((x) => {
            return x.id === id;
        });
        comment.content = content;
        comment.status = status;
    }

    console.log(posts);
    res.status(200).send("OK");
});

app.listen(4002, () => {
    console.log("Listening on 4002");
});