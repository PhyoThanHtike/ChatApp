import express from "express";
import dotenv from 'dotenv';
import authRoute from "./routes/auth.route.js"; // Adjust path if needed
import { connectDB } from "./lib/db.js";

dotenv.config()

const app = express();

// Middleware to use the auth route
app.use("/api/auth", authRoute);

// Start the server
const PORT = process.env.PORT;

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB()
});