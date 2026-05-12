import express from "express";
import { askTutor } from "../controller/aiTutorController.js";
import { protect, studentOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/ask", protect, studentOnly, askTutor);

export default router;
