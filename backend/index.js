import express from "express";
import dotenv from 'dotenv';
import authRoute from "./routes/auth.route.js"; // Adjust path if needed
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();

// Start the server
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
// Middleware to use the auth route
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});