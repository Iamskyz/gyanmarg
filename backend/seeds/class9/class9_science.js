import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9Science = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Matter in Our Surroundings
    const scienceQuiz1 = await Quiz.create({
      title: "Matter in Our Surroundings",
      subject: "Science",
      category: "Chemistry",
      chapter: "Matter",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz1._id, questionText: "Matter is made up of:", options: ["Only atoms", "Particles", "Only molecules", "Only electrons"], correctAnswer: 1, marks: 1, explanation: "Matter is made up of tiny particles (atoms and molecules)." },
      { quiz: scienceQuiz1._id, questionText: "Which state of matter has definite shape and volume?", options: ["Solid", "Liquid", "Gas", "Plasma"], correctAnswer: 0, marks: 1, explanation: "Solids have both definite shape and definite volume." },
      { quiz: scienceQuiz1._id, questionText: "The process of changing from liquid to gas is called:", options: ["Condensation", "Evaporation", "Sublimation", "Freezing"], correctAnswer: 1, marks: 1, explanation: "Evaporation is the change from liquid to gas at the surface." },
      { quiz: scienceQuiz1._id, questionText: "Dry ice (solid CO₂) directly converts to gas. This is called:", options: ["Evaporation", "Condensation", "Sublimation", "Melting"], correctAnswer: 2, marks: 1, explanation: "Sublimation is the direct change from solid to gas without becoming liquid." },
      { quiz: scienceQuiz1._id, questionText: "Which of these increases the rate of evaporation?", options: ["Decrease in temperature", "Increase in humidity", "Increase in surface area", "Decrease in wind speed"], correctAnswer: 2, marks: 1, explanation: "More surface area means more molecules can escape, increasing evaporation rate." },
      { quiz: scienceQuiz1._id, questionText: "The temperature at which a solid melts is called:", options: ["Boiling point", "Melting point", "Freezing point", "Dew point"], correctAnswer: 1, marks: 1, explanation: "Melting point is the temperature at which a solid changes to liquid." },
      { quiz: scienceQuiz1._id, questionText: "Gases can be compressed easily because:", options: ["Particles are very close", "Particles have large inter-particle space", "Particles don't move", "Particles are heavy"], correctAnswer: 1, marks: 1, explanation: "Gas particles have large spaces between them, allowing compression." },
      { quiz: scienceQuiz1._id, questionText: "What is the boiling point of water in Kelvin?", options: ["100 K", "273 K", "373 K", "473 K"], correctAnswer: 2, marks: 1, explanation: "100°C + 273 = 373 K." },
      { quiz: scienceQuiz1._id, questionText: "Latent heat of fusion is the heat required to:", options: ["Boil a liquid", "Melt a solid without temperature change", "Cool a gas", "Freeze a liquid"], correctAnswer: 1, marks: 1, explanation: "Latent heat of fusion converts solid to liquid at constant temperature." },
      { quiz: scienceQuiz1._id, questionText: "Which has maximum kinetic energy of particles?", options: ["Solid", "Liquid", "Gas", "All equal"], correctAnswer: 2, marks: 1, explanation: "Gas particles move fastest and have maximum kinetic energy." },
    ]);

    // Subcategory 2: Motion
    const scienceQuiz2 = await Quiz.create({
      title: "Motion and Speed",
      subject: "Science",
      category: "Physics",
      chapter: "Motion",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz2._id, questionText: "The SI unit of speed is:", options: ["km/h", "m/s", "cm/s", "m/min"], correctAnswer: 1, marks: 1, explanation: "The SI unit of speed is metre per second (m/s)." },
      { quiz: scienceQuiz2._id, questionText: "If a car travels 100 km in 2 hours, its average speed is:", options: ["200 km/h", "50 km/h", "100 km/h", "25 km/h"], correctAnswer: 1, marks: 1, explanation: "Speed = Distance/Time = 100/2 = 50 km/h." },
      { quiz: scienceQuiz2._id, questionText: "Acceleration is defined as:", options: ["Change in speed", "Rate of change of velocity", "Distance covered", "Speed × time"], correctAnswer: 1, marks: 1, explanation: "Acceleration = Change in velocity / Time taken." },
      { quiz: scienceQuiz2._id, questionText: "An object moving in a circle at constant speed has:", options: ["No acceleration", "Constant acceleration", "Changing acceleration", "Zero velocity"], correctAnswer: 2, marks: 1, explanation: "Direction changes continuously, so acceleration (direction) keeps changing." },
      { quiz: scienceQuiz2._id, questionText: "The slope of a distance-time graph gives:", options: ["Acceleration", "Speed", "Distance", "Time"], correctAnswer: 1, marks: 1, explanation: "Slope of distance-time graph = distance/time = speed." },
      { quiz: scienceQuiz2._id, questionText: "If velocity changes from 20 m/s to 30 m/s in 5 seconds, acceleration is:", options: ["2 m/s²", "10 m/s²", "50 m/s²", "5 m/s²"], correctAnswer: 0, marks: 1, explanation: "a = (30-20)/5 = 10/5 = 2 m/s²." },
      { quiz: scienceQuiz2._id, questionText: "Distance is a ___ quantity.", options: ["Vector", "Scalar", "Both", "Neither"], correctAnswer: 1, marks: 1, explanation: "Distance has only magnitude (no direction), so it's scalar." },
      { quiz: scienceQuiz2._id, questionText: "Displacement can be:", options: ["Only positive", "Only negative", "Zero, positive or negative", "Only zero"], correctAnswer: 2, marks: 1, explanation: "Displacement can be positive, negative, or zero depending on direction." },
      { quiz: scienceQuiz2._id, questionText: "Using v = u + at, if u = 0, a = 5 m/s², t = 4s, then v = ?", options: ["9 m/s", "20 m/s", "1.25 m/s", "40 m/s"], correctAnswer: 1, marks: 1, explanation: "v = 0 + 5 × 4 = 20 m/s." },
      { quiz: scienceQuiz2._id, questionText: "The area under velocity-time graph gives:", options: ["Speed", "Acceleration", "Displacement", "Time"], correctAnswer: 2, marks: 1, explanation: "Area under v-t graph = velocity × time = displacement." },
    ]);

    // Subcategory 3: Atoms and Molecules
    const scienceQuiz3 = await Quiz.create({
      title: "Atoms and Molecules",
      subject: "Science",
      category: "Chemistry",
      chapter: "Atoms and Molecules",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz3._id, questionText: "Who proposed the atomic theory?", options: ["Newton", "Dalton", "Rutherford", "Bohr"], correctAnswer: 1, marks: 1, explanation: "John Dalton proposed the atomic theory in 1808." },
      { quiz: scienceQuiz3._id, questionText: "The chemical formula of water is:", options: ["H₂O", "HO₂", "H₃O", "OH"], correctAnswer: 0, marks: 1, explanation: "Water has 2 hydrogen atoms and 1 oxygen atom: H₂O." },
      { quiz: scienceQuiz3._id, questionText: "What is the atomic mass unit based on?", options: ["Hydrogen", "Oxygen", "Carbon-12", "Nitrogen"], correctAnswer: 2, marks: 1, explanation: "1 amu = 1/12 of the mass of a Carbon-12 atom." },
      { quiz: scienceQuiz3._id, questionText: "Avogadro's number is:", options: ["6.022 × 10²³", "6.022 × 10²²", "6.022 × 10²⁴", "3.14 × 10²³"], correctAnswer: 0, marks: 1, explanation: "Avogadro's number = 6.022 × 10²³ particles per mole." },
      { quiz: scienceQuiz3._id, questionText: "The molecular formula of carbon dioxide is:", options: ["CO", "CO₂", "C₂O", "C₂O₂"], correctAnswer: 1, marks: 1, explanation: "Carbon dioxide has 1 carbon and 2 oxygen atoms: CO₂." },
      { quiz: scienceQuiz3._id, questionText: "What is the valency of oxygen?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "Oxygen has valency 2 (it needs 2 electrons to complete its octet)." },
      { quiz: scienceQuiz3._id, questionText: "The law of conservation of mass states:", options: ["Mass can be created", "Mass can be destroyed", "Mass is neither created nor destroyed", "Mass always increases"], correctAnswer: 2, marks: 1, explanation: "In a chemical reaction, total mass of reactants = total mass of products." },
      { quiz: scienceQuiz3._id, questionText: "What is a molecule?", options: ["Single atom", "Group of two or more atoms bonded together", "An electron", "A proton"], correctAnswer: 1, marks: 1, explanation: "A molecule is a group of two or more atoms chemically bonded together." },
      { quiz: scienceQuiz3._id, questionText: "The chemical formula of common salt is:", options: ["NaCl", "KCl", "CaCl₂", "NaOH"], correctAnswer: 0, marks: 1, explanation: "Common salt is sodium chloride: NaCl." },
      { quiz: scienceQuiz3._id, questionText: "1 mole of any substance contains how many particles?", options: ["6.022 × 10²²", "6.022 × 10²³", "6.022 × 10²⁴", "3.011 × 10²³"], correctAnswer: 1, marks: 1, explanation: "1 mole = 6.022 × 10²³ particles (Avogadro's number)." },
    ]);

    console.log("✓ Class 9 - Science: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9Science;
