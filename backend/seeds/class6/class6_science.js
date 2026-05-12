import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6Science = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Science - Subcategory 1: Plants and Animals
    const scienceQuiz1 = await Quiz.create({
      title: "Plants and Animals Around Us",
      subject: "Science",
      category: "Biology",
      chapter: "Living Organisms",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: scienceQuiz1._id,
        questionText: "Which part of the plant makes food?",
        options: ["Root", "Stem", "Leaves", "Flower"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Leaves make food for the plant through photosynthesis using sunlight.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What do plants need to make their food?",
        options: ["Sunlight and water only", "Sunlight, water and carbon dioxide", "Only water", "Only sunlight"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Plants need sunlight, water, and carbon dioxide to make food through photosynthesis.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which animals are called herbivores?",
        options: ["Animals that eat meat", "Animals that eat plants", "Animals that eat both", "Animals that don't eat"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Herbivores are animals that eat only plants, like cows, goats, and rabbits.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What is the main function of roots?",
        options: ["Make food", "Absorb water and minerals", "Produce flowers", "Give support only"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Roots absorb water and minerals from soil and also provide support to the plant.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which of these is a carnivore?",
        options: ["Cow", "Goat", "Lion", "Deer"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Lion is a carnivore as it eats only meat (other animals).",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What do we call animals that eat both plants and meat?",
        options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Omnivores eat both plants and meat. Humans are omnivores.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which part of the plant attracts insects?",
        options: ["Root", "Stem", "Leaves", "Flower"],
        correctAnswer: 3,
        marks: 1,
        explanation: "Flowers attract insects with their bright colors and sweet nectar.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What is the green substance in leaves called?",
        options: ["Chlorine", "Chlorophyll", "Carbon", "Oxygen"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Chlorophyll is the green substance in leaves that helps in making food.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "Which animals live both on land and in water?",
        options: ["Fish", "Birds", "Amphibians", "Mammals"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Amphibians like frogs can live both on land and in water.",
      },
      {
        quiz: scienceQuiz1._id,
        questionText: "What do plants give out during photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Plants give out oxygen during photosynthesis, which we breathe.",
      },
    ]);

    // Science - Subcategory 2: Light and Shadow
    const scienceQuiz2 = await Quiz.create({
      title: "Light, Shadows and Reflections",
      subject: "Science",
      category: "Physics",
      chapter: "Light and Shadow",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: scienceQuiz2._id,
        questionText: "What is needed to see objects?",
        options: ["Air", "Light", "Water", "Sound"],
        correctAnswer: 1,
        marks: 1,
        explanation: "We need light to see objects. Without light, we cannot see anything.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Which of these is a natural source of light?",
        options: ["Bulb", "Candle", "Sun", "Torch"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Sun is a natural source of light. Bulb, candle, and torch are artificial sources.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "What is formed when light is blocked by an object?",
        options: ["Reflection", "Shadow", "Rainbow", "Image"],
        correctAnswer: 1,
        marks: 1,
        explanation: "When light is blocked by an object, a shadow is formed on the other side.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Materials that allow light to pass through completely are called:",
        options: ["Opaque", "Transparent", "Translucent", "Reflective"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Transparent materials like clear glass allow light to pass through completely.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Which material is opaque?",
        options: ["Glass", "Water", "Wood", "Air"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Wood is opaque as it does not allow light to pass through it.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "What happens when light falls on a mirror?",
        options: ["It is absorbed", "It passes through", "It is reflected", "It disappears"],
        correctAnswer: 2,
        marks: 1,
        explanation: "When light falls on a mirror, it is reflected back.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "The image formed in a plane mirror is:",
        options: ["Smaller than object", "Larger than object", "Same size as object", "Upside down"],
        correctAnswer: 2,
        marks: 1,
        explanation: "A plane mirror forms an image that is the same size as the object.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "When is your shadow longest?",
        options: ["At noon", "In the morning", "In the evening", "Both B and C"],
        correctAnswer: 3,
        marks: 1,
        explanation: "Shadow is longest in morning and evening when the sun is low in the sky.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Which of these is translucent?",
        options: ["Clear glass", "Frosted glass", "Wood", "Metal"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Frosted glass is translucent - it allows some light to pass through but not clearly.",
      },
      {
        quiz: scienceQuiz2._id,
        questionText: "Light travels in:",
        options: ["Curved lines", "Straight lines", "Zigzag lines", "Circular paths"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Light always travels in straight lines.",
      },
    ]);

    // Science - Subcategory 3: Water and Air
    const scienceQuiz3 = await Quiz.create({
      title: "Water and Air Around Us",
      subject: "Science",
      category: "Environmental Science",
      chapter: "Natural Resources",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: scienceQuiz3._id,
        questionText: "What percentage of Earth's surface is covered by water?",
        options: ["50%", "60%", "70%", "80%"],
        correctAnswer: 2,
        marks: 1,
        explanation: "About 70% of Earth's surface is covered by water.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which gas do we breathe in from air?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
        marks: 1,
        explanation: "We breathe in oxygen from air, which is essential for our survival.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What is the process of water changing into water vapor called?",
        options: ["Condensation", "Evaporation", "Precipitation", "Collection"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Evaporation is the process where water changes into water vapor due to heat.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which gas do we breathe out?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correctAnswer: 2,
        marks: 1,
        explanation: "We breathe out carbon dioxide, which is a waste product of our body.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What is the main source of water vapor in air?",
        options: ["Rivers", "Oceans", "Lakes", "Ponds"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Oceans are the main source of water vapor in air due to evaporation.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Air is a:",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Air is a mixture of gases, so it is in gaseous state.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What happens to water when it is heated?",
        options: ["It freezes", "It evaporates", "It becomes solid", "Nothing happens"],
        correctAnswer: 1,
        marks: 1,
        explanation: "When water is heated, it evaporates and changes into water vapor.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which of these uses the most water?",
        options: ["Drinking", "Cooking", "Bathing", "Agriculture"],
        correctAnswer: 3,
        marks: 1,
        explanation: "Agriculture uses the most water for irrigation of crops.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "What is the process of water vapor changing back to water called?",
        options: ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Condensation is when water vapor cools down and changes back to liquid water.",
      },
      {
        quiz: scienceQuiz3._id,
        questionText: "Which gas is most abundant in air?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Nitrogen makes up about 78% of air, making it the most abundant gas.",
      },
    ]);

    console.log("✓ Class 6 - Science: 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6Science;
