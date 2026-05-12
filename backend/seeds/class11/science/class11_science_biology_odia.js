import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11BiologyOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Cell Biology
    const bioQuiz1 = await Quiz.create({
      title: "କୋଷ - ଜୀବନର ଏକକ",
      subject: "Biology",
      category: "Cell Biology",
      chapter: "Cell Structure",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: bioQuiz1._id, questionText: "Cell Theory କିଏ ପ୍ରସ୍ତାବ କଲେ?", options: ["Robert Hooke", "Schleiden and Schwann", "Darwin", "Mendel"], correctAnswer: 1, marks: 1, explanation: "Schleiden ଏବଂ Schwann 1838-39 ମସିହାରେ Cell Theory ପ୍ରସ୍ତାବ କରିଥିଲେ।" },
      { quiz: bioQuiz1._id, questionText: "କେଉଁ organelle କୁ 'କୋଷର ରାନ୍ଧଘର' କୁହାଯାଏ?", options: ["Mitochondria", "Chloroplast", "Ribosome", "Golgi body"], correctAnswer: 1, marks: 1, explanation: "Chloroplast ଫଟୋସିନ୍ଥେସିସ ଦ୍ୱାରା ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରେ।" },
      { quiz: bioQuiz1._id, questionText: "Prokaryotic କୋଷରେ କ’ଣ ନଥାଏ?", options: ["Cell membrane", "Ribosomes", "Membrane-bound nucleus", "DNA"], correctAnswer: 2, marks: 1, explanation: "Prokaryotes ରେ membrane-bound nucleus ନଥାଏ।" },
      { quiz: bioQuiz1._id, questionText: "Fluid mosaic model କ’ଣ ବର୍ଣ୍ଣନା କରେ?", options: ["Cell wall", "Cell membrane structure", "Nucleus", "Cytoplasm"], correctAnswer: 1, marks: 1, explanation: "ଏହା cell membrane ର ଗଠନ ବର୍ଣ୍ଣନା କରେ।" },
      { quiz: bioQuiz1._id, questionText: "Ribosomes କ’ଣର କେନ୍ଦ୍ର?", options: ["Respiration", "Protein synthesis", "Photosynthesis", "Lipid synthesis"], correctAnswer: 1, marks: 1, explanation: "Ribosomes ରେ protein synthesis ହୁଏ।" },
      { quiz: bioQuiz1._id, questionText: "କେଉଁ organelle ନିଜର DNA ଧାରଣ କରେ?", options: ["Ribosome", "Lysosome", "Mitochondria", "Golgi body"], correctAnswer: 2, marks: 1, explanation: "Mitochondria ରେ ନିଜସ୍ୱ DNA ଥାଏ।" },
      { quiz: bioQuiz1._id, questionText: "Golgi apparatus କ’ଣରେ ସହଯୋଗ କରେ?", options: ["Protein synthesis", "Packaging and secretion", "Respiration", "Photosynthesis"], correctAnswer: 1, marks: 1, explanation: "Golgi apparatus protein ଏବଂ lipid କୁ package କରି ସ୍ରାବ କରେ।" },
      { quiz: bioQuiz1._id, questionText: "Lysosomes ରେ କ’ଣ ଥାଏ?", options: ["DNA", "Digestive enzymes", "Chlorophyll", "Starch"], correctAnswer: 1, marks: 1, explanation: "Lysosomes ରେ digestive enzymes ଥାଏ।" },
      { quiz: bioQuiz1._id, questionText: "Cell cycle ରେ କ’ଣ ଅନ୍ତର୍ଭୁକ୍ତ?", options: ["Only mitosis", "Interphase and M phase", "Only meiosis", "Only G1 phase"], correctAnswer: 1, marks: 1, explanation: "Cell cycle = Interphase + M phase।" },
      { quiz: bioQuiz1._id, questionText: "Mitosis ର ଫଳ କ’ଣ?", options: ["4 haploid cells", "2 identical diploid cells", "1 cell", "4 diploid cells"], correctAnswer: 1, marks: 1, explanation: "Mitosis ରେ 2ଟି ସମାନ diploid daughter cells ଉତ୍ପନ୍ନ ହୁଏ।" },
    ]);

    // Subcategory 2: Plant Kingdom
    const bioQuiz2 = await Quiz.create({
      title: "ଉଦ୍ଭିଦ ଜଗତ - ବର୍ଗୀକରଣ",
      subject: "Biology",
      category: "Botany",
      chapter: "Plant Kingdom",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: bioQuiz2._id, questionText: "Algae କେଉଁ group ରେ ପଡ଼େ?", options: ["Bryophyta", "Thallophyta", "Pteridophyta", "Gymnosperm"], correctAnswer: 1, marks: 1, explanation: "Algae ହେଉଛି thallophytes।" },
      { quiz: bioQuiz2._id, questionText: "Mosses କେଉଁ group ରେ ପଡ଼େ?", options: ["Thallophyta", "Bryophyta", "Pteridophyta", "Angiosperm"], correctAnswer: 1, marks: 1, explanation: "Mosses ହେଉଛି bryophytes।" },
      { quiz: bioQuiz2._id, questionText: "Ferns କେଉଁ group ରେ ବର୍ଗୀକୃତ?", options: ["Bryophyta", "Thallophyta", "Pteridophyta", "Gymnosperm"], correctAnswer: 2, marks: 1, explanation: "Ferns ହେଉଛି pteridophytes।" },
      { quiz: bioQuiz2._id, questionText: "Gymnosperms ର ବିଶେଷତା କ’ଣ?", options: ["Covered seeds", "Naked seeds", "No seeds", "Spores only"], correctAnswer: 1, marks: 1, explanation: "Gymnosperms ରେ naked seeds ଥାଏ।" },
      { quiz: bioQuiz2._id, questionText: "Angiosperms ରେ କ’ଣ ଥାଏ?", options: ["Naked seeds", "Seeds enclosed in fruit", "No seeds", "Only spores"], correctAnswer: 1, marks: 1, explanation: "Angiosperms ରେ ଫଳ ମଧ୍ୟରେ ଗୁଟି ଥାଏ।" },
      { quiz: bioQuiz2._id, questionText: "Angiosperms ର reproductive unit କ’ଣ?", options: ["Cone", "Flower", "Spore", "Thallus"], correctAnswer: 1, marks: 1, explanation: "Flower ହେଉଛି angiosperms ର reproductive organ।" },
      { quiz: bioQuiz2._id, questionText: "Monocots ରେ କେତେ cotyledon ଥାଏ?", options: ["Two cotyledons", "One cotyledon", "No cotyledon", "Three cotyledons"], correctAnswer: 1, marks: 1, explanation: "Monocots ରେ ଗୋଟିଏ cotyledon ଥାଏ।" },
      { quiz: bioQuiz2._id, questionText: "Alternation of generations ର ଅର୍ଥ କ’ଣ?", options: ["Only sexual reproduction", "Alternating haploid and diploid phases", "Only asexual reproduction", "No reproduction"], correctAnswer: 1, marks: 1, explanation: "ଜୀବନଚକ୍ରରେ haploid ଏବଂ diploid phase ବଦଳାଯାଏ।" },
      { quiz: bioQuiz2._id, questionText: "Xylem କ’ଣ ପରିବହନ କରେ?", options: ["Food transport", "Water and mineral transport", "Gas exchange", "Reproduction"], correctAnswer: 1, marks: 1, explanation: "Xylem ମୂଳରୁ ପାଣି ଏବଂ ଖଣିଜ ପରିବହନ କରେ।" },
      { quiz: bioQuiz2._id, questionText: "Phloem କ’ଣ ପରିବହନ କରେ?", options: ["Water", "Minerals", "Food (sucrose)", "Gases"], correctAnswer: 2, marks: 1, explanation: "Phloem ଖାଦ୍ୟ ପରିବହନ କରେ।" },
    ]);

    // Subcategory 3: Human Physiology - Digestion
    const bioQuiz3 = await Quiz.create({
      title: "ମାନବ ଶାରୀରବିଜ୍ଞାନ - ପାଚନ ଏବଂ ଶୋଷଣ",
      subject: "Biology",
      category: "Human Physiology",
      chapter: "Digestion",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: bioQuiz3._id, questionText: "Salivary amylase କ’ଣ ଉପରେ କାର୍ଯ୍ୟ କରେ?", options: ["Proteins", "Fats", "Starch", "Cellulose"], correctAnswer: 2, marks: 1, explanation: "Salivary amylase starch କୁ maltose ରେ ଭାଙ୍ଗେ।" },
      { quiz: bioQuiz3._id, questionText: "ପେଟର HCl କ’ଣ କରେ?", options: ["Digests fats", "Activates pepsinogen to pepsin", "Absorbs nutrients", "Produces bile"], correctAnswer: 1, marks: 1, explanation: "HCl pepsinogen କୁ pepsin ରେ ପରିଣତ କରେ।" },
      { quiz: bioQuiz3._id, questionText: "Bile କେଉଁଠି ଉତ୍ପାଦିତ ହୁଏ?", options: ["Stomach", "Pancreas", "Liver", "Small intestine"], correctAnswer: 2, marks: 1, explanation: "Bile liver ଦ୍ୱାରା ଉତ୍ପାଦିତ ହୁଏ।" },
      { quiz: bioQuiz3._id, questionText: "Bile ର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ’ଣ?", options: ["Protein digestion", "Emulsification of fats", "Starch digestion", "Absorption"], correctAnswer: 1, marks: 1, explanation: "Bile fats କୁ ଛୋଟ ଛୋଟ ବିନ୍ଦୁରେ ଭାଙ୍ଗେ।" },
      { quiz: bioQuiz3._id, questionText: "ଅଧିକାଂଶ ପୋଷକ ଶୋଷଣ କେଉଁଠି ହୁଏ?", options: ["Stomach", "Small intestine", "Large intestine", "Mouth"], correctAnswer: 1, marks: 1, explanation: "Small intestine ରେ ଅଧିକାଂଶ ପୋଷକ ଶୋଷଣ ହୁଏ।" },
      { quiz: bioQuiz3._id, questionText: "Villi କେଉଁଠି ମିଳେ?", options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], correctAnswer: 1, marks: 1, explanation: "Villi small intestine ରେ ଥାଏ।" },
      { quiz: bioQuiz3._id, questionText: "Trypsin କ’ଣ ପାଚନ କରେ?", options: ["Starch", "Fats", "Proteins", "Nucleic acids"], correctAnswer: 2, marks: 1, explanation: "Trypsin proteins ପାଚନ କରେ।" },
      { quiz: bioQuiz3._id, questionText: "Large intestine ମୁଖ୍ୟତଃ କ’ଣ ଶୋଷଣ କରେ?", options: ["Proteins", "Fats", "Water and electrolytes", "Vitamins only"], correctAnswer: 2, marks: 1, explanation: "Large intestine ପାଣି ଏବଂ electrolytes ଶୋଷଣ କରେ।" },
      { quiz: bioQuiz3._id, questionText: "Peristalsis କ’ଣ?", options: ["Enzyme secretion", "Wave-like muscle contractions moving food", "Absorption", "Secretion of bile"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଖାଦ୍ୟକୁ ଆଗକୁ ବଢ଼ାଇବା ପାଇଁ muscle contraction।" },
      { quiz: bioQuiz3._id, questionText: "ପେଟର pH ପ୍ରାୟ କେତେ?", options: ["1-2 (acidic)", "7 (neutral)", "8-9 (basic)", "5-6 (slightly acidic)"], correctAnswer: 0, marks: 1, explanation: "HCl ଥିବାରୁ ପେଟର pH 1-2 ହୁଏ।" },
    ]);

    console.log("✓ Class 11 Science - Biology: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11BiologyOdia;
