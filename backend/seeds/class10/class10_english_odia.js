
// Full Odia translated Class 10 English file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10EnglishOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: Clauses and Sentence Transformation
    const englishQuiz1 = await Quiz.create({
      title: "Clauses ଏବଂ Sentence Transformation",
      subject: "English",
      category: "Grammar",
      chapter: "Clauses",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz1._id, questionText: "ଏକ clause ଯାହା ନିଜେ sentence ଭାବେ ରହିପାରେ, ତାକୁ କଣ କୁହାଯାଏ?", options: ["Dependent clause", "Independent clause", "Relative clause", "Noun clause"], correctAnswer: 1, marks: 1, explanation: "Independent clause ରେ subject ଏବଂ verb ଥାଏ ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ଅର୍ଥ ଦିଏ।" },
      { quiz: englishQuiz1._id, questionText: "'I will go when he comes.' ର subordinate clause କଣ?", options: ["I will go", "when he comes", "I will", "he comes"], correctAnswer: 1, marks: 1, explanation: "'When he comes' ଏକ dependent clause।" },
      { quiz: englishQuiz1._id, questionText: "'Being tired, he slept early.' କୁ compound sentence କର।", options: ["He was tired so he slept early.", "He slept early because tired.", "Tired he slept.", "He being tired slept."], correctAnswer: 0, marks: 1, explanation: "'So' ବ୍ୟବହାର କରି ଦୁଇଟି independent clause ଯୋଡ଼ାଯାଏ।" },
      { quiz: englishQuiz1._id, questionText: "'The book which I bought is interesting.' ର underlined ଅଂଶ କଣ?", options: ["Noun clause", "Adjective clause", "Adverb clause", "Main clause"], correctAnswer: 1, marks: 1, explanation: "'Which I bought' noun 'book' କୁ ବର୍ଣ୍ଣନା କରୁଛି।" },
      { quiz: englishQuiz1._id, questionText: "'He is too weak to walk.' କୁ simple sentence କର।", options: ["He is so weak that he cannot walk.", "He is too weak to walk.", "Being weak, he cannot walk.", "He cannot walk due to weakness."], correctAnswer: 2, marks: 1, explanation: "'Being weak' ବ୍ୟବହାର କରି simple sentence ହୁଏ।" },
      { quiz: englishQuiz1._id, questionText: "Complex sentence ରେ କଣ ଥାଏ?", options: ["ଦୁଇ independent clause", "ଏକ independent + ଏକ କିମ୍ବା ଅଧିକ dependent clause", "କେବଳ ଏକ clause", "Dependent clause ନଥାଏ"], correctAnswer: 1, marks: 1, explanation: "Complex sentence ରେ dependent clause ଥାଏ।" },
      { quiz: englishQuiz1._id, questionText: "'I know that he is honest.' ର noun clause କଣ?", options: ["I know", "that he is honest", "he is honest", "I know that"], correctAnswer: 1, marks: 1, explanation: "'That he is honest' object ଭାବେ କାମ କରୁଛି।" },
      { quiz: englishQuiz1._id, questionText: "'Everyone was present.' କୁ negative କର।", options: ["No one was absent.", "Everyone was absent.", "Not everyone was present.", "None was present."], correctAnswer: 0, marks: 1, explanation: "'No one was absent' ଏକ ସଠିକ negative form।" },
      { quiz: englishQuiz1._id, questionText: "Adverb clause କଣ କୁହେ?", options: ["Which one", "What kind", "When, where, why, how", "Who or what"], correctAnswer: 2, marks: 1, explanation: "Adverb clause ସମୟ, ସ୍ଥାନ, କାରଣ ଇତ୍ୟାଦି କୁହେ।" },
      { quiz: englishQuiz1._id, questionText: "'She is very beautiful.' କୁ interrogative କର।", options: ["Is she not very beautiful?", "She is beautiful?", "How she is beautiful?", "Beautiful is she?"], correctAnswer: 0, marks: 1, explanation: "Assertive → Interrogative ରେ rhetorical question କରାଯାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: Letter and Article Writing
    const englishQuiz2 = await Quiz.create({
      title: "Letter Writing and Article Writing",
      subject: "English",
      category: "Writing",
      chapter: "Formal Writing",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz2._id, questionText: "Editor କୁ formal letter କେଉଁ ବିଷୟରେ ଲେଖାଯାଏ?", options: ["ବ୍ୟକ୍ତିଗତ ବିଷୟ", "ସାର୍ବଜନୀନ ସମସ୍ୟା", "ପରିବାର ଖବର", "ଜନ୍ମଦିନ ଶୁଭେଚ୍ଛା"], correctAnswer: 1, marks: 1, explanation: "Editor କୁ ପତ୍ର ସାଧାରଣତଃ ସାର୍ବଜନୀନ ସମସ୍ୟା ଉପରେ ଲେଖାଯାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Formal letter ର ସଠିକ format କଣ?", options: ["କେବଳ body", "Sender address, date, receiver address, subject, body, closing", "Greeting ଏବଂ body", "Format ଦରକାର ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Formal letter ର ନିର୍ଦ୍ଧିଷ୍ଟ format ରହିଥାଏ।" },
      { quiz: englishQuiz2._id, questionText: "ଏକ article ରେ କଣ ଥିବା ଉଚିତ?", options: ["କେବଳ facts", "Heading, byline, introduction, body, conclusion", "କେବଳ opinion", "କୌଣସି structure ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ସୁସଂଗଠିତ article ରେ ସମସ୍ତ ଅଂଶ ଥାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Complaint letter ର tone କେମିତି ହେବା ଉଚିତ?", options: ["ରାଗୀ ଏବଂ rude", "Polite but firm", "Casual", "Threatening"], correctAnswer: 1, marks: 1, explanation: "Complaint letter ସମ୍ମାନଜନକ କିନ୍ତୁ ଦୃଢ଼ ହେବା ଉଚିତ।" },
      { quiz: englishQuiz2._id, questionText: "Formal letter ର subject line ର ଉଦ୍ଦେଶ୍ୟ କଣ?", options: ["Decoration", "ବିଷୟ ସଂକ୍ଷିପ୍ତରେ କୁହିବା", "ଦରକାର ନାହିଁ", "Greeting"], correctAnswer: 1, marks: 1, explanation: "Subject line ଦ୍ୱାରା ପତ୍ରର ଉଦ୍ଦେଶ୍ୟ ବୁଝାଯାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Leave application ରେ କଣ ଥିବା ଉଚିତ?", options: ["କେବଳ date", "Reason, duration, polite request", "କେବଳ reason", "କୌଣସି details ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Leave application ରେ କାରଣ ଏବଂ ସମୟ ଥାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Unknown person କୁ formal letter ର closing କଣ?", options: ["Yours lovingly", "Yours faithfully", "With love", "Best wishes"], correctAnswer: 1, marks: 1, explanation: "'Yours faithfully' ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: englishQuiz2._id, questionText: "'Importance of Trees' article ରେ କଣ ଥିବା ଉଚିତ?", options: ["କେବଳ statistics", "Introduction, benefits, present situation, conclusion", "କେବଳ personal experience", "କେବଳ scientific names"], correctAnswer: 1, marks: 1, explanation: "ଏକ ଭଲ article ରେ ଅନେକ ଦିଗ ଥାଏ।" },
      { quiz: englishQuiz2._id, questionText: "Board exam ର formal letter ର word limit ସାଧାରଣତଃ କେତେ?", options: ["50 words", "100-120 words", "500 words", "No limit"], correctAnswer: 1, marks: 1, explanation: "Board exam ରେ 100-120 words ହୁଏ।" },
      { quiz: englishQuiz2._id, questionText: "Notice କେଉଁ person ରେ ଲେଖାଯାଏ?", options: ["First person", "Third person", "Second person", "Any person"], correctAnswer: 1, marks: 1, explanation: "Notice third person ରେ ଲେଖାଯାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: Literature and Prose Comprehension
    const englishQuiz3 = await Quiz.create({
      title: "Literature and Prose Comprehension",
      subject: "English",
      category: "Literature",
      chapter: "Prose and Poetry",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz3._id, questionText: "Literature ରେ 'characterization' କଣ?", options: ["Setting description", "Author କିପରି character କୁ develop କରନ୍ତି", "Plot summary", "Theme statement"], correctAnswer: 1, marks: 1, explanation: "Characterization ରେ character ର ଗୁଣ ବର୍ଣ୍ଣନା କରାଯାଏ।" },
      { quiz: englishQuiz3._id, questionText: "'Foreshadowing' କଣ?", options: ["Past events", "Future events ର hints", "Story ending", "Character description"], correctAnswer: 1, marks: 1, explanation: "Foreshadowing ଭବିଷ୍ୟତ ଘଟଣାର ସୂଚନା ଦିଏ।" },
      { quiz: englishQuiz3._id, questionText: "'Flashback' କଣ?", options: ["Future event", "Past event ଦେଖାଉଥିବା scene", "Climax", "Resolution"], correctAnswer: 1, marks: 1, explanation: "Flashback ଗତ ଘଟଣାକୁ ଦେଖାଏ।" },
      { quiz: englishQuiz3._id, questionText: "'Point of view' କଣ?", options: ["Moral", "Story କେଉଁ perspective ରୁ କୁହାଯାଉଛି", "Setting", "Conflict"], correctAnswer: 1, marks: 1, explanation: "Story କେଉଁ perspective ରୁ narrated ହେଉଛି।" },
      { quiz: englishQuiz3._id, questionText: "'Satire' କଣ?", options: ["Love story", "Humor ଦ୍ୱାରା society କୁ criticize କରିବା", "Sad poem", "Biography"], correctAnswer: 1, marks: 1, explanation: "Satire humor ଏବଂ irony ଦ୍ୱାରା ସମାଜକୁ criticize କରେ।" },
      { quiz: englishQuiz3._id, questionText: "Prose ଏବଂ poetry ର ତଫାତ କଣ?", options: ["କୌଣସି ତଫାତ ନାହିଁ", "Prose ସାଧାରଣ ଭାଷା; poetry ର rhythm ଥାଏ", "Poetry ଲମ୍ବା", "Prose rhyme କରେ"], correctAnswer: 1, marks: 1, explanation: "Poetry ରେ rhythm ଏବଂ rhyme ଥାଏ।" },
      { quiz: englishQuiz3._id, questionText: "'Allegory' କଣ?", options: ["Short poem", "Hidden meaning ଥିବା story", "Novel type", "Comedy"], correctAnswer: 1, marks: 1, explanation: "Allegory ରେ ଗୁପ୍ତ ନୈତିକ କିମ୍ବା ରାଜନୈତିକ ଅର୍ଥ ଥାଏ।" },
      { quiz: englishQuiz3._id, questionText: "'Conflict' କଣ?", options: ["Ending", "Opposing forces ମଧ୍ୟରେ struggle", "Setting", "Characters"], correctAnswer: 1, marks: 1, explanation: "Conflict story କୁ ଆଗକୁ ନେଇଯାଏ।" },
      { quiz: englishQuiz3._id, questionText: "'Denouement' କଣ?", options: ["Beginning", "Climax", "Final resolution", "Rising action"], correctAnswer: 2, marks: 1, explanation: "Denouement ରେ story ର ଶେଷ ସମାଧାନ ହୁଏ।" },
      { quiz: englishQuiz3._id, questionText: "'Stream of consciousness' writing କଣ?", options: ["River ବିଷୟରେ ଲେଖା", "Character ର ଅବିରତ ଚିନ୍ତାଧାରା", "Bullet points", "Dialogue only"], correctAnswer: 1, marks: 1, explanation: "Character ର ଅବିରତ ଚିନ୍ତାଧାରାକୁ ଦେଖାଏ।" },
    ]);

    console.log("✓ Class 10 - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10EnglishOdia;
