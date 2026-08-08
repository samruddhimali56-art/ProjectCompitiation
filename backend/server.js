import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leaderRoutes from "./routes/leaderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cultureRoutes from "./routes/cultureRoutes.js";
import heritageRoutes from "./routes/heritageRoutes.js";
import battleRoutes from "./routes/battleRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leaders", leaderRoutes);
app.use("/api/culture", cultureRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/heritage", heritageRoutes);
app.use("/api/battles", battleRoutes);
app.get("/", (req, res) => {
  res.send("🚀 EraFlow Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});