import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import Game from "./models/Game.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const games = [
  { title: "Memory Match", type: "memory", description: "Flip cards to find matching pairs of terms and definitions", xpReward: 10, difficulty: "easy" },
  { title: "Speed Typing", type: "typing", description: "Type educational sentences as fast and accurately as possible", xpReward: 10, difficulty: "medium" },
  { title: "Math Sprint", type: "math_sprint", description: "Solve rapid-fire math problems before time runs out", xpReward: 15, difficulty: "medium" },
  { title: "Word Scramble", type: "word_puzzle", description: "Unscramble jumbled letters to form the correct word", xpReward: 10, difficulty: "easy" },
  { title: "True or False Rush", type: "true_false", description: "Quickly decide if science statements are true or false", xpReward: 10, difficulty: "easy" },
  { title: "Fill in the Blank", type: "fill_blank", description: "Complete sentences by choosing the correct missing word", xpReward: 10, difficulty: "medium" },
  { title: "Match the Columns", type: "match_columns", description: "Connect related terms from left column to right column", xpReward: 10, difficulty: "easy" },
  { title: "Number Guess", type: "number_guess", description: "Guess the secret number using higher/lower hints", xpReward: 8, difficulty: "easy" },
  { title: "Spell Bee", type: "spell_bee", description: "Read the definition and spell the word correctly", xpReward: 12, difficulty: "medium" },
  { title: "Quick Quiz Race", type: "quiz_race", description: "Answer MCQs as fast as possible - speed equals more points", xpReward: 15, difficulty: "hard" },
];

async function seedGames() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Game.deleteMany({});
    console.log("Cleared existing games");

    const docs = [];
    for (let grade = 6; grade <= 12; grade++) {
      for (const game of games) {
        docs.push({ ...game, grade, isPublished: true });
      }
    }

    await Game.insertMany(docs);
    console.log(`Seeded ${docs.length} games (10 games × 7 grades)`);

    await mongoose.disconnect();
    console.log("Done!");
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

seedGames();
