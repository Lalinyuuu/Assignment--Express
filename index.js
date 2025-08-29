import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (_req, res) => {
    res.send("Express is running. Try /profiles?name=john");
  });

const profiles = [{ name: "john", age: 20 }];

app.get("/profiles", (req, res) => {
  const { name } = req.query;

  if (name === "john") {
    return res.json({ data: profiles[0] });
  }

  return res.status(404).json({ error: "Profile not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});