import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceBusinessStudies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Nature and Purpose of Business
    const bsQuiz1 = await Quiz.create({
      title: "Nature and Purpose of Business",
      subject: "Business Studies",
      category: "Business Fundamentals",
      chapter: "Nature and Purpose of Business",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: bsQuiz1._id, questionText: "What is the primary objective of a business?", options: ["Social service", "Earning profit", "Providing employment", "Paying taxes"], correctAnswer: 1, marks: 1, explanation: "The primary objective of business is to earn profit by satisfying customer needs." },
      { quiz: bsQuiz1._id, questionText: "Which is NOT a characteristic of business?", options: ["Dealing in goods/services", "Profit motive", "Risk and uncertainty", "Fixed salary income"], correctAnswer: 3, marks: 1, explanation: "Fixed salary is a feature of employment, not business." },
      { quiz: bsQuiz1._id, questionText: "What is 'commerce'?", options: ["Manufacturing goods", "Activities related to trade and auxiliaries to trade", "Only buying goods", "Only selling goods"], correctAnswer: 1, marks: 1, explanation: "Commerce includes trade and all activities that facilitate trade." },
      { quiz: bsQuiz1._id, questionText: "Which is an auxiliary to trade?", options: ["Manufacturing", "Banking and Insurance", "Farming", "Mining"], correctAnswer: 1, marks: 1, explanation: "Banking, insurance, transport, warehousing are auxiliaries that support trade." },
      { quiz: bsQuiz1._id, questionText: "What is 'industry'?", options: ["Buying and selling", "Production/processing of goods", "Advertising", "Banking"], correctAnswer: 1, marks: 1, explanation: "Industry involves extraction, production, or processing of goods." },
      { quiz: bsQuiz1._id, questionText: "Which type of industry extracts products from nature?", options: ["Manufacturing", "Extractive industry", "Genetic industry", "Construction"], correctAnswer: 1, marks: 1, explanation: "Extractive industries extract products from natural sources (mining, fishing)." },
      { quiz: bsQuiz1._id, questionText: "Business risk means:", options: ["Guaranteed loss", "Possibility of inadequate profit or loss", "No profit", "Fixed income"], correctAnswer: 1, marks: 1, explanation: "Business risk is the chance of inadequate profits or losses due to uncertainties." },
      { quiz: bsQuiz1._id, questionText: "Which is a non-economic activity?", options: ["Running a shop", "Teaching in school for salary", "Helping poor out of compassion", "Working in factory"], correctAnswer: 2, marks: 1, explanation: "Activities done for love, affection, or charity without economic motive are non-economic." },
      { quiz: bsQuiz1._id, questionText: "What is 'trade'?", options: ["Manufacturing", "Buying and selling of goods", "Transport", "Insurance"], correctAnswer: 1, marks: 1, explanation: "Trade is the exchange (buying and selling) of goods and services." },
      { quiz: bsQuiz1._id, questionText: "E-business refers to:", options: ["Traditional business", "Conducting business using internet/electronic means", "Export business", "Government business"], correctAnswer: 1, marks: 1, explanation: "E-business uses internet and electronic technology for business operations." },
    ]);

    // Subcategory 2: Forms of Business Organisation
    const bsQuiz2 = await Quiz.create({
      title: "Forms of Business Organisation",
      subject: "Business Studies",
      category: "Business Fundamentals",
      chapter: "Forms of Business Organisation",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: bsQuiz2._id, questionText: "What is a sole proprietorship?", options: ["Business owned by government", "Business owned and managed by one person", "Business owned by partners", "Business owned by shareholders"], correctAnswer: 1, marks: 1, explanation: "Sole proprietorship is owned, managed, and controlled by a single individual." },
      { quiz: bsQuiz2._id, questionText: "Maximum number of partners in a partnership firm (non-banking)?", options: ["10", "20", "50", "100"], correctAnswer: 2, marks: 1, explanation: "As per Companies Act 2013, maximum 50 partners are allowed." },
      { quiz: bsQuiz2._id, questionText: "What is a 'sleeping partner'?", options: ["Partner who sleeps at work", "Partner who invests but doesn't participate in management", "Partner who manages daily", "Partner who has left"], correctAnswer: 1, marks: 1, explanation: "Sleeping/dormant partner contributes capital but doesn't participate in management." },
      { quiz: bsQuiz2._id, questionText: "Minimum members to form a public company?", options: ["2", "5", "7", "10"], correctAnswer: 2, marks: 1, explanation: "A public company requires minimum 7 members to incorporate." },
      { quiz: bsQuiz2._id, questionText: "What is 'limited liability'?", options: ["Unlimited personal risk", "Liability limited to the amount invested/guaranteed", "No liability at all", "Liability only for directors"], correctAnswer: 1, marks: 1, explanation: "Members' liability is limited to their investment or guarantee amount." },
      { quiz: bsQuiz2._id, questionText: "Which business form has perpetual succession?", options: ["Sole proprietorship", "Partnership", "Company", "HUF"], correctAnswer: 2, marks: 1, explanation: "A company continues to exist regardless of changes in membership." },
      { quiz: bsQuiz2._id, questionText: "Cooperative society is based on:", options: ["Profit maximization", "Mutual help and voluntary association", "Government control", "Single ownership"], correctAnswer: 1, marks: 1, explanation: "Cooperatives are formed for mutual benefit with voluntary membership." },
      { quiz: bsQuiz2._id, questionText: "What is a Joint Hindu Family business?", options: ["Partnership firm", "Business governed by Hindu law, managed by Karta", "Company", "Cooperative"], correctAnswer: 1, marks: 1, explanation: "HUF business is governed by Hindu law and managed by the eldest member (Karta)." },
      { quiz: bsQuiz2._id, questionText: "Minimum members for a private company?", options: ["1", "2", "7", "10"], correctAnswer: 1, marks: 1, explanation: "A private company requires minimum 2 members." },
      { quiz: bsQuiz2._id, questionText: "Which document is called the 'constitution' of a company?", options: ["Articles of Association", "Memorandum of Association", "Prospectus", "Certificate of Incorporation"], correctAnswer: 1, marks: 1, explanation: "Memorandum of Association defines the company's scope, powers, and objectives." },
    ]);

    // Subcategory 3: Business Services
    const bsQuiz3 = await Quiz.create({
      title: "Business Services - Banking and Insurance",
      subject: "Business Studies",
      category: "Business Services",
      chapter: "Business Services",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: bsQuiz3._id, questionText: "What is the primary function of a commercial bank?", options: ["Printing currency", "Accepting deposits and lending money", "Regulating other banks", "Foreign trade only"], correctAnswer: 1, marks: 1, explanation: "Commercial banks accept deposits from public and provide loans." },
      { quiz: bsQuiz3._id, questionText: "What is insurance based on?", options: ["Gambling", "Principle of pooling of risks", "Charity", "Government subsidy"], correctAnswer: 1, marks: 1, explanation: "Insurance pools risks of many to compensate the few who suffer losses." },
      { quiz: bsQuiz3._id, questionText: "Which is NOT a type of bank account?", options: ["Savings Account", "Current Account", "Fixed Deposit", "Insurance Account"], correctAnswer: 3, marks: 1, explanation: "Insurance Account is not a type of bank account." },
      { quiz: bsQuiz3._id, questionText: "What is 'premium' in insurance?", options: ["Bonus amount", "Amount paid periodically by insured to insurer", "Claim amount", "Profit"], correctAnswer: 1, marks: 1, explanation: "Premium is the periodic payment made by the policyholder to the insurance company." },
      { quiz: bsQuiz3._id, questionText: "Life insurance is a contract of:", options: ["Indemnity", "Guarantee", "Utmost good faith and assurance", "Sale"], correctAnswer: 2, marks: 1, explanation: "Life insurance is a contract of assurance based on utmost good faith." },
      { quiz: bsQuiz3._id, questionText: "What is a 'cheque'?", options: ["Promissory note", "Unconditional order to bank to pay a specified sum", "Receipt", "Invoice"], correctAnswer: 1, marks: 1, explanation: "A cheque is an unconditional written order to a bank to pay a certain amount." },
      { quiz: bsQuiz3._id, questionText: "What is warehousing?", options: ["Manufacturing", "Storing goods until they are needed", "Selling goods", "Transporting goods"], correctAnswer: 1, marks: 1, explanation: "Warehousing provides storage facilities for goods until they are required." },
      { quiz: bsQuiz3._id, questionText: "Which principle states that insured cannot profit from insurance?", options: ["Utmost good faith", "Principle of Indemnity", "Insurable interest", "Subrogation"], correctAnswer: 1, marks: 1, explanation: "Indemnity ensures the insured is compensated only for actual loss, not profit." },
      { quiz: bsQuiz3._id, questionText: "What is 'e-banking'?", options: ["Traditional banking", "Banking services through electronic/internet channels", "Export banking", "Only ATM services"], correctAnswer: 1, marks: 1, explanation: "E-banking provides banking services through internet, mobile, and electronic means." },
      { quiz: bsQuiz3._id, questionText: "Transport removes which hindrance of trade?", options: ["Time", "Place/distance", "Risk", "Information"], correctAnswer: 1, marks: 1, explanation: "Transport removes the hindrance of place by moving goods from production to consumption point." },
    ]);

    console.log("✓ Class 11 Commerce - Business Studies: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceBusinessStudies;
