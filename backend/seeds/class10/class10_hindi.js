import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10Hindi = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Pad Parichay and Vakya Parichay
    const hindiQuiz1 = await Quiz.create({
      title: "हिंदी व्याकरण - पद परिचय और वाक्य परिचय",
      subject: "Hindi",
      category: "व्याकरण",
      chapter: "पद और वाक्य परिचय",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz1._id, questionText: "पद परिचय में किसी शब्द के बारे में क्या बताया जाता है?", options: ["केवल अर्थ", "शब्द भेद, लिंग, वचन, कारक, क्रिया संबंध", "केवल वर्तनी", "केवल उच्चारण"], correctAnswer: 1, marks: 1, explanation: "पद परिचय में शब्द का भेद, लिंग, वचन, कारक और वाक्य में उसका संबंध बताया जाता है।" },
      { quiz: hindiQuiz1._id, questionText: "'राम ने सेब खाया' - 'राम' का पद परिचय क्या है?", options: ["क्रिया", "संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक", "विशेषण", "सर्वनाम"], correctAnswer: 1, marks: 1, explanation: "'राम' व्यक्तिवाचक संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक है।" },
      { quiz: hindiQuiz1._id, questionText: "वाक्य परिचय में क्या बताया जाता है?", options: ["केवल अर्थ", "वाक्य का प्रकार, उद्देश्य, विधेय", "केवल शब्द संख्या", "केवल विराम चिह्न"], correctAnswer: 1, marks: 1, explanation: "वाक्य परिचय में वाक्य का प्रकार, उद्देश्य (कर्ता) और विधेय (क्रिया) बताया जाता है।" },
      { quiz: hindiQuiz1._id, questionText: "'वह बहुत सुंदर है' - 'बहुत' का पद परिचय:", options: ["विशेषण", "क्रिया विशेषण (प्रविशेषण)", "संज्ञा", "सर्वनाम"], correctAnswer: 1, marks: 1, explanation: "'बहुत' यहाँ 'सुंदर' विशेषण की विशेषता बता रहा है — प्रविशेषण।" },
      { quiz: hindiQuiz1._id, questionText: "रचना के आधार पर वाक्य कितने प्रकार के होते हैं?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "सरल, संयुक्त, मिश्र — 3 प्रकार।" },
      { quiz: hindiQuiz1._id, questionText: "'और', 'परंतु', 'इसलिए' किस प्रकार के अव्यय हैं?", options: ["क्रिया विशेषण", "समुच्चयबोधक (संयोजक)", "संबंधबोधक", "विस्मयादिबोधक"], correctAnswer: 1, marks: 1, explanation: "ये शब्द दो वाक्यों या पदों को जोड़ते हैं — समुच्चयबोधक अव्यय।" },
      { quiz: hindiQuiz1._id, questionText: "'मेज पर किताब है' - 'पर' क्या है?", options: ["क्रिया", "संबंधबोधक अव्यय", "विशेषण", "सर्वनाम"], correctAnswer: 1, marks: 1, explanation: "'पर' संज्ञा और अन्य शब्दों के बीच संबंध बताता है — संबंधबोधक।" },
      { quiz: hindiQuiz1._id, questionText: "उद्देश्य किसे कहते हैं?", options: ["क्रिया को", "जिसके बारे में कुछ कहा जाए (कर्ता)", "विशेषण को", "अव्यय को"], correctAnswer: 1, marks: 1, explanation: "वाक्य में जिसके बारे में कुछ कहा जाता है वह उद्देश्य (कर्ता) है।" },
      { quiz: hindiQuiz1._id, questionText: "विधेय किसे कहते हैं?", options: ["कर्ता को", "उद्देश्य के बारे में जो कहा जाए (क्रिया सहित)", "विशेषण को", "संज्ञा को"], correctAnswer: 1, marks: 1, explanation: "उद्देश्य (कर्ता) के बारे में जो कुछ कहा जाता है वह विधेय है।" },
      { quiz: hindiQuiz1._id, questionText: "'अरे! कितना सुंदर दृश्य है' - 'अरे' क्या है?", options: ["संज्ञा", "सर्वनाम", "विस्मयादिबोधक अव्यय", "क्रिया"], correctAnswer: 2, marks: 1, explanation: "'अरे' आश्चर्य व्यक्त करता है — विस्मयादिबोधक अव्यय।" },
    ]);

    // Subcategory 2: Kavi and Kavita (Poets and Poetry)
    const hindiQuiz2 = await Quiz.create({
      title: "हिंदी साहित्य - कवि और काव्य",
      subject: "Hindi",
      category: "साहित्य",
      chapter: "काव्य खंड",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz2._id, questionText: "'रामधारी सिंह दिनकर' किस रस के कवि माने जाते हैं?", options: ["श्रृंगार", "वीर", "करुण", "हास्य"], correctAnswer: 1, marks: 1, explanation: "दिनकर वीर रस के कवि हैं। उनकी प्रसिद्ध रचना 'रश्मिरथी' है।" },
      { quiz: hindiQuiz2._id, questionText: "'सूरसागर' के रचयिता कौन हैं?", options: ["तुलसीदास", "सूरदास", "कबीर", "मीरा"], correctAnswer: 1, marks: 1, explanation: "सूरदास ने 'सूरसागर' की रचना की जिसमें कृष्ण की बाल लीलाएँ हैं।" },
      { quiz: hindiQuiz2._id, questionText: "'प्रेमचंद' को क्या कहा जाता है?", options: ["कविसम्राट", "उपन्यास सम्राट", "नाटककार", "निबंधकार"], correctAnswer: 1, marks: 1, explanation: "मुंशी प्रेमचंद को 'उपन्यास सम्राट' कहा जाता है।" },
      { quiz: hindiQuiz2._id, questionText: "'छायावाद' के चार स्तंभ कौन हैं?", options: ["कबीर, सूर, तुलसी, मीरा", "प्रसाद, निराला, पंत, महादेवी", "दिनकर, बच्चन, अज्ञेय, मुक्तिबोध", "भारतेंदु, प्रताप, बालकृष्ण, प्रेमचंद"], correctAnswer: 1, marks: 1, explanation: "जयशंकर प्रसाद, निराला, पंत, महादेवी वर्मा छायावाद के चार स्तंभ हैं।" },
      { quiz: hindiQuiz2._id, questionText: "'गोदान' उपन्यास किसने लिखा?", options: ["जयशंकर प्रसाद", "प्रेमचंद", "यशपाल", "अज्ञेय"], correctAnswer: 1, marks: 1, explanation: "प्रेमचंद ने 'गोदान' लिखा जो किसान जीवन पर आधारित है।" },
      { quiz: hindiQuiz2._id, questionText: "'बिहारी' किस काल के कवि हैं?", options: ["भक्तिकाल", "रीतिकाल", "आधुनिक काल", "आदिकाल"], correctAnswer: 1, marks: 1, explanation: "बिहारी रीतिकाल के प्रसिद्ध कवि हैं जिन्होंने 'बिहारी सतसई' लिखी।" },
      { quiz: hindiQuiz2._id, questionText: "'निराला' की प्रसिद्ध कविता कौन सी है?", options: ["मधुशाला", "सरोज स्मृति", "कामायनी", "साकेत"], correctAnswer: 1, marks: 1, explanation: "'सरोज स्मृति' निराला की प्रसिद्ध शोक कविता है।" },
      { quiz: hindiQuiz2._id, questionText: "हिंदी का प्रथम महाकाव्य कौन सा माना जाता है?", options: ["रामचरितमानस", "पृथ्वीराज रासो", "कामायनी", "साकेत"], correctAnswer: 1, marks: 1, explanation: "चंदबरदाई का 'पृथ्वीराज रासो' हिंदी का प्रथम महाकाव्य माना जाता है।" },
      { quiz: hindiQuiz2._id, questionText: "'प्रगतिवाद' का मुख्य विषय क्या है?", options: ["प्रेम और सौंदर्य", "शोषण के विरुद्ध आवाज और सामाजिक समानता", "प्रकृति वर्णन", "भक्ति"], correctAnswer: 1, marks: 1, explanation: "प्रगतिवाद शोषण, गरीबी और असमानता के विरुद्ध साहित्य है।" },
      { quiz: hindiQuiz2._id, questionText: "'अज्ञेय' किस काव्यधारा के कवि हैं?", options: ["छायावाद", "प्रगतिवाद", "प्रयोगवाद", "रीतिवाद"], correctAnswer: 2, marks: 1, explanation: "सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' प्रयोगवाद के प्रवर्तक हैं।" },
    ]);

    // Subcategory 3: Formal Writing
    const hindiQuiz3 = await Quiz.create({
      title: "हिंदी लेखन - औपचारिक पत्र और निबंध",
      subject: "Hindi",
      category: "लेखन",
      chapter: "औपचारिक लेखन",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz3._id, questionText: "औपचारिक पत्र में 'विषय' का क्या महत्व है?", options: ["कोई महत्व नहीं", "पत्र का उद्देश्य स्पष्ट करता है", "सुंदरता बढ़ाता है", "शब्द बढ़ाता है"], correctAnswer: 1, marks: 1, explanation: "विषय पत्र का उद्देश्य तुरंत स्पष्ट कर देता है।" },
      { quiz: hindiQuiz3._id, questionText: "संपादक को पत्र में अंत में क्या लिखा जाता है?", options: ["आपका मित्र", "आपका आज्ञाकारी", "भवदीय/निवेदक", "प्यारे दोस्त"], correctAnswer: 2, marks: 1, explanation: "संपादक को पत्र में 'भवदीय' या 'निवेदक' लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "निबंध लेखन में 'विषय-विस्तार' में क्या होना चाहिए?", options: ["केवल परिभाषा", "तर्क, उदाहरण, आँकड़े, विभिन्न पहलू", "केवल कहानी", "केवल कविता"], correctAnswer: 1, marks: 1, explanation: "विषय-विस्तार में विभिन्न पहलुओं से तर्क और उदाहरण दिए जाते हैं।" },
      { quiz: hindiQuiz3._id, questionText: "विज्ञापन लेखन में 'पंचलाइन' का क्या काम है?", options: ["विवरण देना", "याद रहने वाला आकर्षक वाक्य", "पता बताना", "कीमत बताना"], correctAnswer: 1, marks: 1, explanation: "पंचलाइन एक आकर्षक वाक्य है जो उत्पाद को यादगार बनाता है।" },
      { quiz: hindiQuiz3._id, questionText: "अनुच्छेद लेखन और निबंध में मुख्य अंतर क्या है?", options: ["कोई अंतर नहीं", "अनुच्छेद एक पैराग्राफ, निबंध विस्तृत", "निबंध छोटा होता है", "अनुच्छेद लंबा होता है"], correctAnswer: 1, marks: 1, explanation: "अनुच्छेद एक पैराग्राफ (80-100 शब्द) में लिखा जाता है, निबंध विस्तृत होता है।" },
      { quiz: hindiQuiz3._id, questionText: "शिकायत पत्र में क्या अनिवार्य है?", options: ["केवल नाम", "समस्या का विवरण, तिथि, और समाधान की माँग", "केवल हस्ताक्षर", "केवल पता"], correctAnswer: 1, marks: 1, explanation: "शिकायत पत्र में समस्या, तिथि और समाधान की स्पष्ट माँग होनी चाहिए।" },
      { quiz: hindiQuiz3._id, questionText: "सूचना लेखन में 'किसके द्वारा' क्यों लिखा जाता है?", options: ["सुंदरता के लिए", "जिम्मेदार व्यक्ति/संस्था की पहचान के लिए", "शब्द बढ़ाने के लिए", "नियम नहीं है"], correctAnswer: 1, marks: 1, explanation: "सूचना जारी करने वाले की पहचान आवश्यक है।" },
      { quiz: hindiQuiz3._id, questionText: "ई-मेल और पत्र में मुख्य अंतर क्या है?", options: ["कोई अंतर नहीं", "ई-मेल डिजिटल और तेज, पत्र भौतिक", "पत्र तेज होता है", "ई-मेल में format नहीं होता"], correctAnswer: 1, marks: 1, explanation: "ई-मेल डिजिटल माध्यम है और तुरंत पहुँचता है, पत्र भौतिक होता है।" },
      { quiz: hindiQuiz3._id, questionText: "बोर्ड परीक्षा में निबंध की शब्द सीमा सामान्यतः कितनी होती है?", options: ["50-80", "100-120", "200-250", "500+"], correctAnswer: 2, marks: 1, explanation: "बोर्ड परीक्षा में निबंध सामान्यतः 200-250 शब्दों में लिखा जाता है।" },
      { quiz: hindiQuiz3._id, questionText: "संवाद लेखन में 'स्वाभाविकता' का क्या अर्थ है?", options: ["कठिन भाषा", "वास्तविक बातचीत जैसा लगना", "केवल प्रश्न", "केवल उत्तर"], correctAnswer: 1, marks: 1, explanation: "संवाद ऐसा होना चाहिए जैसे दो लोग वास्तव में बात कर रहे हों।" },
    ]);

    console.log("✓ Class 10 - Hindi: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10Hindi;
