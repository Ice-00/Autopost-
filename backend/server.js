
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  
}));

app.use(express.json());

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("AutoPost API is running!");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AutoPost server running on port ${PORT}`);
});
