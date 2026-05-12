import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass10Mathematics from "./class10_mathematics.js";
import seedClass10Science from "./class10_science.js";
import seedClass10SocialStudies from "./class10_social_studies.js";
import seedClass10English from "./class10_english.js";
import seedClass10Hindi from "./class10_hindi.js";
import seedClass10Odia from "./class10_odia.js";

dotenv.config();

const seedClass10Complete = async () => {
  try {
    console.log("🚀 Starting Class 10 Complete Seeding...");
    console.log("=".repeat(50));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding Class 10 Subjects (English)...");

    await seedClass10Mathematics();
    await seedClass10Science();
    await seedClass10SocialStudies();
    await seedClass10English();
    await seedClass10Hindi();
    await seedClass10Odia();

    console.log("\n" + "=".repeat(50));
    console.log("🎉 CLASS 10 SEEDING COMPLETED SUCCESSFULLY!");
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
    console.log("📈 Grade: Class 10");
    console.log("⭐ All quizzes published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass10Complete();
}

export default seedClass10Complete;
