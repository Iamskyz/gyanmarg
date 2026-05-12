import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6Odia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Basic Grammar (English)
    const odiaQuiz1En = await Quiz.create({
      title: "Odia Grammar - Letters and Words",
      subject: "Odia",
      category: "Grammar",
      chapter: "Basic Grammar",
      grade: 6,
      difficulty: "easy",
      language: "en",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1En._id, questionText: "How many letters are there in the Odia alphabet?", options: ["45", "47", "49", "51"], correctAnswer: 1, marks: 1, explanation: "There are 47 letters in the Odia alphabet including vowels and consonants." },
      { quiz: odiaQuiz1En._id, questionText: "What is a noun called in Odia?", options: ["କ୍ରିୟା", "ବିଶେଷଣ", "ନାମ ପଦ", "ଅବ୍ୟୟ"], correctAnswer: 2, marks: 1, explanation: "A noun is called 'ନାମ ପଦ' (Nama Pada) in Odia grammar." },
      { quiz: odiaQuiz1En._id, questionText: "Which is the first vowel in Odia?", options: ["ଆ", "ଅ", "ଇ", "ଈ"], correctAnswer: 1, marks: 1, explanation: "'ଅ' (A) is the first vowel in the Odia alphabet." },
      { quiz: odiaQuiz1En._id, questionText: "What is the Odia word for 'book'?", options: ["ପୁସ୍ତକ", "କଲମ", "କାଗଜ", "ପାଠ"], correctAnswer: 0, marks: 1, explanation: "'ପୁସ୍ତକ' (Pustaka) means book in Odia." },
      { quiz: odiaQuiz1En._id, questionText: "How do you say 'water' in Odia?", options: ["ଅଗ୍ନି", "ପାଣି", "ବାୟୁ", "ମାଟି"], correctAnswer: 1, marks: 1, explanation: "'ପାଣି' (Paani) means water in Odia." },
      { quiz: odiaQuiz1En._id, questionText: "What is the plural form of 'ଛୁଆ' (boy)?", options: ["ଛୁଆମାନେ", "ଛୁଆ", "ଝିଅ", "ଝିଅମାନେ"], correctAnswer: 0, marks: 1, explanation: "The plural of 'ଛୁଆ' (boy) is 'ଛୁଆମାନେ' (boys)." },
      { quiz: odiaQuiz1En._id, questionText: "Which letter combination makes 'କ୍ଷ'?", options: ["କ + ଷ", "କ + ଶ", "ଖ + ଷ", "କ + ସ"], correctAnswer: 0, marks: 1, explanation: "'କ୍ଷ' is formed by combining 'କ' and 'ଷ'." },
      { quiz: odiaQuiz1En._id, questionText: "What is 'ମା' in English?", options: ["Father", "Mother", "Sister", "Brother"], correctAnswer: 1, marks: 1, explanation: "'ମା' (Maa) means Mother in English." },
      { quiz: odiaQuiz1En._id, questionText: "How many vowels are there in Odia?", options: ["10", "11", "12", "13"], correctAnswer: 2, marks: 1, explanation: "There are 12 vowels in the Odia alphabet." },
      { quiz: odiaQuiz1En._id, questionText: "What is the Odia word for 'school'?", options: ["ଘର", "ପାଠଶାଳା", "ବଜାର", "ମନ୍ଦିର"], correctAnswer: 1, marks: 1, explanation: "'ପାଠଶାଳା' (Paathashala) means school in Odia." },
    ]);

    // Subcategory 2: Literature (English)
    const odiaQuiz2En = await Quiz.create({
      title: "Odia Literature - Stories and Poems",
      subject: "Odia",
      category: "Literature",
      chapter: "Prose and Poetry",
      grade: 6,
      difficulty: "easy",
      language: "en",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2En._id, questionText: "Who is known as the father of Odia literature?", options: ["Sarala Das", "Jagannath Das", "Fakir Mohan Senapati", "Radhanath Ray"], correctAnswer: 2, marks: 1, explanation: "Fakir Mohan Senapati is known as the father of modern Odia literature." },
      { quiz: odiaQuiz2En._id, questionText: "What is 'Chha Mana Atha Guntha' about?", options: ["A love story", "Rural life and land issues", "Historical events", "Religious themes"], correctAnswer: 1, marks: 1, explanation: "'Chha Mana Atha Guntha' by Fakir Mohan Senapati deals with rural life and land issues." },
      { quiz: odiaQuiz2En._id, questionText: "Who wrote the Odia Ramayana?", options: ["Sarala Das", "Jagannath Das", "Balaram Das", "Achyutananda Das"], correctAnswer: 1, marks: 1, explanation: "Jagannath Das wrote the famous Odia Ramayana called 'Jagannath Das Ramayana'." },
      { quiz: odiaQuiz2En._id, questionText: "What is a 'Janana' in Odia poetry?", options: ["A type of song", "A folk tale", "A devotional poem", "A dance form"], correctAnswer: 2, marks: 1, explanation: "Janana is a type of devotional poem in Odia literature." },
      { quiz: odiaQuiz2En._id, questionText: "Which festival is celebrated through Odia folk songs?", options: ["Diwali", "Holi", "Raja", "Dussehra"], correctAnswer: 2, marks: 1, explanation: "Raja festival is celebrated with special Odia folk songs and dances." },
      { quiz: odiaQuiz2En._id, questionText: "What is 'Pala' in Odia culture?", options: ["A musical performance", "A type of food", "A festival", "A dance"], correctAnswer: 0, marks: 1, explanation: "Pala is a traditional musical performance in Odia culture that tells stories." },
      { quiz: odiaQuiz2En._id, questionText: "Who is the author of 'Mahabharata' in Odia?", options: ["Sarala Das", "Jagannath Das", "Balaram Das", "Yashodhara Das"], correctAnswer: 0, marks: 1, explanation: "Sarala Das wrote the Odia version of Mahabharata." },
      { quiz: odiaQuiz2En._id, questionText: "What is the meaning of 'Bhajan' in Odia literature?", options: ["Story", "Devotional song", "Drama", "Essay"], correctAnswer: 1, marks: 1, explanation: "Bhajan means devotional song in Odia literature." },
      { quiz: odiaQuiz2En._id, questionText: "Which poet is known for children's literature in Odia?", options: ["Kalindi Charan Panigrahi", "Gopabandhu Das", "Radhanath Ray", "Gangadhar Meher"], correctAnswer: 0, marks: 1, explanation: "Kalindi Charan Panigrahi is famous for his children's literature in Odia." },
      { quiz: odiaQuiz2En._id, questionText: "What is 'Chhanda' in Odia poetry?", options: ["Free verse", "Rhyme scheme", "Story telling", "Character"], correctAnswer: 1, marks: 1, explanation: "Chhanda refers to the rhyme scheme or meter in Odia poetry." },
    ]);

    // Subcategory 3: Writing (English)
    const odiaQuiz3En = await Quiz.create({
      title: "Odia Writing - Letters and Essays",
      subject: "Odia",
      category: "Writing",
      chapter: "Creative Writing",
      grade: 6,
      difficulty: "easy",
      language: "en",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz3En._id, questionText: "What is a 'Patra' (ପତ୍ର) in Odia?", options: ["A story", "A letter", "A poem", "A song"], correctAnswer: 1, marks: 1, explanation: "'Patra' (ପତ୍ର) means a letter in Odia." },
      { quiz: odiaQuiz3En._id, questionText: "What is 'Prabandha' (ପ୍ରବନ୍ଧ) in Odia?", options: ["Letter", "Essay", "Story", "Drama"], correctAnswer: 1, marks: 1, explanation: "'Prabandha' (ପ୍ରବନ୍ଧ) means essay in Odia." },
      { quiz: odiaQuiz3En._id, questionText: "What should be written first in an Odia formal letter?", options: ["Body", "Greeting", "Date and address", "Signature"], correctAnswer: 2, marks: 1, explanation: "In a formal Odia letter, date and address should be written first." },
      { quiz: odiaQuiz3En._id, questionText: "What is 'Purna Biram' (ପୂର୍ଣ୍ଣ ବିରାମ) in Odia?", options: ["Comma", "Question mark", "Full stop", "Exclamation mark"], correctAnswer: 2, marks: 1, explanation: "'Purna Biram' (ପୂର୍ଣ୍ଣ ବିରାମ) means full stop (।) in Odia." },
      { quiz: odiaQuiz3En._id, questionText: "What is the Odia full stop symbol?", options: [".", "।", "?", "!"], correctAnswer: 1, marks: 1, explanation: "The Odia full stop is '।' (called Purna Biram)." },
      { quiz: odiaQuiz3En._id, questionText: "What is 'Anuchhed' (ଅନୁଚ୍ଛେଦ) in Odia writing?", options: ["A word", "A sentence", "A paragraph", "A chapter"], correctAnswer: 2, marks: 1, explanation: "'Anuchhed' (ଅନୁଚ୍ଛେଦ) means paragraph in Odia." },
      { quiz: odiaQuiz3En._id, questionText: "How should a good Odia essay end?", options: ["Abruptly", "With a proper conclusion", "With a question", "With a new topic"], correctAnswer: 1, marks: 1, explanation: "A good essay should end with a proper conclusion summarizing the main points." },
      { quiz: odiaQuiz3En._id, questionText: "What is 'Bakya' (ବାକ୍ୟ) in Odia?", options: ["Word", "Letter", "Sentence", "Paragraph"], correctAnswer: 2, marks: 1, explanation: "'Bakya' (ବାକ୍ୟ) means sentence in Odia." },
      { quiz: odiaQuiz3En._id, questionText: "What makes Odia writing clear and effective?", options: ["Using very long sentences", "Simple and clear language", "Using difficult words", "Writing without punctuation"], correctAnswer: 1, marks: 1, explanation: "Simple and clear language makes Odia writing effective and easy to understand." },
      { quiz: odiaQuiz3En._id, questionText: "What is 'Sambodhan' (ସମ୍ବୋଧନ) in a letter?", options: ["Closing", "Body", "Greeting/Salutation", "Signature"], correctAnswer: 2, marks: 1, explanation: "'Sambodhan' (ସମ୍ବୋଧନ) means greeting or salutation in a letter." },
    ]);

    console.log("✓ Class 6 - Odia (English): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6Odia;
