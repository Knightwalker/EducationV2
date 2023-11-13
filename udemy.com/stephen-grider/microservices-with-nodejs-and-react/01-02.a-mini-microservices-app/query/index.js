import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
     origin: "http://localhost:3000"
}));
app.use(express.json());

const posts = {};

const handleEvent = (type, data) => {
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
}

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});

app.post("/events", (req, res) => {
    const { type, data } = req.body;
    
    handleEvent(type, data);
   
    res.status(200).send("OK");
});

app.listen(4002, async () => {
    console.log("Listening on 4002");

    const response = await fetch("http://event-bus-srv:4005/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();

    for (let event of data) {
        console.log("Processing event: ", event.type);
        handleEvent(event.type, event.data);
    }
});