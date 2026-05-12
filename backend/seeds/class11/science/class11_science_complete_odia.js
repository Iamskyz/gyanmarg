import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass11PhysicsOdia from "./class11_science_physics_odia.js";
import seedClass11ChemistryOdia from "./class11_science_chemistry_odia.js";
import seedClass11BiologyOdia from "./class11_science_biology_odia.js";
import seedClass11MathematicsOdia from "./class11_science_mathematics_odia.js";
import seedClass11ScienceEnglishOdia from "./class11_science_english_odia.js";
import seedClass11ScienceOdiaOdia from "./class11_science_odia_odia.js";

dotenv.config();

const seedClass11ScienceCompleteOdia = async () => {
  try {
    console.log("🚀 Starting Class 11 Science Complete Odia Language Seeding...");
    console.log("=".repeat(60));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding All Class 11 Science Subjects in Odia Language...");

    await seedClass11PhysicsOdia();
    await seedClass11ChemistryOdia();
    await seedClass11BiologyOdia();
    await seedClass11MathematicsOdia();
    await seedClass11ScienceEnglishOdia();
    await seedClass11ScienceOdiaOdia();

    console.log("\n" + "=".repeat(60));
    console.log("🎉 CLASS 11 SCIENCE ODIA LANGUAGE SEEDING COMPLETED!");
    console.log("=".repeat(60));

    console.log("\n📊 ODIA LANGUAGE SUMMARY:");
    console.log("├── Physics (ପଦାର୍ଥ ବିଜ୍ଞାନ): 3 quizzes, 30 questions");
    console.log("├── Chemistry (ରସାୟନ ବିଜ୍ଞାନ): 3 quizzes, 30 questions");
    console.log("├── Biology (ଜୀବ ବିଜ୍ଞାନ): 3 quizzes, 30 questions");
    console.log("├── Mathematics (ଗଣିତ): 3 quizzes, 30 questions");
    console.log("├── English (ଇଂରାଜୀ): 3 quizzes, 30 questions");
    console.log("└── Odia (ଓଡ଼ିଆ): 3 quizzes, 30 questions");
    console.log("\n🎯 TOTAL ODIA CONTENT:");
    console.log("📝 Quizzes: 18");
    console.log("❓ Questions: 180");
    console.log("🌐 Language: ଓଡ଼ିଆ (od)");
    console.log("📈 Grade: Class 11 (Science)");
    console.log("⭐ Status: All published and ready!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Odia seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass11ScienceCompleteOdia();
}

export default seedClass11ScienceCompleteOdia;
