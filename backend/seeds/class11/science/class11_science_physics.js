import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11Physics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Units and Measurements
    const physicsQuiz1 = await Quiz.create({
      title: "Units and Measurements",
      subject: "Physics",
      category: "Mechanics",
      chapter: "Units and Measurements",
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
      { quiz: physicsQuiz1._id, questionText: "The SI unit of force is:", options: ["Dyne", "Newton", "Pound", "Kilogram"], correctAnswer: 1, marks: 1, explanation: "Newton (N) is the SI unit of force. 1 N = 1 kg⋅m/s²." },
      { quiz: physicsQuiz1._id, questionText: "Which of these is a fundamental quantity?", options: ["Velocity", "Force", "Length", "Pressure"], correctAnswer: 2, marks: 1, explanation: "Length is a fundamental quantity. Velocity, force, and pressure are derived." },
      { quiz: physicsQuiz1._id, questionText: "How many significant figures are in 0.00340?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "Leading zeros don't count. 3, 4, 0 (trailing) = 3 significant figures." },
      { quiz: physicsQuiz1._id, questionText: "Dimensional formula of work is:", options: ["[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]", "[ML²T⁻¹]"], correctAnswer: 1, marks: 1, explanation: "Work = Force × Distance = [MLT⁻²] × [L] = [ML²T⁻²]." },
      { quiz: physicsQuiz1._id, questionText: "1 light year is a unit of:", options: ["Time", "Distance", "Speed", "Intensity"], correctAnswer: 1, marks: 1, explanation: "Light year is the distance light travels in one year." },
      { quiz: physicsQuiz1._id, questionText: "The number of base SI units is:", options: ["5", "6", "7", "8"], correctAnswer: 2, marks: 1, explanation: "7 base SI units: metre, kilogram, second, ampere, kelvin, mole, candela." },
      { quiz: physicsQuiz1._id, questionText: "Dimensional formula of pressure is:", options: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[ML⁻¹T⁻¹]"], correctAnswer: 0, marks: 1, explanation: "Pressure = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]." },
      { quiz: physicsQuiz1._id, questionText: "Which instrument measures very small lengths?", options: ["Metre scale", "Vernier callipers", "Thermometer", "Ammeter"], correctAnswer: 1, marks: 1, explanation: "Vernier callipers can measure lengths up to 0.01 mm accuracy." },
      { quiz: physicsQuiz1._id, questionText: "The error in measurement is called:", options: ["Precision", "Accuracy", "Uncertainty", "Resolution"], correctAnswer: 2, marks: 1, explanation: "Uncertainty is the error or doubt in a measurement." },
      { quiz: physicsQuiz1._id, questionText: "Which is dimensionless?", options: ["Force", "Strain", "Pressure", "Velocity"], correctAnswer: 1, marks: 1, explanation: "Strain = ΔL/L = length/length = dimensionless (no units)." },
    ]);

    // Subcategory 2: Motion in a Straight Line
    const physicsQuiz2 = await Quiz.create({
      title: "Motion in a Straight Line",
      subject: "Physics",
      category: "Mechanics",
      chapter: "Kinematics",
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
      { quiz: physicsQuiz2._id, questionText: "A body at rest has:", options: ["No velocity, no acceleration", "Velocity but no acceleration", "Both velocity and acceleration", "Acceleration but no velocity"], correctAnswer: 0, marks: 1, explanation: "A body at rest has zero velocity and zero acceleration." },
      { quiz: physicsQuiz2._id, questionText: "The slope of displacement-time graph gives:", options: ["Acceleration", "Velocity", "Force", "Momentum"], correctAnswer: 1, marks: 1, explanation: "Slope of s-t graph = ds/dt = velocity." },
      { quiz: physicsQuiz2._id, questionText: "For uniformly accelerated motion, v² = u² + 2as. If u=0, a=10 m/s², s=5m, then v=?", options: ["5 m/s", "10 m/s", "50 m/s", "100 m/s"], correctAnswer: 1, marks: 1, explanation: "v² = 0 + 2(10)(5) = 100 → v = 10 m/s." },
      { quiz: physicsQuiz2._id, questionText: "Free fall acceleration (g) is approximately:", options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.2 m/s²"], correctAnswer: 1, marks: 1, explanation: "Acceleration due to gravity g ≈ 9.8 m/s² on Earth's surface." },
      { quiz: physicsQuiz2._id, questionText: "The area under velocity-time graph gives:", options: ["Velocity", "Acceleration", "Displacement", "Force"], correctAnswer: 2, marks: 1, explanation: "Area under v-t graph = ∫v dt = displacement." },
      { quiz: physicsQuiz2._id, questionText: "A ball thrown upward has at the highest point:", options: ["v=0, a=0", "v=0, a=g downward", "v=max, a=0", "v=max, a=g"], correctAnswer: 1, marks: 1, explanation: "At highest point velocity is zero but acceleration (g) still acts downward." },
      { quiz: physicsQuiz2._id, questionText: "Average velocity is defined as:", options: ["Total distance / time", "Total displacement / time", "Speed × time", "Acceleration × time"], correctAnswer: 1, marks: 1, explanation: "Average velocity = Total displacement / Total time taken." },
      { quiz: physicsQuiz2._id, questionText: "If a car decelerates uniformly from 20 m/s to 0 in 4s, deceleration is:", options: ["4 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"], correctAnswer: 1, marks: 1, explanation: "a = (v-u)/t = (0-20)/4 = -5 m/s². Deceleration = 5 m/s²." },
      { quiz: physicsQuiz2._id, questionText: "Instantaneous velocity is:", options: ["Average velocity", "Velocity at a particular instant", "Final velocity", "Initial velocity"], correctAnswer: 1, marks: 1, explanation: "Instantaneous velocity is the velocity at a specific moment (limit of Δs/Δt as Δt→0)." },
      { quiz: physicsQuiz2._id, questionText: "A body dropped from height h reaches ground in time t. From 2h, time is:", options: ["2t", "√2 t", "4t", "t/2"], correctAnswer: 1, marks: 1, explanation: "h = ½gt² → t = √(2h/g). For 2h: t' = √(4h/g) = √2 × √(2h/g) = √2 t." },
    ]);

    // Subcategory 3: Laws of Motion
    const physicsQuiz3 = await Quiz.create({
      title: "Laws of Motion",
      subject: "Physics",
      category: "Mechanics",
      chapter: "Newton's Laws",
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
      { quiz: physicsQuiz3._id, questionText: "Newton's first law is also called:", options: ["Law of acceleration", "Law of inertia", "Law of action-reaction", "Law of gravitation"], correctAnswer: 1, marks: 1, explanation: "First law states a body remains in its state unless acted upon by external force — law of inertia." },
      { quiz: physicsQuiz3._id, questionText: "F = ma is which law of Newton?", options: ["First", "Second", "Third", "None"], correctAnswer: 1, marks: 1, explanation: "Newton's second law: Force = mass × acceleration." },
      { quiz: physicsQuiz3._id, questionText: "Action and reaction forces act on:", options: ["Same body", "Different bodies", "Same point", "Same direction"], correctAnswer: 1, marks: 1, explanation: "Newton's third law: action and reaction act on different bodies." },
      { quiz: physicsQuiz3._id, questionText: "The unit of momentum is:", options: ["kg⋅m/s²", "kg⋅m/s", "kg⋅m²/s", "N⋅s²"], correctAnswer: 1, marks: 1, explanation: "Momentum = mass × velocity. Unit = kg⋅m/s." },
      { quiz: physicsQuiz3._id, questionText: "A 5 kg body is acted upon by a force of 20 N. Acceleration is:", options: ["2 m/s²", "4 m/s²", "10 m/s²", "100 m/s²"], correctAnswer: 1, marks: 1, explanation: "a = F/m = 20/5 = 4 m/s²." },
      { quiz: physicsQuiz3._id, questionText: "Friction force always acts:", options: ["In direction of motion", "Opposite to motion/tendency of motion", "Perpendicular to motion", "Upward"], correctAnswer: 1, marks: 1, explanation: "Friction opposes the relative motion or tendency of motion." },
      { quiz: physicsQuiz3._id, questionText: "Impulse equals:", options: ["Force × distance", "Force × time", "Mass × velocity", "Both B and C"], correctAnswer: 3, marks: 1, explanation: "Impulse = F×t = change in momentum (mΔv). So both B and C." },
      { quiz: physicsQuiz3._id, questionText: "In a rocket, propulsion is based on:", options: ["First law", "Second law", "Third law", "Law of gravitation"], correctAnswer: 2, marks: 1, explanation: "Rocket expels gas backward (action), rocket moves forward (reaction) — third law." },
      { quiz: physicsQuiz3._id, questionText: "The coefficient of friction is:", options: ["Always > 1", "Always < 1", "Dimensionless", "Both B and C"], correctAnswer: 3, marks: 1, explanation: "μ = f/N is dimensionless and usually (not always) less than 1." },
      { quiz: physicsQuiz3._id, questionText: "If net force on a body is zero, the body is in:", options: ["Acceleration", "Equilibrium", "Free fall", "Circular motion"], correctAnswer: 1, marks: 1, explanation: "Zero net force means no acceleration — body is in equilibrium (rest or uniform motion)." },
    ]);

    console.log("✓ Class 11 Science - Physics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11Physics;
