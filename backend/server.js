const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

/* ================= ROOT API ================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ================= LOGIN API ================= */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "1234") {
    return res.json({ token: "abc123" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

/* ================= GET ALL API ================= */
app.get("/all", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const data = Array.from({ length: 50 }, (_, i) => ({
    name: "Item " + (i + 1)
  }));

  const start = (page - 1) * limit;
  const end = start + limit;

  res.json({
    data: data.slice(start, end)
  });
});

/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});