import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Odia Prose - Class 12",
      subject: "Odia",
      category: "Literature",
      chapter: "Prose",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Who is the author of 'Ama Katha' in Class 12 Odia textbook?", options: ["Gopinath Mohanty", "Fakir Mohan Senapati", "Manoj Das", "Pratibha Ray"], correctAnswer: 2, marks: 1, explanation: "Manoj Das is known for his storytelling in both Odia and English." },
      { quiz: quiz1._id, questionText: "Gopinath Mohanty received the Jnanpith Award in:", options: ["1970", "1973", "1980", "1985"], correctAnswer: 1, marks: 1, explanation: "Gopinath Mohanty received the Jnanpith Award in 1973 for 'Mati Matala'." },
      { quiz: quiz1._id, questionText: "Pratibha Ray's famous novel is:", options: ["Paraja", "Yajnaseni", "Chha Mana Atha Guntha", "Matira Manisha"], correctAnswer: 1, marks: 1, explanation: "Pratibha Ray wrote 'Yajnaseni' (Draupadi's story) which won the Moortidevi Award." },
      { quiz: quiz1._id, questionText: "The Sarala Award is given for excellence in:", options: ["Science", "Odia literature", "Sports", "Social service"], correctAnswer: 1, marks: 1, explanation: "The Sarala Award is a prestigious literary award for Odia literature." },
      { quiz: quiz1._id, questionText: "Who wrote 'Desa Kala Patra'?", options: ["Surendra Mohanty", "Gopinath Mohanty", "Manoj Das", "Chandrasekhar Rath"], correctAnswer: 0, marks: 1, explanation: "Surendra Mohanty was a prominent Odia novelist and essayist." },
      { quiz: quiz1._id, questionText: "The autobiography 'Ardha Satya' was written by:", options: ["Fakir Mohan Senapati", "Gopinath Mohanty", "Rabi Singh", "Nandini Satpathy"], correctAnswer: 0, marks: 1, explanation: "Fakir Mohan Senapati's autobiography provides insights into 19th century Odisha." },
      { quiz: quiz1._id, questionText: "Modern Odia drama was pioneered by:", options: ["Ramachandra Mishra", "Kalicharan Patnaik", "Manoranjan Das", "Bijay Mishra"], correctAnswer: 1, marks: 1, explanation: "Kalicharan Patnaik is considered a pioneer of modern Odia drama." },
      { quiz: quiz1._id, questionText: "'Amrutara Santana' is written by:", options: ["Manoj Das", "Gopinath Mohanty", "Pratibha Ray", "Kishori Charan Das"], correctAnswer: 0, marks: 1, explanation: "Manoj Das wrote 'Amrutara Santana' among his many literary works." },
      { quiz: quiz1._id, questionText: "The Odia Sahitya Akademi was established in:", options: ["1954", "1957", "1961", "1965"], correctAnswer: 0, marks: 1, explanation: "The Odisha Sahitya Akademi was established in 1954 to promote Odia literature." },
      { quiz: quiz1._id, questionText: "Who is known as 'Byasakabi' of Odia literature?", options: ["Sarala Das", "Jagannath Das", "Fakir Mohan", "Upendra Bhanja"], correctAnswer: 0, marks: 1, explanation: "Sarala Das is called Byasakabi for writing the Odia Mahabharata in 15th century." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Odia Poetry - Class 12",
      subject: "Odia",
      category: "Literature",
      chapter: "Poetry",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Sachi Routray's poetry is characterized by:", options: ["Only romantic themes", "Social consciousness and lyrical beauty", "Only nature poetry", "Political satire only"], correctAnswer: 1, marks: 1, explanation: "Sachi Routray combined social awareness with lyrical beauty in his poetry." },
      { quiz: quiz2._id, questionText: "Guruprasad Mohanty belongs to which literary movement?", options: ["Romantic", "Sabuja (Green) movement", "Progressive", "Post-modern"], correctAnswer: 1, marks: 1, explanation: "Guruprasad Mohanty was associated with the Sabuja movement in Odia literature." },
      { quiz: quiz2._id, questionText: "The 'Sabuja' movement in Odia literature was influenced by:", options: ["French literature", "English Romantic poetry", "Russian literature", "German philosophy"], correctAnswer: 1, marks: 1, explanation: "The Sabuja movement was influenced by English Romantic poets like Keats and Shelley." },
      { quiz: quiz2._id, questionText: "Ramakanta Rath is known for:", options: ["Novels only", "Modern experimental poetry", "Drama only", "Children's literature"], correctAnswer: 1, marks: 1, explanation: "Ramakanta Rath is a leading modern Odia poet known for experimental verse." },
      { quiz: quiz2._id, questionText: "Sitakant Mahapatra received the Jnanpith Award in:", options: ["1990", "1993", "2000", "2005"], correctAnswer: 2, marks: 1, explanation: "Sitakant Mahapatra received the Jnanpith Award in 2000 for his poetry." },
      { quiz: quiz2._id, questionText: "The 'Pragativadi' (Progressive) movement focused on:", options: ["Mythology", "Social realism and common people's struggles", "Nature only", "Spirituality"], correctAnswer: 1, marks: 1, explanation: "Progressive writers focused on social issues, poverty, and class struggle." },
      { quiz: quiz2._id, questionText: "Jayanta Mahapatra writes poetry in:", options: ["Only Odia", "English", "Hindi", "Bengali"], correctAnswer: 1, marks: 1, explanation: "Jayanta Mahapatra is a renowned Indian English poet from Odisha." },
      { quiz: quiz2._id, questionText: "Bhima Bhoi was a poet of which movement?", options: ["Sabuja", "Mahima Dharma", "Progressive", "Romantic"], correctAnswer: 1, marks: 1, explanation: "Bhima Bhoi was a saint-poet of the Mahima Dharma movement in 19th century Odisha." },
      { quiz: quiz2._id, questionText: "Radhamohan Gadanayak is known for:", options: ["Epic poetry", "Lyric and modern poetry", "Only prose", "Drama"], correctAnswer: 1, marks: 1, explanation: "Radhamohan Gadanayak contributed significantly to modern Odia lyric poetry." },
      { quiz: quiz2._id, questionText: "The literary magazine 'Jhankara' was edited by:", options: ["Sachi Routray", "Kalindi Charan Panigrahi", "Annada Shankar Ray", "Gopinath Mohanty"], correctAnswer: 1, marks: 1, explanation: "Kalindi Charan Panigrahi edited 'Jhankara', an influential Odia literary magazine." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Odia Grammar - Class 12",
      subject: "Odia",
      category: "Grammar",
      chapter: "Advanced Grammar",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "'Tatpurusha Samasa' is a type of:", options: ["Sandhi", "Compound word (Samasa)", "Alankar", "Chhanda"], correctAnswer: 1, marks: 1, explanation: "Tatpurusha is a type of Samasa where the second word is principal." },
      { quiz: quiz3._id, questionText: "'Bahubrihi Samasa' is one where:", options: ["First word is principal", "Second word is principal", "Both words refer to a third meaning", "Words are synonyms"], correctAnswer: 2, marks: 1, explanation: "In Bahubrihi, the compound refers to a third entity, not either component." },
      { quiz: quiz3._id, questionText: "'Anuprasa' alankar involves:", options: ["Comparison", "Repetition of consonant sounds", "Exaggeration", "Contrast"], correctAnswer: 1, marks: 1, explanation: "Anuprasa is alliteration — repetition of consonant sounds." },
      { quiz: quiz3._id, questionText: "'Atisayokti' alankar is:", options: ["Simile", "Hyperbole (exaggeration)", "Metaphor", "Personification"], correctAnswer: 1, marks: 1, explanation: "Atisayokti is hyperbole — deliberate exaggeration for effect." },
      { quiz: quiz3._id, questionText: "A 'Mahakavya' in Odia must have:", options: ["Only 2 cantos", "Multiple cantos with heroic theme", "Only prose", "Only dialogue"], correctAnswer: 1, marks: 1, explanation: "Mahakavya is an epic poem with multiple cantos (sargas) and a noble hero." },
      { quiz: quiz3._id, questionText: "'Dwandwa Samasa' combines:", options: ["Opposite words only", "Two words of equal importance", "Adjective and noun", "Verb and noun"], correctAnswer: 1, marks: 1, explanation: "Dwandwa combines two words of equal grammatical status (copulative compound)." },
      { quiz: quiz3._id, questionText: "'Byatireka' alankar shows:", options: ["Similarity", "Superiority of one over the compared", "Equality", "Sound repetition"], correctAnswer: 1, marks: 1, explanation: "Byatireka shows the subject as superior to the object of comparison." },
      { quiz: quiz3._id, questionText: "The 'Chhanda' (meter) in Odia poetry is based on:", options: ["Rhyme only", "Syllable count and rhythm pattern", "Meaning only", "Length of poem"], correctAnswer: 1, marks: 1, explanation: "Chhanda is determined by the number and arrangement of syllables (matra/akshara)." },
      { quiz: quiz3._id, questionText: "'Avyayibhava Samasa' has which word as principal?", options: ["Second word", "First word (indeclinable/avyaya)", "Both equal", "Neither"], correctAnswer: 1, marks: 1, explanation: "In Avyayibhava, the first word (an indeclinable) is principal." },
      { quiz: quiz3._id, questionText: "A 'Gadya Kavita' (prose poem) in Odia:", options: ["Has strict meter", "Has poetic quality without strict meter", "Is only prose", "Is only dialogue"], correctAnswer: 1, marks: 1, explanation: "Gadya Kavita has poetic imagery and rhythm but without strict metrical structure." },
    ]);

    console.log("✓ Class 12 Science - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceOdia };
