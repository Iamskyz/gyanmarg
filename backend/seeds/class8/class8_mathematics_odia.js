import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8MathematicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Linear Equations (Odia)
    const mathQuiz1Od = await Quiz.create({
      title: "ଏକ ଚଳରାଶିରେ ସରଳ ସମୀକରଣ",
      subject: "Mathematics",
      category: "ବୀଜଗଣିତ",
      chapter: "ସରଳ ସମୀକରଣ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1Od._id, questionText: "ସମାଧାନ କର: 2x + 5 = 15", options: ["3", "4", "5", "6"], correctAnswer: 2, marks: 1, explanation: "2x + 5 = 15 → 2x = 10 → x = 5।" },
      { quiz: mathQuiz1Od._id, questionText: "ସମାଧାନ କର: 3(x - 2) = 12", options: ["4", "5", "6", "7"], correctAnswer: 2, marks: 1, explanation: "3(x - 2) = 12 → 3x - 6 = 12 → 3x = 18 → x = 6।" },
      { quiz: mathQuiz1Od._id, questionText: "ଯଦି 5x - 3 = 2x + 9 ହେଲେ x ର ମାନ କେତେ?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "5x - 3 = 2x + 9 → 3x = 12 → x = 4।" },
      { quiz: mathQuiz1Od._id, questionText: "ସମାଧାନ କର: (x/3) + 4 = 7", options: ["6", "7", "8", "9"], correctAnswer: 3, marks: 1, explanation: "x/3 + 4 = 7 → x/3 = 3 → x = 9।" },
      { quiz: mathQuiz1Od._id, questionText: "ଦୁଇଟି କ୍ରମିକ ସଂଖ୍ୟାର ଯୋଗଫଳ 25। ଛୋଟ ସଂଖ୍ୟାଟି ବାହାର କର।", options: ["11", "12", "13", "14"], correctAnswer: 1, marks: 1, explanation: "ସଂଖ୍ୟା x ଓ x+1। x + x + 1 = 25 → 2x = 24 → x = 12।" },
      { quiz: mathQuiz1Od._id, questionText: "ସମାଧାନ କର: 4(x + 1) = 2(x + 5)", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "4x + 4 = 2x + 10 → 2x = 6 → x = 3।" },
      { quiz: mathQuiz1Od._id, questionText: "ଯଦି 7x - 5 = 3x + 11 ହେଲେ x = ?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "7x - 5 = 3x + 11 → 4x = 16 → x = 4।" },
      { quiz: mathQuiz1Od._id, questionText: "ଏକ ସଂଖ୍ୟା ସହିତ ତାହାର ଅର୍ଦ୍ଧ ଯୋଗ କଲେ 36 ହୁଏ। ସଂଖ୍ୟାଟି କେତେ?", options: ["20", "22", "24", "26"], correctAnswer: 2, marks: 1, explanation: "x + x/2 = 36 → 3x/2 = 36 → x = 24।" },
      { quiz: mathQuiz1Od._id, questionText: "ସମାଧାନ କର: 2(3x - 1) = 5x + 4", options: ["4", "5", "6", "7"], correctAnswer: 2, marks: 1, explanation: "6x - 2 = 5x + 4 → x = 6।" },
      { quiz: mathQuiz1Od._id, questionText: "ଆୟତକ୍ଷେତ୍ରର ପରିସୀମା 40 ସେ.ମି. ଓ ଦୈର୍ଘ୍ୟ 12 ସେ.ମି. ହେଲେ ପ୍ରସ୍ଥ କେତେ?", options: ["6 ସେ.ମି.", "7 ସେ.ମି.", "8 ସେ.ମି.", "9 ସେ.ମି."], correctAnswer: 2, marks: 1, explanation: "2(l + b) = 40 → 2(12 + b) = 40 → 12 + b = 20 → b = 8 ସେ.ମି.।" },
    ]);

    // Subcategory 2: Understanding Quadrilaterals (Odia)
    const mathQuiz2Od = await Quiz.create({
      title: "ଚତୁର୍ଭୁଜ ବୁଝିବା",
      subject: "Mathematics",
      category: "ଜ୍ୟାମିତି",
      chapter: "ଚତୁର୍ଭୁଜ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2Od._id, questionText: "ଚତୁର୍ଭୁଜର ସମସ୍ତ କୋଣର ଯୋଗଫଳ କେତେ?", options: ["180°", "270°", "360°", "540°"], correctAnswer: 2, marks: 1, explanation: "ଚତୁର୍ଭୁଜର ସମସ୍ତ ଅନ୍ତଃକୋଣର ଯୋଗଫଳ ସର୍ବଦା 360°।" },
      { quiz: mathQuiz2Od._id, questionText: "ସମସ୍ତ ବାହୁ ସମାନ ଓ ସମସ୍ତ କୋଣ 90° ଥିବା ଚତୁର୍ଭୁଜକୁ କଣ କୁହାଯାଏ?", options: ["ଆୟତକ୍ଷେତ୍ର", "ରମ୍ବସ", "ବର୍ଗକ୍ଷେତ୍ର", "ସାମାନ୍ତରିକ"], correctAnswer: 2, marks: 1, explanation: "ବର୍ଗକ୍ଷେତ୍ରର ସମସ୍ତ ବାହୁ ସମାନ ଓ ସମସ୍ତ କୋଣ 90°।" },
      { quiz: mathQuiz2Od._id, questionText: "ସାମାନ୍ତରିକରେ ବିପରୀତ ବାହୁ:", options: ["ସମାନ ଓ ସମାନ୍ତର", "ସମାନ କିନ୍ତୁ ସମାନ୍ତର ନୁହେଁ", "ସମାନ୍ତର କିନ୍ତୁ ସମାନ ନୁହେଁ", "ସମାନ ବା ସମାନ୍ତର ନୁହେଁ"], correctAnswer: 0, marks: 1, explanation: "ସାମାନ୍ତରିକରେ ବିପରୀତ ବାହୁ ସମାନ ଓ ସମାନ୍ତର।" },
      { quiz: mathQuiz2Od._id, questionText: "ଆୟତକ୍ଷେତ୍ରର କର୍ଣ୍ଣ:", options: ["ସମାନ", "ଅସମାନ", "ଲମ୍ବ", "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କୌଣସିଟି ନୁହେଁ"], correctAnswer: 0, marks: 1, explanation: "ଆୟତକ୍ଷେତ୍ରର କର୍ଣ୍ଣ ସର୍ବଦା ସମାନ ଦୈର୍ଘ୍ୟର।" },
      { quiz: mathQuiz2Od._id, questionText: "ରମ୍ବସର ବୈଶିଷ୍ଟ୍ୟ:", options: ["ସମସ୍ତ ବାହୁ ସମାନ", "ସମସ୍ତ କୋଣ ସମାନ", "ଦୁଇଟି", "କୌଣସିଟି ନୁହେଁ"], correctAnswer: 0, marks: 1, explanation: "ରମ୍ବସର ଚାରିଟି ବାହୁ ସମାନ, କିନ୍ତୁ କୋଣ 90° ହେବା ଆବଶ୍ୟକ ନୁହେଁ।" },
      { quiz: mathQuiz2Od._id, questionText: "ଚତୁର୍ଭୁଜର କେତୋଟି କର୍ଣ୍ଣ ଥାଏ?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "ଚତୁର୍ଭୁଜର ଠିକ୍ 2ଟି କର୍ଣ୍ଣ ଥାଏ।" },
      { quiz: mathQuiz2Od._id, questionText: "ଟ୍ରାପିଜିୟମର ବୈଶିଷ୍ଟ୍ୟ:", options: ["ଦୁଇ ଯୋଡ଼ା ସମାନ୍ତର ବାହୁ", "ଗୋଟିଏ ଯୋଡ଼ା ସମାନ୍ତର ବାହୁ", "କୌଣସି ସମାନ୍ତର ବାହୁ ନାହିଁ", "ସମସ୍ତ ବାହୁ ସମାନ୍ତର"], correctAnswer: 1, marks: 1, explanation: "ଟ୍ରାପିଜିୟମର ଠିକ୍ ଗୋଟିଏ ଯୋଡ଼ା ସମାନ୍ତର ବାହୁ ଥାଏ।" },
      { quiz: mathQuiz2Od._id, questionText: "ରମ୍ବସର କର୍ଣ୍ଣ:", options: ["ସମାନ", "90° ରେ ପରସ୍ପରକୁ ସମଦ୍ୱିଖଣ୍ଡ କରେ", "ସମାନ୍ତର", "ଛେଦ କରେ ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ରମ୍ବସର କର୍ଣ୍ଣ ପରସ୍ପରକୁ ସମକୋଣରେ (90°) ସମଦ୍ୱିଖଣ୍ଡ କରେ।" },
      { quiz: mathQuiz2Od._id, questionText: "ଚତୁର୍ଭୁଜର ତିନୋଟି କୋଣ 80°, 90° ଓ 100° ହେଲେ ଚତୁର୍ଥ କୋଣ କେତେ?", options: ["80°", "90°", "100°", "110°"], correctAnswer: 1, marks: 1, explanation: "ଯୋଗ = 360°। ଚତୁର୍ଥ କୋଣ = 360° - (80° + 90° + 100°) = 90°।" },
      { quiz: mathQuiz2Od._id, questionText: "କେଉଁ ଚତୁର୍ଭୁଜର କର୍ଣ୍ଣ ସମାନ ଓ ପରସ୍ପରକୁ ସମଦ୍ୱିଖଣ୍ଡ କରେ?", options: ["ରମ୍ବସ", "ଆୟତକ୍ଷେତ୍ର", "ଟ୍ରାପିଜିୟମ", "ପତଙ୍ଗ"], correctAnswer: 1, marks: 1, explanation: "ଆୟତକ୍ଷେତ୍ରର କର୍ଣ୍ଣ ସମାନ ଓ ପରସ୍ପରକୁ ସମଦ୍ୱିଖଣ୍ଡ କରେ।" },
    ]);

    // Subcategory 3: Exponents and Powers (Odia)
    const mathQuiz3Od = await Quiz.create({
      title: "ଘାତାଙ୍କ ଓ ଶକ୍ତି",
      subject: "Mathematics",
      category: "ଗଣନା",
      chapter: "ଘାତାଙ୍କ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3Od._id, questionText: "2⁵ ର ମାନ କେତେ?", options: ["16", "32", "64", "128"], correctAnswer: 1, marks: 1, explanation: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32।" },
      { quiz: mathQuiz3Od._id, questionText: "10⁰ ର ମାନ କେତେ?", options: ["0", "1", "10", "100"], correctAnswer: 1, marks: 1, explanation: "ଶୂନ୍ୟ ବ୍ୟତୀତ ଯେକୌଣସି ସଂଖ୍ୟାର 0 ଘାତ 1 ହୁଏ।" },
      { quiz: mathQuiz3Od._id, questionText: "ସରଳ କର: 3² × 3³", options: ["3⁵", "3⁶", "9⁵", "9⁶"], correctAnswer: 0, marks: 1, explanation: "ସମାନ ଆଧାର ଗୁଣନ କଲେ ଘାତ ଯୋଗ ହୁଏ: 3² × 3³ = 3²⁺³ = 3⁵।" },
      { quiz: mathQuiz3Od._id, questionText: "5⁻² ର ମାନ କେତେ?", options: ["25", "-25", "1/25", "-1/25"], correctAnswer: 2, marks: 1, explanation: "5⁻² = 1/5² = 1/25।" },
      { quiz: mathQuiz3Od._id, questionText: "ସରଳ କର: (2³)²", options: ["2⁵", "2⁶", "4⁶", "8²"], correctAnswer: 1, marks: 1, explanation: "ଘାତର ଘାତ ହେଲେ ଗୁଣନ ହୁଏ: (2³)² = 2³ˣ² = 2⁶।" },
      { quiz: mathQuiz3Od._id, questionText: "0.00045 ର ମାନକ ରୂପ କଣ?", options: ["4.5 × 10⁻⁴", "45 × 10⁻⁵", "4.5 × 10⁻³", "0.45 × 10⁻³"], correctAnswer: 0, marks: 1, explanation: "0.00045 = 4.5 × 10⁻⁴ ମାନକ ରୂପରେ।" },
      { quiz: mathQuiz3Od._id, questionText: "ସରଳ କର: 7⁵ ÷ 7²", options: ["7³", "7⁷", "7¹⁰", "1³"], correctAnswer: 0, marks: 1, explanation: "ସମାନ ଆଧାର ଭାଗ କଲେ ଘାତ ବିୟୋଗ ହୁଏ: 7⁵ ÷ 7² = 7⁵⁻² = 7³।" },
      { quiz: mathQuiz3Od._id, questionText: "(-1)¹⁰⁰ ର ମାନ କେତେ?", options: ["-1", "1", "100", "-100"], correctAnswer: 1, marks: 1, explanation: "(-1) ର ଯେକୌଣସି ସମ ଘାତ 1 ହୁଏ।" },
      { quiz: mathQuiz3Od._id, questionText: "64000000 କୁ ମାନକ ରୂପରେ ପ୍ରକାଶ କର:", options: ["6.4 × 10⁷", "64 × 10⁶", "6.4 × 10⁶", "0.64 × 10⁸"], correctAnswer: 0, marks: 1, explanation: "64000000 = 6.4 × 10⁷ ମାନକ ରୂପରେ।" },
      { quiz: mathQuiz3Od._id, questionText: "(a²b³)² ର ମାନ କେତେ?", options: ["a⁴b⁵", "a⁴b⁶", "a²b⁶", "a⁴b³"], correctAnswer: 1, marks: 1, explanation: "(a²b³)² = a²ˣ² × b³ˣ² = a⁴b⁶।" },
    ]);

    console.log("✓ Class 8 - Mathematics (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8MathematicsOdia;
