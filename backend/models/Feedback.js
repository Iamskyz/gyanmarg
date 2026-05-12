import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["quiz", "game", "ai_tutor", "platform"],
      default: "platform",
    },
    referenceId: { type: mongoose.Schema.Types.ObjectId }, // quiz/game id if applicable
    rating: { type: Number, min: 1, max: 5 },
    message: { type: String, required: true },
    status: { type: String, enum: ["pending", "reviewed", "resolved"], default: "pending" },
    adminReply: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
