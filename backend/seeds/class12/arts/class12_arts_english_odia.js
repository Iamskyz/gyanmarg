import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsEnglishOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Flamingo ଏବଂ Vistas - ଗଦ୍ୟ",
      subject: "English",
      category: "Literature",
      chapter: "ଗଦ୍ୟ ଅବଗାହନ",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "'The Last Lesson' ରେ M. Hamel କେଉଁ ବିଷୟ ପଢ଼ାଉଥିଲେ?", options: ["English", "French", "German", "History"], correctAnswer: 1, marks: 1, explanation: "Alsace ରେ German ଭାଷା ଲାଗୁ ହେବା ପୂର୍ବରୁ ଏହା ଶେଷ French class ଥିଲା।" },
      { quiz: quiz1._id, questionText: "Anees Jung ଙ୍କ 'Lost Spring' କ’ଣ ବିଷୟରେ?", options: ["ଋତୁ", "ଦରିଦ୍ରତା ଏବଂ child labor", "ପ୍ରକୃତି", "ପ୍ରେମ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ragpickers ଏବଂ bangle makers ଙ୍କ ଦୁର୍ଦ୍ଦଶାକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz1._id, questionText: "'Deep Water' ରେ Douglas କ’ଣକୁ ଜିତିଥିଲେ?", options: ["ଦରିଦ୍ରତା", "ପାଣିର ଭୟ", "ରୋଗ", "ଏକାକୀପଣ"], correctAnswer: 1, marks: 1, explanation: "William Douglas ନିଜର ଗଭୀର ଭୟକୁ ସାହସରେ ଜିତିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'The Rattrap' ରେ ପୃଥିବୀକୁ କ’ଣ ସହ ତୁଳନା କରାଯାଇଛି?", options: ["A cage", "A rattrap", "A maze", "A prison"], correctAnswer: 1, marks: 1, explanation: "ପୃଥିବୀ ଲୋକଙ୍କୁ ଲୋଭରେ trap କରେ।" },
      { quiz: quiz1._id, questionText: "'Indigo' ରେ sharecroppers ଙ୍କ ପକ୍ଷରେ କିଏ ଲଢ଼ିଥିଲେ?", options: ["Nehru", "Gandhi", "Ambedkar", "Patel"], correctAnswer: 1, marks: 1, explanation: "Gandhi ଙ୍କ Champaran movement indigo farmers ଙ୍କୁ ସହାୟତା କରିଥିଲା।" },
      { quiz: quiz1._id, questionText: "'Poets and Pancakes' କ’ଣ ବିଷୟରେ?", options: ["Cooking", "Madras ର Gemini Studios", "Poetry writing", "Painting"], correctAnswer: 1, marks: 1, explanation: "Asokamitran Gemini Studios ର ଜୀବନକୁ ବର୍ଣ୍ଣନା କରିଛନ୍ତି।" },
      { quiz: quiz1._id, questionText: "'The Interview' ରେ Umberto Eco ନିଜ ଲେଖା ବିଷୟରେ କ’ଣ କହିଥିଲେ?", options: ["ସେ କେବଳ novel ଲେଖନ୍ତି", "ସେ ଖାଲି ସମୟକୁ ବ୍ୟବହାର କରନ୍ତି", "ସେ କେବେ plan କରନ୍ତିନାହିଁ", "ସେ କେବଳ ରାତିରେ ଲେଖନ୍ତି"], correctAnswer: 1, marks: 1, explanation: "Eco ନିଜ schedule ର ଖାଲି ସମୟକୁ writing ପାଇଁ ବ୍ୟବହାର କରୁଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'Going Places' କେଉଁ ଥିମ୍ କୁ ଦର୍ଶାଏ?", options: ["Travel", "କିଶୋର ସ୍ୱପ୍ନ ଏବଂ ବାସ୍ତବତା", "Sports", "Education"], correctAnswer: 1, marks: 1, explanation: "Sophie's unrealistic dreams ତାଙ୍କ working-class life ସହ ବିପରୀତ।" },
      { quiz: quiz1._id, questionText: "'Memories of Childhood' ରେ Bama କ’ଣ ଅନୁଭବ କରିଥିଲେ?", options: ["Racial discrimination", "Caste discrimination", "Gender discrimination", "Religious discrimination"], correctAnswer: 1, marks: 1, explanation: "Bama ନିଜ ଗାଁରେ untouchability ଦେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'The Tiger King' କ’ଣକୁ ବ୍ୟଙ୍ଗ କରେ?", options: ["Wildlife conservation", "ରାଜସିକ ଅହଂକାର ଏବଂ ଅନ୍ଧବିଶ୍ୱାସ", "Hunting skills", "British rule"], correctAnswer: 1, marks: 1, explanation: "Maharaja ଙ୍କ tiger obsession ଉପରେ ବ୍ୟଙ୍ଗ କରାଯାଇଛି।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "Poetry Analysis - ଶ୍ରେଣୀ 12",
      subject: "English",
      category: "Literature",
      chapter: "କବିତା",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "'My Mother at Sixty-Six' କ’ଣ ଭାବ ପ୍ରକାଶ କରେ?", options: ["ଆନନ୍ଦ", "ବୃଦ୍ଧ ମାଆଙ୍କୁ ହରାଇବାର ଭୟ", "ରୋଷ", "Celebration"], correctAnswer: 1, marks: 1, explanation: "Kamala Das ନିଜ ମାଆଙ୍କ ବୃଦ୍ଧାବସ୍ଥା ଦେଖି ଯନ୍ତ୍ରଣା ଅନୁଭବ କରନ୍ତି।" },
      { quiz: quiz2._id, questionText: "'Keeping Quiet' ରେ Neruda କ’ଣ ଚାହୁଁଛନ୍ତି?", options: ["Revolution", "ନୀରବତା ଏବଂ ଆତ୍ମଚିନ୍ତନ", "War", "Celebration"], correctAnswer: 1, marks: 1, explanation: "ସେ ମାନବଜାତିକୁ ଅଲ୍ପ ସମୟ ରୁକି ଚିନ୍ତା କରିବାକୁ କହୁଛନ୍ତି।" },
      { quiz: quiz2._id, questionText: "'A Thing of Beauty' କେଉଁ Keats poem ରୁ ନିଆଯାଇଛି?", options: ["Ode to Autumn", "Endymion", "Hyperion", "Lamia"], correctAnswer: 1, marks: 1, explanation: "'A thing of beauty is a joy forever' Endymion ର ପ୍ରଥମ ପଙ୍କ୍ତି।" },
      { quiz: quiz2._id, questionText: "'Aunt Jennifer's Tigers' ରେ tigers କ’ଣକୁ ପ୍ରତିନିଧିତ୍ୱ କରେ?", options: ["ଭୟ", "ସ୍ୱାଧୀନତା ଏବଂ ଆତ୍ମବିଶ୍ୱାସ", "ବିପଦ", "Nature"], correctAnswer: 1, marks: 1, explanation: "Tigers ସେହି ସାହସୀ ଜୀବନର ପ୍ରତୀକ ଯାହା Aunt Jennifer ବଞ୍ଚିପାରୁନଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'A Roadside Stand' କ’ଣକୁ ଦର୍ଶାଏ?", options: ["Urban beauty", "ଗ୍ରାମୀଣ ଲୋକଙ୍କ ସହରୀୟ ଧନ ପ୍ରତି ଆଶା", "Road construction", "Travel"], correctAnswer: 1, marks: 1, explanation: "ଗ୍ରାମୀଣ ଲୋକମାନେ ସହରର ଲୋକ ତାଙ୍କ ସାମଗ୍ରୀ କିଣିବେ ବୋଲି ଆଶା କରନ୍ତି।" },
      { quiz: quiz2._id, questionText: "'An Elementary School Classroom in a Slum' କବିତା କାହାର?", options: ["Keats", "Stephen Spender", "Neruda", "Frost"], correctAnswer: 1, marks: 1, explanation: "Spender slum classroom ଏବଂ ବିଶାଳ ପୃଥିବୀ ମଧ୍ୟରେ contrast କରିଛନ୍ତି।" },
      { quiz: quiz2._id, questionText: "'the sea of faith' କେଉଁ literary device ର ଉଦାହରଣ?", options: ["Simile", "Metaphor", "Personification", "Alliteration"], correctAnswer: 1, marks: 1, explanation: "Faith କୁ ସିଧାସଳଖ sea ସହ ତୁଳନା କରାଯାଇଛି।" },
      { quiz: quiz2._id, questionText: "Alliteration କ’ଣ?", options: ["ସ୍ୱରଧ୍ୱନିର ପୁନରାବୃତ୍ତି", "ଆରମ୍ଭରେ consonant sound ର ପୁନରାବୃତ୍ତି", "ଅତିଶୟୋକ୍ତି", "Contrast"], correctAnswer: 1, marks: 1, explanation: "ନିକଟସ୍ଥ ଶବ୍ଦର ଆରମ୍ଭରେ ଏକେ consonant sound ର ପୁନରାବୃତ୍ତି।" },
      { quiz: quiz2._id, questionText: "Oxymoron କ’ଣ?", options: ["ଅତିଶୟୋକ୍ତି", "ବିରୋଧାଭାସୀ ଶବ୍ଦର ସମ୍ମିଳନ", "Comparison using like", "Sound imitation"], correctAnswer: 1, marks: 1, explanation: "ଉଦାହରଣ: 'living death', 'bitter sweet'." },
      { quiz: quiz2._id, questionText: "Free verse poetry ରେ କ’ଣ ନଥାଏ?", options: ["Meaning", "ନିୟମିତ meter ଏବଂ rhyme scheme", "Imagery", "Theme"], correctAnswer: 1, marks: 1, explanation: "Free verse ରେ କୌଣସି fixed rhythm କିମ୍ବା rhyme ନଥାଏ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Writing Skills ଏବଂ Advanced Grammar",
      subject: "English",
      category: "Grammar",
      chapter: "Writing and Grammar",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Formal letter ରେ କ’ଣ ଥିବା ଆବଶ୍ୟକ?", options: ["Slang", "Sender's address, date, subject, body, closing", "Emojis", "Only greeting"], correctAnswer: 1, marks: 1, explanation: "Formal letters ର ନିର୍ଦ୍ଦିଷ୍ଟ ଗଠନ ଥାଏ।" },
      { quiz: quiz3._id, questionText: "Report writing ରେ କ’ଣ ଆବଶ୍ୟକ?", options: ["କେବଳ personal opinions", "ସଂଗଠିତ factual information", "Poetry", "Dialogue"], correctAnswer: 1, marks: 1, explanation: "Reports objective ଭାବରେ facts ପ୍ରଦର୍ଶନ କରେ।" },
      { quiz: quiz3._id, questionText: "'Had I known, I would have helped.' ଏହା କେଉଁ conditional?", options: ["First conditional", "Second conditional", "Third conditional", "Zero conditional"], correctAnswer: 2, marks: 1, explanation: "Third conditional unreal past situations କୁ ଦର୍ଶାଏ।" },
      { quiz: quiz3._id, questionText: "କେଉଁଟି complex sentence?", options: ["He ran fast.", "He ran fast and won.", "Although he ran fast, he lost.", "Run fast."], correctAnswer: 2, marks: 1, explanation: "ଏଥିରେ independent ଏବଂ dependent clause ଅଛି।" },
      { quiz: quiz3._id, questionText: "'They are building a bridge' ର passive voice କ’ଣ?", options: ["A bridge was built.", "A bridge is being built.", "A bridge has been built.", "A bridge will be built."], correctAnswer: 1, marks: 1, explanation: "Present continuous passive: is/are + being + past participle." },
      { quiz: quiz3._id, questionText: "Newspaper article କିପରି ଆରମ୍ଭ ହେବା ଉଚିତ?", options: ["Dear Sir", "Attention-grabbing opening", "Once upon a time", "To whom it may concern"], correctAnswer: 1, marks: 1, explanation: "Readers ଙ୍କ ଆକର୍ଷଣ ପାଇଁ engaging opening ଦରକାର।" },
      { quiz: quiz3._id, questionText: "'Neither the students nor the teacher ___ present.' Fill in:", options: ["were", "was", "are", "have been"], correctAnswer: 1, marks: 1, explanation: "Verb nearest subject (teacher) ସହ agree କରେ।" },
      { quiz: quiz3._id, questionText: "Speech ର ଶେଷ କିପରି ହେବା ଉଚିତ?", options: ["Abruptly", "Strong conclusion କିମ୍ବା call to action", "କେବଳ question", "କେବଳ Thank you"], correctAnswer: 1, marks: 1, explanation: "ଭଲ speech ର memorable conclusion ଥାଏ।" },
      { quiz: quiz3._id, questionText: "'The wind howled in the night.' ଏହା କେଉଁ figure of speech?", options: ["Simile", "Personification", "Metaphor", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Wind କୁ ମାନବୀୟ ଗୁଣ ଦିଆଯାଇଛି।" },
      { quiz: quiz3._id, questionText: "Notice writing ରେ କ’ଣ ଥିବା ଦରକାର?", options: ["Personal details", "Title, date, body, issuing authority", "Long paragraphs", "Informal language"], correctAnswer: 1, marks: 1, explanation: "Notice ଛୋଟ, formal ଏବଂ informative ହେବା ଉଚିତ।" },
    ]);

    console.log("✓ Class 12 Arts - English Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsEnglishOdia };
