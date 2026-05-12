import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    subject: { type: String, required: true },
    quizzesCompleted: { type: Number, default: 0 },
    gamesCompleted: { type: Number, default: 0 },
    totalXp: { type: Number, default: 0 },
    averageScore: { type: Number, default: 0 },
    lastActivity: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

progressSchema.index({ user: 1, subject: 1 }, { unique: true });

export default mongoose.model("Progress", progressSchema);
