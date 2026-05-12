
// Full Odia translated Class 9 Social Studies file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9SocialStudiesOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ଫ୍ରେଞ୍ଚ ବିପ୍ଲବ
    const socialQuiz1 = await Quiz.create({
      title: "ଫ୍ରେଞ୍ଚ ବିପ୍ଲବ",
      subject: "Social Studies",
      category: "ଇତିହାସ",
      chapter: "French Revolution",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz1._id, questionText: "ଫ୍ରେଞ୍ଚ ବିପ୍ଲବ କେଉଁ ବର୍ଷରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["1776", "1789", "1799", "1804"], correctAnswer: 1, marks: 1, explanation: "1789 ରେ Bastille ଉପରେ ଆକ୍ରମଣ ସହ ଫ୍ରେଞ୍ଚ ବିପ୍ଲବ ଆରମ୍ଭ ହେଲା।" },
      { quiz: socialQuiz1._id, questionText: "ବିପ୍ଲବ ସମୟରେ ଫ୍ରାନ୍ସର ରାଜା କିଏ ଥିଲେ?", options: ["Louis XIV", "Louis XV", "Louis XVI", "Napoleon"], correctAnswer: 2, marks: 1, explanation: "ବିପ୍ଲବ ସମୟରେ Louis XVI ରାଜା ଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "Bastille କଣ ଥିଲା?", options: ["ମହଲ", "ଚର୍ଚ୍ଚ", "ରାଜ୍ୟ କାରାଗାର", "ବଜାର"], correctAnswer: 2, marks: 1, explanation: "Bastille ଏକ ରାଜ୍ୟ କାରାଗାର ଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "ଫ୍ରାନ୍ସ ସମାଜ କେତେ estate ରେ ବିଭକ୍ତ ଥିଲା?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "ଫ୍ରାନ୍ସ ସମାଜ 3ଟି estate ରେ ବିଭକ୍ତ ଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "'The Social Contract' କିଏ ଲେଖିଥିଲେ?", options: ["Voltaire", "Montesquieu", "Rousseau", "Locke"], correctAnswer: 2, marks: 1, explanation: "Jean-Jacques Rousseau ଏହା ଲେଖିଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "ଫ୍ରେଞ୍ଚ ବିପ୍ଲବର slogan କଣ ଥିଲା?", options: ["Unity and Strength", "Liberty, Equality, Fraternity", "Power to People", "Freedom Forever"], correctAnswer: 1, marks: 1, explanation: "'Liberty, Equality, Fraternity' ଫ୍ରେଞ୍ଚ ବିପ୍ଲବର slogan ଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "National Assembly କିଏ ଗଠନ କରିଥିଲା?", options: ["Clergy", "Nobility", "Third Estate", "King"], correctAnswer: 2, marks: 1, explanation: "Third Estate National Assembly ଗଠନ କରିଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "Napoleon Bonaparte କିଏ ଥିଲେ?", options: ["ରାଜା", "ସେନାପତି ଯିଏ ପରେ ସମ୍ରାଟ ହେଲେ", "ଦାର୍ଶନିକ", "ପାଦ୍ରୀ"], correctAnswer: 1, marks: 1, explanation: "Napoleon ଏକ ସେନାପତି ଥିଲେ ଯିଏ ପରେ ସମ୍ରାଟ ହେଲେ।" },
      { quiz: socialQuiz1._id, questionText: "'Reign of Terror' କଣ ଥିଲା?", options: ["ଶାନ୍ତିର ସମୟ", "Robespierre ଙ୍କ ଦ୍ୱାରା ଦଣ୍ଡ ଦେବାର ସମୟ", "ଉତ୍ସବ", "ଇଂଲଣ୍ଡ ସହ ଯୁଦ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "1793-94 ମଧ୍ୟରେ mass execution ହୋଇଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "Declaration of the Rights of Man କେବେ ଗ୍ରହଣ କରାଯାଇଥିଲା?", options: ["1776", "1789", "1791", "1799"], correctAnswer: 1, marks: 1, explanation: "1789 ରେ ଏହା ଗ୍ରହଣ କରାଯାଇଥିଲା।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ଭାରତର ଭୌତିକ ବିଶେଷତା
    const socialQuiz2 = await Quiz.create({
      title: "ଭାରତର ଭୌତିକ ବିଶେଷତା",
      subject: "Social Studies",
      category: "ଭୂଗୋଳ",
      chapter: "Physical Features",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz2._id, questionText: "ହିମାଳୟ କେଉଁ ପ୍ରକାର ପର୍ବତ?", options: ["Block mountains", "Fold mountains", "Volcanic mountains", "Residual mountains"], correctAnswer: 1, marks: 1, explanation: "ହିମାଳୟ young fold mountain।" },
      { quiz: socialQuiz2._id, questionText: "ଭାରତର ସର୍ବୋଚ୍ଚ ଶିଖର କଣ?", options: ["Mount Everest", "K2", "Kangchenjunga", "Nanda Devi"], correctAnswer: 2, marks: 1, explanation: "Kangchenjunga ଭାରତର ସର୍ବୋଚ୍ଚ ଶିଖର।" },
      { quiz: socialQuiz2._id, questionText: "Northern Plains କିପରି ଗଠିତ?", options: ["Volcanic activity", "ନଦୀର alluvial deposit", "ପର୍ବତ କ୍ଷୟ", "Glacial activity"], correctAnswer: 1, marks: 1, explanation: "ଗଙ୍ଗା, ବ୍ରହ୍ମପୁତ୍ର ଆଦି ନଦୀର ଆବର୍ଜନାରୁ ଗଠିତ।" },
      { quiz: socialQuiz2._id, questionText: "Deccan Plateau କେଉଁଠି ଅବସ୍ଥିତ?", options: ["ଉତ୍ତର ଭାରତ", "ଦକ୍ଷିଣ ଭାରତ", "ପୂର୍ବ ଭାରତ", "ପଶ୍ଚିମ ଭାରତ"], correctAnswer: 1, marks: 1, explanation: "Deccan Plateau ଦକ୍ଷିଣ ଭାରତରେ ଅଛି।" },
      { quiz: socialQuiz2._id, questionText: "'Sorrow of Bengal' କେଉଁ ନଦୀକୁ କୁହାଯାଏ?", options: ["Ganga", "Brahmaputra", "Damodar", "Hooghly"], correctAnswer: 2, marks: 1, explanation: "Damodar ନଦୀକୁ 'Sorrow of Bengal' କୁହାଯାଏ।" },
      { quiz: socialQuiz2._id, questionText: "Western Ghats କୁ ଆଉ କଣ କୁହାଯାଏ?", options: ["Sahyadri", "Vindhya", "Satpura", "Aravalli"], correctAnswer: 0, marks: 1, explanation: "Western Ghats = Sahyadri।" },
      { quiz: socialQuiz2._id, questionText: "ଭାରତର ପଶ୍ଚିମ ଅଞ୍ଚଳରେ କେଉଁ ମରୁଭୂମି ଅଛି?", options: ["Gobi", "Sahara", "Thar", "Atacama"], correctAnswer: 2, marks: 1, explanation: "Thar Desert ରାଜସ୍ଥାନରେ ଅଛି।" },
      { quiz: socialQuiz2._id, questionText: "ଭାରତର କେତେ major physiographic divisions ଅଛି?", options: ["4", "5", "6", "7"], correctAnswer: 2, marks: 1, explanation: "ଭାରତର 6ଟି major divisions ଅଛି।" },
      { quiz: socialQuiz2._id, questionText: "Andaman ଏବଂ Nicobar Islands କେଉଁଠି ଅଛି?", options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Pacific Ocean"], correctAnswer: 1, marks: 1, explanation: "Bay of Bengal ରେ ଅବସ୍ଥିତ।" },
      { quiz: socialQuiz2._id, questionText: "ଭାରତର ସବୁଠୁ ଲମ୍ବା ନଦୀ କଣ?", options: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"], correctAnswer: 2, marks: 1, explanation: "Ganga ଭାରତର ସବୁଠୁ ଲମ୍ବା ନଦୀ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଗଣତନ୍ତ୍ର
    const socialQuiz3 = await Quiz.create({
      title: "ଗଣତନ୍ତ୍ର କଣ? କାହିଁକି ଗଣତନ୍ତ୍ର?",
      subject: "Social Studies",
      category: "ନାଗରିକ ଶାସ୍ତ୍ର",
      chapter: "Democracy",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz3._id, questionText: "ଗଣତନ୍ତ୍ରରେ ଶାସକମାନେ କାହା ଦ୍ୱାରା ଚୟନ ହୁଅନ୍ତି?", options: ["ସେନା", "ଧନୀ ଲୋକ", "ଜନସାଧାରଣ", "ଧାର୍ମିକ ନେତା"], correctAnswer: 2, marks: 1, explanation: "ଗଣତନ୍ତ୍ରରେ ଲୋକମାନେ ଶାସକଙ୍କୁ ଚୟନ କରନ୍ତି।" },
      { quiz: socialQuiz3._id, questionText: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଗଣତନ୍ତ୍ରର ବିଶେଷତା ନୁହେଁ?", options: ["Free elections", "Rule of law", "Military rule", "Fundamental rights"], correctAnswer: 2, marks: 1, explanation: "Military rule ଗଣତନ୍ତ୍ରର ଅଂଶ ନୁହେଁ।" },
      { quiz: socialQuiz3._id, questionText: "ଗଣତନ୍ତ୍ରରେ ଶେଷ ନିଷ୍ପତ୍ତି କାହା ପାଖରେ ଥାଏ?", options: ["ସେନା", "Judiciary", "ନିର୍ବାଚିତ ପ୍ରତିନିଧି", "ରାଜା"], correctAnswer: 2, marks: 1, explanation: "ନିର୍ବାଚିତ ପ୍ରତିନିଧି ଶେଷ ନିଷ୍ପତ୍ତି ନେନ୍ତି।" },
      { quiz: socialQuiz3._id, questionText: "ବିଶ୍ୱର ସର୍ବବୃହତ୍ ଗଣତନ୍ତ୍ର କଣ?", options: ["USA", "UK", "India", "China"], correctAnswer: 2, marks: 1, explanation: "ଭାରତ ବିଶ୍ୱର ସର୍ବବୃହତ୍ ଗଣତନ୍ତ୍ର।" },
      { quiz: socialQuiz3._id, questionText: "'One person, one vote' ର ଅର୍ଥ କଣ?", options: ["କେବଳ ଜଣେ ଭୋଟ୍ ଦେବେ", "ପ୍ରତ୍ୟେକ ଭୋଟର ସମାନ ମୂଲ୍ୟ", "ଜୀବନରେ ଗୋଟିଏଥର ଭୋଟ୍", "କେବଳ ଜଣେ ପ୍ରାର୍ଥୀ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ ଭୋଟର ସମାନ ମୂଲ୍ୟ ରହେ।" },
      { quiz: socialQuiz3._id, questionText: "ନିମ୍ନୋକ୍ତ ମଧ୍ୟରୁ କେଉଁଟି non-democratic country?", options: ["India", "USA", "North Korea", "France"], correctAnswer: 2, marks: 1, explanation: "North Korea ଏକ dictatorship।" },
      { quiz: socialQuiz3._id, questionText: "ଗଣତନ୍ତ୍ରରେ ନାଗରିକମାନେ କଣ କରିପାରନ୍ତି?", options: ["କେବଳ ଆଜ୍ଞା ପାଳନ", "ନିଷ୍ପତ୍ତିରେ ଅଂଶଗ୍ରହଣ", "କେବଳ କର ଦେବା", "କେବଳ କାମ କରିବା"], correctAnswer: 1, marks: 1, explanation: "ନାଗରିକମାନେ ଶାସନରେ ଅଂଶ ନେଇପାରନ୍ତି।" },
      { quiz: socialQuiz3._id, questionText: "'Constitutional democracy' କଣ?", options: ["ସଂବିଧାନ ନଥିବା", "ସଂବିଧାନ ଦ୍ୱାରା ସୀମିତ ସରକାର", "ରାଜା ସଂବିଧାନ ଲେଖେ", "ସେନା ସଂବିଧାନ ଲେଖେ"], correctAnswer: 1, marks: 1, explanation: "ସରକାରର ଶକ୍ତି ସଂବିଧାନ ଦ୍ୱାରା ସୀମିତ ହୁଏ।" },
      { quiz: socialQuiz3._id, questionText: "Free and fair election ର ଅର୍ଥ କଣ?", options: ["କେବଳ ଜଣେ party", "ସମସ୍ତ party ସମାନ ସୁଯୋଗ ପାଏ", "ସରକାର winner ନିର୍ଣ୍ଣୟ କରେ", "Opposition ନଥାଏ"], correctAnswer: 1, marks: 1, explanation: "ସମସ୍ତ party ସମାନ ସୁଯୋଗ ପାଏ।" },
      { quiz: socialQuiz3._id, questionText: "ଗଣତନ୍ତ୍ରର ଏକ ଲାଭ କଣ?", options: ["ଧୀର ନିଷ୍ପତ୍ତି", "ସମାନତା ଏବଂ ମର୍ଯ୍ୟାଦା ବଢ଼ାଏ", "Corruption", "Instability"], correctAnswer: 1, marks: 1, explanation: "ଗଣତନ୍ତ୍ର ସମାନତା ଏବଂ ସ୍ୱାଧୀନତା ବଢ଼ାଏ।" },
    ]);

    console.log("✓ Class 9 - Social Studies: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9SocialStudiesOdia;
