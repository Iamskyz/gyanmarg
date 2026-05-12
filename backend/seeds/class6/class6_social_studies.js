import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6SocialStudies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Social Studies - Subcategory 1: Our Earth
    const socialQuiz1 = await Quiz.create({
      title: "Our Earth - Globe and Maps",
      subject: "Social Studies",
      category: "Geography",
      chapter: "Earth and Maps",
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
        quiz: socialQuiz1._id,
        questionText: "What is the shape of the Earth?",
        options: ["Flat", "Square", "Round (Sphere)", "Triangle"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Earth is round in shape, like a sphere or ball.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Which is the largest continent?",
        options: ["Africa", "Asia", "Europe", "North America"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Asia is the largest continent in the world by both area and population.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        marks: 1,
        explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Pacific Ocean is the largest ocean covering about one-third of Earth's surface.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "What is a globe?",
        options: ["A flat map", "A round model of Earth", "A picture", "A book"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A globe is a round model of Earth that shows its true shape.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Which direction does the sun rise?",
        options: ["North", "South", "East", "West"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The sun rises in the East direction every morning.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "What are the four main directions called?",
        options: ["Cardinal directions", "Primary directions", "Basic directions", "Main directions"],
        correctAnswer: 0,
        marks: 1,
        explanation: "North, South, East, and West are called cardinal directions.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Africa was historically called the 'Dark Continent' because it was unexplored.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "What is the imaginary line that divides Earth into Northern and Southern hemispheres?",
        options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The Equator is the imaginary line that divides Earth into Northern and Southern hemispheres.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Which is the smallest continent?",
        options: ["Europe", "Antarctica", "Australia", "South America"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Australia is the smallest continent in the world.",
      },
    ]);

    // Social Studies - Subcategory 2: Early Humans
    const socialQuiz2 = await Quiz.create({
      title: "Early Humans and Stone Age",
      subject: "Social Studies",
      category: "History",
      chapter: "Prehistoric Times",
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
        quiz: socialQuiz2._id,
        questionText: "What were the first tools made by early humans?",
        options: ["Iron tools", "Bronze tools", "Stone tools", "Wooden tools"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Early humans first made tools from stones, which is why it's called the Stone Age.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "How did early humans get their food?",
        options: ["Farming", "Hunting and gathering", "Trading", "Buying from markets"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Early humans got food by hunting animals and gathering fruits, roots, and seeds.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "Where did early humans live?",
        options: ["Houses", "Caves", "Palaces", "Apartments"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Early humans lived in caves for protection from weather and wild animals.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What was the most important discovery of early humans?",
        options: ["Wheel", "Fire", "Writing", "Metal"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Fire was the most important discovery as it helped in cooking, warmth, and protection.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What is the Stone Age divided into?",
        options: ["Two parts", "Three parts", "Four parts", "Five parts"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Stone Age is divided into three parts: Paleolithic, Mesolithic, and Neolithic.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What did early humans use animal skins for?",
        options: ["Food", "Clothing", "Tools", "Decoration"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Early humans used animal skins to make clothing to protect themselves from cold.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "When did early humans start farming?",
        options: ["Paleolithic Age", "Mesolithic Age", "Neolithic Age", "Iron Age"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Early humans started farming during the Neolithic Age (New Stone Age).",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What were the first animals domesticated by humans?",
        options: ["Cows", "Horses", "Dogs", "Cats"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Dogs were among the first animals domesticated by humans for hunting and protection.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What did early humans draw on cave walls?",
        options: ["Letters", "Numbers", "Pictures of animals", "Maps"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Early humans drew pictures of animals and hunting scenes on cave walls.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "Why did early humans move from place to place?",
        options: ["For fun", "To find food", "To meet friends", "To see new places"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Early humans were nomads who moved from place to place in search of food.",
      },
    ]);

    // Social Studies - Subcategory 3: Our Government
    const socialQuiz3 = await Quiz.create({
      title: "Understanding Government and Democracy",
      subject: "Social Studies",
      category: "Civics",
      chapter: "Government and Democracy",
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
        quiz: socialQuiz3._id,
        questionText: "What is democracy?",
        options: ["Rule by one person", "Rule by the people", "Rule by the rich", "Rule by the army"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Democracy means rule by the people, where people choose their leaders through voting.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "Who is the head of the Indian government?",
        options: ["President", "Prime Minister", "Chief Justice", "Governor"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The Prime Minister is the head of the Indian government and leads the country.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "At what age can a person vote in India?",
        options: ["16 years", "17 years", "18 years", "21 years"],
        correctAnswer: 2,
        marks: 1,
        explanation: "In India, a person can vote when they turn 18 years old.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What is the Parliament of India called?",
        options: ["Lok Sabha only", "Rajya Sabha only", "Both Lok Sabha and Rajya Sabha", "Supreme Court"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Indian Parliament consists of two houses: Lok Sabha (Lower House) and Rajya Sabha (Upper House).",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "Who makes laws in our country?",
        options: ["Prime Minister", "President", "Parliament", "Police"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Parliament makes laws for our country through discussions and voting.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What is the highest court in India called?",
        options: ["High Court", "District Court", "Supreme Court", "Family Court"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The Supreme Court is the highest court in India.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "How often are general elections held in India?",
        options: ["Every 3 years", "Every 4 years", "Every 5 years", "Every 6 years"],
        correctAnswer: 2,
        marks: 1,
        explanation: "General elections in India are held every 5 years to choose new representatives.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        correctAnswer: 2,
        marks: 1,
        explanation: "New Delhi is the capital of India where the central government works.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "Who is the head of a state in India?",
        options: ["Chief Minister", "Governor", "Mayor", "Collector"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The Governor is the head of a state in India, appointed by the President.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What does 'Republic' mean?",
        options: ["Rule by king", "Rule by elected representatives", "Rule by army", "Rule by rich people"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Republic means the country is ruled by elected representatives, not by a king or queen.",
      },
    ]);

    console.log("✓ Class 6 - Social Studies: 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6SocialStudies;
