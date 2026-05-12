import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsGeography = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Physical Geography - Geomorphology",
      subject: "Geography",
      category: "Physical Geography",
      chapter: "Geomorphology",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "The innermost layer of the Earth is called:", options: ["Mantle", "Core", "Crust", "Asthenosphere"], correctAnswer: 1, marks: 1, explanation: "The core is the innermost layer, composed mainly of iron and nickel." },
      { quiz: quiz1._id, questionText: "Plate tectonics theory explains:", options: ["Weather patterns", "Movement of Earth's lithospheric plates", "Ocean currents", "Soil formation"], correctAnswer: 1, marks: 1, explanation: "Plate tectonics explains how Earth's lithospheric plates move, causing earthquakes and volcanism." },
      { quiz: quiz1._id, questionText: "The Richter scale measures:", options: ["Wind speed", "Earthquake magnitude", "Temperature", "Rainfall"], correctAnswer: 1, marks: 1, explanation: "The Richter scale measures the magnitude (energy released) of earthquakes." },
      { quiz: quiz1._id, questionText: "A volcano that has not erupted in recent history but may erupt again is called:", options: ["Active", "Dormant", "Extinct", "Shield"], correctAnswer: 1, marks: 1, explanation: "Dormant volcanoes are currently inactive but have potential to erupt in the future." },
      { quiz: quiz1._id, questionText: "Fold mountains are formed by:", options: ["Volcanic activity", "Compression of tectonic plates", "Erosion", "Glaciation"], correctAnswer: 1, marks: 1, explanation: "Fold mountains form when tectonic plates collide and compress sedimentary layers." },
      { quiz: quiz1._id, questionText: "The Himalayas are an example of:", options: ["Block mountains", "Fold mountains", "Volcanic mountains", "Residual mountains"], correctAnswer: 1, marks: 1, explanation: "The Himalayas formed from the collision of Indian and Eurasian plates (fold mountains)." },
      { quiz: quiz1._id, questionText: "Weathering refers to:", options: ["Transportation of rocks", "Breaking down of rocks in situ", "Deposition of sediments", "Volcanic eruption"], correctAnswer: 1, marks: 1, explanation: "Weathering is the in-situ breakdown of rocks by physical, chemical, or biological processes." },
      { quiz: quiz1._id, questionText: "An oxbow lake is formed by:", options: ["Volcanic activity", "Meandering river cutting off a loop", "Glacial erosion", "Wind deposition"], correctAnswer: 1, marks: 1, explanation: "Oxbow lakes form when a river meander is cut off from the main channel." },
      { quiz: quiz1._id, questionText: "The Mohorovičić discontinuity separates:", options: ["Core and mantle", "Crust and mantle", "Inner and outer core", "Lithosphere and atmosphere"], correctAnswer: 1, marks: 1, explanation: "The Moho discontinuity is the boundary between Earth's crust and mantle." },
      { quiz: quiz1._id, questionText: "Delta is formed at:", options: ["Mountain top", "River mouth where it meets the sea", "River source", "Mid-course of river"], correctAnswer: 1, marks: 1, explanation: "Deltas form at river mouths where sediment is deposited as the river enters a sea or lake." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Climatology and Atmosphere",
      subject: "Geography",
      category: "Physical Geography",
      chapter: "Climatology",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "The layer of atmosphere where weather phenomena occur is:", options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"], correctAnswer: 1, marks: 1, explanation: "The troposphere (0-12 km) is where all weather phenomena occur." },
      { quiz: quiz2._id, questionText: "The ozone layer is found in which atmospheric layer?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"], correctAnswer: 1, marks: 1, explanation: "The ozone layer is located in the stratosphere (15-35 km altitude)." },
      { quiz: quiz2._id, questionText: "Coriolis effect is caused by:", options: ["Moon's gravity", "Earth's rotation", "Sun's heat", "Ocean currents"], correctAnswer: 1, marks: 1, explanation: "The Coriolis effect is caused by Earth's rotation, deflecting winds and currents." },
      { quiz: quiz2._id, questionText: "Trade winds blow from:", options: ["Poles to equator", "Sub-tropical high pressure to equatorial low pressure", "Equator to poles", "West to east"], correctAnswer: 1, marks: 1, explanation: "Trade winds blow from sub-tropical high pressure belts toward the equatorial low pressure." },
      { quiz: quiz2._id, questionText: "El Niño is associated with:", options: ["Cooling of Pacific Ocean", "Warming of eastern Pacific Ocean waters", "Arctic ice melting", "Volcanic eruptions"], correctAnswer: 1, marks: 1, explanation: "El Niño is the periodic warming of eastern Pacific Ocean surface waters." },
      { quiz: quiz2._id, questionText: "Monsoon winds are caused by:", options: ["Earth's rotation only", "Differential heating of land and sea", "Volcanic activity", "Ocean currents only"], correctAnswer: 1, marks: 1, explanation: "Monsoons result from differential heating between land and ocean creating pressure differences." },
      { quiz: quiz2._id, questionText: "Which type of rainfall occurs when air is forced to rise over a mountain?", options: ["Convectional", "Orographic", "Cyclonic", "Frontal"], correctAnswer: 1, marks: 1, explanation: "Orographic rainfall occurs when moist air is forced upward by a mountain barrier." },
      { quiz: quiz2._id, questionText: "The greenhouse effect is caused by:", options: ["Ozone depletion", "Trapping of heat by atmospheric gases like CO2", "Solar flares", "Volcanic ash"], correctAnswer: 1, marks: 1, explanation: "Greenhouse gases (CO2, methane) trap heat radiation, warming the Earth's surface." },
      { quiz: quiz2._id, questionText: "Jet streams are found in which layer?", options: ["Lower troposphere", "Upper troposphere/lower stratosphere", "Mesosphere", "Thermosphere"], correctAnswer: 1, marks: 1, explanation: "Jet streams are fast-flowing air currents in the upper troposphere (9-12 km)." },
      { quiz: quiz2._id, questionText: "The instrument used to measure atmospheric pressure is:", options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], correctAnswer: 1, marks: 1, explanation: "A barometer measures atmospheric pressure." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Human Geography and Resources",
      subject: "Geography",
      category: "Human Geography",
      chapter: "Population and Resources",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "The demographic transition model has how many stages?", options: ["3", "4", "5", "6"], correctAnswer: 2, marks: 1, explanation: "The demographic transition model has 5 stages from high birth/death rates to declining population." },
      { quiz: quiz3._id, questionText: "Population density is calculated as:", options: ["Total area / population", "Population / total area", "Birth rate - death rate", "Immigration + emigration"], correctAnswer: 1, marks: 1, explanation: "Population density = Total population divided by total area." },
      { quiz: quiz3._id, questionText: "Which country has the highest population density?", options: ["India", "Bangladesh", "Monaco", "China"], correctAnswer: 2, marks: 1, explanation: "Monaco has the highest population density among countries." },
      { quiz: quiz3._id, questionText: "Renewable resources include:", options: ["Coal and petroleum", "Solar energy and wind", "Natural gas", "Nuclear fuel"], correctAnswer: 1, marks: 1, explanation: "Solar and wind energy are renewable as they are naturally replenished." },
      { quiz: quiz3._id, questionText: "Urbanization means:", options: ["Rural development", "Increase in proportion of people living in urban areas", "Deforestation", "Industrialization only"], correctAnswer: 1, marks: 1, explanation: "Urbanization is the increasing proportion of population living in cities and towns." },
      { quiz: quiz3._id, questionText: "The concept of 'sustainable development' was popularized by:", options: ["Rio Summit 1992", "Brundtland Report 1987", "Kyoto Protocol 1997", "Paris Agreement 2015"], correctAnswer: 1, marks: 1, explanation: "The Brundtland Report (1987) defined and popularized sustainable development." },
      { quiz: quiz3._id, questionText: "Push factors of migration include:", options: ["Better jobs in cities", "Poverty and unemployment in origin area", "Good education facilities", "Better healthcare"], correctAnswer: 1, marks: 1, explanation: "Push factors are negative conditions (poverty, conflict) that force people to leave." },
      { quiz: quiz3._id, questionText: "Which sector employs the most people in developing countries?", options: ["Secondary", "Primary (agriculture)", "Tertiary", "Quaternary"], correctAnswer: 1, marks: 1, explanation: "In developing countries, the primary sector (agriculture) employs the largest workforce." },
      { quiz: quiz3._id, questionText: "The Human Development Index (HDI) measures:", options: ["Only income", "Health, education, and standard of living", "Only literacy", "Only life expectancy"], correctAnswer: 1, marks: 1, explanation: "HDI is a composite index of life expectancy, education, and per capita income." },
      { quiz: quiz3._id, questionText: "Deforestation leads to:", options: ["Increased rainfall", "Soil erosion and loss of biodiversity", "Cooler climate", "More groundwater"], correctAnswer: 1, marks: 1, explanation: "Deforestation causes soil erosion, biodiversity loss, and contributes to climate change." },
    ]);

    console.log("✓ Class 11 Arts - Geography: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsGeography };
