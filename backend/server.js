import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import gameRoutes from "./routes/gameRoutes.js";
import aiTutorRoutes from "./routes/aiTutorRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import badgeRoutes from "./routes/badgeRoutes.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/tutor", aiTutorRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/badges", badgeRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => res.json({ message: "GyanMarg API is running" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
