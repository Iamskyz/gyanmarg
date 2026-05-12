import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7Science = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Science - Subcategory 1: Nutrition in Living Organisms
    const scienceQuiz1 = await Quiz.create({
      title: "Nutrition in Plants and Animals",
      subject: "Science",
      category: "Biology",
      chapter: "Nutrition",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: scienceQuiz1._id,
        questionText: "What is the mode of nutrition in green plants called?",
        options: ["Heterotrophic", "Autotrophic", "Saprophytic", "Parasitic"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Green plants make their own food through photosynthesis, so their mode of nutrition is autotrophic.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which gas is released during photosynthesis?",
        options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        correctAnswer: 2,
        marks: 1,
        explanation: "During photosynthesis, plants release oxygen as a byproduct.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What is the function of villi in the small intestine?",
        options: ["Produce enzymes", "Increase absorption area", "Store food", "Kill bacteria"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Villi increase the surface area for absorption of digested food in the small intestine.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which organism is an example of a saprophyte?",
        options: ["Mushroom", "Rose plant", "Cow", "Frog"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Mushrooms are saprophytes that feed on dead and decaying organic matter.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Where does digestion of food begin in humans?",
        options: ["Stomach", "Small intestine", "Mouth", "Large intestine"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Digestion begins in the mouth where saliva contains enzymes that break down starch.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What is the role of hydrochloric acid in the stomach?",
        options: ["Digest fats", "Kill germs and create acidic medium", "Absorb water", "Produce bile"],
        correctAnswer: 1,
        marks: 1,
        explanation: "HCl in the stomach kills germs and creates an acidic medium for enzyme action.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which part of the plant absorbs water and minerals?",
        options: ["Leaves", "Stem", "Root hair", "Flower"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Root hairs absorb water and minerals from the soil.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What is the green pigment in leaves called?",
        options: ["Haemoglobin", "Chlorophyll", "Melanin", "Carotene"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Chlorophyll is the green pigment that captures sunlight for photosynthesis.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Cuscuta (Amarbel) is an example of:",
        options: ["Autotroph", "Saprophyte", "Parasite", "Insectivore"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Cuscuta is a parasitic plant that derives nutrition from the host plant.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which enzyme in saliva helps digest starch?",
        options: ["Pepsin", "Lipase", "Amylase", "Trypsin"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Salivary amylase breaks down starch into simpler sugars in the mouth.",
      },
    ]);

    // Science - Subcategory 2: Heat and Temperature
    const scienceQuiz2 = await Quiz.create({
      title: "Heat and Temperature",
      subject: "Science",
      category: "Physics",
      chapter: "Heat",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: scienceQuiz2._id,
        questionText: "What instrument is used to measure temperature?",
        options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A thermometer is used to measure temperature.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "What is the boiling point of water in Celsius?",
        options: ["0°C", "50°C", "100°C", "212°C"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Water boils at 100°C (or 212°F) at normal atmospheric pressure.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Heat flows from:",
        options: ["Cold to hot object", "Hot to cold object", "Both directions equally", "Does not flow"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Heat always flows from a hotter object to a colder object.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Which of these is a good conductor of heat?",
        options: ["Wood", "Plastic", "Iron", "Rubber"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Metals like iron are good conductors of heat.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "What is the normal body temperature of a human?",
        options: ["35°C", "37°C", "39°C", "40°C"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Normal human body temperature is approximately 37°C (98.6°F).",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Which mode of heat transfer does not require a medium?",
        options: ["Conduction", "Convection", "Radiation", "All require medium"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Radiation can transfer heat through vacuum without any medium.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Why do we wear woolen clothes in winter?",
        options: ["Wool produces heat", "Wool traps air which is a poor conductor", "Wool absorbs cold", "Wool reflects heat"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Wool traps air between its fibers. Air is a poor conductor of heat, keeping body heat from escaping.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "What is the freezing point of water?",
        options: ["0°C", "4°C", "-10°C", "32°C"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Water freezes at 0°C (or 32°F) at normal atmospheric pressure.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "In which material does heat travel fastest?",
        options: ["Water", "Air", "Copper", "Glass"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Copper is an excellent conductor of heat and transfers heat fastest among these options.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Sea breeze occurs because:",
        options: ["Land heats up faster than sea", "Sea heats up faster than land", "Both heat equally", "Wind blows randomly"],
        correctAnswer: 0,
        marks: 1,
        explanation: "During the day, land heats up faster than sea, causing air to rise over land and cool sea air to move in.",
      },
    ]);

    // Science - Subcategory 3: Acids, Bases and Salts
    const scienceQuiz3 = await Quiz.create({
      title: "Acids, Bases and Salts",
      subject: "Science",
      category: "Chemistry",
      chapter: "Chemical Substances",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: scienceQuiz3._id,
        questionText: "What is the taste of an acid?",
        options: ["Bitter", "Sour", "Sweet", "Salty"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Acids have a sour taste. For example, lemon juice contains citric acid.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which indicator turns red in acidic solution?",
        options: ["Blue litmus", "Red litmus", "Phenolphthalein", "Methyl orange"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Blue litmus paper turns red when dipped in an acidic solution.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What is the pH value of a neutral solution?",
        options: ["0", "7", "14", "1"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A neutral solution has a pH of 7. Below 7 is acidic, above 7 is basic.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which of these is a base?",
        options: ["Lemon juice", "Vinegar", "Baking soda", "Orange juice"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Baking soda (sodium bicarbonate) is a base with a pH greater than 7.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What is formed when an acid reacts with a base?",
        options: ["Acid", "Base", "Salt and water", "Gas"],
        correctAnswer: 2,
        marks: 1,
        explanation: "When an acid reacts with a base, salt and water are formed. This is called neutralization.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which acid is found in our stomach?",
        options: ["Sulphuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Hydrochloric acid (HCl) is present in our stomach to help in digestion.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What happens when turmeric is added to a basic solution?",
        options: ["Turns yellow", "Turns red", "No change", "Turns blue"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Turmeric turns red in a basic (alkaline) solution.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which of these is a natural indicator?",
        options: ["Phenolphthalein", "Litmus", "Methyl orange", "Universal indicator"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Litmus is a natural indicator obtained from lichens.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Ant sting contains which acid?",
        options: ["Acetic acid", "Formic acid", "Citric acid", "Lactic acid"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Ant sting contains formic acid (methanoic acid).",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What is the process of mixing acid and base called?",
        options: ["Oxidation", "Reduction", "Neutralization", "Decomposition"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The reaction between an acid and a base is called neutralization.",
      },
    ]);

    console.log("✓ Class 7 - Science: 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7Science;
