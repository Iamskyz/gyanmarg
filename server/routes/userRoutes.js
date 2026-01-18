import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔒 Protected route
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed",
    user: req.user,
  });
});

export default router;
