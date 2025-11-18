const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000; // You can change this if you want

app.use(cors());
app.use(bodyParser.json());

// Serve static files (css, images)
app.use(express.static(path.join(__dirname, "../frontend")));

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Place order endpoint
app.post("/place-order", (req, res) => {
  const order = req.body;
  console.log("✅ New Order Received:", order);
  res.json({ message: "Order received successfully!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
