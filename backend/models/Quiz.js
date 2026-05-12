import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true },
    category: { type: String }, // e.g., "Physics", "Algebra", "History"
    chapter: { type: String },
    grade: { type: Number, required: true, min: 6, max: 12 },
    stream: { type: String, enum: ["science", "arts", "commerce", null], default: null },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "medium" },
    language: { type: String, enum: ["en", "od"], default: "en" },
    duration: { type: Number, default: 10 }, // minutes
    totalMarks: { type: Number, default: 0 },
    xpReward: { type: Number, default: 10 },
    isPublished: { type: Boolean, default: false },
    referenceLink: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);
