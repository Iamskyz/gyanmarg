import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsHistory = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Early Societies and Empires",
      subject: "History",
      category: "World History",
      chapter: "Early Societies",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Which civilization is considered the oldest in the world?", options: ["Egyptian", "Mesopotamian", "Indus Valley", "Chinese"], correctAnswer: 1, marks: 1, explanation: "Mesopotamian civilization (c. 3500 BCE) is considered the oldest known civilization." },
      { quiz: quiz1._id, questionText: "The Code of Hammurabi belonged to which civilization?", options: ["Egyptian", "Babylonian", "Greek", "Roman"], correctAnswer: 1, marks: 1, explanation: "Hammurabi was the king of Babylon who created one of the earliest written legal codes." },
      { quiz: quiz1._id, questionText: "Who was the founder of the Roman Empire?", options: ["Julius Caesar", "Augustus Caesar", "Nero", "Constantine"], correctAnswer: 1, marks: 1, explanation: "Augustus Caesar (Octavian) became the first Roman Emperor in 27 BCE." },
      { quiz: quiz1._id, questionText: "The Silk Route connected which regions?", options: ["Africa and Europe", "China and the Mediterranean", "India and Australia", "America and Europe"], correctAnswer: 1, marks: 1, explanation: "The Silk Route was a trade network connecting China to the Mediterranean world." },
      { quiz: quiz1._id, questionText: "Which empire was known for its road system and postal service?", options: ["Greek", "Persian", "Egyptian", "Babylonian"], correctAnswer: 1, marks: 1, explanation: "The Persian Empire under Darius I built extensive roads and a postal system." },
      { quiz: quiz1._id, questionText: "Democracy originated in which ancient city-state?", options: ["Rome", "Athens", "Sparta", "Thebes"], correctAnswer: 1, marks: 1, explanation: "Athens is credited with developing the first democratic system around 508 BCE." },
      { quiz: quiz1._id, questionText: "The Great Wall of China was primarily built to protect against:", options: ["Floods", "Nomadic invasions from the north", "Earthquakes", "Trade disputes"], correctAnswer: 1, marks: 1, explanation: "The Great Wall was built to protect against invasions from northern nomadic groups." },
      { quiz: quiz1._id, questionText: "Which writing system was used in ancient Mesopotamia?", options: ["Hieroglyphics", "Cuneiform", "Latin script", "Sanskrit"], correctAnswer: 1, marks: 1, explanation: "Cuneiform was the wedge-shaped writing system developed in Mesopotamia." },
      { quiz: quiz1._id, questionText: "The Colosseum was built in which city?", options: ["Athens", "Rome", "Alexandria", "Constantinople"], correctAnswer: 1, marks: 1, explanation: "The Colosseum was built in Rome between 70-80 CE under Flavian emperors." },
      { quiz: quiz1._id, questionText: "Alexander the Great belonged to which kingdom?", options: ["Persia", "Macedonia", "Egypt", "Sparta"], correctAnswer: 1, marks: 1, explanation: "Alexander was the king of Macedonia who created one of the largest empires." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Medieval World History",
      subject: "History",
      category: "World History",
      chapter: "Medieval Period",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "The feudal system was primarily based on:", options: ["Trade", "Land ownership and loyalty", "Religion", "Military conquest"], correctAnswer: 1, marks: 1, explanation: "Feudalism was based on land grants in exchange for military service and loyalty." },
      { quiz: quiz2._id, questionText: "The Crusades were fought between:", options: ["Greeks and Romans", "Christians and Muslims", "Hindus and Buddhists", "Chinese and Mongols"], correctAnswer: 1, marks: 1, explanation: "The Crusades were religious wars between European Christians and Muslims over the Holy Land." },
      { quiz: quiz2._id, questionText: "The Black Death in Europe occurred in which century?", options: ["12th century", "14th century", "16th century", "18th century"], correctAnswer: 1, marks: 1, explanation: "The Black Death (bubonic plague) devastated Europe in the 14th century (1347-1351)." },
      { quiz: quiz2._id, questionText: "The Magna Carta was signed in which year?", options: ["1066", "1215", "1453", "1492"], correctAnswer: 1, marks: 1, explanation: "Magna Carta was signed in 1215, limiting the power of the English king." },
      { quiz: quiz2._id, questionText: "Who founded the Mongol Empire?", options: ["Kublai Khan", "Genghis Khan", "Timur", "Babur"], correctAnswer: 1, marks: 1, explanation: "Genghis Khan united the Mongol tribes and founded the Mongol Empire in 1206." },
      { quiz: quiz2._id, questionText: "The Renaissance began in which country?", options: ["France", "Italy", "England", "Germany"], correctAnswer: 1, marks: 1, explanation: "The Renaissance began in Italy in the 14th century, spreading across Europe." },
      { quiz: quiz2._id, questionText: "Constantinople fell to the Ottoman Turks in:", options: ["1215", "1453", "1492", "1517"], correctAnswer: 1, marks: 1, explanation: "Constantinople fell to Sultan Mehmed II in 1453, ending the Byzantine Empire." },
      { quiz: quiz2._id, questionText: "The Hundred Years' War was fought between:", options: ["Spain and Portugal", "England and France", "Germany and Italy", "Russia and Poland"], correctAnswer: 1, marks: 1, explanation: "The Hundred Years' War (1337-1453) was fought between England and France." },
      { quiz: quiz2._id, questionText: "Which invention revolutionized knowledge spread in medieval Europe?", options: ["Compass", "Printing Press", "Gunpowder", "Telescope"], correctAnswer: 1, marks: 1, explanation: "Gutenberg's printing press (c. 1440) revolutionized the spread of knowledge." },
      { quiz: quiz2._id, questionText: "The Viking Age is associated with people from:", options: ["Central Asia", "Scandinavia", "Mediterranean", "South America"], correctAnswer: 1, marks: 1, explanation: "Vikings were Norse seafarers from Scandinavia (Denmark, Norway, Sweden)." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Indian History - Ancient and Medieval",
      subject: "History",
      category: "Indian History",
      chapter: "Ancient and Medieval India",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "The Indus Valley Civilization flourished around:", options: ["5000 BCE", "2500 BCE", "1000 BCE", "500 BCE"], correctAnswer: 1, marks: 1, explanation: "The Indus Valley Civilization was at its peak around 2500-1900 BCE." },
      { quiz: quiz3._id, questionText: "Ashoka embraced Buddhism after which battle?", options: ["Hydaspes", "Kalinga", "Panipat", "Tarain"], correctAnswer: 1, marks: 1, explanation: "The devastating Kalinga War (261 BCE) led Ashoka to embrace Buddhism and non-violence." },
      { quiz: quiz3._id, questionText: "The Gupta period is known as:", options: ["Iron Age", "Golden Age of India", "Dark Age", "Silver Age"], correctAnswer: 1, marks: 1, explanation: "The Gupta period (320-550 CE) is called India's Golden Age for achievements in arts and sciences." },
      { quiz: quiz3._id, questionText: "Who established the Delhi Sultanate?", options: ["Muhammad Ghori", "Qutub-ud-din Aibak", "Alauddin Khilji", "Muhammad bin Tughlaq"], correctAnswer: 1, marks: 1, explanation: "Qutub-ud-din Aibak established the Delhi Sultanate in 1206 as the first Sultan." },
      { quiz: quiz3._id, questionText: "The Vijayanagara Empire was founded by:", options: ["Krishna Deva Raya", "Harihara and Bukka", "Shivaji", "Rajaraja Chola"], correctAnswer: 1, marks: 1, explanation: "Harihara and Bukka founded the Vijayanagara Empire in 1336." },
      { quiz: quiz3._id, questionText: "Nalanda University was destroyed by:", options: ["Mahmud of Ghazni", "Bakhtiyar Khilji", "Timur", "Aurangzeb"], correctAnswer: 1, marks: 1, explanation: "Bakhtiyar Khilji destroyed Nalanda University in 1193 CE." },
      { quiz: quiz3._id, questionText: "The Bhakti movement emphasized:", options: ["Rituals", "Personal devotion to God", "Caste system", "Military conquest"], correctAnswer: 1, marks: 1, explanation: "The Bhakti movement emphasized personal devotion and equality before God." },
      { quiz: quiz3._id, questionText: "Who wrote 'Arthashastra'?", options: ["Valmiki", "Kautilya (Chanakya)", "Kalidasa", "Banabhatta"], correctAnswer: 1, marks: 1, explanation: "Kautilya (Chanakya) wrote Arthashastra, a treatise on statecraft and economics." },
      { quiz: quiz3._id, questionText: "The Mughal Empire was founded by:", options: ["Akbar", "Babur", "Humayun", "Shah Jahan"], correctAnswer: 1, marks: 1, explanation: "Babur founded the Mughal Empire after the First Battle of Panipat in 1526." },
      { quiz: quiz3._id, questionText: "The Chola dynasty is famous for:", options: ["Land army", "Naval power and temple architecture", "Iron weapons", "Paper making"], correctAnswer: 1, marks: 1, explanation: "The Cholas were known for their powerful navy and magnificent temple architecture." },
    ]);

    console.log("✓ Class 11 Arts - History: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsHistory };
