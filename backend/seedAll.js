import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import Quiz from "./models/Quiz.js";
import Question from "./models/Question.js";
import Game from "./models/Game.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

// Class 6
import seedClass6Mathematics from "./seeds/class6/class6_mathematics.js";
import seedClass6Science from "./seeds/class6/class6_science.js";
import seedClass6SocialStudies from "./seeds/class6/class6_social_studies.js";
import seedClass6English from "./seeds/class6/class6_english.js";
import seedClass6Hindi from "./seeds/class6/class6_hindi.js";
import seedClass6Odia from "./seeds/class6/class6_odia.js";
import seedClass6MathematicsOdia from "./seeds/class6/class6_mathematics_odia.js";
import seedClass6ScienceOdia from "./seeds/class6/class6_science_odia.js";
import seedClass6SocialStudiesOdia from "./seeds/class6/class6_social_studies_odia.js";
import seedClass6EnglishOdia from "./seeds/class6/class6_english_odia.js";
import seedClass6HindiOdia from "./seeds/class6/class6_hindi_odia.js";
import seedClass6OdiaOdia from "./seeds/class6/class6_odia_odia.js";

// Class 7
import seedClass7Mathematics from "./seeds/class7/class7_mathematics.js";
import seedClass7Science from "./seeds/class7/class7_science.js";
import seedClass7SocialStudies from "./seeds/class7/class7_social_studies.js";
import seedClass7English from "./seeds/class7/class7_english.js";
import seedClass7Hindi from "./seeds/class7/class7_hindi.js";
import seedClass7Odia from "./seeds/class7/class7_odia.js";
import seedClass7MathematicsOdia from "./seeds/class7/class7_mathematics_odia.js";
import seedClass7ScienceOdia from "./seeds/class7/class7_science_odia.js";
import seedClass7SocialStudiesOdia from "./seeds/class7/class7_social_studies_odia.js";
import seedClass7EnglishOdia from "./seeds/class7/class7_english_odia.js";
import seedClass7HindiOdia from "./seeds/class7/class7_hindi_odia.js";
import seedClass7OdiaOdia from "./seeds/class7/class7_odia_odia.js";

// Class 8
import seedClass8Mathematics from "./seeds/class8/class8_mathematics.js";
import seedClass8Science from "./seeds/class8/class8_science.js";
import seedClass8SocialStudies from "./seeds/class8/class8_social_studies.js";
import seedClass8English from "./seeds/class8/class8_english.js";
import seedClass8Hindi from "./seeds/class8/class8_hindi.js";
import seedClass8Odia from "./seeds/class8/class8_odia.js";
import seedClass8MathematicsOdia from "./seeds/class8/class8_mathematics_odia.js";
import seedClass8ScienceOdia from "./seeds/class8/class8_science_odia.js";
import seedClass8SocialStudiesOdia from "./seeds/class8/class8_social_studies_odia.js";
import seedClass8EnglishOdia from "./seeds/class8/class8_english_odia.js";
import seedClass8HindiOdia from "./seeds/class8/class8_hindi_odia.js";
import seedClass8OdiaOdia from "./seeds/class8/class8_odia_odia.js";

// Class 9
import seedClass9Mathematics from "./seeds/class9/class9_mathematics.js";
import seedClass9Science from "./seeds/class9/class9_science.js";
import seedClass9SocialStudies from "./seeds/class9/class9_social_studies.js";
import seedClass9English from "./seeds/class9/class9_english.js";
import seedClass9Hindi from "./seeds/class9/class9_hindi.js";
import seedClass9Odia from "./seeds/class9/class9_odia.js";
import seedClass9MathematicsOdia from "./seeds/class9/class9_mathematics_odia.js";
import seedClass9ScienceOdia from "./seeds/class9/class9_science_odia.js";
import seedClass9SocialStudiesOdia from "./seeds/class9/class9_social_studies_odia.js";
import seedClass9EnglishOdia from "./seeds/class9/class9_english_odia.js";
import seedClass9HindiOdia from "./seeds/class9/class9_hindi_odia.js";
import seedClass9OdiaOdia from "./seeds/class9/class9_odia_odia.js";

// Class 10
import seedClass10Mathematics from "./seeds/class10/class10_mathematics.js";
import seedClass10Science from "./seeds/class10/class10_science.js";
import seedClass10SocialStudies from "./seeds/class10/class10_social_studies.js";
import seedClass10English from "./seeds/class10/class10_english.js";
import seedClass10Hindi from "./seeds/class10/class10_hindi.js";
import seedClass10Odia from "./seeds/class10/class10_odia.js";
import seedClass10MathematicsOdia from "./seeds/class10/class10_mathematics_odia.js";
import seedClass10ScienceOdia from "./seeds/class10/class10_science_odia.js";
import seedClass10SocialStudiesOdia from "./seeds/class10/class10_social_studies_odia.js";
import seedClass10EnglishOdia from "./seeds/class10/class10_english_odia.js";
import seedClass10HindiOdia from "./seeds/class10/class10_hindi_odia.js";
import seedClass10OdiaOdia from "./seeds/class10/class10_odia_odia.js";

// Class 11 Science
import seedClass11SciencePhysics from "./seeds/class11/science/class11_science_physics.js";
import seedClass11ScienceChemistry from "./seeds/class11/science/class11_science_chemistry.js";
import seedClass11ScienceBiology from "./seeds/class11/science/class11_science_biology.js";
import seedClass11ScienceMathematics from "./seeds/class11/science/class11_science_mathematics.js";
import seedClass11ScienceEnglish from "./seeds/class11/science/class11_science_english.js";
import seedClass11ScienceOdia from "./seeds/class11/science/class11_science_odia.js";
import seedClass11PhysicsOdia from "./seeds/class11/science/class11_science_physics_odia.js";
import seedClass11ChemistryOdia from "./seeds/class11/science/class11_science_chemistry_odia.js";
import seedClass11BiologyOdia from "./seeds/class11/science/class11_science_biology_odia.js";
import seedClass11ScienceMathematicsOdia from "./seeds/class11/science/class11_science_mathematics_odia.js";
import seedClass11ScienceEnglishOdia from "./seeds/class11/science/class11_science_english_odia.js";
import seedClass11ScienceOdiaOdia from "./seeds/class11/science/class11_science_odia_odia.js";

// Class 11 Commerce
import seedClass11CommerceAccountancy from "./seeds/class11/commerce/class11_commerce_accountancy.js";
import seedClass11CommerceBusinessStudies from "./seeds/class11/commerce/class11_commerce_business_studies.js";
import seedClass11CommerceEconomics from "./seeds/class11/commerce/class11_commerce_economics.js";
import seedClass11CommerceMathematics from "./seeds/class11/commerce/class11_commerce_mathematics.js";
import seedClass11CommerceEnglish from "./seeds/class11/commerce/class11_commerce_english.js";
import seedClass11CommerceOdia from "./seeds/class11/commerce/class11_commerce_odia.js";
import seedClass11CommerceAccountancyOdia from "./seeds/class11/commerce/class11_commerce_accountancy_odia.js";
import seedClass11CommerceBusinessStudiesOdia from "./seeds/class11/commerce/class11_commerce_business_studies_odia.js";
import seedClass11CommerceEconomicsOdia from "./seeds/class11/commerce/class11_commerce_economics_odia.js";
import seedClass11CommerceMathematicsOdia from "./seeds/class11/commerce/class11_commerce_mathematics_odia.js";
import seedClass11CommerceEnglishOdia from "./seeds/class11/commerce/class11_commerce_english_odia.js";
import seedClass11CommerceOdiaOdia from "./seeds/class11/commerce/class11_commerce_odia_odia.js";

// Class 11 Arts
import { seedClass11ArtsHistory } from "./seeds/class11/arts/class11_arts_history.js";
import { seedClass11ArtsPoliticalScience } from "./seeds/class11/arts/class11_arts_political_science.js";
import { seedClass11ArtsGeography } from "./seeds/class11/arts/class11_arts_geography.js";
import { seedClass11ArtsEconomics } from "./seeds/class11/arts/class11_arts_economics.js";
import { seedClass11ArtsEnglish } from "./seeds/class11/arts/class11_arts_english.js";
import { seedClass11ArtsOdia } from "./seeds/class11/arts/class11_arts_odia.js";
import { seedClass11ArtsHistoryOdia } from "./seeds/class11/arts/class11_arts_history_odia.js";
import { seedClass11ArtsPoliticalScienceOdia } from "./seeds/class11/arts/class11_arts_political_science_odia.js";
import { seedClass11ArtsGeographyOdia } from "./seeds/class11/arts/class11_arts_geography_odia.js";
import { seedClass11ArtsEconomicsOdia } from "./seeds/class11/arts/class11_arts_economics_odia.js";
import { seedClass11ArtsEnglishOdia } from "./seeds/class11/arts/class11_arts_english_odia.js";
import { seedClass11ArtsOdiaOdia } from "./seeds/class11/arts/class11_arts_odia_odia.js";

// Class 12 Science
import { seedClass12SciencePhysics } from "./seeds/class12/science/class12_science_physics.js";
import { seedClass12ScienceChemistry } from "./seeds/class12/science/class12_science_chemistry.js";
import { seedClass12ScienceBiology } from "./seeds/class12/science/class12_science_biology.js";
import { seedClass12ScienceMathematics } from "./seeds/class12/science/class12_science_mathematics.js";
import { seedClass12ScienceEnglish } from "./seeds/class12/science/class12_science_english.js";
import { seedClass12ScienceOdia } from "./seeds/class12/science/class12_science_odia.js";
import { seedClass12SciencePhysicsOdia } from "./seeds/class12/science/class12_science_physics_odia.js";
import { seedClass12ScienceChemistryOdia } from "./seeds/class12/science/class12_science_chemistry_odia.js";
import { seedClass12ScienceBiologyOdia } from "./seeds/class12/science/class12_science_biology_odia.js";
import { seedClass12ScienceMathematicsOdia } from "./seeds/class12/science/class12_science_mathematics_odia.js";
import { seedClass12ScienceEnglishOdia } from "./seeds/class12/science/class12_science_english_odia.js";
import { seedClass12ScienceOdiaOdia } from "./seeds/class12/science/class12_science_odia_odia.js";

// Class 12 Commerce
import { seedClass12CommerceAccountancy } from "./seeds/class12/commerce/class12_commerce_accountancy.js";
import { seedClass12CommerceBusinessStudies } from "./seeds/class12/commerce/class12_commerce_business_studies.js";
import { seedClass12CommerceEconomics } from "./seeds/class12/commerce/class12_commerce_economics.js";
import { seedClass12CommerceMathematics } from "./seeds/class12/commerce/class12_commerce_mathematics.js";
import { seedClass12CommerceEnglish } from "./seeds/class12/commerce/class12_commerce_english.js";
import { seedClass12CommerceOdia } from "./seeds/class12/commerce/class12_commerce_odia.js";
import { seedClass12CommerceAccountancyOdia } from "./seeds/class12/commerce/class12_commerce_accountancy_odia.js";
import { seedClass12CommerceBusinessStudiesOdia } from "./seeds/class12/commerce/class12_commerce_business_studies_odia.js";
import { seedClass12CommerceEconomicsOdia } from "./seeds/class12/commerce/class12_commerce_economics_odia.js";
import { seedClass12CommerceMathematicsOdia } from "./seeds/class12/commerce/class12_commerce_mathematics_odia.js";
import { seedClass12CommerceEnglishOdia } from "./seeds/class12/commerce/class12_commerce_english_odia.js";
import { seedClass12CommerceOdiaOdia } from "./seeds/class12/commerce/class12_commerce_odia_odia.js";

// Class 12 Arts
import { seedClass12ArtsHistory } from "./seeds/class12/arts/class12_arts_history.js";
import { seedClass12ArtsPoliticalScience } from "./seeds/class12/arts/class12_arts_political_science.js";
import { seedClass12ArtsGeography } from "./seeds/class12/arts/class12_arts_geography.js";
import { seedClass12ArtsEconomics } from "./seeds/class12/arts/class12_arts_economics.js";
import { seedClass12ArtsEnglish } from "./seeds/class12/arts/class12_arts_english.js";
import { seedClass12ArtsOdia } from "./seeds/class12/arts/class12_arts_odia.js";
import { seedClass12ArtsHistoryOdia } from "./seeds/class12/arts/class12_arts_history_odia.js";
import { seedClass12ArtsPoliticalScienceOdia } from "./seeds/class12/arts/class12_arts_political_science_odia.js";
import { seedClass12ArtsGeographyOdia } from "./seeds/class12/arts/class12_arts_geography_odia.js";
import { seedClass12ArtsEconomicsOdia } from "./seeds/class12/arts/class12_arts_economics_odia.js";
import { seedClass12ArtsEnglishOdia } from "./seeds/class12/arts/class12_arts_english_odia.js";
import { seedClass12ArtsOdiaOdia } from "./seeds/class12/arts/class12_arts_odia_odia.js";

dotenv.config();

const seedAll = async () => {
  try {
    console.log("🚀 MASTER SEED RUNNER - GyanMarg Quiz Platform");
    console.log("=".repeat(60));

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB\n");

    // Clear ALL existing data
    await User.deleteMany({});
    await Quiz.deleteMany({});
    await Question.deleteMany({});
    await Game.deleteMany({});
    console.log("🗑️  Cleared all existing data\n");

    // Create Admin & Student users
    const adminPass = await bcrypt.hash("admin123", 10);
    const admin = await User.create({
      name: "Admin",
      email: "admin@gyanmarg.com",
      password: adminPass,
      role: "admin",
    });

    const studentPass = await bcrypt.hash("student123", 10);
    await User.create({
      name: "Rahul Sharma",
      email: "rahul@student.com",
      password: studentPass,
      role: "student",
      grade: 10,
      language: "en",
      xp: 0,
      level: 1,
      streak: 0,
      badges: [],
    });
    console.log("👤 Users created\n");

    // Create Games
    await Game.insertMany([
      { title: "Math Speed Challenge", description: "Solve arithmetic problems as fast as you can!", type: "math_sprint", grade: 10, difficulty: "medium", xpReward: 10, isPublished: true, createdBy: admin._id },
      { title: "Science Memory Cards", description: "Match scientific terms with their definitions", type: "memory", grade: 10, difficulty: "easy", xpReward: 8, isPublished: true, createdBy: admin._id },
      { title: "Typing Master", description: "Type scientific formulas and definitions quickly", type: "typing", grade: 10, difficulty: "medium", xpReward: 10, isPublished: true, createdBy: admin._id },
      { title: "Word Scramble - History", description: "Unscramble important historical terms", type: "word_puzzle", grade: 9, difficulty: "easy", xpReward: 6, isPublished: true, createdBy: admin._id },
      { title: "Quick Maths", description: "Mental math challenges for beginners", type: "math_sprint", grade: 6, difficulty: "easy", xpReward: 5, isPublished: true, createdBy: admin._id },
      { title: "Element Memory", description: "Match elements with their symbols", type: "memory", grade: 9, difficulty: "hard", xpReward: 15, isPublished: true, createdBy: admin._id },
    ]);
    console.log("🎮 Games created\n");

    // ========== CLASS 6 ==========
    console.log("📘 CLASS 6 (English)...");
    await seedClass6Mathematics();
    await seedClass6Science();
    await seedClass6SocialStudies();
    await seedClass6English();
    await seedClass6Hindi();
    await seedClass6Odia();
    console.log("📗 CLASS 6 (Odia)...");
    await seedClass6MathematicsOdia();
    await seedClass6ScienceOdia();
    await seedClass6SocialStudiesOdia();
    await seedClass6EnglishOdia();
    await seedClass6HindiOdia();
    await seedClass6OdiaOdia();
    console.log("✅ Class 6 done\n");

    // ========== CLASS 7 ==========
    console.log("📘 CLASS 7 (English)...");
    await seedClass7Mathematics();
    await seedClass7Science();
    await seedClass7SocialStudies();
    await seedClass7English();
    await seedClass7Hindi();
    await seedClass7Odia();
    console.log("📗 CLASS 7 (Odia)...");
    await seedClass7MathematicsOdia();
    await seedClass7ScienceOdia();
    await seedClass7SocialStudiesOdia();
    await seedClass7EnglishOdia();
    await seedClass7HindiOdia();
    await seedClass7OdiaOdia();
    console.log("✅ Class 7 done\n");

    // ========== CLASS 8 ==========
    console.log("📘 CLASS 8 (English)...");
    await seedClass8Mathematics();
    await seedClass8Science();
    await seedClass8SocialStudies();
    await seedClass8English();
    await seedClass8Hindi();
    await seedClass8Odia();
    console.log("📗 CLASS 8 (Odia)...");
    await seedClass8MathematicsOdia();
    await seedClass8ScienceOdia();
    await seedClass8SocialStudiesOdia();
    await seedClass8EnglishOdia();
    await seedClass8HindiOdia();
    await seedClass8OdiaOdia();
    console.log("✅ Class 8 done\n");

    // ========== CLASS 9 ==========
    console.log("📘 CLASS 9 (English)...");
    await seedClass9Mathematics();
    await seedClass9Science();
    await seedClass9SocialStudies();
    await seedClass9English();
    await seedClass9Hindi();
    await seedClass9Odia();
    console.log("📗 CLASS 9 (Odia)...");
    await seedClass9MathematicsOdia();
    await seedClass9ScienceOdia();
    await seedClass9SocialStudiesOdia();
    await seedClass9EnglishOdia();
    await seedClass9HindiOdia();
    await seedClass9OdiaOdia();
    console.log("✅ Class 9 done\n");

    // ========== CLASS 10 ==========
    console.log("📘 CLASS 10 (English)...");
    await seedClass10Mathematics();
    await seedClass10Science();
    await seedClass10SocialStudies();
    await seedClass10English();
    await seedClass10Hindi();
    await seedClass10Odia();
    console.log("📗 CLASS 10 (Odia)...");
    await seedClass10MathematicsOdia();
    await seedClass10ScienceOdia();
    await seedClass10SocialStudiesOdia();
    await seedClass10EnglishOdia();
    await seedClass10HindiOdia();
    await seedClass10OdiaOdia();
    console.log("✅ Class 10 done\n");

    // ========== CLASS 11 SCIENCE ==========
    console.log("📘 CLASS 11 SCIENCE (English)...");
    await seedClass11SciencePhysics();
    await seedClass11ScienceChemistry();
    await seedClass11ScienceBiology();
    await seedClass11ScienceMathematics();
    await seedClass11ScienceEnglish();
    await seedClass11ScienceOdia();
    console.log("📗 CLASS 11 SCIENCE (Odia)...");
    await seedClass11PhysicsOdia();
    await seedClass11ChemistryOdia();
    await seedClass11BiologyOdia();
    await seedClass11ScienceMathematicsOdia();
    await seedClass11ScienceEnglishOdia();
    await seedClass11ScienceOdiaOdia();
    console.log("✅ Class 11 Science done\n");

    // ========== CLASS 11 COMMERCE ==========
    console.log("📘 CLASS 11 COMMERCE (English)...");
    await seedClass11CommerceAccountancy();
    await seedClass11CommerceBusinessStudies();
    await seedClass11CommerceEconomics();
    await seedClass11CommerceMathematics();
    await seedClass11CommerceEnglish();
    await seedClass11CommerceOdia();
    console.log("📗 CLASS 11 COMMERCE (Odia)...");
    await seedClass11CommerceAccountancyOdia();
    await seedClass11CommerceBusinessStudiesOdia();
    await seedClass11CommerceEconomicsOdia();
    await seedClass11CommerceMathematicsOdia();
    await seedClass11CommerceEnglishOdia();
    await seedClass11CommerceOdiaOdia();
    console.log("✅ Class 11 Commerce done\n");

    // ========== CLASS 11 ARTS ==========
    console.log("📘 CLASS 11 ARTS (English)...");
    await seedClass11ArtsHistory();
    await seedClass11ArtsPoliticalScience();
    await seedClass11ArtsGeography();
    await seedClass11ArtsEconomics();
    await seedClass11ArtsEnglish();
    await seedClass11ArtsOdia();
    console.log("📗 CLASS 11 ARTS (Odia)...");
    await seedClass11ArtsHistoryOdia();
    await seedClass11ArtsPoliticalScienceOdia();
    await seedClass11ArtsGeographyOdia();
    await seedClass11ArtsEconomicsOdia();
    await seedClass11ArtsEnglishOdia();
    await seedClass11ArtsOdiaOdia();
    console.log("✅ Class 11 Arts done\n");

    // ========== CLASS 12 SCIENCE ==========
    console.log("📘 CLASS 12 SCIENCE (English)...");
    await seedClass12SciencePhysics();
    await seedClass12ScienceChemistry();
    await seedClass12ScienceBiology();
    await seedClass12ScienceMathematics();
    await seedClass12ScienceEnglish();
    await seedClass12ScienceOdia();
    console.log("📗 CLASS 12 SCIENCE (Odia)...");
    await seedClass12SciencePhysicsOdia();
    await seedClass12ScienceChemistryOdia();
    await seedClass12ScienceBiologyOdia();
    await seedClass12ScienceMathematicsOdia();
    await seedClass12ScienceEnglishOdia();
    await seedClass12ScienceOdiaOdia();
    console.log("✅ Class 12 Science done\n");

    // ========== CLASS 12 COMMERCE ==========
    console.log("📘 CLASS 12 COMMERCE (English)...");
    await seedClass12CommerceAccountancy();
    await seedClass12CommerceBusinessStudies();
    await seedClass12CommerceEconomics();
    await seedClass12CommerceMathematics();
    await seedClass12CommerceEnglish();
    await seedClass12CommerceOdia();
    console.log("📗 CLASS 12 COMMERCE (Odia)...");
    await seedClass12CommerceAccountancyOdia();
    await seedClass12CommerceBusinessStudiesOdia();
    await seedClass12CommerceEconomicsOdia();
    await seedClass12CommerceMathematicsOdia();
    await seedClass12CommerceEnglishOdia();
    await seedClass12CommerceOdiaOdia();
    console.log("✅ Class 12 Commerce done\n");

    // ========== CLASS 12 ARTS ==========
    console.log("📘 CLASS 12 ARTS (English)...");
    await seedClass12ArtsHistory();
    await seedClass12ArtsPoliticalScience();
    await seedClass12ArtsGeography();
    await seedClass12ArtsEconomics();
    await seedClass12ArtsEnglish();
    await seedClass12ArtsOdia();
    console.log("📗 CLASS 12 ARTS (Odia)...");
    await seedClass12ArtsHistoryOdia();
    await seedClass12ArtsPoliticalScienceOdia();
    await seedClass12ArtsGeographyOdia();
    await seedClass12ArtsEconomicsOdia();
    await seedClass12ArtsEnglishOdia();
    await seedClass12ArtsOdiaOdia();
    console.log("✅ Class 12 Arts done\n");

    // Final Summary
    const totalQuizzes = await Quiz.countDocuments();
    const totalQuestions = await Question.countDocuments();

    console.log("=".repeat(60));
    console.log("🎉 ALL SEEDING COMPLETED SUCCESSFULLY!");
    console.log("=".repeat(60));
    console.log(`\n📊 FINAL DATABASE STATS:`);
    console.log(`├── 👤 Users: 2 (1 admin + 1 student)`);
    console.log(`├── 📝 Quizzes: ${totalQuizzes}`);
    console.log(`├── ❓ Questions: ${totalQuestions}`);
    console.log(`├── 🎮 Games: 6`);
    console.log(`├── 🌐 Languages: English + Odia`);
    console.log(`└── 📈 Classes: 6, 7, 8, 9, 10, 11, 12`);
    console.log(`\n🔑 LOGIN CREDENTIALS:`);
    console.log(`   Admin:   admin@gyanmarg.com / admin123`);
    console.log(`   Student: rahul@student.com / student123`);

    await mongoose.connection.close();
    console.log("\n✅ MongoDB connection closed");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ SEEDING FAILED:", error.message);
    console.error(error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedAll();
