import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9Mathematics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Number Systems
    const mathQuiz1 = await Quiz.create({
      title: "Number Systems - Rational and Irrational",
      subject: "Mathematics",
      category: "Number System",
      chapter: "Number Systems",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz1._id, questionText: "Which of the following is an irrational number?", options: ["3/4", "√2", "0.5", "7"], correctAnswer: 1, marks: 1, explanation: "√2 cannot be expressed as p/q, so it is irrational." },
      { quiz: mathQuiz1._id, questionText: "Between which two integers does √3 lie?", options: ["1 and 2", "2 and 3", "3 and 4", "0 and 1"], correctAnswer: 0, marks: 1, explanation: "√1 = 1 and √4 = 2, so √3 lies between 1 and 2." },
      { quiz: mathQuiz1._id, questionText: "What is the decimal expansion of 1/3?", options: ["0.3", "0.33", "0.333...(non-terminating recurring)", "0.3 (terminating)"], correctAnswer: 2, marks: 1, explanation: "1/3 = 0.333... which is non-terminating recurring decimal." },
      { quiz: mathQuiz1._id, questionText: "Every rational number is:", options: ["A natural number", "An integer", "A real number", "An irrational number"], correctAnswer: 2, marks: 1, explanation: "Every rational number is a real number. Real numbers include both rational and irrational." },
      { quiz: mathQuiz1._id, questionText: "What is the value of √9 + √16?", options: ["5", "7", "25", "√25"], correctAnswer: 1, marks: 1, explanation: "√9 = 3 and √16 = 4. So 3 + 4 = 7." },
      { quiz: mathQuiz1._id, questionText: "Which of these has a terminating decimal expansion?", options: ["1/3", "1/7", "1/8", "1/6"], correctAnswer: 2, marks: 1, explanation: "1/8 = 0.125 (terminating). Denominator has only factors of 2 and 5." },
      { quiz: mathQuiz1._id, questionText: "Rationalize: 1/√2", options: ["√2", "√2/2", "2/√2", "1/2"], correctAnswer: 1, marks: 1, explanation: "1/√2 × √2/√2 = √2/2." },
      { quiz: mathQuiz1._id, questionText: "The sum of a rational and an irrational number is:", options: ["Always rational", "Always irrational", "Sometimes rational", "Zero"], correctAnswer: 1, marks: 1, explanation: "The sum of a rational and irrational number is always irrational." },
      { quiz: mathQuiz1._id, questionText: "What is 2^(1/3) called?", options: ["Square root of 2", "Cube root of 2", "2 cubed", "2 squared"], correctAnswer: 1, marks: 1, explanation: "2^(1/3) = ∛2, which is the cube root of 2." },
      { quiz: mathQuiz1._id, questionText: "How many rational numbers exist between 1 and 2?", options: ["10", "100", "1000", "Infinite"], correctAnswer: 3, marks: 1, explanation: "There are infinitely many rational numbers between any two numbers." },
    ]);

    // Subcategory 2: Polynomials
    const mathQuiz2 = await Quiz.create({
      title: "Polynomials",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Polynomials",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz2._id, questionText: "What is the degree of polynomial 4x³ + 2x² + 7?", options: ["1", "2", "3", "7"], correctAnswer: 2, marks: 1, explanation: "The highest power of x is 3, so degree = 3." },
      { quiz: mathQuiz2._id, questionText: "A polynomial of degree 1 is called:", options: ["Constant", "Linear", "Quadratic", "Cubic"], correctAnswer: 1, marks: 1, explanation: "Degree 1 = Linear, Degree 2 = Quadratic, Degree 3 = Cubic." },
      { quiz: mathQuiz2._id, questionText: "What is the zero of p(x) = 2x - 6?", options: ["2", "3", "6", "-3"], correctAnswer: 1, marks: 1, explanation: "2x - 6 = 0 → 2x = 6 → x = 3." },
      { quiz: mathQuiz2._id, questionText: "How many zeros can a quadratic polynomial have at most?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "A quadratic polynomial can have at most 2 zeros." },
      { quiz: mathQuiz2._id, questionText: "If p(x) = x² - 5x + 6, what is p(2)?", options: ["0", "1", "2", "-2"], correctAnswer: 0, marks: 1, explanation: "p(2) = 4 - 10 + 6 = 0. So x = 2 is a zero of p(x)." },
      { quiz: mathQuiz2._id, questionText: "Which is a factor of x² - 5x + 6?", options: ["(x - 1)", "(x - 2)", "(x - 4)", "(x + 2)"], correctAnswer: 1, marks: 1, explanation: "x² - 5x + 6 = (x - 2)(x - 3). So (x - 2) is a factor." },
      { quiz: mathQuiz2._id, questionText: "What is the remainder when x³ + 1 is divided by x + 1?", options: ["0", "1", "2", "-1"], correctAnswer: 0, marks: 1, explanation: "By Remainder Theorem: p(-1) = (-1)³ + 1 = -1 + 1 = 0." },
      { quiz: mathQuiz2._id, questionText: "Expand: (x + 2)²", options: ["x² + 4", "x² + 2x + 4", "x² + 4x + 4", "x² + 4x + 2"], correctAnswer: 2, marks: 1, explanation: "(x + 2)² = x² + 2(x)(2) + 2² = x² + 4x + 4." },
      { quiz: mathQuiz2._id, questionText: "Factorize: x² - 9", options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "(x-9)(x+1)"], correctAnswer: 2, marks: 1, explanation: "x² - 9 = x² - 3² = (x-3)(x+3) using a² - b² identity." },
      { quiz: mathQuiz2._id, questionText: "The value of (a+b)(a-b) is:", options: ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² - 2ab + b²"], correctAnswer: 1, marks: 1, explanation: "(a+b)(a-b) = a² - b² is a standard algebraic identity." },
    ]);

    // Subcategory 3: Coordinate Geometry
    const mathQuiz3 = await Quiz.create({
      title: "Coordinate Geometry",
      subject: "Mathematics",
      category: "Geometry",
      chapter: "Coordinate Geometry",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: mathQuiz3._id, questionText: "The point (0, 0) is called:", options: ["X-axis", "Y-axis", "Origin", "Quadrant"], correctAnswer: 2, marks: 1, explanation: "The point where X-axis and Y-axis intersect (0,0) is called the origin." },
      { quiz: mathQuiz3._id, questionText: "In which quadrant does the point (-3, 4) lie?", options: ["I", "II", "III", "IV"], correctAnswer: 1, marks: 1, explanation: "(-x, +y) lies in Quadrant II." },
      { quiz: mathQuiz3._id, questionText: "The x-coordinate is also called:", options: ["Ordinate", "Abscissa", "Origin", "Quadrant"], correctAnswer: 1, marks: 1, explanation: "The x-coordinate is called abscissa and y-coordinate is called ordinate." },
      { quiz: mathQuiz3._id, questionText: "A point on the x-axis has coordinates:", options: ["(x, 0)", "(0, y)", "(x, y)", "(0, 0)"], correctAnswer: 0, marks: 1, explanation: "Any point on x-axis has y = 0, so coordinates are (x, 0)." },
      { quiz: mathQuiz3._id, questionText: "In which quadrant does (5, -3) lie?", options: ["I", "II", "III", "IV"], correctAnswer: 3, marks: 1, explanation: "(+x, -y) lies in Quadrant IV." },
      { quiz: mathQuiz3._id, questionText: "The point (-2, -5) lies in which quadrant?", options: ["I", "II", "III", "IV"], correctAnswer: 2, marks: 1, explanation: "(-x, -y) lies in Quadrant III." },
      { quiz: mathQuiz3._id, questionText: "What is the distance of point (3, 4) from origin?", options: ["3", "4", "5", "7"], correctAnswer: 2, marks: 1, explanation: "Distance = √(3² + 4²) = √(9 + 16) = √25 = 5." },
      { quiz: mathQuiz3._id, questionText: "The y-coordinate of any point on x-axis is:", options: ["1", "-1", "0", "Undefined"], correctAnswer: 2, marks: 1, explanation: "On the x-axis, y is always 0." },
      { quiz: mathQuiz3._id, questionText: "Mirror image of (3, 4) in x-axis is:", options: ["(-3, 4)", "(3, -4)", "(-3, -4)", "(4, 3)"], correctAnswer: 1, marks: 1, explanation: "Reflection in x-axis changes sign of y-coordinate: (3, 4) → (3, -4)." },
      { quiz: mathQuiz3._id, questionText: "The point (0, -5) lies on:", options: ["X-axis", "Y-axis", "Origin", "Quadrant III"], correctAnswer: 1, marks: 1, explanation: "When x = 0, the point lies on the Y-axis." },
    ]);

    console.log("✓ Class 9 - Mathematics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9Mathematics;
