import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceAccountancy = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Introduction to Accounting
    const accQuiz1 = await Quiz.create({
      title: "Introduction to Accounting",
      subject: "Accountancy",
      category: "Financial Accounting",
      chapter: "Introduction to Accounting",
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
      { quiz: accQuiz1._id, questionText: "What is the primary objective of accounting?", options: ["To earn profit", "To record, classify, and summarize financial transactions", "To pay taxes", "To manage employees"], correctAnswer: 1, marks: 1, explanation: "Accounting systematically records, classifies, and summarizes financial transactions." },
      { quiz: accQuiz1._id, questionText: "Who is known as the 'Father of Accounting'?", options: ["Adam Smith", "Luca Pacioli", "J.M. Keynes", "Karl Marx"], correctAnswer: 1, marks: 1, explanation: "Luca Pacioli introduced the double-entry system in 1494." },
      { quiz: accQuiz1._id, questionText: "Which accounting concept states that business is separate from its owner?", options: ["Going Concern", "Business Entity Concept", "Money Measurement", "Dual Aspect"], correctAnswer: 1, marks: 1, explanation: "Business Entity Concept treats business and owner as separate entities." },
      { quiz: accQuiz1._id, questionText: "What is the accounting equation?", options: ["Assets = Liabilities + Capital", "Assets = Liabilities - Capital", "Capital = Assets + Liabilities", "Liabilities = Assets + Capital"], correctAnswer: 0, marks: 1, explanation: "Assets = Liabilities + Capital is the fundamental accounting equation." },
      { quiz: accQuiz1._id, questionText: "Which principle requires recording transactions at actual cost?", options: ["Matching Principle", "Cost Principle", "Revenue Recognition", "Conservatism"], correctAnswer: 1, marks: 1, explanation: "Cost Principle records assets at their original purchase price." },
      { quiz: accQuiz1._id, questionText: "What does 'Going Concern' concept assume?", options: ["Business will close soon", "Business will continue indefinitely", "Business is profitable", "Business has no debts"], correctAnswer: 1, marks: 1, explanation: "Going Concern assumes the business will operate for the foreseeable future." },
      { quiz: accQuiz1._id, questionText: "Double entry system means:", options: ["Recording twice in same account", "Every transaction has debit and credit aspects", "Two books maintained", "Two accountants needed"], correctAnswer: 1, marks: 1, explanation: "Every transaction affects at least two accounts — one debit and one credit." },
      { quiz: accQuiz1._id, questionText: "Which is NOT a branch of accounting?", options: ["Financial Accounting", "Cost Accounting", "Management Accounting", "Social Accounting"], correctAnswer: 3, marks: 1, explanation: "Social Accounting is not a traditional branch of accounting." },
      { quiz: accQuiz1._id, questionText: "Accrual concept means:", options: ["Cash basis recording", "Recording transactions when they occur, not when cash is received", "Recording only cash transactions", "Ignoring credit transactions"], correctAnswer: 1, marks: 1, explanation: "Accrual concept records revenue/expenses when earned/incurred, regardless of cash flow." },
      { quiz: accQuiz1._id, questionText: "What is the matching principle?", options: ["Matching assets with liabilities", "Matching revenue with related expenses in same period", "Matching debit with credit", "Matching books with bank"], correctAnswer: 1, marks: 1, explanation: "Expenses should be matched with the revenue they help generate in the same period." },
    ]);

    // Subcategory 2: Journal and Ledger
    const accQuiz2 = await Quiz.create({
      title: "Journal, Ledger and Trial Balance",
      subject: "Accountancy",
      category: "Financial Accounting",
      chapter: "Journal and Ledger",
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
      { quiz: accQuiz2._id, questionText: "What is a Journal in accounting?", options: ["Summary of accounts", "Book of original entry for chronological recording", "Final accounts", "Bank statement"], correctAnswer: 1, marks: 1, explanation: "Journal is the book of original entry where transactions are first recorded chronologically." },
      { quiz: accQuiz2._id, questionText: "Ledger is also called:", options: ["Book of original entry", "Book of final entry/principal book", "Cash book", "Day book"], correctAnswer: 1, marks: 1, explanation: "Ledger is the principal book where journal entries are posted to individual accounts." },
      { quiz: accQuiz2._id, questionText: "What is posting?", options: ["Mailing letters", "Transferring journal entries to ledger accounts", "Writing journal", "Preparing trial balance"], correctAnswer: 1, marks: 1, explanation: "Posting is the process of transferring entries from journal to respective ledger accounts." },
      { quiz: accQuiz2._id, questionText: "Trial Balance is prepared to:", options: ["Calculate profit", "Check arithmetical accuracy of ledger accounts", "Prepare balance sheet", "Record transactions"], correctAnswer: 1, marks: 1, explanation: "Trial Balance verifies that total debits equal total credits." },
      { quiz: accQuiz2._id, questionText: "Which account has a debit balance normally?", options: ["Capital account", "Creditors account", "Asset account", "Revenue account"], correctAnswer: 2, marks: 1, explanation: "Asset accounts normally have debit balances." },
      { quiz: accQuiz2._id, questionText: "Narration in journal entry means:", options: ["Account title", "Brief explanation of the transaction", "Amount column", "Date column"], correctAnswer: 1, marks: 1, explanation: "Narration is a brief description explaining the journal entry." },
      { quiz: accQuiz2._id, questionText: "If furniture is purchased for cash, which accounts are affected?", options: ["Furniture A/c (Dr) and Cash A/c (Cr)", "Cash A/c (Dr) and Furniture A/c (Cr)", "Purchase A/c (Dr) and Cash A/c (Cr)", "Furniture A/c (Dr) and Bank A/c (Cr)"], correctAnswer: 0, marks: 1, explanation: "Furniture (asset) increases (debit), Cash (asset) decreases (credit)." },
      { quiz: accQuiz2._id, questionText: "What is a compound journal entry?", options: ["Entry with one debit and one credit", "Entry with multiple debits or credits", "Entry without narration", "Entry in red ink"], correctAnswer: 1, marks: 1, explanation: "Compound entry has more than one debit or more than one credit." },
      { quiz: accQuiz2._id, questionText: "Balancing of an account means:", options: ["Closing the account permanently", "Finding the difference between debit and credit totals", "Adding all entries", "Deleting entries"], correctAnswer: 1, marks: 1, explanation: "Balancing finds the difference between debit and credit sides of an account." },
      { quiz: accQuiz2._id, questionText: "If Trial Balance does not tally, the difference is placed in:", options: ["Profit & Loss A/c", "Suspense Account", "Capital Account", "Cash Account"], correctAnswer: 1, marks: 1, explanation: "Suspense Account temporarily holds the difference until errors are found." },
    ]);

    // Subcategory 3: Financial Statements
    const accQuiz3 = await Quiz.create({
      title: "Financial Statements",
      subject: "Accountancy",
      category: "Financial Accounting",
      chapter: "Financial Statements",
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
      { quiz: accQuiz3._id, questionText: "Trading Account shows:", options: ["Net Profit", "Gross Profit or Loss", "Total Assets", "Capital"], correctAnswer: 1, marks: 1, explanation: "Trading Account calculates Gross Profit = Net Sales - Cost of Goods Sold." },
      { quiz: accQuiz3._id, questionText: "Which item appears on the debit side of Trading Account?", options: ["Sales", "Opening Stock", "Closing Stock", "Gross Profit"], correctAnswer: 1, marks: 1, explanation: "Opening Stock, Purchases, and Direct Expenses appear on debit side." },
      { quiz: accQuiz3._id, questionText: "Profit & Loss Account shows:", options: ["Gross Profit", "Net Profit or Loss", "Total Sales", "Cash Balance"], correctAnswer: 1, marks: 1, explanation: "P&L Account shows Net Profit after deducting indirect expenses from Gross Profit." },
      { quiz: accQuiz3._id, questionText: "Balance Sheet shows:", options: ["Profit for the year", "Financial position at a given date", "Sales for the year", "Cash flow"], correctAnswer: 1, marks: 1, explanation: "Balance Sheet shows assets, liabilities, and capital at a specific date." },
      { quiz: accQuiz3._id, questionText: "Depreciation is:", options: ["Increase in asset value", "Decrease in asset value due to use/time", "Repair cost", "Purchase cost"], correctAnswer: 1, marks: 1, explanation: "Depreciation is the systematic allocation of asset cost over its useful life." },
      { quiz: accQuiz3._id, questionText: "Closing stock appears in:", options: ["Only Trading A/c", "Only Balance Sheet", "Trading A/c (credit) and Balance Sheet (asset)", "Only P&L A/c"], correctAnswer: 2, marks: 1, explanation: "Closing stock is credited in Trading A/c and shown as current asset in Balance Sheet." },
      { quiz: accQuiz3._id, questionText: "Outstanding expenses are:", options: ["Expenses paid in advance", "Expenses incurred but not yet paid", "Expenses not related to business", "Capital expenses"], correctAnswer: 1, marks: 1, explanation: "Outstanding expenses are due but not yet paid — shown as current liability." },
      { quiz: accQuiz3._id, questionText: "Prepaid expenses are shown as:", options: ["Liability", "Current Asset", "Expense", "Revenue"], correctAnswer: 1, marks: 1, explanation: "Prepaid expenses are assets as the benefit is yet to be received." },
      { quiz: accQuiz3._id, questionText: "Which is a current liability?", options: ["Long-term loan", "Creditors", "Building", "Machinery"], correctAnswer: 1, marks: 1, explanation: "Creditors are payable within a short period — current liability." },
      { quiz: accQuiz3._id, questionText: "Capital + Liabilities = ?", options: ["Expenses", "Revenue", "Assets", "Profit"], correctAnswer: 2, marks: 1, explanation: "This is the Balance Sheet equation: Capital + Liabilities = Assets." },
    ]);

    console.log("✓ Class 11 Commerce - Accountancy: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceAccountancy;
