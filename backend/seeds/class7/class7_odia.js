import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7Odia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar
    const odiaQuiz1 = await Quiz.create({
      title: "Odia Grammar - Verbs and Sentences",
      subject: "Odia",
      category: "Grammar",
      chapter: "Verbs and Sentences",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1._id, questionText: "What is a 'Kriya Pada' (କ୍ରିୟା ପଦ) in Odia?", options: ["Noun", "Verb", "Adjective", "Adverb"], correctAnswer: 1, marks: 1, explanation: "'Kriya Pada' means verb in Odia grammar - a word that shows action." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Bakya' (ବାକ୍ୟ) in Odia?", options: ["Word", "Letter", "Sentence", "Paragraph"], correctAnswer: 2, marks: 1, explanation: "'Bakya' means sentence - a group of words that gives complete meaning." },
      { quiz: odiaQuiz1._id, questionText: "How many types of sentences are there in Odia?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "There are 4 types: Declarative, Interrogative, Imperative, and Exclamatory." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Bisheshan' (ବିଶେଷଣ) in Odia?", options: ["Noun", "Verb", "Adjective", "Pronoun"], correctAnswer: 2, marks: 1, explanation: "'Bisheshan' means adjective - a word that describes a noun." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Sandhi' (ସନ୍ଧି) in Odia grammar?", options: ["Separation of words", "Joining of two sounds/letters", "Plural form", "Tense change"], correctAnswer: 1, marks: 1, explanation: "'Sandhi' is the joining of two sounds or letters when words come together." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Karta' (କର୍ତ୍ତା) in a sentence?", options: ["Object", "Subject", "Verb", "Adjective"], correctAnswer: 1, marks: 1, explanation: "'Karta' means subject - the doer of the action in a sentence." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Karma' (କର୍ମ) in a sentence?", options: ["Subject", "Object", "Verb", "Adverb"], correctAnswer: 1, marks: 1, explanation: "'Karma' means object - the thing on which the action is performed." },
      { quiz: odiaQuiz1._id, questionText: "What is the correct sentence order in Odia?", options: ["Subject-Verb-Object", "Subject-Object-Verb", "Verb-Subject-Object", "Object-Subject-Verb"], correctAnswer: 1, marks: 1, explanation: "Odia follows Subject-Object-Verb (SOV) order. Example: ରାମ ଫଳ ଖାଏ (Ram fruit eats)." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Bibhakti' (ବିଭକ୍ତି) in Odia?", options: ["Prefix", "Case marker/Postposition", "Suffix", "Conjunction"], correctAnswer: 1, marks: 1, explanation: "'Bibhakti' are case markers or postpositions that show the relationship between words." },
      { quiz: odiaQuiz1._id, questionText: "How many 'Bibhakti' (cases) are there in Odia?", options: ["5", "6", "7", "8"], correctAnswer: 2, marks: 1, explanation: "There are 7 Bibhakti (cases) in Odia grammar." },
    ]);

    // Subcategory 2: Literature
    const odiaQuiz2 = await Quiz.create({
      title: "Odia Literature - Poets and Works",
      subject: "Odia",
      category: "Literature",
      chapter: "Poets and Works",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2._id, questionText: "Who is called 'Byasa Kabi' of Odia literature?", options: ["Fakir Mohan", "Sarala Das", "Jagannath Das", "Upendra Bhanja"], correctAnswer: 1, marks: 1, explanation: "Sarala Das is called 'Byasa Kabi' for writing the Odia Mahabharata." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Bandi ra Atma Katha'?", options: ["Fakir Mohan Senapati", "Gopabandhu Das", "Radhanath Ray", "Madhusudan Das"], correctAnswer: 1, marks: 1, explanation: "Gopabandhu Das wrote 'Bandi ra Atma Katha' (Autobiography of a Prisoner)." },
      { quiz: odiaQuiz2._id, questionText: "Who is known as 'Utkala Mani'?", options: ["Fakir Mohan", "Gopabandhu Das", "Madhusudan Rao", "Radhanath Ray"], correctAnswer: 1, marks: 1, explanation: "Gopabandhu Das is known as 'Utkala Mani' for his service to Odisha." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Lachma' novel?", options: ["Fakir Mohan Senapati", "Kalindi Charan", "Gopinath Mohanty", "Surendra Mohanty"], correctAnswer: 0, marks: 1, explanation: "Fakir Mohan Senapati wrote the novel 'Lachma'." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Champu' in Odia literature?", options: ["Only poetry", "Only prose", "Mix of poetry and prose", "Drama"], correctAnswer: 2, marks: 1, explanation: "'Champu' is a literary form that combines both poetry and prose." },
      { quiz: odiaQuiz2._id, questionText: "Who is called 'Kabi Samrat' in Odia?", options: ["Radhanath Ray", "Upendra Bhanja", "Gangadhar Meher", "Gopabandhu Das"], correctAnswer: 1, marks: 1, explanation: "Upendra Bhanja is called 'Kabi Samrat' (Emperor of Poets) in Odia literature." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Panchasakha' in Odia literature?", options: ["Five rivers", "Five poets of Bhakti era", "Five books", "Five languages"], correctAnswer: 1, marks: 1, explanation: "'Panchasakha' refers to five famous poets of the Bhakti era in Odia literature." },
      { quiz: odiaQuiz2._id, questionText: "Who among these is NOT a Panchasakha poet?", options: ["Balaram Das", "Jagannath Das", "Achyutananda Das", "Fakir Mohan Senapati"], correctAnswer: 3, marks: 1, explanation: "Fakir Mohan Senapati belongs to modern era, not the Panchasakha group." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Utkal Dibasa' celebrated for?", options: ["Independence", "Formation of Odisha state", "New Year", "Harvest festival"], correctAnswer: 1, marks: 1, explanation: "'Utkal Dibasa' (April 1) celebrates the formation of Odisha as a separate state in 1936." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Padma Purana' in Odia?", options: ["Sarala Das", "Jagannath Das", "Balaram Das", "Achyutananda Das"], correctAnswer: 2, marks: 1, explanation: "Balaram Das wrote the Odia 'Padma Purana'." },
    ]);

    // Subcategory 3: Writing
    const odiaQuiz3 = await Quiz.create({
      title: "Odia Writing - Composition and Letter",
      subject: "Odia",
      category: "Writing",
      chapter: "Creative Writing",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz3._id, questionText: "What is 'Rachana' (ରଚନା) in Odia?", options: ["Letter", "Essay/Composition", "Story", "Poem"], correctAnswer: 1, marks: 1, explanation: "'Rachana' means essay or composition in Odia." },
      { quiz: odiaQuiz3._id, questionText: "How many parts does an Odia essay have?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "An Odia essay has 3 parts: Bhumika (Introduction), Bishaya Bistara (Body), Upasanhara (Conclusion)." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Abedan Patra' (ଆବେଦନ ପତ୍ର)?", options: ["Informal letter", "Application letter", "Love letter", "Invitation"], correctAnswer: 1, marks: 1, explanation: "'Abedan Patra' is an application or formal request letter." },
      { quiz: odiaQuiz3._id, questionText: "What should be written first in a formal Odia letter?", options: ["Body", "Subject", "Date and Receiver's address", "Signature"], correctAnswer: 2, marks: 1, explanation: "In a formal Odia letter, date and receiver's address come first." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Sampadak ku Patra' (ସମ୍ପାଦକଙ୍କୁ ପତ୍ର)?", options: ["Letter to friend", "Letter to editor", "Letter to teacher", "Letter to father"], correctAnswer: 1, marks: 1, explanation: "'Sampadak ku Patra' means letter to the editor of a newspaper." },
      { quiz: odiaQuiz3._id, questionText: "What is important in 'Suchana Lekhan' (ସୂଚନା ଲେଖନ)?", options: ["Only date", "What, When, Where, Who information", "Only name", "Only place"], correctAnswer: 1, marks: 1, explanation: "A notice must clearly state What, When, Where, and Who." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Galpa Lekhan' (ଗଳ୍ପ ଲେଖନ)?", options: ["Essay writing", "Story writing", "Letter writing", "Poem writing"], correctAnswer: 1, marks: 1, explanation: "'Galpa Lekhan' means story writing in Odia." },
      { quiz: odiaQuiz3._id, questionText: "What makes a good Odia paragraph?", options: ["Many topics mixed", "One main idea with supporting sentences", "Only one sentence", "No punctuation"], correctAnswer: 1, marks: 1, explanation: "A good paragraph has one main idea supported by related sentences." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Sambad Lekhan' (ସଂବାଦ ଲେଖନ)?", options: ["News writing", "Dialogue writing", "Essay writing", "Story writing"], correctAnswer: 1, marks: 1, explanation: "'Sambad Lekhan' means dialogue writing between two or more people." },
      { quiz: odiaQuiz3._id, questionText: "What closing is used in a formal Odia letter?", options: ["ତୁମର ମିତ୍ର", "ଇତି ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ", "ବାଇ", "ହେଲୋ"], correctAnswer: 1, marks: 1, explanation: "'ଇତି ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ' (Yours faithfully) is used in formal Odia letters." },
    ]);

    console.log("✓ Class 7 - Odia (English): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7Odia;
