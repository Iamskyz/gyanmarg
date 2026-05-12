import mongoose from "mongoose";

const pointsEventSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["quiz_complete", "game_complete", "streak_bonus", "badge_earned", "daily_login"],
      required: true,
    },
    xp: { type: Number, required: true },
    description: { type: String },
    referenceId: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

export default mongoose.model("PointsEvent", pointsEventSchema);
