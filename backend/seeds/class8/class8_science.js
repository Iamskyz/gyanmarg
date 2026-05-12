import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8Science = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Cell - Structure and Functions
    const scienceQuiz1 = await Quiz.create({
      title: "Cell - Structure and Functions",
      subject: "Science",
      category: "Biology",
      chapter: "Cell",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz1._id, questionText: "Who discovered the cell?", options: ["Newton", "Robert Hooke", "Darwin", "Mendel"], correctAnswer: 1, marks: 1, explanation: "Robert Hooke discovered cells in 1665 while observing cork under a microscope." },
      { quiz: scienceQuiz1._id, questionText: "Which organelle is called the 'powerhouse of the cell'?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], correctAnswer: 1, marks: 1, explanation: "Mitochondria produce energy (ATP) for the cell, hence called the powerhouse." },
      { quiz: scienceQuiz1._id, questionText: "Which part of the cell contains genetic material?", options: ["Cytoplasm", "Cell membrane", "Nucleus", "Vacuole"], correctAnswer: 2, marks: 1, explanation: "The nucleus contains DNA (genetic material) that controls cell activities." },
      { quiz: scienceQuiz1._id, questionText: "Plant cells have but animal cells don't have:", options: ["Nucleus", "Cell wall", "Cytoplasm", "Mitochondria"], correctAnswer: 1, marks: 1, explanation: "Plant cells have a rigid cell wall made of cellulose; animal cells lack it." },
      { quiz: scienceQuiz1._id, questionText: "The basic structural and functional unit of life is:", options: ["Tissue", "Organ", "Cell", "Organism"], correctAnswer: 2, marks: 1, explanation: "Cell is the basic structural and functional unit of all living organisms." },
      { quiz: scienceQuiz1._id, questionText: "Which organelle is responsible for photosynthesis?", options: ["Mitochondria", "Chloroplast", "Ribosome", "Lysosome"], correctAnswer: 1, marks: 1, explanation: "Chloroplasts contain chlorophyll and carry out photosynthesis in plant cells." },
      { quiz: scienceQuiz1._id, questionText: "Amoeba is an example of:", options: ["Multicellular organism", "Unicellular organism", "Non-living thing", "Virus"], correctAnswer: 1, marks: 1, explanation: "Amoeba is a unicellular organism — its entire body is made of a single cell." },
      { quiz: scienceQuiz1._id, questionText: "What controls the movement of substances in and out of the cell?", options: ["Cell wall", "Nucleus", "Cell membrane", "Cytoplasm"], correctAnswer: 2, marks: 1, explanation: "The cell membrane is selectively permeable and controls what enters and leaves the cell." },
      { quiz: scienceQuiz1._id, questionText: "Which cell organelle is called the 'suicide bag'?", options: ["Ribosome", "Lysosome", "Golgi body", "ER"], correctAnswer: 1, marks: 1, explanation: "Lysosomes contain digestive enzymes that can destroy the cell itself, hence called suicide bags." },
      { quiz: scienceQuiz1._id, questionText: "The jelly-like substance between the cell membrane and nucleus is:", options: ["Protoplasm", "Cytoplasm", "Nucleoplasm", "Cell sap"], correctAnswer: 1, marks: 1, explanation: "Cytoplasm is the jelly-like substance that fills the cell between membrane and nucleus." },
    ]);

    // Subcategory 2: Force and Pressure
    const scienceQuiz2 = await Quiz.create({
      title: "Force and Pressure",
      subject: "Science",
      category: "Physics",
      chapter: "Force and Pressure",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz2._id, questionText: "What is the SI unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], correctAnswer: 1, marks: 1, explanation: "The SI unit of force is Newton (N), named after Sir Isaac Newton." },
      { quiz: scienceQuiz2._id, questionText: "Pressure is defined as:", options: ["Force × Area", "Force / Area", "Force + Area", "Force - Area"], correctAnswer: 1, marks: 1, explanation: "Pressure = Force / Area. It is the force acting per unit area." },
      { quiz: scienceQuiz2._id, questionText: "What is the SI unit of pressure?", options: ["Newton", "Pascal", "Joule", "Kilogram"], correctAnswer: 1, marks: 1, explanation: "The SI unit of pressure is Pascal (Pa). 1 Pa = 1 N/m²." },
      { quiz: scienceQuiz2._id, questionText: "Which force always opposes motion?", options: ["Gravitational force", "Muscular force", "Friction", "Magnetic force"], correctAnswer: 2, marks: 1, explanation: "Friction always acts opposite to the direction of motion." },
      { quiz: scienceQuiz2._id, questionText: "Atmospheric pressure is caused by:", options: ["Weight of water", "Weight of air", "Weight of earth", "Magnetic field"], correctAnswer: 1, marks: 1, explanation: "Atmospheric pressure is caused by the weight of air above us." },
      { quiz: scienceQuiz2._id, questionText: "A force can:", options: ["Only change speed", "Only change direction", "Change speed, direction, or shape", "Do nothing"], correctAnswer: 2, marks: 1, explanation: "A force can change the speed, direction, or shape of an object." },
      { quiz: scienceQuiz2._id, questionText: "Why do sharp knives cut better?", options: ["More force", "Less area, more pressure", "More area", "Less force"], correctAnswer: 1, marks: 1, explanation: "Sharp knives have less area at the edge, so same force creates more pressure." },
      { quiz: scienceQuiz2._id, questionText: "Gravitational force is:", options: ["Contact force", "Non-contact force", "Muscular force", "Frictional force"], correctAnswer: 1, marks: 1, explanation: "Gravitational force acts without physical contact — it's a non-contact force." },
      { quiz: scienceQuiz2._id, questionText: "Liquids exert pressure:", options: ["Only downward", "Only upward", "In all directions", "Only sideways"], correctAnswer: 2, marks: 1, explanation: "Liquids exert pressure equally in all directions at a given depth." },
      { quiz: scienceQuiz2._id, questionText: "Why do heavy vehicles have wider tyres?", options: ["Look better", "To increase pressure", "To decrease pressure on road", "To increase friction"], correctAnswer: 2, marks: 1, explanation: "Wider tyres increase area, which decreases pressure on the road surface." },
    ]);

    // Subcategory 3: Chemical Effects of Electric Current
    const scienceQuiz3 = await Quiz.create({
      title: "Chemical Effects of Electric Current",
      subject: "Science",
      category: "Chemistry",
      chapter: "Electrochemistry",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz3._id, questionText: "Which liquid is a good conductor of electricity?", options: ["Distilled water", "Sugar solution", "Salt solution", "Oil"], correctAnswer: 2, marks: 1, explanation: "Salt solution conducts electricity because it contains ions that carry charge." },
      { quiz: scienceQuiz3._id, questionText: "The process of depositing a layer of metal on another metal using electricity is called:", options: ["Electrolysis", "Electroplating", "Electrochemistry", "Electromagnetism"], correctAnswer: 1, marks: 1, explanation: "Electroplating is the process of coating one metal with another using electric current." },
      { quiz: scienceQuiz3._id, questionText: "What are the electrodes in an electrolytic cell?", options: ["Anode and cathode", "Positive and neutral", "North and south", "Input and output"], correctAnswer: 0, marks: 1, explanation: "An electrolytic cell has two electrodes: anode (positive) and cathode (negative)." },
      { quiz: scienceQuiz3._id, questionText: "LED stands for:", options: ["Light Emitting Device", "Light Emitting Diode", "Low Energy Device", "Light Energy Diode"], correctAnswer: 1, marks: 1, explanation: "LED stands for Light Emitting Diode." },
      { quiz: scienceQuiz3._id, questionText: "Which of these does NOT conduct electricity?", options: ["Copper", "Lemon juice", "Distilled water", "Vinegar"], correctAnswer: 2, marks: 1, explanation: "Distilled water is a poor conductor as it lacks ions." },
      { quiz: scienceQuiz3._id, questionText: "In electroplating, the object to be plated is connected to:", options: ["Positive terminal (anode)", "Negative terminal (cathode)", "Both terminals", "Neither terminal"], correctAnswer: 1, marks: 1, explanation: "The object to be plated is connected to the negative terminal (cathode)." },
      { quiz: scienceQuiz3._id, questionText: "What happens when electric current passes through water?", options: ["Water boils", "Water decomposes into H₂ and O₂", "Water freezes", "Nothing happens"], correctAnswer: 1, marks: 1, explanation: "Electric current decomposes water into hydrogen and oxygen gases (electrolysis)." },
      { quiz: scienceQuiz3._id, questionText: "Why are iron objects electroplated with chromium?", options: ["To make heavier", "To prevent rusting", "To make magnetic", "To conduct better"], correctAnswer: 1, marks: 1, explanation: "Chromium plating prevents iron from rusting and gives a shiny appearance." },
      { quiz: scienceQuiz3._id, questionText: "A tester is used to check if a liquid:", options: ["Is hot", "Conducts electricity", "Is pure", "Has color"], correctAnswer: 1, marks: 1, explanation: "A tester (with LED/bulb) checks whether a liquid conducts electricity or not." },
      { quiz: scienceQuiz3._id, questionText: "Which metal is commonly used for electroplating jewellery?", options: ["Iron", "Copper", "Gold", "Aluminium"], correctAnswer: 2, marks: 1, explanation: "Gold is commonly used for electroplating jewellery to give it a shiny, attractive finish." },
    ]);

    console.log("✓ Class 8 - Science: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8Science;
