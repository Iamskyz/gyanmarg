import Game from "../models/Game.js";
import GameAttempt from "../models/GameAttempt.js";
import User from "../models/User.js";
import PointsEvent from "../models/PointsEvent.js";
import Progress from "../models/Progress.js";
import { checkAndAwardBadges } from "../utils/badgeSystem.js";

// Get all published games - enforces grade filtering
export const getGames = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = { isPublished: true };

    // Enforce grade: use student's own grade, fallback to query param
    const grade = req.user?.grade || req.query.grade;
    if (grade) filter.grade = grade;
    if (type) filter.type = type;

    const games = await Game.find(filter).sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get game by id
export const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Game not found" });
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit game score
export const submitGameScore = async (req, res) => {
  try {
    const { gameId, score, timeTaken } = req.body;

    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: "Game not found" });

    const xpEarned = Math.min(score, game.xpReward);

    const attempt = await GameAttempt.create({
      user: req.user._id,
      game: gameId,
      score,
      xpEarned,
      timeTaken,
    });

    await User.findByIdAndUpdate(req.user._id, { $inc: { xp: xpEarned } });

    await PointsEvent.create({
      user: req.user._id,
      type: "game_complete",
      xp: xpEarned,
      description: `Played game: ${game.title}`,
      referenceId: game._id,
    });

    await Progress.findOneAndUpdate(
      { user: req.user._id, subject: "games" },
      {
        $inc: { gamesCompleted: 1, totalXp: xpEarned },
        $set: { lastActivity: new Date() },
      },
      { upsert: true }
    );

    // Check for new badges
    const newBadges = await checkAndAwardBadges(req.user._id);

    res.json({ attempt, xpEarned, newBadges });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's game history
export const getMyGameAttempts = async (req, res) => {
  try {
    const attempts = await GameAttempt.find({ user: req.user._id })
      .populate("game", "title type")
      .sort({ createdAt: -1 });
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Create game
export const createGame = async (req, res) => {
  try {
    const game = await Game.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Get all games
export const getAllGames = async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Toggle publish
export const toggleGamePublish = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: "Game not found" });

    game.isPublished = !game.isPublished;
    await game.save();
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Delete game
export const deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: "Game deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
