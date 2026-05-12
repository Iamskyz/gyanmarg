import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedClass12SciencePhysicsOdia } from "./class12_science_physics_odia.js";
import { seedClass12ScienceChemistryOdia } from "./class12_science_chemistry_odia.js";
import { seedClass12ScienceBiologyOdia } from "./class12_science_biology_odia.js";
import { seedClass12ScienceMathematicsOdia } from "./class12_science_mathematics_odia.js";
import { seedClass12ScienceEnglishOdia } from "./class12_science_english_odia.js";
import { seedClass12ScienceOdiaOdia } from "./class12_science_odia_odia.js";

dotenv.config();

const seedClass12ScienceCompleteOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 12 Science (Odia) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding Physics (Odia)...");
    results.push(await seedClass12SciencePhysicsOdia());

    console.log("2/6 - Seeding Chemistry (Odia)...");
    results.push(await seedClass12ScienceChemistryOdia());

    console.log("3/6 - Seeding Biology (Odia)...");
    results.push(await seedClass12ScienceBiologyOdia());

    console.log("4/6 - Seeding Mathematics (Odia)...");
    results.push(await seedClass12ScienceMathematicsOdia());

    console.log("5/6 - Seeding English (Odia)...");
    results.push(await seedClass12ScienceEnglishOdia());

    console.log("6/6 - Seeding Odia (Odia)...");
    results.push(await seedClass12ScienceOdiaOdia());

    console.log("\n=== Class 12 Science (Odia) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 12 Science (Odia):", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass12ScienceCompleteOdia().then(() => process.exit(0));
}

export { seedClass12ScienceCompleteOdia };
