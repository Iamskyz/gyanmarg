import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11MathematicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Sets
    const mathQuiz1 = await Quiz.create({
      title: "ସେଟ୍ ଏବଂ ସେଟ୍ କ୍ରିୟା",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Sets",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "ଯେଉଁ ସେଟ୍‌ରେ କୌଣସି ଉପାଦାନ ନାହିଁ ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ["Universal set", "Null/Empty set", "Infinite set", "Subset"], correctAnswer: 1, marks: 1, explanation: "ଯେଉଁ ସେଟ୍‌ରେ କୌଣସି ଉପାଦାନ ନାହିଁ, ସେଥିକୁ null କିମ୍ବା empty set କୁହାଯାଏ।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି A = {1,2,3} ଏବଂ B = {2,3,4}, ତେବେ A ∩ B =", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1}"], correctAnswer: 1, marks: 1, explanation: "A ∩ B ହେଉଛି ଉଭୟ ସେଟ୍‌ର ସାଧାରଣ ଉପାଦାନ।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି A = {1,2,3} ଏବଂ B = {2,3,4}, ତେବେ A ∪ B =", options: ["{2,3}", "{1,2,3,4}", "{1,4}", "{1,2,3}"], correctAnswer: 1, marks: 1, explanation: "A ∪ B ହେଉଛି ଉଭୟ ସେଟ୍‌ର ସମସ୍ତ ଉପାଦାନ।" },
      { quiz: mathQuiz1._id, questionText: "n ଉପାଦାନ ଥିବା ଏକ ସେଟ୍‌ର subset ସଂଖ୍ୟା କେତେ?", options: ["n", "2n", "2ⁿ", "n²"], correctAnswer: 2, marks: 1, explanation: "n ଉପାଦାନ ଥିବା ସେଟ୍‌ର 2ⁿ subset ଥାଏ।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି A ⊂ B, ତେବେ A ∩ B =", options: ["A", "B", "∅", "A ∪ B"], correctAnswer: 0, marks: 1, explanation: "A ଯଦି B ର subset, ତେବେ A ∩ B = A।" },
      { quiz: mathQuiz1._id, questionText: "A - B ର ଅର୍ଥ କ’ଣ?", options: ["A ରେ ଥିବା କିନ୍ତୁ B ରେ ନଥିବା ଉପାଦାନ", "B ରେ ଥିବା କିନ୍ତୁ A ରେ ନଥିବା ଉପାଦାନ", "ଉଭୟରେ ଥିବା ଉପାଦାନ", "କୌଣସିରେ ନଥିବା ଉପାଦାନ"], correctAnswer: 0, marks: 1, explanation: "A - B ହେଉଛି A ରେ ଥିବା କିନ୍ତୁ B ରେ ନଥିବା ଉପାଦାନ।" },
      { quiz: mathQuiz1._id, questionText: "De Morgan's Law ଅନୁଯାୟୀ: (A ∪ B)' =", options: ["A' ∪ B'", "A' ∩ B'", "A ∩ B", "A ∪ B"], correctAnswer: 1, marks: 1, explanation: "De Morgan's Law: (A ∪ B)' = A' ∩ B'।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି n(A)=10, n(B)=15, n(A ∩ B)=5, ତେବେ n(A ∪ B) =", options: ["20", "25", "30", "10"], correctAnswer: 0, marks: 1, explanation: "n(A ∪ B)=10+15-5=20।" },
      { quiz: mathQuiz1._id, questionText: "{a,b} ର power set କ’ଣ?", options: ["{a,b}", "{{}, {a}, {b}, {a,b}}", "{a,b,ab}", "{{a,b}}"], correctAnswer: 1, marks: 1, explanation: "Power set ହେଉଛି ସମସ୍ତ subset ର ସେଟ୍।" },
      { quiz: mathQuiz1._id, questionText: "ଦୁଇଟି ସେଟ୍ ସମାନ କେବେ ହୁଏ?", options: ["ଉଭୟରେ ସମାନ ଉପାଦାନ ସଂଖ୍ୟା ଥାଏ", "ଉଭୟରେ ସଠିକ ସମାନ ଉପାଦାନ ଥାଏ", "ଏକଟି ଅନ୍ୟଟିର subset", "ଉଭୟର union ଖାଲି"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇଟି ସେଟ୍‌ର ସମସ୍ତ ଉପାଦାନ ସମାନ ହେଲେ ସେମାନେ ସମାନ।" },
    ]);

    // Subcategory 2: Trigonometric Functions
    const mathQuiz2 = await Quiz.create({
      title: "ତ୍ରିକୋଣମିତିକ ଫଙ୍କସନ୍",
      subject: "Mathematics",
      category: "Trigonometry",
      chapter: "Trigonometric Functions",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "1 radian ପ୍ରାୟ ସମାନ:", options: ["45°", "57.3°", "90°", "180°"], correctAnswer: 1, marks: 1, explanation: "1 radian ≈ 57.3°।" },
      { quiz: mathQuiz2._id, questionText: "sin(A + B) =", options: ["sinA cosB + cosA sinB", "sinA cosB - cosA sinB", "cosA cosB - sinA sinB", "cosA cosB + sinA sinB"], correctAnswer: 0, marks: 1, explanation: "ଏହା sin(A+B) ର ସୂତ୍ର।" },
      { quiz: mathQuiz2._id, questionText: "sin x ର period କେତେ?", options: ["π", "2π", "π/2", "4π"], correctAnswer: 1, marks: 1, explanation: "sin x ପ୍ରତ୍ୟେକ 2π ରେ ପୁନରାବୃତ୍ତି ହୁଏ।" },
      { quiz: mathQuiz2._id, questionText: "cos 2A =", options: ["2cosA", "cos²A - sin²A", "2sinA cosA", "sin²A + cos²A"], correctAnswer: 1, marks: 1, explanation: "cos 2A = cos²A - sin²A।" },
      { quiz: mathQuiz2._id, questionText: "sin x ର range କ’ଣ?", options: ["(-∞,∞)", "[0,1]", "[-1,1]", "[0,∞)"], correctAnswer: 2, marks: 1, explanation: "sin x ସଦା -1 ରୁ 1 ମଧ୍ୟରେ ଥାଏ।" },
      { quiz: mathQuiz2._id, questionText: "tan x undefined କେବେ ହୁଏ?", options: ["x=0", "x=π/2", "x=π", "x=2π"], correctAnswer: 1, marks: 1, explanation: "cos x = 0 ହେଲେ tan x undefined ହୁଏ।" },
      { quiz: mathQuiz2._id, questionText: "sin(-x) =", options: ["sin x", "-sin x", "cos x", "-cos x"], correctAnswer: 1, marks: 1, explanation: "sin ଏକ odd function।" },
      { quiz: mathQuiz2._id, questionText: "cos(π - x) =", options: ["cos x", "-cos x", "sin x", "-sin x"], correctAnswer: 1, marks: 1, explanation: "cos(π-x) = -cos x।" },
      { quiz: mathQuiz2._id, questionText: "sin x = 0 ର general solution କ’ଣ?", options: ["x=nπ", "x=(2n+1)π/2", "x=2nπ", "x=nπ/2"], correctAnswer: 0, marks: 1, explanation: "sin x = 0 ଯେତେବେଳେ x=nπ।" },
      { quiz: mathQuiz2._id, questionText: "sin 2A =", options: ["2 sin A", "2 sin A cos A", "sin²A + cos²A", "cos²A - sin²A"], correctAnswer: 1, marks: 1, explanation: "sin 2A = 2 sin A cos A।" },
    ]);

    // Subcategory 3: Complex Numbers
    const mathQuiz3 = await Quiz.create({
      title: "ଜଟିଳ ସଂଖ୍ୟା",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Complex Numbers",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "i² ର ମୂଲ୍ୟ କେତେ?", options: ["1", "-1", "i", "-i"], correctAnswer: 1, marks: 1, explanation: "i² = -1।" },
      { quiz: mathQuiz3._id, questionText: "3 + 4i ର real part କ’ଣ?", options: ["4", "3", "3+4i", "4i"], correctAnswer: 1, marks: 1, explanation: "a+bi ରେ real part ହେଉଛି a।" },
      { quiz: mathQuiz3._id, questionText: "2 + 3i ର conjugate କ’ଣ?", options: ["2-3i", "-2+3i", "-2-3i", "3+2i"], correctAnswer: 0, marks: 1, explanation: "a+bi ର conjugate ହେଉଛି a-bi।" },
      { quiz: mathQuiz3._id, questionText: "3 + 4i ର modulus କେତେ?", options: ["3", "4", "5", "7"], correctAnswer: 2, marks: 1, explanation: "|3+4i| = 5।" },
      { quiz: mathQuiz3._id, questionText: "(2+3i) + (1-2i) =", options: ["3+i", "3+5i", "1+i", "3-i"], correctAnswer: 0, marks: 1, explanation: "Real ଏବଂ imaginary ଅଂଶକୁ ଯୋଗ କରାଯାଏ।" },
      { quiz: mathQuiz3._id, questionText: "i⁴ =", options: ["i", "-i", "1", "-1"], correctAnswer: 2, marks: 1, explanation: "i⁴ = 1।" },
      { quiz: mathQuiz3._id, questionText: "2+i ର multiplicative inverse କ’ଣ?", options: ["2-i", "(2-i)/5", "1/(2+i)", "B ଏବଂ C ଉଭୟ"], correctAnswer: 3, marks: 1, explanation: "1/(2+i) = (2-i)/5।" },
      { quiz: mathQuiz3._id, questionText: "ଯଦି z=a+bi, ତେବେ z × z̄ =", options: ["a²+b²", "a²-b²", "2a", "2bi"], correctAnswer: 0, marks: 1, explanation: "z × z̄ = a²+b²।" },
      { quiz: mathQuiz3._id, questionText: "i³ ର ମୂଲ୍ୟ କେତେ?", options: ["1", "-1", "i", "-i"], correctAnswer: 3, marks: 1, explanation: "i³ = -i।" },
      { quiz: mathQuiz3._id, questionText: "ଏକ complex number purely imaginary କେବେ ହୁଏ?", options: ["Real part = 0", "Imaginary part = 0", "ଉଭୟ 0", "Modulus = 0"], correctAnswer: 0, marks: 1, explanation: "Purely imaginary number ର real part 0 ଥାଏ।" },
    ]);

    console.log("✓ Class 11 Science - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11MathematicsOdia;
