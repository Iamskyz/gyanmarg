import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass7MathematicsOdia from "./class7_mathematics_odia.js";
import seedClass7ScienceOdia from "./class7_science_odia.js";
import seedClass7SocialStudiesOdia from "./class7_social_studies_odia.js";
import seedClass7EnglishOdia from "./class7_english_odia.js";
import seedClass7HindiOdia from "./class7_hindi_odia.js";
import seedClass7OdiaOdia from "./class7_odia_odia.js";

dotenv.config();

const seedClass7CompleteOdia = async () => {
  try {
    console.log("🚀 Starting Class 7 Complete Odia Language Seeding...");
    console.log("=".repeat(60));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding All Class 7 Subjects in Odia Language...");

    await seedClass7MathematicsOdia();
    await seedClass7ScienceOdia();
    await seedClass7SocialStudiesOdia();
    await seedClass7EnglishOdia();
    await seedClass7HindiOdia();
    await seedClass7OdiaOdia();

    console.log("\n" + "=".repeat(60));
    console.log("🎉 CLASS 7 ODIA LANGUAGE SEEDING COMPLETED!");
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
    console.log("📈 Grade: Class 7");
    console.log("⭐ Status: All published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Odia seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass7CompleteOdia();
}

export default seedClass7CompleteOdia;
