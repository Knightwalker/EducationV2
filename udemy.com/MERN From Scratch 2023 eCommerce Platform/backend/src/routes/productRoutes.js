import express from "express";
import { getProducts, getProductById } from "../controllers/productController.js";
const router = express.Router();

router.get("/api/products", getProducts);
router.get("/api/products/:id", getProductById);

export default router;