import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass9MathematicsOdia from "./class9_mathematics_odia.js";
import seedClass9ScienceOdia from "./class9_science_odia.js";
import seedClass9SocialStudiesOdia from "./class9_social_studies_odia.js";
import seedClass9EnglishOdia from "./class9_english_odia.js";
import seedClass9HindiOdia from "./class9_hindi_odia.js";
import seedClass9OdiaOdia from "./class9_odia_odia.js";

dotenv.config();

const seedClass9CompleteOdia = async () => {
  try {
    console.log("🚀 Starting Class 9 Complete Odia Language Seeding...");
    console.log("=".repeat(60));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding All Class 9 Subjects in Odia Language...");

    await seedClass9MathematicsOdia();
    await seedClass9ScienceOdia();
    await seedClass9SocialStudiesOdia();
    await seedClass9EnglishOdia();
    await seedClass9HindiOdia();
    await seedClass9OdiaOdia();

    console.log("\n" + "=".repeat(60));
    console.log("🎉 CLASS 9 ODIA LANGUAGE SEEDING COMPLETED!");
    console.log("=".repeat(60));

    console.log("\n📊 ODIA LANGUAGE SUMMARY:");
    console.log("├── Mathematics (ଗଣିତ): 3 quizzes, 30 questions");
    console.log("├── Science (ବିଜ୍ଞାନ): 3 quizzes, 30 questions");
    console.log("├── Social Studies (ସାମାଜିକ ବିଜ୍ଞାନ): 3 quizzes, 30 questions");
    console.log("├── English (ଇଂରାଜୀ): 3 quizzes, 30 questions");
    console.log("├── Hindi (ହିନ୍ଦୀ): 3 quizzes, 30 questions");
    console.log("└── Odia (ଓଡ଼ିଆ): 3 quizzes, 30 questions");
    console.log("\n🎯 TOTAL ODIA CONTENT:");
    console.log("📝 Quizzes: 18");
    console.log("❓ Questions: 180");
    console.log("🌐 Language: ଓଡ଼ିଆ (od)");
    console.log("📈 Grade: Class 9");
    console.log("⭐ Status: All published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Odia seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass9CompleteOdia();
}

export default seedClass9CompleteOdia;
