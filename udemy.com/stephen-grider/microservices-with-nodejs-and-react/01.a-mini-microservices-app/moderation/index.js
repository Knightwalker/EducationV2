import express from "express";

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
    const { type, data } = req.body;

    if (type === "CommentCreated") {
        const { id, content, postId } = data;

        const status = data.content.includes("orange") ? "rejected" : "approved";
        const updatedComment = {
            id: id,
            content: content,
            postId: postId,
            status: status
        }

        const event = {
            type: "CommentModerated",
            data: updatedComment
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

app.listen(4003, () => {
    console.log("Listening on 4003");
});