import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7Mathematics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Mathematics - Subcategory 1: Integers
    const mathQuiz1 = await Quiz.create({
      title: "Integers and Operations",
      subject: "Mathematics",
      category: "Number System",
      chapter: "Integers",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz1._id,
        questionText: "What is (-5) + (-3)?",
        options: ["-8", "-2", "8", "2"],
        correctAnswer: 0,
        marks: 1,
        explanation: "When adding two negative numbers, add their absolute values and keep the negative sign. (-5) + (-3) = -8.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is (-12) ÷ 4?",
        options: ["3", "-3", "4", "-4"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A negative number divided by a positive number gives a negative result. (-12) ÷ 4 = -3.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is the additive inverse of -7?",
        options: ["-7", "7", "0", "1/7"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The additive inverse of a number is the number that when added to it gives 0. Additive inverse of -7 is 7.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is (-3) × (-4)?",
        options: ["-12", "12", "-7", "7"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The product of two negative numbers is positive. (-3) × (-4) = 12.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "Which integer is neither positive nor negative?",
        options: ["1", "-1", "0", "None"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Zero (0) is the integer that is neither positive nor negative.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is 15 + (-20)?",
        options: ["35", "-35", "5", "-5"],
        correctAnswer: 3,
        marks: 1,
        explanation: "15 + (-20) = 15 - 20 = -5. When adding a negative number, subtract and keep the sign of the larger absolute value.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is (-8) - (-3)?",
        options: ["-11", "-5", "5", "11"],
        correctAnswer: 1,
        marks: 1,
        explanation: "(-8) - (-3) = (-8) + 3 = -5. Subtracting a negative is the same as adding a positive.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "Arrange in ascending order: -5, 3, -1, 0, 2",
        options: ["-5, -1, 0, 2, 3", "3, 2, 0, -1, -5", "-1, -5, 0, 2, 3", "0, -1, -5, 2, 3"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Ascending order means smallest to largest. -5 < -1 < 0 < 2 < 3.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is the absolute value of -15?",
        options: ["-15", "15", "0", "-1"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The absolute value of a number is its distance from 0, always positive. |-15| = 15.",
      },
      {
        quiz: mathQuiz1._id,
        questionText: "What is (-6) × 5 × (-2)?",
        options: ["-60", "60", "-13", "13"],
        correctAnswer: 1,
        marks: 1,
        explanation: "(-6) × 5 = -30, then (-30) × (-2) = 60. Even number of negative signs gives positive result.",
      },
    ]);

    // Mathematics - Subcategory 2: Rational Numbers
    const mathQuiz2 = await Quiz.create({
      title: "Rational Numbers",
      subject: "Mathematics",
      category: "Number System",
      chapter: "Rational Numbers",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz2._id,
        questionText: "Which of the following is a rational number?",
        options: ["√2", "π", "3/4", "√5"],
        correctAnswer: 2,
        marks: 1,
        explanation: "A rational number can be expressed as p/q where q ≠ 0. 3/4 is a rational number.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is 2/3 + 1/4?",
        options: ["3/7", "11/12", "5/7", "8/12"],
        correctAnswer: 1,
        marks: 1,
        explanation: "2/3 + 1/4 = 8/12 + 3/12 = 11/12. Find LCM of denominators first.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is the reciprocal of 5/7?",
        options: ["5/7", "-5/7", "7/5", "-7/5"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The reciprocal of a fraction is obtained by flipping numerator and denominator. Reciprocal of 5/7 = 7/5.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is (-3/5) × (10/9)?",
        options: ["2/3", "-2/3", "30/45", "-30/45"],
        correctAnswer: 1,
        marks: 1,
        explanation: "(-3/5) × (10/9) = -30/45 = -2/3.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "Which rational number lies between 1/2 and 1?",
        options: ["1/4", "3/4", "1/3", "2/5"],
        correctAnswer: 1,
        marks: 1,
        explanation: "3/4 = 0.75 which lies between 1/2 = 0.5 and 1.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is 7/8 ÷ 3/4?",
        options: ["7/6", "21/32", "6/7", "28/24"],
        correctAnswer: 0,
        marks: 1,
        explanation: "7/8 ÷ 3/4 = 7/8 × 4/3 = 28/24 = 7/6.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "The standard form of -8/20 is:",
        options: ["-8/20", "-2/5", "2/5", "8/20"],
        correctAnswer: 1,
        marks: 1,
        explanation: "-8/20 simplified by dividing both by 4 gives -2/5.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is the additive inverse of 3/7?",
        options: ["7/3", "-7/3", "-3/7", "3/7"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The additive inverse of 3/7 is -3/7 because 3/7 + (-3/7) = 0.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "Is 0 a rational number?",
        options: ["Yes", "No", "Sometimes", "Cannot determine"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Yes, 0 is a rational number because it can be written as 0/1.",
      },
      {
        quiz: mathQuiz2._id,
        questionText: "What is 5/6 - 2/3?",
        options: ["3/3", "1/6", "1/3", "3/6"],
        correctAnswer: 1,
        marks: 1,
        explanation: "5/6 - 2/3 = 5/6 - 4/6 = 1/6.",
      },
    ]);

    // Mathematics - Subcategory 3: Algebraic Expressions
    const mathQuiz3 = await Quiz.create({
      title: "Simple Algebraic Expressions",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Algebraic Expressions",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: mathQuiz3._id,
        questionText: "What is the coefficient of x in 5x + 3?",
        options: ["3", "5", "x", "8"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The coefficient is the number multiplied with the variable. In 5x, the coefficient of x is 5.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "Simplify: 3x + 2x",
        options: ["5x", "6x", "5x²", "6x²"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Like terms can be added: 3x + 2x = 5x.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "What is the value of 2x + 3 when x = 4?",
        options: ["9", "11", "14", "8"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Substitute x = 4: 2(4) + 3 = 8 + 3 = 11.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "How many terms are in the expression 4x² + 3x - 7?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The terms are 4x², 3x, and -7. So there are 3 terms.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "What is the constant term in 7x + 5?",
        options: ["7", "x", "5", "7x"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The constant term is the term without a variable. In 7x + 5, the constant is 5.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "Simplify: 4x + 3y - 2x + y",
        options: ["2x + 4y", "6x + 4y", "2x + 2y", "6x + 2y"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Combine like terms: (4x - 2x) + (3y + y) = 2x + 4y.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "What is the degree of the expression 3x² + 5x + 1?",
        options: ["1", "2", "3", "5"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The degree is the highest power of the variable. Here it's x², so degree = 2.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "If x = 2, what is x² + 3x?",
        options: ["8", "10", "12", "14"],
        correctAnswer: 1,
        marks: 1,
        explanation: "x² + 3x = (2)² + 3(2) = 4 + 6 = 10.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "Which of these are like terms?",
        options: ["3x and 3y", "5x² and 2x", "4xy and 7xy", "2x and 3x²"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Like terms have the same variables with same powers. 4xy and 7xy are like terms.",
      },
      {
        quiz: mathQuiz3._id,
        questionText: "Subtract 2x + 3 from 5x + 7:",
        options: ["3x + 4", "7x + 10", "3x + 10", "7x + 4"],
        correctAnswer: 0,
        marks: 1,
        explanation: "(5x + 7) - (2x + 3) = 5x + 7 - 2x - 3 = 3x + 4.",
      },
    ]);

    console.log("✓ Class 7 - Mathematics: 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7Mathematics;
