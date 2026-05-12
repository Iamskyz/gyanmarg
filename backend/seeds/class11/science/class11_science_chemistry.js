import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11Chemistry = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Structure of Atom
    const chemQuiz1 = await Quiz.create({
      title: "Structure of Atom",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "Atomic Structure",
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
      { quiz: chemQuiz1._id, questionText: "Who discovered the electron?", options: ["Rutherford", "J.J. Thomson", "Bohr", "Chadwick"], correctAnswer: 1, marks: 1, explanation: "J.J. Thomson discovered the electron in 1897 using cathode ray experiments." },
      { quiz: chemQuiz1._id, questionText: "The nucleus of an atom contains:", options: ["Electrons and protons", "Protons and neutrons", "Electrons and neutrons", "Only protons"], correctAnswer: 1, marks: 1, explanation: "The nucleus contains protons (positive) and neutrons (neutral)." },
      { quiz: chemQuiz1._id, questionText: "The atomic number of an element is equal to:", options: ["Number of neutrons", "Number of protons", "Mass number", "Number of electrons in ion"], correctAnswer: 1, marks: 1, explanation: "Atomic number (Z) = number of protons in the nucleus." },
      { quiz: chemQuiz1._id, questionText: "Isotopes have same:", options: ["Mass number", "Number of neutrons", "Atomic number", "Physical properties"], correctAnswer: 2, marks: 1, explanation: "Isotopes have same atomic number (protons) but different mass numbers (neutrons)." },
      { quiz: chemQuiz1._id, questionText: "The maximum number of electrons in the 3rd shell is:", options: ["2", "8", "18", "32"], correctAnswer: 2, marks: 1, explanation: "Maximum electrons in nth shell = 2n². For n=3: 2(9) = 18." },
      { quiz: chemQuiz1._id, questionText: "Heisenberg's Uncertainty Principle states:", options: ["Electrons move in fixed orbits", "Position and momentum cannot be simultaneously determined exactly", "Energy is quantized", "Light is a wave"], correctAnswer: 1, marks: 1, explanation: "We cannot simultaneously know exact position and momentum of an electron." },
      { quiz: chemQuiz1._id, questionText: "The shape of s-orbital is:", options: ["Dumbbell", "Spherical", "Clover leaf", "Linear"], correctAnswer: 1, marks: 1, explanation: "s-orbitals are spherical in shape." },
      { quiz: chemQuiz1._id, questionText: "Quantum numbers describe:", options: ["Nuclear composition", "Properties of orbitals and electrons", "Chemical reactions", "Molecular shape"], correctAnswer: 1, marks: 1, explanation: "Quantum numbers (n, l, m, s) describe the state of an electron in an atom." },
      { quiz: chemQuiz1._id, questionText: "Aufbau principle states:", options: ["No two electrons have same quantum numbers", "Electrons fill lowest energy orbitals first", "Electrons pair after all orbitals are half-filled", "Electrons spin in same direction"], correctAnswer: 1, marks: 1, explanation: "Aufbau: electrons fill orbitals in order of increasing energy." },
      { quiz: chemQuiz1._id, questionText: "The electronic configuration of Carbon (Z=6) is:", options: ["1s² 2s² 2p²", "1s² 2s⁴", "1s² 2p⁴", "2s² 2p⁴"], correctAnswer: 0, marks: 1, explanation: "Carbon: 1s² 2s² 2p² (6 electrons distributed by Aufbau principle)." },
    ]);

    // Subcategory 2: Chemical Bonding
    const chemQuiz2 = await Quiz.create({
      title: "Chemical Bonding and Molecular Structure",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "Chemical Bonding",
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
      { quiz: chemQuiz2._id, questionText: "An ionic bond is formed by:", options: ["Sharing of electrons", "Transfer of electrons", "Mutual attraction", "Nuclear fusion"], correctAnswer: 1, marks: 1, explanation: "Ionic bond forms when electrons are transferred from one atom to another." },
      { quiz: chemQuiz2._id, questionText: "A covalent bond is formed by:", options: ["Transfer of electrons", "Sharing of electrons", "Metallic bonding", "Electrostatic attraction"], correctAnswer: 1, marks: 1, explanation: "Covalent bond forms by mutual sharing of electrons between atoms." },
      { quiz: chemQuiz2._id, questionText: "The octet rule states that atoms tend to:", options: ["Lose all electrons", "Have 8 electrons in valence shell", "Have 2 electrons total", "Share all electrons"], correctAnswer: 1, marks: 1, explanation: "Atoms tend to achieve 8 electrons in their outermost shell for stability." },
      { quiz: chemQuiz2._id, questionText: "The shape of methane (CH₄) is:", options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"], correctAnswer: 2, marks: 1, explanation: "CH₄ has 4 bond pairs, no lone pairs → tetrahedral shape (109.5°)." },
      { quiz: chemQuiz2._id, questionText: "Which molecule has a linear shape?", options: ["H₂O", "CO₂", "NH₃", "CH₄"], correctAnswer: 1, marks: 1, explanation: "CO₂ is linear (O=C=O) with 180° bond angle." },
      { quiz: chemQuiz2._id, questionText: "Hydrogen bonding is strongest in:", options: ["HCl", "HF", "HBr", "HI"], correctAnswer: 1, marks: 1, explanation: "HF has strongest H-bonding due to high electronegativity of fluorine." },
      { quiz: chemQuiz2._id, questionText: "The bond order of O₂ molecule is:", options: ["1", "2", "3", "1.5"], correctAnswer: 1, marks: 1, explanation: "O₂ has a double bond, so bond order = 2." },
      { quiz: chemQuiz2._id, questionText: "VSEPR theory is used to predict:", options: ["Bond energy", "Molecular shape", "Reaction rate", "Atomic mass"], correctAnswer: 1, marks: 1, explanation: "VSEPR (Valence Shell Electron Pair Repulsion) predicts molecular geometry." },
      { quiz: chemQuiz2._id, questionText: "The shape of water molecule is:", options: ["Linear", "Bent/V-shaped", "Trigonal", "Tetrahedral"], correctAnswer: 1, marks: 1, explanation: "H₂O has 2 bond pairs + 2 lone pairs → bent shape (104.5°)." },
      { quiz: chemQuiz2._id, questionText: "Sigma (σ) bond is formed by:", options: ["Lateral overlap", "Head-on overlap", "No overlap", "π overlap"], correctAnswer: 1, marks: 1, explanation: "Sigma bond forms by head-on (axial) overlap of orbitals." },
    ]);

    // Subcategory 3: States of Matter
    const chemQuiz3 = await Quiz.create({
      title: "States of Matter - Gases",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "States of Matter",
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
      { quiz: chemQuiz3._id, questionText: "Boyle's Law states that at constant temperature:", options: ["P ∝ V", "P ∝ 1/V", "P ∝ T", "V ∝ T"], correctAnswer: 1, marks: 1, explanation: "Boyle's Law: P ∝ 1/V (at constant T). PV = constant." },
      { quiz: chemQuiz3._id, questionText: "Charles's Law states that at constant pressure:", options: ["V ∝ 1/T", "V ∝ T", "P ∝ T", "P ∝ 1/V"], correctAnswer: 1, marks: 1, explanation: "Charles's Law: V ∝ T (at constant P). V/T = constant." },
      { quiz: chemQuiz3._id, questionText: "The ideal gas equation is:", options: ["PV = nRT", "PV = mRT", "P = nRT/V²", "PV² = nRT"], correctAnswer: 0, marks: 1, explanation: "Ideal gas equation: PV = nRT where R is universal gas constant." },
      { quiz: chemQuiz3._id, questionText: "At STP, 1 mole of ideal gas occupies:", options: ["11.2 L", "22.4 L", "44.8 L", "1 L"], correctAnswer: 1, marks: 1, explanation: "At STP (0°C, 1 atm), 1 mole of ideal gas = 22.4 litres." },
      { quiz: chemQuiz3._id, questionText: "Dalton's Law of Partial Pressures states:", options: ["Total pressure = sum of partial pressures", "Total volume = sum of partial volumes", "P₁V₁ = P₂V₂", "PV = constant"], correctAnswer: 0, marks: 1, explanation: "P_total = P₁ + P₂ + P₃ + ... (sum of individual gas pressures)." },
      { quiz: chemQuiz3._id, questionText: "The value of R (gas constant) in SI units is:", options: ["0.0821 L⋅atm/mol⋅K", "8.314 J/mol⋅K", "1.987 cal/mol⋅K", "All are correct"], correctAnswer: 3, marks: 1, explanation: "R has different values in different units. All given options are correct." },
      { quiz: chemQuiz3._id, questionText: "Real gases deviate from ideal behavior at:", options: ["High T, low P", "Low T, high P", "All conditions", "STP only"], correctAnswer: 1, marks: 1, explanation: "Real gases deviate most at low temperature and high pressure." },
      { quiz: chemQuiz3._id, questionText: "Graham's Law relates to:", options: ["Gas pressure", "Rate of diffusion", "Gas volume", "Gas temperature"], correctAnswer: 1, marks: 1, explanation: "Graham's Law: Rate of diffusion ∝ 1/√(molar mass)." },
      { quiz: chemQuiz3._id, questionText: "The kinetic energy of gas molecules is proportional to:", options: ["Pressure", "Volume", "Absolute temperature", "Molar mass"], correctAnswer: 2, marks: 1, explanation: "KE = (3/2)kT. Kinetic energy is directly proportional to absolute temperature." },
      { quiz: chemQuiz3._id, questionText: "Van der Waals equation accounts for:", options: ["Ideal gas behavior", "Intermolecular forces and molecular volume", "Nuclear forces", "Gravitational forces"], correctAnswer: 1, marks: 1, explanation: "Van der Waals equation corrects for intermolecular attractions and finite molecular volume." },
    ]);

    console.log("✓ Class 11 Science - Chemistry: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11Chemistry;
