import express from "express";
import { config } from "dotenv";
config();
import { connectDB } from "./configs/db.config.js";
import products from "./data/products.js";

connectDB();

const PORT = process.env.SERVER_PORT;

const app = express();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${5000}`);
});