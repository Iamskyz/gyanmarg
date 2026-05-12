
import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8ScienceOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: କୋଷ - ଗଠନ ଏବଂ କାର୍ଯ୍ୟ
    const scienceQuiz1 = await Quiz.create({
      title: "କୋଷ - ଗଠନ ଏବଂ କାର୍ଯ୍ୟ",
      subject: "Science",
      category: "ଜୀବବିଜ୍ଞାନ",
      chapter: "କୋଷ",
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
      { quiz: scienceQuiz1._id, questionText: "କୋଷକୁ କିଏ ଆବିଷ୍କାର କଲେ?", options: ["ନ୍ୟୁଟନ", "ରୋବର୍ଟ ହୁକ୍", "ଡାର୍ୱିନ", "ମେଣ୍ଡେଲ"], correctAnswer: 1, marks: 1, explanation: "ରୋବର୍ଟ ହୁକ୍ 1665 ମସିହାରେ କୋଷକୁ ଆବିଷ୍କାର କରିଥିଲେ।" },
      { quiz: scienceQuiz1._id, questionText: "କୋଷର 'ପାୱାରହାଉସ୍' କେଉଁ ଅଙ୍ଗାଣୁକୁ କୁହାଯାଏ?", options: ["ନ୍ୟୁକ୍ଲିୟସ୍", "ମାଇଟୋକଣ୍ଡ୍ରିଆ", "ରାଇବୋସୋମ୍", "ଗୋଲ୍ଜି ବଡି"], correctAnswer: 1, marks: 1, explanation: "ମାଇଟୋକଣ୍ଡ୍ରିଆ କୋଷ ପାଇଁ ଶକ୍ତି ଉତ୍ପାଦନ କରେ।" },
      { quiz: scienceQuiz1._id, questionText: "କୋଷର କେଉଁ ଅଂଶରେ ଜନ୍ୟୁ ସାମଗ୍ରୀ ଥାଏ?", options: ["ସାଇଟୋପ୍ଲାଜ୍ମ", "କୋଷ ଝିଲ୍ଲୀ", "ନ୍ୟୁକ୍ଲିୟସ୍", "ଭ୍ୟାକ୍ୟୁଓଲ୍"], correctAnswer: 2, marks: 1, explanation: "ନ୍ୟୁକ୍ଲିୟସ୍‌ରେ DNA ଥାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "ଉଦ୍ଭିଦ କୋଷରେ ଥାଏ କିନ୍ତୁ ପ୍ରାଣୀ କୋଷରେ ନଥାଏ:", options: ["ନ୍ୟୁକ୍ଲିୟସ୍", "କୋଷ ଭିତ୍ତି", "ସାଇଟୋପ୍ଲାଜ୍ମ", "ମାଇଟୋକଣ୍ଡ୍ରିଆ"], correctAnswer: 1, marks: 1, explanation: "ଉଦ୍ଭିଦ କୋଷରେ କୋଷ ଭିତ୍ତି ଥାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "ଜୀବନର ମୂଳ ଗଠନାତ୍ମକ ଏବଂ କାର୍ଯ୍ୟାତ୍ମକ ଏକକ କଣ?", options: ["ତନ୍ତୁ", "ଅଙ୍ଗ", "କୋଷ", "ଜୀବ"], correctAnswer: 2, marks: 1, explanation: "କୋଷ ହେଉଛି ସମସ୍ତ ଜୀବର ମୂଳ ଏକକ।" },
      { quiz: scienceQuiz1._id, questionText: "ଫୋଟୋସିନ୍ଥେସିସ୍ ପାଇଁ ଦାୟୀ ଅଙ୍ଗାଣୁ କେଉଁଟି?", options: ["ମାଇଟୋକଣ୍ଡ୍ରିଆ", "କ୍ଲୋରୋପ୍ଲାଷ୍ଟ", "ରାଇବୋସୋମ୍", "ଲାଇସୋସୋମ୍"], correctAnswer: 1, marks: 1, explanation: "କ୍ଲୋରୋପ୍ଲାଷ୍ଟରେ କ୍ଲୋରୋଫିଲ୍ ଥାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "ଅମିବା କେଉଁ ପ୍ରକାରର ଜୀବ?", options: ["ବହୁକୋଷୀ", "ଏକକୋଷୀ", "ନିର୍ଜୀବ", "ଭାଇରସ୍"], correctAnswer: 1, marks: 1, explanation: "ଅମିବା ଏକକୋଷୀ ଜୀବ।" },
      { quiz: scienceQuiz1._id, questionText: "କୋଷ ଭିତରକୁ ଓ ବାହାରକୁ ପଦାର୍ଥ ଗତିକୁ କେଉଁଠି ନିୟନ୍ତ୍ରଣ କରାଯାଏ?", options: ["କୋଷ ଭିତ୍ତି", "ନ୍ୟୁକ୍ଲିୟସ୍", "କୋଷ ଝିଲ୍ଲୀ", "ସାଇଟୋପ୍ଲାଜ୍ମ"], correctAnswer: 2, marks: 1, explanation: "କୋଷ ଝିଲ୍ଲୀ ପଦାର୍ଥ ଗତିକୁ ନିୟନ୍ତ୍ରଣ କରେ।" },
      { quiz: scienceQuiz1._id, questionText: "'ସୁଇସାଇଡ୍ ବ୍ୟାଗ୍' କେଉଁ ଅଙ୍ଗାଣୁକୁ କୁହାଯାଏ?", options: ["ରାଇବୋସୋମ୍", "ଲାଇସୋସୋମ୍", "ଗୋଲ୍ଜି ବଡି", "ER"], correctAnswer: 1, marks: 1, explanation: "ଲାଇସୋସୋମ୍ କୋଷକୁ ଧ୍ଵଂସ କରିପାରେ।" },
      { quiz: scienceQuiz1._id, questionText: "କୋଷ ଝିଲ୍ଲୀ ଏବଂ ନ୍ୟୁକ୍ଲିୟସ୍‌ ମଧ୍ୟରେ ଥିବା ଜେଲି ଭଳି ପଦାର୍ଥ କଣ?", options: ["ପ୍ରୋଟୋପ୍ଲାଜ୍ମ", "ସାଇଟୋପ୍ଲାଜ୍ମ", "ନ୍ୟୁକ୍ଲିଓପ୍ଲାଜ୍ମ", "କୋଷ ରସ"], correctAnswer: 1, marks: 1, explanation: "ସାଇଟୋପ୍ଲାଜ୍ମ ହେଉଛି ଜେଲି ଭଳି ପଦାର୍ଥ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ବଳ ଏବଂ ଚାପ
    const scienceQuiz2 = await Quiz.create({
      title: "ବଳ ଏବଂ ଚାପ",
      subject: "Science",
      category: "ଭୌତିକ ବିଜ୍ଞାନ",
      chapter: "ବଳ ଏବଂ ଚାପ",
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
      { quiz: scienceQuiz2._id, questionText: "ବଳର SI ଏକକ କଣ?", options: ["ଜୁଲ୍", "ନ୍ୟୁଟନ", "ପାସ୍କାଲ୍", "ୱାଟ୍"], correctAnswer: 1, marks: 1, explanation: "ବଳର SI ଏକକ ହେଉଛି ନ୍ୟୁଟନ।" },
      { quiz: scienceQuiz2._id, questionText: "ଚାପର ସୁତ୍ର କଣ?", options: ["ବଳ × କ୍ଷେତ୍ରଫଳ", "ବଳ / କ୍ଷେତ୍ରଫଳ", "ବଳ + କ୍ଷେତ୍ରଫଳ", "ବଳ - କ୍ଷେତ୍ରଫଳ"], correctAnswer: 1, marks: 1, explanation: "ଚାପ = ବଳ / କ୍ଷେତ୍ରଫଳ।" },
      { quiz: scienceQuiz2._id, questionText: "ଚାପର SI ଏକକ କଣ?", options: ["ନ୍ୟୁଟନ", "ପାସ୍କାଲ୍", "ଜୁଲ୍", "କିଲୋଗ୍ରାମ"], correctAnswer: 1, marks: 1, explanation: "ଚାପର SI ଏକକ ପାସ୍କାଲ୍।" },
      { quiz: scienceQuiz2._id, questionText: "କେଉଁ ବଳ ଗତିକୁ ବିରୋଧ କରେ?", options: ["ମାଗ୍ନତ୍ୱ ବଳ", "ପେଶୀ ବଳ", "ଘର୍ଷଣ", "ଚୁମ୍ବକୀୟ ବଳ"], correctAnswer: 2, marks: 1, explanation: "ଘର୍ଷଣ ଗତିକୁ ବିରୋଧ କରେ।" },
      { quiz: scienceQuiz2._id, questionText: "ବାୟୁମଣ୍ଡଳୀୟ ଚାପ କାହା ଦ୍ୱାରା ହୁଏ?", options: ["ଜଳର ଓଜନ", "ବାୟୁର ଓଜନ", "ପୃଥିବୀର ଓଜନ", "ଚୁମ୍ବକ କ୍ଷେତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ବାୟୁର ଓଜନ ଦ୍ୱାରା ବାୟୁମଣ୍ଡଳୀୟ ଚାପ ସୃଷ୍ଟି ହୁଏ।" },
      { quiz: scienceQuiz2._id, questionText: "ଏକ ବଳ କଣ କରିପାରେ?", options: ["କେବଳ ଗତି ବଦଳାଏ", "କେବଳ ଦିଗ ବଦଳାଏ", "ଗତି, ଦିଗ କିମ୍ବା ଆକାର ବଦଳାଏ", "କିଛି ନୁହେଁ"], correctAnswer: 2, marks: 1, explanation: "ବଳ ଗତି, ଦିଗ କିମ୍ବା ଆକାର ବଦଳାଇପାରେ।" },
      { quiz: scienceQuiz2._id, questionText: "ତୀକ୍ଷ୍ଣ ଛୁରୀ ଭଲ କାହିଁକି କାଟେ?", options: ["ଅଧିକ ବଳ", "କମ୍ କ୍ଷେତ୍ରଫଳ, ଅଧିକ ଚାପ", "ଅଧିକ କ୍ଷେତ୍ରଫଳ", "କମ୍ ବଳ"], correctAnswer: 1, marks: 1, explanation: "କମ୍ କ୍ଷେତ୍ରଫଳରେ ଅଧିକ ଚାପ ସୃଷ୍ଟି ହୁଏ।" },
      { quiz: scienceQuiz2._id, questionText: "ମାଗ୍ନତ୍ୱ ବଳ କେମିତି ବଳ?", options: ["ସମ୍ପର୍କ ବଳ", "ଅସମ୍ପର୍କ ବଳ", "ପେଶୀ ବଳ", "ଘର୍ଷଣ ବଳ"], correctAnswer: 1, marks: 1, explanation: "ମାଗ୍ନତ୍ୱ ବଳ ଅସମ୍ପର୍କ ବଳ।" },
      { quiz: scienceQuiz2._id, questionText: "ଦ୍ରବ୍ୟ ପଦାର୍ଥ ଚାପ କେମିତି ପ୍ରୟୋଗ କରେ?", options: ["କେବଳ ତଳକୁ", "କେବଳ ଉପରକୁ", "ସମସ୍ତ ଦିଗରେ", "କେବଳ ପାର୍ଶ୍ୱରେ"], correctAnswer: 2, marks: 1, explanation: "ଦ୍ରବ୍ୟ ସମସ୍ତ ଦିଗରେ ଚାପ ପ୍ରୟୋଗ କରେ।" },
      { quiz: scienceQuiz2._id, questionText: "ଭାରୀ ଯାନର ଚକ ବଡ଼ କାହିଁକି ଥାଏ?", options: ["ଦେଖିବାକୁ ଭଲ", "ଚାପ ବଢ଼ାଇବାକୁ", "ଚାପ କମେଇବାକୁ", "ଘର୍ଷଣ ବଢ଼ାଇବାକୁ"], correctAnswer: 2, marks: 1, explanation: "ବଡ଼ ଚକ ଚାପ କମେଇଦେଇଥାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ବିଦ୍ୟୁତ୍ ପ୍ରବାହର ରାସାୟନିକ ପ୍ରଭାବ
    const scienceQuiz3 = await Quiz.create({
      title: "ବିଦ୍ୟୁତ୍ ପ୍ରବାହର ରାସାୟନିକ ପ୍ରଭାବ",
      subject: "Science",
      category: "ରସାୟନ ବିଜ୍ଞାନ",
      chapter: "ଇଲେକ୍ଟ୍ରୋକେମିଷ୍ଟ୍ରି",
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
      { quiz: scienceQuiz3._id, questionText: "କେଉଁ ଦ୍ରବ୍ୟ ବିଦ୍ୟୁତ୍‌ର ଭଲ ପରିବାହକ?", options: ["ଡିଷ୍ଟିଲ୍ଡ ଜଳ", "ଚିନି ଘୋଳ", "ଲୁଣ ଘୋଳ", "ତେଲ"], correctAnswer: 2, marks: 1, explanation: "ଲୁଣ ଘୋଳରେ ଆୟନ୍ ଥାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "ବିଦ୍ୟୁତ୍ ଦ୍ୱାରା ଏକ ଧାତୁ ଉପରେ ଅନ୍ୟ ଧାତୁର ପତ୍ର ଲଗାଇବା ପ୍ରକ୍ରିୟାକୁ କଣ କୁହାଯାଏ?", options: ["ଇଲେକ୍ଟ୍ରୋଲାଇସିସ୍", "ଇଲେକ୍ଟ୍ରୋପ୍ଲେଟିଂ", "ଇଲେକ୍ଟ୍ରୋକେମିଷ୍ଟ୍ରି", "ଇଲେକ୍ଟ୍ରୋମ୍ୟାଗ୍ନେଟିଜ୍ମ"], correctAnswer: 1, marks: 1, explanation: "ଏହାକୁ ଇଲେକ୍ଟ୍ରୋପ୍ଲେଟିଂ କୁହାଯାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "ଇଲେକ୍ଟ୍ରୋଲାଇଟିକ୍ କୋଷରେ ଥିବା ଇଲେକ୍ଟ୍ରୋଡ୍ କେଉଁଗୁଡ଼ିକ?", options: ["ଏନୋଡ୍ ଏବଂ କ୍ୟାଥୋଡ୍", "ଧନାତ୍ମକ ଏବଂ ନିରପେକ୍ଷ", "ଉତ୍ତର ଏବଂ ଦକ୍ଷିଣ", "ଇନ୍ପୁଟ୍ ଏବଂ ଆଉଟ୍ପୁଟ୍"], correctAnswer: 0, marks: 1, explanation: "ଏନୋଡ୍ ଏବଂ କ୍ୟାଥୋଡ୍ ଥାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "LEDର ପୂର୍ଣ୍ଣ ରୂପ କଣ?", options: ["Light Emitting Device", "Light Emitting Diode", "Low Energy Device", "Light Energy Diode"], correctAnswer: 1, marks: 1, explanation: "LED ଅର୍ଥ Light Emitting Diode।" },
      { quiz: scienceQuiz3._id, questionText: "ଏହାମଧ୍ୟରୁ କେଉଁଟି ବିଦ୍ୟୁତ୍ ପରିବାହନ କରେନାହିଁ?", options: ["ତାମା", "ଲେମ୍ବୁ ରସ", "ଡିଷ୍ଟିଲ୍ଡ ଜଳ", "ଭିନେଗାର"], correctAnswer: 2, marks: 1, explanation: "ଡିଷ୍ଟିଲ୍ଡ ଜଳ ଖରାପ ପରିବାହକ।" },
      { quiz: scienceQuiz3._id, questionText: "ଇଲେକ୍ଟ୍ରୋପ୍ଲେଟିଂରେ ପ୍ଲେଟ୍ କରାଯାଉଥିବା ବସ୍ତୁ କେଉଁ ଟର୍ମିନାଲ ସହ ଯୋଡାଯାଏ?", options: ["ଧନାତ୍ମକ", "ଋଣାତ୍ମକ", "ଦୁହେଁ", "କୌଣସି ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "ଏହାକୁ ଋଣାତ୍ମକ ଟର୍ମିନାଲ ସହ ଯୋଡାଯାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "ଜଳ ମାଧ୍ୟମରେ ବିଦ୍ୟୁତ୍ ପ୍ରବାହିତ ହେଲେ କଣ ହୁଏ?", options: ["ଜଳ ଫୁଟେ", "ଜଳ H₂ ଏବଂ O₂ ରେ ଭାଙ୍ଗିଯାଏ", "ଜଳ ଜମିଯାଏ", "କିଛି ହୁଏନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ଜଳ ହାଇଡ୍ରୋଜେନ୍ ଏବଂ ଅକ୍ସିଜେନ୍‌ରେ ଭାଙ୍ଗିଯାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "ଲୋହା ବସ୍ତୁକୁ କ୍ରୋମିୟମ୍‌ରେ ପ୍ଲେଟ୍ କାହିଁକି କରାଯାଏ?", options: ["ଭାରୀ କରିବାକୁ", "ଜଙ୍ଗ ରୋକିବାକୁ", "ଚୁମ୍ବକୀୟ କରିବାକୁ", "ଭଲ ପରିବାହକ କରିବାକୁ"], correctAnswer: 1, marks: 1, explanation: "କ୍ରୋମିୟମ୍ ଜଙ୍ଗ ରୋକେ।" },
      { quiz: scienceQuiz3._id, questionText: "ଟେଷ୍ଟର୍ କାହା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ?", options: ["ତାପ ଯାଞ୍ଚ", "ବିଦ୍ୟୁତ୍ ପରିବାହନ ଯାଞ୍ଚ", "ଶୁଦ୍ଧତା ଯାଞ୍ଚ", "ରଙ୍ଗ ଯାଞ୍ଚ"], correctAnswer: 1, marks: 1, explanation: "ଟେଷ୍ଟର୍ ଦ୍ରବ୍ୟ ବିଦ୍ୟୁତ୍ ପରିବାହନ କରୁଛି କି ନାହିଁ ଯାଞ୍ଚ କରେ।" },
      { quiz: scienceQuiz3._id, questionText: "ଗହଣାରେ ସାଧାରଣତଃ କେଉଁ ଧାତୁ ଇଲେକ୍ଟ୍ରୋପ୍ଲେଟିଂ ପାଇଁ ବ୍ୟବହୃତ ହୁଏ?", options: ["ଲୋହା", "ତାମା", "ସୁନା", "ଏଲୁମିନିୟମ୍"], correctAnswer: 2, marks: 1, explanation: "ସୁନା ଗହଣାକୁ ଚକଚକେ କରେ।" },
    ]);

    console.log("✓ ଶ୍ରେଣୀ 8 ବିଜ୍ଞାନ: 3ଟି କୁଇଜ୍ ଏବଂ 30ଟି ପ୍ରଶ୍ନ ସୃଷ୍ଟି ହୋଇଛି");

  } catch (error) {
    console.error("ବିଫଳ:", error.message);
  }
};

export default seedClass8ScienceOdia;
