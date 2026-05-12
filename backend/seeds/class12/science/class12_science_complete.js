import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedClass12SciencePhysics } from "./class12_science_physics.js";
import { seedClass12ScienceChemistry } from "./class12_science_chemistry.js";
import { seedClass12ScienceBiology } from "./class12_science_biology.js";
import { seedClass12ScienceMathematics } from "./class12_science_mathematics.js";
import { seedClass12ScienceEnglish } from "./class12_science_english.js";
import { seedClass12ScienceOdia } from "./class12_science_odia.js";

dotenv.config();

const seedClass12ScienceComplete = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 12 Science (English) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding Physics...");
    results.push(await seedClass12SciencePhysics());

    console.log("2/6 - Seeding Chemistry...");
    results.push(await seedClass12ScienceChemistry());

    console.log("3/6 - Seeding Biology...");
    results.push(await seedClass12ScienceBiology());

    console.log("4/6 - Seeding Mathematics...");
    results.push(await seedClass12ScienceMathematics());

    console.log("5/6 - Seeding English...");
    results.push(await seedClass12ScienceEnglish());

    console.log("6/6 - Seeding Odia...");
    results.push(await seedClass12ScienceOdia());

    console.log("\n=== Class 12 Science (English) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 12 Science:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass12ScienceComplete().then(() => process.exit(0));
}

export { seedClass12ScienceComplete };
