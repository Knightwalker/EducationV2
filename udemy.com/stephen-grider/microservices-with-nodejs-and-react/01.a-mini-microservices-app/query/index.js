import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
     origin: "http://localhost:3000"
}));
app.use(express.json());

app.post("/", (req, res) => {
    // TODO
});

app.listen(4000, () => {
    console.log("Listening on 4000");
});