import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9Hindi = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Vakya Bhed (Types of Sentences)
    const hindiQuiz1 = await Quiz.create({
      title: "हिंदी व्याकरण - वाक्य भेद और वाच्य",
      subject: "Hindi",
      category: "व्याकरण",
      chapter: "वाक्य भेद",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz1._id, questionText: "रचना के आधार पर वाक्य कितने प्रकार के होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "रचना के आधार पर 3 प्रकार: सरल, संयुक्त, मिश्र वाक्य।" },
      { quiz: hindiQuiz1._id, questionText: "'राम खाना खाता है और सोता है' - यह कौन सा वाक्य है?", options: ["सरल", "संयुक्त", "मिश्र", "विधानवाचक"], correctAnswer: 1, marks: 1, explanation: "दो स्वतंत्र उपवाक्य 'और' से जुड़े हैं — संयुक्त वाक्य।" },
      { quiz: hindiQuiz1._id, questionText: "कर्तृवाच्य में क्रिया किसके अनुसार होती है?", options: ["कर्म", "कर्ता", "भाव", "काल"], correctAnswer: 1, marks: 1, explanation: "कर्तृवाच्य में क्रिया कर्ता के अनुसार होती है।" },
      { quiz: hindiQuiz1._id, questionText: "'जब वह आया, तब मैं गया' - यह कौन सा वाक्य है?", options: ["सरल", "संयुक्त", "मिश्र", "आज्ञावाचक"], correctAnswer: 2, marks: 1, explanation: "एक प्रधान और एक आश्रित उपवाक्य — मिश्र वाक्य।" },
      { quiz: hindiQuiz1._id, questionText: "कर्मवाच्य में क्रिया किसके अनुसार होती है?", options: ["कर्ता", "कर्म", "भाव", "विशेषण"], correctAnswer: 1, marks: 1, explanation: "कर्मवाच्य में क्रिया कर्म के अनुसार होती है।" },
      { quiz: hindiQuiz1._id, questionText: "'राम द्वारा पत्र लिखा गया' - यह कौन सा वाच्य है?", options: ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "सरल वाक्य"], correctAnswer: 1, marks: 1, explanation: "'द्वारा' और 'गया' से कर्मवाच्य पहचाना जाता है।" },
      { quiz: hindiQuiz1._id, questionText: "भाववाच्य में किसकी प्रधानता होती है?", options: ["कर्ता", "कर्म", "भाव/क्रिया", "विशेषण"], correctAnswer: 2, marks: 1, explanation: "भाववाच्य में न कर्ता प्रधान होता है न कर्म, बल्कि भाव/क्रिया प्रधान होती है।" },
      { quiz: hindiQuiz1._id, questionText: "'मुझसे चला नहीं जाता' - यह कौन सा वाच्य है?", options: ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "संयुक्त"], correctAnswer: 2, marks: 1, explanation: "अकर्मक क्रिया + 'से' + नहीं जाता = भाववाच्य।" },
      { quiz: hindiQuiz1._id, questionText: "अर्थ के आधार पर वाक्य कितने प्रकार के होते हैं?", options: ["4", "6", "8", "10"], correctAnswer: 2, marks: 1, explanation: "अर्थ के आधार पर 8 प्रकार: विधानवाचक, निषेधवाचक, प्रश्नवाचक, आज्ञावाचक, इच्छावाचक, संदेहवाचक, विस्मयवाचक, संकेतवाचक।" },
      { quiz: hindiQuiz1._id, questionText: "'काश! मैं पक्षी होता' - यह कौन सा वाक्य है?", options: ["आज्ञावाचक", "इच्छावाचक", "विस्मयवाचक", "प्रश्नवाचक"], correctAnswer: 1, marks: 1, explanation: "इच्छा या कामना व्यक्त करने वाला वाक्य इच्छावाचक होता है।" },
    ]);

    // Subcategory 2: Ras and Alankar
    const hindiQuiz2 = await Quiz.create({
      title: "हिंदी साहित्य - रस और अलंकार",
      subject: "Hindi",
      category: "साहित्य",
      chapter: "रस और अलंकार",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz2._id, questionText: "रस के कितने अंग होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "रस के 4 अंग: स्थायी भाव, विभाव, अनुभाव, संचारी भाव।" },
      { quiz: hindiQuiz2._id, questionText: "श्रृंगार रस का स्थायी भाव क्या है?", options: ["रति", "हास", "शोक", "क्रोध"], correctAnswer: 0, marks: 1, explanation: "श्रृंगार रस का स्थायी भाव 'रति' (प्रेम) है।" },
      { quiz: hindiQuiz2._id, questionText: "रौद्र रस का स्थायी भाव क्या है?", options: ["भय", "क्रोध", "उत्साह", "शोक"], correctAnswer: 1, marks: 1, explanation: "रौद्र रस का स्थायी भाव 'क्रोध' है।" },
      { quiz: hindiQuiz2._id, questionText: "'उत्प्रेक्षा' अलंकार की पहचान क्या है?", options: ["जैसा, सा", "मानो, जनु, जानो", "वर्णों की पुनरावृत्ति", "विरोध"], correctAnswer: 1, marks: 1, explanation: "उत्प्रेक्षा में 'मानो', 'जनु', 'जानो' जैसे शब्द आते हैं।" },
      { quiz: hindiQuiz2._id, questionText: "'यमक' अलंकार में क्या होता है?", options: ["अर्थ की पुनरावृत्ति", "एक शब्द बार-बार आता है पर अर्थ भिन्न", "वर्णों की पुनरावृत्ति", "तुलना"], correctAnswer: 1, marks: 1, explanation: "यमक में एक ही शब्द बार-बार आता है लेकिन हर बार अर्थ अलग होता है।" },
      { quiz: hindiQuiz2._id, questionText: "'श्लेष' अलंकार में क्या होता है?", options: ["शब्द एक बार आता है पर अर्थ अनेक", "शब्द अनेक बार आता है", "तुलना होती है", "विरोध होता है"], correctAnswer: 0, marks: 1, explanation: "श्लेष में एक शब्द एक बार आता है लेकिन उसके अनेक अर्थ होते हैं।" },
      { quiz: hindiQuiz2._id, questionText: "अद्भुत रस का स्थायी भाव क्या है?", options: ["भय", "विस्मय", "शोक", "हास"], correctAnswer: 1, marks: 1, explanation: "अद्भुत रस का स्थायी भाव 'विस्मय' (आश्चर्य) है।" },
      { quiz: hindiQuiz2._id, questionText: "'मानवीकरण' अलंकार में क्या होता है?", options: ["मनुष्य को पशु बनाना", "निर्जीव को सजीव गुण देना", "तुलना करना", "अतिशयोक्ति"], correctAnswer: 1, marks: 1, explanation: "मानवीकरण में निर्जीव वस्तुओं को मानवीय गुण दिए जाते हैं।" },
      { quiz: hindiQuiz2._id, questionText: "भयानक रस का स्थायी भाव क्या है?", options: ["क्रोध", "भय", "शोक", "घृणा"], correctAnswer: 1, marks: 1, explanation: "भयानक रस का स्थायी भाव 'भय' है।" },
      { quiz: hindiQuiz2._id, questionText: "'विभाव' किसे कहते हैं?", options: ["रस उत्पन्न करने वाले कारण", "शारीरिक चेष्टाएँ", "अस्थायी भाव", "स्थायी भाव"], correctAnswer: 0, marks: 1, explanation: "विभाव वे कारण हैं जो रस उत्पन्न करते हैं (आलंबन और उद्दीपन)।" },
    ]);

    // Subcategory 3: Apathit Gadyansh and Writing
    const hindiQuiz3 = await Quiz.create({
      title: "हिंदी लेखन - अपठित गद्यांश और रचनात्मक लेखन",
      subject: "Hindi",
      category: "लेखन",
      chapter: "अपठित और रचनात्मक",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz3._id, questionText: "अपठित गद्यांश में सबसे पहले क्या करना चाहिए?", options: ["उत्तर लिखना", "गद्यांश को ध्यान से पढ़ना", "शीर्षक लिखना", "प्रश्न पढ़ना"], correctAnswer: 1, marks: 1, explanation: "सबसे पहले गद्यांश को ध्यान से पढ़कर समझना चाहिए।" },
      { quiz: hindiQuiz3._id, questionText: "संपादक को पत्र किस विषय पर लिखा जाता है?", options: ["व्यक्तिगत समस्या", "सार्वजनिक समस्या", "पारिवारिक बात", "मित्र को बधाई"], correctAnswer: 1, marks: 1, explanation: "संपादक को पत्र सार्वजनिक समस्याओं (सड़क, बिजली, पानी आदि) पर लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "विज्ञापन लेखन में सबसे महत्वपूर्ण क्या है?", options: ["लंबा विवरण", "आकर्षक शीर्षक और स्लोगन", "कठिन भाषा", "केवल चित्र"], correctAnswer: 1, marks: 1, explanation: "विज्ञापन में आकर्षक शीर्षक और स्लोगन सबसे महत्वपूर्ण है।" },
      { quiz: hindiQuiz3._id, questionText: "लघुकथा और कहानी में मुख्य अंतर क्या है?", options: ["कोई अंतर नहीं", "लघुकथा बहुत छोटी और एक बिंदु पर केंद्रित", "कहानी छोटी होती है", "लघुकथा लंबी होती है"], correctAnswer: 1, marks: 1, explanation: "लघुकथा बहुत छोटी होती है और एक ही बिंदु/संदेश पर केंद्रित होती है।" },
      { quiz: hindiQuiz3._id, questionText: "अनुच्छेद लेखन में कितने अनुच्छेद होने चाहिए?", options: ["एक", "दो", "तीन", "चार"], correctAnswer: 0, marks: 1, explanation: "अनुच्छेद लेखन में केवल एक अनुच्छेद में पूरी बात लिखनी होती है।" },
      { quiz: hindiQuiz3._id, questionText: "ई-मेल लेखन में 'विषय' (Subject) क्यों आवश्यक है?", options: ["सुंदरता के लिए", "पत्र का उद्देश्य तुरंत स्पष्ट करने के लिए", "नियम नहीं है", "शब्द बढ़ाने के लिए"], correctAnswer: 1, marks: 1, explanation: "Subject line से प्राप्तकर्ता को तुरंत पत्र का उद्देश्य पता चलता है।" },
      { quiz: hindiQuiz3._id, questionText: "संवाद लेखन में किन बातों का ध्यान रखना चाहिए?", options: ["केवल लंबे वाक्य", "स्वाभाविकता, संक्षिप्तता, विषयानुकूलता", "केवल प्रश्न", "केवल औपचारिक भाषा"], correctAnswer: 1, marks: 1, explanation: "संवाद स्वाभाविक, संक्षिप्त और विषय के अनुकूल होना चाहिए।" },
      { quiz: hindiQuiz3._id, questionText: "सूचना लेखन में क्या अनिवार्य है?", options: ["कहानी", "शीर्षक, दिनांक, समय, स्थान, विषय", "केवल नाम", "केवल हस्ताक्षर"], correctAnswer: 1, marks: 1, explanation: "सूचना में शीर्षक, दिनांक, समय, स्थान और विषय अनिवार्य है।" },
      { quiz: hindiQuiz3._id, questionText: "निबंध में 'विषय-विस्तार' का क्या काम है?", options: ["विषय समाप्त करना", "विषय को विस्तार से समझाना", "नया विषय शुरू करना", "निष्कर्ष देना"], correctAnswer: 1, marks: 1, explanation: "विषय-विस्तार में मुख्य विषय को उदाहरणों और तर्कों से विस्तार से समझाया जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "अपठित काव्यांश में क्या ध्यान रखना चाहिए?", options: ["केवल शब्दार्थ", "भाव, अलंकार, रस और संदेश", "केवल तुक", "केवल छंद"], correctAnswer: 1, marks: 1, explanation: "अपठित काव्यांश में भाव, अलंकार, रस और कवि का संदेश समझना चाहिए।" },
    ]);

    console.log("✓ Class 9 - Hindi: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9Hindi;
