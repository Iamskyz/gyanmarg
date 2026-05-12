import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11Biology = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Cell Biology
    const bioQuiz1 = await Quiz.create({
      title: "Cell - The Unit of Life",
      subject: "Biology",
      category: "Cell Biology",
      chapter: "Cell Structure",
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
      { quiz: bioQuiz1._id, questionText: "Who proposed the Cell Theory?", options: ["Robert Hooke", "Schleiden and Schwann", "Darwin", "Mendel"], correctAnswer: 1, marks: 1, explanation: "Schleiden (botanist) and Schwann (zoologist) proposed the Cell Theory in 1838-39." },
      { quiz: bioQuiz1._id, questionText: "Which organelle is called the 'kitchen of the cell'?", options: ["Mitochondria", "Chloroplast", "Ribosome", "Golgi body"], correctAnswer: 1, marks: 1, explanation: "Chloroplast is called the kitchen because it makes food through photosynthesis." },
      { quiz: bioQuiz1._id, questionText: "Prokaryotic cells lack:", options: ["Cell membrane", "Ribosomes", "Membrane-bound nucleus", "DNA"], correctAnswer: 2, marks: 1, explanation: "Prokaryotes lack a membrane-bound nucleus; their DNA is in the nucleoid region." },
      { quiz: bioQuiz1._id, questionText: "The fluid mosaic model describes:", options: ["Cell wall", "Cell membrane structure", "Nucleus", "Cytoplasm"], correctAnswer: 1, marks: 1, explanation: "Singer and Nicolson's fluid mosaic model describes the cell membrane as a fluid lipid bilayer with proteins." },
      { quiz: bioQuiz1._id, questionText: "Ribosomes are the site of:", options: ["Respiration", "Protein synthesis", "Photosynthesis", "Lipid synthesis"], correctAnswer: 1, marks: 1, explanation: "Ribosomes translate mRNA into proteins (protein synthesis)." },
      { quiz: bioQuiz1._id, questionText: "Which cell organelle contains its own DNA?", options: ["Ribosome", "Lysosome", "Mitochondria", "Golgi body"], correctAnswer: 2, marks: 1, explanation: "Mitochondria (and chloroplasts) have their own circular DNA." },
      { quiz: bioQuiz1._id, questionText: "The Golgi apparatus is involved in:", options: ["Protein synthesis", "Packaging and secretion", "Respiration", "Photosynthesis"], correctAnswer: 1, marks: 1, explanation: "Golgi apparatus modifies, packages, and secretes proteins and lipids." },
      { quiz: bioQuiz1._id, questionText: "Lysosomes contain:", options: ["DNA", "Digestive enzymes", "Chlorophyll", "Starch"], correctAnswer: 1, marks: 1, explanation: "Lysosomes contain hydrolytic enzymes for intracellular digestion." },
      { quiz: bioQuiz1._id, questionText: "The cell cycle includes:", options: ["Only mitosis", "Interphase and M phase", "Only meiosis", "Only G1 phase"], correctAnswer: 1, marks: 1, explanation: "Cell cycle = Interphase (G1, S, G2) + M phase (mitosis + cytokinesis)." },
      { quiz: bioQuiz1._id, questionText: "Mitosis results in:", options: ["4 haploid cells", "2 identical diploid cells", "1 cell", "4 diploid cells"], correctAnswer: 1, marks: 1, explanation: "Mitosis produces 2 genetically identical diploid daughter cells." },
    ]);

    // Subcategory 2: Plant Kingdom
    const bioQuiz2 = await Quiz.create({
      title: "Plant Kingdom - Classification",
      subject: "Biology",
      category: "Botany",
      chapter: "Plant Kingdom",
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
      { quiz: bioQuiz2._id, questionText: "Algae belong to which group?", options: ["Bryophyta", "Thallophyta", "Pteridophyta", "Gymnosperm"], correctAnswer: 1, marks: 1, explanation: "Algae are thallophytes — simple plants without true roots, stems, or leaves." },
      { quiz: bioQuiz2._id, questionText: "Mosses belong to:", options: ["Thallophyta", "Bryophyta", "Pteridophyta", "Angiosperm"], correctAnswer: 1, marks: 1, explanation: "Mosses are bryophytes — non-vascular land plants." },
      { quiz: bioQuiz2._id, questionText: "Ferns are classified under:", options: ["Bryophyta", "Thallophyta", "Pteridophyta", "Gymnosperm"], correctAnswer: 2, marks: 1, explanation: "Ferns are pteridophytes — vascular plants that reproduce by spores." },
      { quiz: bioQuiz2._id, questionText: "Gymnosperms are characterized by:", options: ["Covered seeds", "Naked seeds", "No seeds", "Spores only"], correctAnswer: 1, marks: 1, explanation: "Gymnosperms have naked seeds (not enclosed in fruit). Example: Pine, Cycas." },
      { quiz: bioQuiz2._id, questionText: "Angiosperms are plants with:", options: ["Naked seeds", "Seeds enclosed in fruit", "No seeds", "Only spores"], correctAnswer: 1, marks: 1, explanation: "Angiosperms have seeds enclosed within fruits (flowering plants)." },
      { quiz: bioQuiz2._id, questionText: "Which is the reproductive unit of angiosperms?", options: ["Cone", "Flower", "Spore", "Thallus"], correctAnswer: 1, marks: 1, explanation: "Flower is the reproductive organ of angiosperms." },
      { quiz: bioQuiz2._id, questionText: "Monocots have:", options: ["Two cotyledons", "One cotyledon", "No cotyledon", "Three cotyledons"], correctAnswer: 1, marks: 1, explanation: "Monocotyledons have one cotyledon (seed leaf). Example: Rice, Wheat." },
      { quiz: bioQuiz2._id, questionText: "Alternation of generations means:", options: ["Only sexual reproduction", "Alternating haploid and diploid phases", "Only asexual reproduction", "No reproduction"], correctAnswer: 1, marks: 1, explanation: "Life cycle alternates between haploid gametophyte and diploid sporophyte." },
      { quiz: bioQuiz2._id, questionText: "Xylem is responsible for:", options: ["Food transport", "Water and mineral transport", "Gas exchange", "Reproduction"], correctAnswer: 1, marks: 1, explanation: "Xylem transports water and minerals from roots to leaves." },
      { quiz: bioQuiz2._id, questionText: "Phloem transports:", options: ["Water", "Minerals", "Food (sucrose)", "Gases"], correctAnswer: 2, marks: 1, explanation: "Phloem transports food (mainly sucrose) from leaves to other parts." },
    ]);

    // Subcategory 3: Human Physiology - Digestion
    const bioQuiz3 = await Quiz.create({
      title: "Human Physiology - Digestion and Absorption",
      subject: "Biology",
      category: "Human Physiology",
      chapter: "Digestion",
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
      { quiz: bioQuiz3._id, questionText: "Salivary amylase acts on:", options: ["Proteins", "Fats", "Starch", "Cellulose"], correctAnswer: 2, marks: 1, explanation: "Salivary amylase breaks down starch into maltose in the mouth." },
      { quiz: bioQuiz3._id, questionText: "HCl in the stomach:", options: ["Digests fats", "Activates pepsinogen to pepsin", "Absorbs nutrients", "Produces bile"], correctAnswer: 1, marks: 1, explanation: "HCl activates pepsinogen into pepsin and provides acidic pH for protein digestion." },
      { quiz: bioQuiz3._id, questionText: "Bile is produced by:", options: ["Stomach", "Pancreas", "Liver", "Small intestine"], correctAnswer: 2, marks: 1, explanation: "Bile is produced by the liver and stored in the gallbladder." },
      { quiz: bioQuiz3._id, questionText: "The main function of bile is:", options: ["Protein digestion", "Emulsification of fats", "Starch digestion", "Absorption"], correctAnswer: 1, marks: 1, explanation: "Bile salts emulsify fats (break large fat globules into smaller droplets)." },
      { quiz: bioQuiz3._id, questionText: "Maximum absorption of nutrients occurs in:", options: ["Stomach", "Small intestine", "Large intestine", "Mouth"], correctAnswer: 1, marks: 1, explanation: "Small intestine (especially ileum) is the main site of nutrient absorption." },
      { quiz: bioQuiz3._id, questionText: "Villi are found in:", options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], correctAnswer: 1, marks: 1, explanation: "Villi in small intestine increase surface area for absorption." },
      { quiz: bioQuiz3._id, questionText: "Trypsin digests:", options: ["Starch", "Fats", "Proteins", "Nucleic acids"], correctAnswer: 2, marks: 1, explanation: "Trypsin (from pancreas) digests proteins in the small intestine." },
      { quiz: bioQuiz3._id, questionText: "The large intestine mainly absorbs:", options: ["Proteins", "Fats", "Water and electrolytes", "Vitamins only"], correctAnswer: 2, marks: 1, explanation: "Large intestine absorbs water, electrolytes, and some vitamins." },
      { quiz: bioQuiz3._id, questionText: "Peristalsis is:", options: ["Enzyme secretion", "Wave-like muscle contractions moving food", "Absorption", "Secretion of bile"], correctAnswer: 1, marks: 1, explanation: "Peristalsis is rhythmic muscle contractions that push food through the digestive tract." },
      { quiz: bioQuiz3._id, questionText: "The pH of stomach is approximately:", options: ["1-2 (acidic)", "7 (neutral)", "8-9 (basic)", "5-6 (slightly acidic)"], correctAnswer: 0, marks: 1, explanation: "Stomach pH is 1-2 due to HCl, which is highly acidic." },
    ]);

    console.log("✓ Class 11 Science - Biology: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11Biology;
