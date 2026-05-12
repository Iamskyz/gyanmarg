import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsEnglishOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଇଂରାଜୀ ସାହିତ୍ୟ - ଗଦ୍ୟ ଏବଂ କବିତା",
      subject: "English",
      category: "Literature",
      chapter: "ଗଦ୍ୟ ଏବଂ କବିତା",
      grade: 11,
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
      { quiz: quiz1._id, questionText: "'The Portrait of a Lady' କିଏ ଲେଖିଥିଲେ?", options: ["R.K. Narayan", "Khushwant Singh", "Ruskin Bond", "Mulk Raj Anand"], correctAnswer: 1, marks: 1, explanation: "Khushwant Singh ତାଙ୍କ ଆଜିଆଙ୍କ ବିଷୟରେ ଏହି କାହାଣୀ ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'A Photograph' କବିତା କାହା ବିଷୟରେ?", options: ["ପ୍ରକୃତି", "ମାଆଙ୍କ ସ୍ମୃତି ଏବଂ ବିୟୋଗ", "ଶୈଶବ ଖେଳ", "ଭ୍ରମଣ"], correctAnswer: 1, marks: 1, explanation: "ଏହି କବିତାରେ କବି ତାଙ୍କ ମାଆଙ୍କ ସ୍ମୃତିକୁ ମନେ ପକାନ୍ତି।" },
      { quiz: quiz1._id, questionText: "'We're Not Afraid to Die' କାହାଁକୁ ଯାତ୍ରା ବର୍ଣ୍ଣନା କରେ?", options: ["Atlantic Ocean", "Southern Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correctAnswer: 1, marks: 1, explanation: "ଏହି କାହାଣୀ Southern Indian Ocean ର ଯାତ୍ରା ବିଷୟରେ।" },
      { quiz: quiz1._id, questionText: "'Discovering Tut: The Saga Continues' ର ଲେଖକ କିଏ?", options: ["A.R. Williams", "Khushwant Singh", "Nani Palkhivala", "Nick Middleton"], correctAnswer: 0, marks: 1, explanation: "A.R. Williams King Tut ଙ୍କ mummy ବିଷୟରେ ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'The Laburnum Top' କିଏ ଲେଖିଥିଲେ?", options: ["Shirley Toulson", "Ted Hughes", "Walt Whitman", "John Keats"], correctAnswer: 1, marks: 1, explanation: "Ted Hughes ଏହି କବିତା ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'The Voice of the Rain' ରେ ବର୍ଷା ନିଜକୁ କଣ କହେ?", options: ["Gift of God", "Poem of Earth", "Tears of sky", "River of heaven"], correctAnswer: 1, marks: 1, explanation: "ବର୍ଷା ନିଜକୁ 'Poem of Earth' କୁହେ।" },
      { quiz: quiz1._id, questionText: "'Silk Road' କାହାଁକୁ ଯାତ୍ରା ବର୍ଣ୍ଣନା କରେ?", options: ["China", "Tibet", "India", "Mongolia"], correctAnswer: 1, marks: 1, explanation: "Nick Middleton Tibet ର ଯାତ୍ରା ବର୍ଣ୍ଣନା କରିଛନ୍ତି।" },
      { quiz: quiz1._id, questionText: "'The Summer of the Beautiful White Horse' ର ମୁଖ୍ୟ ବିଷୟ କଣ?", options: ["ଦାରିଦ୍ର୍ୟ ଏବଂ ଚୋରି", "ଦାରିଦ୍ର୍ୟ ସତ୍ତ୍ୱେ ସତ୍ୟନିଷ୍ଠା", "ଘୋଡ଼ା ଦୌଡ଼", "ପରିବାରୀକ ବିବାଦ"], correctAnswer: 1, marks: 1, explanation: "ଏହି କାହାଣୀ ସତ୍ୟନିଷ୍ଠାର ମୂଲ୍ୟକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz1._id, questionText: "'The Summer of the Beautiful White Horse' କିଏ ଲେଖିଥିଲେ?", options: ["Ruskin Bond", "William Saroyan", "R.K. Narayan", "Mark Twain"], correctAnswer: 1, marks: 1, explanation: "William Saroyan ଏହି କାହାଣୀ ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'The Address' କାହା ସହ ସମ୍ପର୍କିତ?", options: ["ଯୁଦ୍ଧ ଏବଂ ଚ୍ୟୁତି", "ଯୁଦ୍ଧ ପରେ ସମ୍ପତ୍ତି ପୁନରୁଦ୍ଧାର", "ସ୍କୁଲ ଜୀବନ", "ପ୍ରକୃତି"], correctAnswer: 1, marks: 1, explanation: "ଏହି କାହାଣୀ Holocaust survivor ଙ୍କ ଅନୁଭବ ବିଷୟରେ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଇଂରାଜୀ ବ୍ୟାକରଣ ଏବଂ ରଚନା",
      subject: "English",
      category: "Grammar",
      chapter: "Grammar and Composition",
      grade: 11,
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
      { quiz: quiz2._id, questionText: "'She writes a letter.' ର ସଠିକ passive voice କଣ?", options: ["A letter is written by her.", "A letter was written by her.", "A letter has been written by her.", "A letter is being written by her."], correctAnswer: 0, marks: 1, explanation: "Simple present passive = is/are + past participle." },
      { quiz: quiz2._id, questionText: "କେଉଁ sentence ରେ subjunctive mood ଠିକ୍ ଅଛି?", options: ["If I was rich, I would travel.", "If I were rich, I would travel.", "If I am rich, I would travel.", "If I be rich, I would travel."], correctAnswer: 1, marks: 1, explanation: "'Were' hypothetical condition ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: quiz2._id, questionText: "ଯେଉଁ clause ଏକାକୀ sentence ହୋଇପାରେ ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["Dependent clause", "Independent clause", "Relative clause", "Noun clause"], correctAnswer: 1, marks: 1, explanation: "Independent clause ରେ complete thought ଥାଏ।" },
      { quiz: quiz2._id, questionText: "'The wind howled' ର figure of speech କଣ?", options: ["Simile", "Personification", "Metaphor", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Wind କୁ human quality ଦିଆଯାଇଛି।" },
      { quiz: quiz2._id, questionText: "ସଠିକ sentence ବାଛନ୍ତୁ:", options: ["Neither the boys nor the girl were present.", "Neither the boys nor the girl was present.", "Neither the boys nor the girl are present.", "Neither the boys nor the girl have been present."], correctAnswer: 1, marks: 1, explanation: "Verb nearest subject ସହ agree କରେ।" },
      { quiz: quiz2._id, questionText: "Oxymoron କଣ?", options: ["Exaggeration", "ବିରୋଧାଭାସୀ ଶବ୍ଦର ସଂଯୋଜନ", "Comparison using like", "Sound repetition"], correctAnswer: 1, marks: 1, explanation: "Oxymoron ରେ contradictory words ଥାଏ।" },
      { quiz: quiz2._id, questionText: "କେଉଁଟି complex sentence?", options: ["He ran fast.", "He ran fast and won the race.", "Although he ran fast, he lost the race.", "He ran fast; he won the race."], correctAnswer: 2, marks: 1, explanation: "Complex sentence ରେ dependent clause ଥାଏ।" },
      { quiz: quiz2._id, questionText: "'He said, \"I am happy\"' ର indirect speech କଣ?", options: ["He said that he is happy.", "He said that he was happy.", "He said that I am happy.", "He told that he was happy."], correctAnswer: 1, marks: 1, explanation: "Indirect speech ରେ tense backshift ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Dangling modifier କଣ?", options: ["Misplaced adjective", "ଯାହାର ସଠିକ subject ନଥାଏ", "Split infinitive", "Double negative"], correctAnswer: 1, marks: 1, explanation: "Dangling modifier ର logical subject ନଥାଏ।" },
      { quiz: quiz2._id, questionText: "Alliteration କଣ?", options: ["Vowel sound repetition", "ଶବ୍ଦର ଆରମ୍ଭର consonant sound repetition", "Exaggeration", "Understatement"], correctAnswer: 1, marks: 1, explanation: "Alliteration ରେ initial consonant sound repeat ହୁଏ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Reading Comprehension ଏବଂ Vocabulary",
      subject: "English",
      category: "Language Skills",
      chapter: "Comprehension and Vocabulary",
      grade: 11,
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
      { quiz: quiz3._id, questionText: "'Benevolent' ର ଅର୍ଥ କଣ?", options: ["Cruel", "ଦୟାଳୁ ଏବଂ ଉଦାର", "Angry", "Lazy"], correctAnswer: 1, marks: 1, explanation: "Benevolent ମାନେ ଦୟାଳୁ।" },
      { quiz: quiz3._id, questionText: "'Verbose' ର antonym କଣ?", options: ["Wordy", "Concise", "Lengthy", "Elaborate"], correctAnswer: 1, marks: 1, explanation: "Concise ମାନେ ସଂକ୍ଷିପ୍ତ।" },
      { quiz: quiz3._id, questionText: "'Ephemeral' ର ଅର୍ଥ କଣ?", options: ["Permanent", "ଅତ୍ୟନ୍ତ ଅଲ୍ପ ସମୟ ପର୍ଯ୍ୟନ୍ତ", "Beautiful", "Dangerous"], correctAnswer: 1, marks: 1, explanation: "Ephemeral ମାନେ short-lived।" },
      { quiz: quiz3._id, questionText: "'To burn the midnight oil' ର ଅର୍ଥ କଣ?", options: ["ସମ୍ପଦ ନଷ୍ଟ କରିବା", "ରାତି ଦେର ପର୍ଯ୍ୟନ୍ତ କାମ କିମ୍ବା ପଢ଼ିବା", "ରାତିରେ ରାନ୍ଧିବା", "ରାତିରେ ଯାତ୍ରା"], correctAnswer: 1, marks: 1, explanation: "ଏହି idiom ର ଅର୍ଥ ରାତି ଦେର ପର୍ଯ୍ୟନ୍ତ କାମ କରିବା।" },
      { quiz: quiz3._id, questionText: "'Ubiquitous' ର synonym କଣ?", options: ["Rare", "Omnipresent", "Unique", "Hidden"], correctAnswer: 1, marks: 1, explanation: "Ubiquitous ମାନେ ସବୁଠାରେ ଥିବା।" },
      { quiz: quiz3._id, questionText: "'Mis-' prefix କଣ ସୂଚିତ କରେ?", options: ["Again", "Wrongly", "Before", "After"], correctAnswer: 1, marks: 1, explanation: "'Mis-' ମାନେ wrongly।" },
      { quiz: quiz3._id, questionText: "'Pragmatic' ର ଅର୍ଥ କଣ?", options: ["Idealistic", "ବ୍ୟବହାରିକ ଭାବରେ କାମ କରିବା", "Theoretical", "Emotional"], correctAnswer: 1, marks: 1, explanation: "Pragmatic ମାନେ practical।" },
      { quiz: quiz3._id, questionText: "'Paradox' କଣ?", options: ["Simple statement", "ଦେଖିବାକୁ ବିରୋଧାଭାସୀ କିନ୍ତୁ ସତ୍ୟ ଥିବା ବକ୍ତବ୍ୟ", "False statement", "Question"], correctAnswer: 1, marks: 1, explanation: "Paradox ଦେଖିବାକୁ ବିରୋଧାଭାସୀ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "'Ameliorate' ର ଅର୍ଥ କଣ?", options: ["Worsen", "ସୁଧାର କରିବା", "Destroy", "Ignore"], correctAnswer: 1, marks: 1, explanation: "Ameliorate ମାନେ improve କରିବା।" },
      { quiz: quiz3._id, questionText: "'To let the cat out of the bag' ର ଅର୍ଥ କଣ?", options: ["ପଶୁ ଛାଡ଼ିଦେବା", "ଗୁପ୍ତ କଥା ପ୍ରକାଶ କରିଦେବା", "ଭୁଲ କରିବା", "ଝଗଡ଼ା ଆରମ୍ଭ କରିବା"], correctAnswer: 1, marks: 1, explanation: "ଏହି idiom ର ଅର୍ଥ ଗୁପ୍ତ କଥା ଖୋଲିଦେବା।" },
    ]);

    console.log("✓ Class 11 Arts - English Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsEnglishOdia };
