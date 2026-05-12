import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedClass12CommerceAccountancyOdia } from "./class12_commerce_accountancy_odia.js";
import { seedClass12CommerceBusinessStudiesOdia } from "./class12_commerce_business_studies_odia.js";
import { seedClass12CommerceEconomicsOdia } from "./class12_commerce_economics_odia.js";
import { seedClass12CommerceMathematicsOdia } from "./class12_commerce_mathematics_odia.js";
import { seedClass12CommerceEnglishOdia } from "./class12_commerce_english_odia.js";
import { seedClass12CommerceOdiaOdia } from "./class12_commerce_odia_odia.js";

dotenv.config();

const seedClass12CommerceCompleteOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 12 Commerce (Odia) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding Accountancy (Odia)...");
    results.push(await seedClass12CommerceAccountancyOdia());

    console.log("2/6 - Seeding Business Studies (Odia)...");
    results.push(await seedClass12CommerceBusinessStudiesOdia());

    console.log("3/6 - Seeding Economics (Odia)...");
    results.push(await seedClass12CommerceEconomicsOdia());

    console.log("4/6 - Seeding Mathematics (Odia)...");
    results.push(await seedClass12CommerceMathematicsOdia());

    console.log("5/6 - Seeding English (Odia)...");
    results.push(await seedClass12CommerceEnglishOdia());

    console.log("6/6 - Seeding Odia (Odia)...");
    results.push(await seedClass12CommerceOdiaOdia());

    console.log("\n=== Class 12 Commerce (Odia) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 12 Commerce (Odia):", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass12CommerceCompleteOdia().then(() => process.exit(0));
}

export { seedClass12CommerceCompleteOdia };
