import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true }, // index of correct option
    marks: { type: Number, default: 1 },
    explanation: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
