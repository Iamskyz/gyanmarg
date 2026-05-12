
// Full Odia translated Class 10 Mathematics file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10MathematicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ବାସ୍ତବ ସଂଖ୍ୟା
    const mathQuiz1 = await Quiz.create({
      title: "ବାସ୍ତବ ସଂଖ୍ୟା - HCF, LCM ଏବଂ Euclid ବିଭାଜନ",
      subject: "Mathematics",
      category: "ସଂଖ୍ୟା ପଦ୍ଧତି",
      chapter: "ବାସ୍ତବ ସଂଖ୍ୟା",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "12 ଏବଂ 18 ର HCF କେତେ?", options: ["2", "4", "6", "36"], correctAnswer: 2, marks: 1, explanation: "12 = 2² × 3, 18 = 2 × 3²। HCF = 2 × 3 = 6।" },
      { quiz: mathQuiz1._id, questionText: "4 ଏବଂ 6 ର LCM କେତେ?", options: ["2", "12", "24", "6"], correctAnswer: 1, marks: 1, explanation: "4 = 2², 6 = 2 × 3। LCM = 2² × 3 = 12।" },
      { quiz: mathQuiz1._id, questionText: "Euclid ବିଭାଜନ ସୂତ୍ର: a = bq + r ଯେଉଁଠାରେ:", options: ["0 ≤ r < b", "0 < r < b", "0 ≤ r ≤ b", "r > b"], correctAnswer: 0, marks: 1, explanation: "Euclid ବିଭାଜନରେ remainder r ପାଇଁ 0 ≤ r < b।" },
      { quiz: mathQuiz1._id, questionText: "ଦୁଇ ସଂଖ୍ୟାର HCF × LCM କେତେ ସମାନ?", options: ["ଯୋଗଫଳ", "ଗୁଣିତଫଳ", "ବିୟୋଗଫଳ", "ବର୍ଗ"], correctAnswer: 1, marks: 1, explanation: "HCF × LCM = ଦୁଇ ସଂଖ୍ୟାର ଗୁଣିତଫଳ।" },
      { quiz: mathQuiz1._id, questionText: "√2 କେମିତି ସଂଖ୍ୟା?", options: ["ପରିମେୟ", "ଅପରିମେୟ", "ପୂର୍ଣ୍ଣସଂଖ୍ୟା", "ପ୍ରାକୃତିକ ସଂଖ୍ୟା"], correctAnswer: 1, marks: 1, explanation: "√2 କୁ p/q ରୂପରେ ଲେଖିହେବ ନାହିଁ, ସେଥିପାଇଁ ଏହା ଅପରିମେୟ।" },
      { quiz: mathQuiz1._id, questionText: "7/8 ର decimal expansion କଣ?", options: ["ଅସମାପ୍ତ", "ସମାପ୍ତ", "ପୁନରାବୃତ୍ତିଶୀଳ", "କୌଣସି ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "7/8 = 0.875 ଯାହା ସମାପ୍ତ decimal।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି HCF(a,b)=1 ତେବେ a ଏବଂ b କୁ କଣ କୁହାଯାଏ?", options: ["ସମାନ", "ସହ-ମୂଳ ସଂଖ୍ୟା", "ଯୁଗ୍ମ", "ସଂଯୁକ୍ତ"], correctAnswer: 1, marks: 1, explanation: "HCF = 1 ହେଲେ ସେଗୁଡ଼ିକୁ co-prime କୁହାଯାଏ।" },
      { quiz: mathQuiz1._id, questionText: "Arithmetic ର ମୂଳ ସିଦ୍ଧାନ୍ତ କଣ କୁହେ?", options: ["ସମସ୍ତ ସଂଖ୍ୟା prime", "ପ୍ରତ୍ୟେକ composite ସଂଖ୍ୟାର unique prime factorization ଅଛି", "ସମସ୍ତ ସଂଖ୍ୟା even", "Prime ସଂଖ୍ୟା ଅସୀମ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ composite ସଂଖ୍ୟାକୁ unique prime product ରେ ଲେଖାଯାଏ।" },
      { quiz: mathQuiz1._id, questionText: "26 ଏବଂ 91 ର HCF କେତେ?", options: ["7", "13", "26", "91"], correctAnswer: 1, marks: 1, explanation: "26 = 2 × 13, 91 = 7 × 13। HCF = 13।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି LCM(a,b)=180, HCF(a,b)=6 ଏବଂ a=30, ତେବେ b କେତେ?", options: ["24", "30", "36", "42"], correctAnswer: 2, marks: 1, explanation: "30 × b = 6 × 180 → b = 36।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ଦ୍ୱିଘାତ ସମୀକରଣ
    const mathQuiz2 = await Quiz.create({
      title: "ଦ୍ୱିଘାତ ସମୀକରଣ",
      subject: "Mathematics",
      category: "ବୀଜଗଣିତ",
      chapter: "Quadratic Equations",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "ଦ୍ୱିଘାତ ସମୀକରଣର standard form କଣ?", options: ["ax+b=0", "ax²+bx+c=0", "ax³+bx²=0", "a/x+b=0"], correctAnswer: 1, marks: 1, explanation: "Standard form ହେଉଛି ax² + bx + c = 0।" },
      { quiz: mathQuiz2._id, questionText: "ax²+bx+c=0 ର discriminant କଣ?", options: ["b²+4ac", "b²-4ac", "4ac-b²", "b²-2ac"], correctAnswer: 1, marks: 1, explanation: "Discriminant D = b² - 4ac।" },
      { quiz: mathQuiz2._id, questionText: "ଯଦି D > 0 ତେବେ roots କେମିତି?", options: ["ସମାନ", "ବାସ୍ତବ ଏବଂ ଭିନ୍ନ", "କଳ୍ପିତ", "ଶୂନ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "D > 0 ହେଲେ ଦୁଇଟି ଭିନ୍ନ ବାସ୍ତବ root ଥାଏ।" },
      { quiz: mathQuiz2._id, questionText: "ଯଦି D = 0 ତେବେ roots କେମିତି?", options: ["ବାସ୍ତବ ଏବଂ ସମାନ", "ବାସ୍ତବ ଏବଂ ଭିନ୍ନ", "କଳ୍ପିତ", "କୌଣସି root ନାହିଁ"], correctAnswer: 0, marks: 1, explanation: "D = 0 ହେଲେ ଦୁଇଟି ସମାନ root ଥାଏ।" },
      { quiz: mathQuiz2._id, questionText: "x² - 5x + 6 = 0 ସମାଧାନ କର।", options: ["x=2,3", "x=-2,-3", "x=1,6", "x=-1,-6"], correctAnswer: 0, marks: 1, explanation: "(x-2)(x-3)=0 → x=2 କିମ୍ବା 3।" },
      { quiz: mathQuiz2._id, questionText: "ax²+bx+c=0 ର roots ର sum କେତେ?", options: ["b/a", "-b/a", "c/a", "-c/a"], correctAnswer: 1, marks: 1, explanation: "Roots ର sum = -b/a।" },
      { quiz: mathQuiz2._id, questionText: "ax²+bx+c=0 ର roots ର product କେତେ?", options: ["b/a", "-b/a", "c/a", "-c/a"], correctAnswer: 2, marks: 1, explanation: "Roots ର product = c/a।" },
      { quiz: mathQuiz2._id, questionText: "Quadratic formula କଣ?", options: ["x = -b ± √(b²-4ac) / 2a", "x = b ± √(b²-4ac) / 2a", "x = -b ± √(b²+4ac) / 2a", "x = -b / 2a"], correctAnswer: 0, marks: 1, explanation: "Quadratic formula: x = [-b ± √(b²-4ac)] / 2a।" },
      { quiz: mathQuiz2._id, questionText: "ଏକ ଦ୍ୱିଘାତ ସମୀକରଣର କେତେ root ଥାଏ?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "ଦ୍ୱିଘାତ ସମୀକରଣର ସଦା 2ଟି root ଥାଏ।" },
      { quiz: mathQuiz2._id, questionText: "ଯଦି x² - 7x + k = 0 ର ଗୋଟିଏ root 3, ତେବେ k କେତେ?", options: ["10", "12", "14", "16"], correctAnswer: 1, marks: 1, explanation: "9 - 21 + k = 0 → k = 12।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ତ୍ରିକୋଣମିତି ପରିଚୟ
    const mathQuiz3 = await Quiz.create({
      title: "ତ୍ରିକୋଣମିତି ପରିଚୟ",
      subject: "Mathematics",
      category: "ତ୍ରିକୋଣମିତି",
      chapter: "Trigonometry",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "sin 30° = ?", options: ["0", "1/2", "1", "√3/2"], correctAnswer: 1, marks: 1, explanation: "sin 30° = 1/2।" },
      { quiz: mathQuiz3._id, questionText: "cos 60° = ?", options: ["0", "1/2", "1", "√3/2"], correctAnswer: 1, marks: 1, explanation: "cos 60° = 1/2।" },
      { quiz: mathQuiz3._id, questionText: "tan 45° = ?", options: ["0", "1/2", "1", "√3"], correctAnswer: 2, marks: 1, explanation: "tan 45° = 1।" },
      { quiz: mathQuiz3._id, questionText: "sin²θ + cos²θ = ?", options: ["0", "1", "2", "sin θ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ମୂଳ ତ୍ରିକୋଣମିତି identity।" },
      { quiz: mathQuiz3._id, questionText: "tan θ କୁ sin ଏବଂ cos ରେ କିପରି ଲେଖାଯାଏ?", options: ["sin θ / cos θ", "cos θ / sin θ", "sin θ × cos θ", "1 / sin θ"], correctAnswer: 0, marks: 1, explanation: "tan θ = sin θ / cos θ।" },
      { quiz: mathQuiz3._id, questionText: "sin 90° = ?", options: ["0", "1/2", "1", "Undefined"], correctAnswer: 2, marks: 1, explanation: "sin 90° = 1।" },
      { quiz: mathQuiz3._id, questionText: "cos 0° = ?", options: ["0", "1/2", "1", "Undefined"], correctAnswer: 2, marks: 1, explanation: "cos 0° = 1।" },
      { quiz: mathQuiz3._id, questionText: "ଯଦି sin A = 3/5, ତେବେ cos A କେତେ?", options: ["3/5", "4/5", "5/3", "5/4"], correctAnswer: 1, marks: 1, explanation: "cos²A = 1 - 9/25 = 16/25 → cos A = 4/5।" },
      { quiz: mathQuiz3._id, questionText: "sec θ = ?", options: ["1/sin θ", "1/cos θ", "1/tan θ", "sin θ/cos θ"], correctAnswer: 1, marks: 1, explanation: "sec θ = 1/cos θ।" },
      { quiz: mathQuiz3._id, questionText: "tan 0° = ?", options: ["0", "1", "Undefined", "∞"], correctAnswer: 0, marks: 1, explanation: "tan 0° = 0/1 = 0।" },
    ]);

    console.log("✓ Class 10 - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10MathematicsOdia;
