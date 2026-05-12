import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceMathematicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୁକ୍ତ");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Sets and Relations
    const mathQuiz1 = await Quiz.create({
      title: "ସେଟ୍, ସମ୍ପର୍କ ଏବଂ ଫଙ୍କସନ୍",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Sets and Relations",
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
      { quiz: mathQuiz1._id, questionText: "ଯେଉଁ set ରେ କୌଣସି element ନାହିଁ ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["Universal set", "Empty/Null set", "Infinite set", "Subset"], correctAnswer: 1, marks: 1, explanation: "ଯେଉଁ set ରେ କୌଣସି element ନାହିଁ ତାହାକୁ empty କିମ୍ବା null set କୁହାଯାଏ।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି A = {1,2,3} ଏବଂ B = {2,3,4}, ତେବେ A ∩ B =", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1}"], correctAnswer: 1, marks: 1, explanation: "A ∩ B ରେ ଦୁଇଟି set ର common elements ଥାଏ।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି A = {1,2,3} ଏବଂ B = {2,3,4}, ତେବେ A ∪ B =", options: ["{2,3}", "{1,2,3,4}", "{1,4}", "{1,2,3}"], correctAnswer: 1, marks: 1, explanation: "A ∪ B ରେ ଦୁଇଟି set ର ସମସ୍ତ elements ଥାଏ।" },
      { quiz: mathQuiz1._id, questionText: "n elements ଥିବା set ର subset ସଂଖ୍ୟା କେତେ?", options: ["n", "2n", "2ⁿ", "n²"], correctAnswer: 2, marks: 1, explanation: "n elements ଥିବା set ର 2ⁿ subsets ଥାଏ।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି A ⊂ B, ତେବେ A ∩ B =", options: ["A", "B", "∅", "A ∪ B"], correctAnswer: 0, marks: 1, explanation: "A ଯଦି B ର subset ତେବେ A ∩ B = A।" },
      { quiz: mathQuiz1._id, questionText: "A - B ର ଅର୍ଥ କଣ?", options: ["A ରେ ଅଛି କିନ୍ତୁ B ରେ ନାହିଁ", "B ରେ ଅଛି କିନ୍ତୁ A ରେ ନାହିଁ", "ଦୁଇଟିରେ ଅଛି", "କୌଣସିଟିରେ ନାହିଁ"], correctAnswer: 0, marks: 1, explanation: "A - B ରେ A ର elements ଥାଏ ଯେଉଁଗୁଡ଼ିକ B ରେ ନାହିଁ।" },
      { quiz: mathQuiz1._id, questionText: "De Morgan's Law: (A ∪ B)' =", options: ["A' ∪ B'", "A' ∩ B'", "A ∩ B", "A ∪ B"], correctAnswer: 1, marks: 1, explanation: "(A ∪ B)' = A' ∩ B'।" },
      { quiz: mathQuiz1._id, questionText: "Function f: A → B one-one ହେଲେ:", options: ["B ର ପ୍ରତ୍ୟେକ element ର preimage ଥାଏ", "A ର ଭିନ୍ନ elements ର ଭିନ୍ନ images ଥାଏ", "f(A) = B", "A = B"], correctAnswer: 1, marks: 1, explanation: "One-one function ରେ distinct inputs ର distinct outputs ଥାଏ।" },
      { quiz: mathQuiz1._id, questionText: "ଯଦି n(A)=10, n(B)=15, n(A∩B)=5, ତେବେ n(A∪B) =", options: ["20", "25", "30", "10"], correctAnswer: 0, marks: 1, explanation: "n(A∪B) = n(A) + n(B) - n(A∩B)।" },
      { quiz: mathQuiz1._id, questionText: "Set A ରୁ B କୁ relation କେଉଁ set ର subset?", options: ["A × A", "B × B", "A × B", "A ∪ B"], correctAnswer: 2, marks: 1, explanation: "Relation ହେଉଛି Cartesian product A × B ର subset।" },
    ]);

    // Subcategory 2: Sequences and Series
    const mathQuiz2 = await Quiz.create({
      title: "Sequences ଏବଂ Series",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Sequences and Series",
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
      { quiz: mathQuiz2._id, questionText: "AP ର common difference କଣ?", options: ["Consecutive terms ର ratio", "Consecutive terms ର difference", "Terms ର sum", "Terms ର product"], correctAnswer: 1, marks: 1, explanation: "d = a₂ - a₁ ହେଉଛି common difference।" },
      { quiz: mathQuiz2._id, questionText: "AP ର nth term କଣ?", options: ["a + nd", "a + (n-1)d", "a × rⁿ", "a × r^(n-1)"], correctAnswer: 1, marks: 1, explanation: "aₙ = a + (n-1)d।" },
      { quiz: mathQuiz2._id, questionText: "AP ର ପ୍ରଥମ n terms ର sum କଣ?", options: ["n/2[2a + (n-1)d]", "n[a + d]", "a(rⁿ-1)/(r-1)", "n × a"], correctAnswer: 0, marks: 1, explanation: "Sₙ = n/2[2a + (n-1)d]।" },
      { quiz: mathQuiz2._id, questionText: "GP ର common ratio କଣ?", options: ["Difference", "Ratio of consecutive terms", "Sum of terms", "First term"], correctAnswer: 1, marks: 1, explanation: "r = a₂/a₁ ହେଉଛି common ratio।" },
      { quiz: mathQuiz2._id, questionText: "GP ର nth term କଣ?", options: ["a + (n-1)d", "arⁿ", "ar^(n-1)", "a/r^(n-1)"], correctAnswer: 2, marks: 1, explanation: "aₙ = ar^(n-1)।" },
      { quiz: mathQuiz2._id, questionText: "Infinite GP (|r| < 1) ର sum କଣ?", options: ["a/(1-r)", "a/(r-1)", "ar/(1-r)", "ମିଳିବ ନାହିଁ"], correctAnswer: 0, marks: 1, explanation: "S∞ = a/(1-r)।" },
      { quiz: mathQuiz2._id, questionText: "ଯଦି 3, x, 27 GP ରେ ଅଛି, ତେବେ x =", options: ["15", "9", "12", "6"], correctAnswer: 1, marks: 1, explanation: "x² = 3 × 27 = 81, ସେହିପରି x = 9।" },
      { quiz: mathQuiz2._id, questionText: "a ଏବଂ b ର Arithmetic Mean କଣ?", options: ["(a+b)/2", "√(ab)", "2ab/(a+b)", "a-b"], correctAnswer: 0, marks: 1, explanation: "AM = (a+b)/2।" },
      { quiz: mathQuiz2._id, questionText: "a ଏବଂ b ର Geometric Mean କଣ?", options: ["(a+b)/2", "√(ab)", "2ab/(a+b)", "a×b"], correctAnswer: 1, marks: 1, explanation: "GM = √(ab)।" },
      { quiz: mathQuiz2._id, questionText: "ପ୍ରଥମ n natural numbers ର sum କଣ?", options: ["n(n+1)/2", "n²", "n(n-1)/2", "2n+1"], correctAnswer: 0, marks: 1, explanation: "1+2+3+...+n = n(n+1)/2।" },
    ]);

    // Subcategory 3: Commercial Mathematics
    const mathQuiz3 = await Quiz.create({
      title: "Commercial Mathematics - ସୁଦ ଏବଂ Annuity",
      subject: "Mathematics",
      category: "Commercial Mathematics",
      chapter: "Simple and Compound Interest",
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
      { quiz: mathQuiz3._id, questionText: "Simple Interest ର formula କଣ?", options: ["P(1+r/100)ⁿ", "P × R × T / 100", "P × R × T", "P + R + T"], correctAnswer: 1, marks: 1, explanation: "SI = P × R × T / 100।" },
      { quiz: mathQuiz3._id, questionText: "Compound Interest ର Amount formula କଣ?", options: ["P + PRT/100", "P(1 + R/100)ⁿ", "P × R × T", "P/R × T"], correctAnswer: 1, marks: 1, explanation: "A = P(1 + R/100)ⁿ।" },
      { quiz: mathQuiz3._id, questionText: "Rs.1000 କୁ 10% CI ରେ 2 ବର୍ଷ ପାଇଁ ନିବେଶ କଲେ Amount କେତେ?", options: ["Rs.1200", "Rs.1210", "Rs.1100", "Rs.1220"], correctAnswer: 1, marks: 1, explanation: "A = 1000 × 1.21 = Rs.1210।" },
      { quiz: mathQuiz3._id, questionText: "2 ବର୍ଷ ପାଇଁ CI ଏବଂ SI ର difference କଣ?", options: ["P(R/100)²", "P × R²/100", "P × R/100", "2PR/100"], correctAnswer: 0, marks: 1, explanation: "CI - SI = P(R/100)²।" },
      { quiz: mathQuiz3._id, questionText: "Annuity କଣ?", options: ["One-time payment", "ସମାନ ଅନ୍ତରାଳରେ ସମାନ payment", "Irregular payments", "Loan amount"], correctAnswer: 1, marks: 1, explanation: "Annuity ହେଉଛି regular equal payments ର series।" },
      { quiz: mathQuiz3._id, questionText: "Effective rate of interest ସଦା:", options: ["Nominal rate ଠାରୁ କମ୍", "Nominal rate ସମାନ", "Nominal rate ଠାରୁ ବେଶି କିମ୍ବା ସମାନ", "ଶୂନ୍ୟ"], correctAnswer: 2, marks: 1, explanation: "Compounding ଫଳରେ effective rate ≥ nominal rate।" },
      { quiz: mathQuiz3._id, questionText: "Rule of 72 କାହା ପାଇଁ ବ୍ୟବହୃତ?", options: ["Simple interest", "Money double ହେବାର ସମୟ", "Tax amount", "Discount"], correctAnswer: 1, marks: 1, explanation: "Time to double ≈ 72/rate।" },
      { quiz: mathQuiz3._id, questionText: "Quarterly compounding ହେଲେ n କେତେ ହୁଏ?", options: ["n", "2n", "4n", "12n"], correctAnswer: 2, marks: 1, explanation: "Quarterly compounding ରେ periods = 4 × years।" },
      { quiz: mathQuiz3._id, questionText: "Present value କଣ?", options: ["Future amount", "ଭବିଷ୍ୟତ ରାଶିର ବର୍ତ୍ତମାନ ମୂଲ୍ୟ", "Past value", "Market price"], correctAnswer: 1, marks: 1, explanation: "Present value ହେଉଛି future money ର today's value।" },
      { quiz: mathQuiz3._id, questionText: "EMI ର full form କଣ?", options: ["Extra Monthly Income", "Equated Monthly Installment", "Equal Money Interest", "Estimated Monthly Investment"], correctAnswer: 1, marks: 1, explanation: "EMI ହେଉଛି loan repay ପାଇଁ monthly payment।" },
    ]);

    console.log("✓ Class 11 Commerce - Mathematics Odia: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceMathematicsOdia;
