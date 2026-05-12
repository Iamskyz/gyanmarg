import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass6Mathematics from "./class6_mathematics.js";
import seedClass6Science from "./class6_science.js";
import seedClass6SocialStudies from "./class6_social_studies.js";
import seedClass6English from "./class6_english.js";
import seedClass6Hindi from "./class6_hindi.js";
import seedClass6Odia from "./class6_odia.js";
import seedClass6OdiaOdia from "./class6_odia_odia.js";

dotenv.config();

const seedClass6Complete = async () => {
  try {
    console.log("🚀 Starting Class 6 Complete Seeding...");
    console.log("=" .repeat(50));

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing Class 6 data (optional - uncomment if needed)
    // await Quiz.deleteMany({ grade: 6 });
    // await Question.deleteMany({});
    // console.log("🗑️  Cleared existing Class 6 data");

    console.log("\n📚 Seeding Class 6 Subjects...");
    
    // Seed all subjects
    await seedClass6Mathematics();
    await seedClass6Science();
    await seedClass6SocialStudies();
    await seedClass6English();
    await seedClass6Hindi();
    await seedClass6Odia();
    await seedClass6OdiaOdia();

    console.log("\n" + "=" .repeat(50));
    console.log("🎉 CLASS 6 SEEDING COMPLETED SUCCESSFULLY!");
    console.log("=" .repeat(50));
    
    console.log("\n📊 SUMMARY:");
    console.log("├── Mathematics: 3 quizzes, 30 questions");
    console.log("├── Science: 3 quizzes, 30 questions");
    console.log("├── Social Studies: 3 quizzes, 30 questions");
    console.log("├── English: 3 quizzes, 30 questions");
    console.log("├── Hindi: 3 quizzes, 30 questions");
    console.log("└── Odia: 3 quizzes, 30 questions (EN) + 3 quizzes, 30 questions (OD)");
    console.log("\n🎯 TOTAL: 21 quizzes, 210 questions");
    console.log("🌐 Languages: English & Odia supported");
    console.log("📈 Grade: Class 6");
    console.log("⭐ All quizzes published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass6Complete();
}

export default seedClass6Complete;
