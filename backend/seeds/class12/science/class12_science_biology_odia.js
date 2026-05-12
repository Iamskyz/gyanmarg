import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceBiologyOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ବଂଶାନୁକ୍ରମ ଏବଂ ବିକାଶ",
      subject: "Biology",
      category: "Genetics",
      chapter: "ବଂଶାନୁକ୍ରମର ସିଦ୍ଧାନ୍ତ",
      grade: 12,
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
      { quiz: quiz1._id, questionText: "Mendel ଙ୍କ independent assortment ନିୟମ କେଉଁ gene ଉପରେ ଲାଗୁହୁଏ?", options: ["ଏକେ chromosome", "ଭିନ୍ନ chromosome", "କେବଳ sex chromosome", "Mitochondrial DNA"], correctAnswer: 1, marks: 1, explanation: "Independent assortment ଭିନ୍ନ chromosome ର gene ଉପରେ ଲାଗୁହୁଏ।" },
      { quiz: quiz1._id, questionText: "Dihybrid cross ର 9:3:3:1 ratio କଣ ସୂଚାଏ?", options: ["Linkage", "Independent assortment", "Epistasis", "Codominance"], correctAnswer: 1, marks: 1, explanation: "9:3:3:1 ratio independent assortment କୁ ସମର୍ଥନ କରେ।" },
      { quiz: quiz1._id, questionText: "Codominance କେଉଁଥିରେ ଦେଖାଯାଏ?", options: ["Pea plant height", "AB blood group", "Flower color in pea", "Seed shape"], correctAnswer: 1, marks: 1, explanation: "AB blood group ରେ A ଏବଂ B ଉଭୟ allele ପ୍ରକାଶ ପାଏ।" },
      { quiz: quiz1._id, questionText: "Sex-linked inheritance କିଏ ଆବିଷ୍କାର କରିଥିଲେ?", options: ["Mendel", "T.H. Morgan", "Watson", "Darwin"], correctAnswer: 1, marks: 1, explanation: "T.H. Morgan Drosophila ଉପରେ ପରୀକ୍ଷା କରି sex-linked inheritance ଆବିଷ୍କାର କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "DNA replication କେମିତି ପ୍ରକାରର?", options: ["Conservative", "Semi-conservative", "Dispersive", "Random"], correctAnswer: 1, marks: 1, explanation: "Meselson-Stahl experiment ଦ୍ୱାରା semi-conservative replication ପ୍ରମାଣିତ।" },
      { quiz: quiz1._id, questionText: "Molecular biology ର central dogma କଣ?", options: ["DNA → RNA → Protein", "RNA → DNA → Protein", "Protein → RNA → DNA", "DNA → Protein → RNA"], correctAnswer: 0, marks: 1, explanation: "DNA ରୁ RNA ଏବଂ RNA ରୁ protein ତିଆରି ହୁଏ।" },
      { quiz: quiz1._id, questionText: "ଏକ codon ରେ କେତେ nucleotide ଥାଏ?", options: ["2", "3", "4", "1"], correctAnswer: 1, marks: 1, explanation: "Codon ହେଉଛି 3 nucleotide ର ଏକ triplet।" },
      { quiz: quiz1._id, questionText: "Hardy-Weinberg equilibrium କାହା ଦ୍ୱାରା ବିଘ୍ନିତ ହୁଏ?", options: ["Large population", "Random mating", "Gene flow ଏବଂ natural selection", "No mutation"], correctAnswer: 2, marks: 1, explanation: "Gene flow ଏବଂ natural selection equilibrium କୁ ବିଘ୍ନିତ କରେ।" },
      { quiz: quiz1._id, questionText: "Restriction enzyme କେଉଁ କାମରେ ବ୍ୟବହୃତ?", options: ["Protein synthesis", "DNA କାଟିବା", "Respiration", "Photosynthesis"], correctAnswer: 1, marks: 1, explanation: "Restriction enzyme ନିର୍ଦ୍ଦିଷ୍ଟ ସ୍ଥାନରେ DNA କାଟେ।" },
      { quiz: quiz1._id, questionText: "PCR ର ବ୍ୟବହାର କଣ?", options: ["Protein translation", "DNA amplification", "RNA transcription", "Protein digestion"], correctAnswer: 1, marks: 1, explanation: "PCR ଦ୍ୱାରା ନିର୍ଦ୍ଦିଷ୍ଟ DNA segment ବଢ଼ାଯାଏ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ମାନବ ପ୍ରଜନନ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ",
      subject: "Biology",
      category: "Human Biology",
      chapter: "ପ୍ରଜନନ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ",
      grade: 12,
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
      { quiz: quiz2._id, questionText: "ମାନବର fertilization କେଉଁଠି ହୁଏ?", options: ["Uterus", "Fallopian tube", "Ovary", "Cervix"], correctAnswer: 1, marks: 1, explanation: "Fertilization fallopian tube ର ampulla ଅଂଶରେ ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Ovulation ପାଇଁ ଦାୟୀ hormone କଣ?", options: ["FSH", "LH", "Progesterone", "Estrogen"], correctAnswer: 1, marks: 1, explanation: "LH surge ovulation କୁ trigger କରେ।" },
      { quiz: quiz2._id, questionText: "Embryo implantation କେଉଁଠି ହୁଏ?", options: ["Fallopian tube", "Uterus endometrium", "Ovary", "Cervix"], correctAnswer: 1, marks: 1, explanation: "Blastocyst uterus ର endometrium ରେ implant ହୁଏ।" },
      { quiz: quiz2._id, questionText: "କେଉଁ contraceptive ovulation କୁ ରୋକେ?", options: ["Condom", "Oral pills", "IUD", "Vasectomy"], correctAnswer: 1, marks: 1, explanation: "Hormonal pills ovulation କୁ ଦମନ କରେ।" },
      { quiz: quiz2._id, questionText: "Test tube baby technique କଣ?", options: ["Natural fertilization", "IVF", "Cloning", "Artificial insemination"], correctAnswer: 1, marks: 1, explanation: "IVF ରେ ଶରୀର ବାହାରେ fertilization କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "AIDS କାହା ଦ୍ୱାରା ହୁଏ?", options: ["Bacteria", "HIV", "Fungus", "Protozoa"], correctAnswer: 1, marks: 1, explanation: "HIV ହେଉଛି AIDS ର କାରଣ।" },
      { quiz: quiz2._id, questionText: "Vaccination କେଉଁ immunity ଦେଇଥାଏ?", options: ["Natural active", "Artificial active immunity", "Passive immunity", "Innate immunity"], correctAnswer: 1, marks: 1, explanation: "Vaccine ଶରୀରକୁ antibody ତିଆରି କରିବାକୁ ଉତ୍ତେଜିତ କରେ।" },
      { quiz: quiz2._id, questionText: "Antibody କିଏ ତିଆରି କରେ?", options: ["T cell", "B lymphocyte", "RBC", "Platelet"], correctAnswer: 1, marks: 1, explanation: "B lymphocyte plasma cell ହୋଇ antibody ତିଆରି କରେ।" },
      { quiz: quiz2._id, questionText: "Cancer cell ର ବିଶେଷତା କଣ?", options: ["କେବଳ size", "Uncontrolled division", "କେବଳ color", "କେବଳ shape"], correctAnswer: 1, marks: 1, explanation: "Cancer cell ର uncontrolled proliferation ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Amniocentesis କାହା ଚିହ୍ନଟ ପାଇଁ ବ୍ୟବହୃତ?", options: ["Blood group", "Chromosomal abnormality", "Diabetes", "Heart disease"], correctAnswer: 1, marks: 1, explanation: "Fetal chromosome disorder ଚିହ୍ନଟ ପାଇଁ ବ୍ୟବହୃତ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ପରିବେଶ ବିଜ୍ଞାନ ଏବଂ ପରିସ୍ଥିତିତନ୍ତ୍ର",
      subject: "Biology",
      category: "Ecology",
      chapter: "Ecosystem and Biodiversity",
      grade: 12,
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
      { quiz: quiz3._id, questionText: "10% energy transfer law କିଏ ଦେଇଥିଲେ?", options: ["Odum", "Lindeman", "Tansley", "Haeckel"], correctAnswer: 1, marks: 1, explanation: "Lindeman 10% law ପ୍ରସ୍ତାବ କରିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "Bare rock ରେ primary succession କାହା ସହ ଆରମ୍ଭ ହୁଏ?", options: ["Grass", "Lichen", "Tree", "Shrub"], correctAnswer: 1, marks: 1, explanation: "Lichen pioneer species ଭାବରେ କାମ କରେ।" },
      { quiz: quiz3._id, questionText: "Biodiversity hotspot ର ବିଶେଷତା କଣ?", options: ["Low species count", "High endemism ଏବଂ habitat loss threat", "Cold climate", "Desert"], correctAnswer: 1, marks: 1, explanation: "Hotspot ରେ endemic species ଅଧିକ ଥାଏ।" },
      { quiz: quiz3._id, questionText: "Ozone depletion ପାଇଁ କେଉଁ gas ଦାୟୀ?", options: ["CO₂", "CFC", "Methane", "Nitrogen"], correctAnswer: 1, marks: 1, explanation: "CFC chlorine atom ଛାଡ଼ି ozone କୁ ନଷ୍ଟ କରେ।" },
      { quiz: quiz3._id, questionText: "Eutrophication କାହିଁକି ହୁଏ?", options: ["Heavy metal", "Excess nutrient in water", "Oil spill", "Radioactive waste"], correctAnswer: 1, marks: 1, explanation: "Nitrogen ଏବଂ phosphorus ଅଧିକ ହେଲେ eutrophication ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Ex-situ conservation ର ଉଦାହରଣ କଣ?", options: ["National park", "Zoo and botanical garden", "Biosphere reserve", "Sacred grove"], correctAnswer: 1, marks: 1, explanation: "Zoo ଏବଂ botanical garden ex-situ conservation ର ଉଦାହରଣ।" },
      { quiz: quiz3._id, questionText: "Energy pyramid ସଦା କେମିତି ଥାଏ?", options: ["Inverted", "Upright", "Spindle-shaped", "Irregular"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ trophic level ରେ energy କମିଯାଏ।" },
      { quiz: quiz3._id, questionText: "Legume ରେ nitrogen fixation କିଏ କରେ?", options: ["Nitrosomonas", "Rhizobium", "E.coli", "Azotobacter"], correctAnswer: 1, marks: 1, explanation: "Rhizobium root nodule ରେ nitrogen fixation କରେ।" },
      { quiz: quiz3._id, questionText: "BOD କଣ ସୂଚାଏ?", options: ["Air quality", "Water pollution level", "Soil fertility", "Radiation"], correctAnswer: 1, marks: 1, explanation: "High BOD ମାନେ ଅଧିକ organic pollution।" },
      { quiz: quiz3._id, questionText: "ସର୍ବାଧିକ global warming potential କେଉଁ gas ର?", options: ["CO₂", "CFC", "Methane", "N₂O"], correctAnswer: 1, marks: 1, explanation: "CFC ର global warming potential ଅତ୍ୟଧିକ।" },
    ]);

    console.log("✓ Class 12 Science - Biology Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceBiologyOdia };
