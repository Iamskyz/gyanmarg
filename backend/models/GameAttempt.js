import mongoose from "mongoose";

const gameAttemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
    score: { type: Number, default: 0 },
    xpEarned: { type: Number, default: 0 },
    timeTaken: { type: Number }, // seconds
    completedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("GameAttempt", gameAttemptSchema);
