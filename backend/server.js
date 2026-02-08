import app from "./src/app.js";

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
