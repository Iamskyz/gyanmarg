import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass10MathematicsOdia from "./class10_mathematics_odia.js";
import seedClass10ScienceOdia from "./class10_science_odia.js";
import seedClass10SocialStudiesOdia from "./class10_social_studies_odia.js";
import seedClass10EnglishOdia from "./class10_english_odia.js";
import seedClass10HindiOdia from "./class10_hindi_odia.js";
import seedClass10OdiaOdia from "./class10_odia_odia.js";

dotenv.config();

const seedClass10CompleteOdia = async () => {
  try {
    console.log("🚀 Starting Class 10 Complete Odia Language Seeding...");
    console.log("=".repeat(60));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding All Class 10 Subjects in Odia Language...");

    await seedClass10MathematicsOdia();
    await seedClass10ScienceOdia();
    await seedClass10SocialStudiesOdia();
    await seedClass10EnglishOdia();
    await seedClass10HindiOdia();
    await seedClass10OdiaOdia();

    console.log("\n" + "=".repeat(60));
    console.log("🎉 CLASS 10 ODIA LANGUAGE SEEDING COMPLETED!");
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
    console.log("📈 Grade: Class 10");
    console.log("⭐ Status: All published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Odia seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass10CompleteOdia();
}

export default seedClass10CompleteOdia;
