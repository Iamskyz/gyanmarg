import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsHistoryOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଭାରତୀୟ ଜାତୀୟ ଆନ୍ଦୋଳନ",
      subject: "History",
      category: "Modern India",
      chapter: "ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ",
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
      { quiz: quiz1._id, questionText: "1930 ମସିହାରେ ଲୁଣ ସତ୍ୟାଗ୍ରହ କିଏ ନେତୃତ୍ୱ କରିଥିଲେ?", options: ["ଜବାହରଲାଲ ନେହରୁ", "ମହାତ୍ମା ଗାନ୍ଧୀ", "ସୁଭାଷ ଚନ୍ଦ୍ର ବୋଷ", "ସର୍ଦାର ପଟେଲ"], correctAnswer: 1, marks: 1, explanation: "ଗାନ୍ଧୀଜୀ ବ୍ରିଟିଶ ଲୁଣ କର ବିରୋଧରେ ଡାଣ୍ଡୀ ଯାତ୍ରା କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ଭାରତ ଛାଡ଼ ଆନ୍ଦୋଳନ କେଉଁ ବର୍ଷରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1940", "1942", "1944", "1946"], correctAnswer: 1, marks: 1, explanation: "1942 ଅଗଷ୍ଟ 8 ତାରିଖରେ ଗାନ୍ଧୀଜୀ ଏହା ଆରମ୍ଭ କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'କର କିମ୍ବା ମର' ସ୍ଲୋଗାନ କିଏ ଦେଇଥିଲେ?", options: ["ତିଳକ", "ଗାନ୍ଧୀଜୀ", "ବୋଷ", "ଭଗତ ସିଂହ"], correctAnswer: 1, marks: 1, explanation: "ଏହି ସ୍ଲୋଗାନ ଭାରତ ଛାଡ଼ ଆନ୍ଦୋଳନ ସମୟରେ ଦିଆଯାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଭାରତୀୟ ଜାତୀୟ କଂଗ୍ରେସ କେବେ ସ୍ଥାପିତ ହୋଇଥିଲା?", options: ["1880", "1885", "1890", "1895"], correctAnswer: 1, marks: 1, explanation: "A.O. Hume 1885 ମସିହାରେ INC ସ୍ଥାପନା କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "INC ର ପ୍ରଥମ ଅଧ୍ୟକ୍ଷ କିଏ ଥିଲେ?", options: ["A.O. Hume", "W.C. Bonnerjee", "Dadabhai Naoroji", "Surendranath Banerjee"], correctAnswer: 1, marks: 1, explanation: "Bombay ରେ ପ୍ରଥମ ଅଧିବେଶନରେ W.C. Bonnerjee ଅଧ୍ୟକ୍ଷତା କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ରାଉଲାଟ୍ ଆଇନ କେଉଁ ବର୍ଷରେ ପାସ୍ ହୋଇଥିଲା?", options: ["1917", "1919", "1921", "1923"], correctAnswer: 1, marks: 1, explanation: "ଏହା ମୁକଦ୍ଦମା ବିନା ଗିରଫ କରିବାକୁ ଅନୁମତି ଦେଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଜାଲିଆନୱାଲା ବାଘ ହତ୍ୟାକାଣ୍ଡ କେଉଁ ସହରରେ ଘଟିଥିଲା?", options: ["ଦିଲ୍ଲୀ", "ଅମୃତସର", "ଲାହୋର", "ଲକ୍ଷ୍ଣୌ"], correctAnswer: 1, marks: 1, explanation: "General Dyer ଅମୃତସରରେ ଶାନ୍ତିପୂର୍ଣ୍ଣ ଜନସମାବେଶ ଉପରେ ଗୋଳି ଚଳାଇଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ଅସହଯୋଗ ଆନ୍ଦୋଳନ କେଉଁ ବର୍ଷରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1919", "1920", "1922", "1924"], correctAnswer: 1, marks: 1, explanation: "1920 ରେ ଗାନ୍ଧୀଜୀ ବ୍ରିଟିଶ ଶାସନ ବିରୋଧରେ ଏହା ଆରମ୍ଭ କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ଆଲ୍ ଇଣ୍ଡିଆ ମୁସଲିମ ଲିଗ୍ କିଏ ସ୍ଥାପନା କରିଥିଲେ?", options: ["ଜିନ୍ନା", "ଆଗା ଖାନ III", "ଲିଆକତ ଅଲି ଖାନ", "ସୟଦ ଆହମଦ ଖାନ"], correctAnswer: 1, marks: 1, explanation: "1906 ମସିହାରେ ଢାକାରେ ଆଗା ଖାନ III ଙ୍କ ନେତୃତ୍ୱରେ ସ୍ଥାପିତ ହୋଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "Cabinet Mission କେଉଁ ବର୍ଷରେ ଭାରତକୁ ଆସିଥିଲା?", options: ["1944", "1946", "1947", "1948"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଏକତ୍ରିତ ଭାରତ ପାଇଁ ତିନି-ସ୍ତରୀୟ ସଂଘୀୟ ଗଠନ ପ୍ରସ୍ତାବ ଦେଇଥିଲା।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଔପନିବେଶିକ ଭାରତ - ଅର୍ଥନୀତି ଏବଂ ସମାଜ",
      subject: "History",
      category: "Modern India",
      chapter: "ଔପନିବେଶିକ ଅର୍ଥନୀତି",
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
      { quiz: quiz2._id, questionText: "Permanent Settlement କିଏ ଆରମ୍ଭ କରିଥିଲେ?", options: ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie"], correctAnswer: 1, marks: 1, explanation: "1793 ମସିହାରେ Cornwallis ବଙ୍ଗରେ ଏହା ଆରମ୍ଭ କରିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "Ryotwari ପ୍ରଣାଳୀ ପ୍ରଧାନତଃ କେଉଁଠି ଥିଲା?", options: ["ବଙ୍ଗ", "ମଦ୍ରାସ ଏବଂ ବମ୍ବେ", "ପଞ୍ଜାବ", "Central Provinces"], correctAnswer: 1, marks: 1, explanation: "ସରକାର ଏବଂ ଚାଷୀଙ୍କ ମଧ୍ୟରେ ସିଧା settlement ହୁଏଥିଲା।" },
      { quiz: quiz2._id, questionText: "'Poverty and Un-British Rule in India' କିଏ ଲେଖିଥିଲେ?", options: ["R.C. Dutt", "Dadabhai Naoroji", "M.G. Ranade", "Gokhale"], correctAnswer: 1, marks: 1, explanation: "Naoroji ଙ୍କ Drain Theory ବ୍ରିଟିଶ ଶୋଷଣକୁ ଉଜାଗର କରିଥିଲା।" },
      { quiz: quiz2._id, questionText: "ଭାରତର ପ୍ରଥମ ରେଳପଥ କେଉଁଠାରୁ କେଉଁଠାକୁ ଥିଲା?", options: ["ଦିଲ୍ଲୀ-ଆଗ୍ରା", "ବମ୍ବେ-ଥାଣେ", "କଲକାତା-ଦିଲ୍ଲୀ", "ମଦ୍ରାସ-ବେଙ୍ଗାଲୁରୁ"], correctAnswer: 1, marks: 1, explanation: "1853 ରେ 34 km ଦୂରତାରେ ଏହା ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "Indigo revolt କେଉଁ ବର୍ଷରେ ହୋଇଥିଲା?", options: ["1857", "1859", "1862", "1870"], correctAnswer: 1, marks: 1, explanation: "ବଙ୍ଗର ଚାଷୀମାନେ ବାଧ୍ୟତାମୂଳକ ନୀଳ ଚାଷ ବିରୋଧରେ ବିଦ୍ରୋହ କରିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "Doctrine of Lapse କିଏ ଆରମ୍ଭ କରିଥିଲେ?", options: ["Cornwallis", "Dalhousie", "Canning", "Hastings"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରାକୃତିକ ଉତ୍ତରାଧିକାରୀ ନଥିବା ରାଜ୍ୟଗୁଡ଼ିକୁ ଏହା ମାଧ୍ୟମରେ ଜୋଡ଼ାଯାଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "ଔପନିବେଶିକ ଭାରତର de-industrialization କେଉଁ କ୍ଷେତ୍ରକୁ ପ୍ରଭାବିତ କରିଥିଲା?", options: ["କୃଷି", "ବସ୍ତ୍ର ଏବଂ ହସ୍ତଶିଳ୍ପ ଶିଳ୍ପ", "Mining", "Banking"], correctAnswer: 1, marks: 1, explanation: "ବ୍ରିଟିଶ ନୀତି ଭାରତୀୟ ବସ୍ତ୍ର ଶିଳ୍ପକୁ ନଷ୍ଟ କରିଦେଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "Drain of Wealth theory କିଏ ପ୍ରସ୍ତାବ କରିଥିଲେ?", options: ["Marx", "Dadabhai Naoroji", "Adam Smith", "Keynes"], correctAnswer: 1, marks: 1, explanation: "Naoroji ଦେଖାଇଥିଲେ କିପରି ଭାରତର ସମ୍ପଦ ବ୍ରିଟେନକୁ ଯାଉଥିଲା।" },
      { quiz: quiz2._id, questionText: "1882 ରେ decentralization କେଉଁ commission ସୁପାରିଶ କରିଥିଲା?", options: ["Simon Commission", "Ripon's Resolution", "Hunter Commission", "Sadler Commission"], correctAnswer: 1, marks: 1, explanation: "Lord Ripon local self-government କୁ ପ୍ରୋତ୍ସାହନ ଦେଇଥିଲେ।" },
      { quiz: quiz2._id, questionText: "Swadeshi Movement କାହାର ପ୍ରତିକ୍ରିୟା ଥିଲା?", options: ["Rowlatt Act", "1905 ବଙ୍ଗଭାଗ", "ଲୁଣ କର", "Simon Commission"], correctAnswer: 1, marks: 1, explanation: "Curzon ଙ୍କ Bengal partition ରେ Swadeshi Movement ଆରମ୍ଭ ହୋଇଥିଲା।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ବିଶ୍ୱଯୁଦ୍ଧ ଏବଂ ଉପନିବେଶମୁକ୍ତି",
      subject: "History",
      category: "World History",
      chapter: "20ମ ଶତାବ୍ଦୀର ବିଶ୍ୱ",
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
      { quiz: quiz3._id, questionText: "ପ୍ରଥମ ବିଶ୍ୱଯୁଦ୍ଧ କେଉଁ ବର୍ଷରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1912", "1914", "1916", "1918"], correctAnswer: 1, marks: 1, explanation: "Archduke Franz Ferdinand ଙ୍କ ହତ୍ୟା 1914 ରେ WWI ଆରମ୍ଭ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "Treaty of Versailles କେଉଁ ବର୍ଷରେ ସ୍ୱାକ୍ଷର ହୋଇଥିଲା?", options: ["1918", "1919", "1920", "1921"], correctAnswer: 1, marks: 1, explanation: "ଏହା WWI ଶେଷ କରି Germany ଉପରେ କଠୋର ଶର୍ତ୍ତ ଲାଗୁ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "League of Nations କେଉଁ ଯୁଦ୍ଧ ପରେ ଗଠିତ ହୋଇଥିଲା?", options: ["Napoleonic Wars", "ପ୍ରଥମ ବିଶ୍ୱଯୁଦ୍ଧ", "ଦ୍ୱିତୀୟ ବିଶ୍ୱଯୁଦ୍ଧ", "Cold War"], correctAnswer: 1, marks: 1, explanation: "1920 ରେ ବିଶ୍ୱ ଶାନ୍ତି ରକ୍ଷା ପାଇଁ ଗଠିତ ହୋଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "United Nations କେଉଁ ବର୍ଷରେ ସ୍ଥାପିତ ହୋଇଥିଲା?", options: ["1944", "1945", "1946", "1947"], correctAnswer: 1, marks: 1, explanation: "24 ଅକ୍ଟୋବର 1945 ରେ UN ସ୍ଥାପିତ ହୋଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "Cold War ପ୍ରଧାନତଃ କାହା ମଧ୍ୟରେ ଥିଲା?", options: ["UK ଏବଂ France", "USA ଏବଂ USSR", "China ଏବଂ Japan", "Germany ଏବଂ Russia"], correctAnswer: 1, marks: 1, explanation: "ପୁଞ୍ଜୀବାଦୀ USA ଏବଂ କମ୍ୟୁନିଷ୍ଟ USSR ମଧ୍ୟରେ ଧାର୍ମିକ ସଂଘର୍ଷ ଥିଲା।" },
      { quiz: quiz3._id, questionText: "ଆଫ୍ରିକାର decolonization କେଉଁ ଦଶକରେ ବେଗବାନ ହୋଇଥିଲା?", options: ["1940s", "1960s", "1970s", "1980s"], correctAnswer: 1, marks: 1, explanation: "1960 କୁ 'Year of Africa' କୁହାଯାଏ।" },
      { quiz: quiz3._id, questionText: "Berlin Wall କେଉଁ ବର୍ଷରେ ଭାଙ୍ଗିଥିଲା?", options: ["1987", "1989", "1991", "1993"], correctAnswer: 1, marks: 1, explanation: "ଏହା Cold War ର ଶେଷର ପ୍ରତୀକ ଥିଲା।" },
      { quiz: quiz3._id, questionText: "1949 ର Chinese Revolution କିଏ ନେତୃତ୍ୱ କରିଥିଲେ?", options: ["Sun Yat-sen", "Mao Zedong", "Chiang Kai-shek", "Deng Xiaoping"], correctAnswer: 1, marks: 1, explanation: "Mao People's Republic of China ସ୍ଥାପନା କରିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "Non-Aligned Movement କେଉଁ ବର୍ଷରେ ସ୍ଥାପିତ ହୋଇଥିଲା?", options: ["1955", "1961", "1965", "1970"], correctAnswer: 1, marks: 1, explanation: "1961 ରେ Belgrade Conference ରେ NAM ଗଠିତ ହୋଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "South Africa ର apartheid କେବେ ଶେଷ ହୋଇଥିଲା?", options: ["1990", "1992", "1994", "1996"], correctAnswer: 2, marks: 1, explanation: "1994 ରେ Nelson Mandela ରାଷ୍ଟ୍ରପତି ହୋଇଥିଲେ।" },
    ]);

    console.log("✓ Class 12 Arts - History Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsHistoryOdia };
