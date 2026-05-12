import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass9Mathematics from "./class9_mathematics.js";
import seedClass9Science from "./class9_science.js";
import seedClass9SocialStudies from "./class9_social_studies.js";
import seedClass9English from "./class9_english.js";
import seedClass9Hindi from "./class9_hindi.js";
import seedClass9Odia from "./class9_odia.js";

dotenv.config();

const seedClass9Complete = async () => {
  try {
    console.log("🚀 Starting Class 9 Complete Seeding...");
    console.log("=".repeat(50));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding Class 9 Subjects (English)...");

    await seedClass9Mathematics();
    await seedClass9Science();
    await seedClass9SocialStudies();
    await seedClass9English();
    await seedClass9Hindi();
    await seedClass9Odia();

    console.log("\n" + "=".repeat(50));
    console.log("🎉 CLASS 9 SEEDING COMPLETED SUCCESSFULLY!");
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
    console.log("📈 Grade: Class 9");
    console.log("⭐ All quizzes published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass9Complete();
}

export default seedClass9Complete;
