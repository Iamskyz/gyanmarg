import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6SocialStudiesOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Social Studies - Subcategory 1: Our Earth (Odia)
    const socialQuiz1Od = await Quiz.create({
      title: "ଆମର ପୃଥିବୀ - ଗ୍ଲୋବ ଓ ମାନଚିତ୍ର",
      subject: "Social Studies",
      category: "ଭୂଗୋଳ",
      chapter: "ପୃଥିବୀ ଓ ମାନଚିତ୍ର",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: socialQuiz1Od._id,
        questionText: "ପୃଥିବୀର ଆକାର କେମିତି?",
        options: ["ସମତଳ", "ବର୍ଗାକାର", "ଗୋଲାକାର (ଗୋଲକ)", "ତ୍ରିଭୁଜାକାର"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପୃଥିବୀ ଗୋଲାକାର, ଗୋଲକ ବା ବଲ ପରି ଆକାରରେ ଅଛି।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "କେଉଁଟି ସବୁଠାରୁ ବଡ଼ ମହାଦେଶ?",
        options: ["ଆଫ୍ରିକା", "ଏସିଆ", "ୟୁରୋପ", "ଉତ୍ତର ଆମେରିକା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଏସିଆ ହେଉଛି ବିଶ୍ୱର ସବୁଠାରୁ ବଡ଼ ମହାଦେଶ କ୍ଷେତ୍ରଫଳ ଓ ଜନସଂଖ୍ୟା ଦୁଇ ଦିଗରୁ।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "ପୃଥିବୀରେ କେତୋଟି ମହାଦେଶ ଅଛି?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପୃଥିବୀରେ 7ଟି ମହାଦେଶ ଅଛି: ଏସିଆ, ଆଫ୍ରିକା, ଉତ୍ତର ଆମେରିକା, ଦକ୍ଷିଣ ଆମେରିକା, ଆଣ୍ଟାର୍କଟିକା, ୟୁରୋପ ଓ ଅଷ୍ଟ୍ରେଲିଆ।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "କେଉଁ ମହାସାଗର ସବୁଠାରୁ ବଡ଼?",
        options: ["ଆଟଲାଣ୍ଟିକ ମହାସାଗର", "ଭାରତ ମହାସାଗର", "ପ୍ରଶାନ୍ତ ମହାସାଗର", "ଆର୍କଟିକ ମହାସାଗର"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପ୍ରଶାନ୍ତ ମହାସାଗର ସବୁଠାରୁ ବଡ଼ ମହାସାଗର ଯାହା ପୃଥିବୀର ଏକ ତୃତୀୟାଂଶ ଆବୃତ କରିଛି।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "ଗ୍ଲୋବ କଣ?",
        options: ["ଏକ ସମତଳ ମାନଚିତ୍ର", "ପୃଥିବୀର ଗୋଲାକାର ମଡେଲ", "ଏକ ଚିତ୍ର", "ଏକ ବହି"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଗ୍ଲୋବ ହେଉଛି ପୃଥିବୀର ଗୋଲାକାର ମଡେଲ ଯାହା ଏହାର ପ୍ରକୃତ ଆକାର ଦେଖାଏ।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "ସୂର୍ଯ୍ୟ କେଉଁ ଦିଗରେ ଉଦୟ ହୁଏ?",
        options: ["ଉତ୍ତର", "ଦକ୍ଷିଣ", "ପୂର୍ବ", "ପଶ୍ଚିମ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସୂର୍ଯ୍ୟ ପ୍ରତିଦିନ ସକାଳେ ପୂର୍ବ ଦିଗରେ ଉଦୟ ହୁଏ।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "ଚାରିଟି ମୁଖ୍ୟ ଦିଗକୁ କଣ କୁହାଯାଏ?",
        options: ["ମୌଳିକ ଦିଗ", "ପ୍ରାଥମିକ ଦିଗ", "ମୁଖ୍ୟ ଦିଗ", "ମୂଳ ଦିଗ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ଉତ୍ତର, ଦକ୍ଷିଣ, ପୂର୍ବ ଓ ପଶ୍ଚିମକୁ ମୌଳିକ ଦିଗ କୁହାଯାଏ।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "କେଉଁ ମହାଦେଶକୁ 'ଅନ୍ଧକାର ମହାଦେଶ' କୁହାଯାଏ?",
        options: ["ଏସିଆ", "ଆଫ୍ରିକା", "ୟୁରୋପ", "ଅଷ୍ଟ୍ରେଲିଆ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଆଫ୍ରିକାକୁ ଐତିହାସିକ ଭାବରେ 'ଅନ୍ଧକାର ମହାଦେଶ' କୁହାଯାଉଥିଲା କାରଣ ଏହା ଅନୁସନ୍ଧାନ ହୋଇନଥିଲା।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "ପୃଥିବୀକୁ ଉତ୍ତର ଓ ଦକ୍ଷିଣ ଗୋଲାର୍ଦ୍ଧରେ ବିଭାଗ କରୁଥିବା କାଳ୍ପନିକ ରେଖା କଣ?",
        options: ["ମୂଳ ମଧ୍ୟରେଖା", "ବିଷୁବ ରେଖା", "କର୍କଟ କ୍ରାନ୍ତି ରେଖା", "ମକର କ୍ରାନ୍ତି ରେଖା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବିଷୁବ ରେଖା ହେଉଛି କାଳ୍ପନିକ ରେଖା ଯାହା ପୃଥିବୀକୁ ଉତ୍ତର ଓ ଦକ୍ଷିଣ ଗୋଲାର୍ଦ୍ଧରେ ବିଭାଗ କରେ।",
      },
      {
        quiz: socialQuiz1Od._id,
        questionText: "କେଉଁଟି ସବୁଠାରୁ ଛୋଟ ମହାଦେଶ?",
        options: ["ୟୁରୋପ", "ଆଣ୍ଟାର୍କଟିକା", "ଅଷ୍ଟ୍ରେଲିଆ", "ଦକ୍ଷିଣ ଆମେରିକା"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଅଷ୍ଟ୍ରେଲିଆ ହେଉଛି ବିଶ୍ୱର ସବୁଠାରୁ ଛୋଟ ମହାଦେଶ।",
      },
    ]);

    // Social Studies - Subcategory 2: Early Humans (Odia)
    const socialQuiz2Od = await Quiz.create({
      title: "ପ୍ରାଚୀନ ମଣିଷ ଓ ପ୍ରସ୍ତର ଯୁଗ",
      subject: "Social Studies",
      category: "ଇତିହାସ",
      chapter: "ପ୍ରାଗୈତିହାସିକ କାଳ",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନେ ପ୍ରଥମେ କଣରୁ ଉପକରଣ ତିଆରି କରିଥିଲେ?",
        options: ["ଲୁହା ଉପକରଣ", "ପିତ୍ତଳ ଉପକରଣ", "ପଥର ଉପକରଣ", "କାଠ ଉପକରଣ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପ୍ରାଚୀନ ମଣିଷମାନେ ପ୍ରଥମେ ପଥରରୁ ଉପକରଣ ତିଆରି କରିଥିଲେ, ଯେଉଁଥିପାଇଁ ଏହାକୁ ପ୍ରସ୍ତର ଯୁଗ କୁହାଯାଏ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନେ କିପରି ଖାଦ୍ୟ ପାଇଥିଲେ?",
        options: ["ଚାଷବାସ", "ଶିକାର ଓ ସଂଗ୍ରହ", "ବ୍ୟବସାୟ", "ବଜାରରୁ କିଣିବା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରାଚୀନ ମଣିଷମାନେ ପଶୁ ଶିକାର କରି ଓ ଫଳମୂଳ, ମୂଳ, ବିହନ ସଂଗ୍ରହ କରି ଖାଦ୍ୟ ପାଇଥିଲେ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନେ କେଉଁଠାରେ ବାସ କରୁଥିଲେ?",
        options: ["ଘର", "ଗୁମ୍ଫା", "ରାଜପ୍ରାସାଦ", "ଆପାର୍ଟମେଣ୍ଟ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରାଚୀନ ମଣିଷମାନେ ଗୁମ୍ଫାରେ ବାସ କରୁଥିଲେ ପାଗ ଓ ବନ୍ୟ ପଶୁମାନଙ୍କଠାରୁ ସୁରକ୍ଷା ପାଇଁ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନଙ୍କର ସବୁଠାରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଆବିଷ୍କାର କଣ ଥିଲା?",
        options: ["ଚକ", "ଅଗ୍ନି", "ଲେଖା", "ଧାତୁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଅଗ୍ନି ଥିଲା ସବୁଠାରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଆବିଷ୍କାର କାରଣ ଏହା ରାନ୍ଧିବା, ଗରମ ରଖିବା ଓ ସୁରକ୍ଷା ପାଇଁ ସାହାଯ୍ୟ କରୁଥିଲା।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରସ୍ତର ଯୁଗ କେତୋଟି ଭାଗରେ ବିଭକ୍ତ?",
        options: ["ଦୁଇ ଭାଗ", "ତିନି ଭାଗ", "ଚାରି ଭାଗ", "ପାଞ୍ଚ ଭାଗ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରସ୍ତର ଯୁଗ ତିନି ଭାଗରେ ବିଭକ୍ତ: ପୁରାପ୍ରସ୍ତର, ମଧ୍ୟପ୍ରସ୍ତର ଓ ନବପ୍ରସ୍ତର ଯୁଗ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନେ ପଶୁଚର୍ମ କଣ ପାଇଁ ବ୍ୟବହାର କରୁଥିଲେ?",
        options: ["ଖାଦ୍ୟ", "ପୋଷାକ", "ଉପକରଣ", "ସଜାଣି"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରାଚୀନ ମଣିଷମାନେ ପଶୁଚର୍ମ ପୋଷାକ ତିଆରି କରିବା ପାଇଁ ବ୍ୟବହାର କରୁଥିଲେ ଶୀତରୁ ରକ୍ଷା ପାଇଁ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନେ କେବେ ଚାଷବାସ ଆରମ୍ଭ କରିଥିଲେ?",
        options: ["ପୁରାପ୍ରସ୍ତର ଯୁଗ", "ମଧ୍ୟପ୍ରସ୍ତର ଯୁଗ", "ନବପ୍ରସ୍ତର ଯୁଗ", "ଲୌହ ଯୁଗ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପ୍ରାଚୀନ ମଣିଷମାନେ ନବପ୍ରସ୍ତର ଯୁଗ (ନୂତନ ପ୍ରସ୍ତର ଯୁଗ)ରେ ଚାଷବାସ ଆରମ୍ଭ କରିଥିଲେ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ମଣିଷ ଦ୍ୱାରା ପ୍ରଥମେ ପାଳିତ ପଶୁ କେଉଁଟି?",
        options: ["ଗାଈ", "ଘୋଡ଼ା", "କୁକୁର", "ବିଲେଇ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "କୁକୁର ଥିଲା ମଣିଷ ଦ୍ୱାରା ପ୍ରଥମେ ପାଳିତ ପଶୁମାନଙ୍କ ମଧ୍ୟରୁ ଗୋଟିଏ ଶିକାର ଓ ସୁରକ୍ଷା ପାଇଁ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନେ ଗୁମ୍ଫା କାନ୍ଥରେ କଣ ଆଙ୍କୁଥିଲେ?",
        options: ["ଅକ୍ଷର", "ସଂଖ୍ୟା", "ପଶୁମାନଙ୍କର ଚିତ୍ର", "ମାନଚିତ୍ର"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପ୍ରାଚୀନ ମଣିଷମାନେ ଗୁମ୍ଫା କାନ୍ଥରେ ପଶୁମାନଙ୍କର ଚିତ୍ର ଓ ଶିକାର ଦୃଶ୍ୟ ଆଙ୍କୁଥିଲେ।",
      },
      {
        quiz: socialQuiz2Od._id,
        questionText: "ପ୍ରାଚୀନ ମଣିଷମାନେ କାହିଁକି ଏକ ସ୍ଥାନରୁ ଅନ୍ୟ ସ୍ଥାନକୁ ଯାଉଥିଲେ?",
        options: ["ମଜା ପାଇଁ", "ଖାଦ୍ୟ ଖୋଜିବା ପାଇଁ", "ବନ୍ଧୁଙ୍କୁ ଭେଟିବା ପାଇଁ", "ନୂତନ ସ୍ଥାନ ଦେଖିବା ପାଇଁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରାଚୀନ ମଣିଷମାନେ ଯାଯାବର ଥିଲେ ଯେଉଁମାନେ ଖାଦ୍ୟ ଖୋଜିବା ପାଇଁ ଏକ ସ୍ଥାନରୁ ଅନ୍ୟ ସ୍ଥାନକୁ ଯାଉଥିଲେ।",
      },
    ]);

    // Social Studies - Subcategory 3: Our Government (Odia)
    const socialQuiz3Od = await Quiz.create({
      title: "ସରକାର ଓ ଗଣତନ୍ତ୍ର ବୁଝିବା",
      subject: "Social Studies",
      category: "ନାଗରିକ ଶାସ୍ତ୍ର",
      chapter: "ସରକାର ଓ ଗଣତନ୍ତ୍ର",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଗଣତନ୍ତ୍ର କଣ?",
        options: ["ଜଣେ ବ୍ୟକ୍ତିଙ୍କ ଶାସନ", "ଲୋକମାନଙ୍କ ଶାସନ", "ଧନୀମାନଙ୍କ ଶାସନ", "ସେନାର ଶାସନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଗଣତନ୍ତ୍ର ଅର୍ଥ ହେଉଛି ଲୋକମାନଙ୍କ ଶାସନ, ଯେଉଁଠାରେ ଲୋକମାନେ ଭୋଟ ଦେଇ ନିଜର ନେତା ବାଛନ୍ତି।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଭାରତୀୟ ସରକାରର ମୁଖ୍ୟ କିଏ?",
        options: ["ରାଷ୍ଟ୍ରପତି", "ପ୍ରଧାନମନ୍ତ୍ରୀ", "ମୁଖ୍ୟ ବିଚାରପତି", "ରାଜ୍ୟପାଳ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରଧାନମନ୍ତ୍ରୀ ହେଉଛନ୍ତି ଭାରତୀୟ ସରକାରର ମୁଖ୍ୟ ଏବଂ ଦେଶର ନେତୃତ୍ୱ ଦିଅନ୍ତି।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଭାରତରେ କେତେ ବୟସରେ ଜଣେ ବ୍ୟକ୍ତି ଭୋଟ ଦେଇପାରିବେ?",
        options: ["16 ବର୍ଷ", "17 ବର୍ଷ", "18 ବର୍ଷ", "21 ବର୍ଷ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଭାରତରେ ଜଣେ ବ୍ୟକ୍ତି 18 ବର୍ଷ ବୟସ ହେଲେ ଭୋଟ ଦେଇପାରିବେ।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଭାରତର ସଂସଦକୁ କଣ କୁହାଯାଏ?",
        options: ["କେବଳ ଲୋକସଭା", "କେବଳ ରାଜ୍ୟସଭା", "ଲୋକସଭା ଓ ରାଜ୍ୟସଭା ଦୁଇଟି", "ସର୍ବୋଚ୍ଚ ନ୍ୟାୟାଳୟ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଭାରତୀୟ ସଂସଦ ଦୁଇଟି ଗୃହକୁ ନେଇ ଗଠିତ: ଲୋକସଭା (ନିମ୍ନ ଗୃହ) ଓ ରାଜ୍ୟସଭା (ଉଚ୍ଚ ଗୃହ)।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଆମ ଦେଶରେ କିଏ ନିୟମ ତିଆରି କରନ୍ତି?",
        options: ["ପ୍ରଧାନମନ୍ତ୍ରୀ", "ରାଷ୍ଟ୍ରପତି", "ସଂସଦ", "ପୋଲିସ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସଂସଦ ଆମ ଦେଶ ପାଇଁ ଆଲୋଚନା ଓ ଭୋଟ ଦେଇ ନିୟମ ତିଆରି କରନ୍ତି।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଭାରତର ସର୍ବୋଚ୍ଚ ନ୍ୟାୟାଳୟକୁ କଣ କୁହାଯାଏ?",
        options: ["ଉଚ୍ଚ ନ୍ୟାୟାଳୟ", "ଜିଲ୍ଲା ନ୍ୟାୟାଳୟ", "ସର୍ବୋଚ୍ଚ ନ୍ୟାୟାଳୟ", "ପାରିବାରିକ ନ୍ୟାୟାଳୟ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସର୍ବୋଚ୍ଚ ନ୍ୟାୟାଳୟ ହେଉଛି ଭାରତର ସର୍ବୋଚ୍ଚ ନ୍ୟାୟାଳୟ।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଭାରତରେ କେତେ ବର୍ଷରେ ଥରେ ସାଧାରଣ ନିର୍ବାଚନ ହୁଏ?",
        options: ["ପ୍ରତି 3 ବର୍ଷରେ", "ପ୍ରତି 4 ବର୍ଷରେ", "ପ୍ରତି 5 ବର୍ଷରେ", "ପ୍ରତି 6 ବର୍ଷରେ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଭାରତରେ ସାଧାରଣ ନିର୍ବାଚନ ପ୍ରତି 5 ବର୍ଷରେ ଥରେ ହୁଏ ନୂତନ ପ୍ରତିନିଧି ବାଛିବା ପାଇଁ।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଭାରତର ରାଜଧାନୀ କଣ?",
        options: ["ମୁମ୍ବାଇ", "କୋଲକାତା", "ନୂଆଦିଲ୍ଲୀ", "ଚେନ୍ନାଇ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ନୂଆଦିଲ୍ଲୀ ହେଉଛି ଭାରତର ରାଜଧାନୀ ଯେଉଁଠାରେ କେନ୍ଦ୍ର ସରକାର କାମ କରନ୍ତି।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "ଭାରତରେ ରାଜ୍ୟର ମୁଖ୍ୟ କିଏ?",
        options: ["ମୁଖ୍ୟମନ୍ତ୍ରୀ", "ରାଜ୍ୟପାଳ", "ମେୟର", "କଲେକ୍ଟର"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ରାଜ୍ୟପାଳ ହେଉଛନ୍ତି ଭାରତରେ ରାଜ୍ୟର ମୁଖ୍ୟ, ରାଷ୍ଟ୍ରପତିଙ୍କ ଦ୍ୱାରା ନିଯୁକ୍ତ।",
      },
      {
        quiz: socialQuiz3Od._id,
        questionText: "'ଗଣରାଜ୍ୟ'ର ଅର୍ଥ କଣ?",
        options: ["ରାଜାଙ୍କ ଶାସନ", "ନିର୍ବାଚିତ ପ୍ରତିନିଧିମାନଙ୍କ ଶାସନ", "ସେନାର ଶାସନ", "ଧନୀମାନଙ୍କ ଶାସନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଗଣରାଜ୍ୟର ଅର୍ଥ ହେଉଛି ଦେଶ ନିର୍ବାଚିତ ପ୍ରତିନିଧିମାନଙ୍କ ଦ୍ୱାରା ଶାସିତ, ରାଜା ବା ରାଣୀଙ୍କ ଦ୍ୱାରା ନୁହେଁ।",
      },
    ]);

    console.log("✓ Class 6 - Social Studies (Odia): 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6SocialStudiesOdia;
