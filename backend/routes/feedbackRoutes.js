import express from "express";
import {
  submitFeedback,
  getMyFeedback,
  getAllFeedback,
  replyFeedback,
  deleteFeedback,
  getRatings,
  rateItem,
  getBulkRatings,
  getPublicFeedback,
} from "../controller/feedbackController.js";
import { protect, adminOnly, studentOnly } from "../middleware/auth.js";

const router = express.Router();

// Student routes
router.post("/", protect, studentOnly, submitFeedback);
router.post("/rate", protect, studentOnly, rateItem);
router.post("/bulk-ratings", protect, studentOnly, getBulkRatings);
router.get("/my", protect, studentOnly, getMyFeedback);
router.get("/public", protect, studentOnly, getPublicFeedback);
router.get("/ratings/:type/:id", protect, studentOnly, getRatings);

// Admin routes
router.get("/admin/all", protect, adminOnly, getAllFeedback);
router.put("/admin/:id", protect, adminOnly, replyFeedback);
router.delete("/admin/:id", protect, adminOnly, deleteFeedback);

export default router;
