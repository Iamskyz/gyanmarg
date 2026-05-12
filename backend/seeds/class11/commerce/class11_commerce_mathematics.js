import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceMathematics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Sets and Relations
    const mathQuiz1 = await Quiz.create({
      title: "Sets, Relations and Functions",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Sets and Relations",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "A set with no elements is called:", options: ["Universal set", "Empty/Null set", "Infinite set", "Subset"], correctAnswer: 1, marks: 1, explanation: "A set with no elements is called empty or null set, denoted by ∅ or {}." },
      { quiz: mathQuiz1._id, questionText: "If A = {1,2,3} and B = {2,3,4}, then A ∩ B =", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1}"], correctAnswer: 1, marks: 1, explanation: "A ∩ B contains elements common to both sets." },
      { quiz: mathQuiz1._id, questionText: "If A = {1,2,3} and B = {2,3,4}, then A ∪ B =", options: ["{2,3}", "{1,2,3,4}", "{1,4}", "{1,2,3}"], correctAnswer: 1, marks: 1, explanation: "A ∪ B contains all elements from both sets." },
      { quiz: mathQuiz1._id, questionText: "Number of subsets of a set with n elements:", options: ["n", "2n", "2ⁿ", "n²"], correctAnswer: 2, marks: 1, explanation: "A set with n elements has 2ⁿ subsets." },
      { quiz: mathQuiz1._id, questionText: "If A ⊂ B, then A ∩ B =", options: ["A", "B", "∅", "A ∪ B"], correctAnswer: 0, marks: 1, explanation: "If A is a subset of B, then A ∩ B = A." },
      { quiz: mathQuiz1._id, questionText: "A - B means:", options: ["Elements in A but not in B", "Elements in B but not in A", "Elements in both", "Elements in neither"], correctAnswer: 0, marks: 1, explanation: "A - B contains elements that are in A but not in B." },
      { quiz: mathQuiz1._id, questionText: "De Morgan's Law: (A ∪ B)' =", options: ["A' ∪ B'", "A' ∩ B'", "A ∩ B", "A ∪ B"], correctAnswer: 1, marks: 1, explanation: "De Morgan's Law states (A ∪ B)' = A' ∩ B'." },
      { quiz: mathQuiz1._id, questionText: "A function f: A → B is one-one if:", options: ["Every element of B has a preimage", "Different elements of A have different images in B", "f(A) = B", "A = B"], correctAnswer: 1, marks: 1, explanation: "One-one (injective): distinct inputs give distinct outputs." },
      { quiz: mathQuiz1._id, questionText: "If n(A)=10, n(B)=15, n(A∩B)=5, then n(A∪B) =", options: ["20", "25", "30", "10"], correctAnswer: 0, marks: 1, explanation: "n(A∪B) = n(A) + n(B) - n(A∩B) = 10+15-5 = 20." },
      { quiz: mathQuiz1._id, questionText: "A relation R from set A to set B is a subset of:", options: ["A × A", "B × B", "A × B", "A ∪ B"], correctAnswer: 2, marks: 1, explanation: "A relation from A to B is a subset of the Cartesian product A × B." },
    ]);

    // Subcategory 2: Sequences and Series
    const mathQuiz2 = await Quiz.create({
      title: "Sequences and Series",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Sequences and Series",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "In an AP, the common difference is:", options: ["Ratio of consecutive terms", "Difference between consecutive terms", "Sum of terms", "Product of terms"], correctAnswer: 1, marks: 1, explanation: "Common difference d = a₂ - a₁ = a₃ - a₂ = constant." },
      { quiz: mathQuiz2._id, questionText: "nth term of an AP is:", options: ["a + nd", "a + (n-1)d", "a × rⁿ", "a × r^(n-1)"], correctAnswer: 1, marks: 1, explanation: "aₙ = a + (n-1)d where a is first term and d is common difference." },
      { quiz: mathQuiz2._id, questionText: "Sum of first n terms of an AP:", options: ["n/2[2a + (n-1)d]", "n[a + d]", "a(rⁿ-1)/(r-1)", "n × a"], correctAnswer: 0, marks: 1, explanation: "Sₙ = n/2[2a + (n-1)d] or n/2[a + l] where l is last term." },
      { quiz: mathQuiz2._id, questionText: "In a GP, the common ratio is:", options: ["Difference of consecutive terms", "Ratio of consecutive terms", "Sum of terms", "First term"], correctAnswer: 1, marks: 1, explanation: "Common ratio r = a₂/a₁ = a₃/a₂ = constant." },
      { quiz: mathQuiz2._id, questionText: "nth term of a GP is:", options: ["a + (n-1)d", "arⁿ", "ar^(n-1)", "a/r^(n-1)"], correctAnswer: 2, marks: 1, explanation: "aₙ = ar^(n-1) where a is first term and r is common ratio." },
      { quiz: mathQuiz2._id, questionText: "Sum of infinite GP (|r| < 1) is:", options: ["a/(1-r)", "a/(r-1)", "ar/(1-r)", "Cannot be found"], correctAnswer: 0, marks: 1, explanation: "S∞ = a/(1-r) when |r| < 1." },
      { quiz: mathQuiz2._id, questionText: "If 3, x, 27 are in GP, then x =", options: ["15", "9", "12", "6"], correctAnswer: 1, marks: 1, explanation: "In GP: x² = 3 × 27 = 81, so x = 9." },
      { quiz: mathQuiz2._id, questionText: "Arithmetic mean of a and b is:", options: ["(a+b)/2", "√(ab)", "2ab/(a+b)", "a-b"], correctAnswer: 0, marks: 1, explanation: "AM = (a+b)/2." },
      { quiz: mathQuiz2._id, questionText: "Geometric mean of a and b is:", options: ["(a+b)/2", "√(ab)", "2ab/(a+b)", "a×b"], correctAnswer: 1, marks: 1, explanation: "GM = √(ab)." },
      { quiz: mathQuiz2._id, questionText: "Sum of first n natural numbers is:", options: ["n(n+1)/2", "n²", "n(n-1)/2", "2n+1"], correctAnswer: 0, marks: 1, explanation: "1+2+3+...+n = n(n+1)/2." },
    ]);

    // Subcategory 3: Commercial Mathematics
    const mathQuiz3 = await Quiz.create({
      title: "Commercial Mathematics - Interest and Annuity",
      subject: "Mathematics",
      category: "Commercial Mathematics",
      chapter: "Simple and Compound Interest",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "Simple Interest formula is:", options: ["P(1+r/100)ⁿ", "P × R × T / 100", "P × R × T", "P + R + T"], correctAnswer: 1, marks: 1, explanation: "SI = P × R × T / 100 where P=principal, R=rate, T=time." },
      { quiz: mathQuiz3._id, questionText: "Compound Interest formula for Amount:", options: ["P + PRT/100", "P(1 + R/100)ⁿ", "P × R × T", "P/R × T"], correctAnswer: 1, marks: 1, explanation: "A = P(1 + R/100)ⁿ where n is number of years." },
      { quiz: mathQuiz3._id, questionText: "If Rs.1000 is invested at 10% CI for 2 years, Amount =", options: ["Rs.1200", "Rs.1210", "Rs.1100", "Rs.1220"], correctAnswer: 1, marks: 1, explanation: "A = 1000(1+10/100)² = 1000 × 1.21 = Rs.1210." },
      { quiz: mathQuiz3._id, questionText: "Difference between CI and SI for 2 years:", options: ["P(R/100)²", "P × R²/100", "P × R/100", "2PR/100"], correctAnswer: 0, marks: 1, explanation: "CI - SI for 2 years = P(R/100)²." },
      { quiz: mathQuiz3._id, questionText: "What is an annuity?", options: ["One-time payment", "Series of equal payments at regular intervals", "Irregular payments", "Loan amount"], correctAnswer: 1, marks: 1, explanation: "Annuity is a series of equal payments made at equal time intervals." },
      { quiz: mathQuiz3._id, questionText: "Effective rate of interest is always:", options: ["Less than nominal rate", "Equal to nominal rate", "Greater than or equal to nominal rate", "Zero"], correctAnswer: 2, marks: 1, explanation: "Effective rate ≥ nominal rate due to compounding effect." },
      { quiz: mathQuiz3._id, questionText: "Rule of 72 is used to estimate:", options: ["Simple interest", "Time to double money at given rate", "Tax amount", "Discount"], correctAnswer: 1, marks: 1, explanation: "Time to double ≈ 72/rate of interest." },
      { quiz: mathQuiz3._id, questionText: "If compounding is done quarterly, n becomes:", options: ["n", "2n", "4n", "12n"], correctAnswer: 2, marks: 1, explanation: "For quarterly compounding, number of periods = 4 × number of years." },
      { quiz: mathQuiz3._id, questionText: "Present value means:", options: ["Future amount", "Current worth of a future sum", "Past value", "Market price"], correctAnswer: 1, marks: 1, explanation: "Present value is today's value of money to be received in the future." },
      { quiz: mathQuiz3._id, questionText: "EMI stands for:", options: ["Extra Monthly Income", "Equated Monthly Installment", "Equal Money Interest", "Estimated Monthly Investment"], correctAnswer: 1, marks: 1, explanation: "EMI is a fixed monthly payment to repay a loan over a set period." },
    ]);

    console.log("✓ Class 11 Commerce - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceMathematics;
