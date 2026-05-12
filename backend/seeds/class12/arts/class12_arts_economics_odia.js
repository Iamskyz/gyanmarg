import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsEconomicsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଭାରତୀୟ ଅର୍ଥନୀତି - ବିକାଶ ଏବଂ ଯୋଜନା",
      subject: "Economics",
      category: "Indian Economy",
      chapter: "ବିକାଶ ଅନୁଭବ",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "NITI Aayog କେଉଁ ସଂସ୍ଥାକୁ ପରିବର୍ତ୍ତନ କରିଥିଲା?", options: ["RBI", "Planning Commission", "Finance Commission", "SEBI"], correctAnswer: 1, marks: 1, explanation: "2015 ରେ NITI Aayog Planning Commission କୁ ପରିବର୍ତ୍ତନ କରିଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଭାରତର LPG reforms କେଉଁ ବର୍ଷରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "P.V. Narasimha Rao ଙ୍କ ସମୟରେ Liberalization, Privatization, Globalization ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "Green Revolution ପ୍ରାଧାନତଃ କେଉଁ ଫସଳକୁ ଲାଭ ଦେଇଥିଲା?", options: ["Pulses and oilseeds", "Wheat and rice", "Cotton and jute", "Sugarcane and tea"], correctAnswer: 1, marks: 1, explanation: "HYV seeds ଦ୍ୱାରା ଗହମ ଏବଂ ଧାନ ଉତ୍ପାଦନ ବଢ଼ିଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଭାରତର poverty line କ’ଣ ଉପରେ ଆଧାରିତ?", options: ["କେବଳ ଆୟ", "Calorie consumption", "Assets", "Education"], correctAnswer: 1, marks: 1, explanation: "ଗ୍ରାମାଞ୍ଚଳରେ 2400 cal ଏବଂ ସହରରେ 2100 cal ପ୍ରତିଦିନ।" },
      { quiz: quiz1._id, questionText: "MGNREGA କେତେ ଦିନର ନିଯୁକ୍ତି ନିଶ୍ଚିତ କରେ?", options: ["50", "100", "150", "200"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତି ପରିବାରକୁ ବର୍ଷକୁ 100 ଦିନର wage employment ନିଶ୍ଚିତ କରାଯାଏ।" },
      { quiz: quiz1._id, questionText: "ଭାରତର ସବୁଠାରୁ ବଡ଼ employment sector କ’ଣ?", options: ["Industry", "Services", "Agriculture", "Mining"], correctAnswer: 2, marks: 1, explanation: "Agriculture ଭାରତର ପ୍ରାୟ 42% workforce କୁ ନିଯୁକ୍ତି ଦେଇଥାଏ।" },
      { quiz: quiz1._id, questionText: "Disguised unemployment କ’ଣ?", options: ["Open unemployment", "ଆବଶ୍ୟକତାଠାରୁ ଅଧିକ workers ଯାହାଙ୍କ marginal productivity ଶୂନ୍ୟ", "Seasonal unemployment", "Voluntary unemployment"], correctAnswer: 1, marks: 1, explanation: "Agriculture ରେ କାହାକୁ ହଟାଇଲେ output କମେନାହିଁ।" },
      { quiz: quiz1._id, questionText: "HDI କିଏ ବିକଶିତ କରିଥିଲେ?", options: ["World Bank", "Mahbub ul Haq and Amartya Sen", "IMF", "WTO"], correctAnswer: 1, marks: 1, explanation: "UNDP ଏହି framework ଆଧାରରେ HDI ପ୍ରକାଶ କରେ।" },
      { quiz: quiz1._id, questionText: "ଭାରତର GDP କୁ ସବୁଠାରୁ ଅଧିକ କେଉଁ sector ଅବଦାନ ଦେଉଛି?", options: ["Agriculture", "Industry", "Services", "Mining"], correctAnswer: 2, marks: 1, explanation: "Services sector ଭାରତର GDP ର 50% ଠାରୁ ଅଧିକ ଅବଦାନ ଦେଉଛି।" },
      { quiz: quiz1._id, questionText: "Infant Mortality Rate କ’ଣ ମାପେ?", options: ["ପ୍ରତି 1000 adults ର ମୃତ୍ୟୁ", "1 ବର୍ଷରୁ କମ୍ ଶିଶୁମୃତ୍ୟୁ ପ୍ରତି 1000 live births", "Birth rate", "Fertility rate"], correctAnswer: 1, marks: 1, explanation: "IMR ହେଉଛି healthcare quality ର ମୁଖ୍ୟ ସୂଚକ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ମାକ୍ରୋ ଅର୍ଥନୀତି - ଜାତୀୟ ଆୟ ଏବଂ ଟଙ୍କା",
      subject: "Economics",
      category: "Macroeconomics",
      chapter: "National Income Accounting",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "GDP କ’ଣ ମାପେ?", options: ["କେବଳ exports", "ଦେଶ ଭିତରେ ଉତ୍ପାଦିତ ସମସ୍ତ goods ଏବଂ services ର ମୂଲ୍ୟ", "କେବଳ government spending", "କେବଳ consumption"], correctAnswer: 1, marks: 1, explanation: "GDP ରେ ସମସ୍ତ final goods ଏବଂ services ଅନ୍ତର୍ଭୁକ୍ତ।" },
      { quiz: quiz2._id, questionText: "Fiscal policy କାହା ଦ୍ୱାରା ନିୟନ୍ତ୍ରିତ?", options: ["RBI", "Government", "Banks", "Stock Exchange"], correctAnswer: 1, marks: 1, explanation: "Government taxation ଏବଂ spending କୁ fiscal tools ଭାବେ ବ୍ୟବହାର କରେ।" },
      { quiz: quiz2._id, questionText: "ଭାରତର monetary policy କିଏ ନିୟନ୍ତ୍ରଣ କରେ?", options: ["Finance Ministry", "RBI", "SEBI", "NITI Aayog"], correctAnswer: 1, marks: 1, explanation: "RBI ବିଭିନ୍ନ ଉପକରଣ ଦ୍ୱାରା money supply ନିୟନ୍ତ୍ରଣ କରେ।" },
      { quiz: quiz2._id, questionText: "Multiplier effect ର ଅର୍ଥ କ’ଣ?", options: ["ଆୟ କମିଯିବା", "ପ୍ରାରମ୍ଭିକ investment ଦ୍ୱାରା national income ର ବଡ଼ ବୃଦ୍ଧି", "କୌଣସି ପରିବର୍ତ୍ତନ ନାହିଁ", "କେବଳ price increase"], correctAnswer: 1, marks: 1, explanation: "Keynesian multiplier = 1/(1-MPC)।" },
      { quiz: quiz2._id, questionText: "Inflation ର ଅର୍ଥ କ’ଣ?", options: ["ମୂଲ୍ୟ କମିଯିବା", "ସାଧାରଣ ମୂଲ୍ୟ ସ୍ତରର ଅବିରତ ବୃଦ୍ଧି", "ସ୍ଥିର ମୂଲ୍ୟ", "ଏକମାତ୍ର ପଣ୍ୟର ମୂଲ୍ୟ ବୃଦ୍ଧି"], correctAnswer: 1, marks: 1, explanation: "ମୂଲ୍ୟ ବୃଦ୍ଧି purchasing power କୁ କମାଇଦିଏ।" },
      { quiz: quiz2._id, questionText: "Demand-pull inflation କ’ଣ ଦ୍ୱାରା ହୁଏ?", options: ["Supply shortage", "Supply ଠାରୁ ଅଧିକ demand", "Cost increase", "Government policy"], correctAnswer: 1, marks: 1, explanation: "ଅତ୍ୟଧିକ ଟଙ୍କା କମ୍ ପଣ୍ୟ ପଛରେ ଥାଏ।" },
      { quiz: quiz2._id, questionText: "Stagflation କ’ଣ?", options: ["High growth + low inflation", "High inflation + high unemployment + stagnant growth", "Low inflation + low unemployment", "Deflation"], correctAnswer: 1, marks: 1, explanation: "ଏହା stagnation ଏବଂ inflation ର ମିଶ୍ରଣ।" },
      { quiz: quiz2._id, questionText: "Government budget deficit କିପରି ଭରଣ କରାଯାଏ?", options: ["କେବଳ ଟଙ୍କା ଛପାଇ", "Borrowing ଏବଂ ଟଙ୍କା ଛପାଇ", "କେବଳ tax", "କେବଳ exports"], correctAnswer: 1, marks: 1, explanation: "Government public ଏବଂ RBI ଠାରୁ ଧନ ଧାର କରେ।" },
      { quiz: quiz2._id, questionText: "Progressive tax ର ଅର୍ଥ କ’ଣ?", options: ["ସମସ୍ତଙ୍କ ପାଇଁ same rate", "ଅଧିକ income ଉପରେ ଅଧିକ tax rate", "କମ୍ income ଥିବା ଲୋକ ଅଧିକ tax ଦେଇଥାନ୍ତି", "କୌଣସି tax ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Income ବଢ଼ିଲେ tax rate ବଢ଼େ।" },
      { quiz: quiz2._id, questionText: "BOP ର current account ରେ କ’ଣ ଥାଏ?", options: ["Capital transfers", "Goods, services ଏବଂ transfers ର trade", "FDI", "Portfolio investment"], correctAnswer: 1, marks: 1, explanation: "Visible trade, invisible trade ଏବଂ unilateral transfers ଥାଏ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ତୁଳନାତ୍ମକ ବିକାଶ - ଭାରତ, ଚୀନ, ପାକିସ୍ତାନ",
      subject: "Economics",
      category: "Comparative Economics",
      chapter: "Development Strategies",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "ଚୀନର economic reforms କେଉଁ ବର୍ଷରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1975", "1978", "1985", "1991"], correctAnswer: 1, marks: 1, explanation: "1978 ରେ Deng Xiaoping reforms ଆରମ୍ଭ କରିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "Special Economic Zones (SEZ) ପ୍ରଥମେ କେଉଁ ଦେଶରେ ସୃଷ୍ଟି ହୋଇଥିଲା?", options: ["India", "China", "Pakistan", "Japan"], correctAnswer: 1, marks: 1, explanation: "1980 ରେ China foreign investment ଆକର୍ଷଣ ପାଇଁ SEZ ଗଠନ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "Pakistan ର economy କାହା ଉପରେ ଅଧିକ ନିର୍ଭର?", options: ["IT sector", "Agriculture and remittances", "Manufacturing", "Tourism"], correctAnswer: 1, marks: 1, explanation: "Agriculture ଏବଂ overseas remittances ପ୍ରମୁଖ ଅବଦାନକାରୀ।" },
      { quiz: quiz3._id, questionText: "India, China, Pakistan ମଧ୍ୟରେ ସବୁଠାରୁ ଉଚ୍ଚ HDI କାହାର?", options: ["India", "China", "Pakistan", "ସମସ୍ତଙ୍କ ସମାନ"], correctAnswer: 1, marks: 1, explanation: "China ର life expectancy, literacy ଏବଂ per capita income ଅଧିକ।" },
      { quiz: quiz3._id, questionText: "ଭାରତର demographic dividend ର ଅର୍ଥ କ’ଣ?", options: ["ବୃଦ୍ଧ ଜନସଂଖ୍ୟା", "ବଡ଼ working-age population", "Low birth rate", "High death rate"], correctAnswer: 1, marks: 1, explanation: "ଯୁବ ଜନସଂଖ୍ୟା economic growth କୁ ବଢ଼ାଇପାରେ।" },
      { quiz: quiz3._id, questionText: "Great Leap Forward କାହାର ନୀତି ଥିଲା?", options: ["India", "China", "Pakistan", "Japan"], correctAnswer: 1, marks: 1, explanation: "1958 ରେ Mao ଙ୍କ rapid industrialization campaign।" },
      { quiz: quiz3._id, questionText: "One Child Policy କେଉଁ ଦେଶରେ ଲାଗୁ ହୋଇଥିଲା?", options: ["India", "China", "Pakistan", "Bangladesh"], correctAnswer: 1, marks: 1, explanation: "China 1979 ଠାରୁ 2015 ପର୍ଯ୍ୟନ୍ତ ଏହାକୁ ଲାଗୁ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "ଭାରତର mixed economy ର ଅର୍ଥ କ’ଣ?", options: ["କେବଳ private sector", "Public ଏବଂ private sector ର ସହଅସ୍ତିତ୍ୱ", "କେବଳ public sector", "No planning"], correctAnswer: 1, marks: 1, explanation: "Government ଏବଂ private enterprise ଉଭୟର ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଭୂମିକା ଅଛି।" },
      { quiz: quiz3._id, questionText: "କେଉଁ ଦେଶ ପ୍ରଥମେ economy liberalize କରିଥିଲା?", options: ["India (1991)", "China (1978)", "Pakistan (1988)", "ସମସ୍ତେ ସମୟରେ"], correctAnswer: 1, marks: 1, explanation: "China 1978 ରେ reforms ଆରମ୍ଭ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "ତିନୋଟି ଦେଶର ସାଧାରଣ challenge କ’ଣ?", options: ["କେବଳ overpopulation", "Poverty, inequality ଏବଂ environmental degradation", "No natural resources", "No workforce"], correctAnswer: 1, marks: 1, explanation: "ସମସ୍ତ ଦେଶ poverty, inequality ଏବଂ sustainability ସମସ୍ୟା ସମ୍ମୁଖୀନ।" },
    ]);

    console.log("✓ Class 12 Arts - Economics Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsEconomicsOdia };
