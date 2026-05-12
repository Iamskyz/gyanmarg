import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsGeographyOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ମାନବ ଭୂଗୋଳ - ଜନସଂଖ୍ୟା ଏବଂ ବସୋବାସ",
      subject: "Geography",
      category: "Human Geography",
      chapter: "ଜନସଂଖ୍ୟା ଏବଂ ବସୋବାସ",
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
      { quiz: quiz1._id, questionText: "Demographic Transition Model ରେ କେତେଟି ଅବସ୍ଥା ଅଛି?", options: ["3", "4", "5", "6"], correctAnswer: 2, marks: 1, explanation: "DTM ରେ ଉଚ୍ଚ ଜନ୍ମ/ମୃତ୍ୟୁ ହାରରୁ କମୁଥିବା ଜନସଂଖ୍ୟା ପର୍ଯ୍ୟନ୍ତ 5ଟି ଅବସ୍ଥା ଅଛି।" },
      { quiz: quiz1._id, questionText: "ଭାରତର ବର୍ତ୍ତମାନ ଜନସଂଖ୍ୟା ବୃଦ୍ଧି ଅବସ୍ଥା କ’ଣ?", options: ["High stationary", "Early expanding", "Late expanding", "Low stationary"], correctAnswer: 2, marks: 1, explanation: "ଭାରତ late expanding phase ରେ ଅଛି ଯେଉଁଠାରେ ଜନ୍ମହାର କମୁଛି।" },
      { quiz: quiz1._id, questionText: "Migration ର push factors କ’ଣ?", options: ["ଭଲ ଚାକିରି", "ବେକାରି ଏବଂ ଦରିଦ୍ରତା", "ଭଲ ଶିକ୍ଷା", "ସ୍ୱାସ୍ଥ୍ୟ ସେବା"], correctAnswer: 1, marks: 1, explanation: "Push factors ଲୋକମାନଙ୍କୁ ନିଜ ଅଞ୍ଚଳ ଛାଡ଼ିବାକୁ ବାଧ୍ୟ କରେ।" },
      { quiz: quiz1._id, questionText: "ବିକାଶଶୀଳ ଦେଶରେ urbanization କ’ଣ ସୃଷ୍ଟି କରେ?", options: ["କେବଳ ଲାଭ", "Slums ଏବଂ infrastructure ଉପରେ ଚାପ", "ଜନସଂଖ୍ୟା କମିଯିବା", "Migration ନଥିବା"], correctAnswer: 1, marks: 1, explanation: "ତୀବ୍ର urbanization ରେ ଘରବାଡ଼ି ଏବଂ ସେବା ସମସ୍ୟା ସୃଷ୍ଟି ହୁଏ।" },
      { quiz: quiz1._id, questionText: "'Optimum population' ର ଅର୍ଥ କ’ଣ?", options: ["ସର୍ବାଧିକ ଜନସଂଖ୍ୟା", "ସମ୍ପଦ ସହ ସମତୁଳିତ ଜନସଂଖ୍ୟା", "ସର୍ବନିମ୍ନ ଜନସଂଖ୍ୟା", "Zero growth"], correctAnswer: 1, marks: 1, explanation: "Optimum population ରେ ସମ୍ପଦର ସର୍ବୋତ୍ତମ ବ୍ୟବହାର ହୁଏ।" },
      { quiz: quiz1._id, questionText: "Rural settlement patterns ମଧ୍ୟରେ କ’ଣ ଅଛି?", options: ["କେବଳ linear", "Linear, clustered, dispersed", "କେବଳ clustered", "କେବଳ dispersed"], correctAnswer: 1, marks: 1, explanation: "Settlement pattern ଭୂପୃଷ୍ଠ, ପାଣି ଏବଂ ସାମାଜିକ କାରକ ଉପରେ ନିର୍ଭର କରେ।" },
      { quiz: quiz1._id, questionText: "Human Development Index କ’ଣ ଉପରେ ଆଧାରିତ?", options: ["କେବଳ ଆୟ", "ସ୍ୱାସ୍ଥ୍ୟ, ଶିକ୍ଷା ଏବଂ ଆୟ", "କେବଳ ସାକ୍ଷରତା", "କେବଳ life expectancy"], correctAnswer: 1, marks: 1, explanation: "HDI ରେ life expectancy, education ଏବଂ per capita income ଅନ୍ତର୍ଭୁକ୍ତ।" },
      { quiz: quiz1._id, questionText: "Neo-Malthusian theory କ’ଣ କୁହେ?", options: ["ଜନସଂଖ୍ୟା ସମସ୍ୟା ନୁହେଁ", "ଜନସଂଖ୍ୟା ବୃଦ୍ଧି ସମ୍ପଦକୁ ଅତିକ୍ରମ କରିବ", "Technology ସବୁ ସମାଧାନ କରେ", "ବୃଦ୍ଧିର କୌଣସି ସୀମା ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ସେମାନେ ବିଶ୍ୱାସ କରନ୍ତି ଅତ୍ୟଧିକ ଜନସଂଖ୍ୟା ପରିବେଶ ନଷ୍ଟ କରେ।" },
      { quiz: quiz1._id, questionText: "ଭାରତର age-sex pyramid କ’ଣ ପ୍ରକାରର?", options: ["Contracting", "Expanding", "Stationary", "Inverted"], correctAnswer: 1, marks: 1, explanation: "ଭାରତର broad base ଯୁବ ଜନସଂଖ୍ୟାକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz1._id, questionText: "ଭାରତରେ Census କେତେ ବର୍ଷ ପରେ ପରେ ହୁଏ?", options: ["5 ବର୍ଷ", "10 ବର୍ଷ", "15 ବର୍ଷ", "20 ବର୍ଷ"], correctAnswer: 1, marks: 1, explanation: "1872 ଠାରୁ ପ୍ରତି 10 ବର୍ଷରେ census ହୁଏ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ସମ୍ପଦ ଏବଂ ବିକାଶ",
      subject: "Geography",
      category: "Economic Geography",
      chapter: "Primary and Secondary Activities",
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
      { quiz: quiz2._id, questionText: "Subsistence agriculture ର ବିଶେଷତା କ’ଣ?", options: ["Export oriented", "ନିଜସ୍ୱ ଉପଭୋଗ ପାଇଁ କମ technology ସହ", "High mechanization", "Monoculture"], correctAnswer: 1, marks: 1, explanation: "ଚାଷୀମାନେ ପ୍ରାୟତଃ ପରିବାର ପାଇଁ ଖାଦ୍ୟ ଚାଷ କରନ୍ତି।" },
      { quiz: quiz2._id, questionText: "କେଉଁ revolution ଖାଦ୍ୟ ଶସ୍ୟ ଉତ୍ପାଦନ ସହ ସମ୍ପର୍କିତ?", options: ["White Revolution", "Green Revolution", "Blue Revolution", "Golden Revolution"], correctAnswer: 1, marks: 1, explanation: "1960 ଦଶକରେ Green Revolution ରେ ଗହମ ଏବଂ ଧାନ ଉତ୍ପାଦନ ବଢ଼ିଥିଲା।" },
      { quiz: quiz2._id, questionText: "Tertiary sector ରେ କ’ଣ ଥାଏ?", options: ["Mining", "Manufacturing", "Banking ଏବଂ transport ପରି services", "Agriculture"], correctAnswer: 2, marks: 1, explanation: "Tertiary sector ପଣ୍ୟ ନୁହେଁ ସେବା ଦେଇଥାଏ।" },
      { quiz: quiz2._id, questionText: "Quaternary activities କ’ଣ ସହ ସମ୍ପର୍କିତ?", options: ["Farming", "Manufacturing", "Knowledge-based services", "Mining"], correctAnswer: 2, marks: 1, explanation: "Research, IT ଏବଂ consultancy quaternary activities ଅଟେ।" },
      { quiz: quiz2._id, questionText: "Von Thunen's model କ’ଣ ବ୍ୟାଖ୍ୟା କରେ?", options: ["Industrial location", "Market ଚାରିପାଖରେ agricultural land use", "Urban growth", "Population distribution"], correctAnswer: 1, marks: 1, explanation: "Central market ଚାରିପାଖରେ concentric agricultural rings।" },
      { quiz: quiz2._id, questionText: "Weber's theory କାହା ସହ ସମ୍ପର୍କିତ?", options: ["Agriculture", "Industrial location", "Population", "Trade"], correctAnswer: 1, marks: 1, explanation: "Weber's least cost theory factory location ବ୍ୟାଖ୍ୟା କରେ।" },
      { quiz: quiz2._id, questionText: "Footloose industries କ’ଣ?", options: ["Heavy industries", "ନିର୍ଦ୍ଦିଷ୍ଟ raw material location ସହ ବାନ୍ଧା ନୁହେଁ", "Mining industries", "Agricultural industries"], correctAnswer: 1, marks: 1, explanation: "IT ଏବଂ electronics connectivity ଥିଲେ କେଉଁଠି ମଧ୍ୟ ହୋଇପାରେ।" },
      { quiz: quiz2._id, questionText: "Plantation agriculture ର ବିଶେଷତା କ’ଣ?", options: ["Subsistence farming", "ବଡ଼ ପରିମାଣରେ single crop commercial farming", "Mixed farming", "Nomadic herding"], correctAnswer: 1, marks: 1, explanation: "Tea, coffee, rubber plantation crops ଅଟେ।" },
      { quiz: quiz2._id, questionText: "କେଉଁଟି non-renewable resource?", options: ["Solar energy", "Petroleum", "Wind energy", "Tidal energy"], correctAnswer: 1, marks: 1, explanation: "Fossil fuels ଗଠନ ହେବାକୁ ଲକ୍ଷାଧିକ ବର୍ଷ ଲାଗେ।" },
      { quiz: quiz2._id, questionText: "Sustainable development ର ଅର୍ଥ କ’ଣ?", options: ["ସର୍ବାଧିକ ଶୋଷଣ", "ଭବିଷ୍ୟତକୁ କ୍ଷତି ନକରି ବର୍ତ୍ତମାନର ଆବଶ୍ୟକତା ପୂରଣ", "କୌଣସି ବିକାଶ ନୁହେଁ", "କେବଳ ଆର୍ଥିକ ବୃଦ୍ଧି"], correctAnswer: 1, marks: 1, explanation: "1987 ରେ Brundtland Commission ଏହାକୁ ପରିଭାଷିତ କରିଥିଲା।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ପରିବହନ, ସଂଯୋଗ ଏବଂ ବ୍ୟାପାର",
      subject: "Geography",
      category: "Economic Geography",
      chapter: "Transport and International Trade",
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
      { quiz: quiz3._id, questionText: "Trans-Siberian Railway କେଉଁଠାରୁ କେଉଁଠାକୁ ଯୋଡ଼େ?", options: ["London to Paris", "St. Petersburg to Vladivostok", "Beijing to Moscow", "Tokyo to Seoul"], correctAnswer: 1, marks: 1, explanation: "ଏହା ରୁଷିଆର ସବୁଠାରୁ ଲମ୍ବା railway line।" },
      { quiz: quiz3._id, questionText: "Suez Canal କେଉଁ ଦୁଇଟି ସମୁଦ୍ରକୁ ଯୋଡ଼େ?", options: ["Red Sea and Black Sea", "Mediterranean Sea and Red Sea", "Arabian Sea and Red Sea", "Caspian and Black Sea"], correctAnswer: 1, marks: 1, explanation: "ଏହା Europe-Asia sea route କୁ ଛୋଟ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "Panama Canal କ’ଣକୁ ଯୋଡ଼େ?", options: ["Atlantic and Indian Ocean", "Atlantic and Pacific Ocean", "Pacific and Arctic Ocean", "Indian and Pacific Ocean"], correctAnswer: 1, marks: 1, explanation: "ଏହା Central America କୁ କାଟି ଦୁଇ ସମୁଦ୍ରକୁ ଯୋଡ଼େ।" },
      { quiz: quiz3._id, questionText: "Hinterland ର ଅର୍ଥ କ’ଣ?", options: ["Coastal area", "Port କିମ୍ବା city ଦ୍ୱାରା ସେବିତ ଅଞ୍ଚଳ", "Desert region", "Mountain region"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଭିତର ଅଞ୍ଚଳ ଯାହା port କୁ ପଣ୍ୟ ପଠାଏ ଏବଂ ଗ୍ରହଣ କରେ।" },
      { quiz: quiz3._id, questionText: "ସବୁଠାରୁ ଘନ railway network କେଉଁ ଦେଶରେ?", options: ["India", "USA", "Belgium", "China"], correctAnswer: 2, marks: 1, explanation: "Belgium ର railway density ବହୁତ ଅଧିକ।" },
      { quiz: quiz3._id, questionText: "Cyber space କ’ଣକୁ ସୂଚାଏ?", options: ["Outer space", "Electronic digital communication ର ଜଗତ", "Underground cables", "Satellite only"], correctAnswer: 1, marks: 1, explanation: "Internet ଆଧାରିତ virtual communication world।" },
      { quiz: quiz3._id, questionText: "WTO କେଉଁ ବର୍ଷରେ ସ୍ଥାପିତ ହୋଇଥିଲା?", options: ["1990", "1993", "1995", "1997"], correctAnswer: 2, marks: 1, explanation: "1995 ରେ WTO GATT କୁ ପରିବର୍ତ୍ତନ କରିଥିଲା।" },
      { quiz: quiz3._id, questionText: "Entrepot trade ର ଅର୍ଥ କ’ଣ?", options: ["Direct export", "ଆମଦାନି ହୋଇଥିବା ପଣ୍ୟର ପୁନଃରପ୍ତାନି", "Domestic trade", "Barter trade"], correctAnswer: 1, marks: 1, explanation: "ଯଥା Singapore ଏବଂ Hong Kong ରେ ଏହା ଦେଖାଯାଏ।" },
      { quiz: quiz3._id, questionText: "Big Inch pipeline କ’ଣ ପରିବହନ କରେ?", options: ["Water", "Natural gas", "Petroleum", "Chemicals"], correctAnswer: 2, marks: 1, explanation: "ଏହା USA ରେ petroleum ପରିବହନ କରେ।" },
      { quiz: quiz3._id, questionText: "Balance of trade କ’ଣ?", options: ["Total imports", "Exports ଏବଂ imports ମଧ୍ୟର ତଫାତ", "Total exports", "GDP"], correctAnswer: 1, marks: 1, explanation: "Positive balance ର ଅର୍ଥ exports imports ଠାରୁ ଅଧିକ।" },
    ]);

    console.log("✓ Class 12 Arts - Geography Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsGeographyOdia };
