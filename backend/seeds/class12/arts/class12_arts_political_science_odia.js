import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsPoliticalScienceOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଭାରତୀୟ ସଂବିଧାନ ଏବଂ ରାଜନୀତି",
      subject: "Political Science",
      category: "Indian Politics",
      chapter: "ସଂବିଧାନିକ ଗଠନ",
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
      { quiz: quiz1._id, questionText: "42ତମ ସଂଶୋଧନକୁ କ’ଣ କୁହାଯାଏ?", options: ["Mini Constitution", "Restoration Amendment", "Rights Amendment", "Federal Amendment"], correctAnswer: 0, marks: 1, explanation: "1976 ରେ ଏହା ସଂବିଧାନରେ ବ୍ୟାପକ ପରିବର୍ତ୍ତନ କରିଥିଲା।" },
      { quiz: quiz1._id, questionText: "କେଉଁ ସଂଶୋଧନ judicial review ଶକ୍ତିକୁ ପୁନଃସ୍ଥାପିତ କଲା?", options: ["42ତମ", "43ତମ", "44ତମ", "45ତମ"], correctAnswer: 2, marks: 1, explanation: "44ତମ ସଂଶୋଧନ (1978) 42ତମ ସଂଶୋଧନର ଅନେକ ପରିବର୍ତ୍ତନକୁ ବାତିଲ କରିଥିଲା।" },
      { quiz: quiz1._id, questionText: "1975 ର ଜରୁରୀକାଳ କେଉଁ ଅନୁଚ୍ଛେଦ ଅଧୀନରେ ଘୋଷଣା ହୋଇଥିଲା?", options: ["ଅନୁଚ୍ଛେଦ 352", "ଅନୁଚ୍ଛେଦ 356", "ଅନୁଚ୍ଛେଦ 360", "ଅନୁଚ୍ଛେଦ 370"], correctAnswer: 0, marks: 1, explanation: "ରାଷ୍ଟ୍ରୀୟ ଜରୁରୀକାଳ ଅନୁଚ୍ଛେଦ 352 ଅନୁସାରେ ଘୋଷଣା ହୋଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "Chief Election Commissioner କୁ କିଏ ନିଯୁକ୍ତ କରନ୍ତି?", options: ["ସଂସଦ", "ରାଷ୍ଟ୍ରପତି", "ପ୍ରଧାନମନ୍ତ୍ରୀ", "ମୁଖ୍ୟ ବିଚାରପତି"], correctAnswer: 1, marks: 1, explanation: "ରାଷ୍ଟ୍ରପତି ସରକାରଙ୍କ ପରାମର୍ଶରେ CEC କୁ ନିଯୁକ୍ତ କରନ୍ତି।" },
      { quiz: quiz1._id, questionText: "ଦଳବଦଳ ବିରୋଧୀ ଆଇନ କେଉଁ ସଂଶୋଧନ ଦ୍ୱାରା ଯୋଡ଼ାଯାଇଥିଲା?", options: ["50ତମ", "52ତମ", "54ତମ", "56ତମ"], correctAnswer: 1, marks: 1, explanation: "52ତମ ସଂଶୋଧନ (1985) ଦ୍ୱାରା ଦଶମ ସୂଚୀ ଯୋଡ଼ାଯାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "Panchayati Raj କୁ କେଉଁ ସଂଶୋଧନ ସଂବିଧାନିକ ମାନ୍ୟତା ଦେଇଥିଲା?", options: ["71ତମ", "73ତମ", "74ତମ", "75ତମ"], correctAnswer: 1, marks: 1, explanation: "73ତମ ସଂଶୋଧନ (1992) Panchayat ମାନଙ୍କୁ ସଂବିଧାନିକ ମାନ୍ୟତା ଦେଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଶିକ୍ଷାର ଅଧିକାର କେଉଁ ସଂଶୋଧନ ଦ୍ୱାରା ଯୋଡ଼ାଯାଇଥିଲା?", options: ["84ତମ", "86ତମ", "88ତମ", "90ତମ"], correctAnswer: 1, marks: 1, explanation: "86ତମ ସଂଶୋଧନ (2002) ଦ୍ୱାରା ଶିକ୍ଷାକୁ ମୌଳିକ ଅଧିକାର କରାଯାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ରାଜ୍ୟସଭାରେ କେତେ ସଦସ୍ୟ ଅଛନ୍ତି?", options: ["240", "245", "250", "260"], correctAnswer: 1, marks: 1, explanation: "ସର୍ବାଧିକ 250 ସଦସ୍ୟ, ଯାହାରୁ 12 ଜଣ ରାଷ୍ଟ୍ରପତିଙ୍କ ଦ୍ୱାରା ନିଯୁକ୍ତ।" },
      { quiz: quiz1._id, questionText: "ଭାରତୀୟ ସଂବିଧାନର ଶେଷ ବ୍ୟାଖ୍ୟାକାର କିଏ?", options: ["ରାଷ୍ଟ୍ରପତି", "ସଂସଦ", "ସୁପ୍ରିମ କୋର୍ଟ", "ପ୍ରଧାନମନ୍ତ୍ରୀ"], correctAnswer: 2, marks: 1, explanation: "ସୁପ୍ରିମ କୋର୍ଟ ପାଖରେ judicial review ର ଶକ୍ତି ଅଛି।" },
      { quiz: quiz1._id, questionText: "GST କେଉଁ ସଂଶୋଧନ ଦ୍ୱାରା ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["99ତମ", "100ତମ", "101ତମ", "102ତମ"], correctAnswer: 2, marks: 1, explanation: "101ତମ ସଂଶୋଧନ (2016) ଦ୍ୱାରା GST ଲାଗୁ ହୋଇଥିଲା।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଆନ୍ତର୍ଜାତୀୟ ସମ୍ପର୍କ",
      subject: "Political Science",
      category: "International Politics",
      chapter: "Cold War and Beyond",
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
      { quiz: quiz2._id, questionText: "NAM ର ପୂର୍ଣ୍ଣ ରୂପ କ’ଣ?", options: ["National Alliance Movement", "Non-Aligned Movement", "New Asian Movement", "North Atlantic Movement"], correctAnswer: 1, marks: 1, explanation: "ଯେଉଁ ଦେଶମାନେ USA କିମ୍ବା USSR କୌଣସି bloc ସହ ଯୁକ୍ତ ନଥିଲେ।" },
      { quiz: quiz2._id, questionText: "Cuban Missile Crisis କେଉଁ ବର୍ଷରେ ଘଟିଥିଲା?", options: ["1960", "1962", "1964", "1966"], correctAnswer: 1, marks: 1, explanation: "1962 ଅକ୍ଟୋବରରେ USA ଏବଂ USSR ମଧ୍ୟରେ 13 ଦିନର ସଂଘର୍ଷ।" },
      { quiz: quiz2._id, questionText: "ASEAN କେଉଁ ବର୍ଷରେ ସ୍ଥାପିତ ହୋଇଥିଲା?", options: ["1965", "1967", "1969", "1971"], correctAnswer: 1, marks: 1, explanation: "Bangkok ରେ 5ଟି ଦକ୍ଷିଣ-ପୂର୍ବ ଏସିଆ ଦେଶ ଦ୍ୱାରା ସ୍ଥାପିତ।" },
      { quiz: quiz2._id, questionText: "Soviet Union କେଉଁ ବର୍ଷରେ ବିଘଟିତ ହୋଇଥିଲା?", options: ["1989", "1990", "1991", "1992"], correctAnswer: 2, marks: 1, explanation: "USSR 26 ଡିସେମ୍ବର 1991 ରେ ଅଧିକାରିକ ଭାବେ ବିଘଟିତ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "ଭାରତର 'Look East Policy' କିଏ ଆରମ୍ଭ କରିଥିଲେ?", options: ["ରାଜୀବ ଗାନ୍ଧୀ", "P.V. Narasimha Rao", "ବାଜପେୟୀ", "ମନମୋହନ ସିଂହ"], correctAnswer: 1, marks: 1, explanation: "1991 ରେ ଦକ୍ଷିଣ-ପୂର୍ବ ଏସିଆ ସହ ସମ୍ପର୍କ ମଜବୁତ କରିବାକୁ ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "UN Security Council ରେ କେତେ ସ୍ଥାୟୀ ସଦସ୍ୟ ଅଛନ୍ତି?", options: ["3", "5", "7", "10"], correctAnswer: 1, marks: 1, explanation: "USA, UK, France, Russia ଏବଂ China ହେଉଛନ୍ତି P5।" },
      { quiz: quiz2._id, questionText: "NATO କେଉଁ ବର୍ଷରେ ଗଠିତ ହୋଇଥିଲା?", options: ["1947", "1949", "1951", "1953"], correctAnswer: 1, marks: 1, explanation: "ସାମୂହିକ ସୁରକ୍ଷା ପାଇଁ NATO ଗଠିତ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "Globalization ପ୍ରଧାନତଃ କେବେ ତ୍ୱରାନ୍ୱିତ ହେଲା?", options: ["1970s", "1980s", "1991", "2000s"], correctAnswer: 2, marks: 1, explanation: "Cold War ର ଶେଷ ଏବଂ economic liberalization ଦ୍ୱାରା globalization ବଢ଼ିଲା।" },
      { quiz: quiz2._id, questionText: "SAARC କେଉଁ ବର୍ଷରେ ସ୍ଥାପିତ ହୋଇଥିଲା?", options: ["1983", "1985", "1987", "1989"], correctAnswer: 1, marks: 1, explanation: "South Asian Association for Regional Cooperation ଢାକାରେ ସ୍ଥାପିତ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "Bandung Conference (1955) କାହାର ଭିତ୍ତି ସୃଷ୍ଟି କରିଥିଲା?", options: ["NATO", "Non-Aligned Movement", "ASEAN", "EU"], correctAnswer: 1, marks: 1, explanation: "ଏହା NAM ଏବଂ Afro-Asian solidarity ର ଭିତ୍ତି ତିଆରି କରିଥିଲା।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ସ୍ୱାଧୀନତା ପରବର୍ତ୍ତୀ ଭାରତୀୟ ରାଜନୀତି",
      subject: "Political Science",
      category: "Indian Politics",
      chapter: "Planned Development ର ରାଜନୀତି",
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
      { quiz: quiz3._id, questionText: "ଭାରତ କେଉଁ ଦେଶରୁ planning model ଗ୍ରହଣ କରିଥିଲା?", options: ["USA", "USSR", "UK", "France"], correctAnswer: 1, marks: 1, explanation: "ଭାରତ Soviet planning ରୁ ପ୍ରେରିତ Five Year Plans ଗ୍ରହଣ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "ଭାରତର ପ୍ରଥମ ସାଧାରଣ ନିର୍ବାଚନ କେବେ ହୋଇଥିଲା?", options: ["1950", "1951-52", "1953", "1955"], correctAnswer: 1, marks: 1, explanation: "ଭାରତର ପ୍ରଥମ ନିର୍ବାଚନ 1951-52 ରେ ହୋଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "Coalition politics ର ଯୁଗ ପ୍ରମୁଖ ଭାବରେ କେବେ ଆରମ୍ଭ ହେଲା?", options: ["1977", "1989", "1996", "1999"], correctAnswer: 1, marks: 1, explanation: "1989 ର ନିର୍ବାଚନରେ ପ୍ରଥମ ମୁଖ୍ୟ coalition government ଗଠିତ ହୋଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "LPG reforms କେଉଁ ବର୍ଷରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1989", "1991", "1993", "1995"], correctAnswer: 1, marks: 1, explanation: "Narasimha Rao ଙ୍କ ଶାସନକାଳରେ Liberalization, Privatization, Globalization ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "Mandal Commission report କେବେ କାର୍ଯ୍ୟକରୀ ହୋଇଥିଲା?", options: ["1980", "1985", "1990", "1995"], correctAnswer: 2, marks: 1, explanation: "V.P. Singh 1990 ରେ OBC reservation ଲାଗୁ କରିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "Pokhran-II ର nuclear tests କେବେ କରାଯାଇଥିଲା?", options: ["1996", "1998", "2000", "2002"], correctAnswer: 1, marks: 1, explanation: "Operation Shakti May 1998 ରେ କରାଯାଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "Congress system dominance କେଉଁ ନିର୍ବାଚନରେ ଶେଷ ହେଲା?", options: ["1967", "1971", "1977", "1980"], correctAnswer: 0, marks: 1, explanation: "1967 ରେ Congress ଅନେକ ରାଜ୍ୟରେ ପରାଜିତ ହୋଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "RTI Act କେଉଁ ବର୍ଷରେ ପାସ୍ ହୋଇଥିଲା?", options: ["2003", "2005", "2007", "2009"], correctAnswer: 1, marks: 1, explanation: "Right to Information Act ନାଗରିକମାନଙ୍କୁ ସରକାରୀ ସୂଚନା ମାଗିବାର ଶକ୍ତି ଦେଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "Shah Commission କେଉଁ ଘଟଣାର ତଦନ୍ତ କରିଥିଲା?", options: ["1971 ଯୁଦ୍ଧ", "1975 ର ଜରୁରୀକାଳ", "1984 ଦଙ୍ଗା", "Bofors Scam"], correctAnswer: 1, marks: 1, explanation: "ଏହା Indira Gandhi ଙ୍କ Emergency ସମୟର ଅତ୍ୟାଚାର ତଦନ୍ତ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "Congress ବ୍ୟତୀତ କେଉଁ ଦଳ ପ୍ରଥମେ କେନ୍ଦ୍ରରେ ସରକାର ଗଠନ କରିଥିଲା?", options: ["BJP", "Janata Party", "Communist Party", "DMK"], correctAnswer: 1, marks: 1, explanation: "1977 ରେ Morarji Desai ଙ୍କ ନେତୃତ୍ୱରେ Janata Party ଜିତିଥିଲା।" },
    ]);

    console.log("✓ Class 12 Arts - Political Science Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsPoliticalScienceOdia };
