import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass8MathematicsOdia from "./class8_mathematics_odia.js";
import seedClass8ScienceOdia from "./class8_science_odia.js";
import seedClass8SocialStudiesOdia from "./class8_social_studies_odia.js";
import seedClass8EnglishOdia from "./class8_english_odia.js";
import seedClass8HindiOdia from "./class8_hindi_odia.js";
import seedClass8OdiaOdia from "./class8_odia_odia.js";

dotenv.config();

const seedClass8CompleteOdia = async () => {
  try {
    console.log("🚀 Starting Class 8 Complete Odia Language Seeding...");
    console.log("=".repeat(60));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding All Class 8 Subjects in Odia Language...");

    await seedClass8MathematicsOdia();
    await seedClass8ScienceOdia();
    await seedClass8SocialStudiesOdia();
    await seedClass8EnglishOdia();
    await seedClass8HindiOdia();
    await seedClass8OdiaOdia();

    console.log("\n" + "=".repeat(60));
    console.log("🎉 CLASS 8 ODIA LANGUAGE SEEDING COMPLETED!");
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
    console.log("📈 Grade: Class 8");
    console.log("⭐ Status: All published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Odia seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass8CompleteOdia();
}

export default seedClass8CompleteOdia;
