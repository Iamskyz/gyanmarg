
// Full Odia translated Class 9 Mathematics file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9MathematicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ସଂଖ୍ୟା ପଦ୍ଧତି
    const mathQuiz1 = await Quiz.create({
      title: "ସଂଖ୍ୟା ପଦ୍ଧତି - ପରିମେୟ ଏବଂ ଅପରିମେୟ ସଂଖ୍ୟା",
      subject: "Mathematics",
      category: "ସଂଖ୍ୟା ପଦ୍ଧତି",
      chapter: "Number Systems",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "ନିମ୍ନୋକ୍ତ ମଧ୍ୟରୁ କେଉଁଟି ଅପରିମେୟ ସଂଖ୍ୟା?", options: ["3/4", "√2", "0.5", "7"], correctAnswer: 1, marks: 1, explanation: "√2 କୁ p/q ରୂପରେ ଲେଖିପାରିବ ନାହିଁ, ସେଥିପାଇଁ ଏହା ଅପରିମେୟ।" },
      { quiz: mathQuiz1._id, questionText: "√3 କେଉଁ ଦୁଇଟି ପୂର୍ଣ୍ଣସଂଖ୍ୟା ମଧ୍ୟରେ ଅଛି?", options: ["1 ଏବଂ 2", "2 ଏବଂ 3", "3 ଏବଂ 4", "0 ଏବଂ 1"], correctAnswer: 0, marks: 1, explanation: "√1 = 1 ଏବଂ √4 = 2, ତେଣୁ √3 1 ଏବଂ 2 ମଧ୍ୟରେ ଅଛି।" },
      { quiz: mathQuiz1._id, questionText: "1/3 ର decimal expansion କଣ?", options: ["0.3", "0.33", "0.333...(ପୁନରାବୃତ୍ତିଶୀଳ)", "0.3 (ସମାପ୍ତ)"], correctAnswer: 2, marks: 1, explanation: "1/3 = 0.333... ଯାହା non-terminating recurring decimal।" },
      { quiz: mathQuiz1._id, questionText: "ପ୍ରତ୍ୟେକ ପରିମେୟ ସଂଖ୍ୟା କଣ?", options: ["ପ୍ରାକୃତିକ ସଂଖ୍ୟା", "ପୂର୍ଣ୍ଣସଂଖ୍ୟା", "ବାସ୍ତବ ସଂଖ୍ୟା", "ଅପରିମେୟ ସଂଖ୍ୟା"], correctAnswer: 2, marks: 1, explanation: "ପ୍ରତ୍ୟେକ ପରିମେୟ ସଂଖ୍ୟା ଏକ ବାସ୍ତବ ସଂଖ୍ୟା।" },
      { quiz: mathQuiz1._id, questionText: "√9 + √16 ର ମୂଲ୍ୟ କଣ?", options: ["5", "7", "25", "√25"], correctAnswer: 1, marks: 1, explanation: "√9 = 3 ଏବଂ √16 = 4, ତେଣୁ 3 + 4 = 7।" },
      { quiz: mathQuiz1._id, questionText: "ନିମ୍ନୋକ୍ତ ମଧ୍ୟରୁ କେଉଁଟି terminating decimal?", options: ["1/3", "1/7", "1/8", "1/6"], correctAnswer: 2, marks: 1, explanation: "1/8 = 0.125 ଯାହା ସମାପ୍ତ decimal।" },
      { quiz: mathQuiz1._id, questionText: "1/√2 କୁ rationalize କର।", options: ["√2", "√2/2", "2/√2", "1/2"], correctAnswer: 1, marks: 1, explanation: "1/√2 × √2/√2 = √2/2।" },
      { quiz: mathQuiz1._id, questionText: "ଏକ ପରିମେୟ ଏବଂ ଏକ ଅପରିମେୟ ସଂଖ୍ୟାର ଯୋଗଫଳ କଣ?", options: ["ସଦା ପରିମେୟ", "ସଦା ଅପରିମେୟ", "କେବେ କେବେ ପରିମେୟ", "ଶୂନ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ପରିମେୟ + ଅପରିମେୟ = ଅପରିମେୟ।" },
      { quiz: mathQuiz1._id, questionText: "2^(1/3) କୁ କଣ କୁହାଯାଏ?", options: ["2 ର ବର୍ଗମୂଳ", "2 ର ଘନମୂଳ", "2 ଘନ", "2 ବର୍ଗ"], correctAnswer: 1, marks: 1, explanation: "2^(1/3) = ∛2 ଯାହା 2 ର ଘନମୂଳ।" },
      { quiz: mathQuiz1._id, questionText: "1 ଏବଂ 2 ମଧ୍ୟରେ କେତେ ପରିମେୟ ସଂଖ୍ୟା ଅଛି?", options: ["10", "100", "1000", "ଅସୀମ"], correctAnswer: 3, marks: 1, explanation: "ଦୁଇ ସଂଖ୍ୟା ମଧ୍ୟରେ ଅସୀମ ପରିମେୟ ସଂଖ୍ୟା ଅଛି।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ବହୁପଦୀ
    const mathQuiz2 = await Quiz.create({
      title: "ବହୁପଦୀ",
      subject: "Mathematics",
      category: "ବୀଜଗଣିତ",
      chapter: "Polynomials",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "4x³ + 2x² + 7 ର degree କେତେ?", options: ["1", "2", "3", "7"], correctAnswer: 2, marks: 1, explanation: "x ର ସର୍ବାଧିକ ଘାତ 3, ତେଣୁ degree = 3।" },
      { quiz: mathQuiz2._id, questionText: "Degree 1 ବହୁପଦୀକୁ କଣ କୁହାଯାଏ?", options: ["ଧାବକ", "ରେଖୀୟ", "ଦ୍ୱିଘାତ", "ଘନ"], correctAnswer: 1, marks: 1, explanation: "Degree 1 = Linear polynomial।" },
      { quiz: mathQuiz2._id, questionText: "p(x) = 2x - 6 ର zero କଣ?", options: ["2", "3", "6", "-3"], correctAnswer: 1, marks: 1, explanation: "2x - 6 = 0 ⇒ x = 3।" },
      { quiz: mathQuiz2._id, questionText: "ଏକ ଦ୍ୱିଘାତ ବହୁପଦୀର ସର୍ବାଧିକ କେତେ zero ଥାଏ?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "ଦ୍ୱିଘାତ ବହୁପଦୀର ସର୍ବାଧିକ 2ଟି zero ଥାଏ।" },
      { quiz: mathQuiz2._id, questionText: "p(x)=x²-5x+6 ର p(2) କେତେ?", options: ["0", "1", "2", "-2"], correctAnswer: 0, marks: 1, explanation: "p(2)=4-10+6=0।" },
      { quiz: mathQuiz2._id, questionText: "x² - 5x + 6 ର ଏକ factor କଣ?", options: ["(x - 1)", "(x - 2)", "(x - 4)", "(x + 2)"], correctAnswer: 1, marks: 1, explanation: "x² - 5x + 6 = (x - 2)(x - 3)।" },
      { quiz: mathQuiz2._id, questionText: "x³ + 1 କୁ x + 1 ଦ୍ୱାରା ଭାଗ କଲେ remainder କେତେ?", options: ["0", "1", "2", "-1"], correctAnswer: 0, marks: 1, explanation: "p(-1)=(-1)³+1=0।" },
      { quiz: mathQuiz2._id, questionText: "(x + 2)² କୁ expand କର।", options: ["x² + 4", "x² + 2x + 4", "x² + 4x + 4", "x² + 4x + 2"], correctAnswer: 2, marks: 1, explanation: "(x+2)²=x²+4x+4।" },
      { quiz: mathQuiz2._id, questionText: "x² - 9 କୁ factorize କର।", options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "(x-9)(x+1)"], correctAnswer: 2, marks: 1, explanation: "x² - 9 = (x-3)(x+3)।" },
      { quiz: mathQuiz2._id, questionText: "(a+b)(a-b) ର ମୂଲ୍ୟ କଣ?", options: ["a²+b²", "a²-b²", "a²+2ab+b²", "a²-2ab+b²"], correctAnswer: 1, marks: 1, explanation: "(a+b)(a-b)=a²-b²।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ସମନ୍ୱୟ ଜ୍ୟାମିତି
    const mathQuiz3 = await Quiz.create({
      title: "ସମନ୍ୱୟ ଜ୍ୟାମିତି",
      subject: "Mathematics",
      category: "ଜ୍ୟାମିତି",
      chapter: "Coordinate Geometry",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "(0,0) ବିନ୍ଦୁକୁ କଣ କୁହାଯାଏ?", options: ["X-axis", "Y-axis", "Origin", "Quadrant"], correctAnswer: 2, marks: 1, explanation: "X-axis ଏବଂ Y-axis ଯେଉଁଠାରେ ମିଳେ ସେଠା Origin।" },
      { quiz: mathQuiz3._id, questionText: "(-3,4) କେଉଁ quadrant ରେ ଅଛି?", options: ["I", "II", "III", "IV"], correctAnswer: 1, marks: 1, explanation: "(-x,+y) ⇒ Quadrant II।" },
      { quiz: mathQuiz3._id, questionText: "x-coordinate କୁ ଆଉ କଣ କୁହାଯାଏ?", options: ["Ordinate", "Abscissa", "Origin", "Quadrant"], correctAnswer: 1, marks: 1, explanation: "x-coordinate = Abscissa।" },
      { quiz: mathQuiz3._id, questionText: "x-axis ଉପରେ ଥିବା ବିନ୍ଦୁର coordinates କଣ?", options: ["(x,0)", "(0,y)", "(x,y)", "(0,0)"], correctAnswer: 0, marks: 1, explanation: "x-axis ଉପରେ y = 0।" },
      { quiz: mathQuiz3._id, questionText: "(5,-3) କେଉଁ quadrant ରେ ଅଛି?", options: ["I", "II", "III", "IV"], correctAnswer: 3, marks: 1, explanation: "(+x,-y) ⇒ Quadrant IV।" },
      { quiz: mathQuiz3._id, questionText: "(-2,-5) କେଉଁ quadrant ରେ ଅଛି?", options: ["I", "II", "III", "IV"], correctAnswer: 2, marks: 1, explanation: "(-x,-y) ⇒ Quadrant III।" },
      { quiz: mathQuiz3._id, questionText: "(3,4) ବିନ୍ଦୁର origin ଠାରୁ distance କେତେ?", options: ["3", "4", "5", "7"], correctAnswer: 2, marks: 1, explanation: "Distance=√(3²+4²)=5।" },
      { quiz: mathQuiz3._id, questionText: "x-axis ଉପରେ y-coordinate କେତେ?", options: ["1", "-1", "0", "Undefined"], correctAnswer: 2, marks: 1, explanation: "x-axis ଉପରେ y ସଦା 0।" },
      { quiz: mathQuiz3._id, questionText: "(3,4) ର x-axis ରେ mirror image କଣ?", options: ["(-3,4)", "(3,-4)", "(-3,-4)", "(4,3)"], correctAnswer: 1, marks: 1, explanation: "x-axis ରେ reflection କଲେ y ର sign ବଦଳେ।" },
      { quiz: mathQuiz3._id, questionText: "(0,-5) ବିନ୍ଦୁ କେଉଁ axis ଉପରେ ଅଛି?", options: ["X-axis", "Y-axis", "Origin", "Quadrant III"], correctAnswer: 1, marks: 1, explanation: "x=0 ହେଲେ ବିନ୍ଦୁ Y-axis ଉପରେ ଥାଏ।" },
    ]);

    console.log("✓ Class 9 - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9MathematicsOdia;
