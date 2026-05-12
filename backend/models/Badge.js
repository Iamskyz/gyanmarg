import mongoose from "mongoose";

const badgeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    badgeId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    category: { type: String, enum: ["quiz", "game", "streak", "xp", "special"], required: true },
    earnedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

badgeSchema.index({ user: 1, badgeId: 1 }, { unique: true });

export default mongoose.model("Badge", badgeSchema);
