import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
     origin: "http://localhost:3000"
}));
app.use(express.json());

app.post("/events", async (req, res) => {
    const event = req.body;

    fetch("http://localhost:4000/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });
    fetch("http://localhost:4001/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });

    // fetch("http://localhost:4002/events", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(event)
    // });

    res.status(200).send("OK");
});

app.listen(4005, () => {
    console.log("Listening on 4005");
});