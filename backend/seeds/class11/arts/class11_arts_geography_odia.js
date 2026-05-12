import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsGeographyOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଭୌତିକ ଭୂଗୋଳ - ଭୂଆକୃତି ବିଜ୍ଞାନ",
      subject: "Geography",
      category: "Physical Geography",
      chapter: "ଭୂଆକୃତି ବିଜ୍ଞାନ",
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
      { quiz: quiz1._id, questionText: "ପୃଥିବୀର ସବୁଠାରୁ ଭିତର ତରଳକୁ କଣ କୁହାଯାଏ?", options: ["ମ୍ୟାଣ୍ଟଲ", "କୋର", "କ୍ରଷ୍ଟ", "ଆସ୍ଥେନୋସ୍ଫିୟର"], correctAnswer: 1, marks: 1, explanation: "କୋର ପୃଥିବୀର ସବୁଠାରୁ ଭିତର ତରଳ ଅଟେ।" },
      { quiz: quiz1._id, questionText: "Plate tectonics theory କଣ ବ୍ୟାଖ୍ୟା କରେ?", options: ["ପାଣିପାଗ ରୂପରେଖା", "ପୃଥିବୀର lithospheric plate ଗୁଡ଼ିକର ଗତି", "ସମୁଦ୍ର ଧାରା", "ମାଟି ଗଠନ"], correctAnswer: 1, marks: 1, explanation: "ଏହି ସିଦ୍ଧାନ୍ତ plate ଗୁଡ଼ିକର ଗତି ବିଷୟରେ କୁହେ।" },
      { quiz: quiz1._id, questionText: "Richter scale କଣ ମାପେ?", options: ["ପବନ ବେଗ", "ଭୂମିକମ୍ପର ତୀବ୍ରତା", "ତାପମାତ୍ରା", "ବର୍ଷା"], correctAnswer: 1, marks: 1, explanation: "Richter scale ଭୂମିକମ୍ପର ତୀବ୍ରତା ମାପେ।" },
      { quiz: quiz1._id, questionText: "ଯେଉଁ ଅଗ୍ନିପର୍ବତ ଏବେ ସକ୍ରିୟ ନୁହେଁ କିନ୍ତୁ ପୁଣି ବିସ୍ଫୋରଣ ହୋଇପାରେ, ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["ସକ୍ରିୟ", "ସୁପ୍ତ", "ନିର୍ବାପିତ", "ଶିଲ୍ଡ"], correctAnswer: 1, marks: 1, explanation: "ସୁପ୍ତ ଅଗ୍ନିପର୍ବତ ଭବିଷ୍ୟତରେ ପୁଣି ବିସ୍ଫୋରଣ ହୋଇପାରେ।" },
      { quiz: quiz1._id, questionText: "Fold mountain କିପରି ଗଠିତ ହୁଏ?", options: ["ଅଗ୍ନିପର୍ବତ କାର୍ଯ୍ୟ", "tectonic plate ର compression", "କ୍ଷୟ", "ହିମନଦ"], correctAnswer: 1, marks: 1, explanation: "tectonic plate ଧକ୍କା ଖାଇଲେ fold mountain ଗଠିତ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "ହିମାଳୟ କେଉଁ ପ୍ରକାର ପର୍ବତର ଉଦାହରଣ?", options: ["Block mountain", "Fold mountain", "Volcanic mountain", "Residual mountain"], correctAnswer: 1, marks: 1, explanation: "ହିମାଳୟ fold mountain ଅଟେ।" },
      { quiz: quiz1._id, questionText: "Weathering ର ଅର୍ଥ କଣ?", options: ["ଶିଳା ପରିବହନ", "ଶିଳାର ସ୍ଥାନୀୟ ଭାଙ୍ଗିଯିବା", "sediment deposition", "ଅଗ୍ନିପର୍ବତ ବିସ୍ଫୋରଣ"], correctAnswer: 1, marks: 1, explanation: "Weathering ରେ ଶିଳା ନିଜ ସ୍ଥାନରେ ଭାଙ୍ଗିଯାଏ।" },
      { quiz: quiz1._id, questionText: "Oxbow lake କିପରି ଗଠିତ ହୁଏ?", options: ["ଅଗ୍ନିପର୍ବତ କାର୍ଯ୍ୟ", "ନଦୀର meander କଟିଯିବା", "ହିମନଦ କ୍ଷୟ", "ପବନ deposition"], correctAnswer: 1, marks: 1, explanation: "ନଦୀର meander କଟିଯାଇ oxbow lake ଗଠିତ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "Mohorovičić discontinuity କେଉଁ ତରଳକୁ ବିଭକ୍ତ କରେ?", options: ["କୋର ଏବଂ ମ୍ୟାଣ୍ଟଲ", "କ୍ରଷ୍ଟ ଏବଂ ମ୍ୟାଣ୍ଟଲ", "ଭିତର ଏବଂ ବାହାର କୋର", "ଲିଥୋସ୍ଫିୟର ଏବଂ atmosphere"], correctAnswer: 1, marks: 1, explanation: "Moho discontinuity କ୍ରଷ୍ଟ ଏବଂ ମ୍ୟାଣ୍ଟଲ ମଧ୍ୟର ସୀମା।" },
      { quiz: quiz1._id, questionText: "Delta କେଉଁଠି ଗଠିତ ହୁଏ?", options: ["ପର୍ବତ ଶୀର୍ଷ", "ନଦୀ ମୁହାଣାରେ", "ନଦୀ ଉତ୍ସ", "ନଦୀ ମଧ୍ୟଭାଗ"], correctAnswer: 1, marks: 1, explanation: "ନଦୀ ସମୁଦ୍ରକୁ ମିଳୁଥିବା ସ୍ଥାନରେ delta ଗଠିତ ହୁଏ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଜଳବାୟୁ ବିଜ୍ଞାନ ଏବଂ ବାୟୁମଣ୍ଡଳ",
      subject: "Geography",
      category: "Physical Geography",
      chapter: "ଜଳବାୟୁ ବିଜ୍ଞାନ",
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
      { quiz: quiz2._id, questionText: "କେଉଁ ବାୟୁମଣ୍ଡଳୀୟ ତରଳରେ ପାଣିପାଗ ଘଟଣା ଘଟେ?", options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"], correctAnswer: 1, marks: 1, explanation: "Troposphere ରେ ସମସ୍ତ ପାଣିପାଗ ଘଟଣା ଘଟେ।" },
      { quiz: quiz2._id, questionText: "Ozone layer କେଉଁ ତରଳରେ ଅବସ୍ଥିତ?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"], correctAnswer: 1, marks: 1, explanation: "Ozone layer stratosphere ରେ ଥାଏ।" },
      { quiz: quiz2._id, questionText: "Coriolis effect କାହା ଫଳରେ ହୁଏ?", options: ["ଚନ୍ଦ୍ରର ଆକର୍ଷଣ", "ପୃଥିବୀର ଘୂର୍ଣ୍ଣନ", "ସୂର୍ଯ୍ୟର ତାପ", "ସମୁଦ୍ର ଧାରା"], correctAnswer: 1, marks: 1, explanation: "ପୃଥିବୀର ଘୂର୍ଣ୍ଣନ ଫଳରେ Coriolis effect ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Trade winds କେଉଁଠାରୁ ବହେ?", options: ["ଧ୍ରୁବରୁ ଭୂମଧ୍ୟରେ", "Sub-tropical high pressure ଠାରୁ equatorial low pressure", "ଭୂମଧ୍ୟରୁ ଧ୍ରୁବ", "ପଶ୍ଚିମରୁ ପୂର୍ବ"], correctAnswer: 1, marks: 1, explanation: "Trade winds sub-tropical belt ଠାରୁ ବହେ।" },
      { quiz: quiz2._id, questionText: "El Niño କାହା ସହ ସମ୍ପର୍କିତ?", options: ["Pacific Ocean ଠଣ୍ଡାହେବା", "ପୂର୍ବ Pacific Ocean ର ପାଣି ଗରମ ହେବା", "Arctic ବରଫ ଗଳିବା", "ଅଗ୍ନିପର୍ବତ ବିସ୍ଫୋରଣ"], correctAnswer: 1, marks: 1, explanation: "El Niño ପୂର୍ବ Pacific Ocean ର ଉଷ୍ଣତା ବୃଦ୍ଧି ସହ ସମ୍ପର୍କିତ।" },
      { quiz: quiz2._id, questionText: "Monsoon wind କାହିଁକି ହୁଏ?", options: ["କେବଳ ପୃଥିବୀର ଘୂର୍ଣ୍ଣନ", "ଭୂମି ଏବଂ ସମୁଦ୍ରର ଅସମ ଉଷ୍ମା", "ଅଗ୍ନିପର୍ବତ କାର୍ଯ୍ୟ", "କେବଳ ସମୁଦ୍ର ଧାରା"], correctAnswer: 1, marks: 1, explanation: "ଭୂମି ଏବଂ ସମୁଦ୍ରର ତାପ ତଫାତ ଫଳରେ monsoon wind ହୁଏ।" },
      { quiz: quiz2._id, questionText: "ପର୍ବତ ଉପରେ ବାୟୁ ଉଠି ବର୍ଷା ହେଲେ ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["Convectional", "Orographic", "Cyclonic", "Frontal"], correctAnswer: 1, marks: 1, explanation: "ଏହା orographic rainfall ଅଟେ।" },
      { quiz: quiz2._id, questionText: "Greenhouse effect କାହାରୁ ହୁଏ?", options: ["Ozone depletion", "CO2 ପରି ଗ୍ୟାସ ତାପ ଧରି ରଖିବା", "Solar flare", "Volcanic ash"], correctAnswer: 1, marks: 1, explanation: "Greenhouse gas ଗୁଡ଼ିକ ତାପକୁ ଧରି ରଖେ।" },
      { quiz: quiz2._id, questionText: "Jet stream କେଉଁ ତରଳରେ ଥାଏ?", options: ["Lower troposphere", "Upper troposphere/lower stratosphere", "Mesosphere", "Thermosphere"], correctAnswer: 1, marks: 1, explanation: "Jet stream upper troposphere ରେ ଥାଏ।" },
      { quiz: quiz2._id, questionText: "Atmospheric pressure ମାପିବା ଯନ୍ତ୍ର କଣ?", options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], correctAnswer: 1, marks: 1, explanation: "Barometer ବାୟୁଚାପ ମାପେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ମାନବ ଭୂଗୋଳ ଏବଂ ସମ୍ପଦ",
      subject: "Geography",
      category: "Human Geography",
      chapter: "ଜନସଂଖ୍ୟା ଏବଂ ସମ୍ପଦ",
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
      { quiz: quiz3._id, questionText: "Demographic transition model ର କେତେଟି ଚରଣ ଅଛି?", options: ["3", "4", "5", "6"], correctAnswer: 2, marks: 1, explanation: "Demographic transition model ରେ 5ଟି ଚରଣ ଅଛି।" },
      { quiz: quiz3._id, questionText: "Population density କିପରି ଗଣନା କରାଯାଏ?", options: ["ମୋଟ ଅଞ୍ଚଳ / ଜନସଂଖ୍ୟା", "ଜନସଂଖ୍ୟା / ମୋଟ ଅଞ୍ଚଳ", "ଜନ୍ମହାର - ମୃତ୍ୟୁହାର", "Immigration + emigration"], correctAnswer: 1, marks: 1, explanation: "Population density = ମୋଟ ଜନସଂଖ୍ୟା ÷ ମୋଟ ଅଞ୍ଚଳ।" },
      { quiz: quiz3._id, questionText: "ସବୁଠାରୁ ଅଧିକ population density କେଉଁ ଦେଶର?", options: ["ଭାରତ", "ବାଙ୍ଗ୍ଲାଦେଶ", "ମୋନାକୋ", "ଚୀନ"], correctAnswer: 2, marks: 1, explanation: "ମୋନାକୋର population density ସର୍ବାଧିକ।" },
      { quiz: quiz3._id, questionText: "Renewable resources ର ଉଦାହରଣ କଣ?", options: ["କୋଏଲା ଏବଂ ପେଟ୍ରୋଲିୟମ", "ସୂର୍ଯ୍ୟ ଏବଂ ପବନ ଶକ୍ତି", "ପ୍ରାକୃତିକ ଗ୍ୟାସ", "Nuclear fuel"], correctAnswer: 1, marks: 1, explanation: "ସୂର୍ଯ୍ୟ ଏବଂ ପବନ ଶକ୍ତି renewable resource ଅଟେ।" },
      { quiz: quiz3._id, questionText: "Urbanization ର ଅର୍ଥ କଣ?", options: ["ଗ୍ରାମ ଉନ୍ନତି", "ସହରରେ ଲୋକସଂଖ୍ୟା ବୃଦ୍ଧି", "ବନ କାଟ", "କେବଳ ଶିଳ୍ପୀକରଣ"], correctAnswer: 1, marks: 1, explanation: "Urbanization ରେ ସହର ଅଞ୍ଚଳରେ ଲୋକସଂଖ୍ୟା ବଢ଼େ।" },
      { quiz: quiz3._id, questionText: "'Sustainable development' ଧାରଣାକୁ କିଏ ଲୋକପ୍ରିୟ କଲା?", options: ["Rio Summit 1992", "Brundtland Report 1987", "Kyoto Protocol 1997", "Paris Agreement 2015"], correctAnswer: 1, marks: 1, explanation: "Brundtland Report sustainable development କୁ ପ୍ରଚଳିତ କଲା।" },
      { quiz: quiz3._id, questionText: "Migration ର push factor କଣ?", options: ["ସହରରେ ଭଲ ଚାକିରି", "ଦାରିଦ୍ର୍ୟ ଏବଂ ବେରୋଜଗାରି", "ଭଲ ଶିକ୍ଷା", "ଭଲ ଚିକିତ୍ସା"], correctAnswer: 1, marks: 1, explanation: "Push factor ଲୋକଙ୍କୁ ନିଜ ସ୍ଥାନ ଛାଡ଼ିବାକୁ ବାଧ୍ୟ କରେ।" },
      { quiz: quiz3._id, questionText: "ବିକାଶଶୀଳ ଦେଶରେ କେଉଁ ସେକ୍ଟରରେ ସର୍ବାଧିକ ଲୋକ କାମ କରନ୍ତି?", options: ["Secondary", "Primary (agriculture)", "Tertiary", "Quaternary"], correctAnswer: 1, marks: 1, explanation: "Primary sector ରେ ସର୍ବାଧିକ ଲୋକ କାମ କରନ୍ତି।" },
      { quiz: quiz3._id, questionText: "HDI କଣ ମାପେ?", options: ["କେବଳ ଆୟ", "ସ୍ୱାସ୍ଥ୍ୟ, ଶିକ୍ଷା ଏବଂ ଜୀବନମାନ", "କେବଳ ସାକ୍ଷରତା", "କେବଳ ଆୟୁ"], correctAnswer: 1, marks: 1, explanation: "HDI ଜୀବନମାନ, ଶିକ୍ଷା ଏବଂ ସ୍ୱାସ୍ଥ୍ୟକୁ ମାପେ।" },
      { quiz: quiz3._id, questionText: "Deforestation ର ପରିଣାମ କଣ?", options: ["ବର୍ଷା ବୃଦ୍ଧି", "ମାଟି କ୍ଷୟ ଏବଂ biodiversity ହାନି", "ଠଣ୍ଡା ଜଳବାୟୁ", "ଅଧିକ ଭୂଗର୍ଭ ଜଳ"], correctAnswer: 1, marks: 1, explanation: "Deforestation ଫଳରେ ମାଟି କ୍ଷୟ ଏବଂ biodiversity ହାନି ହୁଏ।" },
    ]);

    console.log("✓ Class 11 Arts - Geography Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsGeographyOdia };
