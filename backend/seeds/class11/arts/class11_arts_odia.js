import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Odia Literature - Prose",
      subject: "Odia",
      category: "Literature",
      chapter: "Prose",
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
      { quiz: quiz1._id, questionText: "Who is known as 'Vyasa Kabi' in Odia literature?", options: ["Sarala Das", "Fakir Mohan Senapati", "Radhanath Ray", "Gangadhar Meher"], correctAnswer: 0, marks: 1, explanation: "Sarala Das is called 'Vyasa Kabi' for writing the Odia Mahabharata." },
      { quiz: quiz1._id, questionText: "Who wrote 'Chha Mana Atha Guntha'?", options: ["Gopinath Mohanty", "Fakir Mohan Senapati", "Kalindi Charan Panigrahi", "Manoj Das"], correctAnswer: 1, marks: 1, explanation: "Fakir Mohan Senapati wrote this pioneering realistic novel about land exploitation." },
      { quiz: quiz1._id, questionText: "Fakir Mohan Senapati is called:", options: ["Kabi Samrat", "Father of Modern Odia Literature", "Vyasa Kabi", "Rasa Kabi"], correctAnswer: 1, marks: 1, explanation: "Fakir Mohan Senapati is regarded as the father of modern Odia prose and fiction." },
      { quiz: quiz1._id, questionText: "The first Odia novel is:", options: ["Chha Mana Atha Guntha", "Lachhama", "Saudamini", "Mamu"], correctAnswer: 2, marks: 1, explanation: "Saudamini (1878) by Ramashankar Ray is considered the first Odia novel." },
      { quiz: quiz1._id, questionText: "Who wrote 'Paraja'?", options: ["Fakir Mohan Senapati", "Gopinath Mohanty", "Manoj Das", "Surendra Mohanty"], correctAnswer: 1, marks: 1, explanation: "Gopinath Mohanty wrote 'Paraja', depicting tribal life in Odisha." },
      { quiz: quiz1._id, questionText: "'Utkal Dipika' was the first Odia:", options: ["Novel", "Newspaper", "Poetry collection", "Drama"], correctAnswer: 1, marks: 1, explanation: "Utkal Dipika (1866) was the first Odia newspaper, edited by Gaurishankar Ray." },
      { quiz: quiz1._id, questionText: "The Odia language got classical language status in:", options: ["2010", "2014", "2016", "2018"], correctAnswer: 1, marks: 1, explanation: "Odia was declared a classical language of India in 2014." },
      { quiz: quiz1._id, questionText: "Who is known as 'Kabi Samrat' in Odia literature?", options: ["Radhanath Ray", "Upendra Bhanja", "Gangadhar Meher", "Madhusudan Rao"], correctAnswer: 1, marks: 1, explanation: "Upendra Bhanja is known as 'Kabi Samrat' (Emperor of Poets) in Odia literature." },
      { quiz: quiz1._id, questionText: "The Odia short story tradition was started by:", options: ["Gopinath Mohanty", "Fakir Mohan Senapati", "Godabarish Mishra", "Kalindi Charan Panigrahi"], correctAnswer: 1, marks: 1, explanation: "Fakir Mohan Senapati pioneered the Odia short story form." },
      { quiz: quiz1._id, questionText: "'Matira Manisha' was written by:", options: ["Gopinath Mohanty", "Kalindi Charan Panigrahi", "Surendra Mohanty", "Manoj Das"], correctAnswer: 1, marks: 1, explanation: "Kalindi Charan Panigrahi wrote 'Matira Manisha' about rural Odisha life." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Odia Literature - Poetry",
      subject: "Odia",
      category: "Literature",
      chapter: "Poetry",
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
      { quiz: quiz2._id, questionText: "Who wrote 'Kedar Gouri'?", options: ["Radhanath Ray", "Madhusudan Rao", "Gangadhar Meher", "Nandakishore Bal"], correctAnswer: 2, marks: 1, explanation: "Gangadhar Meher wrote the epic poem 'Kedar Gouri'." },
      { quiz: quiz2._id, questionText: "Radhanath Ray is famous for which type of poetry?", options: ["Devotional", "Nature and descriptive poetry", "Political", "Satirical"], correctAnswer: 1, marks: 1, explanation: "Radhanath Ray is known for his nature poetry and descriptive long poems." },
      { quiz: quiz2._id, questionText: "'Chilika' is a famous poem by:", options: ["Gangadhar Meher", "Radhanath Ray", "Madhusudan Rao", "Gopabandhu Das"], correctAnswer: 1, marks: 1, explanation: "Radhanath Ray wrote 'Chilika', a descriptive poem about Chilika Lake." },
      { quiz: quiz2._id, questionText: "Who is called 'Swabhaba Kabi'?", options: ["Radhanath Ray", "Gangadhar Meher", "Gopabandhu Das", "Madhusudan Rao"], correctAnswer: 1, marks: 1, explanation: "Gangadhar Meher is called 'Swabhaba Kabi' (Natural Poet) for his spontaneous style." },
      { quiz: quiz2._id, questionText: "The 'Panchasakha' poets belonged to which century?", options: ["13th-14th", "15th-16th", "17th-18th", "19th-20th"], correctAnswer: 1, marks: 1, explanation: "The five Panchasakha poets flourished in the 15th-16th century." },
      { quiz: quiz2._id, questionText: "Which is NOT a Panchasakha poet?", options: ["Achyutananda Das", "Jagannath Das", "Sarala Das", "Balaram Das"], correctAnswer: 2, marks: 1, explanation: "Sarala Das preceded the Panchasakha era. The five are Achyutananda, Jagannath, Balaram, Ananta, and Jasovanta." },
      { quiz: quiz2._id, questionText: "'Bhagabata' in Odia was written by:", options: ["Sarala Das", "Jagannath Das", "Achyutananda Das", "Balaram Das"], correctAnswer: 1, marks: 1, explanation: "Jagannath Das wrote the Odia Bhagabata, widely read in Odia households." },
      { quiz: quiz2._id, questionText: "Gopabandhu Das is known as:", options: ["Kabi Samrat", "Utkalmani", "Vyasa Kabi", "Rasa Kabi"], correctAnswer: 1, marks: 1, explanation: "Gopabandhu Das is called 'Utkalmani' (Jewel of Utkal) for his service to Odisha." },
      { quiz: quiz2._id, questionText: "'Banaphula' is a poem by:", options: ["Gopabandhu Das", "Sachi Routray", "Radhanath Ray", "Gangadhar Meher"], correctAnswer: 0, marks: 1, explanation: "Gopabandhu Das wrote 'Banaphula' expressing love for nature and motherland." },
      { quiz: quiz2._id, questionText: "Sachi Routray received the Jnanpith Award for:", options: ["Novel writing", "Poetry", "Drama", "Short stories"], correctAnswer: 1, marks: 1, explanation: "Sachi Routray received the Jnanpith Award (1986) for his contribution to Odia poetry." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Odia Grammar and Composition",
      subject: "Odia",
      category: "Grammar",
      chapter: "Grammar and Writing",
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
      { quiz: quiz3._id, questionText: "How many vowels (swara) are there in Odia script?", options: ["10", "12", "14", "16"], correctAnswer: 2, marks: 1, explanation: "Odia script has 14 vowels (swaras)." },
      { quiz: quiz3._id, questionText: "A 'Sandhi' in Odia grammar means:", options: ["Separation of words", "Joining of two sounds/words", "Plural form", "Verb conjugation"], correctAnswer: 1, marks: 1, explanation: "Sandhi is the joining or combination of two sounds or words following phonetic rules." },
      { quiz: quiz3._id, questionText: "'Samasa' in Odia grammar refers to:", options: ["Verb forms", "Compound words", "Sentence types", "Punctuation"], correctAnswer: 1, marks: 1, explanation: "Samasa is the formation of compound words by combining two or more words." },
      { quiz: quiz3._id, questionText: "How many consonants (byanjana) are in Odia?", options: ["25", "33", "36", "40"], correctAnswer: 2, marks: 1, explanation: "Odia has 36 consonants (byanjanas) in its script." },
      { quiz: quiz3._id, questionText: "'Alankar' in Odia literature means:", options: ["Decoration", "Figure of speech/literary ornament", "Grammar rule", "Punctuation"], correctAnswer: 1, marks: 1, explanation: "Alankar refers to figures of speech that beautify literary expression." },
      { quiz: quiz3._id, questionText: "'Upama' alankar is equivalent to:", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Upama is a simile — comparison using 'like' or 'as' (pari, bhali, etc.)." },
      { quiz: quiz3._id, questionText: "'Rupaka' alankar is equivalent to:", options: ["Simile", "Metaphor", "Alliteration", "Irony"], correctAnswer: 1, marks: 1, explanation: "Rupaka is a metaphor — direct comparison without using 'like' or 'as'." },
      { quiz: quiz3._id, questionText: "A 'Prabandha' in Odia is:", options: ["A poem", "An essay", "A novel", "A drama"], correctAnswer: 1, marks: 1, explanation: "Prabandha means essay — a prose composition on a specific topic." },
      { quiz: quiz3._id, questionText: "'Karak' in Odia grammar refers to:", options: ["Tense", "Case (relation of noun to verb)", "Gender", "Number"], correctAnswer: 1, marks: 1, explanation: "Karak (case) shows the relationship between a noun/pronoun and the verb in a sentence." },
      { quiz: quiz3._id, questionText: "The Odia script evolved from which ancient script?", options: ["Devanagari", "Brahmi", "Kharosthi", "Tamil"], correctAnswer: 1, marks: 1, explanation: "Odia script evolved from the ancient Brahmi script through Kalinga script." },
    ]);

    console.log("✓ Class 11 Arts - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsOdia };
