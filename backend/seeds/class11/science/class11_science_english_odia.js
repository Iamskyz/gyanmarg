import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ScienceOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୁକ୍ତ");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Advanced Grammar
    const engQuiz1 = await Quiz.create({
      title: "ଉନ୍ନତ ବ୍ୟାକରଣ - Clauses ଏବଂ Conditionals",
      subject: "English",
      category: "Grammar",
      chapter: "Clauses ଏବଂ Conditionals",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: engQuiz1._id, questionText: "କେଉଁଟି Type 2 conditional sentence ?", options: ["ଯଦି ବର୍ଷା ହେବ, ମୁଁ ରହିବି।", "ଯଦି ମୁଁ ଧନୀ ହେଉଥାନ୍ତି, ମୁଁ ଭ୍ରମଣ କରିଥାନ୍ତି।", "ତୁମେ ପାଣି ଗରମ କଲେ, ଏହା ଫୁଟେ।", "ସେ ଆସିଲେ, ତାଙ୍କୁ କୁହ।"], correctAnswer: 1, marks: 1, explanation: "Type 2 conditional: If + past tense, would + base verb." },
      { quiz: engQuiz1._id, questionText: "'Unless' ର ଅର୍ଥ କଣ?", options: ["If", "If not", "Although", "Because"], correctAnswer: 1, marks: 1, explanation: "'Unless' ର ଅର୍ଥ 'if not'." },
      { quiz: engQuiz1._id, questionText: "Noun clause ଚିହ୍ନଟ କର: 'What he said surprised me.'", options: ["What he said", "surprised me", "he said", "me"], correctAnswer: 0, marks: 1, explanation: "'What he said' ବାକ୍ୟର subject ଭାବେ କାମ କରୁଛି।" },
      { quiz: engQuiz1._id, questionText: "'Had I known, I would have helped.' ଏହା କେଉଁ ପ୍ରକାର?", options: ["Type 1 conditional", "Type 2 conditional", "Type 3 conditional (inverted)", "Zero conditional"], correctAnswer: 2, marks: 1, explanation: "ଏହା Type 3 conditional ଅଟେ।" },
      { quiz: engQuiz1._id, questionText: "Relative clause କେଉଁ ଶବ୍ଦରୁ ଆରମ୍ଭ ହୁଏ?", options: ["Because, since", "Who, which, that, whom", "And, but, or", "If, unless"], correctAnswer: 1, marks: 1, explanation: "Relative clauses ରେ relative pronouns ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: engQuiz1._id, questionText: "'The man whose car was stolen reported to police.' ରେ relative pronoun କଣ?", options: ["The", "whose", "was", "stolen"], correctAnswer: 1, marks: 1, explanation: "'Whose' possession ଦର୍ଶାଏ।" },
      { quiz: engQuiz1._id, questionText: "Zero conditional କେଉଁଥିପାଇଁ ବ୍ୟବହୃତ ହୁଏ?", options: ["Unlikely situations", "ସାଧାରଣ ସତ୍ୟ ଏବଂ ତଥ୍ୟ", "Past regrets", "Future plans"], correctAnswer: 1, marks: 1, explanation: "ଏହା ସତ୍ୟ ଏବଂ facts ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: engQuiz1._id, questionText: "'I wish I were taller.' ଏହା କଣ ଦର୍ଶାଏ?", options: ["A fact", "ବର୍ତ୍ତମାନ ସମୟର ଅବାସ୍ତବ ଇଚ୍ଛା", "A past event", "A future plan"], correctAnswer: 1, marks: 1, explanation: "'I wish + past tense' ଅବାସ୍ତବ ଇଚ୍ଛା ପ୍ରକାଶ କରେ।" },
      { quiz: engQuiz1._id, questionText: "Non-defining relative clause:", options: ["ଅର୍ଥ ପାଇଁ ଆବଶ୍ୟକ", "ଅତିରିକ୍ତ ସୂଚନା ଦିଏ ଏବଂ commas ବ୍ୟବହାର କରେ", "'that' ବ୍ୟବହାର କରେ", "Pronoun ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ଏହା extra information ଦିଏ।" },
      { quiz: engQuiz1._id, questionText: "'Provided that' ର ସମାନ ଅର୍ଥ କଣ?", options: ["Although", "If/on condition that", "Because", "While"], correctAnswer: 1, marks: 1, explanation: "'Provided that' = 'if'." },
    ]);

    // Subcategory 2: Writing Skills
    const engQuiz2 = await Quiz.create({
      title: "ଉନ୍ନତ ଲେଖନ - Essays ଏବଂ Reports",
      subject: "English",
      category: "Writing",
      chapter: "Advanced Writing",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: engQuiz2._id, questionText: "Argumentative essay ରେ କଣ ଥିବା ଆବଶ୍ୟକ?", options: ["କେବଳ ଗୋଟିଏ ମତ", "Thesis, arguments, counter-arguments, conclusion", "କେବଳ personal stories", "Conclusion ନଥାଏ"], correctAnswer: 1, marks: 1, explanation: "Argumentative essay ରେ thesis ଏବଂ arguments ଥାଏ।" },
      { quiz: engQuiz2._id, questionText: "'Thesis statement' କଣ?", options: ["Title", "Essay ର ମୁଖ୍ୟ ଯୁକ୍ତି", "Question", "Bibliography"], correctAnswer: 1, marks: 1, explanation: "ଏହା essay ର ମୁଖ୍ୟ ଦାବି ଅଟେ।" },
      { quiz: engQuiz2._id, questionText: "Report writing ରେ tone କେମିତି ହେବା ଉଚିତ?", options: ["Emotional", "Objective ଏବଂ factual", "Poetic", "Casual"], correctAnswer: 1, marks: 1, explanation: "Reports factual ଏବଂ objective ହେବା ଉଚିତ।" },
      { quiz: engQuiz2._id, questionText: "ଏକ ଭଲ essay conclusion କଣ କରେ?", options: ["ନୂତନ ଧାରଣା ଆଣେ", "Thesis ପୁନରୁକ୍ତି କରି ମୁଖ୍ୟ ବିନ୍ଦୁ ସାରାଂଶ କରେ", "ପ୍ରଶ୍ନ କରେ", "Introduction ଠାରୁ ବଡ଼ ହୁଏ"], correctAnswer: 1, marks: 1, explanation: "Conclusion ମୁଖ୍ୟ ଯୁକ୍ତି ସାରାଂଶ କରେ।" },
      { quiz: engQuiz2._id, questionText: "'Topic sentence' କଣ?", options: ["Title", "Paragraph ର ପ୍ରଥମ sentence", "Last sentence", "Question"], correctAnswer: 1, marks: 1, explanation: "Topic sentence paragraph ର ମୁଖ୍ୟ ଧାରଣା ଦର୍ଶାଏ।" },
      { quiz: engQuiz2._id, questionText: "Writing ରେ coherence ର ଅର୍ଥ କଣ?", options: ["ବଡ଼ ଶବ୍ଦ ବ୍ୟବହାର", "ଧାରଣାର logical flow", "ଦୀର୍ଘ sentence", "ଅଧିକ paragraph"], correctAnswer: 1, marks: 1, explanation: "Coherence ର ଅର୍ଥ ଧାରଣାଗୁଡ଼ିକର ସୁନିୟୋଜିତ ଯୋଗାଯୋଗ।" },
      { quiz: engQuiz2._id, questionText: "Descriptive essay କଣ ବ୍ୟବହାର କରେ?", options: ["Statistics", "Sensory details ଏବଂ vivid language", "କେବଳ facts", "କେବଳ dialogue"], correctAnswer: 1, marks: 1, explanation: "Descriptive essay sensory details ବ୍ୟବହାର କରେ।" },
      { quiz: engQuiz2._id, questionText: "'Plagiarism' କଣ?", options: ["ଭଲ ଲେଖନ", "ଅନ୍ୟର କାମକୁ credit ଛଡ଼ା କପି କରିବା", "Quotes ବ୍ୟବହାର", "Paraphrasing"], correctAnswer: 1, marks: 1, explanation: "Plagiarism ଅର୍ଥ ଅନ୍ୟର କାମ ନକଲ କରିବା।" },
      { quiz: engQuiz2._id, questionText: "Formal report ରେ କଣ ଥାଏ?", options: ["Slang", "Title, introduction, findings, conclusion, recommendations", "କେବଳ opinions", "କୌଣସି structure ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Formal report ରେ structured sections ଥାଏ।" },
      { quiz: engQuiz2._id, questionText: "Transition words କାହିଁକି ସାହାଯ୍ୟ କରେ?", options: ["Text କୁ ବଡ଼ କରିବା", "Ideas କୁ ଯୋଡ଼ିବା", "Readers କୁ confuse କରିବା", "Essay ଶେଷ କରିବା"], correctAnswer: 1, marks: 1, explanation: "Transition words ideas କୁ smooth ଭାବେ ଯୋଡ଼େ।" },
    ]);

    // Subcategory 3: Literature
    const engQuiz3 = await Quiz.create({
      title: "ସାହିତ୍ୟ - Poetry ଏବଂ Drama",
      subject: "English",
      category: "Literature",
      chapter: "Poetry and Drama",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: engQuiz3._id, questionText: "'Soliloquy' କଣ?", options: ["ଦୁଇଜଣଙ୍କ dialogue", "ଚରିତ୍ରର ଏକାକୀ ଚିନ୍ତାଧାରା", "ଗୀତ", "Stage direction"], correctAnswer: 1, marks: 1, explanation: "Soliloquy ରେ ଚରିତ୍ର ଏକାକୀ ଚିନ୍ତାକୁ କହେ।" },
      { quiz: engQuiz3._id, questionText: "'Blank verse' କଣ?", options: ["Meaning ନଥିବା poetry", "Unrhymed iambic pentameter", "Free verse", "Rhyming couplets"], correctAnswer: 1, marks: 1, explanation: "Blank verse ରେ rhyme ନଥାଏ।" },
      { quiz: engQuiz3._id, questionText: "'Elegy' କଣ?", options: ["Happy poem", "ମୃତ୍ୟୁ ପାଇଁ ଶୋକ କବିତା", "Love poem", "Comic poem"], correctAnswer: 1, marks: 1, explanation: "Elegy ହେଉଛି mourning poem।" },
      { quiz: engQuiz3._id, questionText: "'Tragic flaw' କଣ?", options: ["Plot hole", "Hero ର ଦୁର୍ବଳତା", "Happy ending", "Minor character"], correctAnswer: 1, marks: 1, explanation: "ଏହା hero ର ଦୁର୍ବଳତା ଯାହା downfall କୁ ନେଇଯାଏ।" },
      { quiz: engQuiz3._id, questionText: "'Catharsis' ର ଅର୍ଥ କଣ?", options: ["Comedy", "Audience ର emotional purification", "Plot twist", "Happy ending"], correctAnswer: 1, marks: 1, explanation: "Catharsis ହେଉଛି emotional release।" },
      { quiz: engQuiz3._id, questionText: "'Ode' କଣ?", options: ["Short story", "ପ୍ରଶଂସାମୂଳକ lyric poem", "Novel", "Play"], correctAnswer: 1, marks: 1, explanation: "Ode ହେଉଛି ପ୍ରଶଂସା କବିତା।" },
      { quiz: engQuiz3._id, questionText: "'Dramatic irony' କଣ?", options: ["Funny dialogue", "Audience ଯାହା ଜାଣେ କିନ୍ତୁ characters ଜାଣନ୍ତି ନାହିଁ", "Sad scene", "Monologue"], correctAnswer: 1, marks: 1, explanation: "Audience ଏବଂ character ଜ୍ଞାନର ତଫାତ।" },
      { quiz: engQuiz3._id, questionText: "'Monologue' କଣ?", options: ["ଦୁଇଜଣ କଥାହେବା", "ଏକ ବ୍ୟକ୍ତିର ଦୀର୍ଘ ଭାଷଣ", "Song", "Dance"], correctAnswer: 1, marks: 1, explanation: "Monologue ହେଉଛି ଏକ ବ୍ୟକ୍ତିର ଭାଷଣ।" },
      { quiz: engQuiz3._id, questionText: "'Iambic pentameter' କଣ?", options: ["5 stressed syllables", "10 syllables ର alternating pattern", "Free verse", "Rhyming pattern"], correctAnswer: 1, marks: 1, explanation: "ଏହା unstressed-stressed syllables ର pattern।" },
      { quiz: engQuiz3._id, questionText: "'Ballad' କଣ?", options: ["Long novel", "କାହାଣୀ କହୁଥିବା narrative poem/song", "Essay", "Drama"], correctAnswer: 1, marks: 1, explanation: "Ballad ହେଉଛି କାହାଣୀମୂଳକ poem/song।" },
    ]);

    console.log("✓ Class 11 Science - English (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11ScienceOdia;
