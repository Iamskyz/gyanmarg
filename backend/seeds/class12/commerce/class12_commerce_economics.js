import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceEconomics = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Macroeconomics - National Income",
      subject: "Economics",
      category: "Macroeconomics",
      chapter: "National Income Accounting",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "GDP at market price minus indirect taxes plus subsidies gives:", options: ["NNP", "GDP at factor cost", "GNP", "Personal income"], correctAnswer: 1, marks: 1, explanation: "GDP at FC = GDP at MP - Indirect Taxes + Subsidies." },
      { quiz: quiz1._id, questionText: "The circular flow of income involves:", options: ["Only firms", "Households and firms exchanging goods, services, and money", "Only government", "Only banks"], correctAnswer: 1, marks: 1, explanation: "Circular flow shows continuous exchange between households and firms." },
      { quiz: quiz1._id, questionText: "Transfer payments are:", options: ["Included in national income", "Not included in national income (no production)", "Part of GDP", "Factor income"], correctAnswer: 1, marks: 1, explanation: "Transfer payments (pensions, scholarships) don't involve production, so excluded from NI." },
      { quiz: quiz1._id, questionText: "GNP = GDP +:", options: ["Depreciation", "Net factor income from abroad", "Indirect taxes", "Subsidies"], correctAnswer: 1, marks: 1, explanation: "GNP = GDP + Net Factor Income from Abroad (NFIA)." },
      { quiz: quiz1._id, questionText: "Value added method avoids:", options: ["Taxation", "Double counting", "Inflation", "Deflation"], correctAnswer: 1, marks: 1, explanation: "Value added method counts only value added at each stage, avoiding double counting." },
      { quiz: quiz1._id, questionText: "Depreciation is also called:", options: ["Net investment", "Consumption of fixed capital", "Gross investment", "Transfer payment"], correctAnswer: 1, marks: 1, explanation: "Depreciation = Consumption of fixed capital (wear and tear of assets)." },
      { quiz: quiz1._id, questionText: "NNP at factor cost is also known as:", options: ["GDP", "National Income", "Personal Income", "Disposable Income"], correctAnswer: 1, marks: 1, explanation: "National Income = NNP at Factor Cost." },
      { quiz: quiz1._id, questionText: "Which is NOT a method of calculating national income?", options: ["Income method", "Expenditure method", "Profit method", "Value added method"], correctAnswer: 2, marks: 1, explanation: "The three methods are: Income, Expenditure, and Value Added (Product) method." },
      { quiz: quiz1._id, questionText: "Real GDP is measured at:", options: ["Current year prices", "Base year (constant) prices", "Future prices", "Average prices"], correctAnswer: 1, marks: 1, explanation: "Real GDP uses base year prices to eliminate inflation effect." },
      { quiz: quiz1._id, questionText: "GDP deflator =:", options: ["Real GDP / Nominal GDP × 100", "Nominal GDP / Real GDP × 100", "GDP / GNP × 100", "NNP / GDP × 100"], correctAnswer: 1, marks: 1, explanation: "GDP Deflator = (Nominal GDP / Real GDP) × 100, measures price level changes." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Money, Banking and Government Budget",
      subject: "Economics",
      category: "Macroeconomics",
      chapter: "Money and Banking",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Credit creation by commercial banks is limited by:", options: ["Government orders", "Cash Reserve Ratio (CRR)", "Customer demand only", "Number of branches"], correctAnswer: 1, marks: 1, explanation: "CRR limits how much banks can lend — higher CRR means less credit creation." },
      { quiz: quiz2._id, questionText: "Repo rate is the rate at which:", options: ["Banks lend to public", "RBI lends to commercial banks", "Government borrows", "Banks lend to each other"], correctAnswer: 1, marks: 1, explanation: "Repo rate is the rate at which RBI lends short-term funds to commercial banks." },
      { quiz: quiz2._id, questionText: "Revenue deficit =:", options: ["Total expenditure - Total receipts", "Revenue expenditure - Revenue receipts", "Capital expenditure - Capital receipts", "Fiscal deficit - Interest payments"], correctAnswer: 1, marks: 1, explanation: "Revenue deficit = Revenue Expenditure - Revenue Receipts." },
      { quiz: quiz2._id, questionText: "Fiscal deficit =:", options: ["Revenue deficit + Capital deficit", "Total expenditure - Total receipts (excluding borrowings)", "Only revenue deficit", "Only primary deficit"], correctAnswer: 1, marks: 1, explanation: "Fiscal deficit = Total Expenditure - Total Receipts (excluding borrowings)." },
      { quiz: quiz2._id, questionText: "Primary deficit =:", options: ["Fiscal deficit + Interest payments", "Fiscal deficit - Interest payments", "Revenue deficit", "Budget deficit"], correctAnswer: 1, marks: 1, explanation: "Primary deficit = Fiscal deficit - Interest payments." },
      { quiz: quiz2._id, questionText: "Open market operations by RBI involve:", options: ["Printing money", "Buying/selling government securities", "Changing tax rates", "Lending to public"], correctAnswer: 1, marks: 1, explanation: "RBI buys/sells government securities to control money supply in the economy." },
      { quiz: quiz2._id, questionText: "Money multiplier =:", options: ["CRR × Deposits", "1 / CRR (or LRR)", "CRR + SLR", "Deposits / Loans"], correctAnswer: 1, marks: 1, explanation: "Money multiplier = 1/LRR, shows total credit created from initial deposit." },
      { quiz: quiz2._id, questionText: "Direct tax is:", options: ["Shifted to others", "Borne by the person on whom it is levied", "Indirect", "Optional"], correctAnswer: 1, marks: 1, explanation: "Direct tax (income tax) cannot be shifted — paid by the person on whom it's imposed." },
      { quiz: quiz2._id, questionText: "Deficit financing leads to:", options: ["Deflation", "Inflationary pressure", "No effect", "Reduced money supply"], correctAnswer: 1, marks: 1, explanation: "Deficit financing increases money supply, creating inflationary pressure." },
      { quiz: quiz2._id, questionText: "SLR (Statutory Liquidity Ratio) requires banks to maintain:", options: ["Cash only", "Liquid assets as percentage of deposits", "Gold only", "Foreign currency"], correctAnswer: 1, marks: 1, explanation: "SLR mandates banks to keep a percentage of deposits in liquid assets (cash, gold, securities)." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Balance of Payments and Exchange Rate",
      subject: "Economics",
      category: "International Economics",
      chapter: "Foreign Exchange and BOP",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Balance of Payments always:", options: ["Shows surplus", "Balances (equals zero)", "Shows deficit", "Is positive"], correctAnswer: 1, marks: 1, explanation: "BOP always balances as it records all international transactions (double-entry system)." },
      { quiz: quiz3._id, questionText: "Current account of BOP includes:", options: ["Capital transfers", "Trade in goods, services, and unilateral transfers", "Foreign investment", "Loans"], correctAnswer: 1, marks: 1, explanation: "Current account records trade in goods/services, income, and current transfers." },
      { quiz: quiz3._id, questionText: "Flexible exchange rate is determined by:", options: ["Government", "Market forces of demand and supply", "RBI only", "IMF"], correctAnswer: 1, marks: 1, explanation: "In flexible/floating system, exchange rate is determined by forex market forces." },
      { quiz: quiz3._id, questionText: "Devaluation of currency makes:", options: ["Imports cheaper", "Exports cheaper and more competitive", "No change", "Both expensive"], correctAnswer: 1, marks: 1, explanation: "Devaluation makes domestic goods cheaper for foreigners, boosting exports." },
      { quiz: quiz3._id, questionText: "Foreign exchange market is where:", options: ["Goods are traded", "Currencies are bought and sold", "Shares are traded", "Bonds are issued"], correctAnswer: 1, marks: 1, explanation: "Forex market facilitates buying and selling of different currencies." },
      { quiz: quiz3._id, questionText: "Trade deficit means:", options: ["Exports > Imports", "Imports > Exports", "Exports = Imports", "No trade"], correctAnswer: 1, marks: 1, explanation: "Trade deficit occurs when value of imports exceeds value of exports." },
      { quiz: quiz3._id, questionText: "Capital account of BOP includes:", options: ["Merchandise trade", "Foreign investment, loans, and banking capital", "Tourism receipts", "Remittances"], correctAnswer: 1, marks: 1, explanation: "Capital account records capital transfers, FDI, portfolio investment, and loans." },
      { quiz: quiz3._id, questionText: "Appreciation of domestic currency means:", options: ["Currency loses value", "Currency gains value against foreign currency", "No change", "Inflation increases"], correctAnswer: 1, marks: 1, explanation: "Appreciation means domestic currency can buy more foreign currency (stronger)." },
      { quiz: quiz3._id, questionText: "Managed floating exchange rate means:", options: ["Completely fixed", "Market-determined with occasional central bank intervention", "No government role", "Only government decides"], correctAnswer: 1, marks: 1, explanation: "Managed float allows market forces but central bank intervenes to prevent extreme volatility." },
      { quiz: quiz3._id, questionText: "Foreign exchange reserves are maintained by:", options: ["Commercial banks", "Central bank (RBI)", "Stock exchange", "Finance Ministry only"], correctAnswer: 1, marks: 1, explanation: "RBI maintains India's foreign exchange reserves for stability and trade." },
    ]);

    console.log("✓ Class 12 Commerce - Economics: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceEconomics };
