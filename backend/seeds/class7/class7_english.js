import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7English = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Tenses
    const englishQuiz1 = await Quiz.create({
      title: "Tenses - Past, Present and Future",
      subject: "English",
      category: "Grammar",
      chapter: "Tenses",
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
        quiz: englishQuiz1._id,
        questionText: "Which sentence is in Simple Present Tense?",
        options: ["She went to school.", "She goes to school.", "She will go to school.", "She is going to school."],
        correctAnswer: 1,
        marks: 1,
        explanation: "'She goes to school' is Simple Present Tense as it describes a habitual action.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "What is the past tense of 'write'?",
        options: ["writed", "wrote", "written", "writing"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The past tense of 'write' is 'wrote'. It is an irregular verb.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Identify the tense: 'They have finished their homework.'",
        options: ["Simple Past", "Present Perfect", "Past Perfect", "Simple Present"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'Have finished' is Present Perfect Tense (have/has + past participle).",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which is the correct future tense of 'I ___ there tomorrow'?",
        options: ["go", "went", "will go", "going"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'Will go' is the Simple Future Tense used for actions that will happen.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "What is the Present Continuous form of 'read'?",
        options: ["reads", "read", "is reading", "has read"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Present Continuous is formed with is/am/are + verb-ing. 'Is reading' is correct.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Choose the correct sentence in Past Continuous Tense:",
        options: ["He was playing cricket.", "He played cricket.", "He plays cricket.", "He has played cricket."],
        correctAnswer: 0,
        marks: 1,
        explanation: "'Was playing' is Past Continuous (was/were + verb-ing) showing ongoing past action.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "What is the past participle of 'go'?",
        options: ["went", "gone", "going", "goes"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The past participle of 'go' is 'gone' (used with have/has/had).",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which sentence uses Simple Past Tense correctly?",
        options: ["She sing a song.", "She sang a song.", "She has sung a song.", "She is singing a song."],
        correctAnswer: 1,
        marks: 1,
        explanation: "'Sang' is the simple past form of 'sing'.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "'I had eaten before he came.' This is which tense?",
        options: ["Simple Past", "Past Perfect", "Present Perfect", "Past Continuous"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'Had eaten' is Past Perfect Tense (had + past participle) showing action completed before another past action.",
      },
      {
        quiz: englishQuiz1._id,
        questionText: "Which helping verb is used in Present Perfect Tense?",
        options: ["was/were", "is/am/are", "has/have", "will"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Present Perfect Tense uses 'has' or 'have' with the past participle.",
      },
    ]);

    // Subcategory 2: Vocabulary and Word Power
    const englishQuiz2 = await Quiz.create({
      title: "Vocabulary and Word Power",
      subject: "English",
      category: "Vocabulary",
      chapter: "Word Building",
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
        quiz: englishQuiz2._id,
        questionText: "What is the synonym of 'brave'?",
        options: ["Coward", "Courageous", "Timid", "Weak"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'Courageous' means brave or having courage.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is the antonym of 'ancient'?",
        options: ["Old", "Historic", "Modern", "Antique"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'Modern' is the opposite of 'ancient' (very old).",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What does the prefix 'un-' mean?",
        options: ["Again", "Not", "Before", "After"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The prefix 'un-' means 'not'. Example: unhappy = not happy.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is the meaning of 'enormous'?",
        options: ["Very small", "Very large", "Very fast", "Very slow"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'Enormous' means extremely large or huge.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "Which word means 'a person who writes books'?",
        options: ["Painter", "Author", "Singer", "Actor"],
        correctAnswer: 1,
        marks: 1,
        explanation: "An 'author' is a person who writes books or literary works.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is the suffix in the word 'happiness'?",
        options: ["-hap", "-ness", "-iness", "-piness"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'-ness' is the suffix added to 'happy' to form the noun 'happiness'.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is a 'homophone'?",
        options: ["Words with same spelling", "Words with same sound but different meaning", "Words with opposite meaning", "Words with same meaning"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Homophones are words that sound the same but have different meanings. Example: 'their' and 'there'.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is the plural of 'ox'?",
        options: ["Oxes", "Oxen", "Ox", "Oxs"],
        correctAnswer: 1,
        marks: 1,
        explanation: "The plural of 'ox' is 'oxen'. It is an irregular plural.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What does 'transparent' mean?",
        options: ["Cannot see through", "Can see through clearly", "Partly visible", "Dark colored"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'Transparent' means something you can see through clearly, like glass.",
      },
      {
        quiz: englishQuiz2._id,
        questionText: "What is the opposite of 'generous'?",
        options: ["Kind", "Selfish", "Helpful", "Caring"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'Selfish' is the opposite of 'generous' (willing to give).",
      },
    ]);

    // Subcategory 3: Comprehension and Writing
    const englishQuiz3 = await Quiz.create({
      title: "Comprehension and Writing Skills",
      subject: "English",
      category: "Comprehension",
      chapter: "Reading and Writing",
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
        quiz: englishQuiz3._id,
        questionText: "What is the purpose of a 'topic sentence' in a paragraph?",
        options: ["To end the paragraph", "To introduce the main idea", "To give examples", "To ask a question"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A topic sentence introduces the main idea of the paragraph.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is an 'autobiography'?",
        options: ["Story of someone's life written by another", "Story of one's own life", "A fictional story", "A poem"],
        correctAnswer: 1,
        marks: 1,
        explanation: "An autobiography is the story of a person's life written by that person themselves.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is the difference between 'formal' and 'informal' writing?",
        options: ["No difference", "Formal uses slang", "Formal follows rules and is professional", "Informal is longer"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Formal writing follows grammar rules strictly and is used in professional/official contexts.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is a 'simile'?",
        options: ["Comparing using 'like' or 'as'", "Exaggeration", "Giving human qualities to objects", "Repeating sounds"],
        correctAnswer: 0,
        marks: 1,
        explanation: "A simile compares two things using 'like' or 'as'. Example: 'as brave as a lion'.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is a 'metaphor'?",
        options: ["Direct comparison without like/as", "Using like or as", "Asking a question", "Repeating words"],
        correctAnswer: 0,
        marks: 1,
        explanation: "A metaphor is a direct comparison without using 'like' or 'as'. Example: 'Life is a journey'.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What should a good conclusion do?",
        options: ["Introduce new ideas", "Summarize the main points", "Ask many questions", "Start a new topic"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A good conclusion summarizes the main points discussed in the writing.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is 'personification'?",
        options: ["Comparing two things", "Giving human qualities to non-human things", "Exaggeration", "Rhyming words"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Personification gives human qualities to non-human things. Example: 'The wind whispered'.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is the correct order of a formal letter?",
        options: ["Body, Address, Date", "Date, Address, Greeting, Body, Closing", "Greeting, Body, Date", "Body, Closing, Address"],
        correctAnswer: 1,
        marks: 1,
        explanation: "A formal letter follows: Date, Address, Greeting, Body, Closing/Sign-off.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What does 'inference' mean in reading?",
        options: ["Reading aloud", "Drawing conclusions from clues in the text", "Copying text", "Memorizing text"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Inference means drawing conclusions based on evidence and clues in the text.",
      },
      {
        quiz: englishQuiz3._id,
        questionText: "What is a 'narrative' writing?",
        options: ["Writing that argues", "Writing that tells a story", "Writing that describes", "Writing that persuades"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Narrative writing tells a story with characters, setting, and events.",
      },
    ]);

    console.log("✓ Class 7 - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7English;
