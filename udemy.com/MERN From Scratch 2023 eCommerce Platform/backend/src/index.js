import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
config();
import { connectDB } from "./configs/db.config.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB();

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => { res.send("API is running..."); });
app.use(productRoutes);
app.use(userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${5000}`);
});