import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10Mathematics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Real Numbers
    const mathQuiz1 = await Quiz.create({
      title: "Real Numbers - HCF, LCM and Euclid's Division",
      subject: "Mathematics",
      category: "Number System",
      chapter: "Real Numbers",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "The HCF of 12 and 18 is:", options: ["2", "4", "6", "36"], correctAnswer: 2, marks: 1, explanation: "12 = 2² × 3, 18 = 2 × 3². HCF = 2 × 3 = 6." },
      { quiz: mathQuiz1._id, questionText: "The LCM of 4 and 6 is:", options: ["2", "12", "24", "6"], correctAnswer: 1, marks: 1, explanation: "4 = 2², 6 = 2 × 3. LCM = 2² × 3 = 12." },
      { quiz: mathQuiz1._id, questionText: "Euclid's Division Lemma states: a = bq + r, where:", options: ["0 ≤ r < b", "0 < r < b", "0 ≤ r ≤ b", "r > b"], correctAnswer: 0, marks: 1, explanation: "In Euclid's Division Lemma, remainder r satisfies 0 ≤ r < b." },
      { quiz: mathQuiz1._id, questionText: "The product of HCF and LCM of two numbers equals:", options: ["Sum of numbers", "Product of numbers", "Difference of numbers", "Square of numbers"], correctAnswer: 1, marks: 1, explanation: "HCF × LCM = Product of the two numbers." },
      { quiz: mathQuiz1._id, questionText: "√2 is:", options: ["Rational", "Irrational", "Integer", "Natural number"], correctAnswer: 1, marks: 1, explanation: "√2 cannot be expressed as p/q, so it is irrational." },
      { quiz: mathQuiz1._id, questionText: "The decimal expansion of 7/8 is:", options: ["Non-terminating", "Terminating", "Non-terminating recurring", "None"], correctAnswer: 1, marks: 1, explanation: "7/8 = 0.875 (terminating). Denominator has only factor 2." },
      { quiz: mathQuiz1._id, questionText: "If HCF(a, b) = 1, then a and b are called:", options: ["Equal", "Co-prime", "Composite", "Even"], correctAnswer: 1, marks: 1, explanation: "Numbers with HCF = 1 are called co-prime numbers." },
      { quiz: mathQuiz1._id, questionText: "The Fundamental Theorem of Arithmetic states:", options: ["Every number is prime", "Every composite number has unique prime factorization", "Every number is even", "Primes are infinite"], correctAnswer: 1, marks: 1, explanation: "Every composite number can be expressed as a unique product of primes." },
      { quiz: mathQuiz1._id, questionText: "HCF of 26 and 91 is:", options: ["7", "13", "26", "91"], correctAnswer: 1, marks: 1, explanation: "26 = 2 × 13, 91 = 7 × 13. HCF = 13." },
      { quiz: mathQuiz1._id, questionText: "If LCM(a, b) = 180 and HCF(a, b) = 6, and a = 30, then b = ?", options: ["24", "30", "36", "42"], correctAnswer: 2, marks: 1, explanation: "a × b = HCF × LCM → 30 × b = 6 × 180 → b = 36." },
    ]);

    // Subcategory 2: Quadratic Equations
    const mathQuiz2 = await Quiz.create({
      title: "Quadratic Equations",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Quadratic Equations",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "The standard form of a quadratic equation is:", options: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx² = 0", "a/x + b = 0"], correctAnswer: 1, marks: 1, explanation: "Standard form is ax² + bx + c = 0, where a ≠ 0." },
      { quiz: mathQuiz2._id, questionText: "The discriminant of ax² + bx + c = 0 is:", options: ["b² + 4ac", "b² - 4ac", "4ac - b²", "b² - 2ac"], correctAnswer: 1, marks: 1, explanation: "Discriminant D = b² - 4ac determines nature of roots." },
      { quiz: mathQuiz2._id, questionText: "If D > 0, the roots are:", options: ["Equal", "Real and distinct", "Imaginary", "Zero"], correctAnswer: 1, marks: 1, explanation: "D > 0 means two real and distinct (unequal) roots." },
      { quiz: mathQuiz2._id, questionText: "If D = 0, the roots are:", options: ["Real and equal", "Real and distinct", "Imaginary", "No roots"], correctAnswer: 0, marks: 1, explanation: "D = 0 means two real and equal roots." },
      { quiz: mathQuiz2._id, questionText: "Solve: x² - 5x + 6 = 0", options: ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = -1, -6"], correctAnswer: 0, marks: 1, explanation: "x² - 5x + 6 = (x-2)(x-3) = 0 → x = 2 or x = 3." },
      { quiz: mathQuiz2._id, questionText: "Sum of roots of ax² + bx + c = 0 is:", options: ["b/a", "-b/a", "c/a", "-c/a"], correctAnswer: 1, marks: 1, explanation: "Sum of roots = -b/a." },
      { quiz: mathQuiz2._id, questionText: "Product of roots of ax² + bx + c = 0 is:", options: ["b/a", "-b/a", "c/a", "-c/a"], correctAnswer: 2, marks: 1, explanation: "Product of roots = c/a." },
      { quiz: mathQuiz2._id, questionText: "The quadratic formula is:", options: ["x = -b ± √(b²-4ac) / 2a", "x = b ± √(b²-4ac) / 2a", "x = -b ± √(b²+4ac) / 2a", "x = -b / 2a"], correctAnswer: 0, marks: 1, explanation: "Quadratic formula: x = [-b ± √(b²-4ac)] / 2a." },
      { quiz: mathQuiz2._id, questionText: "How many roots does a quadratic equation have?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "A quadratic equation always has exactly 2 roots (may be equal or complex)." },
      { quiz: mathQuiz2._id, questionText: "If one root of x² - 7x + k = 0 is 3, find k.", options: ["10", "12", "14", "16"], correctAnswer: 1, marks: 1, explanation: "Substituting x=3: 9 - 21 + k = 0 → k = 12." },
    ]);

    // Subcategory 3: Introduction to Trigonometry
    const mathQuiz3 = await Quiz.create({
      title: "Introduction to Trigonometry",
      subject: "Mathematics",
      category: "Trigonometry",
      chapter: "Trigonometry",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "sin 30° = ?", options: ["0", "1/2", "1", "√3/2"], correctAnswer: 1, marks: 1, explanation: "sin 30° = 1/2 is a standard trigonometric value." },
      { quiz: mathQuiz3._id, questionText: "cos 60° = ?", options: ["0", "1/2", "1", "√3/2"], correctAnswer: 1, marks: 1, explanation: "cos 60° = 1/2." },
      { quiz: mathQuiz3._id, questionText: "tan 45° = ?", options: ["0", "1/2", "1", "√3"], correctAnswer: 2, marks: 1, explanation: "tan 45° = 1." },
      { quiz: mathQuiz3._id, questionText: "sin²θ + cos²θ = ?", options: ["0", "1", "2", "sin θ"], correctAnswer: 1, marks: 1, explanation: "sin²θ + cos²θ = 1 is a fundamental trigonometric identity." },
      { quiz: mathQuiz3._id, questionText: "What is tan θ in terms of sin and cos?", options: ["sin θ / cos θ", "cos θ / sin θ", "sin θ × cos θ", "1 / sin θ"], correctAnswer: 0, marks: 1, explanation: "tan θ = sin θ / cos θ." },
      { quiz: mathQuiz3._id, questionText: "sin 90° = ?", options: ["0", "1/2", "1", "Undefined"], correctAnswer: 2, marks: 1, explanation: "sin 90° = 1." },
      { quiz: mathQuiz3._id, questionText: "cos 0° = ?", options: ["0", "1/2", "1", "Undefined"], correctAnswer: 2, marks: 1, explanation: "cos 0° = 1." },
      { quiz: mathQuiz3._id, questionText: "If sin A = 3/5, what is cos A?", options: ["3/5", "4/5", "5/3", "5/4"], correctAnswer: 1, marks: 1, explanation: "sin²A + cos²A = 1 → cos²A = 1 - 9/25 = 16/25 → cos A = 4/5." },
      { quiz: mathQuiz3._id, questionText: "sec θ = ?", options: ["1/sin θ", "1/cos θ", "1/tan θ", "sin θ/cos θ"], correctAnswer: 1, marks: 1, explanation: "sec θ = 1/cos θ." },
      { quiz: mathQuiz3._id, questionText: "tan 0° = ?", options: ["0", "1", "Undefined", "∞"], correctAnswer: 0, marks: 1, explanation: "tan 0° = sin 0° / cos 0° = 0/1 = 0." },
    ]);

    console.log("✓ Class 10 - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10Mathematics;
