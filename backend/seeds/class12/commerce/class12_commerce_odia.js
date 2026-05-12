import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Odia Prose - Class 12",
      subject: "Odia",
      category: "Literature",
      chapter: "Prose",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Who is known as 'Byasakabi' in Odia literature?", options: ["Sarala Das", "Fakir Mohan Senapati", "Radhanath Ray", "Gangadhar Meher"], correctAnswer: 0, marks: 1, explanation: "Sarala Das wrote the Odia Mahabharata in the 15th century." },
      { quiz: quiz1._id, questionText: "Gopinath Mohanty's Jnanpith Award-winning work is:", options: ["Paraja", "Mati Matala", "Chha Mana Atha Guntha", "Amrutara Santana"], correctAnswer: 1, marks: 1, explanation: "He received the Jnanpith Award in 1973 for 'Mati Matala'." },
      { quiz: quiz1._id, questionText: "Who wrote 'Yajnaseni'?", options: ["Gopinath Mohanty", "Pratibha Ray", "Manoj Das", "Fakir Mohan"], correctAnswer: 1, marks: 1, explanation: "Pratibha Ray wrote 'Yajnaseni' based on Draupadi's perspective." },
      { quiz: quiz1._id, questionText: "The first Odia newspaper was:", options: ["Samaj", "Utkal Dipika", "Prajatantra", "Dharitri"], correctAnswer: 1, marks: 1, explanation: "Utkal Dipika (1866) was the first Odia newspaper." },
      { quiz: quiz1._id, questionText: "Fakir Mohan Senapati is called:", options: ["Kabi Samrat", "Father of Modern Odia Literature", "Utkalmani", "Swabhaba Kabi"], correctAnswer: 1, marks: 1, explanation: "He pioneered modern Odia prose, novel, and short story." },
      { quiz: quiz1._id, questionText: "'Chha Mana Atha Guntha' deals with:", options: ["Love story", "Land exploitation of poor farmers", "War", "Travel"], correctAnswer: 1, marks: 1, explanation: "The novel exposes how landlords exploit poor farmers for their land." },
      { quiz: quiz1._id, questionText: "Odia got classical language status in:", options: ["2010", "2014", "2016", "2018"], correctAnswer: 1, marks: 1, explanation: "Odia was declared a classical language in 2014." },
      { quiz: quiz1._id, questionText: "Who is 'Kabi Samrat' in Odia literature?", options: ["Radhanath Ray", "Upendra Bhanja", "Gangadhar Meher", "Gopabandhu Das"], correctAnswer: 1, marks: 1, explanation: "Upendra Bhanja is known as 'Kabi Samrat' (Emperor of Poets)." },
      { quiz: quiz1._id, questionText: "Manoj Das writes in:", options: ["Only Odia", "Both Odia and English", "Only English", "Hindi"], correctAnswer: 1, marks: 1, explanation: "Manoj Das is a bilingual author writing in both Odia and English." },
      { quiz: quiz1._id, questionText: "The Panchasakha era belongs to:", options: ["13th century", "15th-16th century", "18th century", "20th century"], correctAnswer: 1, marks: 1, explanation: "The five Panchasakha poets flourished in the 15th-16th century." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Odia Poetry - Class 12",
      subject: "Odia",
      category: "Literature",
      chapter: "Poetry",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Sachi Routray received Jnanpith Award in:", options: ["1980", "1986", "1990", "2000"], correctAnswer: 1, marks: 1, explanation: "Sachi Routray received the Jnanpith Award in 1986 for Odia poetry." },
      { quiz: quiz2._id, questionText: "Sitakant Mahapatra's poetry is known for:", options: ["Only humor", "Tribal themes and philosophical depth", "Only romance", "Political satire"], correctAnswer: 1, marks: 1, explanation: "Sitakant Mahapatra explores tribal culture and existential themes." },
      { quiz: quiz2._id, questionText: "'Chilika' poem was written by:", options: ["Gangadhar Meher", "Radhanath Ray", "Gopabandhu Das", "Sachi Routray"], correctAnswer: 1, marks: 1, explanation: "Radhanath Ray wrote the descriptive poem 'Chilika' about the famous lake." },
      { quiz: quiz2._id, questionText: "Gopabandhu Das is known as:", options: ["Kabi Samrat", "Utkalmani", "Byasakabi", "Swabhaba Kabi"], correctAnswer: 1, marks: 1, explanation: "Gopabandhu Das is called 'Utkalmani' (Jewel of Utkal)." },
      { quiz: quiz2._id, questionText: "The Sabuja (Green) movement was inspired by:", options: ["Marxism", "English Romantic poetry", "French Revolution", "Russian literature"], correctAnswer: 1, marks: 1, explanation: "The Sabuja movement drew inspiration from English Romantic poets." },
      { quiz: quiz2._id, questionText: "Bhima Bhoi was associated with:", options: ["Sabuja movement", "Mahima Dharma", "Progressive movement", "Romantic era"], correctAnswer: 1, marks: 1, explanation: "Bhima Bhoi was a saint-poet of the Mahima Dharma movement." },
      { quiz: quiz2._id, questionText: "Gangadhar Meher is called:", options: ["Utkalmani", "Swabhaba Kabi", "Kabi Samrat", "Byasakabi"], correctAnswer: 1, marks: 1, explanation: "Gangadhar Meher is known as 'Swabhaba Kabi' (Natural Poet)." },
      { quiz: quiz2._id, questionText: "Jayanta Mahapatra writes poetry in:", options: ["Odia", "English", "Hindi", "Bengali"], correctAnswer: 1, marks: 1, explanation: "Jayanta Mahapatra is a renowned Indian English poet from Odisha." },
      { quiz: quiz2._id, questionText: "'Kedar Gouri' is an epic poem by:", options: ["Radhanath Ray", "Gangadhar Meher", "Upendra Bhanja", "Sachi Routray"], correctAnswer: 1, marks: 1, explanation: "Gangadhar Meher wrote the epic poem 'Kedar Gouri'." },
      { quiz: quiz2._id, questionText: "The Odia Bhagabata was written by:", options: ["Sarala Das", "Jagannath Das", "Balaram Das", "Achyutananda Das"], correctAnswer: 1, marks: 1, explanation: "Jagannath Das wrote the Odia Bhagabata, widely read in Odia households." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Odia Grammar - Class 12",
      subject: "Odia",
      category: "Grammar",
      chapter: "Advanced Grammar",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "How many vowels are in Odia script?", options: ["10", "12", "14", "16"], correctAnswer: 2, marks: 1, explanation: "Odia script has 14 vowels (swaras)." },
      { quiz: quiz3._id, questionText: "'Sandhi' means:", options: ["Separation", "Joining of two sounds/words", "Plural", "Verb form"], correctAnswer: 1, marks: 1, explanation: "Sandhi is the phonetic joining of two sounds or words." },
      { quiz: quiz3._id, questionText: "'Samasa' refers to:", options: ["Verb conjugation", "Compound word formation", "Sentence type", "Punctuation"], correctAnswer: 1, marks: 1, explanation: "Samasa combines two or more words into a compound word." },
      { quiz: quiz3._id, questionText: "'Upama' alankar is:", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Upama is simile — comparison using 'like' or 'as'." },
      { quiz: quiz3._id, questionText: "'Rupaka' alankar is:", options: ["Simile", "Metaphor", "Alliteration", "Irony"], correctAnswer: 1, marks: 1, explanation: "Rupaka is metaphor — direct identification without 'like'." },
      { quiz: quiz3._id, questionText: "How many consonants are in Odia?", options: ["25", "33", "36", "40"], correctAnswer: 2, marks: 1, explanation: "Odia has 36 consonants (byanjanas)." },
      { quiz: quiz3._id, questionText: "'Prabandha' means:", options: ["Poem", "Essay", "Novel", "Drama"], correctAnswer: 1, marks: 1, explanation: "Prabandha is an essay — prose composition on a topic." },
      { quiz: quiz3._id, questionText: "Odia script evolved from:", options: ["Devanagari", "Brahmi", "Kharosthi", "Tamil"], correctAnswer: 1, marks: 1, explanation: "Odia script evolved from ancient Brahmi through Kalinga script." },
      { quiz: quiz3._id, questionText: "'Karak' in grammar refers to:", options: ["Tense", "Case (noun-verb relation)", "Gender", "Number"], correctAnswer: 1, marks: 1, explanation: "Karak shows the relationship between noun/pronoun and verb." },
      { quiz: quiz3._id, questionText: "'Atisayokti' alankar means:", options: ["Simile", "Hyperbole", "Metaphor", "Irony"], correctAnswer: 1, marks: 1, explanation: "Atisayokti is hyperbole — deliberate exaggeration." },
    ]);

    console.log("✓ Class 12 Commerce - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceOdia };
