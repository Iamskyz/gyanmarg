import Badge from "../models/Badge.js";
import { BADGES } from "../utils/badgeSystem.js";

// Get all badge definitions + user's earned badges
export const getMyBadges = async (req, res) => {
  try {
    const earned = await Badge.find({ user: req.user._id }).sort({ earnedAt: -1 });
    const earnedIds = earned.map((b) => b.badgeId);

    const allBadges = BADGES.map((badge) => {
      const earnedBadge = earned.find((e) => e.badgeId === badge.id);
      return {
        ...badge,
        earned: earnedIds.includes(badge.id),
        earnedAt: earnedBadge?.earnedAt || null,
      };
    });

    res.json({
      total: BADGES.length,
      earned: earnedIds.length,
      badges: allBadges,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
