import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7Hindi = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar - Verbs and Tenses
    const hindiQuiz1 = await Quiz.create({
      title: "हिंदी व्याकरण - क्रिया और काल",
      subject: "Hindi",
      category: "व्याकरण",
      chapter: "क्रिया और काल",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz1._id, questionText: "क्रिया किसे कहते हैं?", options: ["नाम बताने वाले शब्द", "काम बताने वाले शब्द", "गुण बताने वाले शब्द", "जोड़ने वाले शब्द"], correctAnswer: 1, marks: 1, explanation: "क्रिया वे शब्द हैं जो किसी काम का होना या करना बताते हैं।" },
      { quiz: hindiQuiz1._id, questionText: "'राम खाना खा रहा है' - इसमें क्रिया कौन सी है?", options: ["राम", "खाना", "खा रहा है", "है"], correctAnswer: 2, marks: 1, explanation: "'खा रहा है' क्रिया है क्योंकि यह काम बता रही है।" },
      { quiz: hindiQuiz1._id, questionText: "भूतकाल का उदाहरण कौन सा है?", options: ["वह जाता है", "वह गया", "वह जाएगा", "वह जा रहा है"], correctAnswer: 1, marks: 1, explanation: "'वह गया' भूतकाल है क्योंकि काम पहले हो चुका है।" },
      { quiz: hindiQuiz1._id, questionText: "वर्तमान काल की पहचान क्या है?", options: ["काम हो चुका है", "काम हो रहा है", "काम होगा", "काम नहीं हुआ"], correctAnswer: 1, marks: 1, explanation: "वर्तमान काल में काम अभी हो रहा होता है।" },
      { quiz: hindiQuiz1._id, questionText: "'सीता कल स्कूल जाएगी' - यह कौन सा काल है?", options: ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "संदिग्ध काल"], correctAnswer: 2, marks: 1, explanation: "'जाएगी' भविष्यत काल है क्योंकि काम आगे होगा।" },
      { quiz: hindiQuiz1._id, questionText: "सकर्मक क्रिया किसे कहते हैं?", options: ["जिसमें कर्म हो", "जिसमें कर्म न हो", "जिसमें कर्ता न हो", "जिसमें काल न हो"], correctAnswer: 0, marks: 1, explanation: "सकर्मक क्रिया वह है जिसमें कर्म (object) होता है। जैसे: 'राम फल खाता है'।" },
      { quiz: hindiQuiz1._id, questionText: "'हँसना' कौन सी क्रिया है?", options: ["सकर्मक", "अकर्मक", "प्रेरणार्थक", "संयुक्त"], correctAnswer: 1, marks: 1, explanation: "'हँसना' अकर्मक क्रिया है क्योंकि इसमें कर्म की आवश्यकता नहीं।" },
      { quiz: hindiQuiz1._id, questionText: "काल कितने प्रकार के होते हैं?", options: ["दो", "तीन", "चार", "पाँच"], correctAnswer: 1, marks: 1, explanation: "काल तीन प्रकार के होते हैं - भूतकाल, वर्तमान काल, भविष्यत काल।" },
      { quiz: hindiQuiz1._id, questionText: "'पढ़ाना' किस प्रकार की क्रिया है?", options: ["सकर्मक", "अकर्मक", "प्रेरणार्थक", "सामान्य"], correctAnswer: 2, marks: 1, explanation: "'पढ़ाना' प्रेरणार्थक क्रिया है (पढ़ना से पढ़ाना - दूसरे से काम कराना)।" },
      { quiz: hindiQuiz1._id, questionText: "'वह रोज सुबह दौड़ता है' - यह कौन सा काल है?", options: ["सामान्य वर्तमान", "अपूर्ण भूत", "सामान्य भविष्यत", "पूर्ण वर्तमान"], correctAnswer: 0, marks: 1, explanation: "यह सामान्य वर्तमान काल है क्योंकि यह नियमित क्रिया बता रहा है।" },
    ]);

    // Subcategory 2: Literature - Poetry and Prose
    const hindiQuiz2 = await Quiz.create({
      title: "हिंदी साहित्य - कविता और गद्य",
      subject: "Hindi",
      category: "साहित्य",
      chapter: "काव्य और गद्य",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz2._id, questionText: "अलंकार का अर्थ क्या है?", options: ["कविता का नाम", "भाषा की सुंदरता बढ़ाने वाले तत्व", "कहानी का प्रकार", "व्याकरण का नियम"], correctAnswer: 1, marks: 1, explanation: "अलंकार भाषा की शोभा बढ़ाने वाले तत्व हैं।" },
      { quiz: hindiQuiz2._id, questionText: "'उपमा' अलंकार में क्या होता है?", options: ["अतिशयोक्ति", "दो चीजों की तुलना", "शब्दों की पुनरावृत्ति", "विरोधाभास"], correctAnswer: 1, marks: 1, explanation: "उपमा अलंकार में दो चीजों की तुलना 'सा', 'सी', 'जैसा' आदि से की जाती है।" },
      { quiz: hindiQuiz2._id, questionText: "'चरण कमल बंदौ हरि राई' में कौन सा अलंकार है?", options: ["उपमा", "रूपक", "अनुप्रास", "यमक"], correctAnswer: 1, marks: 1, explanation: "यहाँ चरण को कमल कहा गया है (बिना 'जैसा' के), इसलिए रूपक अलंकार है।" },
      { quiz: hindiQuiz2._id, questionText: "रस कितने प्रकार के होते हैं?", options: ["7", "8", "9", "10"], correctAnswer: 2, marks: 1, explanation: "हिंदी साहित्य में 9 रस माने जाते हैं - श्रृंगार, हास्य, करुण, रौद्र, वीर, भयानक, बीभत्स, अद्भुत, शांत।" },
      { quiz: hindiQuiz2._id, questionText: "हास्य रस का स्थायी भाव क्या है?", options: ["क्रोध", "हास", "शोक", "भय"], correctAnswer: 1, marks: 1, explanation: "हास्य रस का स्थायी भाव 'हास' (हँसी) है।" },
      { quiz: hindiQuiz2._id, questionText: "'कहानी' और 'उपन्यास' में क्या अंतर है?", options: ["कोई अंतर नहीं", "कहानी छोटी, उपन्यास बड़ा", "उपन्यास छोटा", "दोनों कविता हैं"], correctAnswer: 1, marks: 1, explanation: "कहानी छोटी होती है और एक घटना पर केंद्रित, जबकि उपन्यास लंबा और विस्तृत होता है।" },
      { quiz: hindiQuiz2._id, questionText: "'अनुप्रास' अलंकार की पहचान क्या है?", options: ["अर्थ की पुनरावृत्ति", "वर्णों की पुनरावृत्ति", "तुलना", "विरोध"], correctAnswer: 1, marks: 1, explanation: "अनुप्रास अलंकार में एक ही वर्ण बार-बार आता है। जैसे: 'चारु चंद्र की चंचल किरणें'।" },
      { quiz: hindiQuiz2._id, questionText: "कबीर किस काल के कवि थे?", options: ["आदिकाल", "भक्तिकाल", "रीतिकाल", "आधुनिक काल"], correctAnswer: 1, marks: 1, explanation: "कबीर भक्तिकाल के प्रसिद्ध संत कवि थे।" },
      { quiz: hindiQuiz2._id, questionText: "'दोहा' छंद में कितने चरण होते हैं?", options: ["दो", "चार", "छह", "आठ"], correctAnswer: 1, marks: 1, explanation: "दोहा छंद में चार चरण होते हैं - दो पंक्तियों में।" },
      { quiz: hindiQuiz2._id, questionText: "वीर रस का स्थायी भाव क्या है?", options: ["हास", "उत्साह", "भय", "शोक"], correctAnswer: 1, marks: 1, explanation: "वीर रस का स्थायी भाव 'उत्साह' है।" },
    ]);

    // Subcategory 3: Writing - Essay and Letter
    const hindiQuiz3 = await Quiz.create({
      title: "हिंदी लेखन - निबंध और पत्र",
      subject: "Hindi",
      category: "लेखन",
      chapter: "रचनात्मक लेखन",
      grade: 7,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz3._id, questionText: "निबंध के कितने भाग होते हैं?", options: ["दो", "तीन", "चार", "पाँच"], correctAnswer: 1, marks: 1, explanation: "निबंध के तीन भाग होते हैं - भूमिका, विषय-विस्तार, उपसंहार।" },
      { quiz: hindiQuiz3._id, questionText: "अनौपचारिक पत्र किसे लिखा जाता है?", options: ["अधिकारी को", "मित्र या परिवार को", "प्रधानाचार्य को", "संपादक को"], correctAnswer: 1, marks: 1, explanation: "अनौपचारिक पत्र मित्र, परिवार या करीबी लोगों को लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "औपचारिक पत्र में 'विषय' क्यों लिखा जाता है?", options: ["सुंदरता के लिए", "पत्र का उद्देश्य स्पष्ट करने के लिए", "नियम नहीं है", "शब्द बढ़ाने के लिए"], correctAnswer: 1, marks: 1, explanation: "विषय लिखने से पत्र का उद्देश्य तुरंत स्पष्ट हो जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "संवाद लेखन में क्या आवश्यक है?", options: ["केवल एक व्यक्ति की बात", "दो या अधिक व्यक्तियों की बातचीत", "केवल प्रश्न", "केवल उत्तर"], correctAnswer: 1, marks: 1, explanation: "संवाद लेखन में दो या अधिक व्यक्तियों के बीच बातचीत लिखी जाती है।" },
      { quiz: hindiQuiz3._id, questionText: "सारांश लेखन में क्या करना चाहिए?", options: ["विस्तार से लिखना", "मुख्य बातें संक्षेप में लिखना", "नई बातें जोड़ना", "अपनी राय देना"], correctAnswer: 1, marks: 1, explanation: "सारांश में मूल पाठ की मुख्य बातें संक्षेप में लिखी जाती हैं।" },
      { quiz: hindiQuiz3._id, questionText: "विज्ञापन लेखन में सबसे महत्वपूर्ण क्या है?", options: ["लंबा होना", "आकर्षक और संक्षिप्त होना", "कठिन भाषा", "केवल चित्र"], correctAnswer: 1, marks: 1, explanation: "विज्ञापन आकर्षक और संक्षिप्त होना चाहिए ताकि लोगों का ध्यान आकर्षित हो।" },
      { quiz: hindiQuiz3._id, questionText: "पत्र के अंत में क्या लिखा जाता है?", options: ["दिनांक", "विषय", "आपका आज्ञाकारी/शुभचिंतक", "प्रिय मित्र"], correctAnswer: 2, marks: 1, explanation: "पत्र के अंत में 'आपका आज्ञाकारी' (औपचारिक) या 'तुम्हारा मित्र' (अनौपचारिक) लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "अनुच्छेद लेखन में कितने अनुच्छेद होने चाहिए?", options: ["एक", "दो", "तीन", "कोई सीमा नहीं"], correctAnswer: 0, marks: 1, explanation: "अनुच्छेद लेखन में केवल एक अनुच्छेद में पूरी बात लिखनी होती है।" },
      { quiz: hindiQuiz3._id, questionText: "कहानी लेखन में सबसे पहले क्या तय करना चाहिए?", options: ["अंत", "शीर्षक और कथानक", "पात्रों के नाम", "शब्द संख्या"], correctAnswer: 1, marks: 1, explanation: "कहानी लिखने से पहले शीर्षक और कथानक (plot) तय करना चाहिए।" },
      { quiz: hindiQuiz3._id, questionText: "सूचना लेखन में क्या-क्या होना चाहिए?", options: ["केवल नाम", "क्या, कब, कहाँ, कौन की जानकारी", "केवल तारीख", "केवल स्थान"], correctAnswer: 1, marks: 1, explanation: "सूचना में क्या, कब, कहाँ, कौन - ये सभी जानकारी स्पष्ट होनी चाहिए।" },
    ]);

    console.log("✓ Class 7 - Hindi: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7Hindi;
