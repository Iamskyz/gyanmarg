import dotenv from "dotenv";
import mongoose from "mongoose";
import seedClass6MathematicsOdia from "./class6_mathematics_odia.js";
import seedClass6ScienceOdia from "./class6_science_odia.js";
import seedClass6SocialStudiesOdia from "./class6_social_studies_odia.js";
import seedClass6EnglishOdia from "./class6_english_odia.js";
import seedClass6HindiOdia from "./class6_hindi_odia.js";
import seedClass6OdiaOdia from "./class6_odia_odia.js";

dotenv.config();

const seedClass6CompleteOdia = async () => {
  try {
    console.log("🚀 Starting Class 6 Complete Odia Language Seeding...");
    console.log("=" .repeat(60));

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    console.log("\n📚 Seeding All Class 6 Subjects in Odia Language...");
    
    // Seed all subjects in Odia
    await seedClass6MathematicsOdia();
    await seedClass6ScienceOdia();
    await seedClass6SocialStudiesOdia();
    await seedClass6EnglishOdia();
    await seedClass6HindiOdia();
    await seedClass6OdiaOdia();

    console.log("\n" + "=" .repeat(60));
    console.log("🎉 CLASS 6 ODIA LANGUAGE SEEDING COMPLETED!");
    console.log("=" .repeat(60));
    
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
    console.log("📈 Grade: Class 6");
    console.log("⭐ Status: All published and ready!");
    
    console.log("\n🎊 NOW STUDENTS CAN ACCESS ALL SUBJECTS IN ODIA!");
    console.log("🔄 Users with Odia language preference will see all 180 questions");

    process.exit(0);
  } catch (error) {
    console.error("❌ Odia seeding failed:", error.message);
    console.error(error);
    process.exit(1);
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass6CompleteOdia();
}

export default seedClass6CompleteOdia;
