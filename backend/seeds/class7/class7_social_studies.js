import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7SocialStudies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Medieval India
    const socialQuiz1 = await Quiz.create({
      title: "Medieval India - Rulers and Kingdoms",
      subject: "Social Studies",
      category: "History",
      chapter: "Medieval Period",
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
        quiz: socialQuiz1._id,
        questionText: "Who founded the Mughal Empire in India?",
        options: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Babur founded the Mughal Empire in India after the Battle of Panipat in 1526.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Which Mughal emperor built the Taj Mahal?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Who was the famous ruler of the Chola dynasty?",
        options: ["Ashoka", "Rajendra Chola", "Chandragupta", "Harsha"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Rajendra Chola was a famous ruler who expanded the Chola empire across Southeast Asia.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "What was the capital of the Vijayanagara Empire?",
        options: ["Delhi", "Hampi", "Agra", "Pataliputra"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Hampi was the capital of the Vijayanagara Empire in present-day Karnataka.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Who introduced the 'Din-i-Ilahi' religion?",
        options: ["Babur", "Akbar", "Aurangzeb", "Humayun"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Akbar introduced Din-i-Ilahi, which combined elements of various religions.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "The Battle of Panipat (1526) was fought between:",
        options: ["Babur and Ibrahim Lodi", "Akbar and Hemu", "Humayun and Sher Shah", "Aurangzeb and Dara"],
        correctAnswer: 0,
        marks: 1,
        explanation: "The First Battle of Panipat (1526) was fought between Babur and Ibrahim Lodi.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Who was the court poet of Akbar?",
        options: ["Tulsidas", "Kabir", "Abul Fazl", "Birbal"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Abul Fazl was Akbar's court historian who wrote the Akbarnama.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Which system did Akbar introduce for land revenue?",
        options: ["Zamindari", "Mansabdari", "Todar Mal's system", "Jagirdari"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Akbar introduced Todar Mal's revenue system (Zabt system) for fair land taxation.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "Who was the founder of the Maratha Empire?",
        options: ["Shivaji", "Bajirao", "Sambhaji", "Balaji Vishwanath"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Shivaji Maharaj founded the Maratha Empire in the 17th century.",
      },
      {
        quiz: socialQuiz1._id,
        questionText: "What was the language of administration during the Mughal period?",
        options: ["Hindi", "Sanskrit", "Persian", "Urdu"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Persian was the official language of administration during the Mughal period.",
      },
    ]);

    // Subcategory 2: Environment and Natural Resources
    const socialQuiz2 = await Quiz.create({
      title: "Environment and Natural Resources",
      subject: "Social Studies",
      category: "Geography",
      chapter: "Natural Resources",
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
        quiz: socialQuiz2._id,
        questionText: "Which layer of the atmosphere protects us from UV rays?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Ozone layer"],
        correctAnswer: 3,
        marks: 1,
        explanation: "The ozone layer (in the stratosphere) protects us from harmful ultraviolet rays.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What is the main cause of global warming?",
        options: ["Deforestation only", "Greenhouse gases", "Volcanic eruptions", "Ocean currents"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Greenhouse gases (like CO2, methane) trap heat in the atmosphere causing global warming.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "Which of these is a renewable resource?",
        options: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Solar energy is renewable as it is continuously available from the sun.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What percentage of Earth's water is freshwater?",
        options: ["About 3%", "About 25%", "About 50%", "About 70%"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Only about 3% of Earth's water is freshwater, and most of it is in glaciers.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "Which type of soil is best for growing cotton?",
        options: ["Alluvial soil", "Black soil", "Red soil", "Laterite soil"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Black soil (regur soil) is best for growing cotton due to its moisture-retaining capacity.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What is deforestation?",
        options: ["Planting trees", "Cutting down forests", "Growing crops", "Building dams"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Deforestation is the large-scale cutting down of forests for various purposes.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "Which gas is most responsible for the greenhouse effect?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Carbon dioxide is the primary greenhouse gas responsible for trapping heat.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What is the water cycle?",
        options: ["Water flowing in rivers", "Continuous movement of water between earth and atmosphere", "Rain falling", "Water stored in dams"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The water cycle is the continuous movement of water through evaporation, condensation, and precipitation.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "Which natural disaster is caused by shifting of tectonic plates?",
        options: ["Flood", "Cyclone", "Earthquake", "Drought"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Earthquakes are caused by the sudden shifting or movement of tectonic plates.",
      },
      {
        quiz: socialQuiz2._id,
        questionText: "What is biodiversity?",
        options: ["Only animal species", "Variety of life forms in an area", "Only plant species", "Only marine life"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Biodiversity refers to the variety of all life forms (plants, animals, microorganisms) in an area.",
      },
    ]);

    // Subcategory 3: Democracy and Equality
    const socialQuiz3 = await Quiz.create({
      title: "Democracy and Equality",
      subject: "Social Studies",
      category: "Civics",
      chapter: "Democracy",
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
        quiz: socialQuiz3._id,
        questionText: "What does 'equality' mean in a democracy?",
        options: ["Everyone gets same salary", "Equal rights and opportunities for all", "Everyone does same work", "Everyone lives in same house"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Equality in democracy means all citizens have equal rights and opportunities regardless of caste, religion, or gender.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What is the minimum age to become a member of Lok Sabha?",
        options: ["18 years", "21 years", "25 years", "30 years"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The minimum age to become a member of Lok Sabha is 25 years.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What is Universal Adult Franchise?",
        options: ["Only rich can vote", "Only educated can vote", "All adults above 18 can vote", "Only men can vote"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Universal Adult Franchise means all citizens above 18 years have the right to vote regardless of caste, religion, or gender.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "Which article of the Indian Constitution abolishes untouchability?",
        options: ["Article 14", "Article 15", "Article 17", "Article 21"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Article 17 of the Indian Constitution abolishes untouchability.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What is the role of the judiciary in a democracy?",
        options: ["Make laws", "Implement laws", "Interpret laws and deliver justice", "Collect taxes"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The judiciary interprets laws, settles disputes, and ensures justice in a democracy.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What are Fundamental Rights?",
        options: ["Rights given by parents", "Basic rights guaranteed by Constitution", "Rights to earn money", "Rights given by teachers"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Fundamental Rights are basic rights guaranteed to all citizens by the Indian Constitution.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "How many Fundamental Rights are there in the Indian Constitution?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        marks: 1,
        explanation: "There are 6 Fundamental Rights in the Indian Constitution (Right to Equality, Freedom, Against Exploitation, Religion, Cultural & Educational, Constitutional Remedies).",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What is the meaning of 'secular' in Indian context?",
        options: ["Against religion", "State has no official religion", "Only one religion allowed", "No festivals allowed"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Secular means the state treats all religions equally and has no official religion.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "Who is known as the Father of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution as he chaired the drafting committee.",
      },
      {
        quiz: socialQuiz3._id,
        questionText: "What does RTI stand for?",
        options: ["Right to Information", "Right to Income", "Right to Internet", "Right to Independence"],
        correctAnswer: 0,
        marks: 1,
        explanation: "RTI stands for Right to Information, which allows citizens to seek information from government bodies.",
      },
    ]);

    console.log("✓ Class 7 - Social Studies: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7SocialStudies;
