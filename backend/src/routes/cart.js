import express from "express";
import { validateCart } from "../middleware/validateCart.js";

const router = express.Router();
let cart = [];

router.post("/", validateCart, (req, res) => {
  cart.push(req.body);
  res.status(201).json({
    message: "Item added to cart",
    cart,
  });
});

export default router;
