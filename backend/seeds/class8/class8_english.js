import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8English = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Active and Passive Voice
    const englishQuiz1 = await Quiz.create({
      title: "Active and Passive Voice",
      subject: "English",
      category: "Grammar",
      chapter: "Voice",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz1._id, questionText: "Change to passive: 'She writes a letter.'", options: ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has been written by her."], correctAnswer: 0, marks: 1, explanation: "Simple Present Active → Simple Present Passive: 'is/am/are + past participle'." },
      { quiz: englishQuiz1._id, questionText: "Which sentence is in passive voice?", options: ["The cat chased the mouse.", "The mouse was chased by the cat.", "The cat is chasing the mouse.", "The cat will chase the mouse."], correctAnswer: 1, marks: 1, explanation: "'Was chased' shows passive voice — the subject receives the action." },
      { quiz: englishQuiz1._id, questionText: "Change to active: 'The cake was eaten by the children.'", options: ["The children ate the cake.", "The children eat the cake.", "The children are eating the cake.", "The cake ate the children."], correctAnswer: 0, marks: 1, explanation: "Past passive → Past active: subject does the action." },
      { quiz: englishQuiz1._id, questionText: "In passive voice, the object of active sentence becomes:", options: ["Object", "Subject", "Verb", "Adverb"], correctAnswer: 1, marks: 1, explanation: "In passive voice, the object of the active sentence becomes the subject." },
      { quiz: englishQuiz1._id, questionText: "Change to passive: 'They are building a house.'", options: ["A house is being built by them.", "A house was being built by them.", "A house has been built by them.", "A house is built by them."], correctAnswer: 0, marks: 1, explanation: "Present Continuous Active → 'is/are + being + past participle'." },
      { quiz: englishQuiz1._id, questionText: "Which helping verb is used in Simple Past Passive?", options: ["is/am/are", "was/were", "has/have been", "will be"], correctAnswer: 1, marks: 1, explanation: "Simple Past Passive uses 'was/were + past participle'." },
      { quiz: englishQuiz1._id, questionText: "Change to passive: 'He will finish the work.'", options: ["The work will be finished by him.", "The work is finished by him.", "The work was finished by him.", "The work has been finished by him."], correctAnswer: 0, marks: 1, explanation: "Future Active → 'will be + past participle'." },
      { quiz: englishQuiz1._id, questionText: "'The letter has been posted.' This is:", options: ["Simple Present Passive", "Present Perfect Passive", "Past Perfect Passive", "Future Passive"], correctAnswer: 1, marks: 1, explanation: "'Has been + past participle' is Present Perfect Passive." },
      { quiz: englishQuiz1._id, questionText: "Which sentence CANNOT be changed to passive?", options: ["She sings a song.", "He laughed loudly.", "They play cricket.", "I wrote a letter."], correctAnswer: 1, marks: 1, explanation: "'He laughed loudly' has no object, so it cannot be changed to passive voice." },
      { quiz: englishQuiz1._id, questionText: "Change to passive: 'Someone stole my bag.'", options: ["My bag was stolen.", "My bag is stolen.", "My bag has been stolen.", "My bag will be stolen."], correctAnswer: 0, marks: 1, explanation: "When the subject is unknown (someone), we omit 'by someone' in passive." },
    ]);

    // Subcategory 2: Direct and Indirect Speech
    const englishQuiz2 = await Quiz.create({
      title: "Direct and Indirect Speech",
      subject: "English",
      category: "Grammar",
      chapter: "Reported Speech",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz2._id, questionText: "Change to indirect: He said, 'I am happy.'", options: ["He said that he is happy.", "He said that he was happy.", "He said that I am happy.", "He said that I was happy."], correctAnswer: 1, marks: 1, explanation: "In indirect speech, 'am' changes to 'was' and 'I' changes to 'he'." },
      { quiz: englishQuiz2._id, questionText: "In indirect speech, 'today' changes to:", options: ["tomorrow", "yesterday", "that day", "this day"], correctAnswer: 2, marks: 1, explanation: "'Today' changes to 'that day' in indirect speech." },
      { quiz: englishQuiz2._id, questionText: "In indirect speech, 'will' changes to:", options: ["shall", "would", "will", "can"], correctAnswer: 1, marks: 1, explanation: "'Will' changes to 'would' in indirect speech (backshift of tense)." },
      { quiz: englishQuiz2._id, questionText: "Change to indirect: She said, 'I went to school yesterday.'", options: ["She said that she went to school yesterday.", "She said that she had gone to school the previous day.", "She said that she goes to school.", "She said that she will go to school."], correctAnswer: 1, marks: 1, explanation: "'Went' → 'had gone', 'yesterday' → 'the previous day'." },
      { quiz: englishQuiz2._id, questionText: "Which word introduces indirect speech for statements?", options: ["if", "whether", "that", "what"], correctAnswer: 2, marks: 1, explanation: "'That' is used to introduce indirect statements." },
      { quiz: englishQuiz2._id, questionText: "Change to indirect: He asked, 'Where do you live?'", options: ["He asked where I live.", "He asked where I lived.", "He asked that where I lived.", "He asked if I lived."], correctAnswer: 1, marks: 1, explanation: "Wh-questions use the wh-word without inversion in indirect speech." },
      { quiz: englishQuiz2._id, questionText: "In indirect speech, 'here' changes to:", options: ["there", "here", "this place", "that place"], correctAnswer: 0, marks: 1, explanation: "'Here' changes to 'there' in indirect speech." },
      { quiz: englishQuiz2._id, questionText: "For yes/no questions in indirect speech, we use:", options: ["that", "if/whether", "what", "which"], correctAnswer: 1, marks: 1, explanation: "Yes/no questions use 'if' or 'whether' in indirect speech." },
      { quiz: englishQuiz2._id, questionText: "Change to indirect: She said, 'Please help me.'", options: ["She said to help her.", "She requested to help her.", "She requested me to help her.", "She said that please help me."], correctAnswer: 2, marks: 1, explanation: "Requests use 'requested + object + to + verb' in indirect speech." },
      { quiz: englishQuiz2._id, questionText: "In indirect speech, 'this' changes to:", options: ["that", "this", "these", "those"], correctAnswer: 0, marks: 1, explanation: "'This' changes to 'that' in indirect speech." },
    ]);

    // Subcategory 3: Literature and Poetry
    const englishQuiz3 = await Quiz.create({
      title: "Literature and Poetry Appreciation",
      subject: "English",
      category: "Literature",
      chapter: "Poetry and Prose",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz3._id, questionText: "What is 'alliteration'?", options: ["Repetition of vowel sounds", "Repetition of consonant sounds at the beginning", "Exaggeration", "Comparison using like/as"], correctAnswer: 1, marks: 1, explanation: "Alliteration is the repetition of consonant sounds at the beginning of words. Example: 'Peter Piper picked'." },
      { quiz: englishQuiz3._id, questionText: "What is a 'stanza' in poetry?", options: ["A single line", "A group of lines", "The title", "The last line"], correctAnswer: 1, marks: 1, explanation: "A stanza is a group of lines in a poem, similar to a paragraph in prose." },
      { quiz: englishQuiz3._id, questionText: "What is 'hyperbole'?", options: ["Understatement", "Exaggeration for effect", "Comparison", "Repetition"], correctAnswer: 1, marks: 1, explanation: "Hyperbole is deliberate exaggeration for emphasis. Example: 'I've told you a million times'." },
      { quiz: englishQuiz3._id, questionText: "What is the 'theme' of a story?", options: ["The setting", "The main character", "The central message or idea", "The plot"], correctAnswer: 2, marks: 1, explanation: "Theme is the central message, moral, or idea that the author wants to convey." },
      { quiz: englishQuiz3._id, questionText: "What is 'onomatopoeia'?", options: ["Words that imitate sounds", "Words with opposite meanings", "Words with same meanings", "Exaggeration"], correctAnswer: 0, marks: 1, explanation: "Onomatopoeia uses words that imitate sounds. Example: 'buzz', 'hiss', 'splash'." },
      { quiz: englishQuiz3._id, questionText: "What is a 'sonnet'?", options: ["A 10-line poem", "A 14-line poem", "A 20-line poem", "A 4-line poem"], correctAnswer: 1, marks: 1, explanation: "A sonnet is a 14-line poem, usually in iambic pentameter." },
      { quiz: englishQuiz3._id, questionText: "What is 'irony'?", options: ["Saying exactly what you mean", "Saying the opposite of what you mean", "Repeating words", "Using big words"], correctAnswer: 1, marks: 1, explanation: "Irony is when the intended meaning is opposite to the literal meaning of words." },
      { quiz: englishQuiz3._id, questionText: "What is the 'climax' of a story?", options: ["The beginning", "The turning point/most exciting part", "The ending", "The introduction of characters"], correctAnswer: 1, marks: 1, explanation: "Climax is the turning point or most intense moment in the story." },
      { quiz: englishQuiz3._id, questionText: "What is 'rhyme scheme'?", options: ["The rhythm of a poem", "The pattern of rhyming words at line ends", "The theme of a poem", "The title pattern"], correctAnswer: 1, marks: 1, explanation: "Rhyme scheme is the pattern of rhymes at the end of lines, marked with letters (ABAB, AABB, etc.)." },
      { quiz: englishQuiz3._id, questionText: "What is a 'protagonist'?", options: ["The villain", "The main character", "The narrator", "A minor character"], correctAnswer: 1, marks: 1, explanation: "The protagonist is the main character around whom the story revolves." },
    ]);

    console.log("✓ Class 8 - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8English;
