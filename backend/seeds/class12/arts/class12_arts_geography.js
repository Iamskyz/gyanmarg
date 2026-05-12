import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsGeography = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Human Geography - Population and Settlement",
      subject: "Geography",
      category: "Human Geography",
      chapter: "Population and Settlement",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Demographic Transition Model has how many stages?", options: ["3", "4", "5", "6"], correctAnswer: 2, marks: 1, explanation: "DTM has 5 stages from high birth/death rates to declining population." },
      { quiz: quiz1._id, questionText: "What is the current population growth phase of India?", options: ["High stationary", "Early expanding", "Late expanding", "Low stationary"], correctAnswer: 2, marks: 1, explanation: "India is in late expanding phase with declining birth rates." },
      { quiz: quiz1._id, questionText: "Push factors of migration include?", options: ["Better jobs", "Unemployment and poverty", "Good education", "Healthcare"], correctAnswer: 1, marks: 1, explanation: "Push factors force people to leave their place of origin." },
      { quiz: quiz1._id, questionText: "Urbanization in developing countries leads to?", options: ["Only benefits", "Slums and infrastructure strain", "Reduced population", "No migration"], correctAnswer: 1, marks: 1, explanation: "Rapid urbanization creates housing and service challenges." },
      { quiz: quiz1._id, questionText: "The concept of 'optimum population' means?", options: ["Maximum population", "Population balanced with resources", "Minimum population", "Zero growth"], correctAnswer: 1, marks: 1, explanation: "Resources are best utilized at optimum population level." },
      { quiz: quiz1._id, questionText: "Rural settlement patterns include?", options: ["Only linear", "Linear, clustered, dispersed", "Only clustered", "Only dispersed"], correctAnswer: 1, marks: 1, explanation: "Settlement patterns depend on terrain, water, and social factors." },
      { quiz: quiz1._id, questionText: "What is Human Development Index based on?", options: ["Only income", "Health, education, and income", "Only literacy", "Only life expectancy"], correctAnswer: 1, marks: 1, explanation: "HDI combines life expectancy, education, and per capita income." },
      { quiz: quiz1._id, questionText: "Neo-Malthusian theory argues?", options: ["Population is not a problem", "Population growth will outstrip resources", "Technology solves all", "No limits to growth"], correctAnswer: 1, marks: 1, explanation: "They believe overpopulation leads to environmental degradation." },
      { quiz: quiz1._id, questionText: "Age-sex pyramid of India is?", options: ["Contracting", "Expanding", "Stationary", "Inverted"], correctAnswer: 1, marks: 1, explanation: "India has a broad base indicating young population." },
      { quiz: quiz1._id, questionText: "Census in India is conducted every?", options: ["5 years", "10 years", "15 years", "20 years"], correctAnswer: 1, marks: 1, explanation: "Decennial census has been conducted since 1872." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Resources and Development",
      subject: "Geography",
      category: "Economic Geography",
      chapter: "Primary and Secondary Activities",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Subsistence agriculture is characterized by?", options: ["Export oriented", "Self-consumption with low technology", "High mechanization", "Monoculture"], correctAnswer: 1, marks: 1, explanation: "Farmers grow food primarily for family consumption." },
      { quiz: quiz2._id, questionText: "Which revolution is associated with food grain production?", options: ["White Revolution", "Green Revolution", "Blue Revolution", "Golden Revolution"], correctAnswer: 1, marks: 1, explanation: "Green Revolution increased wheat and rice production in 1960s." },
      { quiz: quiz2._id, questionText: "Tertiary sector includes?", options: ["Mining", "Manufacturing", "Services like banking and transport", "Agriculture"], correctAnswer: 2, marks: 1, explanation: "Tertiary sector provides services rather than goods." },
      { quiz: quiz2._id, questionText: "Quaternary activities involve?", options: ["Farming", "Manufacturing", "Knowledge-based services", "Mining"], correctAnswer: 2, marks: 1, explanation: "Research, IT, and consultancy are quaternary activities." },
      { quiz: quiz2._id, questionText: "Von Thunen's model explains?", options: ["Industrial location", "Agricultural land use around a market", "Urban growth", "Population distribution"], correctAnswer: 1, marks: 1, explanation: "Concentric rings of agricultural activity around a central market." },
      { quiz: quiz2._id, questionText: "Weber's theory is related to?", options: ["Agriculture", "Industrial location", "Population", "Trade"], correctAnswer: 1, marks: 1, explanation: "Weber's least cost theory explains optimal factory location." },
      { quiz: quiz2._id, questionText: "Footloose industries are?", options: ["Heavy industries", "Industries not tied to specific raw material locations", "Mining industries", "Agricultural industries"], correctAnswer: 1, marks: 1, explanation: "IT and electronics can locate anywhere with connectivity." },
      { quiz: quiz2._id, questionText: "Plantation agriculture is characterized by?", options: ["Subsistence farming", "Large-scale single crop commercial farming", "Mixed farming", "Nomadic herding"], correctAnswer: 1, marks: 1, explanation: "Tea, coffee, rubber are plantation crops." },
      { quiz: quiz2._id, questionText: "Which is a non-renewable resource?", options: ["Solar energy", "Petroleum", "Wind energy", "Tidal energy"], correctAnswer: 1, marks: 1, explanation: "Fossil fuels take millions of years to form." },
      { quiz: quiz2._id, questionText: "Sustainable development means?", options: ["Maximum exploitation", "Meeting present needs without compromising future", "No development", "Only economic growth"], correctAnswer: 1, marks: 1, explanation: "Brundtland Commission defined it in 1987." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Transport, Communication and Trade",
      subject: "Geography",
      category: "Economic Geography",
      chapter: "Transport and International Trade",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Trans-Siberian Railway connects?", options: ["London to Paris", "St. Petersburg to Vladivostok", "Beijing to Moscow", "Tokyo to Seoul"], correctAnswer: 1, marks: 1, explanation: "World's longest railway line spanning Russia." },
      { quiz: quiz3._id, questionText: "Suez Canal connects which two seas?", options: ["Red Sea and Black Sea", "Mediterranean Sea and Red Sea", "Arabian Sea and Red Sea", "Caspian and Black Sea"], correctAnswer: 1, marks: 1, explanation: "It shortened the Europe-Asia sea route significantly." },
      { quiz: quiz3._id, questionText: "Panama Canal connects?", options: ["Atlantic and Indian Ocean", "Atlantic and Pacific Ocean", "Pacific and Arctic Ocean", "Indian and Pacific Ocean"], correctAnswer: 1, marks: 1, explanation: "It cuts through Central America saving thousands of nautical miles." },
      { quiz: quiz3._id, questionText: "Hinterland refers to?", options: ["Coastal area", "Area served by a port or city", "Desert region", "Mountain region"], correctAnswer: 1, marks: 1, explanation: "The interior region that supplies goods to and receives from a port." },
      { quiz: quiz3._id, questionText: "Which country has the densest railway network?", options: ["India", "USA", "Belgium", "China"], correctAnswer: 2, marks: 1, explanation: "Belgium has one of the densest rail networks per sq km." },
      { quiz: quiz3._id, questionText: "Cyber space refers to?", options: ["Outer space", "World of electronic digital communication", "Underground cables", "Satellite only"], correctAnswer: 1, marks: 1, explanation: "Internet-based virtual world of communication." },
      { quiz: quiz3._id, questionText: "WTO was established in which year?", options: ["1990", "1993", "1995", "1997"], correctAnswer: 2, marks: 1, explanation: "WTO replaced GATT in 1995 to regulate international trade." },
      { quiz: quiz3._id, questionText: "Entrepot trade means?", options: ["Direct export", "Re-export of imported goods", "Domestic trade", "Barter trade"], correctAnswer: 1, marks: 1, explanation: "Goods are imported and then re-exported (e.g., Singapore, Hong Kong)." },
      { quiz: quiz3._id, questionText: "The Big Inch pipeline transports?", options: ["Water", "Natural gas", "Petroleum", "Chemicals"], correctAnswer: 2, marks: 1, explanation: "It carries petroleum in the USA." },
      { quiz: quiz3._id, questionText: "Balance of trade is?", options: ["Total imports", "Difference between exports and imports", "Total exports", "GDP"], correctAnswer: 1, marks: 1, explanation: "Positive balance means exports exceed imports." },
    ]);

    console.log("✓ Class 12 Arts - Geography: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsGeography };
