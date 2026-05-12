import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceBusinessStudiesOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ପରିଚାଳନା ସିଦ୍ଧାନ୍ତ ଏବଂ କାର୍ଯ୍ୟ",
      subject: "Business Studies",
      category: "Management",
      chapter: "ସିଦ୍ଧାନ୍ତ ଏବଂ କାର୍ଯ୍ୟ",
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
      { quiz: quiz1._id, questionText: "Planning କ’ଣ?", options: ["ଅତୀତକୁ ଦେଖିବା", "ଆଗରୁ କ’ଣ, କିପରି ଏବଂ କିଏ କରିବ ନିର୍ଦ୍ଧାରଣ କରିବା", "କେବଳ ବଡ଼ କମ୍ପାନୀ ପାଇଁ", "ଇଚ୍ଛାଧୀନ କାର୍ଯ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "Planning ରେ objective ଏବଂ action ପୂର୍ବରୁ ନିର୍ଦ୍ଧାରଣ କରାଯାଏ।" },
      { quiz: quiz1._id, questionText: "Fayol ଙ୍କ 'Unity of Command' ସିଦ୍ଧାନ୍ତର ଅର୍ଥ କ’ଣ?", options: ["ସମସ୍ତଙ୍କ ପାଇଁ ଏକ ପ୍ରଣାଳୀ", "ପ୍ରତ୍ୟେକ କର୍ମଚାରୀଙ୍କ ପାଇଁ ଏକ ଅଧିକାରୀ", "ଏକ ବିଭାଗ", "ଏକ ପଣ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ କର୍ମଚାରୀ କେବଳ ଏକ superior ଠାରୁ ନିର୍ଦ୍ଦେଶ ପାଇବା ଉଚିତ।" },
      { quiz: quiz1._id, questionText: "Management ର controlling function କ’ଣ କରେ?", options: ["କେବଳ planning", "Performance ମାପି deviation ସୁଧାରେ", "କେବଳ recruitment", "କେବଳ motivation"], correctAnswer: 1, marks: 1, explanation: "Controlling actual performance କୁ standard ସହ ତୁଳନା କରେ।" },
      { quiz: quiz1._id, questionText: "Delegation of authority ର ଅର୍ଥ କ’ଣ?", options: ["ସମସ୍ତ ଶକ୍ତି ଛାଡ଼ିଦେବା", "ଦାୟିତ୍ୱ ରଖି ଅଧିକାର ଅଧସ୍ଥଙ୍କୁ ଦେବା", "Manager ହଟାଇବା", "ସମସ୍ତ ନିଷ୍ପତ୍ତି ଉପର ସ୍ତରରେ"], correctAnswer: 1, marks: 1, explanation: "Authority transfer ହେଲେମଧ୍ୟ accountability delegator ପାଖରେ ରହେ।" },
      { quiz: quiz1._id, questionText: "Taylor ଙ୍କ Scientific Management କ’ଣ ଉପରେ ଗୁରୁତ୍ୱ ଦେଇଥାଏ?", options: ["Human relations", "Scientific method ଦ୍ୱାରା efficiency ବଢ଼ାଇବା", "Financial management", "Marketing"], correctAnswer: 1, marks: 1, explanation: "Scientific study ଦ୍ୱାରା productivity ବଢ଼ାଇବା ଉଦ୍ଦେଶ୍ୟ।" },
      { quiz: quiz1._id, questionText: "Span of management କ’ଣ ସୂଚାଏ?", options: ["କାମର ସମୟ", "ଏକ manager କେତେ ଜଣଙ୍କୁ ନିର୍ଦ୍ଦେଶନା କରିପାରିବେ", "Company size", "Product range"], correctAnswer: 1, marks: 1, explanation: "ଏକ manager ଙ୍କ ଅଧୀନରେ କେତେ subordinate ରହିଛନ୍ତି।" },
      { quiz: quiz1._id, questionText: "Decentralization ର ଅର୍ଥ କ’ଣ?", options: ["ସମସ୍ତ ନିଷ୍ପତ୍ତି ଉପରେ", "ନିମ୍ନ ସ୍ତରକୁ authority ବଣ୍ଟନ", "Department ହଟାଇବା", "Staff କମାଇବା"], correctAnswer: 1, marks: 1, explanation: "Decision-making authority organization ରେ ବଣ୍ଟନ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "Maslow ଙ୍କ hierarchy of needs କେଉଁଥିରୁ ଆରମ୍ଭ ହୁଏ?", options: ["Self-actualization", "Physiological needs", "Safety needs", "Social needs"], correctAnswer: 1, marks: 1, explanation: "Food, water, shelter ପରି basic needs ପ୍ରଥମେ ଆସେ।" },
      { quiz: quiz1._id, questionText: "Staffing function ରେ କ’ଣ ଥାଏ?", options: ["କେବଳ recruitment", "Recruitment, selection, training ଏବଂ development", "କେବଳ salary", "କେବଳ termination"], correctAnswer: 1, marks: 1, explanation: "ସମଗ୍ର manpower process କୁ staffing କୁହାଯାଏ।" },
      { quiz: quiz1._id, questionText: "Formal organization କ’ଣ?", options: ["Friendship ଉପରେ ଆଧାରିତ", "ସ୍ପଷ୍ଟ ଭୂମିକା ସହିତ ଯୋଜନାବଦ୍ଧ ସଂରଚନା", "Spontaneous", "Temporary"], correctAnswer: 1, marks: 1, explanation: "ଏହା consciously designed authority structure।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ବିପଣନ ପରିଚାଳନା",
      subject: "Business Studies",
      category: "Marketing",
      chapter: "Marketing Mix and Consumer Protection",
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
      { quiz: quiz2._id, questionText: "Marketing mix ରେ କ’ଣ ଥାଏ?", options: ["3 Ps", "4 Ps: Product, Price, Place, Promotion", "5 Ps", "2 Ps"], correctAnswer: 1, marks: 1, explanation: "4 Ps marketing ର ମୌଳିକ framework।" },
      { quiz: quiz2._id, questionText: "Branding କିପରି ସାହାଯ୍ୟ କରେ?", options: ["କେବଳ ଖର୍ଚ୍ଚ ବଢ଼ାଏ", "ପଣ୍ୟ ପରିଚୟ ଏବଂ ପୃଥକତା", "Quality କମାଏ", "Competition ହଟାଏ"], correctAnswer: 1, marks: 1, explanation: "Brand loyalty ଏବଂ differentiation ସୃଷ୍ଟି କରେ।" },
      { quiz: quiz2._id, questionText: "Consumer Protection Act 2019 କେଉଁ act କୁ ପରିବର୍ତ୍ତନ କଲା?", options: ["Companies Act", "Consumer Protection Act 1986", "Sale of Goods Act", "Contract Act"], correctAnswer: 1, marks: 1, explanation: "2019 Act ରେ consumer rights ଅଧିକ ଶକ୍ତିଶାଳୀ କରାଯାଇଛି।" },
      { quiz: quiz2._id, questionText: "Personal selling କ’ଣ?", options: ["Mass communication", "Seller ଏବଂ buyer ମଧ୍ୟରେ face-to-face interaction", "କେବଳ advertising", "କେବଳ online sales"], correctAnswer: 1, marks: 1, explanation: "Direct communication ଦ୍ୱାରା customer କୁ persuade କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Packaging ର କାମ କ’ଣ?", options: ["କେବଳ decoration", "Protection, information ଏବଂ promotion", "କେବଳ storage", "କେବଳ transport"], correctAnswer: 1, marks: 1, explanation: "Packaging silent salesman ଭାବରେ କାମ କରେ।" },
      { quiz: quiz2._id, questionText: "Price skimming strategy କ’ଣ?", options: ["Low initial price", "High initial price ଏବଂ ପରେ କମାଇବା", "ସଦା fixed price", "Free product"], correctAnswer: 1, marks: 1, explanation: "Initial high price early adopters ଠାରୁ revenue maximize କରେ।" },
      { quiz: quiz2._id, questionText: "Advertising କେଉଁ ପ୍ରକାର communication?", options: ["Personal", "Non-personal paid mass communication", "Free publicity", "Direct selling"], correctAnswer: 1, marks: 1, explanation: "Mass media ଦ୍ୱାରା paid promotion।" },
      { quiz: quiz2._id, questionText: "Distribution channel କ’ଣ?", options: ["Manufacturing process", "Producer ଠାରୁ consumer ପର୍ଯ୍ୟନ୍ତ ପଣ୍ୟର ପଥ", "Advertising medium", "Pricing strategy"], correctAnswer: 1, marks: 1, explanation: "Intermediaries ଦ୍ୱାରା ପଣ୍ୟ consumer ପାଖକୁ ପହଞ୍ଚେ।" },
      { quiz: quiz2._id, questionText: "Product life cycle ରେ କେତେ stage ଥାଏ?", options: ["2", "4", "6", "3"], correctAnswer: 1, marks: 1, explanation: "Introduction, Growth, Maturity, Decline।" },
      { quiz: quiz2._id, questionText: "Consumer rights ରେ କ’ଣ ଥାଏ?", options: ["Exploit କରିବାର ଅଧିକାର", "Safety, information, choice ଏବଂ redressal ର ଅଧିକାର", "Monopoly", "Unlimited returns"], correctAnswer: 1, marks: 1, explanation: "Consumer education ଏବଂ protection ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଆର୍ଥିକ ପରିଚାଳନା ଏବଂ ବଜାର",
      subject: "Business Studies",
      category: "Finance",
      chapter: "Financial Management",
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
      { quiz: quiz3._id, questionText: "Capital structure କ’ଣ ସୂଚାଏ?", options: ["କେବଳ equity", "Debt ଏବଂ equity financing ର ମିଶ୍ରଣ", "କେବଳ debt", "କେବଳ reserve"], correctAnswer: 1, marks: 1, explanation: "Firm financing ର debt-equity proportion।" },
      { quiz: quiz3._id, questionText: "Working capital କ’ଣ?", options: ["Fixed assets - long term debt", "Current assets - current liabilities", "Total assets", "Share capital"], correctAnswer: 1, marks: 1, explanation: "ଦୈନିକ କାର୍ଯ୍ୟ ପାଇଁ ଆବଶ୍ୟକ ଧନ।" },
      { quiz: quiz3._id, questionText: "SEBI ର ପୂର୍ଣ୍ଣ ରୂପ କଣ?", options: ["State Exchange Board", "Securities and Exchange Board of India", "Stock and Equity Board", "Share Exchange Bureau"], correctAnswer: 1, marks: 1, explanation: "SEBI securities market କୁ regulate କରେ।" },
      { quiz: quiz3._id, questionText: "Primary market କ’ଣ ସମ୍ପର୍କିତ?", options: ["Old securities", "ନୂତନ securities issue", "Second-hand goods", "Government bonds only"], correctAnswer: 1, marks: 1, explanation: "IPO ମାଧ୍ୟମରେ first issue।" },
      { quiz: quiz3._id, questionText: "Financial leverage କେବେ favorable?", options: ["ROI < Interest", "ROI > Interest rate", "Debt ନଥିଲେ", "କେବଳ equity"], correctAnswer: 1, marks: 1, explanation: "Return on investment debt cost ଠାରୁ ଅଧିକ ହେଲେ।" },
      { quiz: quiz3._id, questionText: "Dividend decision କ’ଣ ଉପରେ ନିର୍ଭର କରେ?", options: ["Weather", "Earnings, cash flow ଏବଂ shareholder expectation", "କେବଳ tax", "କେବଳ law"], correctAnswer: 1, marks: 1, explanation: "Company growth ଏବଂ shareholder needs ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।" },
      { quiz: quiz3._id, questionText: "Money market କେଉଁ fund ରେ deal କରେ?", options: ["Long-term", "Short-term funds", "Real estate", "Foreign exchange only"], correctAnswer: 1, marks: 1, explanation: "1 ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ short-term borrowing/lending।" },
      { quiz: quiz3._id, questionText: "Stock exchange କ’ଣ?", options: ["Primary market", "Existing securities ର secondary market", "Wholesale market", "Retail market"], correctAnswer: 1, marks: 1, explanation: "Previously issued securities ର trading।" },
      { quiz: quiz3._id, questionText: "Fixed capital requirement କ’ଣ ଉପରେ ନିର୍ଭର କରେ?", options: ["Daily sales", "Business nature ଏବଂ operation scale", "Employees only", "Location only"], correctAnswer: 1, marks: 1, explanation: "Manufacturing firms କୁ ଅଧିକ fixed capital ଦରକାର।" },
      { quiz: quiz3._id, questionText: "Treasury bills କିଏ ଜାରି କରେ?", options: ["Commercial banks", "RBI", "Private companies", "Stock exchange"], correctAnswer: 1, marks: 1, explanation: "RBI ସରକାର ପକ୍ଷରୁ treasury bills issue କରେ।" },
    ]);

    console.log("✓ Class 12 Commerce - Business Studies Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceBusinessStudiesOdia };
