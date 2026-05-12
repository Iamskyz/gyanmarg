import Progress from "../models/Progress.js";
import PointsEvent from "../models/PointsEvent.js";
import QuizAttempt from "../models/QuizAttempt.js";
import GameAttempt from "../models/GameAttempt.js";

export const getMyProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user._id });
    const recentXp = await PointsEvent.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(20);

    const quizCount = await QuizAttempt.countDocuments({ user: req.user._id });
    const gameCount = await GameAttempt.countDocuments({ user: req.user._id });

    res.json({ progress, recentXp, quizCount, gameCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
