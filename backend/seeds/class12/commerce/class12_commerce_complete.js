import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedClass12CommerceAccountancy } from "./class12_commerce_accountancy.js";
import { seedClass12CommerceBusinessStudies } from "./class12_commerce_business_studies.js";
import { seedClass12CommerceEconomics } from "./class12_commerce_economics.js";
import { seedClass12CommerceMathematics } from "./class12_commerce_mathematics.js";
import { seedClass12CommerceEnglish } from "./class12_commerce_english.js";
import { seedClass12CommerceOdia } from "./class12_commerce_odia.js";

dotenv.config();

const seedClass12CommerceComplete = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 12 Commerce (English) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding Accountancy...");
    results.push(await seedClass12CommerceAccountancy());

    console.log("2/6 - Seeding Business Studies...");
    results.push(await seedClass12CommerceBusinessStudies());

    console.log("3/6 - Seeding Economics...");
    results.push(await seedClass12CommerceEconomics());

    console.log("4/6 - Seeding Mathematics...");
    results.push(await seedClass12CommerceMathematics());

    console.log("5/6 - Seeding English...");
    results.push(await seedClass12CommerceEnglish());

    console.log("6/6 - Seeding Odia...");
    results.push(await seedClass12CommerceOdia());

    console.log("\n=== Class 12 Commerce (English) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 12 Commerce:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass12CommerceComplete().then(() => process.exit(0));
}

export { seedClass12CommerceComplete };
