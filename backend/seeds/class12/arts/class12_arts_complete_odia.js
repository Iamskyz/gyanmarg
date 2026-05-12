import dotenv from "dotenv";
import mongoose from "mongoose";
import { seedClass12ArtsHistoryOdia } from "./class12_arts_history_odia.js";
import { seedClass12ArtsPoliticalScienceOdia } from "./class12_arts_political_science_odia.js";
import { seedClass12ArtsGeographyOdia } from "./class12_arts_geography_odia.js";
import { seedClass12ArtsEconomicsOdia } from "./class12_arts_economics_odia.js";
import { seedClass12ArtsEnglishOdia } from "./class12_arts_english_odia.js";
import { seedClass12ArtsOdiaOdia } from "./class12_arts_odia_odia.js";

dotenv.config();

const runClass12ArtsOdiaSeeds = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Seeding Class 12 Arts (Odia)...\n");

    const results = [];
    results.push(await seedClass12ArtsHistoryOdia());
    results.push(await seedClass12ArtsPoliticalScienceOdia());
    results.push(await seedClass12ArtsGeographyOdia());
    results.push(await seedClass12ArtsEconomicsOdia());
    results.push(await seedClass12ArtsEnglishOdia());
    results.push(await seedClass12ArtsOdiaOdia());

    const totals = results.reduce(
      (acc, r) => ({ quizzes: acc.quizzes + r.quizzes, questions: acc.questions + r.questions }),
      { quizzes: 0, questions: 0 }
    );

    console.log(`\n✅ Class 12 Arts (Odia) Complete: ${totals.quizzes} quizzes, ${totals.questions} questions`);
    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  runClass12ArtsOdiaSeeds();
}

export { runClass12ArtsOdiaSeeds };
