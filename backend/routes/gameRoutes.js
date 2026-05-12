import express from "express";
import {
  getGames,
  getGameById,
  submitGameScore,
  getMyGameAttempts,
  createGame,
  getAllGames,
  toggleGamePublish,
  deleteGame,
} from "../controller/gameController.js";
import { protect, adminOnly, studentOnly } from "../middleware/auth.js";

const router = express.Router();

// Student routes
router.get("/", protect, studentOnly, getGames);
router.get("/attempts", protect, studentOnly, getMyGameAttempts);
router.get("/:id", protect, studentOnly, getGameById);
router.post("/submit", protect, studentOnly, submitGameScore);

// Admin routes
router.get("/admin/all", protect, adminOnly, getAllGames);
router.post("/admin/create", protect, adminOnly, createGame);
router.put("/admin/:id/toggle", protect, adminOnly, toggleGamePublish);
router.delete("/admin/:id", protect, adminOnly, deleteGame);

export default router;
