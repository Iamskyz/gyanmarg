import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7ScienceOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

// Subcategory 1: Nutrition in Living Organisms (Odia)
const sub1_questions = [
  {
    questionText: "ସବୁଜ ଉଦ୍ଭିଦର ପୋଷଣ ପଦ୍ଧତିକୁ କଣ କୁହାଯାଏ?",
    options: ["ପରପୋଷୀ", "ସ୍ୱପୋଷୀ", "ମୃତଜୀବୀ", "ପରଜୀବୀ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ସବୁଜ ଉଦ୍ଭିଦ ଫଟୋସିନ୍ଥେସିସ୍ ଦ୍ୱାରା ନିଜର ଖାଦ୍ୟ ନିଜେ ପ୍ରସ୍ତୁତ କରେ, ତେଣୁ ସେମାନଙ୍କର ପୋଷଣ ପଦ୍ଧତି ସ୍ୱପୋଷୀ।",
  },
  {
    questionText: "ଫଟୋସିନ୍ଥେସିସ୍ ସମୟରେ କେଉଁ ଗ୍ୟାସ ନିର୍ଗତ ହୁଏ?",
    options: ["କାର୍ବନ ଡାଇଅକ୍ସାଇଡ", "ନାଇଟ୍ରୋଜେନ", "ଅକ୍ସିଜେନ", "ହାଇଡ୍ରୋଜେନ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ଫଟୋସିନ୍ଥେସିସ୍ ସମୟରେ ଉଦ୍ଭିଦ ଉପଉତ୍ପାଦ ଭାବରେ ଅକ୍ସିଜେନ ନିର୍ଗତ କରେ।",
  },
  {
    questionText: "କ୍ଷୁଦ୍ରାନ୍ତ୍ରରେ ଭିଲାଇ (villi) ର କାର୍ଯ୍ୟ କଣ?",
    options: ["ଏନଜାଇମ ଉତ୍ପାଦନ", "ଶୋଷଣ କ୍ଷେତ୍ର ବୃଦ୍ଧି", "ଖାଦ୍ୟ ସଂରକ୍ଷଣ", "ଜୀବାଣୁ ନାଶ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ଭିଲାଇ କ୍ଷୁଦ୍ରାନ୍ତ୍ରରେ ପଚିତ ଖାଦ୍ୟ ଶୋଷଣ ପାଇଁ ପୃଷ୍ଠ କ୍ଷେତ୍ରଫଳ ବୃଦ୍ଧି କରେ।",
  },
  {
    questionText: "କେଉଁ ଜୀବ ମୃତଜୀବୀ (saprophyte) ର ଉଦାହରଣ?",
    options: ["ଛତୁ", "ଗୋଲାପ ଗଛ", "ଗାଈ", "ବେଙ୍ଗ"],
    correctAnswer: 0,
    marks: 1,
    explanation: "ଛତୁ ମୃତଜୀବୀ ଯାହା ମୃତ ଓ ପଚା ଜୈବ ପଦାର୍ଥରୁ ପୋଷଣ ପାଏ।",
  },
  {
    questionText: "ମଣିଷ ଶରୀରରେ ଖାଦ୍ୟ ପାଚନ କେଉଁଠାରୁ ଆରମ୍ଭ ହୁଏ?",
    options: ["ପାକସ୍ଥଳୀ", "କ୍ଷୁଦ୍ରାନ୍ତ୍ର", "ମୁଖ", "ବୃହଦାନ୍ତ୍ର"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ପାଚନ ମୁଖରେ ଆରମ୍ଭ ହୁଏ ଯେଉଁଠାରେ ଲାଳରେ ଥିବା ଏନଜାଇମ ଶ୍ୱେତସାର ଭାଙ୍ଗେ।",
  },
  {
    questionText: "ପାକସ୍ଥଳୀରେ ହାଇଡ୍ରୋକ୍ଲୋରିକ ଏସିଡ୍ ର ଭୂମିକା କଣ?",
    options: ["ଚର୍ବି ପାଚନ", "ଜୀବାଣୁ ନାଶ ଓ ଅମ୍ଳୀୟ ମାଧ୍ୟମ ସୃଷ୍ଟି", "ଜଳ ଶୋଷଣ", "ପିତ୍ତ ଉତ୍ପାଦନ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ପାକସ୍ଥଳୀରେ HCl ଜୀବାଣୁ ନାଶ କରେ ଓ ଏନଜାଇମ କାର୍ଯ୍ୟ ପାଇଁ ଅମ୍ଳୀୟ ମାଧ୍ୟମ ସୃଷ୍ଟି କରେ।",
  },
  {
    questionText: "ଉଦ୍ଭିଦର କେଉଁ ଅଂଶ ଜଳ ଓ ଖଣିଜ ଶୋଷଣ କରେ?",
    options: ["ପତ୍ର", "କାଣ୍ଡ", "ମୂଳ ରୋମ", "ଫୁଲ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ମୂଳ ରୋମ ମାଟିରୁ ଜଳ ଓ ଖଣିଜ ପଦାର୍ଥ ଶୋଷଣ କରେ।",
  },
  {
    questionText: "ପତ୍ରରେ ଥିବା ସବୁଜ ରଞ୍ଜକ ପଦାର୍ଥକୁ କଣ କୁହାଯାଏ?",
    options: ["ହିମୋଗ୍ଲୋବିନ", "କ୍ଲୋରୋଫିଲ", "ମେଲାନିନ", "କ୍ୟାରୋଟିନ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "କ୍ଲୋରୋଫିଲ ହେଉଛି ସବୁଜ ରଞ୍ଜକ ପଦାର୍ଥ ଯାହା ଫଟୋସିନ୍ଥେସିସ୍ ପାଇଁ ସୂର୍ଯ୍ୟ ଆଲୋକ ଧରେ।",
  },
  {
    questionText: "ଅମରବେଲ (Cuscuta) କେଉଁ ପ୍ରକାର ଜୀବ?",
    options: ["ସ୍ୱପୋଷୀ", "ମୃତଜୀବୀ", "ପରଜୀବୀ", "କୀଟଭକ୍ଷୀ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ଅମରବେଲ ଏକ ପରଜୀବୀ ଉଦ୍ଭିଦ ଯାହା ଅନ୍ୟ ଉଦ୍ଭିଦଠାରୁ ପୋଷଣ ପାଏ।",
  },
  {
    questionText: "ଲାଳରେ ଥିବା କେଉଁ ଏନଜାଇମ ଶ୍ୱେତସାର ପାଚନ କରେ?",
    options: ["ପେପସିନ", "ଲାଇପେଜ", "ଆମାଇଲେଜ", "ଟ୍ରିପସିନ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ଲାଳ ଆମାଇଲେଜ ମୁଖରେ ଶ୍ୱେତସାରକୁ ସରଳ ଶର୍କରାରେ ଭାଙ୍ଗେ।",
  },
];


// Subcategory 2: Heat and Temperature (Odia)
const sub2_questions = [
  {
    questionText: "ତାପମାତ୍ରା ମାପିବା ପାଇଁ କେଉଁ ଯନ୍ତ୍ର ବ୍ୟବହୃତ ହୁଏ?",
    options: ["ବାରୋମିଟର", "ଥର୍ମୋମିଟର", "ଆନିମୋମିଟର", "ହାଇଗ୍ରୋମିଟର"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ଥର୍ମୋମିଟର ତାପମାତ୍ରା ମାପିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
  },
  {
    questionText: "ସେଲସିୟସରେ ଜଳର ଫୁଟିବା ବିନ୍ଦୁ କେତେ?",
    options: ["0°C", "50°C", "100°C", "212°C"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ସାଧାରଣ ବାୟୁମଣ୍ଡଳୀୟ ଚାପରେ ଜଳ 100°C (ବା 212°F) ରେ ଫୁଟେ।",
  },
  {
    questionText: "ଉତ୍ତାପ କେଉଁ ଦିଗରେ ପ୍ରବାହିତ ହୁଏ?",
    options: ["ଥଣ୍ଡାରୁ ଗରମ ବସ୍ତୁକୁ", "ଗରମରୁ ଥଣ୍ଡା ବସ୍ତୁକୁ", "ଦୁଇ ଦିଗରେ ସମାନ", "ପ୍ରବାହିତ ହୁଏ ନାହିଁ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ଉତ୍ତାପ ସର୍ବଦା ଗରମ ବସ୍ତୁରୁ ଥଣ୍ଡା ବସ୍ତୁ ଆଡ଼କୁ ପ୍ରବାହିତ ହୁଏ।",
  },
  {
    questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ଉତ୍ତାପର ଭଲ ପରିବାହକ?",
    options: ["କାଠ", "ପ୍ଲାଷ୍ଟିକ", "ଲୁହା", "ରବର"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ଲୁହା ପରି ଧାତୁ ଉତ୍ତାପର ଭଲ ପରିବାହକ।",
  },
  {
    questionText: "ମଣିଷ ଶରୀରର ସାଧାରଣ ତାପମାତ୍ରା କେତେ?",
    options: ["35°C", "37°C", "39°C", "40°C"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ମଣିଷ ଶରୀରର ସାଧାରଣ ତାପମାତ୍ରା ପ୍ରାୟ 37°C (98.6°F)।",
  },
  {
    questionText: "ଉତ୍ତାପ ସ୍ଥାନାନ୍ତରର କେଉଁ ପଦ୍ଧତିରେ ମାଧ୍ୟମ ଦରକାର ନାହିଁ?",
    options: ["ପରିବହନ", "ସଂବହନ", "ବିକିରଣ", "ସବୁଗୁଡ଼ିକରେ ମାଧ୍ୟମ ଦରକାର"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ବିକିରଣ ଶୂନ୍ୟସ୍ଥାନ ମଧ୍ୟ ଦେଇ ଉତ୍ତାପ ସ୍ଥାନାନ୍ତର କରିପାରେ।",
  },
  {
    questionText: "ଶୀତଦିନେ ଆମେ ଊଳ ପୋଷାକ କାହିଁକି ପିନ୍ଧୁ?",
    options: ["ଊଳ ଉତ୍ତାପ ଉତ୍ପାଦନ କରେ", "ଊଳ ବାୟୁ ଧରି ରଖେ ଯାହା ଖରାପ ପରିବାହକ", "ଊଳ ଥଣ୍ଡା ଶୋଷଣ କରେ", "ଊଳ ଉତ୍ତାପ ପ୍ରତିଫଳିତ କରେ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ଊଳ ନିଜ ତନ୍ତୁ ମଧ୍ୟରେ ବାୟୁ ଧରି ରଖେ। ବାୟୁ ଉତ୍ତାପର ଖରାପ ପରିବାହକ, ଯାହା ଶରୀରର ଉତ୍ତାପ ବାହାରକୁ ଯିବାକୁ ଦିଏ ନାହିଁ।",
  },
  {
    questionText: "ଜଳର ହିମାଙ୍କ (freezing point) କେତେ?",
    options: ["0°C", "4°C", "-10°C", "32°C"],
    correctAnswer: 0,
    marks: 1,
    explanation: "ସାଧାରଣ ବାୟୁମଣ୍ଡଳୀୟ ଚାପରେ ଜଳ 0°C (ବା 32°F) ରେ ଜମିଯାଏ।",
  },
  {
    questionText: "କେଉଁ ପଦାର୍ଥରେ ଉତ୍ତାପ ସବୁଠାରୁ ଶୀଘ୍ର ଯାଏ?",
    options: ["ଜଳ", "ବାୟୁ", "ତମ୍ବା", "କାଚ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ତମ୍ବା ଉତ୍ତାପର ଉତ୍କୃଷ୍ଟ ପରିବାହକ ଏବଂ ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ ସବୁଠାରୁ ଶୀଘ୍ର ଉତ୍ତାପ ସ୍ଥାନାନ୍ତର କରେ।",
  },
  {
    questionText: "ସମୁଦ୍ର ବାୟୁ (sea breeze) କାହିଁକି ହୁଏ?",
    options: ["ସ୍ଥଳ ସମୁଦ୍ରଠାରୁ ଶୀଘ୍ର ଗରମ ହୁଏ", "ସମୁଦ୍ର ସ୍ଥଳଠାରୁ ଶୀଘ୍ର ଗରମ ହୁଏ", "ଦୁଇଟି ସମାନ ଗରମ ହୁଏ", "ବାୟୁ ଅନିୟମିତ ବହେ"],
    correctAnswer: 0,
    marks: 1,
    explanation: "ଦିନରେ ସ୍ଥଳ ସମୁଦ୍ରଠାରୁ ଶୀଘ୍ର ଗରମ ହୁଏ, ଫଳରେ ସ୍ଥଳ ଉପରେ ବାୟୁ ଉଠେ ଓ ଥଣ୍ଡା ସମୁଦ୍ର ବାୟୁ ଭିତରକୁ ଆସେ।",
  },
];


// Subcategory 3: Acids, Bases and Salts (Odia)
const sub3_questions = [
  {
    questionText: "ଏସିଡ୍ (ଅମ୍ଳ) ର ସ୍ୱାଦ କେମିତି?",
    options: ["ତିକ୍ତ", "ଖଟା", "ମିଠା", "ଲୁଣିଆ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ଅମ୍ଳର ସ୍ୱାଦ ଖଟା ହୋଇଥାଏ। ଉଦାହରଣ ସ୍ୱରୂପ, ଲେମ୍ବୁ ରସରେ ସାଇଟ୍ରିକ ଏସିଡ୍ ଥାଏ।",
  },
  {
    questionText: "ଅମ୍ଳୀୟ ଦ୍ରବଣରେ କେଉଁ ସୂଚକ ଲାଲ ହୋଇଯାଏ?",
    options: ["ନୀଳ ଲିଟମସ", "ଲାଲ ଲିଟମସ", "ଫିନଲଫ୍ଥାଲିନ", "ମିଥାଇଲ ଅରେଞ୍ଜ"],
    correctAnswer: 0,
    marks: 1,
    explanation: "ନୀଳ ଲିଟମସ କାଗଜ ଅମ୍ଳୀୟ ଦ୍ରବଣରେ ଡୁବାଇଲେ ଲାଲ ହୋଇଯାଏ।",
  },
  {
    questionText: "ନିରପେକ୍ଷ ଦ୍ରବଣର pH ମାନ କେତେ?",
    options: ["0", "7", "14", "1"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ନିରପେକ୍ଷ ଦ୍ରବଣର pH 7। 7 ତଳେ ଅମ୍ଳୀୟ, 7 ଉପରେ କ୍ଷାରୀୟ।",
  },
  {
    questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି କ୍ଷାର (base)?",
    options: ["ଲେମ୍ବୁ ରସ", "ଭିନେଗାର", "ବେକିଂ ସୋଡ଼ା", "କମଳା ରସ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ବେକିଂ ସୋଡ଼ା (ସୋଡ଼ିୟମ ବାଇକାର୍ବୋନେଟ) ଏକ କ୍ଷାର ଯାହାର pH 7 ଠାରୁ ଅଧିକ।",
  },
  {
    questionText: "ଅମ୍ଳ ଓ କ୍ଷାର ପ୍ରତିକ୍ରିୟା କଲେ କଣ ସୃଷ୍ଟି ହୁଏ?",
    options: ["ଅମ୍ଳ", "କ୍ଷାର", "ଲବଣ ଓ ଜଳ", "ଗ୍ୟାସ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ଅମ୍ଳ ଓ କ୍ଷାର ପ୍ରତିକ୍ରିୟା କଲେ ଲବଣ ଓ ଜଳ ସୃଷ୍ଟି ହୁଏ। ଏହାକୁ ପ୍ରଶମନ (neutralization) କୁହାଯାଏ।",
  },
  {
    questionText: "ଆମ ପାକସ୍ଥଳୀରେ କେଉଁ ଅମ୍ଳ ଥାଏ?",
    options: ["ସଲଫ୍ୟୁରିକ ଏସିଡ୍", "ହାଇଡ୍ରୋକ୍ଲୋରିକ ଏସିଡ୍", "ନାଇଟ୍ରିକ ଏସିଡ୍", "ଏସିଟିକ ଏସିଡ୍"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ହାଇଡ୍ରୋକ୍ଲୋରିକ ଏସିଡ୍ (HCl) ଆମ ପାକସ୍ଥଳୀରେ ଥାଏ ଯାହା ପାଚନରେ ସାହାଯ୍ୟ କରେ।",
  },
  {
    questionText: "କ୍ଷାରୀୟ ଦ୍ରବଣରେ ହଳଦୀ ମିଶାଇଲେ କଣ ହୁଏ?",
    options: ["ହଳଦିଆ ରହେ", "ଲାଲ ହୋଇଯାଏ", "କୌଣସି ପରିବର୍ତ୍ତନ ନାହିଁ", "ନୀଳ ହୋଇଯାଏ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ହଳଦୀ କ୍ଷାରୀୟ ଦ୍ରବଣରେ ଲାଲ ହୋଇଯାଏ।",
  },
  {
    questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ପ୍ରାକୃତିକ ସୂଚକ?",
    options: ["ଫିନଲଫ୍ଥାଲିନ", "ଲିଟମସ", "ମିଥାଇଲ ଅରେଞ୍ଜ", "ସାର୍ବଜନୀନ ସୂଚକ"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ଲିଟମସ ଏକ ପ୍ରାକୃତିକ ସୂଚକ ଯାହା ଲାଇକେନରୁ ମିଳେ।",
  },
  {
    questionText: "ପିମ୍ପୁଡ଼ି କାମୁଡ଼ାରେ କେଉଁ ଅମ୍ଳ ଥାଏ?",
    options: ["ଏସିଟିକ ଏସିଡ୍", "ଫର୍ମିକ ଏସିଡ୍", "ସାଇଟ୍ରିକ ଏସିଡ୍", "ଲ୍ୟାକ୍ଟିକ ଏସିଡ୍"],
    correctAnswer: 1,
    marks: 1,
    explanation: "ପିମ୍ପୁଡ଼ି କାମୁଡ଼ାରେ ଫର୍ମିକ ଏସିଡ୍ (ମିଥାନୋଇକ ଏସିଡ୍) ଥାଏ।",
  },
  {
    questionText: "ଅମ୍ଳ ଓ କ୍ଷାର ମିଶ୍ରଣ ପ୍ରକ୍ରିୟାକୁ କଣ କୁହାଯାଏ?",
    options: ["ଜାରଣ", "ବିଜାରଣ", "ପ୍ରଶମନ", "ବିଘଟନ"],
    correctAnswer: 2,
    marks: 1,
    explanation: "ଅମ୍ଳ ଓ କ୍ଷାର ମଧ୍ୟରେ ପ୍ରତିକ୍ରିୟାକୁ ପ୍ରଶମନ (neutralization) କୁହାଯାଏ।",
  },
];




    // Science - Subcategory 1: Nutrition in Living Organisms (Odia)
    const scienceQuiz1Od = await Quiz.create({
      title: "ପୋଷଣ ଓ ଜୀବ",
      subject: "Science",
      category: "Biology",
      chapter: "Nutrition",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany(
      sub1_questions.map((q) => ({
        ...q,
        quiz: scienceQuiz1Od._id,
      }))
    );

    // Science - Subcategory 2: Heat and Temperature (Odia)
    const scienceQuiz2Od = await Quiz.create({
      title: "ତାପ ଓ ତାପମାତ୍ରା",
      subject: "Science",
      category: "Physics",
      chapter: "Heat",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany(
      sub2_questions.map((q) => ({
        ...q,
        quiz: scienceQuiz2Od._id,
      }))
    );

    // Science - Subcategory 3: Acids, Bases and Salts (Odia)
    const scienceQuiz3Od = await Quiz.create({
      title: "ଅମ୍ଳ, କ୍ଷାର ଓ ଲବଣ",
      subject: "Science",
      category: "Chemistry",
      chapter: "Chemical Substances",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany(
      sub3_questions.map((q) => ({
        ...q,
        quiz: scienceQuiz3Od._id,
      }))
    );

    console.log("✓ Class 7 - Science (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7ScienceOdia;
