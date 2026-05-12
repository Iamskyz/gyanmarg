import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceBusinessStudiesOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୁକ୍ତ");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Nature and Purpose of Business
    const bsQuiz1 = await Quiz.create({
      title: "ବ୍ୟବସାୟର ସ୍ୱଭାବ ଏବଂ ଉଦ୍ଦେଶ୍ୟ",
      subject: "Business Studies",
      category: "Business Fundamentals",
      chapter: "ବ୍ୟବସାୟର ସ୍ୱଭାବ ଏବଂ ଉଦ୍ଦେଶ୍ୟ",
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
      { quiz: bsQuiz1._id, questionText: "ବ୍ୟବସାୟର ପ୍ରମୁଖ ଉଦ୍ଦେଶ୍ୟ କଣ?", options: ["ସାମାଜିକ ସେବା", "ଲାଭ ଅର୍ଜନ", "ରୋଜଗାର ଦେବା", "କର ଦେବା"], correctAnswer: 1, marks: 1, explanation: "ଗ୍ରାହକଙ୍କ ଆବଶ୍ୟକତା ପୂରଣ କରି ଲାଭ ଅର୍ଜନ କରିବା ବ୍ୟବସାୟର ପ୍ରମୁଖ ଉଦ୍ଦେଶ୍ୟ।" },
      { quiz: bsQuiz1._id, questionText: "କେଉଁଟି ବ୍ୟବସାୟର ବିଶେଷତା ନୁହେଁ?", options: ["ପଣ୍ୟ/ସେବାର ବ୍ୟବସାୟ", "ଲାଭ ଉଦ୍ଦେଶ୍ୟ", "ଝୁମ୍ପ ଏବଂ ଅନିଶ୍ଚିତତା", "ନିର୍ଦ୍ଦିଷ୍ଟ ବେତନ"], correctAnswer: 3, marks: 1, explanation: "ନିର୍ଦ୍ଦିଷ୍ଟ ବେତନ ଚାକିରିର ବିଶେଷତା।" },
      { quiz: bsQuiz1._id, questionText: "'Commerce' କଣ?", options: ["ପଣ୍ୟ ଉତ୍ପାଦନ", "ବାଣିଜ୍ୟ ଏବଂ ସହାୟକ କାର୍ଯ୍ୟ", "କେବଳ କ୍ରୟ", "କେବଳ ବିକ୍ରୟ"], correctAnswer: 1, marks: 1, explanation: "Commerce ରେ trade ଏବଂ ତାହାର ସହାୟକ କାର୍ଯ୍ୟ ଥାଏ।" },
      { quiz: bsQuiz1._id, questionText: "କେଉଁଟି trade ର auxiliary?", options: ["Manufacturing", "Banking ଏବଂ Insurance", "Farming", "Mining"], correctAnswer: 1, marks: 1, explanation: "Banking, insurance, transport ଇତ୍ୟାଦି trade କୁ ସହାୟତା କରେ।" },
      { quiz: bsQuiz1._id, questionText: "'Industry' କଣ?", options: ["କ୍ରୟ ବିକ୍ରୟ", "ପଣ୍ୟ ଉତ୍ପାଦନ/ପ୍ରକ୍ରିୟାକରଣ", "ବିଜ୍ଞାପନ", "Banking"], correctAnswer: 1, marks: 1, explanation: "Industry ରେ extraction, production ଏବଂ processing ଥାଏ।" },
      { quiz: bsQuiz1._id, questionText: "କେଉଁ industry ପ୍ରକୃତିରୁ ପଦାର୍ଥ ଆହରଣ କରେ?", options: ["Manufacturing", "Extractive industry", "Genetic industry", "Construction"], correctAnswer: 1, marks: 1, explanation: "Extractive industry ପ୍ରକୃତିରୁ ସମ୍ପଦ ଆହରଣ କରେ।" },
      { quiz: bsQuiz1._id, questionText: "Business risk ର ଅର୍ଥ କଣ?", options: ["ନିଶ୍ଚିତ କ୍ଷତି", "ଲାଭ କମ୍ ହେବା କିମ୍ବା କ୍ଷତିର ସମ୍ଭାବନା", "ଲାଭ ନଥିବା", "ନିର୍ଦ୍ଦିଷ୍ଟ ଆୟ"], correctAnswer: 1, marks: 1, explanation: "ଅନିଶ୍ଚିତତାରୁ କ୍ଷତି କିମ୍ବା କମ୍ ଲାଭ ହୋଇପାରେ।" },
      { quiz: bsQuiz1._id, questionText: "କେଉଁଟି non-economic activity?", options: ["ଦୋକାନ ଚଲାଇବା", "ବେତନ ପାଇଁ ପଢ଼ାଇବା", "ଦୟାବଶତଃ ଗରିବଙ୍କୁ ସାହାଯ୍ୟ", "କାରଖାନାରେ କାମ"], correctAnswer: 2, marks: 1, explanation: "ପ୍ରେମ, ସେବା କିମ୍ବା ଦୟା ପାଇଁ କରାଯାଇଥିବା କାର୍ଯ୍ୟ non-economic activity।" },
      { quiz: bsQuiz1._id, questionText: "'Trade' କଣ?", options: ["Manufacturing", "ପଣ୍ୟ କ୍ରୟ ଏବଂ ବିକ୍ରୟ", "Transport", "Insurance"], correctAnswer: 1, marks: 1, explanation: "Trade ରେ goods/services ର exchange ହୁଏ।" },
      { quiz: bsQuiz1._id, questionText: "'E-business' କଣ?", options: ["Traditional business", "Internet/electronic ମାଧ୍ୟମରେ ବ୍ୟବସାୟ", "Export business", "Government business"], correctAnswer: 1, marks: 1, explanation: "E-business ରେ internet ଏବଂ electronic technology ବ୍ୟବହାର ହୁଏ।" },
    ]);

    // Subcategory 2
    const bsQuiz2 = await Quiz.create({
      title: "ବ୍ୟବସାୟ ସଂଗଠନର ପ୍ରକାର",
      subject: "Business Studies",
      category: "Business Fundamentals",
      chapter: "ବ୍ୟବସାୟ ସଂଗଠନର ପ୍ରକାର",
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
      { quiz: bsQuiz2._id, questionText: "Sole proprietorship କଣ?", options: ["ସରକାରୀ ବ୍ୟବସାୟ", "ଏକ ବ୍ୟକ୍ତି ଦ୍ୱାରା ମାଲିକାନା ଏବଂ ପରିଚାଳିତ ବ୍ୟବସାୟ", "Partners ଦ୍ୱାରା ଚାଲିଥିବା", "Shareholders ଦ୍ୱାରା ଚାଲିଥିବା"], correctAnswer: 1, marks: 1, explanation: "ଏକ ବ୍ୟକ୍ତି sole proprietorship ର ମାଲିକ ଏବଂ ପରିଚାଳକ।" },
      { quiz: bsQuiz2._id, questionText: "Partnership firm ରେ ସର୍ବାଧିକ partners କେତେ?", options: ["10", "20", "50", "100"], correctAnswer: 2, marks: 1, explanation: "Companies Act 2013 ଅନୁଯାୟୀ ସର୍ବାଧିକ 50 partners ଥାଇପାରିବେ।" },
      { quiz: bsQuiz2._id, questionText: "'Sleeping partner' କିଏ?", options: ["କାମ ସମୟରେ ଘୁମୁଥିବା partner", "ପୁଞ୍ଜି ନିବେଶ କରେ କିନ୍ତୁ management ରେ ଭାଗ ନେଉନାହିଁ", "ଦୈନିକ management କରୁଥିବା", "ବ୍ୟବସାୟ ଛାଡ଼ିଦେଇଥିବା"], correctAnswer: 1, marks: 1, explanation: "Sleeping partner capital ଦିଏ କିନ୍ତୁ management କରେନାହିଁ।" },
      { quiz: bsQuiz2._id, questionText: "Public company ଗଠନ ପାଇଁ minimum members କେତେ?", options: ["2", "5", "7", "10"], correctAnswer: 2, marks: 1, explanation: "Public company ପାଇଁ minimum 7 members ଆବଶ୍ୟକ।" },
      { quiz: bsQuiz2._id, questionText: "'Limited liability' ର ଅର୍ଥ କଣ?", options: ["Unlimited risk", "ନିବେଶିତ ରାଶି ପର୍ଯ୍ୟନ୍ତ liability", "କୌଣସି liability ନାହିଁ", "କେବଳ directors ର liability"], correctAnswer: 1, marks: 1, explanation: "Members ର liability ସେମାନଙ୍କ ନିବେଶ ପର୍ଯ୍ୟନ୍ତ ସୀମିତ।" },
      { quiz: bsQuiz2._id, questionText: "କେଉଁ business form ର perpetual succession ଥାଏ?", options: ["Sole proprietorship", "Partnership", "Company", "HUF"], correctAnswer: 2, marks: 1, explanation: "Company membership ବଦଳିଲେ ମଧ୍ୟ ଚାଲୁ ରହେ।" },
      { quiz: bsQuiz2._id, questionText: "Cooperative society କାହା ଉପରେ ଆଧାରିତ?", options: ["ଲାଭ ସର୍ବାଧିକ କରିବା", "ପରସ୍ପର ସାହାଯ୍ୟ ଏବଂ ସ୍ୱଇଚ୍ଛିକ ସଂଘ", "ସରକାରୀ ନିୟନ୍ତ୍ରଣ", "Single ownership"], correctAnswer: 1, marks: 1, explanation: "Cooperative society ପରସ୍ପର ସହଯୋଗ ପାଇଁ ଗଠିତ।" },
      { quiz: bsQuiz2._id, questionText: "Joint Hindu Family business କଣ?", options: ["Partnership firm", "Hindu law ଅନୁଯାୟୀ Karta ଦ୍ୱାରା ପରିଚାଳିତ ବ୍ୟବସାୟ", "Company", "Cooperative"], correctAnswer: 1, marks: 1, explanation: "HUF business ରେ eldest member Karta ଭାବେ କାମ କରନ୍ତି।" },
      { quiz: bsQuiz2._id, questionText: "Private company ପାଇଁ minimum members କେତେ?", options: ["1", "2", "7", "10"], correctAnswer: 1, marks: 1, explanation: "Private company ପାଇଁ minimum 2 members ଆବଶ୍ୟକ।" },
      { quiz: bsQuiz2._id, questionText: "କେଉଁ document କୁ company ର constitution କୁହାଯାଏ?", options: ["Articles of Association", "Memorandum of Association", "Prospectus", "Certificate of Incorporation"], correctAnswer: 1, marks: 1, explanation: "MOA company ର powers ଏବଂ objectives ନିର୍ଦ୍ଦିଷ୍ଟ କରେ।" },
    ]);

    // Subcategory 3
    const bsQuiz3 = await Quiz.create({
      title: "Business Services - Banking ଏବଂ Insurance",
      subject: "Business Studies",
      category: "Business Services",
      chapter: "Business Services",
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
      { quiz: bsQuiz3._id, questionText: "Commercial bank ର ପ୍ରମୁଖ କାର୍ଯ୍ୟ କଣ?", options: ["Currency ଛପାଇବା", "Deposits ନେବା ଏବଂ ଋଣ ଦେବା", "ଅନ୍ୟ bank ନିୟନ୍ତ୍ରଣ", "କେବଳ foreign trade"], correctAnswer: 1, marks: 1, explanation: "Commercial bank ଜନସାଧାରଣଙ୍କ deposits ନେଇ loan ଦେଇଥାଏ।" },
      { quiz: bsQuiz3._id, questionText: "Insurance କେଉଁ principle ଉପରେ ଆଧାରିତ?", options: ["Gambling", "Risk pooling principle", "Charity", "Government subsidy"], correctAnswer: 1, marks: 1, explanation: "Insurance ରେ ଅନେକଙ୍କ risk କୁ ଏକତ୍ର କରାଯାଏ।" },
      { quiz: bsQuiz3._id, questionText: "କେଉଁଟି bank account ର ପ୍ରକାର ନୁହେଁ?", options: ["Savings Account", "Current Account", "Fixed Deposit", "Insurance Account"], correctAnswer: 3, marks: 1, explanation: "Insurance Account bank account ନୁହେଁ।" },
      { quiz: bsQuiz3._id, questionText: "Insurance ରେ 'premium' କଣ?", options: ["Bonus amount", "Insured ଦ୍ୱାରା ନିୟମିତ ଦିଆଯାଇଥିବା ରାଶି", "Claim amount", "Profit"], correctAnswer: 1, marks: 1, explanation: "Premium policyholder ଦ୍ୱାରା insurance company କୁ ଦିଆଯାଏ।" },
      { quiz: bsQuiz3._id, questionText: "Life insurance କେମିତି contract?", options: ["Indemnity", "Guarantee", "Utmost good faith and assurance", "Sale"], correctAnswer: 2, marks: 1, explanation: "Life insurance utmost good faith ଉପରେ ଆଧାରିତ।" },
      { quiz: bsQuiz3._id, questionText: "'Cheque' କଣ?", options: ["Promissory note", "Bank କୁ ନିର୍ଦ୍ଦିଷ୍ଟ ରାଶି ଦେବା ପାଇଁ ଲିଖିତ ଆଦେଶ", "Receipt", "Invoice"], correctAnswer: 1, marks: 1, explanation: "Cheque ହେଉଛି bank ପାଇଁ written order।" },
      { quiz: bsQuiz3._id, questionText: "Warehousing କଣ?", options: ["Manufacturing", "ପଣ୍ୟ ସଂରକ୍ଷଣ", "ପଣ୍ୟ ବିକ୍ରୟ", "ପରିବହନ"], correctAnswer: 1, marks: 1, explanation: "Warehousing goods କୁ ସଂରକ୍ଷଣ କରେ।" },
      { quiz: bsQuiz3._id, questionText: "କେଉଁ principle ରେ insured insurance ରୁ profit କରିପାରେନାହିଁ?", options: ["Utmost good faith", "Principle of Indemnity", "Insurable interest", "Subrogation"], correctAnswer: 1, marks: 1, explanation: "Indemnity ରେ actual loss ପର୍ଯ୍ୟନ୍ତ compensation ମିଳେ।" },
      { quiz: bsQuiz3._id, questionText: "'E-banking' କଣ?", options: ["Traditional banking", "Internet/electronic ମାଧ୍ୟମରେ banking service", "Export banking", "କେବଳ ATM service"], correctAnswer: 1, marks: 1, explanation: "E-banking ରେ internet ଏବଂ mobile banking ବ୍ୟବହାର ହୁଏ।" },
      { quiz: bsQuiz3._id, questionText: "Transport trade ର କେଉଁ ସମସ୍ୟାକୁ ଦୂର କରେ?", options: ["Time", "Place/distance", "Risk", "Information"], correctAnswer: 1, marks: 1, explanation: "Transport goods କୁ ଏକ ସ୍ଥାନରୁ ଅନ୍ୟ ସ୍ଥାନକୁ ନେଇଯାଏ।" },
    ]);

    console.log("✓ Class 11 Commerce - Business Studies Odia: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceBusinessStudiesOdia;
