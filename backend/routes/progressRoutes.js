import express from "express";
import { getMyProgress } from "../controller/progressController.js";
import { protect, studentOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protect, studentOnly, getMyProgress);

export default router;
