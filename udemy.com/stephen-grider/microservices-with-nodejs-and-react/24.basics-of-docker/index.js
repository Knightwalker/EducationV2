import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});
