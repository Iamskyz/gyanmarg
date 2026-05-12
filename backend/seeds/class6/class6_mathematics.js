import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6Mathematics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Mathematics - Subcategory 1: Whole Numbers
    const mathQuiz1 = await Quiz.create({
      title: "Whole Numbers & Basic Operations",
      subject: "Mathematics",
      category: "Arithmetic",
      chapter: "Whole Numbers",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz1._id,
        questionText: "What is the successor of 999?",
        options: ["998", "1000", "1001", "9999"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The successor of a number is obtained by adding 1. 999 + 1 = 1000.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "Which of the following is the smallest whole number?",
        options: ["1", "0", "-1", "2"],
        correctAnswer: 1,
        marks: 1,
        explanation: "0 is the smallest whole number. Whole numbers start from 0.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is 456 × 0?",
        options: ["456", "0", "1", "4560"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Any number multiplied by 0 gives 0.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "Find the value of 7 × 8 + 7 × 2 using distributive property.",
        options: ["70", "72", "56", "80"],
        correctAnswer: 0,
        marks: 1,
        explanation: "7 × 8 + 7 × 2 = 7 × (8 + 2) = 7 × 10 = 70.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is the predecessor of 1000?",
        options: ["1001", "999", "998", "100"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The predecessor is obtained by subtracting 1. 1000 - 1 = 999.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "Which property is shown by: 3 + 5 = 5 + 3?",
        options: ["Associative", "Commutative", "Distributive", "Identity"],
        correctAnswer: 1,
        marks: 1,
        explanation: "When the order of addition doesn't change the result, it's the commutative property.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is 125 ÷ 5?",
        options: ["20", "25", "30", "15"],
        correctAnswer: 1,
        marks: 1,
        explanation: "125 ÷ 5 = 25. Verify: 25 × 5 = 125.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "The number 1 is called the _____ of multiplication.",
        options: ["Zero element", "Identity element", "Inverse element", "Composite element"],
        correctAnswer: 1,
        marks: 1,
        explanation: "1 is the multiplicative identity because any number × 1 = the same number.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is the sum of first 5 whole numbers?",
        options: ["10", "15", "5", "20"],
        correctAnswer: 0,
        marks: 1,
        explanation: "First 5 whole numbers: 0, 1, 2, 3, 4. Sum = 0+1+2+3+4 = 10.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "Which of the following is NOT a whole number?",
        options: ["0", "5", "-3", "100"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Whole numbers are 0, 1, 2, 3... Negative numbers like -3 are not whole numbers.",
      },
    ]);

    // Mathematics - Subcategory 2: Fractions
    const mathQuiz2 = await Quiz.create({
      title: "Introduction to Fractions",
      subject: "Mathematics",
      category: "Arithmetic",
      chapter: "Fractions",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz2._id,
        questionText: "What fraction of the circle is shaded if 3 out of 8 parts are colored?",
        options: ["3/8", "8/3", "3/5", "5/8"],
        correctAnswer: 0,
        marks: 1,
        explanation: "If 3 parts out of 8 total parts are shaded, the fraction is 3/8.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "Which fraction is equivalent to 1/2?",
        options: ["2/3", "3/6", "4/6", "5/8"],
        correctAnswer: 1,
        marks: 1,
        explanation: "3/6 = 1/2 because 3 ÷ 3 = 1 and 6 ÷ 3 = 2.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is 1/4 + 1/4?",
        options: ["1/8", "2/8", "1/2", "2/4"],
        correctAnswer: 2,
        marks: 1,
        explanation: "1/4 + 1/4 = 2/4 = 1/2.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "Which fraction is greater: 2/3 or 1/2?",
        options: ["2/3", "1/2", "Both are equal", "Cannot compare"],
        correctAnswer: 0,
        marks: 1,
        explanation: "2/3 = 4/6 and 1/2 = 3/6. Since 4/6 > 3/6, therefore 2/3 > 1/2.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is the simplest form of 6/8?",
        options: ["3/4", "6/8", "12/16", "2/3"],
        correctAnswer: 0,
        marks: 1,
        explanation: "6/8 = 3/4 (dividing both numerator and denominator by 2).",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "In the fraction 5/7, what is 7 called?",
        options: ["Numerator", "Denominator", "Whole number", "Mixed number"],
        correctAnswer: 1,
        marks: 1,
        explanation: "In a fraction, the bottom number is called the denominator.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is 3/4 - 1/4?",
        options: ["2/4", "1/2", "4/8", "Both A and B"],
        correctAnswer: 3,
        marks: 1,
        explanation: "3/4 - 1/4 = 2/4 = 1/2. Both answers are correct.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "Which of these represents a proper fraction?",
        options: ["5/3", "7/4", "3/5", "9/8"],
        correctAnswer: 2,
        marks: 1,
        explanation: "A proper fraction has numerator smaller than denominator. 3/5 is proper.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What fraction of an hour is 15 minutes?",
        options: ["1/2", "1/3", "1/4", "1/6"],
        correctAnswer: 2,
        marks: 1,
        explanation: "15 minutes out of 60 minutes = 15/60 = 1/4.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "If you eat 2 slices of a pizza cut into 8 equal pieces, what fraction did you eat?",
        options: ["2/8", "1/4", "2/6", "Both A and B"],
        correctAnswer: 3,
        marks: 1,
        explanation: "2 out of 8 pieces = 2/8 = 1/4. Both are correct.",
      },
    ]);

    // Mathematics - Subcategory 3: Basic Geometry
    const mathQuiz3 = await Quiz.create({
      title: "Basic Shapes and Geometry",
      subject: "Mathematics",
      category: "Geometry",
      chapter: "Basic Shapes",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz3._id,
        questionText: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A triangle has exactly 3 sides.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The sum of all angles in any triangle is always 180°.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "A line segment has:",
        options: ["No endpoints", "One endpoint", "Two endpoints", "Three endpoints"],
        correctAnswer: 2,
        marks: 1,
        explanation: "A line segment has exactly two endpoints.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "How many vertices does a rectangle have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A rectangle has 4 vertices (corners).",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "Which shape has all sides equal?",
        options: ["Rectangle", "Square", "Triangle", "Circle"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A square has all four sides equal in length.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "What is a straight angle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A straight angle measures exactly 180°.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "How many diagonals does a square have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A square has 2 diagonals that intersect at the center.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "What do we call two lines that never meet?",
        options: ["Intersecting lines", "Parallel lines", "Perpendicular lines", "Curved lines"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Parallel lines never meet, no matter how far they are extended.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "A right angle measures:",
        options: ["45°", "90°", "180°", "270°"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A right angle measures exactly 90°.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "How many sides does a pentagon have?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A pentagon has exactly 5 sides.",
      },
    ]);

    console.log("✓ Class 6 - Mathematics: 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6Mathematics;
