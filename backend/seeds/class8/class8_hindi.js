import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8Hindi = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Samas (Compound Words)
    const hindiQuiz1 = await Quiz.create({
      title: "हिंदी व्याकरण - समास और उपसर्ग-प्रत्यय",
      subject: "Hindi",
      category: "व्याकरण",
      chapter: "समास",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz1._id, questionText: "समास किसे कहते हैं?", options: ["शब्दों को अलग करना", "दो या अधिक शब्दों को मिलाकर एक शब्द बनाना", "शब्दों का अर्थ बदलना", "वाक्य बनाना"], correctAnswer: 1, marks: 1, explanation: "समास में दो या अधिक शब्दों को मिलाकर एक नया शब्द बनाया जाता है।" },
      { quiz: hindiQuiz1._id, questionText: "'राजपुत्र' में कौन सा समास है?", options: ["तत्पुरुष", "द्वंद्व", "बहुव्रीहि", "अव्ययीभाव"], correctAnswer: 0, marks: 1, explanation: "'राजपुत्र' = राजा का पुत्र — तत्पुरुष समास (उत्तर पद प्रधान)।" },
      { quiz: hindiQuiz1._id, questionText: "'माता-पिता' में कौन सा समास है?", options: ["तत्पुरुष", "द्वंद्व", "बहुव्रीहि", "कर्मधारय"], correctAnswer: 1, marks: 1, explanation: "'माता-पिता' में दोनों पद प्रधान हैं — द्वंद्व समास।" },
      { quiz: hindiQuiz1._id, questionText: "उपसर्ग किसे कहते हैं?", options: ["शब्द के अंत में जुड़ने वाला", "शब्द के आरंभ में जुड़ने वाला", "शब्द के बीच में", "स्वतंत्र शब्द"], correctAnswer: 1, marks: 1, explanation: "उपसर्ग शब्द के आरंभ में जुड़कर अर्थ बदलता है। जैसे: 'अ' + 'न्याय' = अन्याय।" },
      { quiz: hindiQuiz1._id, questionText: "'निर्दोष' में उपसर्ग कौन सा है?", options: ["नि", "निर्", "दोष", "र्दो"], correctAnswer: 1, marks: 1, explanation: "'निर्' उपसर्ग है जिसका अर्थ 'बिना' है। निर् + दोष = निर्दोष।" },
      { quiz: hindiQuiz1._id, questionText: "प्रत्यय किसे कहते हैं?", options: ["शब्द के आरंभ में जुड़ने वाला", "शब्द के अंत में जुड़ने वाला", "स्वतंत्र शब्द", "वाक्य का भाग"], correctAnswer: 1, marks: 1, explanation: "प्रत्यय शब्द के अंत में जुड़कर नया शब्द बनाता है। जैसे: 'मीठा' + 'ई' = मिठाई।" },
      { quiz: hindiQuiz1._id, questionText: "'चतुर्भुज' में कौन सा समास है?", options: ["तत्पुरुष", "द्विगु", "बहुव्रीहि", "अव्ययीभाव"], correctAnswer: 1, marks: 1, explanation: "'चतुर्भुज' = चार भुजाओं का समूह — द्विगु समास (संख्यावाचक)।" },
      { quiz: hindiQuiz1._id, questionText: "'दशमुख' (रावण) में कौन सा समास है?", options: ["तत्पुरुष", "द्वंद्व", "बहुव्रीहि", "द्विगु"], correctAnswer: 2, marks: 1, explanation: "'दशमुख' = दस मुख हैं जिसके (रावण) — बहुव्रीहि समास (अन्य पद प्रधान)।" },
      { quiz: hindiQuiz1._id, questionText: "'यथाशक्ति' में कौन सा समास है?", options: ["तत्पुरुष", "द्वंद्व", "बहुव्रीहि", "अव्ययीभाव"], correctAnswer: 3, marks: 1, explanation: "'यथाशक्ति' = शक्ति के अनुसार — अव्ययीभाव समास (पहला पद अव्यय)।" },
      { quiz: hindiQuiz1._id, questionText: "'लिखावट' में प्रत्यय कौन सा है?", options: ["लिख", "आवट", "ट", "वट"], correctAnswer: 1, marks: 1, explanation: "'लिख' + 'आवट' = लिखावट। 'आवट' प्रत्यय है।" },
    ]);

    // Subcategory 2: Literature - Poetry
    const hindiQuiz2 = await Quiz.create({
      title: "हिंदी साहित्य - कविता और कवि",
      subject: "Hindi",
      category: "साहित्य",
      chapter: "काव्य",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz2._id, questionText: "'रामचरितमानस' के रचयिता कौन हैं?", options: ["सूरदास", "तुलसीदास", "कबीर", "रहीम"], correctAnswer: 1, marks: 1, explanation: "तुलसीदास ने रामचरितमानस की रचना की।" },
      { quiz: hindiQuiz2._id, questionText: "सूरदास किस भाषा में लिखते थे?", options: ["अवधी", "ब्रज", "खड़ी बोली", "मैथिली"], correctAnswer: 1, marks: 1, explanation: "सूरदास ब्रज भाषा में लिखते थे।" },
      { quiz: hindiQuiz2._id, questionText: "'साखी' किसकी रचना है?", options: ["तुलसीदास", "सूरदास", "कबीर", "मीराबाई"], correctAnswer: 2, marks: 1, explanation: "साखी कबीर की प्रसिद्ध रचना है।" },
      { quiz: hindiQuiz2._id, questionText: "छायावाद के प्रमुख कवि कौन हैं?", options: ["कबीर", "जयशंकर प्रसाद", "तुलसीदास", "भारतेंदु"], correctAnswer: 1, marks: 1, explanation: "जयशंकर प्रसाद छायावाद के प्रमुख कवि हैं।" },
      { quiz: hindiQuiz2._id, questionText: "'मधुशाला' किसकी रचना है?", options: ["महादेवी वर्मा", "हरिवंश राय बच्चन", "निराला", "दिनकर"], correctAnswer: 1, marks: 1, explanation: "हरिवंश राय बच्चन ने 'मधुशाला' लिखी।" },
      { quiz: hindiQuiz2._id, questionText: "रस के कितने अंग होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "रस के 4 अंग हैं — स्थायी भाव, विभाव, अनुभाव, संचारी भाव।" },
      { quiz: hindiQuiz2._id, questionText: "'उर्मिला' किस काव्य की पात्र है?", options: ["रामचरितमानस", "साकेत", "कामायनी", "सूरसागर"], correctAnswer: 1, marks: 1, explanation: "मैथिलीशरण गुप्त के 'साकेत' में उर्मिला प्रमुख पात्र है।" },
      { quiz: hindiQuiz2._id, questionText: "'राष्ट्रकवि' किसे कहा जाता है?", options: ["निराला", "दिनकर", "मैथिलीशरण गुप्त", "प्रसाद"], correctAnswer: 2, marks: 1, explanation: "मैथिलीशरण गुप्त को राष्ट्रकवि कहा जाता है।" },
      { quiz: hindiQuiz2._id, questionText: "करुण रस का स्थायी भाव क्या है?", options: ["क्रोध", "शोक", "हास", "भय"], correctAnswer: 1, marks: 1, explanation: "करुण रस का स्थायी भाव 'शोक' है।" },
      { quiz: hindiQuiz2._id, questionText: "'कामायनी' के रचयिता कौन हैं?", options: ["निराला", "प्रसाद", "पंत", "महादेवी"], correctAnswer: 1, marks: 1, explanation: "जयशंकर प्रसाद ने 'कामायनी' महाकाव्य लिखा।" },
    ]);

    // Subcategory 3: Writing Skills
    const hindiQuiz3 = await Quiz.create({
      title: "हिंदी लेखन - पत्र, निबंध और अपठित गद्यांश",
      subject: "Hindi",
      category: "लेखन",
      chapter: "रचनात्मक लेखन",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz3._id, questionText: "अपठित गद्यांश में क्या करना होता है?", options: ["कंठस्थ करना", "दिए गए अंश को पढ़कर प्रश्नों के उत्तर देना", "कहानी लिखना", "कविता लिखना"], correctAnswer: 1, marks: 1, explanation: "अपठित गद्यांश में दिए गए अंश को पढ़कर उससे संबंधित प्रश्नों के उत्तर देने होते हैं।" },
      { quiz: hindiQuiz3._id, questionText: "औपचारिक पत्र में 'सेवा में' किसके लिए लिखा जाता है?", options: ["मित्र", "अधिकारी/प्रधानाचार्य", "माता-पिता", "भाई-बहन"], correctAnswer: 1, marks: 1, explanation: "'सेवा में' औपचारिक पत्र में अधिकारी या प्रधानाचार्य को संबोधित करने के लिए लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "निबंध की भूमिका में क्या होना चाहिए?", options: ["निष्कर्ष", "विषय का परिचय", "उदाहरण", "सारांश"], correctAnswer: 1, marks: 1, explanation: "भूमिका में विषय का संक्षिप्त परिचय दिया जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "संवाद लेखन में सबसे महत्वपूर्ण क्या है?", options: ["लंबे वाक्य", "स्वाभाविकता और प्रवाह", "कठिन शब्द", "केवल प्रश्न"], correctAnswer: 1, marks: 1, explanation: "संवाद में स्वाभाविकता और प्रवाह सबसे महत्वपूर्ण है।" },
      { quiz: hindiQuiz3._id, questionText: "विज्ञापन लेखन में क्या आवश्यक नहीं है?", options: ["आकर्षक शीर्षक", "संक्षिप्त भाषा", "लंबा विवरण", "चित्र/स्लोगन"], correctAnswer: 2, marks: 1, explanation: "विज्ञापन संक्षिप्त होना चाहिए, लंबा विवरण आवश्यक नहीं।" },
      { quiz: hindiQuiz3._id, questionText: "पत्र में 'दिनांक' कहाँ लिखा जाता है?", options: ["अंत में", "बीच में", "ऊपर दाईं ओर", "ऊपर बाईं ओर"], correctAnswer: 2, marks: 1, explanation: "पत्र में दिनांक ऊपर दाईं ओर लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "अनुच्छेद लेखन में शब्द सीमा सामान्यतः कितनी होती है?", options: ["50-60", "80-100", "200-300", "500+"], correctAnswer: 1, marks: 1, explanation: "अनुच्छेद लेखन में सामान्यतः 80-100 शब्दों की सीमा होती है।" },
      { quiz: hindiQuiz3._id, questionText: "शिकायत पत्र किसे लिखा जाता है?", options: ["मित्र को", "संबंधित अधिकारी को", "माता-पिता को", "भाई को"], correctAnswer: 1, marks: 1, explanation: "शिकायत पत्र संबंधित अधिकारी या विभाग को लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "निबंध के उपसंहार में क्या होना चाहिए?", options: ["नया विषय", "मुख्य बातों का सारांश", "प्रश्न", "कहानी"], correctAnswer: 1, marks: 1, explanation: "उपसंहार में मुख्य बातों का सारांश और निष्कर्ष होना चाहिए।" },
      { quiz: hindiQuiz3._id, questionText: "लघुकथा लेखन में सबसे महत्वपूर्ण तत्व क्या है?", options: ["लंबाई", "संक्षिप्तता और प्रभावशाली अंत", "कठिन भाषा", "अनेक पात्र"], correctAnswer: 1, marks: 1, explanation: "लघुकथा में संक्षिप्तता और प्रभावशाली अंत सबसे महत्वपूर्ण है।" },
    ]);

    console.log("✓ Class 8 - Hindi: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8Hindi;
