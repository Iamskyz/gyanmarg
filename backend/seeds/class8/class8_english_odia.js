
import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8EnglishOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: Active and Passive Voice
    const englishQuiz1 = await Quiz.create({
      title: "ଆକ୍ଟିଭ୍ ଏବଂ ପ୍ୟାସିଭ୍ ଭଏସ୍",
      subject: "English",
      category: "ବ୍ୟାକରଣ",
      chapter: "Voice",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz1._id, questionText: "'She writes a letter.' କୁ passive କର।", options: ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has been written by her."], correctAnswer: 0, marks: 1, explanation: "Simple Present Active → Passive ରେ is/am/are + past participle ବ୍ୟବହାର ହୁଏ।" },
      { quiz: englishQuiz1._id, questionText: "କେଉଁ ବାକ୍ୟଟି passive voice ରେ ଅଛି?", options: ["The cat chased the mouse.", "The mouse was chased by the cat.", "The cat is chasing the mouse.", "The cat will chase the mouse."], correctAnswer: 1, marks: 1, explanation: "'Was chased' passive voice କୁ ଦର୍ଶାଏ।" },
      { quiz: englishQuiz1._id, questionText: "'The cake was eaten by the children.' କୁ active କର।", options: ["The children ate the cake.", "The children eat the cake.", "The children are eating the cake.", "The cake ate the children."], correctAnswer: 0, marks: 1, explanation: "Past passive → Past active।" },
      { quiz: englishQuiz1._id, questionText: "Passive voice ରେ object କଣ ହୁଏ?", options: ["Object", "Subject", "Verb", "Adverb"], correctAnswer: 1, marks: 1, explanation: "Passive voice ରେ object, subject ହୋଇଯାଏ।" },
      { quiz: englishQuiz1._id, questionText: "'They are building a house.' କୁ passive କର।", options: ["A house is being built by them.", "A house was being built by them.", "A house has been built by them.", "A house is built by them."], correctAnswer: 0, marks: 1, explanation: "Present Continuous Passive → is/are being + past participle।" },
      { quiz: englishQuiz1._id, questionText: "Simple Past Passive ରେ କେଉଁ helping verb ବ୍ୟବହୃତ ହୁଏ?", options: ["is/am/are", "was/were", "has/have been", "will be"], correctAnswer: 1, marks: 1, explanation: "Simple Past Passive ରେ was/were ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz1._id, questionText: "'He will finish the work.' କୁ passive କର।", options: ["The work will be finished by him.", "The work is finished by him.", "The work was finished by him.", "The work has been finished by him."], correctAnswer: 0, marks: 1, explanation: "Future Passive → will be + past participle।" },
      { quiz: englishQuiz1._id, questionText: "'The letter has been posted.' କେଉଁ tense ରେ ଅଛି?", options: ["Simple Present Passive", "Present Perfect Passive", "Past Perfect Passive", "Future Passive"], correctAnswer: 1, marks: 1, explanation: "Has been + past participle = Present Perfect Passive।" },
      { quiz: englishQuiz1._id, questionText: "କେଉଁ ବାକ୍ୟଟି passive କରାଯାଇପାରିବ ନାହିଁ?", options: ["She sings a song.", "He laughed loudly.", "They play cricket.", "I wrote a letter."], correctAnswer: 1, marks: 1, explanation: "Object ନଥିବାରୁ passive କରାଯାଇପାରିବ ନାହିଁ।" },
      { quiz: englishQuiz1._id, questionText: "'Someone stole my bag.' କୁ passive କର।", options: ["My bag was stolen.", "My bag is stolen.", "My bag has been stolen.", "My bag will be stolen."], correctAnswer: 0, marks: 1, explanation: "Unknown subject ଥିଲେ by someone ଛାଡ଼ାଯାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: Direct and Indirect Speech
    const englishQuiz2 = await Quiz.create({
      title: "Direct ଏବଂ Indirect Speech",
      subject: "English",
      category: "ବ୍ୟାକରଣ",
      chapter: "Reported Speech",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz2._id, questionText: "He said, 'I am happy.' କୁ indirect କର।", options: ["He said that he is happy.", "He said that he was happy.", "He said that I am happy.", "He said that I was happy."], correctAnswer: 1, marks: 1, explanation: "'am' → 'was' ହୁଏ।" },
      { quiz: englishQuiz2._id, questionText: "Indirect speech ରେ 'today' କଣ ହୁଏ?", options: ["tomorrow", "yesterday", "that day", "this day"], correctAnswer: 2, marks: 1, explanation: "'Today' → 'that day'।" },
      { quiz: englishQuiz2._id, questionText: "'will' indirect speech ରେ କଣ ହୁଏ?", options: ["shall", "would", "will", "can"], correctAnswer: 1, marks: 1, explanation: "'Will' → 'would'।" },
      { quiz: englishQuiz2._id, questionText: "'She said, I went to school yesterday.' କୁ indirect କର।", options: ["She said that she went to school yesterday.", "She said that she had gone to school the previous day.", "She said that she goes to school.", "She said that she will go to school."], correctAnswer: 1, marks: 1, explanation: "'Yesterday' → 'the previous day'।" },
      { quiz: englishQuiz2._id, questionText: "Indirect statement ପାଇଁ କେଉଁ ଶବ୍ଦ ବ୍ୟବହୃତ ହୁଏ?", options: ["if", "whether", "that", "what"], correctAnswer: 2, marks: 1, explanation: "'That' ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz2._id, questionText: "'He asked, Where do you live?' କୁ indirect କର।", options: ["He asked where I live.", "He asked where I lived.", "He asked that where I lived.", "He asked if I lived."], correctAnswer: 1, marks: 1, explanation: "Wh-question ରେ inversion ହୁଏନାହିଁ।" },
      { quiz: englishQuiz2._id, questionText: "'here' indirect speech ରେ କଣ ହୁଏ?", options: ["there", "here", "this place", "that place"], correctAnswer: 0, marks: 1, explanation: "'Here' → 'there'।" },
      { quiz: englishQuiz2._id, questionText: "Yes/No question ରେ କଣ ବ୍ୟବହୃତ ହୁଏ?", options: ["that", "if/whether", "what", "which"], correctAnswer: 1, marks: 1, explanation: "'if/whether' ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz2._id, questionText: "'Please help me.' କୁ indirect କର।", options: ["She said to help her.", "She requested to help her.", "She requested me to help her.", "She said that please help me."], correctAnswer: 2, marks: 1, explanation: "Request → requested + object + to + verb।" },
      { quiz: englishQuiz2._id, questionText: "'this' indirect speech ରେ କଣ ହୁଏ?", options: ["that", "this", "these", "those"], correctAnswer: 0, marks: 1, explanation: "'This' → 'that'।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: Literature and Poetry
    const englishQuiz3 = await Quiz.create({
      title: "ସାହିତ୍ୟ ଏବଂ କବିତା",
      subject: "English",
      category: "Literature",
      chapter: "Poetry and Prose",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz3._id, questionText: "Alliteration କଣ?", options: ["ସ୍ୱର ଧ୍ୱନିର ପୁନରାବୃତ୍ତି", "ଆରମ୍ଭରେ consonant sound ର ପୁନରାବୃତ୍ତି", "ଅତିଶୟୋକ୍ତି", "ତୁଳନା"], correctAnswer: 1, marks: 1, explanation: "Consonant sound ର repetition କୁ alliteration କୁହାଯାଏ।" },
      { quiz: englishQuiz3._id, questionText: "Poetry ରେ stanza କଣ?", options: ["ଏକ ଲାଇନ୍", "ଲାଇନ୍‌ର ଗୋଷ୍ଠୀ", "ଶିରୋନାମ", "ଶେଷ ଲାଇନ୍"], correctAnswer: 1, marks: 1, explanation: "Stanza ହେଉଛି ଲାଇନ୍‌ର ଗୋଷ୍ଠୀ।" },
      { quiz: englishQuiz3._id, questionText: "Hyperbole କଣ?", options: ["Understatement", "ଅତିଶୟୋକ୍ତି", "ତୁଳନା", "ପୁନରାବୃତ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ଅତିଶୟୋକ୍ତିକୁ hyperbole କୁହାଯାଏ।" },
      { quiz: englishQuiz3._id, questionText: "Story ର theme କଣ?", options: ["ସ୍ଥାନ", "ମୁଖ୍ୟ ଚରିତ୍ର", "ମୁଖ୍ୟ ବାର୍ତ୍ତା", "Plot"], correctAnswer: 2, marks: 1, explanation: "Theme ହେଉଛି କାହାଣୀର ମୂଳ ବାର୍ତ୍ତା।" },
      { quiz: englishQuiz3._id, questionText: "Onomatopoeia କଣ?", options: ["ଧ୍ୱନିକୁ ଅନୁକରଣ କରୁଥିବା ଶବ୍ଦ", "ବିପରୀତ ଅର୍ଥ", "ସମାନ ଅର୍ଥ", "ଅତିଶୟୋକ୍ତି"], correctAnswer: 0, marks: 1, explanation: "ଧ୍ୱନିକୁ ଅନୁକରଣ କରୁଥିବା ଶବ୍ଦ।" },
      { quiz: englishQuiz3._id, questionText: "Sonnet କେତେ ଲାଇନ୍‌ର କବିତା?", options: ["10", "14", "20", "4"], correctAnswer: 1, marks: 1, explanation: "Sonnet ହେଉଛି 14 ଲାଇନ୍‌ର କବିତା।" },
      { quiz: englishQuiz3._id, questionText: "Irony କଣ?", options: ["ଠିକ୍ ଅର୍ଥ କହିବା", "ବିପରୀତ ଅର୍ଥ କହିବା", "ଶବ୍ଦ ପୁନରାବୃତ୍ତି", "ବଡ଼ ଶବ୍ଦ"], correctAnswer: 1, marks: 1, explanation: "ବିପରୀତ ଅର୍ଥ କହିବାକୁ irony କୁହାଯାଏ।" },
      { quiz: englishQuiz3._id, questionText: "Story ର climax କଣ?", options: ["ଆରମ୍ଭ", "ସବୁଠୁ ରୋମାଞ୍ଚକ ଅଂଶ", "ଶେଷ", "ଚରିତ୍ର ପରିଚୟ"], correctAnswer: 1, marks: 1, explanation: "Climax ହେଉଛି ସବୁଠୁ ରୋମାଞ୍ଚକ ଅଂଶ।" },
      { quiz: englishQuiz3._id, questionText: "Rhyme scheme କଣ?", options: ["Rhythm", "ରାଇମ୍ ପ୍ୟାଟର୍ନ", "Theme", "Title pattern"], correctAnswer: 1, marks: 1, explanation: "ରାଇମ୍‌ର pattern କୁ rhyme scheme କୁହାଯାଏ।" },
      { quiz: englishQuiz3._id, questionText: "Protagonist କିଏ?", options: ["Villain", "ମୁଖ୍ୟ ଚରିତ୍ର", "Narrator", "Minor character"], correctAnswer: 1, marks: 1, explanation: "ମୁଖ୍ୟ ଚରିତ୍ରକୁ protagonist କୁହାଯାଏ।" },
    ]);

    console.log("✓ Class 8 - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8EnglishOdia;
