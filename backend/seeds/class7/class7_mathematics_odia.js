import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7MathematicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Mathematics - Subcategory 1: Integers (Odia)
    const mathQuiz1Od = await Quiz.create({
      title: "ପୂର୍ଣ୍ଣାଙ୍କ ଓ ଗଣନା",
      subject: "Mathematics",
      category: "ସଂଖ୍ୟା ପଦ୍ଧତି",
      chapter: "ପୂର୍ଣ୍ଣାଙ୍କ",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz1Od._id,
        questionText: "(-5) + (-3) = କେତେ?",
        options: ["-8", "-2", "8", "2"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ଦୁଇଟି ଋଣାତ୍ମକ ସଂଖ୍ୟା ଯୋଗ କଲେ ସେମାନଙ୍କର ପରମ ମାନ ଯୋଗ କରି ଋଣାତ୍ମକ ଚିହ୍ନ ରଖିବାକୁ ହୁଏ। (-5) + (-3) = -8।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "(-12) ÷ 4 = କେତେ?",
        options: ["3", "-3", "4", "-4"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଋଣାତ୍ମକ ସଂଖ୍ୟାକୁ ଧନାତ୍ମକ ସଂଖ୍ୟା ଦ୍ୱାରା ଭାଗ କଲେ ଋଣାତ୍ମକ ଫଳ ମିଳେ। (-12) ÷ 4 = -3।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "-7 ର ଯୋଗାତ୍ମକ ବିପରୀତ (additive inverse) କଣ?",
        options: ["-7", "7", "0", "1/7"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଯୋଗାତ୍ମକ ବିପରୀତ ହେଉଛି ସେହି ସଂଖ୍ୟା ଯାହାକୁ ଯୋଗ କଲେ 0 ମିଳେ। -7 ର ଯୋଗାତ୍ମକ ବିପରୀତ ହେଉଛି 7।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "(-3) × (-4) = କେତେ?",
        options: ["-12", "12", "-7", "7"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଦୁଇଟି ଋଣାତ୍ମକ ସଂଖ୍ୟାର ଗୁଣନଫଳ ଧନାତ୍ମକ ହୁଏ। (-3) × (-4) = 12।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "କେଉଁ ପୂର୍ଣ୍ଣାଙ୍କ ଧନାତ୍ମକ ବା ଋଣାତ୍ମକ ନୁହେଁ?",
        options: ["1", "-1", "0", "କୌଣସିଟି ନୁହେଁ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଶୂନ୍ୟ (0) ହେଉଛି ସେହି ପୂର୍ଣ୍ଣାଙ୍କ ଯାହା ଧନାତ୍ମକ ବା ଋଣାତ୍ମକ ନୁହେଁ।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "15 + (-20) = କେତେ?",
        options: ["35", "-35", "5", "-5"],
        correctAnswer: 3,
        marks: 1,
        explanation: "15 + (-20) = 15 - 20 = -5। ଋଣାତ୍ମକ ସଂଖ୍ୟା ଯୋଗ କଲେ ବିୟୋଗ କରି ବଡ଼ ପରମ ମାନର ଚିହ୍ନ ରଖିବାକୁ ହୁଏ।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "(-8) - (-3) = କେତେ?",
        options: ["-11", "-5", "5", "11"],
        correctAnswer: 1,
        marks: 1,
        explanation: "(-8) - (-3) = (-8) + 3 = -5। ଋଣାତ୍ମକ ବିୟୋଗ କରିବା ଧନାତ୍ମକ ଯୋଗ ସମାନ।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "ଆରୋହୀ କ୍ରମରେ ସଜାଅ: -5, 3, -1, 0, 2",
        options: ["-5, -1, 0, 2, 3", "3, 2, 0, -1, -5", "-1, -5, 0, 2, 3", "0, -1, -5, 2, 3"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ଆରୋହୀ କ୍ରମ ଅର୍ଥ ସବୁଠାରୁ ଛୋଟରୁ ବଡ଼। -5 < -1 < 0 < 2 < 3।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "-15 ର ପରମ ମାନ (absolute value) କେତେ?",
        options: ["-15", "15", "0", "-1"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପରମ ମାନ ହେଉଛି 0 ଠାରୁ ଦୂରତା, ସର୍ବଦା ଧନାତ୍ମକ। |-15| = 15।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "(-6) × 5 × (-2) = କେତେ?",
        options: ["-60", "60", "-13", "13"],
        correctAnswer: 1,
        marks: 1,
        explanation: "(-6) × 5 = -30, ତାପରେ (-30) × (-2) = 60। ସମ ସଂଖ୍ୟକ ଋଣାତ୍ମକ ଚିହ୍ନ ଧନାତ୍ମକ ଫଳ ଦିଏ।",
      },
    ]);

    // Mathematics - Subcategory 2: Rational Numbers (Odia)
    const mathQuiz2Od = await Quiz.create({
      title: "ପରିମେୟ ସଂଖ୍ୟା",
      subject: "Mathematics",
      category: "ସଂଖ୍ୟା ପଦ୍ଧତି",
      chapter: "ପରିମେୟ ସଂଖ୍ୟା",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz2Od._id,
        questionText: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ପରିମେୟ ସଂଖ୍ୟା?",
        options: ["√2", "π", "3/4", "√5"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପରିମେୟ ସଂଖ୍ୟା p/q ଆକାରରେ ପ୍ରକାଶ କରାଯାଇପାରେ ଯେଉଁଠାରେ q ≠ 0। 3/4 ଏକ ପରିମେୟ ସଂଖ୍ୟା।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "2/3 + 1/4 = କେତେ?",
        options: ["3/7", "11/12", "5/7", "8/12"],
        correctAnswer: 1,
        marks: 1,
        explanation: "2/3 + 1/4 = 8/12 + 3/12 = 11/12। ପ୍ରଥಮେ ହରର ଲ.ସା.ଗୁ. ବାହାର କରିବାକୁ ହୁଏ।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "5/7 ର ବ୍ୟୁତ୍କ୍ରମ (reciprocal) କଣ?",
        options: ["5/7", "-5/7", "7/5", "-7/5"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଭଗ୍ନାଂଶର ବ୍ୟୁତ୍କ୍ରମ ଲବ ଓ ହରକୁ ଓଲଟାଇ ପାଇବାକୁ ହୁଏ। 5/7 ର ବ୍ୟୁତ୍କ୍ରମ = 7/5।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "(-3/5) × (10/9) = କେତେ?",
        options: ["2/3", "-2/3", "30/45", "-30/45"],
        correctAnswer: 1,
        marks: 1,
        explanation: "(-3/5) × (10/9) = -30/45 = -2/3।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "1/2 ଓ 1 ମଧ୍ୟରେ କେଉଁ ପରିମେୟ ସଂଖ୍ୟା ଅଛି?",
        options: ["1/4", "3/4", "1/3", "2/5"],
        correctAnswer: 1,
        marks: 1,
        explanation: "3/4 = 0.75 ଯାହା 1/2 = 0.5 ଓ 1 ମଧ୍ୟରେ ଅଛି।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "7/8 ÷ 3/4 = କେତେ?",
        options: ["7/6", "21/32", "6/7", "28/24"],
        correctAnswer: 0,
        marks: 1,
        explanation: "7/8 ÷ 3/4 = 7/8 × 4/3 = 28/24 = 7/6।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "-8/20 ର ମାନକ ରୂପ (standard form) କଣ?",
        options: ["-8/20", "-2/5", "2/5", "8/20"],
        correctAnswer: 1,
        marks: 1,
        explanation: "-8/20 କୁ ଦୁଇଟିକୁ 4 ଦ୍ୱାରା ଭାଗ କଲେ -2/5 ମିଳେ।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "3/7 ର ଯୋଗାତ୍ମକ ବିପରୀତ କଣ?",
        options: ["7/3", "-7/3", "-3/7", "3/7"],
        correctAnswer: 2,
        marks: 1,
        explanation: "3/7 ର ଯୋଗାତ୍ମକ ବିପରୀତ ହେଉଛି -3/7 କାରଣ 3/7 + (-3/7) = 0।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "0 କି ଏକ ପରିମେୟ ସଂଖ୍ୟା?",
        options: ["ହଁ", "ନା", "ବେଳେବେଳେ", "ନିର୍ଣ୍ଣୟ କରାଯାଇପାରିବ ନାହିଁ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ହଁ, 0 ଏକ ପରିମେୟ ସଂଖ୍ୟା କାରଣ ଏହାକୁ 0/1 ଭାବରେ ଲେଖାଯାଇପାରେ।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "5/6 - 2/3 = କେତେ?",
        options: ["3/3", "1/6", "1/3", "3/6"],
        correctAnswer: 1,
        marks: 1,
        explanation: "5/6 - 2/3 = 5/6 - 4/6 = 1/6।",
      },
    ]);

    // Mathematics - Subcategory 3: Algebraic Expressions (Odia)
    const mathQuiz3Od = await Quiz.create({
      title: "ସରଳ ବୀଜଗାଣିତିକ ରାଶି",
      subject: "Mathematics",
      category: "ବୀଜଗଣିତ",
      chapter: "ବୀଜଗାଣିତିକ ରାଶି",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz3Od._id,
        questionText: "5x + 3 ରେ x ର ସହଗ (coefficient) କେତେ?",
        options: ["3", "5", "x", "8"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ସହଗ ହେଉଛି ଚଳରାଶି ସହିତ ଗୁଣିତ ସଂଖ୍ୟା। 5x ରେ x ର ସହଗ 5।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ସରଳ କର: 3x + 2x",
        options: ["5x", "6x", "5x²", "6x²"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ସମାନ ପଦ ଯୋଗ କରାଯାଇପାରେ: 3x + 2x = 5x।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "x = 4 ହେଲେ 2x + 3 ର ମାନ କେତେ?",
        options: ["9", "11", "14", "8"],
        correctAnswer: 1,
        marks: 1,
        explanation: "x = 4 ରଖିଲେ: 2(4) + 3 = 8 + 3 = 11।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "4x² + 3x - 7 ରାଶିରେ କେତୋଟି ପଦ ଅଛି?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପଦଗୁଡ଼ିକ ହେଉଛି 4x², 3x, ଓ -7। ତେଣୁ 3ଟି ପଦ ଅଛି।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "7x + 5 ରେ ସ୍ଥିର ପଦ (constant term) କଣ?",
        options: ["7", "x", "5", "7x"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସ୍ଥିର ପଦ ହେଉଛି ଚଳରାଶି ବିନା ପଦ। 7x + 5 ରେ ସ୍ଥିର ପଦ 5।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ସରଳ କର: 4x + 3y - 2x + y",
        options: ["2x + 4y", "6x + 4y", "2x + 2y", "6x + 2y"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ସମାନ ପଦ ମିଶାଅ: (4x - 2x) + (3y + y) = 2x + 4y।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "3x² + 5x + 1 ରାଶିର ଘାତ (degree) କେତେ?",
        options: ["1", "2", "3", "5"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଘାତ ହେଉଛି ଚଳରାଶିର ସର୍ବୋଚ୍ଚ ଶକ୍ତି। ଏଠାରେ x² ଅଛି, ତେଣୁ ଘାତ = 2।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "x = 2 ହେଲେ x² + 3x = କେତେ?",
        options: ["8", "10", "12", "14"],
        correctAnswer: 1,
        marks: 1,
        explanation: "x² + 3x = (2)² + 3(2) = 4 + 6 = 10।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଗୁଡ଼ିକ ସମାନ ପଦ (like terms)?",
        options: ["3x ଓ 3y", "5x² ଓ 2x", "4xy ଓ 7xy", "2x ଓ 3x²"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସମାନ ପଦରେ ସମାନ ଚଳରାଶି ସମାନ ଶକ୍ତି ସହିତ ଥାଏ। 4xy ଓ 7xy ସମାନ ପଦ।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "5x + 7 ରୁ 2x + 3 ବିୟୋଗ କର:",
        options: ["3x + 4", "7x + 10", "3x + 10", "7x + 4"],
        correctAnswer: 0,
        marks: 1,
        explanation: "(5x + 7) - (2x + 3) = 5x + 7 - 2x - 3 = 3x + 4।",
      },
    ]);

    console.log("✓ Class 7 - Mathematics (Odia): 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7MathematicsOdia;
