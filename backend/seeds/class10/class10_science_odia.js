
// Full Odia translated Class 10 Science file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10ScienceOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଏବଂ ସମୀକରଣ
    const scienceQuiz1 = await Quiz.create({
      title: "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଏବଂ ସମୀକରଣ",
      subject: "Science",
      category: "ରସାୟନ ବିଜ୍ଞାନ",
      chapter: "Chemical Reactions",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz1._id, questionText: "ଏକ balanced chemical equation ରେ କେଉଁଗୁଡ଼ିକ ସମାନ ଥାଏ?", options: ["ଦୁଇପାର୍ଶ୍ୱର molecule", "ଦୁଇପାର୍ଶ୍ୱରେ ପ୍ରତ୍ୟେକ ଉପାଦାନର atom", "ଦୁଇପାର୍ଶ୍ୱର compound", "ଦୁଇପାର୍ଶ୍ୱର mole"], correctAnswer: 1, marks: 1, explanation: "Balanced equation ରେ reactant ଏବଂ product ଦୁଇପାର୍ଶ୍ୱରେ atom ସମାନ ଥାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "CaCO₃ → CaO + CO₂ କେଉଁ ପ୍ରତିକ୍ରିୟାର ଉଦାହରଣ?", options: ["Combination", "Decomposition", "Displacement", "Double displacement"], correctAnswer: 1, marks: 1, explanation: "ଏକ compound ଭାଙ୍ଗି ଦୁଇଟି product ହେଉଥିବାରୁ decomposition reaction।" },
      { quiz: scienceQuiz1._id, questionText: "ଲୋହାର rusting କେମିତି ପରିବର୍ତ୍ତନ?", options: ["ଭୌତିକ", "ରାସାୟନିକ", "ଦୁଇଟି", "କୌଣସି ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "ଲୋହା oxygen ଏବଂ moisture ସହ ଯୋଗ ହୋଇ rust ତିଆରି କରେ।" },
      { quiz: scienceQuiz1._id, questionText: "Redox reaction ରେ କଣ ହୁଏ?", options: ["କେବଳ oxidation", "କେବଳ reduction", "Oxidation ଏବଂ reduction ଦୁହେଁ", "କୌଣସି ନୁହେଁ"], correctAnswer: 2, marks: 1, explanation: "Redox = Reduction + Oxidation ସମୟକାଳୀନ ଘଟେ।" },
      { quiz: scienceQuiz1._id, questionText: "Hydrogen oxygen ରେ ଜଳିଲେ କଣ ହୁଏ?", options: ["H₂O₂", "H₂O", "HO", "H₃O"], correctAnswer: 1, marks: 1, explanation: "2H₂ + O₂ → 2H₂O। ଜଳ ତିଆରି ହୁଏ।" },
      { quiz: scienceQuiz1._id, questionText: "Zn + CuSO₄ → ZnSO₄ + Cu କେଉଁ reaction?", options: ["Combination", "Decomposition", "Displacement", "Double displacement"], correctAnswer: 2, marks: 1, explanation: "Zinc copper କୁ ବଦଳାଇଦେଉଛି।" },
      { quiz: scienceQuiz1._id, questionText: "Dilute HCl ଏବଂ zinc ରେ କେଉଁ gas ବାହାରେ?", options: ["O₂", "H₂", "Cl₂", "N₂"], correctAnswer: 1, marks: 1, explanation: "Zn + 2HCl → ZnCl₂ + H₂↑। Hydrogen gas ମିଳେ।" },
      { quiz: scienceQuiz1._id, questionText: "Rancidity କୁ କିପରି ରୋକାଯାଏ?", options: ["ପାଣି ଯୋଗ", "Antioxidant ଯୋଗ", "Heating", "Acid ଯୋଗ"], correctAnswer: 1, marks: 1, explanation: "Antioxidants ତେଲର oxidation କୁ ରୋକେ।" },
      { quiz: scienceQuiz1._id, questionText: "NaOH + HCl → NaCl + H₂O କେଉଁ reaction?", options: ["Combination", "Decomposition", "Neutralization", "Displacement"], correctAnswer: 2, marks: 1, explanation: "Acid + Base → Salt + Water କୁ neutralization କୁହାଯାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "Photosynthesis କେଉଁ reaction ର ଉଦାହରଣ?", options: ["Exothermic", "Endothermic", "Displacement", "Decomposition"], correctAnswer: 1, marks: 1, explanation: "Photosynthesis ସୂର୍ଯ୍ୟ ଶକ୍ତି ଶୋଷଣ କରେ, ସେଥିପାଇଁ endothermic।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ଆଲୋକ - ପ୍ରତିଫଳନ ଏବଂ ପ୍ରତିସ୍ରବଣ
    const scienceQuiz2 = await Quiz.create({
      title: "ଆଲୋକ - ପ୍ରତିଫଳନ ଏବଂ ପ୍ରତିସ୍ରବଣ",
      subject: "Science",
      category: "ଭୌତିକ ବିଜ୍ଞାନ",
      chapter: "Light",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz2._id, questionText: "Angle of incidence = angle of reflection କୁ କଣ କୁହାଯାଏ?", options: ["Law of refraction", "ପ୍ରତିଫଳନର ପ୍ରଥମ ସୂତ୍ର", "Snell's law", "Newton's law"], correctAnswer: 1, marks: 1, explanation: "ଏହା ପ୍ରତିଫଳନର ପ୍ରଥମ ସୂତ୍ର।" },
      { quiz: scienceQuiz2._id, questionText: "Concave mirror କେଉଁଠି ବ୍ୟବହୃତ ହୁଏ?", options: ["Rear-view mirror", "Car headlight", "Periscope", "Kaleidoscope"], correctAnswer: 1, marks: 1, explanation: "Concave mirror ଆଲୋକକୁ converge କରେ।" },
      { quiz: scienceQuiz2._id, questionText: "ଶୂନ୍ୟାକାଶରେ ଆଲୋକର ବେଗ କେତେ?", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], correctAnswer: 1, marks: 1, explanation: "ଆଲୋକର ବେଗ ≈ 3 × 10⁸ m/s।" },
      { quiz: scienceQuiz2._id, questionText: "ଆଲୋକ air ରୁ glass କୁ ଯାଇଲେ କେମିତି ବକ୍ରିତ ହୁଏ?", options: ["Normal ରୁ ଦୂରେ", "Normal ଦିଗକୁ", "ବକ୍ରିତ ହୁଏନାହିଁ", "Surface ସହ ସମାନ୍ତର"], correctAnswer: 1, marks: 1, explanation: "Rarer ରୁ denser medium କୁ ଯିବାରୁ normal ଦିଗକୁ ବକ୍ରିତ ହୁଏ।" },
      { quiz: scienceQuiz2._id, questionText: "Lens ର power ର unit କଣ?", options: ["Metre", "Centimetre", "Dioptre", "Watt"], correctAnswer: 2, marks: 1, explanation: "Lens power ର unit ହେଉଛି dioptre (D)।" },
      { quiz: scienceQuiz2._id, questionText: "Convex lens କୁ ଆଉ କଣ କୁହାଯାଏ?", options: ["Diverging lens", "Converging lens", "Plane lens", "Concave lens"], correctAnswer: 1, marks: 1, explanation: "Convex lens ଆଲୋକକୁ converge କରେ।" },
      { quiz: scienceQuiz2._id, questionText: "Mirror formula କଣ?", options: ["1/v + 1/u = 1/f", "1/v - 1/u = 1/f", "v + u = f", "v - u = f"], correctAnswer: 0, marks: 1, explanation: "Mirror formula: 1/v + 1/u = 1/f।" },
      { quiz: scienceQuiz2._id, questionText: "Refractive index କାହାର ratio?", options: ["Vacuum ର speed / medium ର speed", "Medium ର speed / vacuum ର speed", "Wavelength ratio", "Frequency ratio"], correctAnswer: 0, marks: 1, explanation: "n = vacuum ରେ speed / medium ରେ speed।" },
      { quiz: scienceQuiz2._id, questionText: "Total internal reflection କେବେ ଘଟେ?", options: ["Rarer ରୁ denser", "Denser ରୁ rarer ଏବଂ critical angle ଠାରୁ ବଡ଼ କୋଣ", "ଯେକୌଣସି medium", "କେବଳ vacuum"], correctAnswer: 1, marks: 1, explanation: "Denser ରୁ rarer medium କୁ critical angle ଠାରୁ ବଡ଼ କୋଣରେ ଯିବାବେଳେ।" },
      { quiz: scienceQuiz2._id, questionText: "Plane mirror ରେ କେମିତି image ହୁଏ?", options: ["Real ଏବଂ inverted", "Virtual ଏବଂ erect", "Real ଏବଂ erect", "Virtual ଏବଂ inverted"], correctAnswer: 1, marks: 1, explanation: "Plane mirror virtual ଏବଂ erect image ତିଆରି କରେ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଜୀବନ ପ୍ରକ୍ରିୟା
    const scienceQuiz3 = await Quiz.create({
      title: "ଜୀବନ ପ୍ରକ୍ରିୟା",
      subject: "Science",
      category: "ଜୀବ ବିଜ୍ଞାନ",
      chapter: "Life Processes",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz3._id, questionText: "ଜୀବମାନେ ଖାଦ୍ୟରୁ ଶକ୍ତି ପାଇବା ପ୍ରକ୍ରିୟା କଣ?", options: ["Photosynthesis", "Respiration", "Excretion", "Reproduction"], correctAnswer: 1, marks: 1, explanation: "Respiration ଖାଦ୍ୟକୁ ଭାଙ୍ଗି ଶକ୍ତି ମୁକ୍ତ କରେ।" },
      { quiz: scienceQuiz3._id, questionText: "ମନୁଷ୍ୟରେ gas exchange କେଉଁଠି ହୁଏ?", options: ["Bronchi", "Trachea", "Alveoli", "Pharynx"], correctAnswer: 2, marks: 1, explanation: "Alveoli ରେ O₂ ଏବଂ CO₂ ବିନିମୟ ହୁଏ।" },
      { quiz: scienceQuiz3._id, questionText: "ହୃଦୟରୁ ଶରୀରକୁ ରକ୍ତ ବହନ କରୁଥିବା ନଳୀ କଣ?", options: ["Vein", "Artery", "Capillary", "Lymph vessel"], correctAnswer: 1, marks: 1, explanation: "Artery ହୃଦୟରୁ ରକ୍ତ ବହନ କରେ।" },
      { quiz: scienceQuiz3._id, questionText: "Bile କେଉଁ ଅଙ୍ଗ ତିଆରି କରେ?", options: ["Stomach", "Pancreas", "Liver", "Small intestine"], correctAnswer: 2, marks: 1, explanation: "Liver bile ତିଆରି କରେ।" },
      { quiz: scienceQuiz3._id, questionText: "Kidney ର functional unit କଣ?", options: ["Neuron", "Nephron", "Alveolus", "Villus"], correctAnswer: 1, marks: 1, explanation: "Nephron kidney ର functional unit।" },
      { quiz: scienceQuiz3._id, questionText: "Photosynthesis ଗଛର କେଉଁ ଅଂଶରେ ହୁଏ?", options: ["Root", "Stem", "Leaf (chloroplast)", "Flower"], correctAnswer: 2, marks: 1, explanation: "Leaf ର chloroplast ରେ photosynthesis ହୁଏ।" },
      { quiz: scienceQuiz3._id, questionText: "Double circulation ର ଅର୍ଥ କଣ?", options: ["ରକ୍ତ ଏକଥର heart ଦେଇ ଯାଏ", "ରକ୍ତ ଗୋଟିଏ cycle ରେ ଦୁଇଥର heart ଦେଇ ଯାଏ", "ଦୁଇଟି heart", "ଦୁଇ ଦିଗରେ ରକ୍ତପ୍ରବାହ"], correctAnswer: 1, marks: 1, explanation: "Pulmonary ଏବଂ systemic circulation ଦ୍ୱାରା ଦୁଇଥର heart ଦେଇ ଯାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "Pepsin enzyme କେଉଁଠି କାମ କରେ?", options: ["Mouth", "Stomach", "Small intestine", "Large intestine"], correctAnswer: 1, marks: 1, explanation: "Pepsin stomach ର acidic medium ରେ protein digest କରେ।" },
      { quiz: scienceQuiz3._id, questionText: "Stomata ର କାମ କଣ?", options: ["Water absorption", "Leaf ରେ gas exchange", "Food storage", "Reproduction"], correctAnswer: 1, marks: 1, explanation: "Stomata ଦ୍ୱାରା CO₂ ଏବଂ O₂ exchange ହୁଏ।" },
      { quiz: scienceQuiz3._id, questionText: "Yeast ର anaerobic respiration ରେ କଣ ତିଆରି ହୁଏ?", options: ["CO₂ ଏବଂ water", "Ethanol ଏବଂ CO₂", "Lactic acid", "Oxygen"], correctAnswer: 1, marks: 1, explanation: "Yeast fermentation ଦ୍ୱାରା ethanol ଏବଂ CO₂ ତିଆରି କରେ।" },
    ]);

    console.log("✓ Class 10 - Science: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10ScienceOdia;
