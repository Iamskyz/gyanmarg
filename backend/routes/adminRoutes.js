import express from "express";
import { getDashboardStats, getUsers, deleteUser, createUser, updateUser, getAnalytics } from "../controller/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.get("/stats", protect, adminOnly, getDashboardStats);
router.get("/analytics", protect, adminOnly, getAnalytics);
router.get("/users", protect, adminOnly, getUsers);
router.post("/users", protect, adminOnly, createUser);
router.put("/users/:id", protect, adminOnly, updateUser);
router.delete("/users/:id", protect, adminOnly, deleteUser);

export default router;
