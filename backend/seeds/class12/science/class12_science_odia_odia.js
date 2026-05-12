import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceOdiaOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଗଦ୍ୟ - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Literature",
      chapter: "ଗଦ୍ୟ",
      grade: 12,
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
      { quiz: quiz1._id, questionText: "ଶ୍ରେଣୀ 12 ଓଡ଼ିଆ ପୁସ୍ତକର 'ଆମ କଥା' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ଫକୀର ମୋହନ ସେନାପତି", "ମନୋଜ ଦାସ", "ପ୍ରତିଭା ରାୟ"], correctAnswer: 2, marks: 1, explanation: "ମନୋଜ ଦାସ ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ ଉଭୟରେ ପ୍ରସିଦ୍ଧ ଗଳ୍ପକାର।" },
      { quiz: quiz1._id, questionText: "ଗୋପୀନାଥ ମହାନ୍ତି କେବେ ଜ୍ଞାନପୀଠ ପୁରସ୍କାର ପାଇଥିଲେ?", options: ["1970", "1973", "1980", "1985"], correctAnswer: 1, marks: 1, explanation: "ସେ 'ମାଟି ମଟାଲା' ପାଇଁ 1973 ରେ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ପ୍ରତିଭା ରାୟଙ୍କ ପ୍ରସିଦ୍ଧ ଉପନ୍ୟାସ କଣ?", options: ["ପରଜା", "ଯଜ୍ଞସେନୀ", "ଛ ମଣ ଆଠ ଗୁଣ୍ଠ", "ମାଟିର ମଣିଷ"], correctAnswer: 1, marks: 1, explanation: "'ଯଜ୍ଞସେନୀ' ଦ୍ରୌପଦୀଙ୍କ କାହାଣୀ ଉପରେ ଆଧାରିତ।" },
      { quiz: quiz1._id, questionText: "ସାରଳା ପୁରସ୍କାର କେଉଁ କ୍ଷେତ୍ରରେ ଦିଆଯାଏ?", options: ["ବିଜ୍ଞାନ", "ଓଡ଼ିଆ ସାହିତ୍ୟ", "କ୍ରୀଡ଼ା", "ସମାଜସେବା"], correctAnswer: 1, marks: 1, explanation: "ସାରଳା ପୁରସ୍କାର ଓଡ଼ିଆ ସାହିତ୍ୟ ପାଇଁ ପ୍ରସିଦ୍ଧ।" },
      { quiz: quiz1._id, questionText: "'ଦେଶ କାଳ ପାତ୍ର' କିଏ ଲେଖିଥିଲେ?", options: ["ସୁରେନ୍ଦ୍ର ମହାନ୍ତି", "ଗୋପୀନାଥ ମହାନ୍ତି", "ମନୋଜ ଦାସ", "ଚନ୍ଦ୍ରଶେଖର ରଥ"], correctAnswer: 0, marks: 1, explanation: "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି ପ୍ରସିଦ୍ଧ ଓଡ଼ିଆ ଉପନ୍ୟାସିକ।" },
      { quiz: quiz1._id, questionText: "'ଅର୍ଧ ସତ୍ୟ' ଆତ୍ମଜୀବନୀ କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀର ମୋହନ ସେନାପତି", "ଗୋପୀନାଥ ମହାନ୍ତି", "ରବି ସିଂହ", "ନନ୍ଦିନୀ ଶତପଥୀ"], correctAnswer: 0, marks: 1, explanation: "ଏହା 19ମ ଶତାବ୍ଦୀର ଓଡ଼ିଶା ବିଷୟରେ ଧାରଣା ଦେଇଥାଏ।" },
      { quiz: quiz1._id, questionText: "ଆଧୁନିକ ଓଡ଼ିଆ ନାଟକର ପ୍ରବର୍ତ୍ତକ କିଏ?", options: ["ରାମଚନ୍ଦ୍ର ମିଶ୍ର", "କାଳିଚରଣ ପଟ୍ଟନାୟକ", "ମନୋରଞ୍ଜନ ଦାସ", "ବିଜୟ ମିଶ୍ର"], correctAnswer: 1, marks: 1, explanation: "କାଳିଚରଣ ପଟ୍ଟନାୟକ ଆଧୁନିକ ଓଡ଼ିଆ ନାଟକର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: quiz1._id, questionText: "'ଅମୃତର ସନ୍ତାନ' କିଏ ଲେଖିଥିଲେ?", options: ["ମନୋଜ ଦାସ", "ଗୋପୀନାଥ ମହାନ୍ତି", "ପ୍ରତିଭା ରାୟ", "କିଶୋରୀ ଚରଣ ଦାସ"], correctAnswer: 0, marks: 1, explanation: "ମନୋଜ ଦାସଙ୍କ ପ୍ରସିଦ୍ଧ ସାହିତ୍ୟ କୃତି।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଶା ସାହିତ୍ୟ ଏକାଡେମୀ କେବେ ସ୍ଥାପିତ ହୋଇଥିଲା?", options: ["1954", "1957", "1961", "1965"], correctAnswer: 0, marks: 1, explanation: "ଓଡ଼ିଆ ସାହିତ୍ୟ ପ୍ରଚାର ପାଇଁ 1954ରେ ସ୍ଥାପିତ।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟର 'ବ୍ୟାସକବି' କିଏ?", options: ["ସାରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ଫକୀର ମୋହନ", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ"], correctAnswer: 0, marks: 1, explanation: "ସାରଳା ଦାସ ଓଡ଼ିଆ ମହାଭାରତ ଲେଖିଥିଲେ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଓଡ଼ିଆ କବିତା - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Literature",
      chapter: "କବିତା",
      grade: 12,
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
      { quiz: quiz2._id, questionText: "ସଚ୍ଚି ରାଉତରାୟଙ୍କ କବିତାର ବିଶେଷତା କଣ?", options: ["କେବଳ ରୋମାଣ୍ଟିକ", "ସାମାଜିକ ସଚେତନତା ଏବଂ ଲାଳିତ୍ୟ", "କେବଳ ପ୍ରକୃତି", "କେବଳ ବ୍ୟଙ୍ଗ"], correctAnswer: 1, marks: 1, explanation: "ସେ ସାମାଜିକ ସଚେତନତାକୁ କବିତାରେ ଦର୍ଶାଇଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ଗୁରୁପ୍ରସାଦ ମହାନ୍ତି କେଉଁ ସାହିତ୍ୟ ଆନ୍ଦୋଳନ ସହ ସମ୍ପର୍କିତ?", options: ["Romantic", "ସବୁଜ ଆନ୍ଦୋଳନ", "ପ୍ରଗତିବାଦୀ", "Post-modern"], correctAnswer: 1, marks: 1, explanation: "ସେ ସବୁଜ ଆନ୍ଦୋଳନର ସଦସ୍ୟ ଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'ସବୁଜ' ଆନ୍ଦୋଳନ କେଉଁଥିରୁ ପ୍ରଭାବିତ?", options: ["French literature", "English Romantic poetry", "Russian literature", "German philosophy"], correctAnswer: 1, marks: 1, explanation: "Keats ଏବଂ Shelley ଙ୍କ କବିତାର ପ୍ରଭାବ ଥିଲା।" },
      { quiz: quiz2._id, questionText: "ରାମାକାନ୍ତ ରଥ କେଉଁଥିପାଇଁ ପ୍ରସିଦ୍ଧ?", options: ["କେବଳ ଉପନ୍ୟାସ", "ଆଧୁନିକ ପରୀକ୍ଷାତ୍ମକ କବିତା", "କେବଳ ନାଟକ", "ଶିଶୁ ସାହିତ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ସେ ଆଧୁନିକ କବିତା ପାଇଁ ପ୍ରସିଦ୍ଧ।" },
      { quiz: quiz2._id, questionText: "ସୀତାକାନ୍ତ ମହାପାତ୍ର କେବେ ଜ୍ଞାନପୀଠ ପୁରସ୍କାର ପାଇଥିଲେ?", options: ["1990", "1993", "2000", "2005"], correctAnswer: 2, marks: 1, explanation: "ସେ 2000ରେ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'ପ୍ରଗତିବାଦୀ' ଆନ୍ଦୋଳନ କାହା ଉପରେ ଗୁରୁତ୍ୱ ଦେଇଥିଲା?", options: ["ପୁରାଣ", "ସାମାଜିକ ବାସ୍ତବତା ଏବଂ ସାଧାରଣ ଲୋକଙ୍କ ସଂଘର୍ଷ", "ପ୍ରକୃତି", "ଆଧ୍ୟାତ୍ମିକତା"], correctAnswer: 1, marks: 1, explanation: "ଏହା ସମାଜିକ ସମସ୍ୟା ଏବଂ ଦରିଦ୍ରତାକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz2._id, questionText: "ଜୟନ୍ତ ମହାପାତ୍ର କେଉଁ ଭାଷାରେ କବିତା ଲେଖନ୍ତି?", options: ["କେବଳ ଓଡ଼ିଆ", "ଇଂରାଜୀ", "ହିନ୍ଦୀ", "ବଙ୍ଗଳା"], correctAnswer: 1, marks: 1, explanation: "ସେ ପ୍ରସିଦ୍ଧ Indian English poet।" },
      { quiz: quiz2._id, questionText: "ଭୀମ ଭୋଇ କେଉଁ ଆନ୍ଦୋଳନର କବି?", options: ["ସବୁଜ", "ମହିମା ଧର୍ମ", "ପ୍ରଗତିବାଦୀ", "ରୋମାଣ୍ଟିକ"], correctAnswer: 1, marks: 1, explanation: "ଭୀମ ଭୋଇ ମହିମା ଧର୍ମର ସନ୍ତ କବି।" },
      { quiz: quiz2._id, questionText: "ରାଧାମୋହନ ଗଡ଼ନାୟକ କେଉଁଥିପାଇଁ ପ୍ରସିଦ୍ଧ?", options: ["ମହାକାବ୍ୟ", "ଆଧୁନିକ ଲିରିକ କବିତା", "କେବଳ ଗଦ୍ୟ", "ନାଟକ"], correctAnswer: 1, marks: 1, explanation: "ସେ ଆଧୁନିକ ଲିରିକ କବିତାରେ ଅବଦାନ ରଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'ଝଙ୍କାର' ପତ୍ରିକାର ସମ୍ପାଦକ କିଏ ଥିଲେ?", options: ["ସଚ୍ଚି ରାଉତରାୟ", "କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ", "ଅନ୍ନଦା ଶଙ୍କର ରାୟ", "ଗୋପୀନାଥ ମହାନ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ସେ ପ୍ରସିଦ୍ଧ ସାହିତ୍ୟ ପତ୍ରିକା ସମ୍ପାଦନା କରିଥିଲେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Grammar",
      chapter: "ଉନ୍ନତ ବ୍ୟାକରଣ",
      grade: 12,
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
      { quiz: quiz3._id, questionText: "'ତତ୍ପୁରୁଷ ସମାସ' କେଉଁ ପ୍ରକାରର?", options: ["ସନ୍ଧି", "ସମାସ", "ଅଳଙ୍କାର", "ଛନ୍ଦ"], correctAnswer: 1, marks: 1, explanation: "ତତ୍ପୁରୁଷ ଏକ ପ୍ରକାର ସମାସ।" },
      { quiz: quiz3._id, questionText: "'ବହୁବ୍ରୀହି ସମାସ' ର ବିଶେଷତା କଣ?", options: ["ପ୍ରଥମ ଶବ୍ଦ ମୁଖ୍ୟ", "ଦ୍ୱିତୀୟ ଶବ୍ଦ ମୁଖ୍ୟ", "ତୃତୀୟ ଅର୍ଥକୁ ସୂଚାଏ", "ସମାନାର୍ଥକ ଶବ୍ଦ"], correctAnswer: 2, marks: 1, explanation: "ବହୁବ୍ରୀହି ସମାସ ତୃତୀୟ ଅର୍ଥକୁ ସୂଚାଏ।" },
      { quiz: quiz3._id, questionText: "'ଅନୁପ୍ରାସ' ଅଳଙ୍କାରରେ କଣ ଥାଏ?", options: ["ତୁଳନା", "ଧ୍ୱନିର ପୁନରାବୃତ୍ତି", "ଅତିଶୟୋକ୍ତି", "ବିପରୀତତା"], correctAnswer: 1, marks: 1, explanation: "ଅନୁପ୍ରାସରେ consonant sound ର repetition ଥାଏ।" },
      { quiz: quiz3._id, questionText: "'ଅତିଶୟୋକ୍ତି' ଅଳଙ୍କାର କଣ?", options: ["ଉପମା", "ଅତିରଞ୍ଜନ", "ରୂପକ", "Personification"], correctAnswer: 1, marks: 1, explanation: "ଅତିଶୟୋକ୍ତି ମାନେ exaggeration।" },
      { quiz: quiz3._id, questionText: "'ମହାକାବ୍ୟ' ର ବିଶେଷତା କଣ?", options: ["କେବଳ 2 ସର୍ଗ", "ବହୁ ସର୍ଗ ଏବଂ ବୀର ନାୟକ", "କେବଳ ଗଦ୍ୟ", "କେବଳ ସଂଳାପ"], correctAnswer: 1, marks: 1, explanation: "ମହାକାବ୍ୟରେ ବହୁ ସର୍ଗ ଏବଂ ନାୟକ ଥାଏ।" },
      { quiz: quiz3._id, questionText: "'ଦ୍ୱନ୍ଦ୍ୱ ସମାସ' କେଉଁ ଶବ୍ଦକୁ ଯୋଡ଼େ?", options: ["ବିପରୀତ ଶବ୍ଦ", "ସମାନ ଗୁରୁତ୍ୱର ଶବ୍ଦ", "ବିଶେଷଣ ଏବଂ ନାମ", "କ୍ରିୟା ଏବଂ ନାମ"], correctAnswer: 1, marks: 1, explanation: "ଦ୍ୱନ୍ଦ୍ୱ ସମାସରେ ଦୁଇଟି ଶବ୍ଦ ସମାନ ଗୁରୁତ୍ୱର।" },
      { quiz: quiz3._id, questionText: "'ବ୍ୟତିରେକ' ଅଳଙ୍କାର କଣ ଦର୍ଶାଏ?", options: ["ସମାନତା", "ଏକକୁ ଅନ୍ୟଠାରୁ ଉତ୍କୃଷ୍ଟ ଦର୍ଶାଇବା", "ସମତା", "ଧ୍ୱନି ପୁନରାବୃତ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ବ୍ୟତିରେକରେ ତୁଳନାରେ superiority ଦର୍ଶାଯାଏ।" },
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆ କବିତାର 'ଛନ୍ଦ' କାହା ଉପରେ ଆଧାରିତ?", options: ["କେବଳ rhyme", "syllable count ଏବଂ rhythm", "କେବଳ ଅର୍ଥ", "କବିତାର ଲମ୍ବ"], correctAnswer: 1, marks: 1, explanation: "ଛନ୍ଦ syllable arrangement ଉପରେ ନିର୍ଭର କରେ।" },
      { quiz: quiz3._id, questionText: "'ଅବ୍ୟୟୀଭାବ ସମାସ' ରେ କେଉଁ ଶବ୍ଦ ମୁଖ୍ୟ?", options: ["ଦ୍ୱିତୀୟ ଶବ୍ଦ", "ପ୍ରଥମ ଶବ୍ଦ", "ଉଭୟ", "କେହି ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "ଏଥିରେ ପ୍ରଥମ ଅବ୍ୟୟ ଶବ୍ଦ ମୁଖ୍ୟ।" },
      { quiz: quiz3._id, questionText: "'ଗଦ୍ୟ କବିତା' ର ବିଶେଷତା କଣ?", options: ["କଠୋର ଛନ୍ଦ", "ଛନ୍ଦ ବିନା କବିତାତ୍ମକ ଗୁଣ", "କେବଳ ଗଦ୍ୟ", "କେବଳ ସଂଳାପ"], correctAnswer: 1, marks: 1, explanation: "ଗଦ୍ୟ କବିତାରେ poetic imagery ଥାଏ କିନ୍ତୁ strict meter ନଥାଏ।" },
    ]);

    console.log("✓ Class 12 Science - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceOdiaOdia };
