import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsPoliticalScienceOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ରାଜନୈତିକ ସିଦ୍ଧାନ୍ତ - ସଂବିଧାନ ଏବଂ ରାଜ୍ୟ",
      subject: "Political Science",
      category: "Political Theory",
      chapter: "ସଂବିଧାନ ଏବଂ ରାଜ୍ୟ",
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
      { quiz: quiz1._id, questionText: "ରାଜ୍ୟର ଆବଶ୍ୟକ ଉପାଦାନ କେଉଁଗୁଡ଼ିକ?", options: ["ଜନସଂଖ୍ୟା, ଭୂମି, ସରକାର, ସାର୍ବଭୌମତ୍ୱ", "ଜନସଂଖ୍ୟା, ସେନା, ସରକାର, ଆଇନ", "ଭୂମି, ଧର୍ମ, ସରକାର, ଅର୍ଥନୀତି", "ଜନସଂଖ୍ୟା, ଭାଷା, ସଂସ୍କୃତି, ସେନା"], correctAnswer: 0, marks: 1, explanation: "ରାଜ୍ୟ ପାଇଁ ଜନସଂଖ୍ୟା, ଭୂମି, ସରକାର ଏବଂ ସାର୍ବଭୌମତ୍ୱ ଆବଶ୍ୟକ।" },
      { quiz: quiz1._id, questionText: "'The Social Contract' କିଏ ଲେଖିଥିଲେ?", options: ["ଜନ୍ ଲକ୍", "ଜିନ୍-ଜାକ୍ ରୁସୋ", "ଥୋମାସ ହବ୍ସ", "ମୋଣ୍ଟେସ୍କିଉ"], correctAnswer: 1, marks: 1, explanation: "ରୁସୋ 1762ରେ 'The Social Contract' ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ଭାରତୀୟ ସଂବିଧାନ କେବେ ଗ୍ରହଣ କରାଯାଇଥିଲା?", options: ["15 ଅଗଷ୍ଟ 1947", "26 ନଭେମ୍ବର 1949", "26 ଜାନୁଆରୀ 1950", "2 ଅକ୍ଟୋବର 1949"], correctAnswer: 1, marks: 1, explanation: "ସଂବିଧାନ 26 ନଭେମ୍ବର 1949ରେ ଗ୍ରହଣ କରାଯାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଭାରତୀୟ ସଂବିଧାନର 'ପିତା' କାହାକୁ କୁହାଯାଏ?", options: ["ଜବାହରଲାଲ ନେହେରୁ", "ଡ଼ା. ବି.ଆର. ଆମ୍ବେଦକର", "ମହାତ୍ମା ଗାନ୍ଧୀ", "ସରଦାର ପଟେଲ"], correctAnswer: 1, marks: 1, explanation: "ଡ଼ା. ବି.ଆର. ଆମ୍ବେଦକର Drafting Committee ର ଅଧ୍ୟକ୍ଷ ଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ସାର୍ବଭୌମତ୍ୱର ଅର୍ଥ କଣ?", options: ["ସେନା ଶକ୍ତି", "ରାଜ୍ୟର ସର୍ବୋଚ୍ଚ ଏବଂ ସ୍ୱାଧୀନ ଶକ୍ତି", "ଆର୍ଥିକ ଶକ୍ତି", "ବଡ଼ ଜନସଂଖ୍ୟା"], correctAnswer: 1, marks: 1, explanation: "ସାର୍ବଭୌମତ୍ୱ ମାନେ ରାଜ୍ୟର ସର୍ବୋଚ୍ଚ ଶାସନ ଶକ୍ତି।" },
      { quiz: quiz1._id, questionText: "କେଉଁ ପ୍ରକାର ସରକାରରେ କେନ୍ଦ୍ର ଏବଂ ରାଜ୍ୟ ମଧ୍ୟରେ ଶକ୍ତି ବିଭାଜନ ହୁଏ?", options: ["ଏକାତ୍ମକ", "ଫେଡେରାଲ", "କନଫେଡେରେଟ", "ସ୍ୱେଚ୍ଛାଚାରୀ"], correctAnswer: 1, marks: 1, explanation: "ଫେଡେରାଲ ସରକାରରେ ଶକ୍ତି ବିଭାଜିତ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "ଭାରତୀୟ ସଂବିଧାନର ପ୍ରାସ୍ତାବନା କେମିତି ଆରମ୍ଭ ହୁଏ?", options: ["ଆମେ ନାଗରିକମାନେ", "ଆମେ ଭାରତର ଲୋକମାନେ", "ଭାରତ ସରକାର", "ଭାରତୀୟ ଗଣରାଜ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରାସ୍ତାବନା 'ଆମେ ଭାରତର ଲୋକମାନେ' ରେ ଆରମ୍ଭ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "ଭାରତୀୟ ପରିପ୍ରେକ୍ଷିତରେ ଧର୍ମନିରପେକ୍ଷତାର ଅର୍ଥ କଣ?", options: ["ଧର୍ମ ବିରୋଧୀ", "ସମସ୍ତ ଧର୍ମକୁ ସମାନ ସମ୍ମାନ", "ରାଷ୍ଟ୍ରୀୟ ଧର୍ମ", "ଧର୍ମ ନିଷିଦ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ଭାରତରେ ସମସ୍ତ ଧର୍ମକୁ ସମାନ ସମ୍ମାନ ଦିଆଯାଏ।" },
      { quiz: quiz1._id, questionText: "'Rule of Law' ଧାରଣା କିଏ ଦେଇଥିଲେ?", options: ["ଅଷ୍ଟିନ", "A.V. ଡାଇସି", "ବେନଥାମ", "ମାର୍କ୍ସ"], correctAnswer: 1, marks: 1, explanation: "A.V. ଡାଇସି Rule of Law ଧାରଣା ପ୍ରସ୍ତାବ କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ଭାରତୀୟ ସଂବିଧାନରେ କେତେଟି ମୌଳିକ ଅଧିକାର ଅଛି?", options: ["5", "6", "7", "8"], correctAnswer: 1, marks: 1, explanation: "ବର୍ତ୍ତମାନ 6ଟି ମୌଳିକ ଅଧିକାର ଅଛି।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଭାରତୀୟ ସରକାର ଏବଂ ରାଜନୀତି",
      subject: "Political Science",
      category: "Indian Politics",
      chapter: "ସରକାରୀ ଗଠନ",
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
      { quiz: quiz2._id, questionText: "ଭାରତର ରାଷ୍ଟ୍ରପତି କିପରି ନିର୍ବାଚିତ ହୁଅନ୍ତି?", options: ["ସିଧାସଳଖ ଭୋଟ", "ନିର୍ବାଚିତ ସାଂସଦ ଏବଂ ବିଧାୟକଙ୍କ Electoral College", "କେବଳ ସଂସଦ", "କେବଳ ରାଜ୍ୟସଭା"], correctAnswer: 1, marks: 1, explanation: "ରାଷ୍ଟ୍ରପତି Electoral College ଦ୍ୱାରା ନିର୍ବାଚିତ ହୁଅନ୍ତି।" },
      { quiz: quiz2._id, questionText: "ରାଜ୍ୟସଭାର ସର୍ବାଧିକ ସଦସ୍ୟ ସଂଖ୍ୟା କେତେ?", options: ["200", "250", "300", "245"], correctAnswer: 1, marks: 1, explanation: "ରାଜ୍ୟସଭାରେ ସର୍ବାଧିକ 250 ସଦସ୍ୟ ଥାଇପାରନ୍ତି।" },
      { quiz: quiz2._id, questionText: "ରାଜ୍ୟର ମୁଖ୍ୟମନ୍ତ୍ରୀଙ୍କୁ କିଏ ନିଯୁକ୍ତ କରନ୍ତି?", options: ["ରାଷ୍ଟ୍ରପତି", "ରାଜ୍ୟପାଳ", "ପ୍ରଧାନମନ୍ତ୍ରୀ", "ମୁଖ୍ୟ ନ୍ୟାୟାଧୀଶ"], correctAnswer: 1, marks: 1, explanation: "ରାଜ୍ୟପାଳ ମୁଖ୍ୟମନ୍ତ୍ରୀଙ୍କୁ ନିଯୁକ୍ତ କରନ୍ତି।" },
      { quiz: quiz2._id, questionText: "Judicial Review ର ଅର୍ଥ କଣ?", options: ["ନ୍ୟାୟାଧୀଶମାନେ ପରସ୍ପରକୁ ଯାଞ୍ଚ କରିବା", "ଆଇନର ସଂବିଧାନିକତା ଯାଞ୍ଚ", "ସଂସଦ ନ୍ୟାୟପାଳିକାକୁ ଯାଞ୍ଚ", "କାର୍ଯ୍ୟନିର୍ବାହୀ ନ୍ୟାୟାଳୟକୁ ଯାଞ୍ଚ"], correctAnswer: 1, marks: 1, explanation: "Judicial Review ରେ ନ୍ୟାୟାଳୟ ଆଇନକୁ ଯାଞ୍ଚ କରେ।" },
      { quiz: quiz2._id, questionText: "73ତମ ସଂଶୋଧନ କାହା ସହ ସମ୍ପର୍କିତ?", options: ["ମୌଳିକ ଅଧିକାର", "ପଞ୍ଚାୟତି ରାଜ୍ୟ", "ଜରୁରୀକାଳ", "ନିର୍ବାଚନ ଆୟୋଗ"], correctAnswer: 1, marks: 1, explanation: "73ତମ ସଂଶୋଧନ ପଞ୍ଚାୟତି ରାଜକୁ ସଂବିଧାନିକ ମର୍ଯ୍ୟାଦା ଦେଲା।" },
      { quiz: quiz2._id, questionText: "Money Bill କେଉଁ ସଭାରେ ପ୍ରସ୍ତୁତ ହୁଏ?", options: ["ରାଜ୍ୟସଭା", "ଲୋକସଭା", "ଯେକୌଣସି ସଭା", "ଯୁକ୍ତ ଅଧିବେଶନ"], correctAnswer: 1, marks: 1, explanation: "Money Bill କେବଳ ଲୋକସଭାରେ ପ୍ରସ୍ତୁତ ହୁଏ।" },
      { quiz: quiz2._id, questionText: "ଭାରତର ନିର୍ବାଚନ ଆୟୋଗ କେମିତି ସଂସ୍ଥା?", options: ["ନ୍ୟାୟପାଳିକାର ଅଂଶ", "ସ୍ୱାଧୀନ ସଂବିଧାନିକ ସଂସ୍ଥା", "କାର୍ଯ୍ୟନିର୍ବାହୀର ଅଂଶ", "ବିଧାନମଣ୍ଡଳର ଅଂଶ"], correctAnswer: 1, marks: 1, explanation: "ନିର୍ବାଚନ ଆୟୋଗ ଏକ ସ୍ୱାଧୀନ ସଂବିଧାନିକ ସଂସ୍ଥା।" },
      { quiz: quiz2._id, questionText: "ଧାରା 352 ଅନୁଯାୟୀ ଜରୁରୀକାଳକୁ କଣ କୁହାଯାଏ?", options: ["ଆର୍ଥିକ ଜରୁରୀକାଳ", "ରାଷ୍ଟ୍ରୀୟ ଜରୁରୀକାଳ", "ରାଜ୍ୟ ଜରୁରୀକାଳ", "ସଂବିଧାନିକ ଜରୁରୀକାଳ"], correctAnswer: 1, marks: 1, explanation: "ଧାରା 352 ରାଷ୍ଟ୍ରୀୟ ଜରୁରୀକାଳ ସହ ସମ୍ପର୍କିତ।" },
      { quiz: quiz2._id, questionText: "CAG କଣ ଯାଞ୍ଚ କରେ?", options: ["ବେସରକାରୀ କମ୍ପାନୀ", "ସରକାରୀ ହିସାବ", "କେବଳ ବ୍ୟାଙ୍କ", "ବିଦେଶ ବାଣିଜ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "CAG ସରକାରୀ ଖର୍ଚ୍ଚ ଏବଂ ହିସାବ ଯାଞ୍ଚ କରେ।" },
      { quiz: quiz2._id, questionText: "ସଂବିଧାନର କେଉଁ ସୂଚୀ ଭାଷା ସହ ସମ୍ପର୍କିତ?", options: ["7ମ", "8ମ", "9ମ", "10ମ"], correctAnswer: 1, marks: 1, explanation: "8ମ ସୂଚୀରେ ଭାରତର ସ୍ୱୀକୃତ ଭାଷା ଅଛି।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଅଧିକାର, ସ୍ୱାଧୀନତା ଏବଂ ସମାନତା",
      subject: "Political Science",
      category: "Political Theory",
      chapter: "ଅଧିକାର ଏବଂ ସ୍ୱାଧୀନତା",
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
      { quiz: quiz3._id, questionText: "ସମାନତାର ଅଧିକାର କେଉଁ ଧାରାରେ ଦିଆଯାଇଛି?", options: ["ଧାରା 12-18", "ଧାରା 14-18", "ଧାରା 19-22", "ଧାରା 25-28"], correctAnswer: 1, marks: 1, explanation: "ଧାରା 14-18 ସମାନତାର ଅଧିକାର ଦେଇଥାଏ।" },
      { quiz: quiz3._id, questionText: "ରାଜନୈତିକ ସ୍ୱାଧୀନତାର ଅର୍ଥ କଣ?", options: ["ଯେକୌଣସି କାମ କରିବା", "ଆଇନ ମଧ୍ୟରେ ସ୍ୱାଧୀନତା", "ସରକାର ନଥିବା", "ଅନାର୍କି"], correctAnswer: 1, marks: 1, explanation: "ରାଜନୈତିକ ସ୍ୱାଧୀନତା ଆଇନ ମଧ୍ୟରେ ରହି କାମ କରିବାର ସ୍ୱାଧୀନତା।" },
      { quiz: quiz3._id, questionText: "'Man is born free but everywhere he is in chains' କିଏ କହିଥିଲେ?", options: ["ଲକ୍", "ରୁସୋ", "ହବ୍ସ", "ମିଲ"], correctAnswer: 1, marks: 1, explanation: "ରୁସୋ ଏହି କଥା କହିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "Positive liberty ର ଅର୍ଥ କଣ?", options: ["ନିଷେଧରୁ ସ୍ୱାଧୀନତା", "ନିଜ ସମ୍ଭାବନା ବିକାଶର ସ୍ୱାଧୀନତା", "ସରକାରୀ ହସ୍ତକ୍ଷେପ ନଥିବା", "କେବଳ ଆର୍ଥିକ ସ୍ୱାଧୀନତା"], correctAnswer: 1, marks: 1, explanation: "Positive liberty ମାନେ ନିଜ କ୍ଷମତା ବିକାଶ କରିବାର ସ୍ୱାଧୀନତା।" },
      { quiz: quiz3._id, questionText: "ସଂବିଧାନିକ ପ୍ରତିକାରର ଅଧିକାର କେଉଁ ଧାରାରେ ଅଛି?", options: ["ଧାରା 14", "ଧାରା 32", "ଧାରା 19", "ଧାରା 21"], correctAnswer: 1, marks: 1, explanation: "ଧାରା 32 ସଂବିଧାନିକ ପ୍ରତିକାରର ଅଧିକାର ଦେଇଥାଏ।" },
      { quiz: quiz3._id, questionText: "କେଉଁଟି ମୌଳିକ ଅଧିକାର ନୁହେଁ?", options: ["ସମାନତାର ଅଧିକାର", "ସମ୍ପତ୍ତିର ଅଧିକାର", "ସ୍ୱାଧୀନତାର ଅଧିକାର", "ଶୋଷଣ ବିରୋଧୀ ଅଧିକାର"], correctAnswer: 1, marks: 1, explanation: "44ତମ ସଂଶୋଧନ ପରେ ସମ୍ପତ୍ତିର ଅଧିକାର ମୌଳିକ ଅଧିକାର ନୁହେଁ।" },
      { quiz: quiz3._id, questionText: "ସାମାଜିକ ସମାନତାର ଅର୍ଥ କଣ?", options: ["ସମସ୍ତଙ୍କ ସମାନ ଧନ", "ଜାତି, ଧର୍ମ, ଲିଙ୍ଗ ଆଧାରରେ ଭେଦଭାବ ନଥିବା", "ସମସ୍ତଙ୍କ ସମାନ ଚାକିରି", "ସମାନ ରାଜନୈତିକ ଶକ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ସାମାଜିକ ସମାନତା ମାନେ ଭେଦଭାବ ନ ଥିବା।" },
      { quiz: quiz3._id, questionText: "DPSP କଣ?", options: ["ଆଇନଗତ ଭାବେ ବାଧ୍ୟକାରୀ", "ଶାସନ ପାଇଁ ନିର୍ଦ୍ଦେଶମୂଳକ ସିଦ୍ଧାନ୍ତ", "ମୌଳିକ ଅଧିକାର", "ଜରୁରୀକାଳ ବ୍ୟବସ୍ଥା"], correctAnswer: 1, marks: 1, explanation: "DPSP ହେଉଛି ରାଜ୍ୟ ନୀତିର ନିର୍ଦ୍ଦେଶମୂଳକ ସିଦ୍ଧାନ୍ତ।" },
      { quiz: quiz3._id, questionText: "ଜନ୍ ସ୍ଟୁଆର୍ଟ ମିଲ କାହା ସହ ସମ୍ପର୍କିତ?", options: ["କମ୍ୟୁନିଜ୍ମ", "ଲିବେରାଲିଜ୍ମ ଏବଂ ବ୍ୟକ୍ତିଗତ ସ୍ୱାଧୀନତା", "ଫାସିଜ୍ମ", "ଅନାର୍କିଜ୍ମ"], correctAnswer: 1, marks: 1, explanation: "J.S. ମିଲ ବ୍ୟକ୍ତିଗତ ସ୍ୱାଧୀନତାର ପକ୍ଷପାତୀ ଥିଲେ।" },
      { quiz: quiz3._id, questionText: "କେଉଁ writ ର ଅର୍ଥ 'to have the body'?", options: ["Mandamus", "Habeas Corpus", "Certiorari", "Quo Warranto"], correctAnswer: 1, marks: 1, explanation: "Habeas Corpus ଅବୈଧ ଗିରଫ ବିରୋଧରେ ସୁରକ୍ଷା ଦେଇଥାଏ।" },
    ]);

    console.log("✓ Class 11 Arts - Political Science Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsPoliticalScienceOdia };
