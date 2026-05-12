import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceEnglishOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Flamingo - ଗଦ୍ୟ",
      subject: "English",
      category: "Literature",
      chapter: "Flamingo Prose",
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
      { quiz: quiz1._id, questionText: "'The Last Lesson' କିଏ ଲେଖିଥିଲେ?", options: ["Louis Fischer", "Alphonse Daudet", "Anees Jung", "Tishani Doshi"], correctAnswer: 1, marks: 1, explanation: "Alphonse Daudet Franco-Prussian War ର ପ୍ରଭାବ ଉପରେ ଏହି କାହାଣୀ ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'Lost Spring' କାହା ବିଷୟରେ?", options: ["ଋତୁ", "ଦାରିଦ୍ର୍ୟ ଏବଂ ଶିଶୁ ଶ୍ରମରେ ହାରାଇଥିବା ଶୈଶବ", "ବସନ୍ତ ଉତ୍ସବ", "ପ୍ରକୃତି"], correctAnswer: 1, marks: 1, explanation: "ଏହି ଅଧ୍ୟାୟ ଦାରିଦ୍ର୍ୟରେ ଫସିଥିବା ଶିଶୁମାନଙ୍କୁ ଦର୍ଶାଏ।" },
      { quiz: quiz1._id, questionText: "'Deep Water' ରେ William Douglas କେଉଁ ଭୟକୁ ଜିତିଥିଲେ?", options: ["ଉଚ୍ଚତା", "ପାଣି/ତରଣ", "ଅନ୍ଧାର", "ଜନସମ୍ମୁଖରେ କହିବା"], correctAnswer: 1, marks: 1, explanation: "ସେ ତାଙ୍କ ପାଣି ଭୟକୁ ଜିତିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'The Rattrap' କିଏ ଲେଖିଥିଲେ?", options: ["Anees Jung", "Selma Lagerlöf", "Alphonse Daudet", "Louis Fischer"], correctAnswer: 1, marks: 1, explanation: "Selma Lagerlöf ମାନବୀୟ ଦୟା ଉପରେ ଏହି କାହାଣୀ ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'Indigo' ରେ Champaran ଆନ୍ଦୋଳନ କିଏ ନେତୃତ୍ୱ କରିଥିଲେ?", options: ["ଜବାହରଲାଲ ନେହରୁ", "ମହାତ୍ମା ଗାନ୍ଧୀ", "ସୁଭାଷ ବୋଷ", "ସର୍ଦାର ପଟେଲ"], correctAnswer: 1, marks: 1, explanation: "ଗାନ୍ଧୀଜୀ Indigo କୃଷକମାନଙ୍କ ପାଇଁ Champaran ଆନ୍ଦୋଳନ ଚାଲାଇଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'Poets and Pancakes' କାହା ବିଷୟରେ?", options: ["ରାନ୍ଧଣା", "Madras ର Gemini Studios", "କବିତା ଲେଖନ", "ଚିତ୍ରକଳା"], correctAnswer: 1, marks: 1, explanation: "ଏହା Gemini Studios ର ଅନୁଭବ ବିଷୟରେ।" },
      { quiz: quiz1._id, questionText: "'The Interview' ର ମୁଖ୍ୟ ବିଷୟ କଣ?", options: ["Job interview", "Interview ର କଳା ଏବଂ ନୀତି", "School exam", "Court"], correctAnswer: 1, marks: 1, explanation: "ଏହା interview ର ପ୍ରଭାବ ଏବଂ ଗୁରୁତ୍ୱକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz1._id, questionText: "'Going Places' କାହା ବିଷୟରେ?", options: ["ଭ୍ରମଣ", "କିଶୋରୀର କଳ୍ପନା ଏବଂ ବାସ୍ତବତା", "ଖେଳ", "ବିଜ୍ଞାନ କଳ୍ପନା"], correctAnswer: 1, marks: 1, explanation: "Sophia ଙ୍କ ସ୍ୱପ୍ନ ଏବଂ ବାସ୍ତବ ଜୀବନ ମଧ୍ୟର ତଫାତ୍ ଦର୍ଶାଯାଇଛି।" },
      { quiz: quiz1._id, questionText: "'The Last Lesson' ରେ M. Hamel କେଉଁ ବିଷୟ ପଢ଼ାଉଥିଲେ?", options: ["English", "French", "German", "Mathematics"], correctAnswer: 1, marks: 1, explanation: "ସେ ଶେଷ French ପାଠ ପଢ଼ାଉଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'The Rattrap' ରେ ପୃଥିବୀକୁ କାହା ସହ ତୁଳନା କରାଯାଇଛି?", options: ["ଜେଲ", "ଏକ ଫାନ୍ଦ", "ଉଦ୍ୟାନ", "ମଞ୍ଚ"], correctAnswer: 1, marks: 1, explanation: "ପୃଥିବୀକୁ ଲୋଭର ଫାନ୍ଦ ଭାବେ ଦର୍ଶାଯାଇଛି।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "Flamingo - କବିତା",
      subject: "English",
      category: "Literature",
      chapter: "Flamingo Poetry",
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
      { quiz: quiz2._id, questionText: "'My Mother at Sixty-six' କିଏ ଲେଖିଥିଲେ?", options: ["Pablo Neruda", "Kamala Das", "Stephen Spender", "John Keats"], correctAnswer: 1, marks: 1, explanation: "Kamala Das ତାଙ୍କ ମାଆଙ୍କ ବୃଦ୍ଧାବସ୍ଥା ବିଷୟରେ ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'Keeping Quiet' ରେ Pablo Neruda କଣ ପ୍ରଚାର କରନ୍ତି?", options: ["ସଦା ନିରବତା", "ଆତ୍ମପର୍ଯ୍ୟାଲୋଚନା ଏବଂ ନିରବତାର ମୁହୂର୍ତ୍ତ", "ରାଜନୈତିକ ପ୍ରତିବାଦ", "ଧାର୍ମିକ ଧ୍ୟାନ"], correctAnswer: 1, marks: 1, explanation: "ସେ ଆତ୍ମଚିନ୍ତନ ପାଇଁ ନିରବତା ଚାହୁଁଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'A Thing of Beauty' କଉ ପୁସ୍ତକରୁ ନିଆଯାଇଛି?", options: ["Paradise Lost", "Endymion", "The Waste Land", "Ode to a Nightingale"], correctAnswer: 1, marks: 1, explanation: "ଏହା John Keats ଙ୍କ 'Endymion' ରୁ ନିଆଯାଇଛି।" },
      { quiz: quiz2._id, questionText: "'Aunt Jennifer's Tigers' ରେ tiger କଣ ସୂଚାଏ?", options: ["ଭୟ", "ସ୍ୱାଧୀନତା ଏବଂ ଶକ୍ତି", "ବିପଦ", "ପ୍ରକୃତି"], correctAnswer: 1, marks: 1, explanation: "Tiger ସ୍ୱାଧୀନତା ଏବଂ ସାହସର ପ୍ରତୀକ।" },
      { quiz: quiz2._id, questionText: "'An Elementary School Classroom in a Slum' କିଏ ଲେଖିଥିଲେ?", options: ["Kamala Das", "Stephen Spender", "Pablo Neruda", "Adrienne Rich"], correctAnswer: 1, marks: 1, explanation: "ଏହା slum ଶିଶୁମାନଙ୍କ ଦୁର୍ଦ୍ଦଶା ବିଷୟରେ।" },
      { quiz: quiz2._id, questionText: "'Keeping Quiet' ରେ Neruda କେତେ ପର୍ଯ୍ୟନ୍ତ ଗଣନା କରିବାକୁ କହନ୍ତି?", options: ["Ten", "Twelve", "Hundred", "Five"], correctAnswer: 1, marks: 1, explanation: "ସେ ସମସ୍ତଙ୍କୁ twelve ପର୍ଯ୍ୟନ୍ତ ଗଣନା କରିବାକୁ କହିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'My Mother at Sixty-six' ରେ ମାଆଙ୍କ ମୁହଁ କାହା ସହ ତୁଳନା କରାଯାଇଛି?", options: ["ଫୁଲ", "ଚନ୍ଦ୍ର/ମୃତଦେହ", "ଚିତ୍ର", "ତାରା"], correctAnswer: 1, marks: 1, explanation: "ତାଙ୍କ ମୁହଁକୁ pale moon ସହ ତୁଳନା କରାଯାଇଛି।" },
      { quiz: quiz2._id, questionText: "Aunt Jennifer's tigers କେମିତି tiger?", options: ["ସତ୍ୟ tiger", "Embroidery tiger", "Toy tiger", "Painted tiger"], correctAnswer: 1, marks: 1, explanation: "ସେ ପ୍ୟାନେଲ୍ ଉପରେ tiger ଏମ୍ବ୍ରଏଡରି କରିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'A Roadside Stand' କବିତା କାହା ବିଷୟରେ?", options: ["ସହର ଜୀବନ", "ଗ୍ରାମ ଲୋକଙ୍କ ଆଶା ଏବଂ ଅବହେଳା", "ରାସ୍ତା ନିର୍ମାଣ", "ଭ୍ରମଣ"], correctAnswer: 1, marks: 1, explanation: "ଗ୍ରାମ ଲୋକମାନଙ୍କ ଆର୍ଥିକ ସମସ୍ୟାକୁ ଦର୍ଶାଯାଇଛି।" },
      { quiz: quiz2._id, questionText: "'A Thing of Beauty' ଅନୁଯାୟୀ ସୌନ୍ଦର୍ଯ୍ୟ କଣ ଦେଇଥାଏ?", options: ["ଧନ", "ଚିରସ୍ଥାୟୀ ଆନନ୍ଦ", "ଖ୍ୟାତି", "ଶକ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ସୌନ୍ଦର୍ଯ୍ୟ ଆନନ୍ଦ ଏବଂ ଆଶା ଦେଇଥାଏ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Grammar and Writing Skills",
      subject: "English",
      category: "Grammar",
      chapter: "Advanced Grammar",
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
      { quiz: quiz3._id, questionText: "'She said, \"I will come tomorrow\"' ର indirect speech କଣ?", options: ["She said she will come tomorrow.", "She said she would come the next day.", "She said she would come tomorrow.", "She told she will come the next day."], correctAnswer: 1, marks: 1, explanation: "'Will' → 'would' ଏବଂ 'tomorrow' → 'next day'।" },
      { quiz: quiz3._id, questionText: "'They are building a bridge' ର passive voice କଣ?", options: ["A bridge is built by them.", "A bridge is being built by them.", "A bridge was being built by them.", "A bridge has been built by them."], correctAnswer: 1, marks: 1, explanation: "Present continuous passive = is/are being + past participle।" },
      { quiz: quiz3._id, questionText: "Formal letter କିପରି ଆରମ୍ଭ ହୁଏ?", options: ["Dear Friend", "Sender's address and date", "Hi there", "Greetings"], correctAnswer: 1, marks: 1, explanation: "Formal letter sender address ଏବଂ date ସହ ଆରମ୍ଭ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "'Neither of the students ___ present.' ସଠିକ ଶବ୍ଦ ବାଛନ୍ତୁ।", options: ["were", "was", "are", "have been"], correctAnswer: 1, marks: 1, explanation: "'Neither' singular verb ନିଏ।" },
      { quiz: quiz3._id, questionText: "Notice ରେ କଣ ଥିବା ଆବଶ୍ୟକ?", options: ["Personal opinion", "Date, heading, body, authority", "Informal language", "Long paragraph"], correctAnswer: 1, marks: 1, explanation: "Notice ରେ heading, body ଏବଂ authority ଦରକାର।" },
      { quiz: quiz3._id, questionText: "'If I ___ you, I would apologize.' ରେ ସଠିକ ଶବ୍ଦ କଣ?", options: ["am", "were", "was", "be"], correctAnswer: 1, marks: 1, explanation: "Hypothetical condition ରେ 'were' ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Article writing ରେ କଣ ଥାଏ?", options: ["Only facts", "Heading, byline, intro, body, conclusion", "No paragraph", "Only opinions"], correctAnswer: 1, marks: 1, explanation: "Article ରେ heading ଏବଂ conclusion ଥାଏ।" },
      { quiz: quiz3._id, questionText: "'Had I known earlier, I would have helped.' କେଉଁ conditional?", options: ["First", "Third conditional", "Second", "Zero"], correctAnswer: 1, marks: 1, explanation: "ଏହା past unreal କୁ ସୂଚାଏ।" },
      { quiz: quiz3._id, questionText: "Report writing ଏବଂ article writing ମଧ୍ୟରେ ତଫାତ କଣ?", options: ["Length only", "Objective and factual tone", "Use of heading", "Nothing"], correctAnswer: 1, marks: 1, explanation: "Report factual ଏବଂ objective ହୁଏ।" },
      { quiz: quiz3._id, questionText: "ସଠିକ sentence ବାଛନ୍ତୁ।", options: ["Each of the boys have their books.", "Each of the boys has his book.", "Each of the boys have his book.", "Each of the boys has their books."], correctAnswer: 1, marks: 1, explanation: "'Each' singular ଥିବାରୁ singular verb ବ୍ୟବହୃତ ହୁଏ।" },
    ]);

    console.log("✓ Class 12 Science - English Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceEnglishOdia };
