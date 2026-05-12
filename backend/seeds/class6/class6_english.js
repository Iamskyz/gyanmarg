import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6English = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // English - Subcategory 1: Grammar Basics
    const englishQuiz1 = await Quiz.create({
      title: "Basic Grammar - Nouns and Pronouns",
      subject: "English",
      category: "Grammar",
      chapter: "Parts of Speech",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: englishQuiz1._id,
        questionText: "What is a noun?",
        options: ["An action word", "A describing word", "A naming word", "A joining word"],
        correctAnswer: 2,
        marks: 1,
        explanation: "A noun is a naming word that names a person, place, animal, or thing.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which of these is a proper noun?",
        options: ["boy", "city", "Delhi", "book"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Delhi is a proper noun as it is the name of a specific place and starts with a capital letter.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "What is the plural of 'child'?",
        options: ["childs", "childes", "children", "child"],
        correctAnswer: 2,
        marks: 1,
        explanation: "The plural of 'child' is 'children'. It's an irregular plural form.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which word is a pronoun?",
        options: ["run", "beautiful", "she", "quickly"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'She' is a pronoun as it is used in place of a noun (a girl's or woman's name).",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "What type of noun is 'happiness'?",
        options: ["Common noun", "Proper noun", "Abstract noun", "Collective noun"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'Happiness' is an abstract noun as it names a feeling that cannot be touched or seen.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which is the correct plural of 'mouse'?",
        options: ["mouses", "mice", "mouse", "mousies"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The plural of 'mouse' is 'mice'. It's an irregular plural form.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "What does a pronoun do?",
        options: ["Describes a noun", "Takes the place of a noun", "Shows action", "Joins sentences"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A pronoun takes the place of a noun to avoid repetition.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which of these is a collective noun?",
        options: ["team", "player", "game", "ball"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'Team' is a collective noun as it refers to a group of players.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "What is the possessive form of 'boy'?",
        options: ["boys", "boy's", "boys'", "boyes"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The possessive form of 'boy' is 'boy's' (with an apostrophe and s).",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which pronoun is used for things?",
        options: ["he", "she", "it", "they"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'It' is used as a pronoun for things, animals, and sometimes babies.",
      },
    ]);

    // English - Subcategory 2: Reading Comprehension
    const englishQuiz2 = await Quiz.create({
      title: "Reading and Understanding",
      subject: "English",
      category: "Comprehension",
      chapter: "Reading Skills",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: englishQuiz2._id,
        questionText: "What is the main idea of a paragraph called?",
        options: ["Topic sentence", "Supporting sentence", "Concluding sentence", "Title"],
        correctAnswer: 0,
        marks: 1,
        explanation: "The topic sentence contains the main idea of a paragraph.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "When we read a story, the people in it are called:",
        options: ["Authors", "Characters", "Readers", "Writers"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The people in a story are called characters.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What does 'setting' mean in a story?",
        options: ["The main character", "Where and when the story happens", "The problem in the story", "The ending"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Setting refers to where and when the story takes place.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is a synonym?",
        options: ["Words with opposite meanings", "Words with similar meanings", "Words that rhyme", "Words that sound the same"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Synonyms are words that have similar or the same meanings.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is an antonym of 'happy'?",
        options: ["joyful", "glad", "sad", "cheerful"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'Sad' is an antonym of 'happy' as they have opposite meanings.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What do we call the sequence of events in a story?",
        options: ["Setting", "Characters", "Plot", "Theme"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Plot is the sequence of events that happen in a story.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is the purpose of reading a dictionary?",
        options: ["To find stories", "To find word meanings", "To find pictures", "To find games"],
        correctAnswer: 1,
        marks: 1,
        explanation: "We use a dictionary to find the meanings of words.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is a fact?",
        options: ["Something that is true", "Someone's opinion", "A made-up story", "A question"],
        correctAnswer: 0,
        marks: 1,
        explanation: "A fact is something that is true and can be proven.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is an opinion?",
        options: ["Something that is always true", "What someone thinks or believes", "A proven fact", "A dictionary meaning"],
        correctAnswer: 1,
        marks: 1,
        explanation: "An opinion is what someone thinks or believes, which may differ from person to person.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What should you do when you don't understand a word while reading?",
        options: ["Skip it", "Guess the meaning", "Look it up in a dictionary", "Stop reading"],
        correctAnswer: 2,
        marks: 1,
        explanation: "When you don't understand a word, you should look it up in a dictionary to learn its meaning.",
      },
    ]);

    // English - Subcategory 3: Creative Writing
    const englishQuiz3 = await Quiz.create({
      title: "Writing Skills and Creativity",
      subject: "English",
      category: "Writing",
      chapter: "Creative Expression",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: englishQuiz3._id,
        questionText: "What should every sentence begin with?",
        options: ["A small letter", "A capital letter", "A number", "A symbol"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Every sentence should begin with a capital letter.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What punctuation mark ends a statement?",
        options: ["Question mark (?)", "Exclamation mark (!)", "Period (.)", "Comma (,)"],
        correctAnswer: 2,
        marks: 1,
        explanation: "A period (.) is used to end a statement or declarative sentence.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What type of sentence asks something?",
        options: ["Statement", "Question", "Exclamation", "Command"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A question sentence asks something and ends with a question mark.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "Which punctuation mark is used in a question?",
        options: ["Period (.)", "Question mark (?)", "Exclamation mark (!)", "Comma (,)"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A question mark (?) is used at the end of a question.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What makes writing interesting?",
        options: ["Using the same words", "Using describing words", "Writing very short sentences", "Not using punctuation"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Using describing words (adjectives) makes writing more interesting and vivid.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is the first step in writing a story?",
        options: ["Writing the ending", "Planning or thinking about ideas", "Writing the middle", "Checking spelling"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Planning or thinking about ideas is the first step before writing a story.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What should you do after writing?",
        options: ["Throw it away", "Read and check for mistakes", "Never read it again", "Give it to someone immediately"],
        correctAnswer: 1,
        marks: 1,
        explanation: "After writing, you should read and check for mistakes to improve your work.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is a paragraph?",
        options: ["One sentence", "A group of sentences about one main idea", "A single word", "A question"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A paragraph is a group of sentences that are all about one main idea.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What should you use to separate items in a list?",
        options: ["Periods", "Question marks", "Commas", "Exclamation marks"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Commas are used to separate items in a list.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What makes a good story beginning?",
        options: ["Starting with 'The End'", "Something interesting that grabs attention", "A very long sentence", "Listing all characters"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A good story beginning should be interesting and grab the reader's attention.",
      },
    ]);

    console.log("✓ Class 6 - English: 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6English;
