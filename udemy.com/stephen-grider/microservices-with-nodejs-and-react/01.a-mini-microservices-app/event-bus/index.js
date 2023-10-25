import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
     origin: "http://localhost:3000"
}));
app.use(express.json());

const events = [];

app.post("/events", async (req, res) => {
    const event = req.body;

    events.push(event);

    const p1 = fetch("http://localhost:4000/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });
    const p2 = fetch("http://localhost:4001/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });
    const p3 = fetch("http://localhost:4002/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });
    const p4 = fetch("http://localhost:4003/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });

    try {
        const response = await Promise.all([p1, p2, p3, p4]);
        console.log("SUCCESS");
    } catch(err) {
        console.log("ERROR");
    }

    res.status(200).send("OK");
});

app.get("/events", (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log("Listening on 4005");
});