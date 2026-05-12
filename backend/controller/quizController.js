import Quiz from "../models/Quiz.js";
import Question from "../models/Question.js";
import QuizAttempt from "../models/QuizAttempt.js";
import User from "../models/User.js";
import PointsEvent from "../models/PointsEvent.js";
import Progress from "../models/Progress.js";
import Badge from "../models/Badge.js";
import { checkAndAwardBadges } from "../utils/badgeSystem.js";

// Get all published quizzes (student) - enforces user's grade, stream, language
export const getQuizzes = async (req, res) => {
  try {
    const { subject } = req.query;
    const filter = { isPublished: true };

    // Enforce user's grade - students can only see their own class quizzes
    if (req.user?.grade) filter.grade = req.user.grade;
    // Enforce stream for class 11/12
    if (req.user?.grade >= 11 && req.user?.stream) filter.stream = req.user.stream;
    // Enforce language
    if (req.user?.language) filter.language = req.user.language;
    if (subject) filter.subject = subject;

    const quizzes = await Quiz.find(filter).sort({ createdAt: -1 });
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get distinct subjects for the user's grade/stream/language
export const getSubjects = async (req, res) => {
  try {
    const filter = { isPublished: true };
    if (req.user?.grade) filter.grade = req.user.grade;
    if (req.user?.grade >= 11 && req.user?.stream) filter.stream = req.user.stream;
    if (req.user?.language) filter.language = req.user.language;

    const subjects = await Quiz.distinct("subject", filter);
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get quiz with questions (for attempting)
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    const questions = await Question.find({ quiz: quiz._id }).select("-correctAnswer -explanation");
    res.json({ quiz, questions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit quiz attempt
export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers, timeTaken } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    const questions = await Question.find({ quiz: quizId });
    let score = 0;
    let totalMarks = 0;

    const processedAnswers = answers.map((ans) => {
      const question = questions.find((q) => q._id.toString() === ans.questionId);
      if (!question) return { question: ans.questionId, selectedOption: ans.selectedOption, isCorrect: false };

      totalMarks += question.marks;
      const isCorrect = question.correctAnswer === ans.selectedOption;
      if (isCorrect) score += question.marks;

      return { question: question._id, selectedOption: ans.selectedOption, isCorrect };
    });

    const percentage = totalMarks > 0 ? Math.round((score / totalMarks) * 100) : 0;
    const xpEarned = Math.round((percentage / 100) * quiz.xpReward);

    const attempt = await QuizAttempt.create({
      user: req.user._id,
      quiz: quizId,
      answers: processedAnswers,
      score,
      totalMarks,
      percentage,
      xpEarned,
      timeTaken,
    });

    // Update user XP
    await User.findByIdAndUpdate(req.user._id, {
      $inc: { xp: xpEarned },
    });

    // Log points event
    await PointsEvent.create({
      user: req.user._id,
      type: "quiz_complete",
      xp: xpEarned,
      description: `Completed quiz: ${quiz.title}`,
      referenceId: quiz._id,
    });

    // Update progress
    await Progress.findOneAndUpdate(
      { user: req.user._id, subject: quiz.subject },
      {
        $inc: { quizzesCompleted: 1, totalXp: xpEarned },
        $set: { lastActivity: new Date() },
      },
      { upsert: true }
    );

    // Check for new badges
    const newBadges = await checkAndAwardBadges(req.user._id);

    res.json({ attempt, xpEarned, percentage, newBadges });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's quiz history
export const getMyAttempts = async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({ user: req.user._id })
      .populate("quiz", "title subject")
      .sort({ createdAt: -1 });
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Create quiz
export const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Add questions to quiz
export const addQuestions = async (req, res) => {
  try {
    const { questions } = req.body;
    const quizId = req.params.id;

    const docs = questions.map((q) => ({ ...q, quiz: quizId }));
    const created = await Question.insertMany(docs);

    // Update total marks
    const totalMarks = questions.reduce((sum, q) => sum + (q.marks || 1), 0);
    await Quiz.findByIdAndUpdate(quizId, { $inc: { totalMarks } });

    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Get all quizzes
export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 });
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Get questions for a quiz (full details)
export const getQuizQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ quiz: req.params.id }).sort({ createdAt: 1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Delete a question
export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });
    await Question.findByIdAndDelete(req.params.questionId);
    await Quiz.findByIdAndUpdate(question.quiz, { $inc: { totalMarks: -(question.marks || 1) } });
    res.json({ message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Toggle publish
export const togglePublish = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    quiz.isPublished = !quiz.isPublished;
    await quiz.save();
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Delete quiz
export const deleteQuiz = async (req, res) => {
  try {
    await Question.deleteMany({ quiz: req.params.id });
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ message: "Quiz deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get quiz result with explanations
export const getQuizResult = async (req, res) => {
  try {
    const attempt = await QuizAttempt.findById(req.params.attemptId).populate("quiz", "title subject chapter xpReward referenceLink");
    if (!attempt) return res.status(404).json({ message: "Attempt not found" });
    if (attempt.user.toString() !== req.user._id.toString()) return res.status(403).json({ message: "Not authorized" });

    const questions = await Question.find({ quiz: attempt.quiz._id });

    const detailedResults = attempt.answers.map((ans) => {
      const question = questions.find((q) => q._id.toString() === ans.question.toString());
      return {
        questionText: question?.questionText,
        options: question?.options,
        correctAnswer: question?.correctAnswer,
        selectedOption: ans.selectedOption,
        isCorrect: ans.isCorrect,
        explanation: question?.explanation,
        marks: question?.marks,
      };
    });

    // Get badges earned around the time of this attempt
    const recentBadges = await Badge.find({
      user: req.user._id,
      earnedAt: { $gte: new Date(attempt.createdAt.getTime() - 5000) },
    });

    res.json({
      attempt: {
        _id: attempt._id,
        score: attempt.score,
        totalMarks: attempt.totalMarks,
        percentage: attempt.percentage,
        xpEarned: attempt.xpEarned,
        timeTaken: attempt.timeTaken,
        completedAt: attempt.completedAt,
      },
      quiz: attempt.quiz,
      detailedResults,
      newBadges: recentBadges,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check if user already attempted a quiz
export const checkAttempt = async (req, res) => {
  try {
    const attempt = await QuizAttempt.findOne({ user: req.user._id, quiz: req.params.id }).sort({ createdAt: -1 });
    res.json({ attempted: !!attempt, attempt });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
