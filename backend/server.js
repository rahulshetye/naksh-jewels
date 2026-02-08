import app from "./src/app.js";

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "Naksh Jewels Backend API",
    endpoints: {
      products: "/products"
    }
  });
});


const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
