import mongoose from "mongoose";
import dotenv from "dotenv";
import seedClass11CommerceAccountancy from "./class11_commerce_accountancy.js";
import seedClass11CommerceBusinessStudies from "./class11_commerce_business_studies.js";
import seedClass11CommerceEconomics from "./class11_commerce_economics.js";
import seedClass11CommerceMathematics from "./class11_commerce_mathematics.js";
import seedClass11CommerceEnglish from "./class11_commerce_english.js";
import seedClass11CommerceOdia from "./class11_commerce_odia.js";

dotenv.config();

const seedClass11CommerceComplete = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("Starting Class 11 Commerce (English) complete seeding...\n");

    const results = [];

    console.log("1/6 - Seeding Accountancy...");
    results.push(await seedClass11CommerceAccountancy());

    console.log("2/6 - Seeding Business Studies...");
    results.push(await seedClass11CommerceBusinessStudies());

    console.log("3/6 - Seeding Economics...");
    results.push(await seedClass11CommerceEconomics());

    console.log("4/6 - Seeding Mathematics...");
    results.push(await seedClass11CommerceMathematics());

    console.log("5/6 - Seeding English...");
    results.push(await seedClass11CommerceEnglish());

    console.log("6/6 - Seeding Odia...");
    results.push(await seedClass11CommerceOdia());

    console.log("\n=== Class 11 Commerce (English) Seeding Complete ===");
    console.log(`Total quizzes created: ${results.reduce((sum, r) => sum + r.quizzes, 0)}`);
    console.log(`Total questions created: ${results.reduce((sum, r) => sum + r.questions, 0)}`);

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding Class 11 Commerce:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  seedClass11CommerceComplete().then(() => process.exit(0));
}

export { seedClass11CommerceComplete };
