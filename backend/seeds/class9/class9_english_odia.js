
// Full Odia translated Class 9 English file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9EnglishOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: Modals and Determiners
    const englishQuiz1 = await Quiz.create({
      title: "Modals ଏବଂ Determiners",
      subject: "English",
      category: "Grammar",
      chapter: "Modals",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz1._id, questionText: "କେଉଁ modal ability ଦର୍ଶାଏ?", options: ["must", "should", "can", "may"], correctAnswer: 2, marks: 1, explanation: "'Can' ability ଦର୍ଶାଏ। Example: 'I can swim.'" },
      { quiz: englishQuiz1._id, questionText: "'You ___ wear a helmet while riding.' (obligation)", options: ["can", "might", "must", "could"], correctAnswer: 2, marks: 1, explanation: "'Must' ଶକ୍ତ ଦାୟିତ୍ୱ କିମ୍ବା ଆବଶ୍ୟକତା ଦର୍ଶାଏ।" },
      { quiz: englishQuiz1._id, questionText: "'___ I come in?' (permission)", options: ["Must", "Should", "May", "Will"], correctAnswer: 2, marks: 1, explanation: "'May' ଔପଚାରିକ permission ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz1._id, questionText: "କେଉଁ modal advice ଦର୍ଶାଏ?", options: ["must", "should", "can", "will"], correctAnswer: 1, marks: 1, explanation: "'Should' advice ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz1._id, questionText: "'It ___ rain today.' (possibility)", options: ["must", "might", "can", "shall"], correctAnswer: 1, marks: 1, explanation: "'Might' possibility ଦର୍ଶାଏ।" },
      { quiz: englishQuiz1._id, questionText: "କେଉଁଟି definite article?", options: ["a", "an", "the", "some"], correctAnswer: 2, marks: 1, explanation: "'The' ହେଉଛି definite article।" },
      { quiz: englishQuiz1._id, questionText: "'___ you help me carry this?' (polite request)", options: ["Must", "Should", "Could", "Shall"], correctAnswer: 2, marks: 1, explanation: "'Could' polite request ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz1._id, questionText: "ଆମେ 'an' କେବେ ବ୍ୟବହାର କରୁ?", options: ["Consonant sounds ପୂର୍ବରୁ", "Vowel sounds ପୂର୍ବରୁ", "ସମସ୍ତ ଶବ୍ଦ ପୂର୍ବରୁ", "Plural nouns ପୂର୍ବରୁ"], correctAnswer: 1, marks: 1, explanation: "'An' vowel sound ପୂର୍ବରୁ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz1._id, questionText: "'She ___ speak three languages.' (ability)", options: ["must", "should", "can", "may"], correctAnswer: 2, marks: 1, explanation: "'Can' present ability ଦର୍ଶାଏ।" },
      { quiz: englishQuiz1._id, questionText: "କେଉଁ determiner quantity ଦର୍ଶାଏ?", options: ["the", "a", "many", "this"], correctAnswer: 2, marks: 1, explanation: "'Many' quantity ଦର୍ଶାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: Writing Skills
    const englishQuiz2 = await Quiz.create({
      title: "Writing Skills - Articles and Reports",
      subject: "English",
      category: "Writing",
      chapter: "Article and Report Writing",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz2._id, questionText: "ଏକ article କିପରି ଆରମ୍ଭ ହେବା ଉଚିତ?", options: ["Conclusion", "ଆକର୍ଷକ title ଏବଂ introduction", "Writer's name", "କେବଳ ପ୍ରଶ୍ନ"], correctAnswer: 1, marks: 1, explanation: "Article ଆକର୍ଷକ title ଏବଂ introduction ସହ ଆରମ୍ଭ ହୁଏ।" },
      { quiz: englishQuiz2._id, questionText: "Report writing ରେ କଣ ଥାଏ?", options: ["କେବଳ opinion", "Headline, byline, date, place ଏବଂ body", "କେବଳ conclusion", "କେବଳ dialogue"], correctAnswer: 1, marks: 1, explanation: "Report ରେ headline, byline, date, place ଏବଂ body ଥାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Diary entry ର ଉଦ୍ଦେଶ୍ୟ କଣ?", options: ["ଅନ୍ୟମାନଙ୍କୁ ସୂଚନା ଦେବା", "ବ୍ୟକ୍ତିଗତ ଭାବନା ଲେଖିବା", "ତର୍କ କରିବା", "ବିଜ୍ଞାପନ"], correctAnswer: 1, marks: 1, explanation: "Diary ରେ ବ୍ୟକ୍ତିଗତ ଭାବନା ଏବଂ ଅନୁଭବ ଲେଖାଯାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Story writing ରେ introduction ପରେ କଣ ଆସେ?", options: ["Conclusion", "Conflict", "Title", "Moral"], correctAnswer: 1, marks: 1, explanation: "Introduction ପରେ conflict ଆସେ।" },
      { quiz: englishQuiz2._id, questionText: "Formal email ରେ କଣ ଥାଏ?", options: ["Slang", "Subject line, greeting, body, closing", "Greeting ନାହିଁ", "Emoji"], correctAnswer: 1, marks: 1, explanation: "Formal email ରେ proper structure ଥାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Précis writing କଣ?", options: ["Passage expand କରିବା", "Passage summarize କରିବା", "Translate କରିବା", "Copy କରିବା"], correctAnswer: 1, marks: 1, explanation: "Précis ହେଉଛି summary writing।" },
      { quiz: englishQuiz2._id, questionText: "Magazine article କେମିତି ହେବା ଉଚିତ?", options: ["ଖୁବ ଛୋଟ", "Informative ଏବଂ engaging", "କେବଳ facts", "କେବଳ bullet points"], correctAnswer: 1, marks: 1, explanation: "Magazine article informative ଏବଂ interesting ହେବା ଦରକାର।" },
      { quiz: englishQuiz2._id, questionText: "Report writing ରେ ସାଧାରଣତଃ କେଉଁ tense ବ୍ୟବହୃତ ହୁଏ?", options: ["Future", "Past", "Present continuous", "Present perfect"], correctAnswer: 1, marks: 1, explanation: "Report ସାଧାରଣତଃ past tense ରେ ଲେଖାଯାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Speech କିପରି ଶେଷ ହେବା ଉଚିତ?", options: ["ହଠାତ୍ ଶେଷ", "Strong conclusion ଏବଂ thank you", "ନୂତନ topic", "ପ୍ରଶ୍ନ"], correctAnswer: 1, marks: 1, explanation: "Speech strong conclusion ସହ ଶେଷ ହେବା ଉଚିତ।" },
      { quiz: englishQuiz2._id, questionText: "Notice ର word limit କେତେ?", options: ["200-300", "50 କିମ୍ବା କମ୍", "500", "No limit"], correctAnswer: 1, marks: 1, explanation: "Notice ସଂକ୍ଷିପ୍ତ ହୋଇଥାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: Literature and Figures of Speech
    const englishQuiz3 = await Quiz.create({
      title: "Literature and Figures of Speech",
      subject: "English",
      category: "Literature",
      chapter: "Figures of Speech",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz3._id, questionText: "'The world is a stage' କେଉଁ figure of speech?", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Direct comparison without like/as = metaphor।" },
      { quiz: englishQuiz3._id, questionText: "'O Death! Where is thy sting?' କଣ ଉଦାହରଣ?", options: ["Metaphor", "Apostrophe", "Simile", "Irony"], correctAnswer: 1, marks: 1, explanation: "Apostrophe ରେ ଅଦୃଶ୍ୟ ବସ୍ତୁକୁ ସିଧା କହାଯାଏ।" },
      { quiz: englishQuiz3._id, questionText: "'He is as brave as a lion' କଣ?", options: ["Metaphor", "Simile", "Personification", "Oxymoron"], correctAnswer: 1, marks: 1, explanation: "'As...as' ଥିଲେ simile।" },
      { quiz: englishQuiz3._id, questionText: "Oxymoron କଣ?", options: ["Exaggeration", "ବିପରୀତ ଶବ୍ଦର ସଂଯୋଗ", "Repetition", "Comparison"], correctAnswer: 1, marks: 1, explanation: "Oxymoron contradictory words ର combination।" },
      { quiz: englishQuiz3._id, questionText: "'I have told you a million times' କଣ?", options: ["Simile", "Metaphor", "Hyperbole", "Litotes"], correctAnswer: 2, marks: 1, explanation: "Hyperbole ହେଉଛି exaggeration।" },
      { quiz: englishQuiz3._id, questionText: "Anaphora କଣ?", options: ["End repetition", "Beginning repetition", "Opposite meaning", "Sound imitation"], correctAnswer: 1, marks: 1, explanation: "Anaphora ରେ beginning repetition ହୁଏ।" },
      { quiz: englishQuiz3._id, questionText: "'The flowers danced in the wind' କଣ?", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correctAnswer: 2, marks: 1, explanation: "Human quality ଦିଆଯାଇଥିବାରୁ personification।" },
      { quiz: englishQuiz3._id, questionText: "Dramatic irony କଣ?", options: ["Audience କିଛି ଜାଣେ କିନ୍ତୁ characters ଜାଣନ୍ତି ନାହିଁ", "Characters ସବୁ ଜାଣନ୍ତି", "କେହି କିଛି ଜାଣେନାହିଁ", "Sarcasm"], correctAnswer: 0, marks: 1, explanation: "Audience ଏବଂ character ର ଜ୍ଞାନର ତଫାତ।" },
      { quiz: englishQuiz3._id, questionText: "'Fair is foul and foul is fair' କଣ ଉଦାହରଣ?", options: ["Simile", "Paradox", "Hyperbole", "Onomatopoeia"], correctAnswer: 1, marks: 1, explanation: "Paradox ଦେଖିବାକୁ ବିରୋଧାଭାସୀ କିନ୍ତୁ ସତ୍ୟ।" },
      { quiz: englishQuiz3._id, questionText: "Story ର moral କଣ?", options: ["Setting", "Lesson/message", "Characters", "Conflict"], correctAnswer: 1, marks: 1, explanation: "Moral ହେଉଛି story ର lesson।" },
    ]);

    console.log("✓ Class 9 - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9EnglishOdia;
