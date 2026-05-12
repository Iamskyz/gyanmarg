import mongoose from "mongoose";
import dotenv from "dotenv";
import seedClass11CommerceAccountancyOdia from "./class11_commerce_accountancy_odia.js";
import seedClass11CommerceBusinessStudiesOdia from "./class11_commerce_business_studies_odia.js";
import seedClass11CommerceEconomicsOdia from "./class11_commerce_economics_odia.js";
import seedClass11CommerceMathematicsOdia from "./class11_commerce_mathematics_odia.js";
import seedClass11CommerceEnglishOdia from "./class11_commerce_english_odia.js";
import seedClass11CommerceOdiaOdia from "./class11_commerce_odia_odia.js";

dotenv.config();

const seedClass11CommerceCompleteOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 11 Commerce (Odia) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding Accountancy (Odia)...");
    results.push(await seedClass11CommerceAccountancyOdia());

    console.log("2/6 - Seeding Business Studies (Odia)...");
    results.push(await seedClass11CommerceBusinessStudiesOdia());

    console.log("3/6 - Seeding Economics (Odia)...");
    results.push(await seedClass11CommerceEconomicsOdia());

    console.log("4/6 - Seeding Mathematics (Odia)...");
    results.push(await seedClass11CommerceMathematicsOdia());

    console.log("5/6 - Seeding English (Odia)...");
    results.push(await seedClass11CommerceEnglishOdia());

    console.log("6/6 - Seeding Odia (Odia)...");
    results.push(await seedClass11CommerceOdiaOdia());

    console.log("\n=== Class 11 Commerce (Odia) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 11 Commerce (Odia):", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass11CommerceCompleteOdia().then(() => process.exit(0));
}

export { seedClass11CommerceCompleteOdia };
