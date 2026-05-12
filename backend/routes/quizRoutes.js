import express from "express";
import {
  getQuizzes,
  getSubjects,
  getQuizById,
  submitQuiz,
  getMyAttempts,
  getQuizResult,
  checkAttempt,
  createQuiz,
  addQuestions,
  getAllQuizzes,
  getQuizQuestions,
  deleteQuestion,
  togglePublish,
  deleteQuiz,
} from "../controller/quizController.js";
import { protect, adminOnly, studentOnly } from "../middleware/auth.js";

const router = express.Router();

// Student routes
router.get("/", protect, studentOnly, getQuizzes);
router.get("/subjects", protect, studentOnly, getSubjects);
router.get("/attempts", protect, studentOnly, getMyAttempts);
router.get("/result/:attemptId", protect, studentOnly, getQuizResult);
router.get("/check/:id", protect, studentOnly, checkAttempt);
router.get("/:id", protect, studentOnly, getQuizById);
router.post("/submit", protect, studentOnly, submitQuiz);

// Admin routes
router.get("/admin/all", protect, adminOnly, getAllQuizzes);
router.get("/admin/:id/questions", protect, adminOnly, getQuizQuestions);
router.post("/admin/create", protect, adminOnly, createQuiz);
router.post("/admin/:id/questions", protect, adminOnly, addQuestions);
router.put("/admin/:id/toggle", protect, adminOnly, togglePublish);
router.delete("/admin/:id", protect, adminOnly, deleteQuiz);
router.delete("/admin/question/:questionId", protect, adminOnly, deleteQuestion);

export default router;
