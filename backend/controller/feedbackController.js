import Feedback from "../models/Feedback.js";

// Student: Submit feedback
export const submitFeedback = async (req, res) => {
  try {
    const { type, referenceId, rating, message } = req.body;
    const feedback = await Feedback.create({
      user: req.user._id,
      type,
      referenceId,
      rating,
      message,
    });
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Student: Get my feedback
export const getMyFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get ratings for a specific quiz/game
export const getRatings = async (req, res) => {
  try {
    const { type, id } = req.params;
    const feedbacks = await Feedback.find({ type, referenceId: id })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    const total = feedbacks.length;
    const avg = total > 0 ? (feedbacks.reduce((sum, f) => sum + f.rating, 0) / total).toFixed(1) : 0;

    res.json({ avg: Number(avg), total, reviews: feedbacks.slice(0, 10) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Rate a specific quiz/game
export const rateItem = async (req, res) => {
  try {
    const { type, referenceId, rating, message } = req.body;

    // Check if user already rated this item
    const existing = await Feedback.findOne({ user: req.user._id, type, referenceId });
    if (existing) {
      existing.rating = rating;
      existing.message = message || existing.message;
      await existing.save();
      return res.json(existing);
    }

    const feedback = await Feedback.create({
      user: req.user._id,
      type,
      referenceId,
      rating,
      message: message || "",
    });
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get public feedback from all students
export const getPublicFeedback = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = { rating: { $gte: 1 } };
    if (type) filter.type = type;

    const feedback = await Feedback.find(filter)
      .populate("user", "name grade")
      .sort({ createdAt: -1 })
      .limit(30);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get bulk ratings for multiple items
export const getBulkRatings = async (req, res) => {
  try {
    const { type, ids } = req.body;
    const mongoose = (await import("mongoose")).default;
    const objectIds = ids.map((id) => new mongoose.Types.ObjectId(id));
    const ratings = await Feedback.aggregate([
      { $match: { type, referenceId: { $in: objectIds } } },
      { $group: { _id: "$referenceId", avg: { $avg: "$rating" }, count: { $sum: 1 } } },
    ]);
    const map = {};
    ratings.forEach((r) => { map[r._id.toString()] = { avg: Number(r.avg.toFixed(1)), count: r.count }; });
    res.json(map);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Get all feedback
export const getAllFeedback = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const feedback = await Feedback.find(filter)
      .populate("user", "name email grade")
      .sort({ createdAt: -1 });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Reply to feedback
export const replyFeedback = async (req, res) => {
  try {
    const { adminReply, status } = req.body;
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { adminReply, status: status || "reviewed" },
      { new: true }
    );
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Delete feedback
export const deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: "Feedback deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
