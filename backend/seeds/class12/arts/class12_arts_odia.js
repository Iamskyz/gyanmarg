import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Odia Prose - Class 12",
      subject: "Odia",
      category: "Literature",
      chapter: "Prose",
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
      { quiz: quiz1._id, questionText: "Who is called the father of modern Odia literature?", options: ["Sarala Das", "Fakir Mohan Senapati", "Radhanath Ray", "Gangadhar Meher"], correctAnswer: 1, marks: 1, explanation: "Fakir Mohan pioneered modern Odia prose and novel." },
      { quiz: quiz1._id, questionText: "'Chha Mana Atha Guntha' is written by?", options: ["Gopinath Mohanty", "Fakir Mohan Senapati", "Manoj Das", "Pratibha Ray"], correctAnswer: 1, marks: 1, explanation: "It exposes exploitation of poor peasants by landlords." },
      { quiz: quiz1._id, questionText: "Gopinath Mohanty received Jnanpith for?", options: ["Paraja", "Mati Matala", "Amrutara Santana", "Dadi Budha"], correctAnswer: 1, marks: 1, explanation: "He received Jnanpith Award in 1973 for Mati Matala." },
      { quiz: quiz1._id, questionText: "'Yajnaseni' is a novel by?", options: ["Gopinath Mohanty", "Pratibha Ray", "Manoj Das", "Surendra Mohanty"], correctAnswer: 1, marks: 1, explanation: "Pratibha Ray retells Mahabharata from Draupadi's perspective." },
      { quiz: quiz1._id, questionText: "The first Odia newspaper was?", options: ["Samaja", "Utkal Deepika", "Prajatantra", "Dharitri"], correctAnswer: 1, marks: 1, explanation: "Utkal Deepika was published in 1866." },
      { quiz: quiz1._id, questionText: "Manoj Das writes in which languages?", options: ["Only Odia", "Odia and English", "Only English", "Hindi and Odia"], correctAnswer: 1, marks: 1, explanation: "He is a bilingual author acclaimed in both languages." },
      { quiz: quiz1._id, questionText: "The Panchasakha era belongs to which century?", options: ["13th", "15th-16th", "18th", "20th"], correctAnswer: 1, marks: 1, explanation: "Five saint-poets who enriched Odia literature in 15th-16th century." },
      { quiz: quiz1._id, questionText: "Who wrote 'Paraja'?", options: ["Fakir Mohan", "Gopinath Mohanty", "Pratibha Ray", "Manoj Das"], correctAnswer: 1, marks: 1, explanation: "Gopinath Mohanty's novel about tribal exploitation." },
      { quiz: quiz1._id, questionText: "Odia received Classical Language status in?", options: ["2010", "2014", "2016", "2018"], correctAnswer: 1, marks: 1, explanation: "Declared in 2014 as the 6th Classical Language of India." },
      { quiz: quiz1._id, questionText: "Who is known as 'Kabi Samrat' in Odia literature?", options: ["Radhanath Ray", "Upendra Bhanja", "Gangadhar Meher", "Gopabandhu Das"], correctAnswer: 1, marks: 1, explanation: "Upendra Bhanja is called Kabi Samrat for his ornate poetry." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Odia Poetry - Class 12",
      subject: "Odia",
      category: "Literature",
      chapter: "Poetry",
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
      { quiz: quiz2._id, questionText: "Sachidananda Routray received Jnanpith in?", options: ["1980", "1986", "1990", "2000"], correctAnswer: 1, marks: 1, explanation: "He received it in 1986 for his poetry contributions." },
      { quiz: quiz2._id, questionText: "'Chilika' poem was written by?", options: ["Gangadhar Meher", "Radhanath Ray", "Gopabandhu Das", "Sachidananda Routray"], correctAnswer: 1, marks: 1, explanation: "Radhanath Ray wrote this famous nature poem." },
      { quiz: quiz2._id, questionText: "Gopabandhu Das is known as?", options: ["Kabi Samrat", "Utkalamani", "Byasakabi", "Swabhaba Kabi"], correctAnswer: 1, marks: 1, explanation: "He is called Utkalamani for his service to Odisha." },
      { quiz: quiz2._id, questionText: "The Sabuja movement was influenced by?", options: ["Marxism", "English Romantic poetry", "French Revolution", "Russian literature"], correctAnswer: 1, marks: 1, explanation: "It drew inspiration from English Romantic poets." },
      { quiz: quiz2._id, questionText: "Bhima Bhoi is associated with?", options: ["Sabuja movement", "Mahima Dharma", "Progressive movement", "Romantic movement"], correctAnswer: 1, marks: 1, explanation: "He was a saint-poet of the Mahima Dharma movement." },
      { quiz: quiz2._id, questionText: "Gangadhar Meher is called?", options: ["Utkalamani", "Swabhaba Kabi", "Kabi Samrat", "Byasakabi"], correctAnswer: 1, marks: 1, explanation: "His natural poetic talent earned him the title Swabhaba Kabi." },
      { quiz: quiz2._id, questionText: "Jayanta Mahapatra writes poetry in?", options: ["Odia", "English", "Hindi", "Bengali"], correctAnswer: 1, marks: 1, explanation: "He is a renowned Indian English poet from Odisha." },
      { quiz: quiz2._id, questionText: "'Kedar Gauri' was written by?", options: ["Radhanath Ray", "Gangadhar Meher", "Upendra Bhanja", "Sachidananda Routray"], correctAnswer: 1, marks: 1, explanation: "Gangadhar Meher's famous narrative poem." },
      { quiz: quiz2._id, questionText: "Odia Bhagabata was written by?", options: ["Sarala Das", "Jagannath Das", "Balaram Das", "Achyutananda Das"], correctAnswer: 1, marks: 1, explanation: "Jagannath Das translated Bhagavata Purana into Odia." },
      { quiz: quiz2._id, questionText: "Sitakant Mahapatra's poetry is known for?", options: ["Only humor", "Tribal life and existentialism", "Only romance", "Political satire"], correctAnswer: 1, marks: 1, explanation: "He explored tribal culture and philosophical themes." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Odia Grammar and Composition - Class 12",
      subject: "Odia",
      category: "Grammar",
      chapter: "Advanced Grammar",
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
      { quiz: quiz3._id, questionText: "How many vowels are in the Odia script?", options: ["10", "12", "14", "16"], correctAnswer: 2, marks: 1, explanation: "Odia script has 14 vowels." },
      { quiz: quiz3._id, questionText: "'Sandhi' means?", options: ["Separation", "Joining of two sounds", "Plural form", "Verb form"], correctAnswer: 1, marks: 1, explanation: "Sandhi is the phonetic joining of two sounds or words." },
      { quiz: quiz3._id, questionText: "'Samasa' refers to?", options: ["Verb conjugation", "Compound word formation", "Sentence type", "Punctuation"], correctAnswer: 1, marks: 1, explanation: "Samasa combines two or more words into one." },
      { quiz: quiz3._id, questionText: "How many consonants are in Odia?", options: ["25", "33", "36", "40"], correctAnswer: 2, marks: 1, explanation: "Odia has 36 consonants." },
      { quiz: quiz3._id, questionText: "'Upama' alankar is equivalent to?", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Upama compares using 'like' or 'as'." },
      { quiz: quiz3._id, questionText: "'Rupak' alankar is equivalent to?", options: ["Simile", "Metaphor", "Alliteration", "Irony"], correctAnswer: 1, marks: 1, explanation: "Rupak makes a direct identification between two things." },
      { quiz: quiz3._id, questionText: "Odia script evolved from?", options: ["Devanagari", "Brahmi", "Kharosthi", "Tamil"], correctAnswer: 1, marks: 1, explanation: "Odia script evolved from ancient Brahmi script." },
      { quiz: quiz3._id, questionText: "'Karaka' indicates?", options: ["Tense", "Relationship between noun and verb", "Gender", "Number"], correctAnswer: 1, marks: 1, explanation: "Karaka shows the role of noun/pronoun in relation to verb." },
      { quiz: quiz3._id, questionText: "'Prabandha' means?", options: ["Poetry", "Essay", "Novel", "Drama"], correctAnswer: 1, marks: 1, explanation: "Prabandha is a prose composition on a specific topic." },
      { quiz: quiz3._id, questionText: "'Atishayokti' alankar is?", options: ["Simile", "Hyperbole", "Metaphor", "Irony"], correctAnswer: 1, marks: 1, explanation: "Atishayokti means exaggeration for literary effect." },
    ]);

    console.log("✓ Class 12 Arts - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsOdia };
