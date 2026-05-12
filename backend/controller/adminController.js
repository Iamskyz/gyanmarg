import User from "../models/User.js";
import Quiz from "../models/Quiz.js";
import Game from "../models/Game.js";
import QuizAttempt from "../models/QuizAttempt.js";
import GameAttempt from "../models/GameAttempt.js";
import Feedback from "../models/Feedback.js";
import PointsEvent from "../models/PointsEvent.js";
import bcrypt from "bcryptjs";

// Dashboard stats
export const getDashboardStats = async (req, res) => {
  try {
    const [totalUsers, totalQuizzes, totalGames, totalAttempts, totalFeedback] = await Promise.all([
      User.countDocuments({ role: "student" }),
      Quiz.countDocuments(),
      Game.countDocuments(),
      QuizAttempt.countDocuments(),
      Feedback.countDocuments({ status: "pending" }),
    ]);

    res.json({ totalUsers, totalQuizzes, totalGames, totalAttempts, pendingFeedback: totalFeedback });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Analytics
export const getAnalytics = async (req, res) => {
  try {
    // Total XP earned across platform
    const xpAgg = await PointsEvent.aggregate([{ $group: { _id: null, total: { $sum: "$xp" } } }]);
    const totalXpEarned = xpAgg[0]?.total || 0;

    // Average quiz score
    const scoreAgg = await QuizAttempt.aggregate([{ $group: { _id: null, avg: { $avg: "$percentage" } } }]);
    const avgQuizScore = Math.round(scoreAgg[0]?.avg || 0);

    // Active today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const activeToday = await User.countDocuments({ lastActive: { $gte: today }, role: "student" });

    // Completion rate (attempts vs total possible)
    const totalStudents = await User.countDocuments({ role: "student" });
    const totalPublishedQuizzes = await Quiz.countDocuments({ isPublished: true });
    const totalAttempts = await QuizAttempt.countDocuments();
    const completionRate = totalStudents && totalPublishedQuizzes
      ? Math.min(Math.round((totalAttempts / (totalStudents * totalPublishedQuizzes)) * 100), 100) : 0;

    // Grade distribution
    const gradeDistribution = await User.aggregate([
      { $match: { role: "student", grade: { $exists: true } } },
      { $group: { _id: "$grade", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    // Subject performance
    const subjectPerformance = await QuizAttempt.aggregate([
      { $lookup: { from: "quizzes", localField: "quiz", foreignField: "_id", as: "quizData" } },
      { $unwind: "$quizData" },
      { $group: { _id: "$quizData.subject", attempts: { $sum: 1 }, avgScore: { $avg: "$percentage" } } },
      { $sort: { attempts: -1 } },
    ]);

    // Daily activity (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const quizDaily = await QuizAttempt.aggregate([
      { $match: { createdAt: { $gte: sevenDaysAgo } } },
      { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } } },
    ]);
    const gameDaily = await GameAttempt.aggregate([
      { $match: { createdAt: { $gte: sevenDaysAgo } } },
      { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } } },
    ]);

    const dailyActivity = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      dailyActivity.push({
        date: dateStr,
        quizAttempts: quizDaily.find(q => q._id === dateStr)?.count || 0,
        gameAttempts: gameDaily.find(g => g._id === dateStr)?.count || 0,
      });
    }

    // Top quizzes
    const topQuizzes = await QuizAttempt.aggregate([
      { $group: { _id: "$quiz", attempts: { $sum: 1 } } },
      { $sort: { attempts: -1 } },
      { $limit: 5 },
      { $lookup: { from: "quizzes", localField: "_id", foreignField: "_id", as: "quizData" } },
      { $unwind: "$quizData" },
      { $project: { _id: 1, attempts: 1, title: "$quizData.title", subject: "$quizData.subject", grade: "$quizData.grade" } },
    ]);

    res.json({
      totalXpEarned,
      avgQuizScore,
      activeToday,
      completionRate,
      gradeDistribution: gradeDistribution.map(g => ({ grade: g._id, count: g.count })),
      subjectPerformance: subjectPerformance.map(s => ({ subject: s._id, attempts: s.attempts, avgScore: Math.round(s.avgScore) })),
      dailyActivity,
      topQuizzes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create user (admin)
export const createUser = async (req, res) => {
  try {
    const { name, email, password, grade, stream, language, role } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Name, email and password are required" });
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already registered" });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, grade, stream: grade >= 11 ? stream : null, language, role: role || "student" });
    const { password: _, ...userData } = user.toObject();
    res.status(201).json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user (admin)
export const updateUser = async (req, res) => {
  try {
    const { name, email, password, grade, stream, language, role, xp, level, streak } = req.body;
    const updates = {};
    if (name !== undefined) updates.name = name;
    if (email !== undefined) updates.email = email;
    if (password) updates.password = await bcrypt.hash(password, 10);
    if (grade !== undefined) { updates.grade = grade; updates.stream = grade >= 11 ? (stream || null) : null; }
    else if (stream !== undefined) updates.stream = stream;
    if (language !== undefined) updates.language = language;
    if (role !== undefined) updates.role = role;
    if (xp !== undefined) updates.xp = xp;
    if (level !== undefined) updates.level = level;
    if (streak !== undefined) updates.streak = streak;

    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
