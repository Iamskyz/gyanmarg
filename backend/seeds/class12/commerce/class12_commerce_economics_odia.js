import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceEconomicsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ମାକ୍ରୋ ଅର୍ଥନୀତି - ଜାତୀୟ ଆୟ",
      subject: "Economics",
      category: "Macroeconomics",
      chapter: "ଜାତୀୟ ଆୟ ହିସାବ",
      grade: 12,
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
      { quiz: quiz1._id, questionText: "GDP at market price ରୁ indirect taxes ବିୟୋଗ ଏବଂ subsidies ଯୋଗ କଲେ କ’ଣ ମିଳେ?", options: ["NNP", "GDP at factor cost", "GNP", "Personal income"], correctAnswer: 1, marks: 1, explanation: "GDP at FC = GDP at MP - Indirect Taxes + Subsidies।" },
      { quiz: quiz1._id, questionText: "Circular flow of income ରେ କ’ଣ ଥାଏ?", options: ["କେବଳ firms", "Households ଏବଂ firms ମଧ୍ୟରେ goods, services ଏବଂ money ର ବିନିମୟ", "କେବଳ government", "କେବଳ banks"], correctAnswer: 1, marks: 1, explanation: "Circular flow households ଏବଂ firms ମଧ୍ୟରେ ନିରନ୍ତର ବିନିମୟକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz1._id, questionText: "Transfer payments କ’ଣ?", options: ["National income ରେ ଯୋଗ ହୁଏ", "Production ନଥିବାରୁ national income ରେ ଯୋଗ ହୁଏନାହିଁ", "GDP ର ଅଂଶ", "Factor income"], correctAnswer: 1, marks: 1, explanation: "Pension ଏବଂ scholarship ପରି transfer payment ରେ production ନଥାଏ।" },
      { quiz: quiz1._id, questionText: "GNP = GDP + ?", options: ["Depreciation", "Net factor income from abroad", "Indirect taxes", "Subsidies"], correctAnswer: 1, marks: 1, explanation: "GNP = GDP + NFIA।" },
      { quiz: quiz1._id, questionText: "Value added method କ’ଣ ରୋକେ?", options: ["Taxation", "Double counting", "Inflation", "Deflation"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ ଷ୍ଟେଜର value addition ଗଣାଯାଏ।" },
      { quiz: quiz1._id, questionText: "Depreciation କୁ ଆଉ କ’ଣ କୁହାଯାଏ?", options: ["Net investment", "Consumption of fixed capital", "Gross investment", "Transfer payment"], correctAnswer: 1, marks: 1, explanation: "Fixed assets ର wear and tear କୁ depreciation କୁହାଯାଏ।" },
      { quiz: quiz1._id, questionText: "NNP at factor cost କ’ଣ ନାମରେ ପରିଚିତ?", options: ["GDP", "National Income", "Personal Income", "Disposable Income"], correctAnswer: 1, marks: 1, explanation: "National Income = NNP at Factor Cost।" },
      { quiz: quiz1._id, questionText: "National income ହିସାବର କେଉଁଟି ଏକ ପ୍ରକ୍ରିୟା ନୁହେଁ?", options: ["Income method", "Expenditure method", "Profit method", "Value added method"], correctAnswer: 2, marks: 1, explanation: "Income, Expenditure ଏବଂ Product method ହେଉଛି ମୁଖ୍ୟ ପ୍ରକ୍ରିୟା।" },
      { quiz: quiz1._id, questionText: "Real GDP କେଉଁ ମୂଲ୍ୟରେ ମାପାଯାଏ?", options: ["Current year prices", "Base year prices", "Future prices", "Average prices"], correctAnswer: 1, marks: 1, explanation: "Inflation ର ପ୍ରଭାବ କମାଇବା ପାଇଁ constant prices ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "GDP deflator ର ସୂତ୍ର କଣ?", options: ["Real GDP / Nominal GDP ×100", "Nominal GDP / Real GDP ×100", "GDP / GNP ×100", "NNP / GDP ×100"], correctAnswer: 1, marks: 1, explanation: "Price level change ମାପିବାକୁ GDP deflator ବ୍ୟବହୃତ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଟଙ୍କା, ବ୍ୟାଙ୍କିଂ ଏବଂ ସରକାରୀ ବଜେଟ",
      subject: "Economics",
      category: "Macroeconomics",
      chapter: "Money and Banking",
      grade: 12,
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
      { quiz: quiz2._id, questionText: "Commercial bank ଙ୍କ credit creation କ’ଣ ଦ୍ୱାରା ସୀମିତ ହୁଏ?", options: ["Government orders", "Cash Reserve Ratio (CRR)", "Customer demand only", "Branch ସଂଖ୍ୟା"], correctAnswer: 1, marks: 1, explanation: "ଉଚ୍ଚ CRR ରେ lending କମିଯାଏ।" },
      { quiz: quiz2._id, questionText: "Repo rate କ’ଣ?", options: ["Banks public କୁ ଯେତେ ଦରରେ ଧନ ଦେଇଥାଏ", "RBI commercial bank କୁ ଧନ ଦେବାର ଦର", "Government borrowing rate", "Banks ମଧ୍ୟର lending rate"], correctAnswer: 1, marks: 1, explanation: "RBI short-term loan commercial banks କୁ repo rate ରେ ଦିଏ।" },
      { quiz: quiz2._id, questionText: "Revenue deficit = ?", options: ["Total expenditure - total receipts", "Revenue expenditure - revenue receipts", "Capital expenditure - capital receipts", "Fiscal deficit - interest payments"], correctAnswer: 1, marks: 1, explanation: "Revenue deficit ରେ revenue account ର ଘାଟତି ଦର୍ଶାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Fiscal deficit = ?", options: ["Revenue deficit + capital deficit", "Total expenditure - total receipts (excluding borrowings)", "Only revenue deficit", "Only primary deficit"], correctAnswer: 1, marks: 1, explanation: "Borrowings ବାହାର କରି ହିସାବ କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Primary deficit = ?", options: ["Fiscal deficit + interest payments", "Fiscal deficit - interest payments", "Revenue deficit", "Budget deficit"], correctAnswer: 1, marks: 1, explanation: "Interest payment ବାହାର କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "RBI ର open market operations କ’ଣ ସମ୍ପର୍କିତ?", options: ["ଟଙ୍କା ଛପାଇବା", "Government securities କିଣିବା/ବେଚିବା", "Tax change", "Public lending"], correctAnswer: 1, marks: 1, explanation: "Money supply control ପାଇଁ RBI securities trade କରେ।" },
      { quiz: quiz2._id, questionText: "Money multiplier = ?", options: ["CRR × Deposits", "1 / CRR", "CRR + SLR", "Deposits / Loans"], correctAnswer: 1, marks: 1, explanation: "Initial deposit ଠାରୁ total credit creation ଦର୍ଶାଏ।" },
      { quiz: quiz2._id, questionText: "Direct tax କ’ଣ?", options: ["ଅନ୍ୟଙ୍କୁ ସ୍ଥାନାନ୍ତର ହୁଏ", "ଯାହା ଉପରେ ଲାଗେ ସେହି ବ୍ୟକ୍ତି ଦେଇଥାଏ", "Indirect", "Optional"], correctAnswer: 1, marks: 1, explanation: "Income tax ପରି direct tax shift କରିହେବ ନାହିଁ।" },
      { quiz: quiz2._id, questionText: "Deficit financing କ’ଣ ସୃଷ୍ଟି କରେ?", options: ["Deflation", "Inflationary pressure", "No effect", "Reduced money supply"], correctAnswer: 1, marks: 1, explanation: "Money supply ବଢ଼ିଲେ inflation ହୁଏ।" },
      { quiz: quiz2._id, questionText: "SLR ରେ bank କ’ଣ ରଖିବାକୁ ପଡ଼େ?", options: ["Cash only", "Liquid assets ର ନିର୍ଦ୍ଧିଷ୍ଟ ଅଂଶ", "Gold only", "Foreign currency"], correctAnswer: 1, marks: 1, explanation: "Cash, gold, securities ପରି liquid assets ରଖାଯାଏ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Balance of Payments ଏବଂ Exchange Rate",
      subject: "Economics",
      category: "International Economics",
      chapter: "Foreign Exchange and BOP",
      grade: 12,
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
      { quiz: quiz3._id, questionText: "Balance of Payments ସଦା କ’ଣ ଦର୍ଶାଏ?", options: ["Surplus", "Balance", "Deficit", "Positive"], correctAnswer: 1, marks: 1, explanation: "Double entry system ଥିବାରୁ BOP ସଦା balance ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Current account ରେ କ’ଣ ଥାଏ?", options: ["Capital transfer", "Goods, services ଏବଂ unilateral transfer", "Foreign investment", "Loans"], correctAnswer: 1, marks: 1, explanation: "Trade ଏବଂ transfer current account ରେ ଥାଏ।" },
      { quiz: quiz3._id, questionText: "Flexible exchange rate କ’ଣ ଦ୍ୱାରା ନିର୍ଣ୍ଣୟ ହୁଏ?", options: ["Government", "Demand ଏବଂ supply", "RBI only", "IMF"], correctAnswer: 1, marks: 1, explanation: "Forex market forces ରେ rate ନିର୍ଣ୍ଣୟ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Currency devaluation କ’ଣ କରେ?", options: ["Imports cheap", "Exports cheaper ଏବଂ competitive", "No change", "Both expensive"], correctAnswer: 1, marks: 1, explanation: "Foreigners ପାଇଁ domestic goods ସସ୍ତା ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Foreign exchange market କ’ଣ?", options: ["Goods market", "Currency buying and selling market", "Share market", "Bond market"], correctAnswer: 1, marks: 1, explanation: "Different currencies ର trade ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Trade deficit ର ଅର୍ଥ କ’ଣ?", options: ["Exports > Imports", "Imports > Exports", "Exports = Imports", "No trade"], correctAnswer: 1, marks: 1, explanation: "Imports ର value exports ଠାରୁ ଅଧିକ।" },
      { quiz: quiz3._id, questionText: "Capital account ରେ କ’ଣ ଥାଏ?", options: ["Merchandise trade", "Foreign investment ଏବଂ loans", "Tourism receipts", "Remittances"], correctAnswer: 1, marks: 1, explanation: "FDI, portfolio investment ଏବଂ loans capital account ରେ ଥାଏ।" },
      { quiz: quiz3._id, questionText: "Domestic currency appreciation ର ଅର୍ଥ କ’ଣ?", options: ["Currency value କମେ", "Currency value ବଢ଼େ", "No change", "Inflation ବଢ଼େ"], correctAnswer: 1, marks: 1, explanation: "Domestic currency stronger ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Managed floating exchange rate କ’ଣ?", options: ["Completely fixed", "Market determined with central bank intervention", "No government role", "Only government decides"], correctAnswer: 1, marks: 1, explanation: "Central bank extreme fluctuation କୁ ନିୟନ୍ତ୍ରଣ କରେ।" },
      { quiz: quiz3._id, questionText: "Foreign exchange reserves କିଏ ରଖେ?", options: ["Commercial banks", "RBI", "Stock exchange", "Finance Ministry"], correctAnswer: 1, marks: 1, explanation: "RBI ଭାରତର forex reserve maintain କରେ।" },
    ]);

    console.log("✓ Class 12 Commerce - Economics Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceEconomicsOdia };
