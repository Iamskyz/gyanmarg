import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11Mathematics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Sets
    const mathQuiz1 = await Quiz.create({
      title: "Sets and Set Operations",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Sets",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "A set with no elements is called:", options: ["Universal set", "Null/Empty set", "Infinite set", "Subset"], correctAnswer: 1, marks: 1, explanation: "A set with no elements is called null or empty set, denoted by ∅ or {}." },
      { quiz: mathQuiz1._id, questionText: "If A = {1,2,3} and B = {2,3,4}, then A ∩ B =", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1}"], correctAnswer: 1, marks: 1, explanation: "A ∩ B (intersection) = elements common to both = {2,3}." },
      { quiz: mathQuiz1._id, questionText: "If A = {1,2,3} and B = {2,3,4}, then A ∪ B =", options: ["{2,3}", "{1,2,3,4}", "{1,4}", "{1,2,3}"], correctAnswer: 1, marks: 1, explanation: "A ∪ B (union) = all elements from both sets = {1,2,3,4}." },
      { quiz: mathQuiz1._id, questionText: "The number of subsets of a set with n elements is:", options: ["n", "2n", "2ⁿ", "n²"], correctAnswer: 2, marks: 1, explanation: "A set with n elements has 2ⁿ subsets." },
      { quiz: mathQuiz1._id, questionText: "If A ⊂ B, then A ∩ B =", options: ["A", "B", "∅", "A ∪ B"], correctAnswer: 0, marks: 1, explanation: "If A is a subset of B, then all elements of A are in B, so A ∩ B = A." },
      { quiz: mathQuiz1._id, questionText: "A - B means:", options: ["Elements in A but not in B", "Elements in B but not in A", "Elements in both", "Elements in neither"], correctAnswer: 0, marks: 1, explanation: "A - B (difference) = elements that are in A but not in B." },
      { quiz: mathQuiz1._id, questionText: "De Morgan's Law states: (A ∪ B)' =", options: ["A' ∪ B'", "A' ∩ B'", "A ∩ B", "A ∪ B"], correctAnswer: 1, marks: 1, explanation: "De Morgan's Law: (A ∪ B)' = A' ∩ B'." },
      { quiz: mathQuiz1._id, questionText: "If n(A) = 10, n(B) = 15, n(A ∩ B) = 5, then n(A ∪ B) =", options: ["20", "25", "30", "10"], correctAnswer: 0, marks: 1, explanation: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 10 + 15 - 5 = 20." },
      { quiz: mathQuiz1._id, questionText: "The power set of {a, b} is:", options: ["{a, b}", "{{}, {a}, {b}, {a,b}}", "{a, b, ab}", "{{a,b}}"], correctAnswer: 1, marks: 1, explanation: "Power set = set of all subsets = {∅, {a}, {b}, {a,b}}." },
      { quiz: mathQuiz1._id, questionText: "Two sets are equal if:", options: ["They have same number of elements", "They have exactly same elements", "One is subset of other", "Their union is empty"], correctAnswer: 1, marks: 1, explanation: "Two sets are equal if and only if they have exactly the same elements." },
    ]);

    // Subcategory 2: Trigonometric Functions
    const mathQuiz2 = await Quiz.create({
      title: "Trigonometric Functions",
      subject: "Mathematics",
      category: "Trigonometry",
      chapter: "Trigonometric Functions",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "1 radian equals approximately:", options: ["45°", "57.3°", "90°", "180°"], correctAnswer: 1, marks: 1, explanation: "1 radian = 180°/π ≈ 57.3°." },
      { quiz: mathQuiz2._id, questionText: "sin(A + B) =", options: ["sinA cosB + cosA sinB", "sinA cosB - cosA sinB", "cosA cosB - sinA sinB", "cosA cosB + sinA sinB"], correctAnswer: 0, marks: 1, explanation: "sin(A+B) = sinA cosB + cosA sinB is the addition formula." },
      { quiz: mathQuiz2._id, questionText: "The period of sin x is:", options: ["π", "2π", "π/2", "4π"], correctAnswer: 1, marks: 1, explanation: "sin x repeats every 2π radians." },
      { quiz: mathQuiz2._id, questionText: "cos 2A =", options: ["2cosA", "cos²A - sin²A", "2sinA cosA", "sin²A + cos²A"], correctAnswer: 1, marks: 1, explanation: "cos 2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A." },
      { quiz: mathQuiz2._id, questionText: "The range of sin x is:", options: ["(-∞, ∞)", "[0, 1]", "[-1, 1]", "[0, ∞)"], correctAnswer: 2, marks: 1, explanation: "sin x always lies between -1 and 1, inclusive." },
      { quiz: mathQuiz2._id, questionText: "tan x is undefined when:", options: ["x = 0", "x = π/2", "x = π", "x = 2π"], correctAnswer: 1, marks: 1, explanation: "tan x = sin x/cos x is undefined when cos x = 0, i.e., x = π/2, 3π/2, etc." },
      { quiz: mathQuiz2._id, questionText: "sin(-x) =", options: ["sin x", "-sin x", "cos x", "-cos x"], correctAnswer: 1, marks: 1, explanation: "sin is an odd function: sin(-x) = -sin x." },
      { quiz: mathQuiz2._id, questionText: "cos(π - x) =", options: ["cos x", "-cos x", "sin x", "-sin x"], correctAnswer: 1, marks: 1, explanation: "cos(π - x) = -cos x." },
      { quiz: mathQuiz2._id, questionText: "The general solution of sin x = 0 is:", options: ["x = nπ", "x = (2n+1)π/2", "x = 2nπ", "x = nπ/2"], correctAnswer: 0, marks: 1, explanation: "sin x = 0 when x = nπ, where n is any integer." },
      { quiz: mathQuiz2._id, questionText: "sin 2A =", options: ["2 sin A", "2 sin A cos A", "sin²A + cos²A", "cos²A - sin²A"], correctAnswer: 1, marks: 1, explanation: "sin 2A = 2 sin A cos A is the double angle formula." },
    ]);

    // Subcategory 3: Complex Numbers
    const mathQuiz3 = await Quiz.create({
      title: "Complex Numbers",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Complex Numbers",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "The value of i² is:", options: ["1", "-1", "i", "-i"], correctAnswer: 1, marks: 1, explanation: "i = √(-1), so i² = -1." },
      { quiz: mathQuiz3._id, questionText: "The real part of 3 + 4i is:", options: ["4", "3", "3 + 4i", "4i"], correctAnswer: 1, marks: 1, explanation: "In a + bi, the real part is a. Here a = 3." },
      { quiz: mathQuiz3._id, questionText: "The conjugate of 2 + 3i is:", options: ["2 - 3i", "-2 + 3i", "-2 - 3i", "3 + 2i"], correctAnswer: 0, marks: 1, explanation: "Conjugate of a + bi is a - bi. So conjugate of 2 + 3i = 2 - 3i." },
      { quiz: mathQuiz3._id, questionText: "The modulus of 3 + 4i is:", options: ["3", "4", "5", "7"], correctAnswer: 2, marks: 1, explanation: "|a + bi| = √(a² + b²) = √(9 + 16) = √25 = 5." },
      { quiz: mathQuiz3._id, questionText: "(2 + 3i) + (1 - 2i) =", options: ["3 + i", "3 + 5i", "1 + i", "3 - i"], correctAnswer: 0, marks: 1, explanation: "Add real parts: 2+1=3. Add imaginary: 3i+(-2i)=i. Answer: 3+i." },
      { quiz: mathQuiz3._id, questionText: "i⁴ =", options: ["i", "-i", "1", "-1"], correctAnswer: 2, marks: 1, explanation: "i⁴ = (i²)² = (-1)² = 1." },
      { quiz: mathQuiz3._id, questionText: "The multiplicative inverse of 2 + i is:", options: ["2 - i", "(2-i)/5", "1/(2+i)", "Both B and C"], correctAnswer: 3, marks: 1, explanation: "1/(2+i) = (2-i)/((2+i)(2-i)) = (2-i)/5. Both B and C are same." },
      { quiz: mathQuiz3._id, questionText: "If z = a + bi, then z × z̄ =", options: ["a² + b²", "a² - b²", "2a", "2bi"], correctAnswer: 0, marks: 1, explanation: "z × z̄ = (a+bi)(a-bi) = a² + b² = |z|²." },
      { quiz: mathQuiz3._id, questionText: "The value of i³ is:", options: ["1", "-1", "i", "-i"], correctAnswer: 3, marks: 1, explanation: "i³ = i² × i = (-1)(i) = -i." },
      { quiz: mathQuiz3._id, questionText: "A complex number is purely imaginary if:", options: ["Real part = 0", "Imaginary part = 0", "Both parts = 0", "Modulus = 0"], correctAnswer: 0, marks: 1, explanation: "Purely imaginary means real part is zero. Example: 5i." },
    ]);

    console.log("✓ Class 11 Science - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11Mathematics;
