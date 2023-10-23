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

app.post("/posts", async (req, res) => {
    const id = randomUUID();
    const { title } = req.body;

    posts[id] = {
        id: id,
        title: title
    };

    const event = {
        type: "PostCreated",
        data: posts[id]
    }

    try {
        await fetch("http://localhost:4005/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        });
    } catch (err) {
        console.log("POST MICROSERVICE(4000) - ERROR")
    }

    res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
});

app.listen(4000, () => {
    console.log("Listening on 4000");
});