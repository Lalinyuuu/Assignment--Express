import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (_req, res) => res.send("Express is running"));


app.get("/profiles", (_req, res) => {
  return res.status(200).json({
    data: { name: "john", age: 20 }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});