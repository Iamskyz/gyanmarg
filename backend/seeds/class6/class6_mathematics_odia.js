import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6MathematicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Mathematics - Subcategory 1: Whole Numbers (Odia)
    const mathQuiz1Od = await Quiz.create({
      title: "ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଓ ମୌଳିକ ଗଣନା",
      subject: "Mathematics",
      category: "ଗଣନା",
      chapter: "ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz1Od._id,
        questionText: "999 ର ଉତ୍ତରାଧିକାରୀ କଣ?",
        options: ["998", "1000", "1001", "9999"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କୌଣସି ସଂଖ୍ୟାର ଉତ୍ତରାଧିକାରୀ ପାଇବା ପାଇଁ 1 ଯୋଗ କରିବାକୁ ହୁଏ। 999 + 1 = 1000।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ସବୁଠାରୁ ଛୋଟ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା?",
        options: ["1", "0", "-1", "2"],
        correctAnswer: 1,
        marks: 1,
        explanation: "0 ହେଉଛି ସବୁଠାରୁ ଛୋଟ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା। ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା 0 ରୁ ଆରମ୍ଭ ହୁଏ।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "456 × 0 = କେତେ?",
        options: ["456", "0", "1", "4560"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କୌଣସି ସଂଖ୍ୟାକୁ 0 ସହିତ ଗୁଣନ କଲେ 0 ହୁଏ।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "ବିତରଣ ନିୟମ ବ୍ୟବହାର କରି 7 × 8 + 7 × 2 ର ମାନ କେତେ?",
        options: ["70", "72", "56", "80"],
        correctAnswer: 0,
        marks: 1,
        explanation: "7 × 8 + 7 × 2 = 7 × (8 + 2) = 7 × 10 = 70।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "1000 ର ପୂର୍ବବର୍ତ୍ତୀ କଣ?",
        options: ["1001", "999", "998", "100"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପୂର୍ବବର୍ତ୍ତୀ ପାଇବା ପାଇଁ 1 ବିୟୋଗ କରିବାକୁ ହୁଏ। 1000 - 1 = 999।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "3 + 5 = 5 + 3 କେଉଁ ନିୟମ ଦର୍ଶାଏ?",
        options: ["ସହଯୋଗୀ", "ବିନିମୟ", "ବିତରଣ", "ପରିଚୟ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଯୋଗର କ୍ରମ ବଦଳାଇଲେ ଫଳାଫଳ ବଦଳେ ନାହିଁ, ଏହାକୁ ବିନିମୟ ନିୟମ କୁହାଯାଏ।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "125 ÷ 5 = କେତେ?",
        options: ["20", "25", "30", "15"],
        correctAnswer: 1,
        marks: 1,
        explanation: "125 ÷ 5 = 25। ଯାଞ୍ଚ: 25 × 5 = 125।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "ଗୁଣନର _____ ସଂଖ୍ୟା 1 କୁ କୁହାଯାଏ।",
        options: ["ଶୂନ୍ୟ ଉପାଦାନ", "ପରିଚୟ ଉପାଦାନ", "ବିପରୀତ ଉପାଦାନ", "ମିଶ୍ର ଉପାଦାନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "1 ହେଉଛି ଗୁଣନର ପରିଚୟ ଉପାଦାନ କାରଣ କୌଣସି ସଂଖ୍ୟା × 1 = ସେହି ସଂଖ୍ୟା।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "ପ୍ରଥମ 5ଟି ପୂର୍ଣ୍ଣ ସଂଖ୍ୟାର ଯୋଗଫଳ କେତେ?",
        options: ["10", "15", "5", "20"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ପ୍ରଥମ 5ଟି ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା: 0, 1, 2, 3, 4। ଯୋଗଫଳ = 0+1+2+3+4 = 10।",
      },
      {
        quiz: mathQuiz1Od._id,
        questionText: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ନୁହେଁ?",
        options: ["0", "5", "-3", "100"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ହେଉଛି 0, 1, 2, 3... ଋଣାତ୍ମକ ସଂଖ୍ୟା ଯେମିତି -3 ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ନୁହେଁ।",
      },
    ]);

    // Mathematics - Subcategory 2: Fractions (Odia)
    const mathQuiz2Od = await Quiz.create({
      title: "ଭଗ୍ନାଂଶର ପରିଚୟ",
      subject: "Mathematics",
      category: "ଗଣନା",
      chapter: "ଭଗ୍ନାଂଶ",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz2Od._id,
        questionText: "ଯଦି 8ଟି ଭାଗ ମଧ୍ୟରୁ 3ଟି ଭାଗ ରଙ୍ଗ କରାଯାଏ, ତେବେ ବୃତ୍ତର କେତେ ଭଗ୍ନାଂଶ ରଙ୍ଗ ହୋଇଛି?",
        options: ["3/8", "8/3", "3/5", "5/8"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ଯଦି ମୋଟ 8ଟି ଭାଗ ମଧ୍ୟରୁ 3ଟି ଭାଗ ରଙ୍ଗ କରାଯାଏ, ତେବେ ଭଗ୍ନାଂଶ ହେଉଛି 3/8।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "କେଉଁ ଭଗ୍ନାଂଶ 1/2 ସହିତ ସମାନ?",
        options: ["2/3", "3/6", "4/6", "5/8"],
        correctAnswer: 1,
        marks: 1,
        explanation: "3/6 = 1/2 କାରଣ 3 ÷ 3 = 1 ଏବଂ 6 ÷ 3 = 2।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "1/4 + 1/4 = କେତେ?",
        options: ["1/8", "2/8", "1/2", "2/4"],
        correctAnswer: 2,
        marks: 1,
        explanation: "1/4 + 1/4 = 2/4 = 1/2।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "କେଉଁ ଭଗ୍ନାଂଶ ବଡ଼: 2/3 କି 1/2?",
        options: ["2/3", "1/2", "ଦୁଇଟି ସମାନ", "ତୁଳନା କରାଯାଇପାରିବ ନାହିଁ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "2/3 = 4/6 ଏବଂ 1/2 = 3/6। ଯେହେତୁ 4/6 > 3/6, ତେଣୁ 2/3 > 1/2।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "6/8 ର ସରଳ ରୂପ କଣ?",
        options: ["3/4", "6/8", "12/16", "2/3"],
        correctAnswer: 0,
        marks: 1,
        explanation: "6/8 = 3/4 (ଲବ ଓ ହରକୁ 2 ଦ୍ୱାରା ଭାଗ କଲେ)।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "5/7 ଭଗ୍ନାଂଶରେ 7 କୁ କଣ କୁହାଯାଏ?",
        options: ["ଲବ", "ହର", "ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା", "ମିଶ୍ର ସଂଖ୍ୟା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଭଗ୍ନାଂଶରେ ତଳ ସଂଖ୍ୟାକୁ ହର କୁହାଯାଏ।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "3/4 - 1/4 = କେତେ?",
        options: ["2/4", "1/2", "4/8", "A ଓ B ଦୁଇଟି"],
        correctAnswer: 3,
        marks: 1,
        explanation: "3/4 - 1/4 = 2/4 = 1/2। ଦୁଇଟି ଉତ୍ତର ଠିକ୍।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ପ୍ରକୃତ ଭଗ୍ନାଂଶ?",
        options: ["5/3", "7/4", "3/5", "9/8"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପ୍ରକୃତ ଭଗ୍ନାଂଶରେ ଲବ ହର ଠାରୁ ଛୋଟ ହୋଇଥାଏ। 3/5 ପ୍ରକୃତ ଭଗ୍ନାଂଶ।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "15 ମିନିଟ୍ ଏକ ଘଣ୍ଟାର କେତେ ଭଗ୍ନାଂଶ?",
        options: ["1/2", "1/3", "1/4", "1/6"],
        correctAnswer: 2,
        marks: 1,
        explanation: "60 ମିନିଟ୍ ମଧ୍ୟରୁ 15 ମିନିଟ୍ = 15/60 = 1/4।",
      },
      {
        quiz: mathQuiz2Od._id,
        questionText: "ଯଦି ତୁମେ 8ଟି ସମାନ ଖଣ୍ଡରେ କଟା ପିଜ୍ଜାର 2ଟି ଖଣ୍ଡ ଖାଅ, ତେବେ କେତେ ଭଗ୍ନାଂଶ ଖାଇଲ?",
        options: ["2/8", "1/4", "2/6", "A ଓ B ଦୁଇଟି"],
        correctAnswer: 3,
        marks: 1,
        explanation: "8ଟି ଖଣ୍ଡ ମଧ୍ୟରୁ 2ଟି = 2/8 = 1/4। ଦୁଇଟି ଠିକ୍।",
      },
    ]);

    // Mathematics - Subcategory 3: Basic Geometry (Odia)
    const mathQuiz3Od = await Quiz.create({
      title: "ମୌଳିକ ଆକୃତି ଓ ଜ୍ୟାମିତି",
      subject: "Mathematics",
      category: "ଜ୍ୟାମିତି",
      chapter: "ମୌଳିକ ଆକୃତି",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz3Od._id,
        questionText: "ତ୍ରିଭୁଜର କେତୋଟି ବାହୁ ଅଛି?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ତ୍ରିଭୁଜର ଠିକ୍ 3ଟି ବାହୁ ଅଛି।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ତ୍ରିଭୁଜର କୋଣଗୁଡ଼ିକର ଯୋଗଫଳ କେତେ?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଯେକୌଣସି ତ୍ରିଭୁଜର ସମସ୍ତ କୋଣର ଯୋଗଫଳ ସର୍ବଦା 180°।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ରେଖାଖଣ୍ଡର କଣ ଅଛି?",
        options: ["କୌଣସି ଶେଷବିନ୍ଦୁ ନାହିଁ", "ଗୋଟିଏ ଶେଷବିନ୍ଦୁ", "ଦୁଇଟି ଶେଷବିନ୍ଦୁ", "ତିନୋଟି ଶେଷବିନ୍ଦୁ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ରେଖାଖଣ୍ଡର ଠିକ୍ ଦୁଇଟି ଶେଷବିନ୍ଦୁ ଅଛି।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ଆୟତକ୍ଷେତ୍ରର କେତୋଟି ଶୀର୍ଷବିନ୍ଦୁ ଅଛି?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଆୟତକ୍ଷେତ୍ରର 4ଟି ଶୀର୍ଷବିନ୍ଦୁ (କୋଣ) ଅଛି।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "କେଉଁ ଆକୃତିର ସମସ୍ତ ବାହୁ ସମାନ?",
        options: ["ଆୟତକ୍ଷେତ୍ର", "ବର୍ଗକ୍ଷେତ୍ର", "ତ୍ରିଭୁଜ", "ବୃତ୍ତ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବର୍ଗକ୍ଷେତ୍ରର ଚାରିଟି ବାହୁ ଦୈର୍ଘ୍ୟରେ ସମାନ।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ସରଳ କୋଣ କେତେ?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ସରଳ କୋଣ ଠିକ୍ 180° ମାପର ହୋଇଥାଏ।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ବର୍ଗକ୍ଷେତ୍ରର କେତୋଟି କର୍ଣ୍ଣ ଅଛି?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବର୍ଗକ୍ଷେତ୍ରର 2ଟି କର୍ଣ୍ଣ ଅଛି ଯାହା କେନ୍ଦ୍ରରେ ମିଳିତ ହୁଏ।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ଯେଉଁ ଦୁଇଟି ରେଖା କେବେ ମିଳନ୍ତି ନାହିଁ ସେମାନଙ୍କୁ କଣ କୁହାଯାଏ?",
        options: ["ଛେଦକ ରେଖା", "ସମାନ୍ତର ରେଖା", "ଲମ୍ବ ରେଖା", "ବକ୍ର ରେଖା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ସମାନ୍ତର ରେଖା କେବେ ମିଳନ୍ତି ନାହିଁ, ଯେତେ ବିସ୍ତାର କଲେ ମଧ୍ୟ।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ସମକୋଣ କେତେ ମାପର?",
        options: ["45°", "90°", "180°", "270°"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ସମକୋଣ ଠିକ୍ 90° ମାପର ହୋଇଥାଏ।",
      },
      {
        quiz: mathQuiz3Od._id,
        questionText: "ପଞ୍ଚଭୁଜର କେତୋଟି ବାହୁ ଅଛି?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପଞ୍ଚଭୁଜର ଠିକ୍ 5ଟି ବାହୁ ଅଛି।",
      },
    ]);

    console.log("✓ Class 6 - Mathematics (Odia): 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6MathematicsOdia;
