import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9SocialStudies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: The French Revolution
    const socialQuiz1 = await Quiz.create({
      title: "The French Revolution",
      subject: "Social Studies",
      category: "History",
      chapter: "French Revolution",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz1._id, questionText: "The French Revolution began in which year?", options: ["1776", "1789", "1799", "1804"], correctAnswer: 1, marks: 1, explanation: "The French Revolution began in 1789 with the storming of the Bastille." },
      { quiz: socialQuiz1._id, questionText: "Who was the king of France during the Revolution?", options: ["Louis XIV", "Louis XV", "Louis XVI", "Napoleon"], correctAnswer: 2, marks: 1, explanation: "Louis XVI was the king when the Revolution started." },
      { quiz: socialQuiz1._id, questionText: "What was the Bastille?", options: ["A palace", "A church", "A state prison", "A market"], correctAnswer: 2, marks: 1, explanation: "The Bastille was a state prison that symbolized royal authority." },
      { quiz: socialQuiz1._id, questionText: "The French society was divided into how many estates?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "French society was divided into 3 estates: Clergy, Nobility, and Common people." },
      { quiz: socialQuiz1._id, questionText: "Who wrote 'The Social Contract'?", options: ["Voltaire", "Montesquieu", "Rousseau", "Locke"], correctAnswer: 2, marks: 1, explanation: "Jean-Jacques Rousseau wrote 'The Social Contract'." },
      { quiz: socialQuiz1._id, questionText: "What was the slogan of the French Revolution?", options: ["Unity and Strength", "Liberty, Equality, Fraternity", "Power to People", "Freedom Forever"], correctAnswer: 1, marks: 1, explanation: "'Liberty, Equality, Fraternity' was the famous slogan." },
      { quiz: socialQuiz1._id, questionText: "The National Assembly was formed by:", options: ["Clergy", "Nobility", "Third Estate", "King"], correctAnswer: 2, marks: 1, explanation: "The Third Estate declared themselves the National Assembly in June 1789." },
      { quiz: socialQuiz1._id, questionText: "Who was Napoleon Bonaparte?", options: ["A king", "A military general who became emperor", "A philosopher", "A priest"], correctAnswer: 1, marks: 1, explanation: "Napoleon was a military general who seized power and became Emperor of France." },
      { quiz: socialQuiz1._id, questionText: "What was the 'Reign of Terror'?", options: ["A period of peace", "Period of mass executions by Robespierre", "A festival", "A war with England"], correctAnswer: 1, marks: 1, explanation: "The Reign of Terror (1793-94) was a period of mass executions led by Robespierre." },
      { quiz: socialQuiz1._id, questionText: "The Declaration of the Rights of Man was adopted in:", options: ["1776", "1789", "1791", "1799"], correctAnswer: 1, marks: 1, explanation: "The Declaration of the Rights of Man and Citizen was adopted in August 1789." },
    ]);

    // Subcategory 2: Physical Features of India
    const socialQuiz2 = await Quiz.create({
      title: "Physical Features of India",
      subject: "Social Studies",
      category: "Geography",
      chapter: "Physical Features",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz2._id, questionText: "The Himalayas are an example of:", options: ["Block mountains", "Fold mountains", "Volcanic mountains", "Residual mountains"], correctAnswer: 1, marks: 1, explanation: "The Himalayas are young fold mountains formed by tectonic plate collision." },
      { quiz: socialQuiz2._id, questionText: "Which is the highest peak in India?", options: ["Mount Everest", "K2", "Kangchenjunga", "Nanda Devi"], correctAnswer: 2, marks: 1, explanation: "Kangchenjunga (8,586m) is the highest peak entirely within India." },
      { quiz: socialQuiz2._id, questionText: "The Northern Plains of India are formed by:", options: ["Volcanic activity", "Alluvial deposits of rivers", "Erosion of mountains", "Glacial activity"], correctAnswer: 1, marks: 1, explanation: "The Northern Plains are formed by alluvial deposits of Indus, Ganga, and Brahmaputra rivers." },
      { quiz: socialQuiz2._id, questionText: "The Deccan Plateau is located in:", options: ["Northern India", "Southern India (peninsular)", "Eastern India", "Western India only"], correctAnswer: 1, marks: 1, explanation: "The Deccan Plateau is a large plateau in southern peninsular India." },
      { quiz: socialQuiz2._id, questionText: "Which river is known as the 'Sorrow of Bengal'?", options: ["Ganga", "Brahmaputra", "Damodar", "Hooghly"], correctAnswer: 2, marks: 1, explanation: "Damodar river is called 'Sorrow of Bengal' due to frequent flooding." },
      { quiz: socialQuiz2._id, questionText: "The Western Ghats are also known as:", options: ["Sahyadri", "Vindhya", "Satpura", "Aravalli"], correctAnswer: 0, marks: 1, explanation: "The Western Ghats are also called Sahyadri mountains." },
      { quiz: socialQuiz2._id, questionText: "Which desert is located in western India?", options: ["Gobi", "Sahara", "Thar", "Atacama"], correctAnswer: 2, marks: 1, explanation: "The Thar Desert (Great Indian Desert) is located in Rajasthan, western India." },
      { quiz: socialQuiz2._id, questionText: "India has how many major physiographic divisions?", options: ["4", "5", "6", "7"], correctAnswer: 2, marks: 1, explanation: "India has 6 major divisions: Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains, Islands." },
      { quiz: socialQuiz2._id, questionText: "The Andaman and Nicobar Islands are located in:", options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Pacific Ocean"], correctAnswer: 1, marks: 1, explanation: "Andaman and Nicobar Islands are in the Bay of Bengal." },
      { quiz: socialQuiz2._id, questionText: "Which is the longest river in India?", options: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"], correctAnswer: 2, marks: 1, explanation: "Ganga (2,525 km) is the longest river flowing entirely within India." },
    ]);

    // Subcategory 3: What is Democracy
    const socialQuiz3 = await Quiz.create({
      title: "What is Democracy? Why Democracy?",
      subject: "Social Studies",
      category: "Civics",
      chapter: "Democracy",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz3._id, questionText: "Democracy is a form of government where rulers are elected by:", options: ["Military", "Rich people only", "The people", "Religious leaders"], correctAnswer: 2, marks: 1, explanation: "In democracy, rulers are elected by the people through free and fair elections." },
      { quiz: socialQuiz3._id, questionText: "Which of these is NOT a feature of democracy?", options: ["Free elections", "Rule of law", "Military rule", "Fundamental rights"], correctAnswer: 2, marks: 1, explanation: "Military rule is a feature of dictatorship, not democracy." },
      { quiz: socialQuiz3._id, questionText: "In a democracy, the final decision-making power rests with:", options: ["Army", "Judiciary only", "Elected representatives", "King"], correctAnswer: 2, marks: 1, explanation: "In democracy, elected representatives make decisions on behalf of people." },
      { quiz: socialQuiz3._id, questionText: "Which country is the largest democracy in the world?", options: ["USA", "UK", "India", "China"], correctAnswer: 2, marks: 1, explanation: "India is the largest democracy with over 1.4 billion people." },
      { quiz: socialQuiz3._id, questionText: "What is 'one person, one vote' principle?", options: ["Only one person can vote", "Each person's vote has equal value", "Voting only once in life", "Only one candidate"], correctAnswer: 1, marks: 1, explanation: "It means every citizen's vote has equal value regardless of status." },
      { quiz: socialQuiz3._id, questionText: "Which is an example of a non-democratic government?", options: ["India", "USA", "North Korea", "France"], correctAnswer: 2, marks: 1, explanation: "North Korea is ruled by a dictator without free elections." },
      { quiz: socialQuiz3._id, questionText: "Democracy allows citizens to:", options: ["Only obey", "Participate in decision-making", "Only pay taxes", "Only work"], correctAnswer: 1, marks: 1, explanation: "Democracy allows citizens to participate in governance through voting and expression." },
      { quiz: socialQuiz3._id, questionText: "What is a 'constitutional democracy'?", options: ["No constitution", "Government limited by constitution", "King makes constitution", "Army writes constitution"], correctAnswer: 1, marks: 1, explanation: "In constitutional democracy, the government's power is limited by a constitution." },
      { quiz: socialQuiz3._id, questionText: "Free and fair elections mean:", options: ["Only one party contests", "All parties get equal chance, no rigging", "Government decides winner", "No opposition allowed"], correctAnswer: 1, marks: 1, explanation: "Free and fair elections mean all parties compete equally without manipulation." },
      { quiz: socialQuiz3._id, questionText: "Which of these is a merit of democracy?", options: ["Slow decision-making", "Promotes equality and dignity", "Corruption", "Instability"], correctAnswer: 1, marks: 1, explanation: "Democracy promotes equality, dignity, and freedom for all citizens." },
    ]);

    console.log("✓ Class 9 - Social Studies: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9SocialStudies;
