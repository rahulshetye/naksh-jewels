import express from "express";
import cors from "cors";
import productsRoute from "./routes/products.js";
import cartRoute from "./routes/cart.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRoute);
app.use("/cart", cartRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
