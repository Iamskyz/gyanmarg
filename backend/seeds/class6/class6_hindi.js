import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6Hindi = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Hindi - Subcategory 1: व्याकरण (Grammar)
    const hindiQuiz1 = await Quiz.create({
      title: "हिंदी व्याकरण - संज्ञा और सर्वनाम",
      subject: "Hindi",
      category: "व्याकरण",
      chapter: "शब्द भेद",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: hindiQuiz1._id,
        questionText: "संज्ञा किसे कहते हैं?",
        options: ["काम के नाम को", "व्यक्ति, वस्तु, स्थान के नाम को", "गुण के नाम को", "क्रिया के नाम को"],
        correctAnswer: 1,
        marks: 1,
        explanation: "संज्ञा किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को कहते हैं।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "इनमें से कौन सा व्यक्तिवाचक संज्ञा है?",
        options: ["लड़का", "शहर", "दिल्ली", "किताब"],
        correctAnswer: 2,
        marks: 1,
        explanation: "दिल्ली एक व्यक्तिवाचक संज्ञा है क्योंकि यह किसी विशेष स्थान का नाम है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "'बच्चा' का बहुवचन क्या है?",
        options: ["बच्चे", "बच्चों", "बच्चा", "बच्चियाँ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'बच्चा' का बहुवचन 'बच्चे' होता है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "सर्वनाम का काम क्या है?",
        options: ["संज्ञा की जगह आना", "क्रिया बताना", "गुण बताना", "समय बताना"],
        correctAnswer: 0,
        marks: 1,
        explanation: "सर्वनाम संज्ञा की जगह आता है और संज्ञा की पुनरावृत्ति से बचाता है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "इनमें से कौन सा सर्वनाम है?",
        options: ["राम", "अच्छा", "वह", "दौड़ना"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'वह' एक सर्वनाम है जो किसी व्यक्ति या वस्तु के लिए प्रयोग होता है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "'खुशी' किस प्रकार की संज्ञा है?",
        options: ["जातिवाचक", "व्यक्तिवाचक", "भाववाचक", "समूहवाचक"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'खुशी' एक भाववाचक संज्ञा है क्योंकि यह एक भावना का नाम है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "'लड़की' का बहुवचन क्या है?",
        options: ["लड़कियाँ", "लड़कियों", "लड़की", "लड़के"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'लड़की' का बहुवचन 'लड़कियाँ' होता है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "इनमें से कौन सा समूहवाचक संज्ञा है?",
        options: ["फूल", "माला", "पेड़", "पत्ता"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'माला' समूहवाचक संज्ञा है क्योंकि यह फूलों के समूह को दर्शाती है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "'मैं' कौन सा सर्वनाम है?",
        options: ["उत्तम पुरुष", "मध्यम पुरुष", "अन्य पुरुष", "निश्चयवाचक"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'मैं' उत्तम पुरुष सर्वनाम है जो बोलने वाले के लिए प्रयोग होता है।",
      },
      {
        quiz: hindiQuiz1._id,
        questionText: "'पानी' का बहुवचन क्या है?",
        options: ["पानियाँ", "पानी", "जल", "पानियों"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'पानी' का बहुवचन भी 'पानी' ही होता है, यह अपरिवर्तनीय है।",
      },
    ]);

    // Hindi - Subcategory 2: गद्य और पद्य (Prose and Poetry)
    const hindiQuiz2 = await Quiz.create({
      title: "हिंदी साहित्य - कहानी और कविता",
      subject: "Hindi",
      category: "साहित्य",
      chapter: "गद्य और पद्य",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: hindiQuiz2._id,
        questionText: "कहानी के मुख्य तत्व कौन से हैं?",
        options: ["केवल पात्र", "पात्र, कथानक, संवाद", "केवल संवाद", "केवल कथानक"],
        correctAnswer: 1,
        marks: 1,
        explanation: "कहानी के मुख्य तत्व हैं - पात्र, कथानक, संवाद, देशकाल और भाषा।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "कविता में तुकबंदी का क्या महत्व है?",
        options: ["कोई महत्व नहीं", "सुंदरता और लय बढ़ाती है", "केवल शब्द बढ़ाती है", "समझना कठिन बनाती है"],
        correctAnswer: 1,
        marks: 1,
        explanation: "तुकबंदी कविता में सुंदरता और लय बढ़ाती है, जिससे कविता मधुर लगती है।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "गद्य किसे कहते हैं?",
        options: ["तुकबंदी वाली भाषा", "बिना तुकबंदी की सामान्य भाषा", "केवल कविता", "केवल नाटक"],
        correctAnswer: 1,
        marks: 1,
        explanation: "गद्य बिना तुकबंदी की सामान्य भाषा है जिसमें कहानी, निबंध आदि लिखे जाते हैं।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "कविता की पंक्ति को क्या कहते हैं?",
        options: ["वाक्य", "पंक्ति", "चरण", "शब्द"],
        correctAnswer: 2,
        marks: 1,
        explanation: "कविता की पंक्ति को 'चरण' कहते हैं।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "कहानी का मुख्य पात्र क्या कहलाता है?",
        options: ["नायक या नायिका", "सहायक पात्र", "खलनायक", "दर्शक"],
        correctAnswer: 0,
        marks: 1,
        explanation: "कहानी का मुख्य पात्र नायक या नायिका कहलाता है।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "छंद किसे कहते हैं?",
        options: ["गद्य को", "नियमबद्ध कविता को", "कहानी को", "नाटक को"],
        correctAnswer: 1,
        marks: 1,
        explanation: "छंद नियमबद्ध कविता को कहते हैं जिसमें मात्रा और तुक का नियम होता है।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "कहानी में घटनाओं के क्रम को क्या कहते हैं?",
        options: ["पात्र", "कथानक", "संवाद", "शीर्षक"],
        correctAnswer: 1,
        marks: 1,
        explanation: "कहानी में घटनाओं के क्रम को कथानक कहते हैं।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "दोहा में कितनी पंक्तियाँ होती हैं?",
        options: ["एक", "दो", "तीन", "चार"],
        correctAnswer: 1,
        marks: 1,
        explanation: "दोहा में दो पंक्तियाँ होती हैं और यह एक प्रसिद्ध छंद है।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "कविता में भावों को व्यक्त करने के लिए क्या प्रयोग होता है?",
        options: ["केवल शब्द", "अलंकार और बिंब", "केवल तुक", "केवल छंद"],
        correctAnswer: 1,
        marks: 1,
        explanation: "कविता में भावों को व्यक्त करने के लिए अलंकार और बिंब का प्रयोग होता है।",
      },
      {
        quiz: hindiQuiz2._id,
        questionText: "मुहावरे का क्या अर्थ है?",
        options: ["सामान्य वाक्य", "विशेष अर्थ वाले वाक्यांश", "केवल शब्द", "प्रश्न वाक्य"],
        correctAnswer: 1,
        marks: 1,
        explanation: "मुहावरे विशेष अर्थ वाले वाक्यांश हैं जिनका अर्थ शब्दों के सामान्य अर्थ से अलग होता है।",
      },
    ]);

    // Hindi - Subcategory 3: लेखन कौशल (Writing Skills)
    const hindiQuiz3 = await Quiz.create({
      title: "हिंदी लेखन - पत्र और निबंध",
      subject: "Hindi",
      category: "लेखन",
      chapter: "रचनात्मक लेखन",
      grade: 6,
      difficulty: "easy",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      {
        quiz: hindiQuiz3._id,
        questionText: "पत्र के मुख्य भाग कौन से हैं?",
        options: ["केवल संबोधन", "दिनांक, संबोधन, विषय, मुख्य भाग, समापन", "केवल हस्ताक्षर", "केवल पता"],
        correctAnswer: 1,
        marks: 1,
        explanation: "पत्र के मुख्य भाग हैं - दिनांक, संबोधन, विषय, मुख्य भाग और समापन।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "औपचारिक पत्र में किसका प्रयोग होता है?",
        options: ["आप", "तुम", "तू", "कोई भी"],
        correctAnswer: 0,
        marks: 1,
        explanation: "औपचारिक पत्र में सम्मानजनक 'आप' का प्रयोग होता है।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "निबंध की शुरुआत कैसे करनी चाहिए?",
        options: ["अंत से", "रोचक प्रस्तावना से", "निष्कर्ष से", "बीच से"],
        correctAnswer: 1,
        marks: 1,
        explanation: "निबंध की शुरुआत रोचक प्रस्तावना से करनी चाहिए जो पाठक का ध्यान आकर्षित करे।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "वाक्य में कम से कम क्या होना चाहिए?",
        options: ["केवल संज्ञा", "संज्ञा और क्रिया", "केवल क्रिया", "केवल विशेषण"],
        correctAnswer: 1,
        marks: 1,
        explanation: "वाक्य में कम से कम संज्ञा (कर्ता) और क्रिया होनी चाहिए।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "अनुच्छेद (पैराग्राफ) में क्या होना चाहिए?",
        options: ["एक ही विषय के वाक्य", "अलग-अलग विषय", "केवल एक वाक्य", "कोई नियम नहीं"],
        correctAnswer: 0,
        marks: 1,
        explanation: "अनुच्छेद में एक ही विषय से संबंधित वाक्य होने चाहिए।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "विराम चिह्न का प्रयोग क्यों करते हैं?",
        options: ["सुंदरता के लिए", "वाक्य को स्पष्ट करने के लिए", "शब्द बढ़ाने के लिए", "कोई कारण नहीं"],
        correctAnswer: 1,
        marks: 1,
        explanation: "विराम चिह्न का प्रयोग वाक्य को स्पष्ट करने और अर्थ समझाने के लिए करते हैं।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "प्रश्नवाचक वाक्य के अंत में कौन सा चिह्न लगता है?",
        options: ["पूर्ण विराम (.)", "प्रश्न चिह्न (?)", "विस्मयादिबोधक (!)", "अल्प विराम (,)"],
        correctAnswer: 1,
        marks: 1,
        explanation: "प्रश्नवाचक वाक्य के अंत में प्रश्न चिह्न (?) लगता है।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "अच्छे लेखन के लिए क्या आवश्यक है?",
        options: ["केवल बड़े शब्द", "स्पष्टता और सरलता", "केवल कठिन भाषा", "केवल लंबे वाक्य"],
        correctAnswer: 1,
        marks: 1,
        explanation: "अच्छे लेखन के लिए स्पष्टता और सरलता आवश्यक है।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "पत्र में दिनांक कहाँ लिखा जाता है?",
        options: ["अंत में", "बीच में", "शुरुआत में", "कहीं भी"],
        correctAnswer: 2,
        marks: 1,
        explanation: "पत्र में दिनांक शुरुआत में, सबसे ऊपर दाईं ओर लिखा जाता है।",
      },
      {
        quiz: hindiQuiz3._id,
        questionText: "निबंध का समापन कैसे करना चाहिए?",
        options: ["अचानक रोक देना", "उचित निष्कर्ष के साथ", "नया विषय शुरू करना", "प्रश्न पूछना"],
        correctAnswer: 1,
        marks: 1,
        explanation: "निबंध का समापन उचित निष्कर्ष के साथ करना चाहिए जो मुख्य बात को सारांशित करे।",
      },
    ]);

    console.log("✓ Class 6 - Hindi: 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6Hindi;
