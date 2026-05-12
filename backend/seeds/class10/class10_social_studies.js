import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10SocialStudies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Nationalism in India
    const socialQuiz1 = await Quiz.create({
      title: "Nationalism in India",
      subject: "Social Studies",
      category: "History",
      chapter: "Nationalism in India",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz1._id, questionText: "Who started the Civil Disobedience Movement?", options: ["Nehru", "Subhas Bose", "Mahatma Gandhi", "Bhagat Singh"], correctAnswer: 2, marks: 1, explanation: "Gandhi started the Civil Disobedience Movement with the Dandi March in 1930." },
      { quiz: socialQuiz1._id, questionText: "The Jallianwala Bagh massacre took place in:", options: ["1917", "1919", "1920", "1921"], correctAnswer: 1, marks: 1, explanation: "The massacre occurred on April 13, 1919 in Amritsar." },
      { quiz: socialQuiz1._id, questionText: "The Non-Cooperation Movement was launched in:", options: ["1919", "1920", "1930", "1942"], correctAnswer: 1, marks: 1, explanation: "Non-Cooperation Movement was launched in 1920." },
      { quiz: socialQuiz1._id, questionText: "Who led the peasants in Champaran?", options: ["Nehru", "Gandhi", "Patel", "Tilak"], correctAnswer: 1, marks: 1, explanation: "Gandhi led the Champaran Satyagraha in 1917 for indigo farmers." },
      { quiz: socialQuiz1._id, questionText: "The Rowlatt Act was passed in:", options: ["1917", "1918", "1919", "1920"], correctAnswer: 2, marks: 1, explanation: "The Rowlatt Act was passed in 1919, allowing detention without trial." },
      { quiz: socialQuiz1._id, questionText: "Quit India Movement was launched in:", options: ["1940", "1941", "1942", "1943"], correctAnswer: 2, marks: 1, explanation: "Quit India Movement was launched on August 8, 1942." },
      { quiz: socialQuiz1._id, questionText: "Who gave the slogan 'Swaraj is my birthright'?", options: ["Gandhi", "Tilak", "Nehru", "Bose"], correctAnswer: 1, marks: 1, explanation: "Bal Gangadhar Tilak gave this famous slogan." },
      { quiz: socialQuiz1._id, questionText: "The Salt March covered a distance of:", options: ["240 miles", "340 miles", "385 km", "200 km"], correctAnswer: 2, marks: 1, explanation: "The Dandi March covered about 385 km from Sabarmati to Dandi." },
      { quiz: socialQuiz1._id, questionText: "Who founded the Swaraj Party?", options: ["Gandhi and Nehru", "C.R. Das and Motilal Nehru", "Tilak and Gokhale", "Bose and Patel"], correctAnswer: 1, marks: 1, explanation: "C.R. Das and Motilal Nehru founded the Swaraj Party in 1923." },
      { quiz: socialQuiz1._id, questionText: "The Simon Commission came to India in:", options: ["1925", "1927", "1928", "1930"], correctAnswer: 2, marks: 1, explanation: "The Simon Commission arrived in India in 1928." },
    ]);

    // Subcategory 2: Globalisation and the Indian Economy
    const socialQuiz2 = await Quiz.create({
      title: "Globalisation and the Indian Economy",
      subject: "Social Studies",
      category: "Economics",
      chapter: "Globalisation",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz2._id, questionText: "Globalisation means:", options: ["Isolation of economies", "Integration of economies worldwide", "Only trade between two countries", "Only cultural exchange"], correctAnswer: 1, marks: 1, explanation: "Globalisation is the integration of economies through trade, investment, and technology." },
      { quiz: socialQuiz2._id, questionText: "MNC stands for:", options: ["Multi National Company", "Multinational Corporation", "Many National Companies", "Major National Corporation"], correctAnswer: 1, marks: 1, explanation: "MNC = Multinational Corporation — companies operating in multiple countries." },
      { quiz: socialQuiz2._id, questionText: "WTO stands for:", options: ["World Trade Organisation", "World Tax Organisation", "World Transport Organisation", "World Technology Organisation"], correctAnswer: 0, marks: 1, explanation: "WTO = World Trade Organisation, which sets rules for international trade." },
      { quiz: socialQuiz2._id, questionText: "Liberalisation means:", options: ["More government control", "Removing trade barriers and restrictions", "Closing borders", "Increasing taxes"], correctAnswer: 1, marks: 1, explanation: "Liberalisation means removing government restrictions on trade and business." },
      { quiz: socialQuiz2._id, questionText: "India adopted liberalisation policies in:", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "India adopted New Economic Policy (liberalisation) in 1991." },
      { quiz: socialQuiz2._id, questionText: "SEZ stands for:", options: ["Special Economic Zone", "State Economic Zone", "Special Export Zone", "Standard Economic Zone"], correctAnswer: 0, marks: 1, explanation: "SEZ = Special Economic Zone with tax benefits to attract foreign investment." },
      { quiz: socialQuiz2._id, questionText: "Which sector has benefited most from globalisation in India?", options: ["Agriculture", "IT and Services", "Mining", "Handicrafts"], correctAnswer: 1, marks: 1, explanation: "IT and service sector has benefited most from globalisation in India." },
      { quiz: socialQuiz2._id, questionText: "Fair trade practices ensure:", options: ["Only profit for MNCs", "Fair prices for producers in developing countries", "No trade", "Only exports"], correctAnswer: 1, marks: 1, explanation: "Fair trade ensures producers in developing countries get fair prices." },
      { quiz: socialQuiz2._id, questionText: "What is a trade barrier?", options: ["Free trade", "Tax on imports to restrict foreign goods", "Export subsidy", "No tax"], correctAnswer: 1, marks: 1, explanation: "Trade barriers like tariffs restrict foreign goods to protect domestic industry." },
      { quiz: socialQuiz2._id, questionText: "FDI stands for:", options: ["Foreign Direct Investment", "Federal Direct Income", "Foreign Domestic Investment", "Fixed Deposit Interest"], correctAnswer: 0, marks: 1, explanation: "FDI = Foreign Direct Investment by companies in other countries." },
    ]);

    // Subcategory 3: Power Sharing
    const socialQuiz3 = await Quiz.create({
      title: "Power Sharing and Federalism",
      subject: "Social Studies",
      category: "Civics",
      chapter: "Power Sharing",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz3._id, questionText: "Power sharing is desirable because it:", options: ["Creates conflict", "Reduces conflict and ensures stability", "Makes government weak", "Is not important"], correctAnswer: 1, marks: 1, explanation: "Power sharing reduces conflict between social groups and ensures political stability." },
      { quiz: socialQuiz3._id, questionText: "In India, power is shared between:", options: ["Only Centre", "Centre and States", "Only States", "Only local bodies"], correctAnswer: 1, marks: 1, explanation: "India has federal structure with power shared between Centre and States." },
      { quiz: socialQuiz3._id, questionText: "Which list contains subjects on which only Centre can make laws?", options: ["State List", "Union List", "Concurrent List", "Residuary List"], correctAnswer: 1, marks: 1, explanation: "Union List contains subjects (defence, foreign affairs) on which only Centre legislates." },
      { quiz: socialQuiz3._id, questionText: "Concurrent List means:", options: ["Only Centre makes laws", "Only State makes laws", "Both Centre and State can make laws", "No one makes laws"], correctAnswer: 2, marks: 1, explanation: "Both Centre and State can make laws on Concurrent List subjects (education, forests)." },
      { quiz: socialQuiz3._id, questionText: "Panchayati Raj is an example of:", options: ["Horizontal power sharing", "Vertical power sharing", "No power sharing", "Military rule"], correctAnswer: 1, marks: 1, explanation: "Panchayati Raj is vertical power sharing — Centre → State → Local bodies." },
      { quiz: socialQuiz3._id, questionText: "Belgium solved its ethnic problem through:", options: ["War", "Power sharing arrangement", "Dictatorship", "Separation"], correctAnswer: 1, marks: 1, explanation: "Belgium adopted power sharing between Dutch and French-speaking communities." },
      { quiz: socialQuiz3._id, questionText: "Sri Lanka's majoritarian approach led to:", options: ["Peace", "Civil war", "Economic growth", "Unity"], correctAnswer: 1, marks: 1, explanation: "Sri Lanka's Sinhala-only policy led to civil war with Tamil minority." },
      { quiz: socialQuiz3._id, questionText: "Horizontal power sharing means:", options: ["Between different levels of government", "Between different organs at same level (legislature, executive, judiciary)", "Between communities", "Between parties"], correctAnswer: 1, marks: 1, explanation: "Horizontal = power shared among legislature, executive, and judiciary at same level." },
      { quiz: socialQuiz3._id, questionText: "How many subjects are in the Union List?", options: ["66", "97", "47", "52"], correctAnswer: 1, marks: 1, explanation: "The Union List originally had 97 subjects (now 100)." },
      { quiz: socialQuiz3._id, questionText: "Community government in Belgium is elected by:", options: ["All citizens", "People belonging to one language community", "Only Dutch speakers", "Only French speakers"], correctAnswer: 1, marks: 1, explanation: "Community government is elected by people of one language community (Dutch, French, German)." },
    ]);

    console.log("✓ Class 10 - Social Studies: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10SocialStudies;
