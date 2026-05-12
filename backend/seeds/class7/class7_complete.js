import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass7Mathematics from "./class7_mathematics.js";
import seedClass7Science from "./class7_science.js";
import seedClass7SocialStudies from "./class7_social_studies.js";
import seedClass7English from "./class7_english.js";
import seedClass7Hindi from "./class7_hindi.js";
import seedClass7Odia from "./class7_odia.js";

dotenv.config();

const seedClass7Complete = async () => {
  try {
    console.log("🚀 Starting Class 7 Complete Seeding...");
    console.log("=".repeat(50));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding Class 7 Subjects (English)...");

    await seedClass7Mathematics();
    await seedClass7Science();
    await seedClass7SocialStudies();
    await seedClass7English();
    await seedClass7Hindi();
    await seedClass7Odia();

    console.log("\n" + "=".repeat(50));
    console.log("🎉 CLASS 7 SEEDING COMPLETED SUCCESSFULLY!");
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
    console.log("📈 Grade: Class 7");
    console.log("⭐ All quizzes published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass7Complete();
}

export default seedClass7Complete;
