import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10Science = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Chemical Reactions and Equations
    const scienceQuiz1 = await Quiz.create({
      title: "Chemical Reactions and Equations",
      subject: "Science",
      category: "Chemistry",
      chapter: "Chemical Reactions",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz1._id, questionText: "A balanced chemical equation has equal number of:", options: ["Molecules on both sides", "Atoms of each element on both sides", "Compounds on both sides", "Moles on both sides"], correctAnswer: 1, marks: 1, explanation: "A balanced equation has equal atoms of each element on reactant and product sides." },
      { quiz: scienceQuiz1._id, questionText: "CaCO₃ → CaO + CO₂ is an example of:", options: ["Combination", "Decomposition", "Displacement", "Double displacement"], correctAnswer: 1, marks: 1, explanation: "One compound breaks into two or more — decomposition reaction." },
      { quiz: scienceQuiz1._id, questionText: "Rusting of iron is:", options: ["Physical change", "Chemical change", "Both", "Neither"], correctAnswer: 1, marks: 1, explanation: "Rusting is a chemical change where iron reacts with oxygen and moisture." },
      { quiz: scienceQuiz1._id, questionText: "In a redox reaction:", options: ["Only oxidation occurs", "Only reduction occurs", "Both oxidation and reduction occur", "Neither occurs"], correctAnswer: 2, marks: 1, explanation: "Redox = Reduction + Oxidation occurring simultaneously." },
      { quiz: scienceQuiz1._id, questionText: "What is the product when hydrogen burns in oxygen?", options: ["H₂O₂", "H₂O", "HO", "H₃O"], correctAnswer: 1, marks: 1, explanation: "2H₂ + O₂ → 2H₂O. Water is formed." },
      { quiz: scienceQuiz1._id, questionText: "Zn + CuSO₄ → ZnSO₄ + Cu is a:", options: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Double displacement"], correctAnswer: 2, marks: 1, explanation: "Zinc displaces copper — single displacement reaction." },
      { quiz: scienceQuiz1._id, questionText: "Which gas is evolved when dilute HCl reacts with zinc?", options: ["O₂", "H₂", "Cl₂", "N₂"], correctAnswer: 1, marks: 1, explanation: "Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is evolved." },
      { quiz: scienceQuiz1._id, questionText: "Rancidity can be prevented by:", options: ["Adding water", "Adding antioxidants", "Heating", "Adding acid"], correctAnswer: 1, marks: 1, explanation: "Antioxidants prevent oxidation of fats, thus preventing rancidity." },
      { quiz: scienceQuiz1._id, questionText: "NaOH + HCl → NaCl + H₂O is:", options: ["Combination", "Decomposition", "Neutralization", "Displacement"], correctAnswer: 2, marks: 1, explanation: "Acid + Base → Salt + Water is a neutralization reaction." },
      { quiz: scienceQuiz1._id, questionText: "Photosynthesis is an example of:", options: ["Exothermic reaction", "Endothermic reaction", "Displacement reaction", "Decomposition"], correctAnswer: 1, marks: 1, explanation: "Photosynthesis absorbs energy (sunlight), so it's endothermic." },
    ]);

    // Subcategory 2: Light - Reflection and Refraction
    const scienceQuiz2 = await Quiz.create({
      title: "Light - Reflection and Refraction",
      subject: "Science",
      category: "Physics",
      chapter: "Light",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz2._id, questionText: "The angle of incidence equals the angle of reflection. This is:", options: ["Law of refraction", "First law of reflection", "Snell's law", "Newton's law"], correctAnswer: 1, marks: 1, explanation: "This is the first law of reflection." },
      { quiz: scienceQuiz2._id, questionText: "A concave mirror is used in:", options: ["Rear-view mirrors", "Headlights of cars", "Periscopes", "Kaleidoscopes"], correctAnswer: 1, marks: 1, explanation: "Concave mirrors converge light and are used in headlights and torches." },
      { quiz: scienceQuiz2._id, questionText: "The speed of light in vacuum is:", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], correctAnswer: 1, marks: 1, explanation: "Speed of light in vacuum ≈ 3 × 10⁸ m/s." },
      { quiz: scienceQuiz2._id, questionText: "When light goes from air to glass, it bends:", options: ["Away from normal", "Towards normal", "Does not bend", "Parallel to surface"], correctAnswer: 1, marks: 1, explanation: "Light bends towards normal when going from rarer to denser medium." },
      { quiz: scienceQuiz2._id, questionText: "The power of a lens is measured in:", options: ["Metres", "Centimetres", "Dioptres", "Watts"], correctAnswer: 2, marks: 1, explanation: "Power of lens (P) = 1/f (in metres). Unit is dioptre (D)." },
      { quiz: scienceQuiz2._id, questionText: "A convex lens is also called:", options: ["Diverging lens", "Converging lens", "Plane lens", "Concave lens"], correctAnswer: 1, marks: 1, explanation: "Convex lens converges light rays, so it's called converging lens." },
      { quiz: scienceQuiz2._id, questionText: "Mirror formula is:", options: ["1/v + 1/u = 1/f", "1/v - 1/u = 1/f", "v + u = f", "v - u = f"], correctAnswer: 0, marks: 1, explanation: "Mirror formula: 1/v + 1/u = 1/f." },
      { quiz: scienceQuiz2._id, questionText: "Refractive index is the ratio of:", options: ["Speed in vacuum / Speed in medium", "Speed in medium / Speed in vacuum", "Wavelength ratio", "Frequency ratio"], correctAnswer: 0, marks: 1, explanation: "n = Speed of light in vacuum / Speed of light in medium." },
      { quiz: scienceQuiz2._id, questionText: "Total internal reflection occurs when light goes from:", options: ["Rarer to denser", "Denser to rarer at angle > critical angle", "Any medium", "Vacuum only"], correctAnswer: 1, marks: 1, explanation: "Total internal reflection occurs when light goes from denser to rarer medium at angle greater than critical angle." },
      { quiz: scienceQuiz2._id, questionText: "The image formed by a plane mirror is:", options: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"], correctAnswer: 1, marks: 1, explanation: "Plane mirror forms virtual, erect, same-size, laterally inverted image." },
    ]);

    // Subcategory 3: Life Processes
    const scienceQuiz3 = await Quiz.create({
      title: "Life Processes",
      subject: "Science",
      category: "Biology",
      chapter: "Life Processes",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz3._id, questionText: "The process by which organisms obtain energy from food is:", options: ["Photosynthesis", "Respiration", "Excretion", "Reproduction"], correctAnswer: 1, marks: 1, explanation: "Respiration breaks down food to release energy (ATP)." },
      { quiz: scienceQuiz3._id, questionText: "In humans, exchange of gases takes place in:", options: ["Bronchi", "Trachea", "Alveoli", "Pharynx"], correctAnswer: 2, marks: 1, explanation: "Alveoli in lungs have thin walls for gas exchange (O₂ in, CO₂ out)." },
      { quiz: scienceQuiz3._id, questionText: "The blood vessel that carries blood from heart to body is:", options: ["Vein", "Artery", "Capillary", "Lymph vessel"], correctAnswer: 1, marks: 1, explanation: "Arteries carry oxygenated blood from heart to body (except pulmonary artery)." },
      { quiz: scienceQuiz3._id, questionText: "Which organ produces bile?", options: ["Stomach", "Pancreas", "Liver", "Small intestine"], correctAnswer: 2, marks: 1, explanation: "Liver produces bile which helps in digestion of fats." },
      { quiz: scienceQuiz3._id, questionText: "The functional unit of kidney is:", options: ["Neuron", "Nephron", "Alveolus", "Villus"], correctAnswer: 1, marks: 1, explanation: "Nephron is the functional unit of kidney that filters blood." },
      { quiz: scienceQuiz3._id, questionText: "Photosynthesis occurs in which part of the plant?", options: ["Root", "Stem", "Leaf (chloroplast)", "Flower"], correctAnswer: 2, marks: 1, explanation: "Photosynthesis occurs in chloroplasts present in leaves." },
      { quiz: scienceQuiz3._id, questionText: "Double circulation means:", options: ["Blood passes through heart once", "Blood passes through heart twice in one cycle", "Two hearts", "Blood flows in two directions"], correctAnswer: 1, marks: 1, explanation: "In humans, blood passes through heart twice — pulmonary and systemic circulation." },
      { quiz: scienceQuiz3._id, questionText: "The enzyme pepsin works in:", options: ["Mouth", "Stomach", "Small intestine", "Large intestine"], correctAnswer: 1, marks: 1, explanation: "Pepsin works in acidic medium of stomach to digest proteins." },
      { quiz: scienceQuiz3._id, questionText: "Stomata are responsible for:", options: ["Absorption of water", "Gas exchange in leaves", "Food storage", "Reproduction"], correctAnswer: 1, marks: 1, explanation: "Stomata allow exchange of CO₂ and O₂ and also transpiration." },
      { quiz: scienceQuiz3._id, questionText: "Anaerobic respiration in yeast produces:", options: ["CO₂ and water", "Ethanol and CO₂", "Lactic acid", "Oxygen"], correctAnswer: 1, marks: 1, explanation: "Yeast performs anaerobic respiration producing ethanol and CO₂ (fermentation)." },
    ]);

    console.log("✓ Class 10 - Science: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10Science;
