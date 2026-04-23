const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// ✅ Audit Logs API (THIS is what your React needs)
app.get("/audit-logs", (req, res) => {
  const data = [
    {
      id: 1,
      action: "LOGIN",
      user: "Asha",
      timestamp: "2026-04-23 10:00:00"
    },
    {
      id: 2,
      action: "CREATE",
      user: "Ravi",
      timestamp: "2026-04-23 10:10:00"
    },
    {
      id: 3,
      action: "UPDATE",
      user: "Kiran",
      timestamp: "2026-04-23 10:20:00"
    }
  ];

  res.json(data);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});