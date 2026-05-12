import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedClass11ArtsHistoryOdia } from "./class11_arts_history_odia.js";
import { seedClass11ArtsPoliticalScienceOdia } from "./class11_arts_political_science_odia.js";
import { seedClass11ArtsGeographyOdia } from "./class11_arts_geography_odia.js";
import { seedClass11ArtsEconomicsOdia } from "./class11_arts_economics_odia.js";
import { seedClass11ArtsEnglishOdia } from "./class11_arts_english_odia.js";
import { seedClass11ArtsOdiaOdia } from "./class11_arts_odia_odia.js";

dotenv.config();

const seedClass11ArtsCompleteOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 11 Arts (Odia) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding History (Odia)...");
    results.push(await seedClass11ArtsHistoryOdia());

    console.log("2/6 - Seeding Political Science (Odia)...");
    results.push(await seedClass11ArtsPoliticalScienceOdia());

    console.log("3/6 - Seeding Geography (Odia)...");
    results.push(await seedClass11ArtsGeographyOdia());

    console.log("4/6 - Seeding Economics (Odia)...");
    results.push(await seedClass11ArtsEconomicsOdia());

    console.log("5/6 - Seeding English (Odia)...");
    results.push(await seedClass11ArtsEnglishOdia());

    console.log("6/6 - Seeding Odia (Odia)...");
    results.push(await seedClass11ArtsOdiaOdia());

    console.log("\n=== Class 11 Arts (Odia) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 11 Arts (Odia):", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass11ArtsCompleteOdia().then(() => process.exit(0));
}

export { seedClass11ArtsCompleteOdia };
