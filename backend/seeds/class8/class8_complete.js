import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass8Mathematics from "./class8_mathematics.js";
import seedClass8Science from "./class8_science.js";
import seedClass8SocialStudies from "./class8_social_studies.js";
import seedClass8English from "./class8_english.js";
import seedClass8Hindi from "./class8_hindi.js";
import seedClass8Odia from "./class8_odia.js";

dotenv.config();

const seedClass8Complete = async () => {
  try {
    console.log("🚀 Starting Class 8 Complete Seeding...");
    console.log("=".repeat(50));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding Class 8 Subjects (English)...");

    await seedClass8Mathematics();
    await seedClass8Science();
    await seedClass8SocialStudies();
    await seedClass8English();
    await seedClass8Hindi();
    await seedClass8Odia();

    console.log("\n" + "=".repeat(50));
    console.log("🎉 CLASS 8 SEEDING COMPLETED SUCCESSFULLY!");
    console.log("=".repeat(50));

    console.log("\n📊 SUMMARY:");
    console.log("├── Mathematics: 3 quizzes, 30 questions");
    console.log("├── Science: 3 quizzes, 30 questions");
    console.log("├── Social Studies: 3 quizzes, 30 questions");
    console.log("├── English: 3 quizzes, 30 questions");
    console.log("├── Hindi: 3 quizzes, 30 questions");
    console.log("└── Odia: 3 quizzes, 30 questions");
    console.log("\n🎯 TOTAL: 18 quizzes, 180 questions");
    console.log("🌐 Language: English");
    console.log("📈 Grade: Class 8");
    console.log("⭐ All quizzes published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass8Complete();
}

export default seedClass8Complete;
