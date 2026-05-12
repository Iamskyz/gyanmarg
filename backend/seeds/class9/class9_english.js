import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9English = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Modals and Determiners
    const englishQuiz1 = await Quiz.create({
      title: "Modals and Determiners",
      subject: "English",
      category: "Grammar",
      chapter: "Modals",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz1._id, questionText: "Which modal expresses ability?", options: ["must", "should", "can", "may"], correctAnswer: 2, marks: 1, explanation: "'Can' expresses ability. Example: 'I can swim.'" },
      { quiz: englishQuiz1._id, questionText: "'You ___ wear a helmet while riding.' (obligation)", options: ["can", "might", "must", "could"], correctAnswer: 2, marks: 1, explanation: "'Must' expresses strong obligation or necessity." },
      { quiz: englishQuiz1._id, questionText: "'___ I come in?' (permission)", options: ["Must", "Should", "May", "Will"], correctAnswer: 2, marks: 1, explanation: "'May' is used to ask for formal permission." },
      { quiz: englishQuiz1._id, questionText: "Which modal expresses advice?", options: ["must", "should", "can", "will"], correctAnswer: 1, marks: 1, explanation: "'Should' is used to give advice. Example: 'You should study hard.'" },
      { quiz: englishQuiz1._id, questionText: "'It ___ rain today.' (possibility)", options: ["must", "might", "can", "shall"], correctAnswer: 1, marks: 1, explanation: "'Might' expresses possibility or uncertainty." },
      { quiz: englishQuiz1._id, questionText: "Which is a definite article?", options: ["a", "an", "the", "some"], correctAnswer: 2, marks: 1, explanation: "'The' is the definite article used for specific nouns." },
      { quiz: englishQuiz1._id, questionText: "'___ you help me carry this?' (polite request)", options: ["Must", "Should", "Could", "Shall"], correctAnswer: 2, marks: 1, explanation: "'Could' is used for polite requests." },
      { quiz: englishQuiz1._id, questionText: "We use 'an' before:", options: ["Consonant sounds", "Vowel sounds", "All words", "Plural nouns"], correctAnswer: 1, marks: 1, explanation: "'An' is used before words starting with vowel sounds (a, e, i, o, u)." },
      { quiz: englishQuiz1._id, questionText: "'She ___ speak three languages.' (ability)", options: ["must", "should", "can", "may"], correctAnswer: 2, marks: 1, explanation: "'Can' shows present ability." },
      { quiz: englishQuiz1._id, questionText: "Which determiner shows quantity?", options: ["the", "a", "many", "this"], correctAnswer: 2, marks: 1, explanation: "'Many' is a determiner that shows quantity." },
    ]);

    // Subcategory 2: Writing Skills
    const englishQuiz2 = await Quiz.create({
      title: "Writing Skills - Articles and Reports",
      subject: "English",
      category: "Writing",
      chapter: "Article and Report Writing",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz2._id, questionText: "An article should begin with:", options: ["The conclusion", "An attractive title and introduction", "The writer's name", "A question only"], correctAnswer: 1, marks: 1, explanation: "An article should start with an attractive title followed by an engaging introduction." },
      { quiz: englishQuiz2._id, questionText: "A report writing must include:", options: ["Only opinions", "Headline, byline, date, place, and body", "Only the conclusion", "Only dialogue"], correctAnswer: 1, marks: 1, explanation: "A report needs headline, byline (reporter name), date, place, and detailed body." },
      { quiz: englishQuiz2._id, questionText: "What is the purpose of a 'diary entry'?", options: ["To inform others", "To record personal thoughts and experiences", "To argue a point", "To advertise"], correctAnswer: 1, marks: 1, explanation: "A diary entry records personal thoughts, feelings, and daily experiences." },
      { quiz: englishQuiz2._id, questionText: "In story writing, what comes after the introduction?", options: ["Conclusion", "Rising action/conflict", "Title", "Moral"], correctAnswer: 1, marks: 1, explanation: "After introduction, the rising action or conflict develops the story." },
      { quiz: englishQuiz2._id, questionText: "A formal email should have:", options: ["Slang language", "Subject line, greeting, body, closing", "No greeting", "Emojis"], correctAnswer: 1, marks: 1, explanation: "Formal emails need proper subject line, greeting, body, and professional closing." },
      { quiz: englishQuiz2._id, questionText: "What is 'précis writing'?", options: ["Expanding a passage", "Summarizing a passage in fewer words", "Translating a passage", "Copying a passage"], correctAnswer: 1, marks: 1, explanation: "Précis is summarizing a passage in about one-third of its original length." },
      { quiz: englishQuiz2._id, questionText: "An article for a magazine should be:", options: ["Very short (2 lines)", "Informative, engaging, with examples", "Only facts, no opinions", "Written in bullet points only"], correctAnswer: 1, marks: 1, explanation: "Magazine articles should be informative, engaging, and include examples." },
      { quiz: englishQuiz2._id, questionText: "What tense is generally used in report writing?", options: ["Future tense", "Past tense", "Present continuous", "Present perfect"], correctAnswer: 1, marks: 1, explanation: "Reports are usually written in past tense as they describe events that happened." },
      { quiz: englishQuiz2._id, questionText: "A speech should end with:", options: ["An abrupt stop", "A strong conclusion and thank you", "A new topic", "A question without answer"], correctAnswer: 1, marks: 1, explanation: "A speech should end with a strong conclusion summarizing key points and thanking the audience." },
      { quiz: englishQuiz2._id, questionText: "What is the word limit for a notice?", options: ["200-300 words", "50 words or less", "500 words", "No limit"], correctAnswer: 1, marks: 1, explanation: "A notice should be brief and concise, usually within 50 words." },
    ]);

    // Subcategory 3: Literature and Figures of Speech
    const englishQuiz3 = await Quiz.create({
      title: "Literature and Figures of Speech",
      subject: "English",
      category: "Literature",
      chapter: "Figures of Speech",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz3._id, questionText: "'The world is a stage' is an example of:", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Direct comparison without 'like/as' is a metaphor." },
      { quiz: englishQuiz3._id, questionText: "'O Death! Where is thy sting?' is an example of:", options: ["Metaphor", "Apostrophe", "Simile", "Irony"], correctAnswer: 1, marks: 1, explanation: "Apostrophe addresses an absent person, abstract idea, or thing directly." },
      { quiz: englishQuiz3._id, questionText: "'He is as brave as a lion' is:", options: ["Metaphor", "Simile", "Personification", "Oxymoron"], correctAnswer: 1, marks: 1, explanation: "Comparison using 'as...as' or 'like' is a simile." },
      { quiz: englishQuiz3._id, questionText: "What is 'oxymoron'?", options: ["Exaggeration", "Combination of contradictory words", "Repetition", "Comparison"], correctAnswer: 1, marks: 1, explanation: "Oxymoron combines contradictory words. Example: 'living dead', 'bitter sweet'." },
      { quiz: englishQuiz3._id, questionText: "'I have told you a million times' is:", options: ["Simile", "Metaphor", "Hyperbole", "Litotes"], correctAnswer: 2, marks: 1, explanation: "Hyperbole is deliberate exaggeration for emphasis." },
      { quiz: englishQuiz3._id, questionText: "What is 'anaphora'?", options: ["Repetition at the end", "Repetition at the beginning of lines", "Opposite meaning", "Sound imitation"], correctAnswer: 1, marks: 1, explanation: "Anaphora is repetition of a word/phrase at the beginning of successive lines." },
      { quiz: englishQuiz3._id, questionText: "'The flowers danced in the wind' is:", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correctAnswer: 2, marks: 1, explanation: "Giving human quality (dancing) to flowers is personification." },
      { quiz: englishQuiz3._id, questionText: "What is 'dramatic irony'?", options: ["Audience knows something characters don't", "Characters know everything", "No one knows anything", "Same as sarcasm"], correctAnswer: 0, marks: 1, explanation: "Dramatic irony is when the audience knows something the characters don't." },
      { quiz: englishQuiz3._id, questionText: "'Fair is foul and foul is fair' is an example of:", options: ["Simile", "Paradox", "Hyperbole", "Onomatopoeia"], correctAnswer: 1, marks: 1, explanation: "A paradox is a statement that seems contradictory but reveals a truth." },
      { quiz: englishQuiz3._id, questionText: "What is the 'moral' of a story?", options: ["The setting", "The lesson or message", "The characters", "The conflict"], correctAnswer: 1, marks: 1, explanation: "The moral is the lesson or message the story teaches." },
    ]);

    console.log("✓ Class 9 - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9English;
