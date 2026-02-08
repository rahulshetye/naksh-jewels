import express from "express";
import { getProducts } from "../services/productService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const products = getProducts();
  res.status(200).json(products);
});

export default router;
