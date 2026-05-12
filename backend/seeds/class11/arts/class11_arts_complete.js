import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedClass11ArtsHistory } from "./class11_arts_history.js";
import { seedClass11ArtsPoliticalScience } from "./class11_arts_political_science.js";
import { seedClass11ArtsGeography } from "./class11_arts_geography.js";
import { seedClass11ArtsEconomics } from "./class11_arts_economics.js";
import { seedClass11ArtsEnglish } from "./class11_arts_english.js";
import { seedClass11ArtsOdia } from "./class11_arts_odia.js";

dotenv.config();

const seedClass11ArtsComplete = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 11 Arts (English) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding History...");
    results.push(await seedClass11ArtsHistory());

    console.log("2/6 - Seeding Political Science...");
    results.push(await seedClass11ArtsPoliticalScience());

    console.log("3/6 - Seeding Geography...");
    results.push(await seedClass11ArtsGeography());

    console.log("4/6 - Seeding Economics...");
    results.push(await seedClass11ArtsEconomics());

    console.log("5/6 - Seeding English...");
    results.push(await seedClass11ArtsEnglish());

    console.log("6/6 - Seeding Odia...");
    results.push(await seedClass11ArtsOdia());

    console.log("\n=== Class 11 Arts (English) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 11 Arts:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass11ArtsComplete().then(() => process.exit(0));
}

export { seedClass11ArtsComplete };
