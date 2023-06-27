import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
const router = express.Router();

router.get("/api/products", asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get("/api/products/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Resource not found");
    }
    res.json(product);
}));

export default router;