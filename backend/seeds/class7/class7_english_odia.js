import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7EnglishOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Tenses (Odia)
    const englishQuiz1Od = await Quiz.create({
      title: "କାଳ - ଅତୀତ, ବର୍ତ୍ତମାନ ଓ ଭବିଷ୍ୟତ",
      subject: "English",
      category: "ବ୍ୟାକରଣ",
      chapter: "କାଳ",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz1Od._id, questionText: "କେଉଁ ବାକ୍ୟ Simple Present Tense ରେ ଅଛି?", options: ["She went to school.", "She goes to school.", "She will go to school.", "She is going to school."], correctAnswer: 1, marks: 1, explanation: "'She goes to school' Simple Present Tense କାରଣ ଏହା ଏକ ଅଭ୍ୟାସଗତ କାର୍ଯ୍ୟ ବର୍ଣ୍ଣନା କରେ।" },
      { quiz: englishQuiz1Od._id, questionText: "'write' ର Past Tense କଣ?", options: ["writed", "wrote", "written", "writing"], correctAnswer: 1, marks: 1, explanation: "'write' ର Past Tense ହେଉଛି 'wrote'। ଏହା ଏକ ଅନିୟମିତ କ୍ରିୟାପଦ।" },
      { quiz: englishQuiz1Od._id, questionText: "'They have finished their homework.' - ଏହା କେଉଁ କାଳ?", options: ["Simple Past", "Present Perfect", "Past Perfect", "Simple Present"], correctAnswer: 1, marks: 1, explanation: "'Have finished' ହେଉଛି Present Perfect Tense (have/has + past participle)।" },
      { quiz: englishQuiz1Od._id, questionText: "'I ___ there tomorrow' - ସଠିକ Future Tense କଣ?", options: ["go", "went", "will go", "going"], correctAnswer: 2, marks: 1, explanation: "'Will go' ହେଉଛି Simple Future Tense ଯାହା ଭବିଷ୍ୟତ କାର୍ଯ୍ୟ ପାଇଁ ବ୍ୟବହୃତ।" },
      { quiz: englishQuiz1Od._id, questionText: "'read' ର Present Continuous ରୂପ କଣ?", options: ["reads", "read", "is reading", "has read"], correctAnswer: 2, marks: 1, explanation: "Present Continuous = is/am/are + verb-ing। 'Is reading' ସଠିକ।" },
      { quiz: englishQuiz1Od._id, questionText: "Past Continuous Tense ର ସଠିକ ବାକ୍ୟ ବାଛ:", options: ["He was playing cricket.", "He played cricket.", "He plays cricket.", "He has played cricket."], correctAnswer: 0, marks: 1, explanation: "'Was playing' ହେଉଛି Past Continuous (was/were + verb-ing)।" },
      { quiz: englishQuiz1Od._id, questionText: "'go' ର Past Participle କଣ?", options: ["went", "gone", "going", "goes"], correctAnswer: 1, marks: 1, explanation: "'go' ର Past Participle ହେଉଛି 'gone' (have/has/had ସହିତ ବ୍ୟବହୃତ)।" },
      { quiz: englishQuiz1Od._id, questionText: "କେଉଁ ବାକ୍ୟ Simple Past Tense ସଠିକ ବ୍ୟବହାର କରିଛି?", options: ["She sing a song.", "She sang a song.", "She has sung a song.", "She is singing a song."], correctAnswer: 1, marks: 1, explanation: "'Sang' ହେଉଛି 'sing' ର Simple Past ରୂପ।" },
      { quiz: englishQuiz1Od._id, questionText: "'I had eaten before he came.' - ଏହା କେଉଁ କାଳ?", options: ["Simple Past", "Past Perfect", "Present Perfect", "Past Continuous"], correctAnswer: 1, marks: 1, explanation: "'Had eaten' ହେଉଛି Past Perfect Tense (had + past participle)।" },
      { quiz: englishQuiz1Od._id, questionText: "Present Perfect Tense ରେ କେଉଁ ସହାୟକ କ୍ରିୟାପଦ ବ୍ୟବହୃତ ହୁଏ?", options: ["was/were", "is/am/are", "has/have", "will"], correctAnswer: 2, marks: 1, explanation: "Present Perfect Tense ରେ 'has' ବା 'have' past participle ସହିତ ବ୍ୟବହୃତ ହୁଏ।" },
    ]);

    // Subcategory 2: Vocabulary (Odia)
    const englishQuiz2Od = await Quiz.create({
      title: "ଶବ୍ଦ ଭଣ୍ଡାର ଓ ଶବ୍ଦ ଶକ୍ତି",
      subject: "English",
      category: "ଶବ୍ଦ ଭଣ୍ଡାର",
      chapter: "ଶବ୍ଦ ନିର୍ମାଣ",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz2Od._id, questionText: "'brave' ର ସମାର୍ଥକ (synonym) କଣ?", options: ["Coward", "Courageous", "Timid", "Weak"], correctAnswer: 1, marks: 1, explanation: "'Courageous' ର ଅର୍ଥ ସାହସୀ ବା ବୀର।" },
      { quiz: englishQuiz2Od._id, questionText: "'ancient' ର ବିପରୀତ (antonym) କଣ?", options: ["Old", "Historic", "Modern", "Antique"], correctAnswer: 2, marks: 1, explanation: "'Modern' ହେଉଛି 'ancient' (ପ୍ରାଚୀନ) ର ବିପରୀତ।" },
      { quiz: englishQuiz2Od._id, questionText: "'un-' ଉପସର୍ଗ (prefix) ର ଅର୍ଥ କଣ?", options: ["ପୁନର୍ବାର", "ନୁହେଁ", "ପୂର୍ବରୁ", "ପରେ"], correctAnswer: 1, marks: 1, explanation: "'un-' ଉପସର୍ଗର ଅର୍ଥ 'ନୁହେଁ'। ଉଦାହରଣ: unhappy = ଖୁସି ନୁହେଁ।" },
      { quiz: englishQuiz2Od._id, questionText: "'enormous' ର ଅର୍ଥ କଣ?", options: ["ବହୁତ ଛୋଟ", "ବହୁତ ବଡ଼", "ବହୁତ ଶୀଘ୍ର", "ବହୁତ ଧୀର"], correctAnswer: 1, marks: 1, explanation: "'Enormous' ର ଅର୍ଥ ଅତ୍ୟନ୍ତ ବଡ଼ ବା ବିଶାଳ।" },
      { quiz: englishQuiz2Od._id, questionText: "'ବହି ଲେଖୁଥିବା ବ୍ୟକ୍ତି'କୁ ଇଂରାଜୀରେ କଣ କୁହାଯାଏ?", options: ["Painter", "Author", "Singer", "Actor"], correctAnswer: 1, marks: 1, explanation: "'Author' ହେଉଛି ବହି ବା ସାହିତ୍ୟ ଲେଖୁଥିବା ବ୍ୟକ୍ତି।" },
      { quiz: englishQuiz2Od._id, questionText: "'happiness' ଶବ୍ଦରେ ପ୍ରତ୍ୟୟ (suffix) କଣ?", options: ["-hap", "-ness", "-iness", "-piness"], correctAnswer: 1, marks: 1, explanation: "'-ness' ହେଉଛି 'happy' ସହିତ ଯୋଡ଼ି 'happiness' ବିଶେଷ୍ୟ ଗଠନ କରୁଥିବା ପ୍ରତ୍ୟୟ।" },
      { quiz: englishQuiz2Od._id, questionText: "'homophone' କଣ?", options: ["ସମାନ ବନାନ ଶବ୍ଦ", "ସମାନ ଉଚ୍ଚାରଣ କିନ୍ତୁ ଭିନ୍ନ ଅର୍ଥ", "ବିପରୀତ ଅର୍ଥ ଶବ୍ଦ", "ସମାନ ଅର୍ଥ ଶବ୍ଦ"], correctAnswer: 1, marks: 1, explanation: "Homophones ସମାନ ଉଚ୍ଚାରଣ କିନ୍ତୁ ଭିନ୍ନ ଅର୍ଥ ଥିବା ଶବ୍ଦ। ଉଦାହରଣ: 'their' ଓ 'there'।" },
      { quiz: englishQuiz2Od._id, questionText: "'ox' ର ବହୁବଚନ କଣ?", options: ["Oxes", "Oxen", "Ox", "Oxs"], correctAnswer: 1, marks: 1, explanation: "'ox' ର ବହୁବଚନ ହେଉଛି 'oxen'। ଏହା ଅନିୟମିତ ବହୁବଚନ।" },
      { quiz: englishQuiz2Od._id, questionText: "'transparent' ର ଅର୍ଥ କଣ?", options: ["ଦେଖାଯାଏ ନାହିଁ", "ସ୍ପଷ୍ଟ ଦେଖାଯାଏ", "ଅଂଶତଃ ଦୃଶ୍ୟ", "ଗାଢ଼ ରଙ୍ଗ"], correctAnswer: 1, marks: 1, explanation: "'Transparent' ର ଅର୍ଥ ଯାହା ଦେଇ ସ୍ପଷ୍ଟ ଦେଖାଯାଏ, ଯେମିତି କାଚ।" },
      { quiz: englishQuiz2Od._id, questionText: "'generous' ର ବିପରୀତ କଣ?", options: ["Kind", "Selfish", "Helpful", "Caring"], correctAnswer: 1, marks: 1, explanation: "'Selfish' ହେଉଛି 'generous' (ଉଦାର) ର ବିପରୀତ।" },
    ]);

    // Subcategory 3: Comprehension and Writing (Odia)
    const englishQuiz3Od = await Quiz.create({
      title: "ବୋଧଗମ୍ୟତା ଓ ଲେଖନ କୌଶଳ",
      subject: "English",
      category: "ବୋଧଗମ୍ୟତା",
      chapter: "ପଠନ ଓ ଲେଖନ",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz3Od._id, questionText: "ଅନୁଚ୍ଛେଦରେ 'topic sentence' ର ଉଦ୍ଦେଶ୍ୟ କଣ?", options: ["ଅନୁଚ୍ଛେଦ ଶେଷ କରିବା", "ମୁଖ୍ୟ ଭାବ ପରିଚୟ ଦେବା", "ଉଦାହରଣ ଦେବା", "ପ୍ରଶ୍ନ ପଚାରିବା"], correctAnswer: 1, marks: 1, explanation: "Topic sentence ଅନୁଚ୍ଛେଦର ମୁଖ୍ୟ ଭାବ ପରିଚୟ ଦିଏ।" },
      { quiz: englishQuiz3Od._id, questionText: "'autobiography' କଣ?", options: ["ଅନ୍ୟ ଲେଖିଥିବା ଜୀବନୀ", "ନିଜ ଜୀବନ କାହାଣୀ", "କାଳ୍ପନିକ କାହାଣୀ", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "Autobiography ହେଉଛି ନିଜ ଜୀବନ କାହାଣୀ ନିଜେ ଲେଖିବା।" },
      { quiz: englishQuiz3Od._id, questionText: "'formal' ଓ 'informal' ଲେଖନ ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ କଣ?", options: ["କୌଣସି ପାର୍ଥକ୍ୟ ନାହିଁ", "Formal ରେ ଅପଭାଷା ବ୍ୟବହାର", "Formal ନିୟମ ଅନୁସରଣ କରେ ଓ ବୃତ୍ତିଗତ", "Informal ଲମ୍ବା"], correctAnswer: 2, marks: 1, explanation: "Formal ଲେଖନ ବ୍ୟାକରଣ ନିୟମ ଅନୁସରଣ କରେ ଓ ବୃତ୍ତିଗତ/ଅଧିକୃତ ପ୍ରସଙ୍ଗରେ ବ୍ୟବହୃତ।" },
      { quiz: englishQuiz3Od._id, questionText: "'simile' କଣ?", options: ["'like' ବା 'as' ବ୍ୟବହାର କରି ତୁଳନା", "ଅତିଶୟୋକ୍ତି", "ବସ୍ତୁକୁ ମାନବ ଗୁଣ ଦେବା", "ଧ୍ୱନି ପୁନରାବୃତ୍ତି"], correctAnswer: 0, marks: 1, explanation: "Simile 'like' ବା 'as' ବ୍ୟବହାର କରି ଦୁଇଟି ଜିନିଷ ତୁଳନା କରେ। ଉଦାହରଣ: 'as brave as a lion'।" },
      { quiz: englishQuiz3Od._id, questionText: "'metaphor' କଣ?", options: ["like/as ବିନା ସିଧା ତୁଳନା", "like ବା as ବ୍ୟବହାର", "ପ୍ରଶ୍ନ ପଚାରିବା", "ଶବ୍ଦ ପୁନରାବୃତ୍ତି"], correctAnswer: 0, marks: 1, explanation: "Metaphor 'like' ବା 'as' ବିନା ସିଧା ତୁଳନା। ଉଦାହରଣ: 'Life is a journey'।" },
      { quiz: englishQuiz3Od._id, questionText: "ଭଲ ଉପସଂହାର (conclusion) କଣ କରିବା ଉଚିତ?", options: ["ନୂତନ ଭାବ ପରିଚୟ", "ମୁଖ୍ୟ ବିଷୟ ସାରାଂଶ", "ଅନେକ ପ୍ରଶ୍ନ ପଚାରିବା", "ନୂତନ ବିଷୟ ଆରମ୍ଭ"], correctAnswer: 1, marks: 1, explanation: "ଭଲ ଉପସଂହାର ଲେଖାର ମୁଖ୍ୟ ବିଷୟଗୁଡ଼ିକୁ ସାରାଂଶ କରେ।" },
      { quiz: englishQuiz3Od._id, questionText: "'personification' କଣ?", options: ["ଦୁଇ ଜିନିଷ ତୁଳନା", "ଅଜୀବ ବସ୍ତୁକୁ ମାନବ ଗୁଣ ଦେବା", "ଅତିଶୟୋକ୍ତି", "ତୁକ ମିଳାଇବା"], correctAnswer: 1, marks: 1, explanation: "Personification ଅଜୀବ ବସ୍ତୁକୁ ମାନବ ଗୁଣ ଦିଏ। ଉଦାହରଣ: 'ପବନ ଫୁସୁଫୁସୁ କଲା'।" },
      { quiz: englishQuiz3Od._id, questionText: "ଔପଚାରିକ ପତ୍ରର ସଠିକ କ୍ରମ କଣ?", options: ["ମୁଖ୍ୟ ଅଂଶ, ଠିକଣା, ତାରିଖ", "ତାରିଖ, ଠିକଣା, ଅଭିବାଦନ, ମୁଖ୍ୟ ଅଂଶ, ସମାପନ", "ଅଭିବାଦନ, ମୁଖ୍ୟ ଅଂଶ, ତାରିଖ", "ମୁଖ୍ୟ ଅଂଶ, ସମାପନ, ଠିକଣା"], correctAnswer: 1, marks: 1, explanation: "ଔପଚାରିକ ପତ୍ର: ତାରିଖ, ଠିକଣା, ଅଭିବାଦନ, ମୁଖ୍ୟ ଅଂଶ, ସମାପନ।" },
      { quiz: englishQuiz3Od._id, questionText: "ପଠନରେ 'inference' ର ଅର୍ଥ କଣ?", options: ["ଜୋରରେ ପଢ଼ିବା", "ପାଠ୍ୟରୁ ସୂଚନା ଆଧାରରେ ନିଷ୍କର୍ଷ ବାହାର କରିବା", "ନକଲ କରିବା", "ମନେ ରଖିବା"], correctAnswer: 1, marks: 1, explanation: "Inference ଅର୍ଥ ପାଠ୍ୟରେ ଥିବା ସୂଚନା ଓ ସଙ୍କେତ ଆଧାରରେ ନିଷ୍କର୍ଷ ବାହାର କରିବା।" },
      { quiz: englishQuiz3Od._id, questionText: "'narrative' ଲେଖନ କଣ?", options: ["ଯୁକ୍ତି ଦେଉଥିବା ଲେଖା", "କାହାଣୀ କହୁଥିବା ଲେଖା", "ବର୍ଣ୍ଣନା କରୁଥିବା ଲେଖା", "ମନାଇବା ଲେଖା"], correctAnswer: 1, marks: 1, explanation: "Narrative ଲେଖନ ଚରିତ୍ର, ପରିବେଶ ଓ ଘଟଣା ସହିତ କାହାଣୀ କହେ।" },
    ]);

    console.log("✓ Class 7 - English (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7EnglishOdia;
