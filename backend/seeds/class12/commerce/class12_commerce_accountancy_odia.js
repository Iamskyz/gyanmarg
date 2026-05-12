import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceAccountancyOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ସହଭାଗିତା ହିସାବ",
      subject: "Accountancy",
      category: "Partnership",
      chapter: "ସହଭାଗିତାର ମୌଳିକ ଧାରଣା",
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
      { quiz: quiz1._id, questionText: "ସହଭାଗିତା ଚୁକ୍ତି ନଥିଲେ ଲାଭ କିପରି ବଣ୍ଟନ ହୁଏ?", options: ["ପୁଞ୍ଜି ଅନୁପାତରେ", "ସମାନ ଭାବେ", "କାମ ଅନୁସାରେ", "ଜ୍ୟେଷ୍ଠତା ଅନୁସାରେ"], correctAnswer: 1, marks: 1, explanation: "Indian Partnership Act 1932 ଅନୁଯାୟୀ ଲାଭ ସମାନ ଭାବେ ବଣ୍ଟନ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "ପୁଞ୍ଜି ଉପରେ ସୁଦ କେବେ ଦିଆଯାଏ?", options: ["ସଦା", "ଚୁକ୍ତିରେ ଉଲ୍ଲେଖ ଥିଲେ", "ସହଭାଗୀ ଚାହିଲେ", "ଲାଭ ହେଲେ"], correctAnswer: 1, marks: 1, explanation: "ସହଭାଗିତା ଚୁକ୍ତିରେ ଥିଲେମାତ୍ର ସୁଦ ଦିଆଯାଏ।" },
      { quiz: quiz1._id, questionText: "Goodwill କ’ଣ?", options: ["ଦୃଶ୍ୟମାନ ସମ୍ପତ୍ତି", "ଅଦୃଶ୍ୟ ସମ୍ପତ୍ତି ଯାହା ସଂସ୍ଥାର ସୁଖ୍ୟାତି ସୂଚାଏ", "ଦେୟ", "ଖର୍ଚ୍ଚ"], correctAnswer: 1, marks: 1, explanation: "Goodwill ସଂସ୍ଥାର ସୁଖ୍ୟାତି ଏବଂ earning capacity ସୂଚାଏ।" },
      { quiz: quiz1._id, questionText: "ନୂତନ ସହଭାଗୀ ଯୋଗ ହେଲେ ପୁରୁଣା ସହଭାଗୀ କ’ଣ ତ୍ୟାଗ କରନ୍ତି?", options: ["ପୁଞ୍ଜି", "ଲାଭ ଅନୁପାତ", "ଉତ୍ତୋଳନ", "ଋଣ"], correctAnswer: 1, marks: 1, explanation: "ପୁରୁଣା ସହଭାଗୀମାନେ ତାଙ୍କ ଲାଭର କିଛି ଅଂଶ ତ୍ୟାଗ କରନ୍ତି।" },
      { quiz: quiz1._id, questionText: "Revaluation account କେବେ ପ୍ରସ୍ତୁତ ହୁଏ?", options: ["ଦୈନିକ ଲେନଦେନ", "ନୂତନ ସହଭାଗୀ ଭର୍ତ୍ତି, ଅବସର କିମ୍ବା ମୃତ୍ୟୁ ସମୟରେ", "ପ୍ରତିବର୍ଷ", "Audit"], correctAnswer: 1, marks: 1, explanation: "ସହଭାଗିତାର ପରିବର୍ତ୍ତନ ସମୟରେ asset/liability ପୁନମୂଲ୍ୟାୟନ ପାଇଁ।" },
      { quiz: quiz1._id, questionText: "Sacrificing ratio କିପରି ହିସାବ କରାଯାଏ?", options: ["ନୂତନ - ପୁରୁଣା", "ପୁରୁଣା - ନୂତନ", "ପୁଞ୍ଜି ଅନୁପାତ", "ସମାନ ଅନୁପାତ"], correctAnswer: 1, marks: 1, explanation: "Sacrificing ratio = ପୁରୁଣା ଅନୁପାତ - ନୂତନ ଅନୁପାତ।" },
      { quiz: quiz1._id, questionText: "Gaining ratio କେବେ ବ୍ୟବହୃତ ହୁଏ?", options: ["ଭର୍ତ୍ତି", "ଅବସର କିମ୍ବା ମୃତ୍ୟୁ ସମୟରେ", "ଦିବାଳିଆ", "ପ୍ରତିବର୍ଷ"], correctAnswer: 1, marks: 1, explanation: "ଅବଶିଷ୍ଟ ସହଭାଗୀମାନେ ଲାଭ ଅଂଶ ପାଉଥିବାରୁ gaining ratio ହିସାବ କରାଯାଏ।" },
      { quiz: quiz1._id, questionText: "Fixed capital method ରେ କ’ଣ ଥାଏ?", options: ["ସମସ୍ତ ଲେନଦେନ ଏକ ଖାତାରେ", "ଅଲଗା capital ଏବଂ current account", "କେବଳ ଉତ୍ତୋଳନ", "କେବଳ ସୁଦ"], correctAnswer: 1, marks: 1, explanation: "Capital ଏବଂ current account ଅଲଗା ରଖାଯାଏ।" },
      { quiz: quiz1._id, questionText: "Minimum profit guarantee ର ଅର୍ଥ କ’ଣ?", options: ["ସମସ୍ତଙ୍କୁ ଲାଭ ଗ୍ୟାରାଣ୍ଟି", "ଏକ ସହଭାଗୀଙ୍କ ଲାଭ ନିର୍ଦ୍ଧାରିତ ରାଶିଠାରୁ କମିବ ନାହିଁ", "ସରକାରୀ ଗ୍ୟାରାଣ୍ଟି", "ବ୍ୟାଙ୍କ ଗ୍ୟାରାଣ୍ଟି"], correctAnswer: 1, marks: 1, explanation: "କମି ଯାଇଥିବା ଅଂଶ guarantor partner ବହନ କରନ୍ତି।" },
      { quiz: quiz1._id, questionText: "Interest on drawings କାହିଁକି ନିଆଯାଏ?", options: ["ସଞ୍ଚୟ ବଢ଼ାଇବାକୁ", "ଅତ୍ୟଧିକ ଉତ୍ତୋଳନ ରୋକିବାକୁ", "ସହଭାଗୀଙ୍କ ଆୟ", "ସଂସ୍ଥାର ଖର୍ଚ୍ଚ"], correctAnswer: 1, marks: 1, explanation: "ଅତ୍ୟଧିକ withdrawal କୁ ନିୟନ୍ତ୍ରଣ କରିବା ପାଇଁ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "କମ୍ପାନୀ ହିସାବ - ଶେୟର ଜାରି",
      subject: "Accountancy",
      category: "Company Accounts",
      chapter: "ଶେୟର ଏବଂ ଡିବେଞ୍ଚର ଜାରି",
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
      { quiz: quiz2._id, questionText: "MOA ରେ ଉଲ୍ଲେଖିତ share capital କ’ଣ କୁହାଯାଏ?", options: ["Issued capital", "Authorized/Nominal capital", "Paid-up capital", "Reserve capital"], correctAnswer: 1, marks: 1, explanation: "Authorized capital ହେଉଛି ସର୍ବାଧିକ ପୁଞ୍ଜି।" },
      { quiz: quiz2._id, questionText: "Face value ଠାରୁ ଅଧିକ ଦରରେ ଶେୟର ଜାରି କଲେ ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ["Discount", "Premium", "Par", "Loss"], correctAnswer: 1, marks: 1, explanation: "Premium = Issue price - Face value।" },
      { quiz: quiz2._id, questionText: "Securities Premium କେଉଁ କାମରେ ବ୍ୟବହୃତ ହୁଏ?", options: ["Dividend", "Preliminary expenses write-off କିମ୍ବା bonus share", "Salary", "Daily expenses"], correctAnswer: 1, marks: 1, explanation: "Companies Act ଅନୁଯାୟୀ ନିର୍ଦ୍ଧିଷ୍ଟ କାମରେ ବ୍ୟବହୃତ।" },
      { quiz: quiz2._id, questionText: "Forfeiture of shares ର ଅର୍ଥ କ’ଣ?", options: ["ନୂତନ ଶେୟର ଜାରି", "Call money ନଦେଲେ ଶେୟର ବାତିଲ", "Buy back", "Split"], correctAnswer: 1, marks: 1, explanation: "Call amount ନଦେଲେ ଶେୟର ବାତିଲ ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Forfeited shares କେମିତି ପୁନଃଜାରି କରାଯାଏ?", options: ["କେବଳ par", "Forfeited amount ଠାରୁ କମ ନୁହେଁ", "କେବଳ premium", "ଯେକୌଣସି ଦର"], correctAnswer: 1, marks: 1, explanation: "Reissue + forfeited amount ≥ face value।" },
      { quiz: quiz2._id, questionText: "Debenture କ’ଣ ସୂଚାଏ?", options: ["Ownership", "କମ୍ପାନୀର ଦୀର୍ଘମିଆଦି ଋଣ", "Share capital", "Reserve"], correctAnswer: 1, marks: 1, explanation: "Debenture ହେଉଛି debt instrument।" },
      { quiz: quiz2._id, questionText: "Debenture ଉପରେ ସୁଦ କିପରି ଦିଆଯାଏ?", options: ["ଲାଭ ହେଲେମାତ୍ର", "ଲାଭ ଥାଉ କିମ୍ବା ନଥାଉ ଦିଆଯାଏ", "ଇଚ୍ଛାଧୀନ", "Preference shareholder କୁ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଏକ fixed obligation।" },
      { quiz: quiz2._id, questionText: "Calls in arrears ର ଅର୍ଥ କ’ଣ?", options: ["ଅଧିକ ଟଙ୍କା", "Shareholder ଦ୍ୱାରା ଅଦାୟ ରାଶି", "Advance", "Unpaid dividend"], correctAnswer: 1, marks: 1, explanation: "Due calls ର unpaid amount।" },
      { quiz: quiz2._id, questionText: "Oversubscription ର ଅର୍ଥ କ’ଣ?", options: ["କୌଣସି application ନଥିବା", "Application shares ଠାରୁ ଅଧିକ", "Discount issue", "Forfeited shares"], correctAnswer: 1, marks: 1, explanation: "Demand offered shares ଠାରୁ ଅଧିକ।" },
      { quiz: quiz2._id, questionText: "Discount on issue of debentures କ’ଣ?", options: ["Income", "Capital loss", "Revenue gain", "Asset"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଏକ capital loss।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଆର୍ଥିକ ବିବରଣୀ ବିଶ୍ଳେଷଣ",
      subject: "Accountancy",
      category: "Financial Analysis",
      chapter: "Ratio Analysis and Cash Flow",
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
      { quiz: quiz3._id, questionText: "Current ratio କ’ଣ?", options: ["Fixed Assets / Current Liabilities", "Current Assets / Current Liabilities", "Net Profit / Sales", "Debt / Equity"], correctAnswer: 1, marks: 1, explanation: "Current ratio ଦ୍ୱାରା short-term solvency ମାପାଯାଏ।" },
      { quiz: quiz3._id, questionText: "Ideal current ratio କେତେ ଧରାଯାଏ?", options: ["1:1", "2:1", "3:1", "0.5:1"], correctAnswer: 1, marks: 1, explanation: "2:1 କୁ ideal ଧରାଯାଏ।" },
      { quiz: quiz3._id, questionText: "Debt-Equity ratio କ’ଣ ମାପେ?", options: ["Profitability", "Long-term solvency", "Liquidity", "Efficiency"], correctAnswer: 1, marks: 1, explanation: "Debt ଏବଂ equity ର proportion ଦର୍ଶାଏ।" },
      { quiz: quiz3._id, questionText: "Cash flow statement କେତୋଟି activity ରେ ବିଭକ୍ତ?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "Operating, Investing, Financing।" },
      { quiz: quiz3._id, questionText: "Operating activities କ’ଣ ସମ୍ପର୍କିତ?", options: ["Machinery purchase", "ଦୈନିକ ବ୍ୟବସାୟ କାର୍ଯ୍ୟ", "Share issue", "Loan repayment"], correctAnswer: 1, marks: 1, explanation: "Principal revenue generating activities।" },
      { quiz: quiz3._id, questionText: "Gross Profit ratio ର ସୂତ୍ର କଣ?", options: ["Net Profit / Sales ×100", "Gross Profit / Net Sales ×100", "Sales / Capital ×100", "Profit / Assets ×100"], correctAnswer: 1, marks: 1, explanation: "GP Ratio = Gross Profit / Net Sales ×100।" },
      { quiz: quiz3._id, questionText: "Quick ratio କେଉଁ current asset କୁ ବାହାର କରେ?", options: ["Cash", "Stock/Inventory", "Debtors", "Bank"], correctAnswer: 1, marks: 1, explanation: "Stock ସବୁଠାରୁ କମ liquid।" },
      { quiz: quiz3._id, questionText: "ROI କ’ଣ ମାପେ?", options: ["Liquidity", "Capital efficiency", "Solvency", "Turnover"], correctAnswer: 1, marks: 1, explanation: "Capital employed ର profit generating efficiency।" },
      { quiz: quiz3._id, questionText: "Comparative financial statements କ’ଣ ଦର୍ଶାଏ?", options: ["କେବଳ current year", "ଏକାଧିକ ବର୍ଷର ତଥ୍ୟ", "Projected data", "Cash data"], correctAnswer: 1, marks: 1, explanation: "Trend analysis ପାଇଁ ଅନେକ ବର୍ଷର data।" },
      { quiz: quiz3._id, questionText: "Investing activities ରେ କ’ଣ ଥାଏ?", options: ["Sales revenue", "Fixed assets purchase/sale", "Dividend payment", "Salary"], correctAnswer: 1, marks: 1, explanation: "Long-term assets ସମ୍ପର୍କିତ କାର୍ଯ୍ୟ।" },
    ]);

    console.log("✓ Class 12 Commerce - Accountancy Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceAccountancyOdia };
