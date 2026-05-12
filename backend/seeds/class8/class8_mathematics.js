import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8Mathematics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Linear Equations in One Variable
    const mathQuiz1 = await Quiz.create({
      title: "Linear Equations in One Variable",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Linear Equations",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "Solve: 2x + 5 = 15", options: ["3", "4", "5", "6"], correctAnswer: 2, marks: 1, explanation: "2x + 5 = 15 → 2x = 10 → x = 5." },
      { quiz: mathQuiz1._id, questionText: "Solve: 3(x - 2) = 12", options: ["4", "5", "6", "7"], correctAnswer: 2, marks: 1, explanation: "3(x - 2) = 12 → 3x - 6 = 12 → 3x = 18 → x = 6." },
      { quiz: mathQuiz1._id, questionText: "If 5x - 3 = 2x + 9, find x.", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "5x - 3 = 2x + 9 → 3x = 12 → x = 4." },
      { quiz: mathQuiz1._id, questionText: "Solve: (x/3) + 4 = 7", options: ["6", "7", "8", "9"], correctAnswer: 3, marks: 1, explanation: "x/3 + 4 = 7 → x/3 = 3 → x = 9." },
      { quiz: mathQuiz1._id, questionText: "The sum of two consecutive numbers is 25. Find the smaller number.", options: ["11", "12", "13", "14"], correctAnswer: 1, marks: 1, explanation: "Let numbers be x and x+1. x + x + 1 = 25 → 2x = 24 → x = 12." },
      { quiz: mathQuiz1._id, questionText: "Solve: 4(x + 1) = 2(x + 5)", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "4x + 4 = 2x + 10 → 2x = 6 → x = 3." },
      { quiz: mathQuiz1._id, questionText: "If 7x - 5 = 3x + 11, then x = ?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "7x - 5 = 3x + 11 → 4x = 16 → x = 4." },
      { quiz: mathQuiz1._id, questionText: "A number when added to its half gives 36. Find the number.", options: ["20", "22", "24", "26"], correctAnswer: 2, marks: 1, explanation: "x + x/2 = 36 → 3x/2 = 36 → x = 24." },
      { quiz: mathQuiz1._id, questionText: "Solve: 2(3x - 1) = 5x + 4", options: ["4", "5", "6", "7"], correctAnswer: 2, marks: 1, explanation: "6x - 2 = 5x + 4 → x = 6." },
      { quiz: mathQuiz1._id, questionText: "If the perimeter of a rectangle is 40 cm and length is 12 cm, find breadth.", options: ["6 cm", "7 cm", "8 cm", "9 cm"], correctAnswer: 2, marks: 1, explanation: "2(l + b) = 40 → 2(12 + b) = 40 → 12 + b = 20 → b = 8 cm." },
    ]);

    // Subcategory 2: Understanding Quadrilaterals
    const mathQuiz2 = await Quiz.create({
      title: "Understanding Quadrilaterals",
      subject: "Mathematics",
      category: "Geometry",
      chapter: "Quadrilaterals",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "What is the sum of all angles of a quadrilateral?", options: ["180°", "270°", "360°", "540°"], correctAnswer: 2, marks: 1, explanation: "The sum of all interior angles of a quadrilateral is always 360°." },
      { quiz: mathQuiz2._id, questionText: "A quadrilateral with all sides equal and all angles 90° is called:", options: ["Rectangle", "Rhombus", "Square", "Parallelogram"], correctAnswer: 2, marks: 1, explanation: "A square has all sides equal and all angles 90°." },
      { quiz: mathQuiz2._id, questionText: "In a parallelogram, opposite sides are:", options: ["Equal and parallel", "Equal but not parallel", "Parallel but not equal", "Neither equal nor parallel"], correctAnswer: 0, marks: 1, explanation: "In a parallelogram, opposite sides are both equal and parallel." },
      { quiz: mathQuiz2._id, questionText: "The diagonals of a rectangle are:", options: ["Equal", "Unequal", "Perpendicular", "None of these"], correctAnswer: 0, marks: 1, explanation: "The diagonals of a rectangle are always equal in length." },
      { quiz: mathQuiz2._id, questionText: "A rhombus has:", options: ["All sides equal", "All angles equal", "Both", "Neither"], correctAnswer: 0, marks: 1, explanation: "A rhombus has all four sides equal, but angles are not necessarily 90°." },
      { quiz: mathQuiz2._id, questionText: "How many diagonals does a quadrilateral have?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "A quadrilateral has exactly 2 diagonals." },
      { quiz: mathQuiz2._id, questionText: "A trapezium has:", options: ["Two pairs of parallel sides", "One pair of parallel sides", "No parallel sides", "All sides parallel"], correctAnswer: 1, marks: 1, explanation: "A trapezium has exactly one pair of parallel sides." },
      { quiz: mathQuiz2._id, questionText: "The diagonals of a rhombus:", options: ["Are equal", "Bisect each other at 90°", "Are parallel", "Don't intersect"], correctAnswer: 1, marks: 1, explanation: "The diagonals of a rhombus bisect each other at right angles (90°)." },
      { quiz: mathQuiz2._id, questionText: "If three angles of a quadrilateral are 80°, 90°, and 100°, find the fourth angle.", options: ["80°", "90°", "100°", "110°"], correctAnswer: 1, marks: 1, explanation: "Sum = 360°. Fourth angle = 360° - (80° + 90° + 100°) = 360° - 270° = 90°." },
      { quiz: mathQuiz2._id, questionText: "Which quadrilateral has diagonals that are equal and bisect each other?", options: ["Rhombus", "Rectangle", "Trapezium", "Kite"], correctAnswer: 1, marks: 1, explanation: "A rectangle has diagonals that are equal and bisect each other." },
    ]);

    // Subcategory 3: Exponents and Powers
    const mathQuiz3 = await Quiz.create({
      title: "Exponents and Powers",
      subject: "Mathematics",
      category: "Arithmetic",
      chapter: "Exponents",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "What is 2⁵?", options: ["16", "32", "64", "128"], correctAnswer: 1, marks: 1, explanation: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32." },
      { quiz: mathQuiz3._id, questionText: "What is the value of 10⁰?", options: ["0", "1", "10", "100"], correctAnswer: 1, marks: 1, explanation: "Any non-zero number raised to the power 0 is 1." },
      { quiz: mathQuiz3._id, questionText: "Simplify: 3² × 3³", options: ["3⁵", "3⁶", "9⁵", "9⁶"], correctAnswer: 0, marks: 1, explanation: "When multiplying same base, add exponents: 3² × 3³ = 3²⁺³ = 3⁵." },
      { quiz: mathQuiz3._id, questionText: "What is 5⁻²?", options: ["25", "-25", "1/25", "-1/25"], correctAnswer: 2, marks: 1, explanation: "5⁻² = 1/5² = 1/25." },
      { quiz: mathQuiz3._id, questionText: "Simplify: (2³)²", options: ["2⁵", "2⁶", "4⁶", "8²"], correctAnswer: 1, marks: 1, explanation: "When raising a power to a power, multiply exponents: (2³)² = 2³ˣ² = 2⁶." },
      { quiz: mathQuiz3._id, questionText: "What is the standard form of 0.00045?", options: ["4.5 × 10⁻⁴", "45 × 10⁻⁵", "4.5 × 10⁻³", "0.45 × 10⁻³"], correctAnswer: 0, marks: 1, explanation: "0.00045 = 4.5 × 10⁻⁴ in standard form." },
      { quiz: mathQuiz3._id, questionText: "Simplify: 7⁵ ÷ 7²", options: ["7³", "7⁷", "7¹⁰", "1³"], correctAnswer: 0, marks: 1, explanation: "When dividing same base, subtract exponents: 7⁵ ÷ 7² = 7⁵⁻² = 7³." },
      { quiz: mathQuiz3._id, questionText: "What is (-1)¹⁰⁰?", options: ["-1", "1", "100", "-100"], correctAnswer: 1, marks: 1, explanation: "(-1) raised to any even power equals 1." },
      { quiz: mathQuiz3._id, questionText: "Express 64000000 in standard form:", options: ["6.4 × 10⁷", "64 × 10⁶", "6.4 × 10⁶", "0.64 × 10⁸"], correctAnswer: 0, marks: 1, explanation: "64000000 = 6.4 × 10⁷ in standard form." },
      { quiz: mathQuiz3._id, questionText: "What is (a²b³)² equal to?", options: ["a⁴b⁵", "a⁴b⁶", "a²b⁶", "a⁴b³"], correctAnswer: 1, marks: 1, explanation: "(a²b³)² = a²ˣ² × b³ˣ² = a⁴b⁶." },
    ]);

    console.log("✓ Class 8 - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8Mathematics;
