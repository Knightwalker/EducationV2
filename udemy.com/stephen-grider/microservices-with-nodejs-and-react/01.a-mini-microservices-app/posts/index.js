import { randomUUID } from "node:crypto";
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

app.post("/posts", (req, res) => {
    const id = randomUUID();
    const { title } = req.body;

    posts[id] = {
        id: id,
        title: title
    };

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log("Listening on 4000");
})