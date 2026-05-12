import dotenv from "dotenv";
import mongoose from "mongoose";
import { seedClass12ArtsHistory } from "./class12_arts_history.js";
import { seedClass12ArtsPoliticalScience } from "./class12_arts_political_science.js";
import { seedClass12ArtsGeography } from "./class12_arts_geography.js";
import { seedClass12ArtsEconomics } from "./class12_arts_economics.js";
import { seedClass12ArtsEnglish } from "./class12_arts_english.js";
import { seedClass12ArtsOdia } from "./class12_arts_odia.js";

dotenv.config();

const runClass12ArtsSeeds = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Seeding Class 12 Arts (English)...\n");

    const results = [];
    results.push(await seedClass12ArtsHistory());
    results.push(await seedClass12ArtsPoliticalScience());
    results.push(await seedClass12ArtsGeography());
    results.push(await seedClass12ArtsEconomics());
    results.push(await seedClass12ArtsEnglish());
    results.push(await seedClass12ArtsOdia());

    const totals = results.reduce(
      (acc, r) => ({ quizzes: acc.quizzes + r.quizzes, questions: acc.questions + r.questions }),
      { quizzes: 0, questions: 0 }
    );

    console.log(`\n✅ Class 12 Arts (English) Complete: ${totals.quizzes} quizzes, ${totals.questions} questions`);
    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  runClass12ArtsSeeds();
}

export { runClass12ArtsSeeds };
