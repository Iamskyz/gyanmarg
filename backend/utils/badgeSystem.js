import Badge from "../models/Badge.js";
import QuizAttempt from "../models/QuizAttempt.js";
import GameAttempt from "../models/GameAttempt.js";
import User from "../models/User.js";
import PointsEvent from "../models/PointsEvent.js";

// All badge definitions
export const BADGES = [
  // Quiz badges
  { id: "first_quiz", title: "First Step", description: "Complete your first quiz", icon: "school", category: "quiz" },
  { id: "quiz_5", title: "Quiz Explorer", description: "Complete 5 quizzes", icon: "explore", category: "quiz" },
  { id: "quiz_15", title: "Quiz Warrior", description: "Complete 15 quizzes", icon: "shield", category: "quiz" },
  { id: "quiz_30", title: "Quiz Master", description: "Complete 30 quizzes", icon: "workspace_premium", category: "quiz" },
  { id: "quiz_50", title: "Quiz Legend", description: "Complete 50 quizzes", icon: "military_tech", category: "quiz" },
  { id: "perfect_score", title: "Perfectionist", description: "Score 100% on any quiz", icon: "stars", category: "quiz" },
  { id: "perfect_3", title: "Hat Trick", description: "Score 100% on 3 quizzes", icon: "auto_awesome", category: "quiz" },
  { id: "speed_demon", title: "Speed Demon", description: "Complete a quiz in under 60 seconds", icon: "speed", category: "quiz" },

  // Game badges
  { id: "first_game", title: "Player One", description: "Play your first game", icon: "sports_esports", category: "game" },
  { id: "game_10", title: "Game Enthusiast", description: "Play 10 games", icon: "stadia_controller", category: "game" },
  { id: "game_25", title: "Game Addict", description: "Play 25 games", icon: "videogame_asset", category: "game" },
  { id: "game_50", title: "Game Champion", description: "Play 50 games", icon: "emoji_events", category: "game" },
  { id: "high_scorer", title: "High Scorer", description: "Score 90+ in any game", icon: "leaderboard", category: "game" },
  { id: "all_rounder", title: "All Rounder", description: "Play all 10 game types", icon: "diversity_3", category: "game" },

  // Streak badges
  { id: "streak_3", title: "On Fire", description: "Maintain a 3-day streak", icon: "local_fire_department", category: "streak" },
  { id: "streak_7", title: "Week Warrior", description: "Maintain a 7-day streak", icon: "whatshot", category: "streak" },
  { id: "streak_14", title: "Unstoppable", description: "Maintain a 14-day streak", icon: "rocket_launch", category: "streak" },
  { id: "streak_30", title: "Monthly Master", description: "Maintain a 30-day streak", icon: "diamond", category: "streak" },

  // XP badges
  { id: "xp_50", title: "Rising Star", description: "Earn 50 XP", icon: "star_half", category: "xp" },
  { id: "xp_200", title: "Shining Star", description: "Earn 200 XP", icon: "star", category: "xp" },
  { id: "xp_500", title: "Superstar", description: "Earn 500 XP", icon: "kid_star", category: "xp" },
  { id: "xp_1000", title: "XP King", description: "Earn 1000 XP", icon: "crown", category: "xp" },
  { id: "xp_2500", title: "Legendary", description: "Earn 2500 XP", icon: "trophy", category: "xp" },

  // Special badges
  { id: "early_bird", title: "Early Bird", description: "Complete an activity before 7 AM", icon: "wb_sunny", category: "special" },
  { id: "night_owl", title: "Night Owl", description: "Complete an activity after 10 PM", icon: "dark_mode", category: "special" },
  { id: "subject_master", title: "Subject Master", description: "Complete 10 quizzes in one subject", icon: "menu_book", category: "special" },
];

// Check and award badges after any activity
export async function checkAndAwardBadges(userId) {
  const user = await User.findById(userId);
  if (!user) return [];

  const existingBadges = await Badge.find({ user: userId });
  const earned = existingBadges.map((b) => b.badgeId);
  const newBadges = [];

  const quizCount = await QuizAttempt.countDocuments({ user: userId });
  const gameCount = await GameAttempt.countDocuments({ user: userId });
  const perfectQuizzes = await QuizAttempt.countDocuments({ user: userId, percentage: 100 });
  const fastQuiz = await QuizAttempt.findOne({ user: userId, timeTaken: { $lt: 60 } });
  const highScoreGame = await GameAttempt.findOne({ user: userId, score: { $gte: 90 } });
  const gameTypes = await GameAttempt.distinct("game", { user: userId });

  // Get distinct game types played
  let distinctGameTypes = 0;
  if (gameTypes.length > 0) {
    const Game = (await import("../models/Game.js")).default;
    distinctGameTypes = (await Game.distinct("type", { _id: { $in: gameTypes } })).length;
  }

  // Quiz subject mastery
  const subjectCounts = await QuizAttempt.aggregate([
    { $match: { user: user._id } },
    { $lookup: { from: "quizzes", localField: "quiz", foreignField: "_id", as: "quizData" } },
    { $unwind: "$quizData" },
    { $group: { _id: "$quizData.subject", count: { $sum: 1 } } },
  ]);
  const hasSubjectMaster = subjectCounts.some((s) => s.count >= 10);

  const hour = new Date().getHours();

  // Define conditions
  const checks = [
    { id: "first_quiz", condition: quizCount >= 1 },
    { id: "quiz_5", condition: quizCount >= 5 },
    { id: "quiz_15", condition: quizCount >= 15 },
    { id: "quiz_30", condition: quizCount >= 30 },
    { id: "quiz_50", condition: quizCount >= 50 },
    { id: "perfect_score", condition: perfectQuizzes >= 1 },
    { id: "perfect_3", condition: perfectQuizzes >= 3 },
    { id: "speed_demon", condition: !!fastQuiz },
    { id: "first_game", condition: gameCount >= 1 },
    { id: "game_10", condition: gameCount >= 10 },
    { id: "game_25", condition: gameCount >= 25 },
    { id: "game_50", condition: gameCount >= 50 },
    { id: "high_scorer", condition: !!highScoreGame },
    { id: "all_rounder", condition: distinctGameTypes >= 10 },
    { id: "streak_3", condition: user.streak >= 3 },
    { id: "streak_7", condition: user.streak >= 7 },
    { id: "streak_14", condition: user.streak >= 14 },
    { id: "streak_30", condition: user.streak >= 30 },
    { id: "xp_50", condition: user.xp >= 50 },
    { id: "xp_200", condition: user.xp >= 200 },
    { id: "xp_500", condition: user.xp >= 500 },
    { id: "xp_1000", condition: user.xp >= 1000 },
    { id: "xp_2500", condition: user.xp >= 2500 },
    { id: "early_bird", condition: hour < 7 },
    { id: "night_owl", condition: hour >= 22 },
    { id: "subject_master", condition: hasSubjectMaster },
  ];

  for (const check of checks) {
    if (check.condition && !earned.includes(check.id)) {
      const badgeDef = BADGES.find((b) => b.id === check.id);
      if (badgeDef) {
        await Badge.create({
          user: userId,
          badgeId: badgeDef.id,
          title: badgeDef.title,
          description: badgeDef.description,
          icon: badgeDef.icon,
          category: badgeDef.category,
        });

        const bonusXp = 5;
        await User.findByIdAndUpdate(userId, { $inc: { xp: bonusXp } });
        await PointsEvent.create({
          user: userId,
          type: "badge_earned",
          xp: bonusXp,
          description: `Badge earned: ${badgeDef.title}`,
        });

        newBadges.push(badgeDef);
      }
    }
  }

  return newBadges;
}
