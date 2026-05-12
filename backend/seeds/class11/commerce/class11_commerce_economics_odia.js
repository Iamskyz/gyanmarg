import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceEconomicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୁକ୍ତ");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Micro Economics - Demand and Supply
    const ecoQuiz1 = await Quiz.create({
      title: "ସୂକ୍ଷ୍ମ ଅର୍ଥନୀତି - ଚାହିଦା ଏବଂ ଯୋଗାଣ",
      subject: "Economics",
      category: "Micro Economics",
      chapter: "ଚାହିଦା ଏବଂ ଯୋଗାଣ",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: ecoQuiz1._id, questionText: "Law of Demand କଣ କୁହେ?", options: ["Price ବଢିଲେ demand ବଢେ", "Price ବଢିଲେ demand କମେ", "Price କମିଲେ demand କମେ", "Price ଏବଂ demand ର ସମ୍ପର୍କ ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Law of Demand ଅନୁଯାୟୀ ମୂଲ୍ୟ ଏବଂ ଚାହିଦା ବିପରୀତ ସମ୍ପର୍କିତ।" },
      { quiz: ecoQuiz1._id, questionText: "'Elasticity of demand' କଣ?", options: ["Supply ର ପରିବର୍ତ୍ତନ", "ମୂଲ୍ୟ ପରିବର୍ତ୍ତନରେ ଚାହିଦାର ପ୍ରତିକ୍ରିୟା", "Total revenue", "Fixed demand"], correctAnswer: 1, marks: 1, explanation: "Elasticity ମୂଲ୍ୟ ପରିବର୍ତ୍ତନରେ ଚାହିଦା କେତେ ବଦଳେ ତାହା ମାପେ।" },
      { quiz: ecoQuiz1._id, questionText: "Price ବଦଳିଲେ ମଧ୍ୟ demand ନ ବଦଳିଲେ ତାହା କଣ?", options: ["Elastic demand", "Perfectly inelastic demand", "Unitary elastic", "Highly elastic"], correctAnswer: 1, marks: 1, explanation: "Perfectly inelastic demand ରେ quantity ପରିବର୍ତ୍ତନ ହୁଏ ନାହିଁ।" },
      { quiz: ecoQuiz1._id, questionText: "Demand curve ର shift କାହାରୁ ହୁଏ?", options: ["Price ପରିବର୍ତ୍ତନ", "Income, taste ଇତ୍ୟାଦି ପରିବର୍ତ୍ତନ", "Curve ଉପରେ movement", "Supply ପରିବର୍ତ୍ତନ"], correctAnswer: 1, marks: 1, explanation: "Non-price factors ସମଗ୍ର demand curve କୁ shift କରେ।" },
      { quiz: ecoQuiz1._id, questionText: "Law of Supply କଣ କୁହେ?", options: ["Price ବଢିଲେ supply କମେ", "Price ବଢିଲେ supply ବଢେ", "କୌଣସି ସମ୍ପର୍କ ନାହିଁ", "Supply ସଦା ସ୍ଥିର"], correctAnswer: 1, marks: 1, explanation: "Law of Supply ଅନୁଯାୟୀ ମୂଲ୍ୟ ଏବଂ ଯୋଗାଣ ସିଧାସଳଖ ସମ୍ପର୍କିତ।" },
      { quiz: ecoQuiz1._id, questionText: "Market equilibrium କେବେ ହୁଏ?", options: ["Demand > Supply", "Supply > Demand", "Demand = Supply", "Price = 0"], correctAnswer: 2, marks: 1, explanation: "Demand ଏବଂ Supply curve ଯେଉଁଠାରେ ମିଳେ ସେଠି equilibrium ହୁଏ।" },
      { quiz: ecoQuiz1._id, questionText: "'Substitute goods' କଣ?", options: ["ସହିତ ବ୍ୟବହୃତ ପଦାର୍ଥ", "ପରସ୍ପରକୁ ବଦଳାଇପାରୁଥିବା ପଦାର୍ଥ", "Inferior goods", "Luxury goods"], correctAnswer: 1, marks: 1, explanation: "Tea ଏବଂ coffee substitute goods ର ଉଦାହରଣ।" },
      { quiz: ecoQuiz1._id, questionText: "'Complementary goods' କଣ?", options: ["ପରସ୍ପରକୁ ବଦଳାଇଥିବା", "ସହିତ ବ୍ୟବହୃତ ପଦାର୍ଥ", "Luxury goods", "Free goods"], correctAnswer: 1, marks: 1, explanation: "Car ଏବଂ petrol complementary goods।" },
      { quiz: ecoQuiz1._id, questionText: "Consumer surplus କଣ?", options: ["ମୋଟ ଖର୍ଚ୍ଚ", "ଦେବାକୁ ପ୍ରସ୍ତୁତ ମୂଲ୍ୟ ଏବଂ actual price ର ତଫାତ", "Producer profit", "Government revenue"], correctAnswer: 1, marks: 1, explanation: "Consumer surplus = willingness to pay - actual price paid." },
      { quiz: ecoQuiz1._id, questionText: "'Excess demand' କଣ?", options: ["Supply > Demand", "Demand > Supply", "Demand = Supply", "କୌଣସି demand ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Demand ଯେତେବେଳେ supply ଠାରୁ ଅଧିକ ହୁଏ ତାହା excess demand।" },
    ]);

    // Subcategory 2
    const ecoQuiz2 = await Quiz.create({
      title: "ଭାରତୀୟ ଅର୍ଥନୀତି - ବିକାଶ ଏବଂ ପରିକଳ୍ପନା",
      subject: "Economics",
      category: "Indian Economy",
      chapter: "ଭାରତୀୟ ଅର୍ଥନୀତିକ ବିକାଶ",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: ecoQuiz2._id, questionText: "ଭାରତରେ economic planning କେବେ ଆରମ୍ଭ ହେଲା?", options: ["1947", "1950", "1951", "1956"], correctAnswer: 2, marks: 1, explanation: "ପ୍ରଥମ Five Year Plan 1951 ରେ ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: ecoQuiz2._id, questionText: "'Mixed economy' କଣ?", options: ["କେବଳ private sector", "କେବଳ public sector", "Public ଏବଂ private sector ଉଭୟ", "ସରକାରୀ ଭୂମିକା ନାହିଁ"], correctAnswer: 2, marks: 1, explanation: "ଭାରତ mixed economy ଅନୁସରଣ କରେ।" },
      { quiz: ecoQuiz2._id, questionText: "LPG reforms କେବେ ଆରମ୍ଭ ହେଲା?", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "Liberalisation, Privatisation, Globalisation reforms 1991 ରେ ଆରମ୍ଭ।" },
      { quiz: ecoQuiz2._id, questionText: "GDP କଣ?", options: ["Government Domestic Product", "ଏକ ବର୍ଷରେ ଦେଶରେ ଉତ୍ପାଦିତ ସମସ୍ତ goods/services ର ମୋଟ ମୂଲ୍ୟ", "Gross Demand Price", "General Development Plan"], correctAnswer: 1, marks: 1, explanation: "GDP ଦେଶର ଅର୍ଥନୀତିକ ଉତ୍ପାଦନକୁ ମାପେ।" },
      { quiz: ecoQuiz2._id, questionText: "ଭାରତର GDP ରେ ସର୍ବାଧିକ ଅବଦାନ କେଉଁ sector ର?", options: ["Agriculture", "Industry", "Service sector", "Mining"], correctAnswer: 2, marks: 1, explanation: "Service sector ଭାରତର GDP ରେ ସର୍ବାଧିକ ଅବଦାନ ଦେଇଥାଏ।" },
      { quiz: ecoQuiz2._id, questionText: "'Poverty line' କଣ?", options: ["Graph ରେ line", "ମୂଳ ଆବଶ୍ୟକତା ପୂରଣ ପାଇଁ ନ୍ୟୁନତମ ଆୟ", "Tax limit", "Export limit"], correctAnswer: 1, marks: 1, explanation: "Poverty line ମୂଳ ଆବଶ୍ୟକତା ପାଇଁ ଆବଶ୍ୟକ ଆୟକୁ ଦର୍ଶାଏ।" },
      { quiz: ecoQuiz2._id, questionText: "NITI Aayog କେଉଁ body କୁ ପରିବର୍ତ୍ତନ କଲା?", options: ["RBI", "Planning Commission", "Finance Commission", "SEBI"], correctAnswer: 1, marks: 1, explanation: "2015 ରେ NITI Aayog Planning Commission କୁ ପରିବର୍ତ୍ତନ କଲା।" },
      { quiz: ecoQuiz2._id, questionText: "'Inflation' କଣ?", options: ["ମୂଲ୍ୟ କମିବା", "ସାଧାରଣ ମୂଲ୍ୟସ୍ତରର ଲଗାତାର ବୃଦ୍ଧି", "ମୂଲ୍ୟ ସ୍ଥିରତା", "ଉତ୍ପାଦନ ବୃଦ୍ଧି"], correctAnswer: 1, marks: 1, explanation: "Inflation ରେ ସମୟ ସହିତ ମୂଲ୍ୟ ବଢିଥାଏ।" },
      { quiz: ecoQuiz2._id, questionText: "Green Revolution କାହା ସହ ସମ୍ପର୍କିତ?", options: ["Industrial growth", "କୃଷି ଉତ୍ପାଦନ ବୃଦ୍ଧି", "Forest conservation", "IT sector"], correctAnswer: 1, marks: 1, explanation: "HYV seeds ଏବଂ technology ଦ୍ୱାରା food grain production ବଢିଲା।" },
      { quiz: ecoQuiz2._id, questionText: "HDI କଣ?", options: ["କେବଳ income measure", "ସ୍ୱାସ୍ଥ୍ୟ, ଶିକ୍ଷା ଏବଂ ଆୟର composite index", "Population count", "Industrial output"], correctAnswer: 1, marks: 1, explanation: "HDI ରେ life expectancy, education ଏବଂ income ମାପାଯାଏ।" },
    ]);

    // Subcategory 3
    const ecoQuiz3 = await Quiz.create({
      title: "ଅର୍ଥନୀତି ପାଇଁ ସଂଖ୍ୟାତ୍ମକ ତଥ୍ୟ",
      subject: "Economics",
      category: "Statistics",
      chapter: "Statistics for Economics",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: ecoQuiz3._id, questionText: "Economics ରେ statistics କଣ?", options: ["କେବଳ ସଂଖ୍ୟା", "Data ର collection, organisation, analysis ଏବଂ interpretation", "Guessing", "କେବଳ graphs"], correctAnswer: 1, marks: 1, explanation: "Statistics ରେ data କୁ ବ୍ୟବସ୍ଥିତ ଭାବେ ବିଶ୍ଳେଷଣ କରାଯାଏ।" },
      { quiz: ecoQuiz3._id, questionText: "'Arithmetic mean' କଣ?", options: ["Middle value", "Most frequent value", "ସମସ୍ତ value ର ଯୋଗ ÷ value ସଂଖ୍ୟା", "Range"], correctAnswer: 2, marks: 1, explanation: "Mean = sum of observations / number of observations." },
      { quiz: ecoQuiz3._id, questionText: "'Median' କଣ?", options: ["Average value", "କ୍ରମରେ ସଜାଇଥିବା data ର ମଧ୍ୟ value", "Most common value", "Highest value"], correctAnswer: 1, marks: 1, explanation: "Median ହେଉଛି ordered dataset ର middle value।" },
      { quiz: ecoQuiz3._id, questionText: "'Mode' କଣ?", options: ["Average", "Middle value", "ସର୍ବାଧିକ ଥର ଆସୁଥିବା value", "Least value"], correctAnswer: 2, marks: 1, explanation: "Mode ସର୍ବାଧିକ ଥର ଦେଖାଯାଉଥିବା value।" },
      { quiz: ecoQuiz3._id, questionText: "Primary data କଣ?", options: ["Books ର data", "Researcher ଦ୍ୱାରା firsthand collected data", "Published data", "Old data"], correctAnswer: 1, marks: 1, explanation: "Primary data ସିଧାସଳଖ ଭାବେ ସଂଗ୍ରହ କରାଯାଏ।" },
      { quiz: ecoQuiz3._id, questionText: "Secondary data କଣ?", options: ["Firsthand collected", "ଅନ୍ୟ ଦ୍ୱାରା ପୂର୍ବରୁ ସଂଗ୍ରହ କରାଯାଇଥିବା data", "ସଦା ଅବିଶ୍ୱସନୀୟ", "କେବଳ numerical"], correctAnswer: 1, marks: 1, explanation: "Secondary data ପୂର୍ବରୁ ଉପଲବ୍ଧ data।" },
      { quiz: ecoQuiz3._id, questionText: "Bar diagram କେମିତି data ଦେଖାଏ?", options: ["Circles", "ସମାନ width ର rectangular bars", "କେବଳ lines", "Dots"], correctAnswer: 1, marks: 1, explanation: "Bar diagram ରେ bars ର ଲମ୍ବ value ଅନୁପାତରେ ଥାଏ।" },
      { quiz: ecoQuiz3._id, questionText: "'Standard deviation' କଣ?", options: ["Data ର average", "Mean ଠାରୁ data କେତେ spread ହୋଇଛି ତାହାର ମାପ", "Highest value", "Lowest value"], correctAnswer: 1, marks: 1, explanation: "Standard deviation data ର dispersion ମାପେ।" },
      { quiz: ecoQuiz3._id, questionText: "Pie chart କେମିତି data ଦେଖାଏ?", options: ["Bars", "Lines", "ବୃତ୍ତର sectors", "Points"], correctAnswer: 2, marks: 1, explanation: "Pie chart ରେ circle କୁ sectors ରେ ବାଣ୍ଟାଯାଏ।" },
      { quiz: ecoQuiz3._id, questionText: "'Frequency distribution' କଣ?", options: ["Random data", "Values ଏବଂ frequencies ସହିତ organised table", "Single value", "କେବଳ graph"], correctAnswer: 1, marks: 1, explanation: "Frequency distribution ରେ data କୁ classes ଏବଂ frequencies ରେ ସଜାଯାଏ।" },
    ]);

    console.log("✓ Class 11 Commerce - Economics Odia: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceEconomicsOdia;
