import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import Quiz from "./models/Quiz.js";
import Question from "./models/Question.js";
import Game from "./models/Game.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await User.deleteMany({});
    await Quiz.deleteMany({});
    await Question.deleteMany({});
    await Game.deleteMany({});

    // Create admin
    const adminPass = await bcrypt.hash("admin123", 10);
    const admin = await User.create({
      name: "Admin",
      email: "admin@gyanmarg.com",
      password: adminPass,
      role: "admin",
    });

    // Create a student
    const studentPass = await bcrypt.hash("student123", 10);
    await User.create({
      name: "Rahul Sharma",
      email: "rahul@student.com",
      password: studentPass,
      role: "student",
      grade: 10,
      language: "en",
      xp: 250,
      level: 2,
      streak: 3,
      badges: ["First Quiz", "Science Star"],
    });

    console.log("✓ Users created (admin@gyanmarg.com / admin123, rahul@student.com / student123)");

    // Create Quizzes
    const quiz1 = await Quiz.create({
      title: "Chemical Reactions & Equations",
      subject: "Science",
      chapter: "Chapter 1",
      grade: 10,
      duration: 10,
      totalMarks: 5,
      xpReward: 20,
      isPublished: true,
      createdBy: admin._id,
    });

    const quiz2 = await Quiz.create({
      title: "Linear Equations in Two Variables",
      subject: "Mathematics",
      chapter: "Chapter 3",
      grade: 10,
      duration: 15,
      totalMarks: 5,
      xpReward: 25,
      isPublished: true,
      createdBy: admin._id,
    });

    const quiz3 = await Quiz.create({
      title: "Nationalism in India",
      subject: "Social Science",
      chapter: "Chapter 2",
      grade: 10,
      duration: 10,
      totalMarks: 5,
      xpReward: 15,
      isPublished: true,
      createdBy: admin._id,
    });

    const quiz4 = await Quiz.create({
      title: "Light - Reflection and Refraction",
      subject: "Science",
      chapter: "Chapter 10",
      grade: 10,
      duration: 12,
      totalMarks: 5,
      xpReward: 20,
      isPublished: true,
      createdBy: admin._id,
    });

    const quiz5 = await Quiz.create({
      title: "Polynomials",
      subject: "Mathematics",
      chapter: "Chapter 2",
      grade: 9,
      duration: 10,
      totalMarks: 5,
      xpReward: 15,
      isPublished: true,
      createdBy: admin._id,
    });

    const quiz6 = await Quiz.create({
      title: "The French Revolution",
      subject: "Social Science",
      chapter: "Chapter 1",
      grade: 9,
      duration: 10,
      totalMarks: 5,
      xpReward: 15,
      isPublished: true,
      createdBy: admin._id,
    });

    console.log("✓ 6 Quizzes created");

    // Questions for Quiz 1 - Chemical Reactions
    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Which of the following is a decomposition reaction?", options: ["H₂ + O₂ → H₂O", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "NaOH + HCl → NaCl + H₂O"], correctAnswer: 1, marks: 1, explanation: "CaCO₃ breaks down into CaO and CO₂, which is a decomposition reaction." },
      { quiz: quiz1._id, questionText: "What is the balanced equation for burning magnesium?", options: ["Mg + O → MgO", "2Mg + O₂ → 2MgO", "Mg + O₂ → MgO₂", "Mg₂ + O₂ → 2MgO"], correctAnswer: 1, marks: 1, explanation: "2Mg + O₂ → 2MgO is the correctly balanced equation." },
      { quiz: quiz1._id, questionText: "Rusting of iron is an example of:", options: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Oxidation reaction"], correctAnswer: 3, marks: 1, explanation: "Rusting involves iron reacting with oxygen and moisture — an oxidation reaction." },
      { quiz: quiz1._id, questionText: "Which gas is evolved when zinc reacts with dilute HCl?", options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"], correctAnswer: 1, marks: 1, explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is evolved." },
      { quiz: quiz1._id, questionText: "A substance that gains oxygen during a reaction is said to be:", options: ["Reduced", "Oxidized", "Corroded", "Neutralized"], correctAnswer: 1, marks: 1, explanation: "Gaining oxygen means the substance is oxidized." },
    ]);

    // Questions for Quiz 2 - Linear Equations
    await Question.insertMany([
      { quiz: quiz2._id, questionText: "The pair of equations x + 2y = 5 and 3x + 6y = 15 has:", options: ["Unique solution", "No solution", "Infinitely many solutions", "Exactly two solutions"], correctAnswer: 2, marks: 1, explanation: "The second equation is 3 times the first, so they represent the same line — infinite solutions." },
      { quiz: quiz2._id, questionText: "If 2x + 3y = 12 and x = 3, what is y?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "2(3) + 3y = 12 → 6 + 3y = 12 → 3y = 6 → y = 2" },
      { quiz: quiz2._id, questionText: "The graph of y = 3x + 2 is a:", options: ["Parabola", "Circle", "Straight line", "Hyperbola"], correctAnswer: 2, marks: 1, explanation: "y = mx + c is the equation of a straight line." },
      { quiz: quiz2._id, questionText: "Two lines are parallel if their slopes are:", options: ["Equal", "Negative reciprocals", "Zero", "Undefined"], correctAnswer: 0, marks: 1, explanation: "Parallel lines have equal slopes." },
      { quiz: quiz2._id, questionText: "The solution of x + y = 7 and x - y = 3 is:", options: ["x=4, y=3", "x=5, y=2", "x=3, y=4", "x=6, y=1"], correctAnswer: 1, marks: 1, explanation: "Adding both: 2x = 10, x = 5. Then y = 7 - 5 = 2." },
    ]);

    // Questions for Quiz 3 - Nationalism
    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Who started the Civil Disobedience Movement?", options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"], correctAnswer: 2, marks: 1, explanation: "Mahatma Gandhi started the Civil Disobedience Movement with the Dandi March in 1930." },
      { quiz: quiz3._id, questionText: "The Jallianwala Bagh massacre took place in:", options: ["1917", "1919", "1920", "1921"], correctAnswer: 1, marks: 1, explanation: "The Jallianwala Bagh massacre occurred on April 13, 1919 in Amritsar." },
      { quiz: quiz3._id, questionText: "Who wrote 'Hind Swaraj'?", options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Rabindranath Tagore", "Lala Lajpat Rai"], correctAnswer: 1, marks: 1, explanation: "Mahatma Gandhi wrote Hind Swaraj in 1909." },
      { quiz: quiz3._id, questionText: "The Non-Cooperation Movement was launched in:", options: ["1919", "1920", "1930", "1942"], correctAnswer: 1, marks: 1, explanation: "The Non-Cooperation Movement was launched in 1920." },
      { quiz: quiz3._id, questionText: "Simon Commission came to India in:", options: ["1925", "1927", "1928", "1930"], correctAnswer: 2, marks: 1, explanation: "The Simon Commission arrived in India in 1928." },
    ]);

    // Questions for Quiz 4 - Light
    await Question.insertMany([
      { quiz: quiz4._id, questionText: "The angle of incidence equals the angle of reflection. This is the law of:", options: ["Refraction", "Reflection", "Diffraction", "Dispersion"], correctAnswer: 1, marks: 1, explanation: "This is the first law of reflection." },
      { quiz: quiz4._id, questionText: "A concave mirror is used in:", options: ["Rear-view mirrors", "Torch lights", "Periscopes", "Kaleidoscopes"], correctAnswer: 1, marks: 1, explanation: "Concave mirrors converge light and are used in torch lights and headlights." },
      { quiz: quiz4._id, questionText: "The speed of light in vacuum is:", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], correctAnswer: 1, marks: 1, explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s." },
      { quiz: quiz4._id, questionText: "When light passes from air to glass, it bends:", options: ["Away from normal", "Towards normal", "Does not bend", "Parallel to surface"], correctAnswer: 1, marks: 1, explanation: "Light bends towards the normal when going from a rarer to a denser medium." },
      { quiz: quiz4._id, questionText: "The power of a lens is measured in:", options: ["Metres", "Centimetres", "Dioptres", "Watts"], correctAnswer: 2, marks: 1, explanation: "The SI unit of power of a lens is dioptre (D)." },
    ]);

    // Questions for Quiz 5 - Polynomials
    await Question.insertMany([
      { quiz: quiz5._id, questionText: "The degree of polynomial 4x³ + 2x² + 7 is:", options: ["1", "2", "3", "7"], correctAnswer: 2, marks: 1, explanation: "The highest power of x is 3, so the degree is 3." },
      { quiz: quiz5._id, questionText: "A polynomial of degree 2 is called:", options: ["Linear", "Quadratic", "Cubic", "Constant"], correctAnswer: 1, marks: 1, explanation: "A polynomial of degree 2 is called a quadratic polynomial." },
      { quiz: quiz5._id, questionText: "The zero of the polynomial p(x) = 2x + 6 is:", options: ["3", "-3", "6", "-6"], correctAnswer: 1, marks: 1, explanation: "2x + 6 = 0 → 2x = -6 → x = -3" },
      { quiz: quiz5._id, questionText: "How many zeros can a cubic polynomial have at most?", options: ["1", "2", "3", "4"], correctAnswer: 2, marks: 1, explanation: "A cubic polynomial can have at most 3 zeros." },
      { quiz: quiz5._id, questionText: "The value of p(x) = x² - 3x + 2 at x = 1 is:", options: ["0", "1", "2", "-1"], correctAnswer: 0, marks: 1, explanation: "p(1) = 1 - 3 + 2 = 0" },
    ]);

    // Questions for Quiz 6 - French Revolution
    await Question.insertMany([
      { quiz: quiz6._id, questionText: "The French Revolution began in:", options: ["1776", "1789", "1799", "1804"], correctAnswer: 1, marks: 1, explanation: "The French Revolution began in 1789 with the storming of the Bastille." },
      { quiz: quiz6._id, questionText: "Who was the king of France during the Revolution?", options: ["Louis XIV", "Louis XV", "Louis XVI", "Napoleon"], correctAnswer: 2, marks: 1, explanation: "Louis XVI was the king of France when the Revolution started." },
      { quiz: quiz6._id, questionText: "'Liberty, Equality, Fraternity' was the slogan of:", options: ["American Revolution", "French Revolution", "Russian Revolution", "Industrial Revolution"], correctAnswer: 1, marks: 1, explanation: "This was the famous slogan of the French Revolution." },
      { quiz: quiz6._id, questionText: "The Bastille was a:", options: ["Palace", "Church", "Prison", "Market"], correctAnswer: 2, marks: 1, explanation: "The Bastille was a state prison that symbolized royal authority." },
      { quiz: quiz6._id, questionText: "The National Assembly was formed by:", options: ["Clergy", "Nobility", "Third Estate", "King"], correctAnswer: 2, marks: 1, explanation: "The Third Estate declared themselves the National Assembly in June 1789." },
    ]);

    console.log("✓ 30 Questions created (5 per quiz)");

    // Create Games
    await Game.insertMany([
      { title: "Math Speed Challenge", description: "Solve arithmetic problems as fast as you can!", type: "math_sprint", grade: 10, difficulty: "medium", xpReward: 10, isPublished: true, createdBy: admin._id },
      { title: "Science Memory Cards", description: "Match scientific terms with their definitions", type: "memory", grade: 10, difficulty: "easy", xpReward: 8, isPublished: true, createdBy: admin._id },
      { title: "Typing Master", description: "Type scientific formulas and definitions quickly", type: "typing", grade: 10, difficulty: "medium", xpReward: 10, isPublished: true, createdBy: admin._id },
      { title: "Word Scramble - History", description: "Unscramble important historical terms", type: "word_puzzle", grade: 9, difficulty: "easy", xpReward: 6, isPublished: true, createdBy: admin._id },
      { title: "Quick Maths", description: "Mental math challenges for beginners", type: "math_sprint", grade: 6, difficulty: "easy", xpReward: 5, isPublished: true, createdBy: admin._id },
      { title: "Element Memory", description: "Match elements with their symbols", type: "memory", grade: 9, difficulty: "hard", xpReward: 15, isPublished: true, createdBy: admin._id },
    ]);

    console.log("✓ 6 Games created");
    console.log("\n🎉 Seed complete! You can now login with:");
    console.log("   Admin:   admin@gyanmarg.com / admin123");
    console.log("   Student: rahul@student.com / student123");

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seed();
