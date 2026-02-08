export const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || typeof quantity !== "number" || quantity <= 0) {
    return res.status(400).json({
      error: "Invalid cart data",
    });
  }

  next();
};
