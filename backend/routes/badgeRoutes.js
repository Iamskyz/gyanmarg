import express from "express";
import { getMyBadges } from "../controller/badgeController.js";
import { protect, studentOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protect, studentOnly, getMyBadges);

export default router;
