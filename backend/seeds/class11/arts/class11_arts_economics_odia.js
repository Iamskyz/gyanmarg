import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsEconomicsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଭାରତୀୟ ଅର୍ଥନୀତି - ଉନ୍ନୟନ ଏବଂ ପରିକଳ୍ପନା",
      subject: "Economics",
      category: "Indian Economy",
      chapter: "ଉନ୍ନୟନ ଏବଂ ପରିକଳ୍ପନା",
      grade: 11,
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
      { quiz: quiz1._id, questionText: "ଭାରତ କେଉଁ ପ୍ରକାର ଅର୍ଥନୈତିକ ପରିକଳ୍ପନା ଗ୍ରହଣ କରିଥିଲା?", options: ["ପୁଞ୍ଜିବାଦୀ", "ପାଞ୍ଚବର୍ଷୀୟ ଯୋଜନା ସହିତ ମିଶ୍ର ଅର୍ଥନୀତି", "ଶୁଦ୍ଧ ସମାଜବାଦୀ", "Laissez-faire"], correctAnswer: 1, marks: 1, explanation: "ଭାରତ 1951ରୁ ମିଶ୍ର ଅର୍ଥନୀତି ଏବଂ Five Year Plans ଗ୍ରହଣ କରିଥିଲା।" },
      { quiz: quiz1._id, questionText: "NITI Aayog କେଉଁ ସଂସ୍ଥାକୁ ପରିବର୍ତ୍ତନ କରିଥିଲା?", options: ["RBI", "Planning Commission", "Finance Commission", "Election Commission"], correctAnswer: 1, marks: 1, explanation: "2015ରେ NITI Aayog Planning Commission କୁ ପରିବର୍ତ୍ତନ କରିଥିଲା।" },
      { quiz: quiz1._id, questionText: "GDP ର ପୂର୍ଣ୍ଣ ଅର୍ଥ କଣ?", options: ["Gross Domestic Price", "Gross Domestic Product", "General Domestic Product", "Gross Development Product"], correctAnswer: 1, marks: 1, explanation: "GDP ହେଉଛି ଏକ ବର୍ଷରେ ଦେଶରେ ଉତ୍ପାଦିତ ସମସ୍ତ ସାମଗ୍ରୀ ଏବଂ ସେବାର ମୂଲ୍ୟ।" },
      { quiz: quiz1._id, questionText: "Green Revolution ମୁଖ୍ୟତଃ କେଉଁ ଫସଲର ଉତ୍ପାଦନ ବଢ଼ାଇଥିଲା?", options: ["ଡାଲି", "ଗହମ ଏବଂ ଧାନ", "କପାସ", "ଅଖୁ"], correctAnswer: 1, marks: 1, explanation: "Green Revolution ଗହମ ଏବଂ ଧାନ ଉତ୍ପାଦନ ବଢ଼ାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "LPG reforms କେବେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "1991ରେ Liberalization, Privatization, Globalization reforms ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "Human Development Index କିଏ ଉନ୍ନତ କରିଥିଲେ?", options: ["World Bank", "Mahbub ul Haq", "Amartya Sen", "Adam Smith"], correctAnswer: 1, marks: 1, explanation: "Mahbub ul Haq HDI ଉନ୍ନତ କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ବର୍ତ୍ତମାନ ଭାରତର GDP ରେ କେଉଁ sector ସର୍ବାଧିକ ଅଂଶ ଦେଉଛି?", options: ["କୃଷି", "ସେବା ଖାତ", "Manufacturing", "Mining"], correctAnswer: 1, marks: 1, explanation: "ସେବା ଖାତ ଭାରତର GDP ରେ ସର୍ବାଧିକ ଅଂଶ ଦେଉଛି।" },
      { quiz: quiz1._id, questionText: "ଭାରତର poverty line କାହା ଉପରେ ଆଧାରିତ?", options: ["କେବଳ ଆୟ", "Calorie consumption ଏବଂ expenditure", "ଶିକ୍ଷା ସ୍ତର", "ଘର ଗୁଣବତ୍ତା"], correctAnswer: 1, marks: 1, explanation: "Poverty line minimum calorie intake ଏବଂ expenditure ଉପରେ ଆଧାରିତ।" },
      { quiz: quiz1._id, questionText: "MGNREGA କେତେ ଦିନର ଚାକିରି ନିଶ୍ଚିତ କରେ?", options: ["50 ଦିନ", "100 ଦିନ", "150 ଦିନ", "200 ଦିନ"], correctAnswer: 1, marks: 1, explanation: "MGNREGA ଗ୍ରାମାଞ୍ଚଳ ପରିବାରକୁ 100 ଦିନର କାମ ଦେଇଥାଏ।" },
      { quiz: quiz1._id, questionText: "Inflation ର ଅର୍ଥ କଣ?", options: ["ମୂଲ୍ୟ ହ୍ରାସ", "ସାଧାରଣ ମୂଲ୍ୟ ସ୍ତରର ନିରନ୍ତର ବୃଦ୍ଧି", "ସ୍ଥିର ମୂଲ୍ୟ", "ଉତ୍ପାଦନ ବୃଦ୍ଧି"], correctAnswer: 1, marks: 1, explanation: "Inflation ହେଉଛି ମୂଲ୍ୟର ନିରନ୍ତର ବୃଦ୍ଧି।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଅର୍ଥନୀତି ପାଇଁ ସାଂଖ୍ୟିକୀ",
      subject: "Economics",
      category: "Statistics",
      chapter: "ସାଂଖ୍ୟିକ ଉପକରଣ",
      grade: 11,
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
      { quiz: quiz2._id, questionText: "2, 4, 6, 8, 10 ର arithmetic mean କେତେ?", options: ["5", "6", "7", "8"], correctAnswer: 1, marks: 1, explanation: "Mean = (2+4+6+8+10)/5 = 6." },
      { quiz: quiz2._id, questionText: "Median କଣ?", options: ["ସର୍ବାଧିକ ଆସୁଥିବା ମୂଲ୍ୟ", "ସଜାଇଥିବା ତଥ୍ୟର ମଧ୍ୟ ମୂଲ୍ୟ", "ସମସ୍ତ ମୂଲ୍ୟର ମଧ୍ୟମ", "ସର୍ବାଧିକ ଏବଂ ସର୍ବନିମ୍ନ ତଫାତ"], correctAnswer: 1, marks: 1, explanation: "Median ହେଉଛି ମଧ୍ୟ ମୂଲ୍ୟ।" },
      { quiz: quiz2._id, questionText: "Mode କଣ?", options: ["Average value", "ସର୍ବାଧିକ ବାର ଆସୁଥିବା ମୂଲ୍ୟ", "ମଧ୍ୟ ମୂଲ୍ୟ", "ତଥ୍ୟର range"], correctAnswer: 1, marks: 1, explanation: "Mode ସର୍ବାଧିକ ଥର ଆସୁଥିବା ମୂଲ୍ୟ।" },
      { quiz: quiz2._id, questionText: "Standard deviation କଣ ମାପେ?", options: ["Central tendency", "Mean ଠାରୁ data ର ବିକ୍ଷେପ", "Frequency", "Correlation"], correctAnswer: 1, marks: 1, explanation: "Standard deviation data ର spread ମାପେ।" },
      { quiz: quiz2._id, questionText: "Bar diagram କେଉଁ ଆକୃତି ବ୍ୟବହାର କରେ?", options: ["ବୃତ୍ତ", "ସମାନ ଚୌଡ଼ା rectangular bar", "ରେଖା", "ଡଟ"], correctAnswer: 1, marks: 1, explanation: "Bar diagram rectangular bar ବ୍ୟବହାର କରେ।" },
      { quiz: quiz2._id, questionText: "Primary data କଣ?", options: ["Published source ର data", "Investigator ନିଜେ ସଂଗ୍ରହ କରିଥିବା data", "Government data", "Internet data"], correctAnswer: 1, marks: 1, explanation: "Primary data ସିଧାସଳଖ ସଂଗ୍ରହ କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Census method ର ଅର୍ଥ କଣ?", options: ["Sample study", "Population ର ପ୍ରତ୍ୟେକ unit ଅଧ୍ୟୟନ", "Random selection", "Cluster sampling"], correctAnswer: 1, marks: 1, explanation: "Census method ରେ ପ୍ରତ୍ୟେକ unit ର data ନିଆଯାଏ।" },
      { quiz: quiz2._id, questionText: "Correlation coefficient ର range କେତେ?", options: ["0 ଠାରୁ 1", "-1 ଠାରୁ +1", "-∞ ଠାରୁ +∞", "0 ଠାରୁ 100"], correctAnswer: 1, marks: 1, explanation: "Correlation coefficient -1 ଠାରୁ +1 ମଧ୍ୟରେ ଥାଏ।" },
      { quiz: quiz2._id, questionText: "Pie chart data କୁ କିପରି ଦର୍ଶାଏ?", options: ["Bar", "ବୃତ୍ତର sector", "ରେଖା", "Histogram"], correctAnswer: 1, marks: 1, explanation: "Pie chart ବୃତ୍ତର sector ଦ୍ୱାରା data ଦର୍ଶାଏ।" },
      { quiz: quiz2._id, questionText: "Index number କଣ ମାପେ?", options: ["Absolute value", "ସମୟ ସହିତ relative change", "Frequency", "Probability"], correctAnswer: 1, marks: 1, explanation: "Index number relative change ମାପେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Microeconomics - Demand ଏବଂ Supply",
      subject: "Economics",
      category: "Microeconomics",
      chapter: "Demand ଏବଂ Supply",
      grade: 11,
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
      { quiz: quiz3._id, questionText: "Law of Demand କଣ କୁହେ?", options: ["Price ଏବଂ demand ସମାନ ଦିଗରେ ଚାଲେ", "Price ବଢ଼ିଲେ demand କମେ", "Supply demand ସୃଷ୍ଟି କରେ", "Demand ସଦା ଏକରକମ"], correctAnswer: 1, marks: 1, explanation: "Law of Demand ଅନୁଯାୟୀ price ବଢ଼ିଲେ demand କମେ।" },
      { quiz: quiz3._id, questionText: "Elasticity of demand କଣ ମାପେ?", options: ["ମୋଟ demand", "Price ପରିବର୍ତ୍ତନ ପ୍ରତି demand ର ପ୍ରତିକ୍ରିୟା", "Supply change", "Income level"], correctAnswer: 1, marks: 1, explanation: "Elasticity demand ର responsiveness ମାପେ।" },
      { quiz: quiz3._id, questionText: "Giffen good ର demand curve କେମିତି ହୁଏ?", options: ["ସାଧାରଣ", "ଉର୍ଦ୍ଧ୍ୱମୁଖୀ", "Perfectly elastic", "Zero elasticity"], correctAnswer: 1, marks: 1, explanation: "Giffen good ର demand curve upward sloping ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Equilibrium price କେବେ ହୁଏ?", options: ["Demand maximum", "Supply = Demand", "Supply maximum", "Price minimum"], correctAnswer: 1, marks: 1, explanation: "Equilibrium ରେ demand ଏବଂ supply ସମାନ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Consumer surplus କଣ?", options: ["Extra supply", "ଦେବାକୁ ପ୍ରସ୍ତୁତ ମୂଲ୍ୟ ଏବଂ ଦିଆଯାଇଥିବା ମୂଲ୍ୟର ତଫାତ", "Seller profit", "Government tax"], correctAnswer: 1, marks: 1, explanation: "Consumer surplus willingness to pay ଏବଂ actual price ମଧ୍ୟର ତଫାତ।" },
      { quiz: quiz3._id, questionText: "Substitute goods ର cross elasticity କେମିତି?", options: ["Negative", "Positive", "Zero", "Infinite"], correctAnswer: 1, marks: 1, explanation: "Substitute goods ର cross elasticity positive ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Law of diminishing marginal utility କଣ କୁହେ?", options: ["Utility ସଦା ବଢ଼େ", "ଅଧିକ unit ବ୍ୟବହାର କଲେ additional utility କମେ", "Total utility constant", "Price utility ନିର୍ଣ୍ଣୟ କରେ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ ଅତିରିକ୍ତ unit ସହ utility କମିଯାଏ।" },
      { quiz: quiz3._id, questionText: "Perfect competition market ର ବିଶେଷତା କଣ?", options: ["ଏକ seller", "କିଛି seller", "ଅନେକ buyer ଏବଂ seller ସହ homogeneous product", "Product differentiation"], correctAnswer: 2, marks: 1, explanation: "Perfect competition ରେ ଅନେକ buyer ଏବଂ seller ଥାନ୍ତି।" },
      { quiz: quiz3._id, questionText: "Opportunity cost ର ଅର୍ଥ କଣ?", options: ["Actual money spent", "ଛାଡ଼ିଦିଆଯାଇଥିବା next best alternative ର ମୂଲ୍ୟ", "ମୋଟ ଉତ୍ପାଦନ ଖର୍ଚ୍ଚ", "Fixed cost"], correctAnswer: 1, marks: 1, explanation: "Opportunity cost ହେଉଛି ଛାଡ଼ିଦିଆଯାଇଥିବା ସର୍ବୋତ୍ତମ ବିକଳ୍ପର ମୂଲ୍ୟ।" },
      { quiz: quiz3._id, questionText: "Production possibility curve କଣ ଦର୍ଶାଏ?", options: ["କେବଳ maximum output", "ଉପଲବ୍ଧ ସମ୍ପଦ ସହିତ ଉତ୍ପାଦିତ ହୋଇପାରୁଥିବା ଦୁଇ ପଦାର୍ଥର ସମ୍ଭାବ୍ୟ ସଂଯୋଜନ", "Demand curve", "Supply curve"], correctAnswer: 1, marks: 1, explanation: "PPC ଦୁଇ ପଦାର୍ଥର ସମ୍ଭାବ୍ୟ ଉତ୍ପାଦନ ସଂଯୋଜନ ଦର୍ଶାଏ।" },
    ]);

    console.log("✓ Class 11 Arts - Economics Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsEconomicsOdia };
