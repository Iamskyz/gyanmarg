import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceAccountancyOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୁକ୍ତ");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Introduction to Accounting
    const accQuiz1 = await Quiz.create({
      title: "ହିସାବବିଜ୍ଞାନର ପରିଚୟ",
      subject: "Accountancy",
      category: "Financial Accounting",
      chapter: "ହିସାବବିଜ୍ଞାନର ପରିଚୟ",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: accQuiz1._id, questionText: "Accounting ର ପ୍ରମୁଖ ଉଦ୍ଦେଶ୍ୟ କଣ?", options: ["ଲାଭ କମାଇବା", "ଆର୍ଥିକ ଲେନଦେନକୁ record, classify ଏବଂ summarize କରିବା", "କର ଦେବା", "କର୍ମଚାରୀ ପରିଚାଳନା"], correctAnswer: 1, marks: 1, explanation: "Accounting ଆର୍ଥିକ ଲେନଦେନକୁ ବ୍ୟବସ୍ଥିତ ଭାବରେ record କରେ।" },
      { quiz: accQuiz1._id, questionText: "'Father of Accounting' କିଏ?", options: ["Adam Smith", "Luca Pacioli", "J.M. Keynes", "Karl Marx"], correctAnswer: 1, marks: 1, explanation: "Luca Pacioli 1494 ରେ double-entry system ପ୍ରଚଳନ କରିଥିଲେ।" },
      { quiz: accQuiz1._id, questionText: "କେଉଁ accounting concept ବ୍ୟବସାୟକୁ ମାଲିକଠାରୁ ଅଲଗା ଭାବେ ଦେଖେ?", options: ["Going Concern", "Business Entity Concept", "Money Measurement", "Dual Aspect"], correctAnswer: 1, marks: 1, explanation: "Business Entity Concept ବ୍ୟବସାୟକୁ ଅଲଗା entity ଭାବେ ଦେଖେ।" },
      { quiz: accQuiz1._id, questionText: "Accounting equation କଣ?", options: ["Assets = Liabilities + Capital", "Assets = Liabilities - Capital", "Capital = Assets + Liabilities", "Liabilities = Assets + Capital"], correctAnswer: 0, marks: 1, explanation: "ଏହା accounting ର ମୂଳ ସମୀକରଣ।" },
      { quiz: accQuiz1._id, questionText: "କେଉଁ principle actual cost ରେ transaction record କରିବାକୁ କହେ?", options: ["Matching Principle", "Cost Principle", "Revenue Recognition", "Conservatism"], correctAnswer: 1, marks: 1, explanation: "Cost Principle ରେ asset କୁ original purchase price ରେ record କରାଯାଏ।" },
      { quiz: accQuiz1._id, questionText: "'Going Concern' concept କଣ ଧାରଣା କରେ?", options: ["ବ୍ୟବସାୟ ଶୀଘ୍ର ବନ୍ଦ ହେବ", "ବ୍ୟବସାୟ ଦୀର୍ଘ ସମୟ ଚାଲିବ", "ବ୍ୟବସାୟ ଲାଭକାରୀ", "ବ୍ୟବସାୟର କୌଣସି ଋଣ ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଧାରଣା କରେ ଯେ ବ୍ୟବସାୟ ଚାଲୁ ରହିବ।" },
      { quiz: accQuiz1._id, questionText: "Double entry system ର ଅର୍ଥ କଣ?", options: ["ଏକେ account ରେ ଦୁଇଥର ଲେଖା", "ପ୍ରତ୍ୟେକ transaction ର debit ଏବଂ credit ଦୁଇ ପକ୍ଷ ଥାଏ", "ଦୁଇଟି book ରଖାଯାଏ", "ଦୁଇଜଣ accountant ଆବଶ୍ୟକ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ transaction ଦୁଇଟି account କୁ ପ୍ରଭାବିତ କରେ।" },
      { quiz: accQuiz1._id, questionText: "କେଉଁଟି accounting ର branch ନୁହେଁ?", options: ["Financial Accounting", "Cost Accounting", "Management Accounting", "Social Accounting"], correctAnswer: 3, marks: 1, explanation: "Social Accounting ପାରମ୍ପରିକ branch ନୁହେଁ।" },
      { quiz: accQuiz1._id, questionText: "Accrual concept ର ଅର୍ଥ କଣ?", options: ["Cash basis recording", "Cash ମିଳୁ କି ନାମିଳୁ transaction ଘଟିବାବେଳେ record କରିବା", "କେବଳ cash transaction record କରିବା", "Credit transaction ignore କରିବା"], correctAnswer: 1, marks: 1, explanation: "Revenue/expenses କୁ earn/incur ହେବାବେଳେ record କରାଯାଏ।" },
      { quiz: accQuiz1._id, questionText: "Matching principle କଣ?", options: ["Assets ଏବଂ liabilities କୁ match କରିବା", "Revenue ସହ ଜଡିତ expenses କୁ ସେହି period ରେ match କରିବା", "Debit ଏବଂ credit match କରିବା", "Books କୁ bank ସହ match କରିବା"], correctAnswer: 1, marks: 1, explanation: "Expenses କୁ ସେହି revenue ସହିତ ମେଳ କରାଯାଏ।" },
    ]);

    // Subcategory 2: Journal and Ledger
    const accQuiz2 = await Quiz.create({
      title: "Journal, Ledger ଏବଂ Trial Balance",
      subject: "Accountancy",
      category: "Financial Accounting",
      chapter: "Journal ଏବଂ Ledger",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: accQuiz2._id, questionText: "Accounting ରେ Journal କଣ?", options: ["Accounts ର summary", "Chronological recording ପାଇଁ original entry book", "Final accounts", "Bank statement"], correctAnswer: 1, marks: 1, explanation: "Journal ହେଉଛି ପ୍ରଥମ entry ର book।" },
      { quiz: accQuiz2._id, questionText: "Ledger କୁ କଣ କୁହାଯାଏ?", options: ["Book of original entry", "Principal book", "Cash book", "Day book"], correctAnswer: 1, marks: 1, explanation: "Ledger ରେ journal entries କୁ account wise post କରାଯାଏ।" },
      { quiz: accQuiz2._id, questionText: "Posting କଣ?", options: ["ଚିଠି ପଠାଇବା", "Journal entry କୁ ledger ରେ transfer କରିବା", "Journal ଲେଖିବା", "Trial balance ପ୍ରସ୍ତୁତ କରିବା"], correctAnswer: 1, marks: 1, explanation: "Posting ରେ journal ରୁ ledger କୁ entry transfer କରାଯାଏ।" },
      { quiz: accQuiz2._id, questionText: "Trial Balance କାହିଁକି ପ୍ରସ୍ତୁତ କରାଯାଏ?", options: ["Profit ଗଣନା", "Ledger accounts ର ଗଣିତୀୟ ସଠିକତା ଯାଞ୍ଚ", "Balance sheet ପ୍ରସ୍ତୁତ", "Transaction record"], correctAnswer: 1, marks: 1, explanation: "Trial Balance ରେ debit ଏବଂ credit ସମାନ କି ନାହିଁ ଯାଞ୍ଚ କରାଯାଏ।" },
      { quiz: accQuiz2._id, questionText: "କେଉଁ account ର ସାଧାରଣତଃ debit balance ଥାଏ?", options: ["Capital account", "Creditors account", "Asset account", "Revenue account"], correctAnswer: 2, marks: 1, explanation: "Asset accounts ର debit balance ଥାଏ।" },
      { quiz: accQuiz2._id, questionText: "Journal entry ର narration ର ଅର୍ଥ କଣ?", options: ["Account title", "Transaction ର ସଂକ୍ଷିପ୍ତ ବିବରଣୀ", "Amount column", "Date column"], correctAnswer: 1, marks: 1, explanation: "Narration transaction ବିଷୟରେ ସଂକ୍ଷିପ୍ତ ବିବରଣୀ ଦିଏ।" },
      { quiz: accQuiz2._id, questionText: "Cash ରେ furniture କିଣିଲେ କେଉଁ accounts ପ୍ରଭାବିତ ହୁଏ?", options: ["Furniture A/c Dr ଏବଂ Cash A/c Cr", "Cash A/c Dr ଏବଂ Furniture A/c Cr", "Purchase A/c Dr ଏବଂ Cash A/c Cr", "Furniture A/c Dr ଏବଂ Bank A/c Cr"], correctAnswer: 0, marks: 1, explanation: "Furniture ବୃଦ୍ଧି (debit), Cash କମିବା (credit)।" },
      { quiz: accQuiz2._id, questionText: "Compound journal entry କଣ?", options: ["ଏକ debit ଏବଂ ଏକ credit entry", "ଅନେକ debit କିମ୍ବା credit ଥିବା entry", "Narration ବିନା entry", "ଲାଲ ଶାଇରେ entry"], correctAnswer: 1, marks: 1, explanation: "Compound entry ରେ ଅଧିକ debit/credit ଥାଏ।" },
      { quiz: accQuiz2._id, questionText: "Account balancing ର ଅର୍ଥ କଣ?", options: ["Account permanently close କରିବା", "Debit ଏବଂ credit total ର ତଫାତ ମିଳାଇବା", "ସମସ୍ତ entry ଯୋଗ କରିବା", "Entry delete କରିବା"], correctAnswer: 1, marks: 1, explanation: "Balancing ରେ debit-credit ତଫାତ ମିଳାଯାଏ।" },
      { quiz: accQuiz2._id, questionText: "Trial Balance tally ନହେଲେ difference କେଉଁଠି ରଖାଯାଏ?", options: ["Profit & Loss A/c", "Suspense Account", "Capital Account", "Cash Account"], correctAnswer: 1, marks: 1, explanation: "Difference କୁ Suspense Account ରେ ରଖାଯାଏ।" },
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
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: accQuiz3._id, questionText: "Trading Account କଣ ଦେଖାଏ?", options: ["Net Profit", "Gross Profit କିମ୍ବା Loss", "Total Assets", "Capital"], correctAnswer: 1, marks: 1, explanation: "Trading Account ରେ Gross Profit ଗଣନା କରାଯାଏ।" },
      { quiz: accQuiz3._id, questionText: "Trading Account ର debit side ରେ କେଉଁ item ଥାଏ?", options: ["Sales", "Opening Stock", "Closing Stock", "Gross Profit"], correctAnswer: 1, marks: 1, explanation: "Opening Stock, Purchases ଏବଂ Direct Expenses debit side ରେ ଥାଏ।" },
      { quiz: accQuiz3._id, questionText: "Profit & Loss Account କଣ ଦେଖାଏ?", options: ["Gross Profit", "Net Profit କିମ୍ବା Loss", "Total Sales", "Cash Balance"], correctAnswer: 1, marks: 1, explanation: "P&L Account ରେ Net Profit ଦେଖାଯାଏ।" },
      { quiz: accQuiz3._id, questionText: "Balance Sheet କଣ ଦେଖାଏ?", options: ["ବର୍ଷର profit", "ନିର୍ଦ୍ଦିଷ୍ଟ ତାରିଖର financial position", "ବର୍ଷର sales", "Cash flow"], correctAnswer: 1, marks: 1, explanation: "Balance Sheet ରେ assets, liabilities ଏବଂ capital ଦେଖାଯାଏ।" },
      { quiz: accQuiz3._id, questionText: "Depreciation କଣ?", options: ["Asset value ବୃଦ୍ଧି", "ବ୍ୟବହାର/ସମୟରେ asset value କମିବା", "Repair cost", "Purchase cost"], correctAnswer: 1, marks: 1, explanation: "Depreciation ହେଉଛି asset cost ର systematic allocation।" },
      { quiz: accQuiz3._id, questionText: "Closing stock କେଉଁଠି ଦେଖାଯାଏ?", options: ["କେବଳ Trading A/c", "କେବଳ Balance Sheet", "Trading A/c ଏବଂ Balance Sheet ଉଭୟରେ", "କେବଳ P&L A/c"], correctAnswer: 2, marks: 1, explanation: "Closing stock Trading A/c ରେ credit ଏବଂ Balance Sheet ର asset ଭାବେ ଦେଖାଯାଏ।" },
      { quiz: accQuiz3._id, questionText: "Outstanding expenses କଣ?", options: ["ପୂର୍ବରୁ ଦିଆଯାଇଥିବା expenses", "ଖର୍ଚ୍ଚ ହୋଇଛି କିନ୍ତୁ ଏପର୍ଯ୍ୟନ୍ତ ଦିଆଯାଇନି", "ବ୍ୟବସାୟ ସମ୍ପର୍କିତ ନୁହେଁ", "Capital expenses"], correctAnswer: 1, marks: 1, explanation: "Outstanding expenses current liability ଭାବେ ଦେଖାଯାଏ।" },
      { quiz: accQuiz3._id, questionText: "Prepaid expenses କେମିତି ଦେଖାଯାଏ?", options: ["Liability", "Current Asset", "Expense", "Revenue"], correctAnswer: 1, marks: 1, explanation: "Prepaid expenses future benefit ଥିବାରୁ asset ଅଟେ।" },
      { quiz: accQuiz3._id, questionText: "କେଉଁଟି current liability?", options: ["Long-term loan", "Creditors", "Building", "Machinery"], correctAnswer: 1, marks: 1, explanation: "Creditors ସ୍ୱଳ୍ପ ସମୟ ମଧ୍ୟରେ ଦେବାକୁ ପଡ଼େ।" },
      { quiz: accQuiz3._id, questionText: "Capital + Liabilities = ?", options: ["Expenses", "Revenue", "Assets", "Profit"], correctAnswer: 2, marks: 1, explanation: "ଏହା Balance Sheet equation।" },
    ]);

    console.log("✓ Class 11 Commerce - Accountancy Odia: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceAccountancyOdia;
