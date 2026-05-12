import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass11SciencePhysics from "./class11_science_physics.js";
import seedClass11ScienceChemistry from "./class11_science_chemistry.js";
import seedClass11ScienceBiology from "./class11_science_biology.js";
import seedClass11ScienceMathematics from "./class11_science_mathematics.js";
import seedClass11ScienceEnglish from "./class11_science_english.js";
import seedClass11ScienceOdia from "./class11_science_odia.js";

dotenv.config();

const seedClass11ScienceComplete = async () => {
  try {
    console.log("🚀 Starting Class 11 Science Complete Seeding...");
    console.log("=".repeat(50));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding Class 11 Science Subjects (English)...");

    await seedClass11SciencePhysics();
    await seedClass11ScienceChemistry();
    await seedClass11ScienceBiology();
    await seedClass11ScienceMathematics();
    await seedClass11ScienceEnglish();
    await seedClass11ScienceOdia();

    console.log("\n" + "=".repeat(50));
    console.log("🎉 CLASS 11 SCIENCE SEEDING COMPLETED SUCCESSFULLY!");
    console.log("=".repeat(50));

    console.log("\n📊 SUMMARY:");
    console.log("├── Physics: 3 quizzes, 30 questions");
    console.log("├── Chemistry: 3 quizzes, 30 questions");
    console.log("├── Biology: 3 quizzes, 30 questions");
    console.log("├── Mathematics: 3 quizzes, 30 questions");
    console.log("├── English: 3 quizzes, 30 questions");
    console.log("└── Odia: 3 quizzes, 30 questions");
    console.log("\n🎯 TOTAL: 18 quizzes, 180 questions");
    console.log("🌐 Language: English");
    console.log("📈 Grade: Class 11 (Science)");
    console.log("⭐ All quizzes published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass11ScienceComplete();
}

export default seedClass11ScienceComplete;
