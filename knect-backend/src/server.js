import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Knect API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Knect server running on port ${PORT}`);
});
