import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceEnglishOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Flamingo ଏବଂ Vistas - ଗଦ୍ୟ",
      subject: "English",
      category: "Literature",
      chapter: "Prose",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "'The Third Level' by Jack Finney କାହା ବିଷୟରେ?", options: ["ଏକ ସତ୍ୟ train station", "ଆଧୁନିକ ଚାପରୁ time travel fantasy ମାଧ୍ୟମରେ ପଳାୟନ", "Science experiment", "War story"], correctAnswer: 1, marks: 1, explanation: "Charley modern life ର pressure ଠାରୁ ଦୂରେଇବା ପାଇଁ third level କଳ୍ପନା କରେ।" },
      { quiz: quiz1._id, questionText: "'The Tiger King' କ’ଣ ଉପରେ satire?", options: ["Wildlife", "ଶକ୍ତିର ଅହଂକାର ଏବଂ ଅନ୍ଧବିଶ୍ୱାସ", "Hunting skills", "Royal lifestyle"], correctAnswer: 1, marks: 1, explanation: "Maharaja ଙ୍କ tiger ମାରିବା obsession କୁ ବ୍ୟଙ୍ଗ କରାଯାଇଛି।" },
      { quiz: quiz1._id, questionText: "'Journey to the End of the Earth' କ’ଣ ଦର୍ଶାଏ?", options: ["Tourism", "Antarctica ଉପରେ climate change ର ପ୍ରଭାବ", "Space travel", "Mountain climbing"], correctAnswer: 1, marks: 1, explanation: "Tishani Doshi Antarctica ର environmental concern ଦର୍ଶାଇଛନ୍ତି।" },
      { quiz: quiz1._id, questionText: "'The Enemy' by Pearl S. Buck କ’ଣ ଦର୍ଶାଏ?", options: ["War strategy", "Doctor ଏବଂ patriot ଭାବରେ ଦ୍ୱନ୍ଦ୍ୱ", "Love story", "Adventure"], correctAnswer: 1, marks: 1, explanation: "Dr. Sadao ଙ୍କ moral dilemma କୁ ଦର୍ଶାଯାଇଛି।" },
      { quiz: quiz1._id, questionText: "'On the Face of It' ର Derry ଙ୍କ କ’ଣ ସମସ୍ୟା?", options: ["Acid burn ଦ୍ୱାରା ମୁହଁ ପୋଡ଼ିଯାଇଛି", "Broken leg", "Blindness", "Deafness"], correctAnswer: 0, marks: 1, explanation: "Derry ଙ୍କ ମୁହଁ acid ଦ୍ୱାରା ପୋଡ଼ିଯାଇଛି।" },
      { quiz: quiz1._id, questionText: "'Memories of Childhood' କାହା ଦ୍ୱାରା ଲେଖାଯାଇଛି?", options: ["Two male authors", "Zitkala-Sa ଏବଂ Bama", "British authors", "Scientists"], correctAnswer: 1, marks: 1, explanation: "ଦୁହେଁ discrimination ର ଅନୁଭବ ଶେୟର କରିଛନ୍ତି।" },
      { quiz: quiz1._id, questionText: "'The Last Lesson' କେଉଁ ସମୟରେ ଘଟିଥିଲା?", options: ["World War I", "Franco-Prussian War", "World War II", "French Revolution"], correctAnswer: 1, marks: 1, explanation: "Alsace ରେ French ବଦଳରେ German ଶିଖାଯାଉଥିଲା।" },
      { quiz: quiz1._id, questionText: "'Evans Tries an O-Level' କାହା ବିଷୟରେ?", options: ["Student", "Exam ସମୟରେ ପଳାଇବା ଯୋଜନା କରୁଥିବା prisoner", "Teacher", "Officer"], correctAnswer: 1, marks: 1, explanation: "Evans exam କୁ escape plan ଭାବରେ ବ୍ୟବହାର କରେ।" },
      { quiz: quiz1._id, questionText: "'Should Wizard Hit Mommy?' କ’ଣ ଦର୍ଶାଏ?", options: ["Magic tricks", "Parental authority ଏବଂ child perspective ମଧ୍ୟର conflict", "Wizard stories", "School life"], correctAnswer: 1, marks: 1, explanation: "Jo story ର ending କୁ challenge କରେ।" },
      { quiz: quiz1._id, questionText: "'The Cutting of My Long Hair' କ’ଣର ପ୍ରତୀକ?", options: ["Fashion", "Cultural identity ର ହାନି", "Hygiene", "Growth"], correctAnswer: 1, marks: 1, explanation: "Forced hair cutting Native American identity ହରାଇବାକୁ ସୂଚାଏ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "Poetry ଏବଂ Literary Devices",
      subject: "English",
      category: "Literature",
      chapter: "Poetry",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "'A Thing of Beauty is a joy forever' ର କବି କିଏ?", options: ["Shelley", "John Keats", "Wordsworth", "Byron"], correctAnswer: 1, marks: 1, explanation: "ଏହି line Keats ଙ୍କ 'Endymion' ରୁ ନିଆଯାଇଛି।" },
      { quiz: quiz2._id, questionText: "'Keeping Quiet' ରେ silence କ’ଣ ନୁହେଁ?", options: ["Introspection", "ସମ୍ପୂର୍ଣ୍ଣ inactivity କିମ୍ବା death", "Peace", "Self-reflection"], correctAnswer: 1, marks: 1, explanation: "Neruda କହିଛନ୍ତି silence ର ଅର୍ଥ death ନୁହେଁ।" },
      { quiz: quiz2._id, questionText: "Synecdoche କ’ଣ?", options: ["Opposite କହିବା", "Part ଦ୍ୱାରା whole କୁ ସୂଚାଇବା", "Exaggeration", "Sound repetition"], correctAnswer: 1, marks: 1, explanation: "'All hands on deck' ରେ hands sailors କୁ ସୂଚାଏ।" },
      { quiz: quiz2._id, questionText: "Literature ରେ irony ର ଅର୍ଥ କ’ଣ?", options: ["Literal meaning", "Expected ଏବଂ actual ମଧ୍ୟର ତଫାତ", "Repetition", "Comparison"], correctAnswer: 1, marks: 1, explanation: "Irony expectation ଏବଂ reality ର contrast।" },
      { quiz: quiz2._id, questionText: "Elegy କେମିତି poem?", options: ["Victory celebration", "ଶୋକ କିମ୍ବା grief ର poem", "Story poem", "Nature praise"], correctAnswer: 1, marks: 1, explanation: "Elegy ମୃତ୍ୟୁ କିମ୍ବା grief ଉପରେ ଲେଖାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Poetry ର enjambment କ’ଣ?", options: ["End-stopped lines", "Sentence line break ପରେ ଚାଲିଥାଏ", "Rhyming couplet", "Repetition"], correctAnswer: 1, marks: 1, explanation: "Thought next line କୁ ଚାଲିଯାଏ।" },
      { quiz: quiz2._id, questionText: "Sonnet ରେ କେତେ lines ଥାଏ?", options: ["10", "14", "20", "8"], correctAnswer: 1, marks: 1, explanation: "Sonnet ହେଉଛି 14-line poem।" },
      { quiz: quiz2._id, questionText: "Imagery କ’ଣକୁ appeal କରେ?", options: ["Only sight", "ସମସ୍ତ ପାଞ୍ଚ senses", "Only hearing", "Only touch"], correctAnswer: 1, marks: 1, explanation: "Imagery ମନରେ picture ସୃଷ୍ଟି କରେ।" },
      { quiz: quiz2._id, questionText: "Ballad କ’ଣ?", options: ["Love letter", "Music ସହ narrative poem", "Essay", "Drama"], correctAnswer: 1, marks: 1, explanation: "Ballad ଗଳ୍ପମୂଳକ poem।" },
      { quiz: quiz2._id, questionText: "Anaphora କ’ଣ?", options: ["Ending repetition", "Successive lines ର ଆରମ୍ଭରେ repetition", "Sound imitation", "Exaggeration"], correctAnswer: 1, marks: 1, explanation: "Repeated beginning emphasis ପାଇଁ ବ୍ୟବହୃତ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Writing Skills ଏବଂ Grammar",
      subject: "English",
      category: "Grammar",
      chapter: "Writing and Grammar",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Précis କେମିତି ହେବା ଉଚିତ?", options: ["Original ଠାରୁ ଲମ୍ବା", "Original ର ପ୍ରାୟ ତୃତୀୟାଂଶ", "Same length", "One sentence"], correctAnswer: 1, marks: 1, explanation: "Précis ମୂଳ ଭାବ ରଖି ସଂକ୍ଷିପ୍ତ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Debate ର speaker କ’ଣ କରିବା ଆବଶ୍ୟକ?", options: ["Only agree", "Motion ପକ୍ଷ କିମ୍ବା ବିପକ୍ଷରେ argument ଦେବା", "Stories କହିବା", "Questions only"], correctAnswer: 1, marks: 1, explanation: "Debate ରେ structured argument ଦରକାର।" },
      { quiz: quiz3._id, questionText: "କେଉଁଟି compound-complex sentence?", options: ["He ran fast.", "He ran fast, but he missed the bus because he was late.", "Although he ran, he missed it.", "He ran and won."], correctAnswer: 1, marks: 1, explanation: "ଏଥିରେ independent ଏବଂ dependent clauses ଦୁହେଁ ଅଛି।" },
      { quiz: quiz3._id, questionText: "'Swimming is good exercise' ର gerund କ’ଣ?", options: ["Good", "Swimming", "Exercise", "Is"], correctAnswer: 1, marks: 1, explanation: "Swimming noun ଭାବେ ବ୍ୟବହୃତ।" },
      { quiz: quiz3._id, questionText: "Speech writing ରେ କ’ଣ ଥାଏ?", options: ["Only greeting", "Greeting, introduction, body, conclusion", "Only conclusion", "Only facts"], correctAnswer: 1, marks: 1, explanation: "Proper speech structure ଦରକାର।" },
      { quiz: quiz3._id, questionText: "'The book which I bought is interesting.' ରେ underlined clause କ’ଣ?", options: ["Noun clause", "Adjective/Relative clause", "Adverb clause", "Main clause"], correctAnswer: 1, marks: 1, explanation: "'Which I bought' book କୁ modify କରୁଛି।" },
      { quiz: quiz3._id, questionText: "Active: 'Someone has stolen my wallet.' Passive କ’ଣ?", options: ["My wallet is stolen.", "My wallet has been stolen.", "My wallet was stolen.", "My wallet had been stolen."], correctAnswer: 1, marks: 1, explanation: "Present perfect passive = has/have been + past participle।" },
      { quiz: quiz3._id, questionText: "Letter to editor କେମିତି ହେବା ଉଚିତ?", options: ["Very long", "Concise ଏବଂ public issue ଉପରେ", "Personal", "No subject"], correctAnswer: 1, marks: 1, explanation: "Public concern ଏବଂ solution ଉପରେ focus କରିବା ଦରକାର।" },
      { quiz: quiz3._id, questionText: "'Each of the students have submitted their assignment.' ରେ error କ’ଣ?", options: ["Each", "have (should be has)", "submitted", "assignment"], correctAnswer: 1, marks: 1, explanation: "'Each' singular ଥିବାରୁ 'has' ହେବ।" },
      { quiz: quiz3._id, questionText: "Poster ରେ କ’ଣ ଥାଏ?", options: ["Long paragraphs", "Eye-catching visuals ଏବଂ brief text", "No images", "Only text"], correctAnswer: 1, marks: 1, explanation: "Poster clear message ଏବଂ attractive design ଥାଏ।" },
    ]);

    console.log("✓ Class 12 Commerce - English Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceEnglishOdia };
