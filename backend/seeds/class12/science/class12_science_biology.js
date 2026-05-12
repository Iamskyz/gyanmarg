import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceBiology = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Genetics and Evolution",
      subject: "Biology",
      category: "Genetics",
      chapter: "Principles of Inheritance",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Mendel's law of independent assortment applies to genes on:", options: ["Same chromosome", "Different chromosomes", "Sex chromosomes only", "Mitochondrial DNA"], correctAnswer: 1, marks: 1, explanation: "Independent assortment applies to genes on different (non-homologous) chromosomes." },
      { quiz: quiz1._id, questionText: "A dihybrid cross ratio of 9:3:3:1 indicates:", options: ["Linkage", "Independent assortment", "Epistasis", "Codominance"], correctAnswer: 1, marks: 1, explanation: "9:3:3:1 ratio in F2 of dihybrid cross confirms independent assortment." },
      { quiz: quiz1._id, questionText: "Codominance is seen in:", options: ["Pea plant height", "ABO blood group (AB type)", "Flower color in pea", "Seed shape"], correctAnswer: 1, marks: 1, explanation: "In AB blood group, both A and B alleles express equally (codominance)." },
      { quiz: quiz1._id, questionText: "Sex-linked inheritance was discovered by:", options: ["Mendel", "T.H. Morgan", "Watson", "Darwin"], correctAnswer: 1, marks: 1, explanation: "T.H. Morgan discovered sex-linked inheritance through Drosophila experiments." },
      { quiz: quiz1._id, questionText: "DNA replication is:", options: ["Conservative", "Semi-conservative", "Dispersive", "Random"], correctAnswer: 1, marks: 1, explanation: "Meselson-Stahl experiment proved DNA replication is semi-conservative." },
      { quiz: quiz1._id, questionText: "The central dogma of molecular biology is:", options: ["DNA → RNA → Protein", "RNA → DNA → Protein", "Protein → RNA → DNA", "DNA → Protein → RNA"], correctAnswer: 0, marks: 1, explanation: "Central dogma: DNA → (transcription) → RNA → (translation) → Protein." },
      { quiz: quiz1._id, questionText: "A codon consists of:", options: ["2 nucleotides", "3 nucleotides", "4 nucleotides", "1 nucleotide"], correctAnswer: 1, marks: 1, explanation: "Each codon is a triplet of 3 nucleotides coding for one amino acid." },
      { quiz: quiz1._id, questionText: "Hardy-Weinberg equilibrium is disturbed by:", options: ["Large population", "Random mating", "Gene flow and natural selection", "No mutation"], correctAnswer: 2, marks: 1, explanation: "Gene flow, natural selection, mutation, genetic drift, and non-random mating disturb equilibrium." },
      { quiz: quiz1._id, questionText: "Restriction enzymes are used in:", options: ["Protein synthesis", "Genetic engineering (cutting DNA)", "Respiration", "Photosynthesis"], correctAnswer: 1, marks: 1, explanation: "Restriction enzymes cut DNA at specific sequences, essential for genetic engineering." },
      { quiz: quiz1._id, questionText: "PCR (Polymerase Chain Reaction) is used to:", options: ["Translate proteins", "Amplify specific DNA segments", "Transcribe RNA", "Digest proteins"], correctAnswer: 1, marks: 1, explanation: "PCR amplifies specific DNA sequences using thermal cycling and DNA polymerase." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Human Reproduction and Health",
      subject: "Biology",
      category: "Human Biology",
      chapter: "Reproduction and Health",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Fertilization in humans occurs in:", options: ["Uterus", "Fallopian tube (oviduct)", "Ovary", "Cervix"], correctAnswer: 1, marks: 1, explanation: "Fertilization typically occurs in the ampulla of the fallopian tube." },
      { quiz: quiz2._id, questionText: "The hormone responsible for ovulation is:", options: ["FSH", "LH (Luteinizing Hormone)", "Progesterone", "Estrogen"], correctAnswer: 1, marks: 1, explanation: "LH surge triggers ovulation (release of ovum from ovary)." },
      { quiz: quiz2._id, questionText: "Implantation of embryo occurs in:", options: ["Fallopian tube", "Endometrium of uterus", "Ovary", "Cervix"], correctAnswer: 1, marks: 1, explanation: "The blastocyst implants in the endometrium (uterine wall) about 7 days after fertilization." },
      { quiz: quiz2._id, questionText: "Which contraceptive method prevents ovulation?", options: ["Condom", "Oral pills (hormonal)", "IUD", "Vasectomy"], correctAnswer: 1, marks: 1, explanation: "Oral contraceptive pills contain hormones that suppress ovulation." },
      { quiz: quiz2._id, questionText: "Test tube baby technique involves:", options: ["Natural fertilization", "In vitro fertilization (IVF)", "Cloning", "Artificial insemination only"], correctAnswer: 1, marks: 1, explanation: "IVF involves fertilization outside the body and embryo transfer to uterus." },
      { quiz: quiz2._id, questionText: "AIDS is caused by:", options: ["Bacteria", "HIV (Human Immunodeficiency Virus)", "Fungus", "Protozoa"], correctAnswer: 1, marks: 1, explanation: "AIDS is caused by HIV, a retrovirus that attacks CD4+ T cells." },
      { quiz: quiz2._id, questionText: "Which immunity is provided by vaccination?", options: ["Natural active", "Artificial active immunity", "Passive immunity", "Innate immunity"], correctAnswer: 1, marks: 1, explanation: "Vaccines provide artificial active immunity by stimulating antibody production." },
      { quiz: quiz2._id, questionText: "Antibodies are produced by:", options: ["T cells", "B lymphocytes (plasma cells)", "Red blood cells", "Platelets"], correctAnswer: 1, marks: 1, explanation: "B lymphocytes differentiate into plasma cells that secrete antibodies." },
      { quiz: quiz2._id, questionText: "Cancer cells differ from normal cells in:", options: ["Size only", "Uncontrolled division (loss of contact inhibition)", "Color", "Shape only"], correctAnswer: 1, marks: 1, explanation: "Cancer cells show uncontrolled proliferation and loss of contact inhibition." },
      { quiz: quiz2._id, questionText: "Amniocentesis is used to detect:", options: ["Blood group", "Chromosomal abnormalities in fetus", "Diabetes", "Heart disease"], correctAnswer: 1, marks: 1, explanation: "Amniocentesis analyzes fetal cells from amniotic fluid for chromosomal disorders." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Ecology and Environment",
      subject: "Biology",
      category: "Ecology",
      chapter: "Ecosystem and Biodiversity",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "The 10% law of energy transfer was given by:", options: ["Odum", "Lindeman", "Tansley", "Haeckel"], correctAnswer: 1, marks: 1, explanation: "Lindeman (1942) proposed that only 10% of energy transfers to the next trophic level." },
      { quiz: quiz3._id, questionText: "Primary succession on bare rock begins with:", options: ["Grasses", "Lichens", "Trees", "Shrubs"], correctAnswer: 1, marks: 1, explanation: "Lichens are pioneer species on bare rock, breaking it down to form soil." },
      { quiz: quiz3._id, questionText: "Biodiversity hotspots are characterized by:", options: ["Low species count", "High endemism and threat of habitat loss", "Cold climate", "Desert conditions"], correctAnswer: 1, marks: 1, explanation: "Hotspots have high endemic species and significant habitat loss threat." },
      { quiz: quiz3._id, questionText: "The ozone layer depletion is mainly caused by:", options: ["CO₂", "CFCs (Chlorofluorocarbons)", "Methane", "Nitrogen"], correctAnswer: 1, marks: 1, explanation: "CFCs release chlorine atoms that catalytically destroy ozone molecules." },
      { quiz: quiz3._id, questionText: "Eutrophication is caused by:", options: ["Heavy metals", "Excess nutrients (nitrogen, phosphorus) in water", "Oil spills", "Radioactive waste"], correctAnswer: 1, marks: 1, explanation: "Excess nutrients cause algal blooms, depleting oxygen (eutrophication)." },
      { quiz: quiz3._id, questionText: "Ex-situ conservation includes:", options: ["National parks", "Zoos and botanical gardens", "Biosphere reserves", "Sacred groves"], correctAnswer: 1, marks: 1, explanation: "Ex-situ conservation protects species outside their natural habitat (zoos, seed banks)." },
      { quiz: quiz3._id, questionText: "The pyramid of energy is always:", options: ["Inverted", "Upright", "Spindle-shaped", "Irregular"], correctAnswer: 1, marks: 1, explanation: "Energy pyramid is always upright as energy decreases at each trophic level." },
      { quiz: quiz3._id, questionText: "Nitrogen fixation in legumes is done by:", options: ["Nitrosomonas", "Rhizobium", "E. coli", "Azotobacter"], correctAnswer: 1, marks: 1, explanation: "Rhizobium bacteria in root nodules of legumes fix atmospheric nitrogen." },
      { quiz: quiz3._id, questionText: "BOD (Biological Oxygen Demand) indicates:", options: ["Air quality", "Level of organic pollution in water", "Soil fertility", "Radiation level"], correctAnswer: 1, marks: 1, explanation: "High BOD indicates high organic pollution requiring more oxygen for decomposition." },
      { quiz: quiz3._id, questionText: "Which greenhouse gas has highest global warming potential per molecule?", options: ["CO₂", "CFC", "Methane", "N₂O"], correctAnswer: 1, marks: 1, explanation: "CFCs have extremely high global warming potential (thousands of times more than CO₂)." },
    ]);

    console.log("✓ Class 12 Science - Biology: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceBiology };
