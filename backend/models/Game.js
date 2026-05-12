import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    type: {
      type: String,
      enum: ["memory", "typing", "math_sprint", "word_puzzle", "true_false", "fill_blank", "match_columns", "number_guess", "spell_bee", "quiz_race", "sudoku", "crossword"],
      required: true,
    },
    grade: { type: Number, min: 6, max: 12 },
    stream: { type: String, enum: ["science", "arts", "commerce"] },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },
    xpReward: { type: Number, default: 5 },
    isPublished: { type: Boolean, default: false },
    config: { type: mongoose.Schema.Types.Mixed }, // game-specific settings
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Game", gameSchema);
