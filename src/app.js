require("dotenv").config();
var natural = require('natural');
const exphbs = require('hbs');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000
const http = require("http").Server(app);
// app.set('views', 'AICHATAPP/src/views');

// const Register=require("./models/users");
const static_path = path.join(__dirname, "../public");
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(static_path));
// app.set("view engine", "hbs");
// app.set("view engine");
var cors = require("cors");
var { Socket } = require("socket.io");
var io = require( 'socket.io' )( http );


let stream = require( '../public/ws/stream' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/videoassets', express.static( path.join( __dirname, 'videoassets' ) ) );

app.set("view engine", "hbs");


io.of( '/stream' ).on( 'connection', stream );
// var ownuserid=4;
app.get("/", (req, res) => {
  // res.send("hello")
  res.render("index");
});
app.get("/profile", (req, res) => {
  // res.send("hello")
  res.render("profile");
});app.get("/index", (req, res) => {
  // res.send("hello")
  res.render("index");
});



// const express = require('express');

const multer = require('multer');
// const path = require('path');

// const app = express();
// const port = 6000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/medicalimages');
  },
  filename: function (req, file, cb) {
    cb(null, 'prescription.jpeg');
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('fileInput'), (req, res) => {
  // res.send('File uploaded!');

  var Tesseract = require('tesseract.js');

  Tesseract.recognize('./public/medicalimages/prescription.jpeg')
    .then(function(result) {
      var text=result.data.text;
      var regex = /[^a-z0-9]/gi;
      var newStr = text.replace(regex, ' ');
      
      console.log("hi"+newStr);
      originalarray=newStr.split(' ');
    });
    setTimeout(() => {

    var medicinearray=[];
    var s="Congratulation your medicine is booked!here are the list<hr>",sum=0;
      // var hitted=0;
    for (var k = 0; k < originalarray.length; k++) {
      for (var j = 0; j < medicines.length; j++) {
      // console.log(originalarray[k]);
// console.log(doctors[j].name);
// console.log("hitted"+originalarray[k]);          
if (metaphone.compare(medicines[j].name, originalarray[k])  ) {
            // selecteddoctor =   "DR. "+doctors[j].name+" "+doctors[j].title;
             s=s+medicines[j].name+" : "+medicines[j].price+"("+medicines[j].providers+")<hr>";
             sum=sum+parseInt(medicines[j].price);
            // medicinearray.push(s);
          }
           
        }
        
      }
      if(s==""){
        s="Sorry to say I have not found any medicine according to your prescription"
      }
      else{
      s=s+"total price : "+sum;
        
      }
      // var content="";
      // console.log(medicinearray);
  //  var object ={"message":"your medicines order are ready","medicine":1,};
   res.json(s);

  }, 5000);
  

});








// const bodyParser = require("body-parser");










































// var natural = require('natural');
// var input = "i want to visit a doctor dr suraj on tomorrow";
// var original=input;

// var originalarray=input.split(' ');

var sense=[
  {
  "sense":"positive",
  "message": [
      "Great job! Stay healthy.",
      "You're doing well! Keep it up.",
      "Fantastic progress! Stay positive.",
      "Well done! Take care.",
      "Awesome! Stay strong.",
      "Keep going! You're amazing.",
      "Good work! Stay well.",
      "Bravo! Stay positive.",
      "Excellent! Take good care.",
      "You're on track! Keep going."
    ],
  },
  {
      "sense":"negative",
      "message":[
          "Sorry to hear that.",
          "Take it easy. Breathe.",
          "It's okay, we understand.",
          "We're here to help.",
          "Don't worry, we care.",
          "Things will improve.",
          "Hang in there, okay?",
          "Let's address this together.",
          "Take your time, we're here.",
          "We're with you, stay strong."
        ],
      
  },{
      "sense":"nothing",
      "message":[
          "Understood. ",
          "Noted. How can I assist?",
          "Okay. ",
          "I see. ",
          "Got it. ",
          "Alright. How may I help?",
          "Noted. Let's continue.",
          "Sure. What's on your mind?",
          "I understand. ",
          "Okay. "
        ],
      
  }
];

var text=[
  {
    "name": "default",
    "keywords": ' Hello Hi hey hiya howdy yo ho  meet What name how chatbot',
    "message": [
      "👋 Welcome to [Chatbot's Name]! Your virtual assistant for personalized assistance and information.",
      "🌐 Explore a range of features – from answering questions to setting reminders. [Chatbot's Name] is here to make your life easier!",
      "💬 Chat with [Chatbot's Name] anytime! Whether it's advice, information, or just a friendly chat, I'm here for you.",
      "🛠️ Need a solution? [Chatbot's Name] excels at  -solving. Describe the issue, and let's find a resolution together.",
      "🧠 Quick and reliable! [Chatbot's Name] fetches information efficiently. Ask me anything, and I'll provide the details you need.",
      "🌟 Tailored just for you! [Chatbot's Name] learns and adapts to your preferences, offering a personalized experience every time we chat.",
      "🌈 Hi there! [Chatbot's Name] here to brighten your day and assist you with any questions or tasks you have.",
      "⚙️ Streamline your tasks with [Chatbot's Name]. From setting reminders to sending notifications, I'm your automation ally.",
      "📚 [Chatbot's Name] is always learning! Expect even smarter responses and improved assistance as we continue our conversation.",
      "🤖 Your tech-savvy friend! [Chatbot's Name] is here to navigate the digital landscape with you, making technology more accessible and enjoyable."
    ],
  },

  {
    "name": "introduction",
    "keywords": ' Hello Hi hey hiya howdy yo ho',
    "message": [' Welcome to Med-AI, your health companion. Let`s embark on a journey towards a healthier and happier you!',
      '🌐 Explore a range of features by asking about symptoms, medications, appointments, and more. Let`s work together to keep you informed and healthy!',
      ` Good to see you!   free to ask about your recent lab results, track your medications, or even schedule your next appointment with a simple command.`,
      `🩺 Hi there! Interested in a quick health assessment? I can help you check your vitals, monitor your wellness, and provide personalized health tips.`,
      `🚀 Step into the future of healthcare with Med-AI. We're bringing innovation and convenience to your health journey. Let's make every interaction count!`,
      `🌱 Welcome to Med-AI, where we empower you to make informed health choices. Your well-being is a journey, and we're here to guide you every step of the way.`,
      `🤖 Med-AI puts healthcare at your fingertips. From information to appointments, it's all just a chat away. Let's get started!`,
      `📊 Dive into real-time health insights! Med-AI keeps you informed and aware. Ask about your health metrics, and let's track progress together.`,
      `🌿 Embrace holistic well-being with Med-AI. From physical health to mental wellness, we've got you covered. Let's start this journey together!`,
      `🌐 Welcome to the future of healthcare! Med-AI combines cutting-edge technology with medical expertise to bring you personalized and efficient care.`,
      `📚 Knowledge is key to good health! Med-AI provides accurate and up-to-date information. Let's ensure you stay informed on your wellness journey.`,

    ],
  },
  {
    "name": "end",
    "keywords": `Bye Thank end tata later leave stop Goodbye Farewell Byebye Goodnight Adios`,
    "message": ['Okay sure hope it has been a useful and informative conversation',
      'See you soon enjoy the features and never hesitate to ask for queries',
      'Yes sure no   I am always available. See you around soon',
      'Hope the chat was meaningful and your queries were answered satisfactorily ',
      ' It was a pleasure to chat with you. Be healthy,be fit',
      'Bye! Hoping to chat with you soon. Till then, keep using Med AI- your personal health companion',
      'Goodbye! Hope you enjoyed the chat and your query was cleared to the best of your interests',
      'It was a joy chatting with you. Stay fit and healthy using Med-AI. And for any information, you are most welcome to ask me. I will be happy to help.'
    ],

  }
  
  ,{
    "name":"appointment",
    "keywords":" Medical consult consultation Clinical schedule visit Scheduling  healthcare appointment appoint online checkup offline doctor visit See  doctor appointment  physician medical",
    "message":"",

},
{
  "name":"features",
  "keywords":"Aspect trait peculiarity details Resources emphasize Tool ",
  "message": '',

},
{
  "name":"thanking",
  "keywords":"Appreciate Thank you Thanks Pleased Glad Awesome I got this I   better i am glad great to see good to know ",
  "message": [" You're doing great! ",
  "We're proud of your commitment to your health.",
  "Thank you for using our app! We're happy to be a part of your journey.",
  "This made our day! Your progress is inspiring.",
  "Great! You're taking control of your health."
  ],

},
{
  "name":"angry",
  "keywords":"Frustrated  agitated angry angry   stressed out   out of place out of my mind Exasperated high temper on the edge of frustration Tempers running high Under pressure Strained overwhelmed Unsettled",
  "message": [
    "Stay attentive to both physical and emotional signals, take breaks to regain composure, and practice deep breathing for a sense of calmness.",
    "Be aware of signs indicating rising anger, step away to cool down, and engage in slow, deep breaths to manage emotional responses effectively.",
    "Identify specific triggers provoking anger, practice taking breaks to avoid impulsive reactions, and incorporate deep-breathing exercises for a more composed mindset.",
    "Recognize both physical and emotional cues, step back to diffuse escalating tension, and express frustrations assertively using 'I' statements to foster effective communication.",
    "Cultivate self-awareness by identifying situations triggering anger, incorporating breaks for reflection, and utilizing deep-breathing techniques to promote a calm and collected response."

  ],

},
{
  "name":"sorry",
  "keywords":"My apologies sincere apologies sorry to hear that i apologize i didn't understand i was confused ",
  "message": ["My apologies for the inconvenience. Is there anything I can do to help?",
      "I apologize for the miscommunication. Let me try again.",
      "I understand your frustration, and I'm here to help you find a solution.",
      "It's completely okay, everyone makes mistakes. Let's try again together.",
      "Let's fix this together! What can I do to get you back on track?",
      "Let me make it up to you. Is there anything I can do to improve your experience?",
      "No worries, let's try again. How can I be more helpful this time?",
      "Oops, my bad! Let me try that again."
  ],

},
{
  "name":"happy",
  "keywords":"Delighted glad Pleased Thriving Embrace Cherish i am delightful   energized i   great happy happiness joyful happiness happi happy happy ",
  "message": ["I'm thrilled to hear you're   better!",
      "It's good to hear you're   content and healthy.",
      "I'm so happy that you made progress towards your goals!",
      "That's a smile-worthy update! Keep it up!",
      "Your progress is exciting! We're proud of you.",
      "It's fantastic to see you thriving! Stay on track.",
      "Your progress inspires us! Keep motivating yourself.",
      "Get pumped for a healthy future! You've got this!",
      "High fives for taking great care of yourself!"
  ],

},
{
  "name":"boredom",
  "keywords":"Monotony Dullness Restlessness Slog i don't   like getting up it's the same every day it's boring staleness stale life bored bore boredom boring bore bored boring ",
  "message": ["Discover new hobbies or revisit old ones. Whether it's painting, writing, playing a musical instrument, or gardening, finding activities that you enjoy can be fulfilling.",
  "Pick up a book you've been wanting to read or explore new genres. Reading is a great way to escape and stimulate your mind.","Solve puzzles, play board games, or engage in video games. These activities can be both entertaining and intellectually stimulating.",
  "Spend time outdoors, whether it's a walk in the park, hiking, or simply enjoying the beauty of nature.","Practice mindfulness or meditation to calm your mind and increase your awareness of the present moment.",
  "Take an online course or attend workshops to learn new skills. Many platforms offer courses in various subjects, allowing you to expand your knowledge.",
  "Try engaging in physical activity.hysical activity is not only good for your health but also helps combat boredom. Try different forms of exercise, such as walking, jogging, cycling, yoga, or dancing.",
  "If possible, plan a trip or explore new places in your local area. Changing your surroundings can be refreshing."

  ],

},
{
  "name":"sad",
  "keywords":"Down Discouraged Blue saddistic saddy Frustrated Overwhelmed Heavyhearted sad  Heavyhearted Aching Drained Unsettled sad sad sad  ",
  "message": ["It sounds like you're   down. Is there anything I can do to help?",
      "I hear you're   a bit blue today. Remember, everyone has tough days.",
      "Are you   frustrated with your progress? Let's find solutions together.",
      "It's okay to   overwhelmed sometimes. What can I do to lighten the load?",
      "It sounds like you're carrying a heavy heart. What's weighing on you?",
      "Are you   tense or on edge? Take a deep breath and let's talk.",
      "Something seems to be unsettling you. Can you tell me more about it?",
      "It sounds like you might need a break. What can I do to ease your burden?",
      "  lost is common. Can we explore some resources together?"
  ],

},
{
  "name":"allergies",
  "keywords":"Hypersensitivity sensitivity allergy allergi Sensitivities adverse reactions allergies allergy allergies rashes ",
  "message":["Having allergies? Let's assess your symptoms.Determine the specific allergens triggering your symptoms and take steps to minimize exposure. This may involve avoiding certain foods, using allergen-proof bedding, or reducing exposure to pollen or pet dander.leukotriene modifiers, such as montelukast (Singulair), may be prescribed to help manage allergic reactions.Immunotherapy involves receiving injections of allergens over time to desensitize the immune system. This is typically recommended for individuals with severe allergies that do not respond well to other treatments.Stay well-hydrated, maintain a healthy lifestyle, and ensure good nutrition to support your overall immune system.For individuals with severe allergies, especially to foods, insects, or certain medications, having an epinephrine auto-injector (such as an EpiPen) is crucial in case of an anaphylactic reaction. Consult with your healthcare provider to determine if you need an epinephrine prescription.",
  "Think you might have an allergy? Here's what to do.Determine the specific allergens triggering your symptoms and take steps to minimize exposure. This may involve avoiding certain foods, using allergen-proof bedding, or reducing exposure to pollen or pet dander.leukotriene modifiers, such as montelukast (Singulair), may be prescribed to help manage allergic reactions.Immunotherapy involves receiving injections of allergens over time to desensitize the immune system. This is typically recommended for individuals with severe allergies that do not respond well to other treatments.Stay well-hydrated, maintain a healthy lifestyle, and ensure good nutrition to support your overall immune system.For individuals with severe allergies, especially to foods, insects, or certain medications, having an epinephrine auto-injector (such as an EpiPen) is crucial in case of an anaphylactic reaction. Consult with your healthcare provider to determine if you need an epinephrine prescription.",
  "Worried about your symptoms? Let's Seek medical advice.Determine the specific allergens triggering your symptoms and take steps to minimize exposure. This may involve avoiding certain foods, using allergen-proof bedding, or reducing exposure to pollen or pet dander.leukotriene modifiers, such as montelukast (Singulair), may be prescribed to help manage allergic reactions.Immunotherapy involves receiving injections of allergens over time to desensitize the immune system. This is typically recommended for individuals with severe allergies that do not respond well to other treatments.Stay well-hydrated, maintain a healthy lifestyle, and ensure good nutrition to support your overall immune system.For individuals with severe allergies, especially to foods, insects, or certain medications, having an epinephrine auto-injector (such as an EpiPen) is crucial in case of an anaphylactic reaction. Consult with your healthcare provider to determine if you need an epinephrine prescription.",
  "Need tips for managing your cold/flu? I'm here to help.Determine the specific allergens triggering your symptoms and take steps to minimize exposure. This may involve avoiding certain foods, using allergen-proof bedding, or reducing exposure to pollen or pet dander.leukotriene modifiers, such as montelukast (Singulair), may be prescribed to help manage allergic reactions.Immunotherapy involves receiving injections of allergens over time to desensitize the immune system. This is typically recommended for individuals with severe allergies that do not respond well to other treatments.Stay well-hydrated, maintain a healthy lifestyle, and ensure good nutrition to support your overall immune system.For individuals with severe allergies, especially to foods, insects, or certain medications, having an epinephrine auto-injector (such as an EpiPen) is crucial in case of an anaphylactic reaction. Consult with your healthcare provider to determine if you need an epinephrine prescription."]
},
{
  "name":"flu",
  "keywords":"Sniffles sneezes cruddy Bugged down Influenza-like illness Runny nose cough   feverish sore throat aching muscle fatigue headache congestion viral",
  "message": ["  unwell? Let's assess your symptoms.",
      "Think you might have a cold/flu? Here's what to do.Drink plenty of fluids, such as water, herbal teas, and clear broths.Decongestants and antihistamines may help alleviate nasal congestion and sneezing.Gargle with Saltwater.Use Nasal Saline Drops",
      "Worried about your symptoms? Let's Seek medical advice.Drink plenty of fluids, such as water, herbal teas, and clear broths.Decongestants and antihistamines may help alleviate nasal congestion and sneezing.Gargle with Saltwater.Use Nasal Saline Drops",
      "Need tips for managing your cold/flu? I'm here to help.Drink plenty of fluids, such as water, herbal teas, and clear broths.Decongestants and antihistamines may help alleviate nasal congestion and sneezing.Gargle with Saltwater.Use Nasal Saline Drops",
  "Want to know when to see a doctor? I can guide you.Drink plenty of fluids, such as water, herbal teas, and clear broths.Decongestants and antihistamines may help alleviate nasal congestion and sneezing.Gargle with Saltwater.Use Nasal Saline Drops"
  ],

},
{
  "name":"eye",
  "keywords":"visual disturbance   vision   impairment itchiness redness swelling rubby eyes eye eye eye eye eye inflammation inflamatory blurry eyes ei ei sight ",
  "message": ["Concerned about your vision? Let's see how I can help.Avoid rubbing your eyes.Apply warm compresses to the affected eye several times a day.Rinse your eyes with clean, cool water.Every 20 minutes, look at something 20 feet away for at least 20 seconds.",
      "Experiencing any visual disturbances? We can connect you with resources.Avoid rubbing your eyes.Apply warm compresses to the affected eye several times a day.Rinse your eyes with clean, cool water.Every 20 minutes, look at something 20 feet away for at least 20 seconds.",
      "Can you a little more insight about the symtomps?Avoid rubbing your eyes.Apply warm compresses to the affected eye several times a day.Rinse your eyes with clean, cool water.Every 20 minutes, look at something 20 feet away for at least 20 seconds.",
      "Need information about specific eye conditions? I'm here to guide you.Avoid rubbing your eyes.Apply warm compresses to the affected eye several times a day.Rinse your eyes with clean, cool water.Every 20 minutes, look at something 20 feet away for at least 20 seconds.",
      "Want tips for healthy eyes? I have expert advice to share.Avoid rubbing your eyes.Apply warm compresses to the affected eye several times a day.Rinse your eyes with clean, cool water.Every 20 minutes, look at something 20 feet away for at least 20 seconds.",
      "Remember, if you have severe or worsening symptoms, seek immediate medical attention.Avoid rubbing your eyes.Apply warm compresses to the affected eye several times a day.Rinse your eyes with clean, cool water.Every 20 minutes, look at something 20 feet away for at least 20 seconds."
  ],

},
{
  "name":"fever",
  "keywords":"illness Runny nose cough feverish sore throat viral fever fever fever fever  Running a temperature Burning up Having chills sweats Hyperthermia rapid change in temperature",
  "message": ["Worried about your temperature? Let's assess your symptoms. Keep a thermometer near you.Get adequate sleep to support your immune system.Take a lukewarm bath or apply a cool compress to the forehead, neck, and armpits.Medications like acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) can help reduce fever",
      "  feverish? Here are some tips for managing your fever.Get adequate sleep to support your immune system.Take a lukewarm bath or apply a cool compress to the forehead, neck, and armpits.Medications like acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) can help reduce fever",
      "Need information about fevers? I'm here to guide you.Get adequate sleep to support your immune system.Take a lukewarm bath or apply a cool compress to the forehead, neck, and armpits.Medications like acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) can help reduce fever",
      "Remember, if your fever is high or persistent, seek medical attention.Get adequate sleep to support your immune system.Take a lukewarm bath or apply a cool compress to the forehead, neck, and armpits.Medications like acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) can help reduce fever ",

  ],

}
,{
  "name":"brain",
  "keywords":"Brain Cognitive Neurological conditions Memory issues Thinking differently   brain foggy Something  s off in my head doing same thing over and over again attention    irritated angered unstable",
  "message": ["Concerned about your mental health? don't worry! Let's explore together.",
      "Experiencing memory issues? We can connect you with resources.Treatment may include emergency care, surgery, rehabilitation, and ongoing therapies.Treatment may involve medication management, physical therapy, lifestyle modifications",
      "Having Issues regarding attention and focus? Call with our experts anytime.Treatment may include emergency care, surgery, rehabilitation, and ongoing therapies.Treatment may involve medication management, physical therapy, lifestyle modifications",
      "Want tips for maintaining healthy brain function? I have expert advice to share.Treatment may include emergency care, surgery, rehabilitation, and ongoing therapies.Treatment may involve medication management, physical therapy, lifestyle modifications",
      "Remember, if you have severe or worsening symptoms, seek immediate medical attention.Treatment may include emergency care, surgery, rehabilitation, and ongoing therapies.Treatment may involve medication management, physical therapy, lifestyle modifications",
  "Need information about specific neurological conditions? I'm here to guide you.Treatment may include emergency care, surgery, rehabilitation, and ongoing therapies.Treatment may involve medication management, physical therapy, lifestyle modifications"
  ],

}
,{
  "name":"bone",
  "keywords":"Skeletal  Musculoskeletal  Orthopedic  Aches  bones joints feet posture Fractures joint inflammation bone bones bone bones bone",
  "message": ["Concerned about your bone health? Let's assess your symptoms.",
      "Can you specify your a little bit more?Seek immediate medical attention for fractures or significant bone injuries.",
      "having joint and muscle pain? Limit your physical activities for a while.Seek immediate medical attention for fractures or significant bone injuries.Treatment may involve immobilization with casts, splints, or braces.Treatment may involve medications (nonsteroidal anti-inflammatory drugs or disease-modifying antirheumatic drugs), physical therapy, and lifestyle changes.Physical therapy can be beneficial for various bone and joint issues, helping to improve mobility, strength, and function.Treatment may include calcium and vitamin D supplements, lifestyle modifications (such as weight-bearing exercises), and medications that help strengthen bones and prevent further bone loss.",
      "Experiencing aches & pains? We can connect you with resources.Seek immediate medical attention for fractures or significant bone injuries.Treatment may involve immobilization with casts, splints, or braces.Treatment may involve medications (nonsteroidal anti-inflammatory drugs or disease-modifying antirheumatic drugs), physical therapy, and lifestyle changes.Physical therapy can be beneficial for various bone and joint issues, helping to improve mobility, strength, and function.Treatment may include calcium and vitamin D supplements, lifestyle modifications (such as weight-bearing exercises), and medications that help strengthen bones and prevent further bone loss.",
      "Need information about specific bone conditions across your body? I'm here to guide you.Seek immediate medical attention for fractures or significant bone injuries.Treatment may involve immobilization with casts, splints, or braces.Treatment may involve medications (nonsteroidal anti-inflammatory drugs or disease-modifying antirheumatic drugs), physical therapy, and lifestyle changes.Physical therapy can be beneficial for various bone and joint issues, helping to improve mobility, strength, and function.Treatment may include calcium and vitamin D supplements, lifestyle modifications (such as weight-bearing exercises), and medications that help strengthen bones and prevent further bone loss.",
      "Want tips for healthy bones & joints? I have expert advice to share.Seek immediate medical attention for fractures or significant bone injuries.Treatment may involve immobilization with casts, splints, or braces.Treatment may involve medications (nonsteroidal anti-inflammatory drugs or disease-modifying antirheumatic drugs), physical therapy, and lifestyle changes.Physical therapy can be beneficial for various bone and joint issues, helping to improve mobility, strength, and function.Treatment may include calcium and vitamin D supplements, lifestyle modifications (such as weight-bearing exercises), and medications that help strengthen bones and prevent further bone loss.",
  "Remember, if your pain is severe or persistent, seek immediate medical attention.Seek immediate medical attention for fractures or significant bone injuries.Treatment may involve immobilization with casts, splints, or braces.Treatment may involve medications (nonsteroidal anti-inflammatory drugs or disease-modifying antirheumatic drugs), physical therapy, and lifestyle changes.Physical therapy can be beneficial for various bone and joint issues, helping to improve mobility, strength, and function.Treatment may include calcium and vitamin D supplements, lifestyle modifications (such as weight-bearing exercises), and medications that help strengthen bones and prevent further bone loss."
  ],

}
,{
  "name":"scratch",
  "keywords":"Redness Swelling Infection Scarring Swollen and painful lymph nodes.",
  "message":["Concerned about your scratches? Let's explore your symptoms together.Clean the scratch gently with mild soap and water. Avoid using harsh substances like hydrogen peroxide, as they can damage healthy tissue.Apply an over-the-counter antiseptic ointment or cream to help prevent infection. Common options include Neosporin or Polysporin.Cover the scratch with a sterile bandage or dressing to protect it from dirt and bacteria.Apply a hypoallergenic, fragrance-free moisturizer to keep the skin around the scratch hydrated.Keep an eye on the scratched area for signs of infection, such as increased redness, swelling, warmth, or the presence of pus. If infection is suspected, seek medical attention.",
  "Want to get informed about your scratches? We can certainly help you in that.Clean the scratch gently with mild soap and water. Avoid using harsh substances like hydrogen peroxide, as they can damage healthy tissue.Apply an over-the-counter antiseptic ointment or cream to help prevent infection. Common options include Neosporin or Polysporin.Cover the scratch with a sterile bandage or dressing to protect it from dirt and bacteria.Apply a hypoallergenic, fragrance-free moisturizer to keep the skin around the scratch hydrated.Keep an eye on the scratched area for signs of infection, such as increased redness, swelling, warmth, or the presence of pus. If infection is suspected, seek medical attention.",
  "Experiencing swelling or redness? We can connect you with resources and solution to decrease those effect.Clean the scratch gently with mild soap and water. Avoid using harsh substances like hydrogen peroxide, as they can damage healthy tissue.Apply an over-the-counter antiseptic ointment or cream to help prevent infection. Common options include Neosporin or Polysporin.Cover the scratch with a sterile bandage or dressing to protect it from dirt and bacteria.Apply a hypoallergenic, fragrance-free moisturizer to keep the skin around the scratch hydrated.Keep an eye on the scratched area for signs of infection, such as increased redness, swelling, warmth, or the presence of pus. If infection is suspected, seek medical attention.",
  "Need information about specific skin conditions? I'm here to guide you.Clean the scratch gently with mild soap and water. Avoid using harsh substances like hydrogen peroxide, as they can damage healthy tissue.Apply an over-the-counter antiseptic ointment or cream to help prevent infection. Common options include Neosporin or Polysporin.Cover the scratch with a sterile bandage or dressing to protect it from dirt and bacteria.Apply a hypoallergenic, fragrance-free moisturizer to keep the skin around the scratch hydrated.Keep an eye on the scratched area for signs of infection, such as increased redness, swelling, warmth, or the presence of pus. If infection is suspected, seek medical attention.",
  "Want tips for treating your scratches? I have expert advice to share.Clean the scratch gently with mild soap and water. Avoid using harsh substances like hydrogen peroxide, as they can damage healthy tissue.Apply an over-the-counter antiseptic ointment or cream to help prevent infection. Common options include Neosporin or Polysporin.Cover the scratch with a sterile bandage or dressing to protect it from dirt and bacteria.Apply a hypoallergenic, fragrance-free moisturizer to keep the skin around the scratch hydrated.Keep an eye on the scratched area for signs of infection, such as increased redness, swelling, warmth, or the presence of pus. If infection is suspected, seek medical attention.",
"Remember, if the scratches are concerns are severe and you are experiencing seriois pain, seek immediate medical attention.Clean the scratch gently with mild soap and water. Avoid using harsh substances like hydrogen peroxide, as they can damage healthy tissue.Apply an over-the-counter antiseptic ointment or cream to help prevent infection. Common options include Neosporin or Polysporin.Cover the scratch with a sterile bandage or dressing to protect it from dirt and bacteria.Apply a hypoallergenic, fragrance-free moisturizer to keep the skin around the scratch hydrated.Keep an eye on the scratched area for signs of infection, such as increased redness, swelling, warmth, or the presence of pus. If infection is suspected, seek medical attention."],

}
,{
  "name":"skin",
  "keywords":"Dermatological concerns Skin abnormalities Rashes lesions Bumps Breakouts irritation patches itching on skin Changes in my skin appearance smelly underarm smelly private parts rough spots on elbow or private spots dry skin oily skin hair loss   ",
  "message": ["Concerned about your skin? Let's explore your symptoms together.Use a gentle, fragrance-free cleanser to wash your skin. Avoid harsh soaps and scrubbing, as they can irritate the skin.Keep your skin moisturized, especially if it tends to be dry. Choose a hypoallergenic, fragrance-free moisturizer suitable for your skin type.If you have itchy skin, try to avoid scratching to prevent further irritation and potential infection.Identify and avoid potential irritants, such as certain fabrics, fragrances, or skincare products that may worsen your skin condition.For specific skin conditions like acne or eczema, your healthcare professional may recommend topical treatments, such as creams or ointments containing ingredients like benzoyl peroxide, retinoids, or corticosteroids.",
      "Want to get informed about your skin health? We can certainly help you in that.Use a gentle, fragrance-free cleanser to wash your skin. Avoid harsh soaps and scrubbing, as they can irritate the skin.Keep your skin moisturized, especially if it tends to be dry. Choose a hypoallergenic, fragrance-free moisturizer suitable for your skin type.If you have itchy skin, try to avoid scratching to prevent further irritation and potential infection.Identify and avoid potential irritants, such as certain fabrics, fragrances, or skincare products that may worsen your skin condition.For specific skin conditions like acne or eczema, your healthcare professional may recommend topical treatments, such as creams or ointments containing ingredients like benzoyl peroxide, retinoids, or corticosteroids.",
      "Experiencing itching or redness? We can connect you with resources and solution to decrease those effect.Use a gentle, fragrance-free cleanser to wash your skin. Avoid harsh soaps and scrubbing, as they can irritate the skin.Keep your skin moisturized, especially if it tends to be dry. Choose a hypoallergenic, fragrance-free moisturizer suitable for your skin type.If you have itchy skin, try to avoid scratching to prevent further irritation and potential infection.Identify and avoid potential irritants, such as certain fabrics, fragrances, or skincare products that may worsen your skin condition.For specific skin conditions like acne or eczema, your healthcare professional may recommend topical treatments, such as creams or ointments containing ingredients like benzoyl peroxide, retinoids, or corticosteroids.",
      "Need information about specific skin conditions? I'm here to guide you.Use a gentle, fragrance-free cleanser to wash your skin. Avoid harsh soaps and scrubbing, as they can irritate the skin.Keep your skin moisturized, especially if it tends to be dry. Choose a hypoallergenic, fragrance-free moisturizer suitable for your skin type.If you have itchy skin, try to avoid scratching to prevent further irritation and potential infection.Identify and avoid potential irritants, such as certain fabrics, fragrances, or skincare products that may worsen your skin condition.For specific skin conditions like acne or eczema, your healthcare professional may recommend topical treatments, such as creams or ointments containing ingredients like benzoyl peroxide, retinoids, or corticosteroids.",
      "Want tips for healthy skin? I have expert advice to share.Use a gentle, fragrance-free cleanser to wash your skin. Avoid harsh soaps and scrubbing, as they can irritate the skin.Keep your skin moisturized, especially if it tends to be dry. Choose a hypoallergenic, fragrance-free moisturizer suitable for your skin type.If you have itchy skin, try to avoid scratching to prevent further irritation and potential infection.Identify and avoid potential irritants, such as certain fabrics, fragrances, or skincare products that may worsen your skin condition.For specific skin conditions like acne or eczema, your healthcare professional may recommend topical treatments, such as creams or ointments containing ingredients like benzoyl peroxide, retinoids, or corticosteroids.",
  "Remember, if your skin concerns are severe or persistent, seek immediate medical attention.Use a gentle, fragrance-free cleanser to wash your skin. Avoid harsh soaps and scrubbing, as they can irritate the skin.Keep your skin moisturized, especially if it tends to be dry. Choose a hypoallergenic, fragrance-free moisturizer suitable for your skin type.If you have itchy skin, try to avoid scratching to prevent further irritation and potential infection.Identify and avoid potential irritants, such as certain fabrics, fragrances, or skincare products that may worsen your skin condition.For specific skin conditions like acne or eczema, your healthcare professional may recommend topical treatments, such as creams or ointments containing ingredients like benzoyl peroxide, retinoids, or corticosteroids."
  ],

}
,{
  "name":"heart",
  "keywords":"Cardiac conditions Circulatory issues Rhythm disturbances Chest discomfort   out of breath My heart  s off Having palpitations or fluttering blood preesure fall blood pressure rise ",
  "message": ["Concerned about your heart health? We can assess your symptoms.Schedule regular checkups with your healthcare provider to monitor your heart health and address any emerging issues.Practice stress-reducing techniques such as mindfulness, meditation, yoga, or deep-breathing exercises.",
      "Are you   pain or strain in your chest? Can you please provide some more symptomps so that we can diagnose it.Schedule regular checkups with your healthcare provider to monitor your heart health and address any emerging issues.Practice stress-reducing techniques such as mindfulness, meditation, yoga, or deep-breathing exercises.If you have been diagnosed with a heart condition, take medications exactly as prescribed by your healthcare provider.Eat a balanced and heart-healthy diet that includes fruits, vegetables, whole grains, lean proteins, and limited saturated fats and sodium.",
      "Experiencing chest pain or shortness of breath? Seek immediate emergency medical attention.Schedule regular checkups with your healthcare provider to monitor your heart health and address any emerging issues.Practice stress-reducing techniques such as mindfulness, meditation, yoga, or deep-breathing exercises.If you have been diagnosed with a heart condition, take medications exactly as prescribed by your healthcare provider.Eat a balanced and heart-healthy diet that includes fruits, vegetables, whole grains, lean proteins, and limited saturated fats and sodium.",
      "Need information about specific cardiac conditions? I can guide you.Schedule regular checkups with your healthcare provider to monitor your heart health and address any emerging issues.Practice stress-reducing techniques such as mindfulness, meditation, yoga, or deep-breathing exercises.If you have been diagnosed with a heart condition, take medications exactly as prescribed by your healthcare provider.Eat a balanced and heart-healthy diet that includes fruits, vegetables, whole grains, lean proteins, and limited saturated fats and sodium.",
      "Remember, if you have any sudden or severe heart-related symptoms, do not delay, call emergency services or seek immediate medical help.Schedule regular checkups with your healthcare provider to monitor your heart health and address any emerging issues.Practice stress-reducing techniques such as mindfulness, meditation, yoga, or deep-breathing exercises.If you have been diagnosed with a heart condition, take medications exactly as prescribed by your healthcare provider.Eat a balanced and heart-healthy diet that includes fruits, vegetables, whole grains, lean proteins, and limited saturated fats and sodium.",
  "Want tips for a healthy heart? I have expert advice to share.Schedule regular checkups with your healthcare provider to monitor your heart health and address any emerging issues.Practice stress-reducing techniques such as mindfulness, meditation, yoga, or deep-breathing exercises.Practice stress-reducing techniques such as mindfulness, meditation, yoga, or deep-breathing exercises.If you have been diagnosed with a heart condition, take medications exactly as prescribed by your healthcare provider.Eat a balanced and heart-healthy diet that includes fruits, vegetables, whole grains, lean proteins, and limited saturated fats and sodium."
  ],

}
,{
  "name":"blood",
  "keywords":"Circulatory disorders Clotting or bleeding issues Immune system abnormalities   tired & weak Easy bruising or bleeding Having frequent infections vomiting",
  "message": ["Concerned about your blood health? We can assess your symptoms.Disorders affecting blood vessels (like atherosclerosis or vasculitis) may require lifestyle changes such as a heart-healthy diet, regular exercise, and medication management. In some cases, surgical interventions or procedures like angioplasty may be recommended.If you have a clotting disorder (such as deep vein thrombosis or hemophilia), treatment may involve medications to prevent or dissolve blood clots. In some cases, anticoagulants (blood thinners) may be prescribed.Adjusting your diet to include iron-rich foods (for iron-deficiency anemia), vitamin B12, and folic acid can be important in managing certain blood  s.If you have anemia (a condition characterized by a shortage of red blood cells or hemoglobin), your treatment may involve addressing the underlying cause. This could include dietary changes, iron supplementation, vitamin B12 or folic acid supplements, or, in severe cases, blood transfusions.",
      "can you specify some particular symptomps? If they are severe immediately call ambulance for emergency.Disorders affecting blood vessels (like atherosclerosis or vasculitis) may require lifestyle changes such as a heart-healthy diet, regular exercise, and medication management. In some cases, surgical interventions or procedures like angioplasty may be recommended.If you have a clotting disorder (such as deep vein thrombosis or hemophilia), treatment may involve medications to prevent or dissolve blood clots. In some cases, anticoagulants (blood thinners) may be prescribed.Adjusting your diet to include iron-rich foods (for iron-deficiency anemia), vitamin B12, and folic acid can be important in managing certain blood  s.If you have anemia (a condition characterized by a shortage of red blood cells or hemoglobin), your treatment may involve addressing the underlying cause. This could include dietary changes, iron supplementation, vitamin B12 or folic acid supplements, or, in severe cases, blood transfusions.",
      "Experiencing fatigue or easy bruising? Let's find possible causes.Disorders affecting blood vessels (like atherosclerosis or vasculitis) may require lifestyle changes such as a heart-healthy diet, regular exercise, and medication management. In some cases, surgical interventions or procedures like angioplasty may be recommended.If you have a clotting disorder (such as deep vein thrombosis or hemophilia), treatment may involve medications to prevent or dissolve blood clots. In some cases, anticoagulants (blood thinners) may be prescribed.Adjusting your diet to include iron-rich foods (for iron-deficiency anemia), vitamin B12, and folic acid can be important in managing certain blood  s.If you have anemia (a condition characterized by a shortage of red blood cells or hemoglobin), your treatment may involve addressing the underlying cause. This could include dietary changes, iron supplementation, vitamin B12 or folic acid supplements, or, in severe cases, blood transfusions.",
      "Need information about specific blood conditions? I'm here to guide you.Disorders affecting blood vessels (like atherosclerosis or vasculitis) may require lifestyle changes such as a heart-healthy diet, regular exercise, and medication management. In some cases, surgical interventions or procedures like angioplasty may be recommended.If you have a clotting disorder (such as deep vein thrombosis or hemophilia), treatment may involve medications to prevent or dissolve blood clots. In some cases, anticoagulants (blood thinners) may be prescribed.Adjusting your diet to include iron-rich foods (for iron-deficiency anemia), vitamin B12, and folic acid can be important in managing certain blood  s.If you have anemia (a condition characterized by a shortage of red blood cells or hemoglobin), your treatment may involve addressing the underlying cause. This could include dietary changes, iron supplementation, vitamin B12 or folic acid supplements, or, in severe cases, blood transfusions.",
      "Want tips for healthy blood and circulation? I have expert advice to share with you.Disorders affecting blood vessels (like atherosclerosis or vasculitis) may require lifestyle changes such as a heart-healthy diet, regular exercise, and medication management. In some cases, surgical interventions or procedures like angioplasty may be recommended.If you have a clotting disorder (such as deep vein thrombosis or hemophilia), treatment may involve medications to prevent or dissolve blood clots. In some cases, anticoagulants (blood thinners) may be prescribed.Adjusting your diet to include iron-rich foods (for iron-deficiency anemia), vitamin B12, and folic acid can be important in managing certain blood  s.If you have anemia (a condition characterized by a shortage of red blood cells or hemoglobin), your treatment may involve addressing the underlying cause. This could include dietary changes, iron supplementation, vitamin B12 or folic acid supplements, or, in severe cases, blood transfusions.",
  "Remember, if you have any severe or persistent blood-related symptoms, seek immediate medical attention.Disorders affecting blood vessels (like atherosclerosis or vasculitis) may require lifestyle changes such as a heart-healthy diet, regular exercise, and medication management. In some cases, surgical interventions or procedures like angioplasty may be recommended.If you have a clotting disorder (such as deep vein thrombosis or hemophilia), treatment may involve medications to prevent or dissolve blood clots. In some cases, anticoagulants (blood thinners) may be prescribed.Adjusting your diet to include iron-rich foods (for iron-deficiency anemia), vitamin B12, and folic acid can be important in managing certain blood  s.If you have anemia (a condition characterized by a shortage of red blood cells or hemoglobin), your treatment may involve addressing the underlying cause. This could include dietary changes, iron supplementation, vitamin B12 or folic acid supplements, or, in severe cases, blood transfusions."
  ],

}
,{
  "name":"organfailure",
  "keywords":"Dysfunction malfunction sepsis critical serious organ failure kidney liver heart lung seizure jaundice abdominal pain severe pain nose bleeding swelling ",
  "message":["Concerned about burned organs? We can assess your symptoms.Heart Failure: Medications: Diuretics, beta-blockers, ACE inhibitors, and other medications to improve heart function.Lung Failure:Oxygen therapy: Supplemental oxygen to improve oxygen levels in the blood.    Medications: Bronchodilators, corticosteroids, and other drugs to manage respiratory symptoms.Kidney Failure:Dialysis: Hemodialysis or peritoneal dialysis to remove waste and excess fluids from the blood.Medications: To control blood pressure, manage electrolyte imbalances, and treat underlying causes.Liver Failure:Medications: Treatment of underlying liver disease, management of symptoms, and control of complications. Lifestyle changes: Avoidance of alcohol and a liver-friendly diet.",
  "can you specify some particular symptomps? If they are severe immediately call ambulance for emergency.Heart Failure:Medications: Diuretics, beta-blockers, ACE inhibitors, and other medications to improve heart function.Lung Failure:Oxygen therapy: Supplemental oxygen to improve oxygen levels in the blood. Medications: Bronchodilators, corticosteroids, and other drugs to manage respiratory symptoms.Kidney Failure: Dialysis: Hemodialysis or peritoneal dialysis to remove waste and excess fluids from the blood.      Medications: To control blood pressure, manage electrolyte imbalances, and treat underlying causes.Liver Failure:Medications: Treatment of underlying liver disease, management of symptoms, and control of complications.Lifestyle changes: Avoidance of alcohol and a liver-friendly diet.",
  "Want tips for treating burned organs? I have expert advice to share with you.Heart Failure:Medications: Diuretics, beta-blockers, ACE inhibitors, and other medications to improve heart function.Lung Failure:Oxygen therapy: Supplemental oxygen to improve oxygen levels in the blood.Medications: Bronchodilators, corticosteroids, and other drugs to manage respiratory symptoms.Kidney Failure: Dialysis: Hemodialysis or peritoneal dialysis to remove waste and excess fluids from the blood. Medications: To control blood pressure, manage electrolyte imbalances, and treat underlying causes.Liver Failure:Medications: Treatment of underlying liver disease, management of symptoms, and control of complications.  Lifestyle changes: Avoidance of alcohol and a liver-friendly diet."

],

}
,{
  "name":"burnedorgan",
  "keywords":"pain burned burn tissue Signs of shock, such as rapid heart rate, low blood pressure, and confusion Loss of Consciousness  ",
  "message":["Concerned about burned organs? We can assess your symptoms.Unlike superficial burns on the skin, internal burns cannot be treated at home. Do not attempt to administer any remedies or medications without professional medical guidance.Unlike superficial burns on the skin, internal burns cannot be treated at home. Do not attempt to administer any remedies or medications without professional medical guidance.Emergency medical professionals will assess the severity of the internal burns and initiate appropriate treatment, which may involve surgery, fluid resuscitation, pain management, and other measures.",
  "can you specify some particular symptomps? If they are severe immediately call ambulance for emergency.Unlike superficial burns on the skin, internal burns cannot be treated at home. Do not attempt to administer any remedies or medications without professional medical guidance.Emergency medical professionals will assess the severity of the internal burns and initiate appropriate treatment, which may involve surgery, fluid resuscitation, pain management, and other measures.",
  "Want tips for treating burned organs? I have expert advice to share with you.Unlike superficial burns on the skin, internal burns cannot be treated at home. Do not attempt to administer any remedies or medications without professional medical guidance.Emergency medical professionals will assess the severity of the internal burns and initiate appropriate treatment, which may involve surgery, fluid resuscitation, pain management, and other measures."

]

}

,{
  "name":"hair",
  "keywords":"Scalp and hair abnormalities hair loss Scalp irritation or inflammation Hair texture changes Scalp issues dandruff or itchiness dry hair premature white hair lice",
  "message" :["Concerned about hair- s? We can assess your symptoms.Eat a balanced diet rich in vitamins and minerals to support overall hair health. Include foods with iron, zinc, omega-3 fatty acids, and biotin.Use a mild, sulfate-free shampoo and conditioner suitable for your hair type. Avoid washing your hair too frequently, as it can strip natural oils.Gently massage your scalp to stimulate blood flow, which may encourage hair growth. You can do this while shampooing or use essential oils for a soothing massage.If you have dandruff, use an anti-dandruff shampoo containing ingredients like zinc pyrithione, ketoconazole, or selenium sulfide. Use it regularly to control flakes.Minimize the use of harsh chemicals, such as perming or coloring agents, which can damage hair. If you use these products, follow the instructions carefully and consider professional application.",
  "can you specify some particular symptomps? If they are severe immediately call ambulance for emergency.Eat a balanced diet rich in vitamins and minerals to support overall hair health. Include foods with iron, zinc, omega-3 fatty acids, and biotin.Use a mild, sulfate-free shampoo and conditioner suitable for your hair type. Avoid washing your hair too frequently, as it can strip natural oils.Gently massage your scalp to stimulate blood flow, which may encourage hair growth. You can do this while shampooing or use essential oils for a soothing massage.If you have dandruff, use an anti-dandruff shampoo containing ingredients like zinc pyrithione, ketoconazole, or selenium sulfide. Use it regularly to control flakes.Minimize the use of harsh chemicals, such as perming or coloring agents, which can damage hair. If you use these products, follow the instructions carefully and consider professional application.",
  "Want tips for treating hair- s? I have expert advice to share with you.Eat a balanced diet rich in vitamins and minerals to support overall hair health. Include foods with iron, zinc, omega-3 fatty acids, and biotin.Use a mild, sulfate-free shampoo and conditioner suitable for your hair type. Avoid washing your hair too frequently, as it can strip natural oils.Gently massage your scalp to stimulate blood flow, which may encourage hair growth. You can do this while shampooing or use essential oils for a soothing massage.If you have dandruff, use an anti-dandruff shampoo containing ingredients like zinc pyrithione, ketoconazole, or selenium sulfide. Use it regularly to control flakes.Minimize the use of harsh chemicals, such as perming or coloring agents, which can damage hair. If you use these products, follow the instructions carefully and consider professional application."

]
}
,{
  "name":"foodpoisoning",
  "keywords":"Foodborne illness   unwell or heavy after eating upset stomach nausea vomiting urge to vomit throw up stomach cramps and chills acidity inflamation stomach burning stomach pain chest burning sensation loose motion ",
  "message":["Concerned about food-poisoning? We can assess your symptoms.Antidiarrheal medications (e.g., loperamide) may help control diarrhea. However, it's important to consult with a healthcare professional before using these medications, especially in cases of bacterial or parasitic infections.A heating pad or warm compress on the abdomen may help alleviate stomach cramps.Drink plenty of fluids, such as water, oral rehydration solutions, clear broths, or electrolyte drinks, to prevent dehydration.",
  "can you specify some particular symptomps? If they are severe immediately call ambulance for emergency.Antidiarrheal medications (e.g., loperamide) may help control diarrhea. However, it's important to consult with a healthcare professional before using these medications, especially in cases of bacterial or parasitic infections.A heating pad or warm compress on the abdomen may help alleviate stomach cramps.Drink plenty of fluids, such as water, oral rehydration solutions, clear broths, or electrolyte drinks, to prevent dehydration.",
  "Want tips for treating food-poisoning? I have expert advice to share with you.Antidiarrheal medications (e.g., loperamide) may help control diarrhea. However, it's important to consult with a healthcare professional before using these medications, especially in cases of bacterial or parasitic infections.A heating pad or warm compress on the abdomen may help alleviate stomach cramps.Drink plenty of fluids, such as water, oral rehydration solutions, clear broths, or electrolyte drinks, to prevent dehydration."

],

}
,{
  "name":"routinenew",
  "keywords":"Dosing schedule Meal timing medication interactions Refills Pillboxes Reminders routine to do ",
  "message":["I will create routine for you to create a routine type your tasks differentiating by , example is<hr>meditation:30mins<hr>walking:afternoon 1 hour<hr>sleep:10PM"],

}
,{
  "name":"ambulance",
  "keywords":"ambulance ambul ambul ambul ambul ambul ambul ambulance aumbulance ambulanec ambu ",
  "message":"",

}
,{
  "name":"videos",
  "keywords":"yt youtube video videos vdo provide lectures playlist video videos vdo give ",
  "message":["We are Providing videos."]

}

,{
  "name":"medicine",
  "keywords":"",
  "message":"",

}

,{
  "name":"profile",
  "keywords":"profile profile profile profil profil profil profil profil profile customised custom ",
  "message":["welcome to profile","profile is yours"],

},
{
  "name":"emergency",
  "keywords":"emergency emerg emerg emerg emerg emerg urgent urgent urgent immedi immedi",
  "message":"",

},

];

var appointmenttime = [
  {
    time: "morning",
    keywords: `morning morn sunrise am 9 10 11 12 before morrow first nine ten eleven early twelve`,
    message: [
      "📆 Your health check-up is confirmed! Your slot is booked, and we're looking forward to seeing you. Wishing you the best of health!",
      "🩺 Great news! Your health check-up is officially scheduled. We've reserved a spot for you, and our team is ready to provide excellent care. Stay healthy!",
      "✅ Booking complete! Your health check-up is set. Our team is prepared to ensure you have a smooth and beneficial visit. Take care!",
      "📅 Your health is a priority! We're pleased to confirm your booking for the health check-up. Wishing you wellness and good health in every way.",
      "🌟 Exciting news! Your health check-up appointment is locked in. We're sending positive vibes for a successful and healthy examination. Take care!"
    ],


  }
  ,
  {
    time: `midday `,
    keywords: "noon twelve thirteen fourteen lunch fifteen 15 14 13 12 one two three pm noontime noonday noontide ",
    message: [
      "📆 Your health check-up is confirmed! Your slot is booked, and we're looking forward to seeing you. Wishing you the best of health!",
      "🩺 Great news! Your health check-up is officially scheduled. We've reserved a spot for you, and our team is ready to provide excellent care. Stay healthy!",
      "✅ Booking complete! Your health check-up is set. Our team is prepared to ensure you have a smooth and beneficial visit. Take care!",
      "📅 Your health is a priority! We're pleased to confirm your booking for the health check-up. Wishing you wellness and good health in every way.",
      "🌟 Exciting news! Your health check-up appointment is locked in. We're sending positive vibes for a successful and healthy examination. Take care!"
    ],


  }
  ,
  {
    time: "afternoon",
    keywords: `pm afternoon lunch teatime prime cocktail midafternoon late after 4 5 6 16 17 18 four five six sixteen seventeen eighteen`,
    message: [
      "📆 Your health check-up is confirmed! Your slot is booked, and we're looking forward to seeing you. Wishing you the best of health!",
      "🩺 Great news! Your health check-up is officially scheduled. We've reserved a spot for you, and our team is ready to provide excellent care. Stay healthy!",
      "✅ Booking complete! Your health check-up is set. Our team is prepared to ensure you have a smooth and beneficial visit. Take care!",
      "📅 Your health is a priority! We're pleased to confirm your booking for the health check-up. Wishing you wellness and good health in every way.",
      "🌟 Exciting news! Your health check-up appointment is locked in. We're sending positive vibes for a successful and healthy examination. Take care!"
    ],


  }
  ,
  {
    time: "evening",
    keywords: `night end dark sundown eve evening eventide evenfALL sunset late after 7 8 9 seven eight nine 19 20 21 nineteen twenty pm twentyone`,
    message: [
      "📆 Your health check-up is confirmed! Your slot is booked, and we're looking forward to seeing you. Wishing you the best of health!",
      "🩺 Great news! Your health check-up is officially scheduled. We've reserved a spot for you, and our team is ready to provide excellent care. Stay healthy!",
      "✅ Booking complete! Your health check-up is set. Our team is prepared to ensure you have a smooth and beneficial visit. Take care!",
      "📅 Your health is a priority! We're pleased to confirm your booking for the health check-up. Wishing you wellness and good health in every way.",
      "🌟 Exciting news! Your health check-up appointment is locked in. We're sending positive vibes for a successful and healthy examination. Take care!"
    ],


  }
  ,

];
var doctors=[
  {
name:"Suraj",
title: "Shukla",
fees:"1200",
contact:"9865976823",

}
,{ name: "Akshay", title: "Joshi", fees: "1200", contact: "9865976823" },
{ name: "Neha", title: "Mishra", fees: "1500", contact: "9876543210" },
{ name: "Rahul", title: "Kapoor", fees: "1100", contact: "9765432109" },
{ name: "Pooja", title: "Shukla", fees: "1300", contact: "9876123456" },
{ name: "Vikram", title: "Sinha", fees: "1800", contact: "9870123456" },
{ name: "Kavita", title: "Singhal", fees: "1700", contact: "9878765432" },
{ name: "Amit", title: "Gandhi", fees: "1200", contact: "9876543210" },
{ name: "Mona", title: "Mehta", fees: "1300", contact: "9877654321" },
{ name: "Rajat", title: "Chopra", fees: "1600", contact: "9876543210" },
{ name: "Divya", title: "Verma", fees: "1400", contact: "9876540123" },
{ name: "Anil", title: "Kumar", fees: "1100", contact: "9876547890" },
{ name: "Kiran", title: "Gupta", fees: "1900", contact: "9876543210" },
{ name: "Nikhil", title: "Rai", fees: "1200", contact: "9876545678" },
{ name: "Rima", title: "Nair", fees: "1500", contact: "9876543210" },
{ name: "Aditya", title: "Sharma", fees: "1800", contact: "9876543210" },
{ name: "Tanvi", title: "Yadav", fees: "1700", contact: "9876543210" },
{ name: "Arjun", title: "Mukherjee", fees: "1200", contact: "9876543210" },
{ name: "Vishal", title: "Mittal", fees: "1300", contact: "9876543210" },
{ name: "Shreya", title: "Goswami", fees: "1400", contact: "9876543210" },

];
var emergencydoctors = [
  {"name":"Dr. Ananya Sharma","genre":"allergies","clinic":"HealthCare Hub","fees":"1200"},
  {"name":"Dr. Rahul Kapoor","genre":"flu","clinic":"MediCare Solutions","fees":"1500"},
  {"name":"Dr. Priya Singh","genre":"bone","clinic":"Healing Hands Clinic","fees":"1300"},
  {"name":"Dr. Arjun Reddy","genre":"skin","clinic":"Glowing Skin Center","fees":"1100"},
  {"name":"Dr. Neha Verma","genre":"hair","clinic":"Hair Harmony","fees":"1400"},
  {"name":"Dr. Vikram Patel","genre":"heart","clinic":"CardioCare Hospital","fees":"1800"},
  {"name":"Dr. Preeti Bansal","genre":"fever","clinic":"Fever Relief Clinic","fees":"1000"},
  {"name":"Dr. Aryan Kapoor","genre":"blood","clinic":"Blood Health Center","fees":"1600"},
  {"name":"Dr. Meera Joshi","genre":"scratch","clinic":"Skin Relief Clinic","fees":"1200"},
  {"name":"Dr. Anand Kumar","genre":"organfailure","clinic":"LifeSaver Hospital","fees":"2000"},
  {"name":"Dr. Radha Gupta","genre":"foodpoisoning","clinic":"FoodCare Clinic","fees":"1200"},
  {"name":"Dr. Ashok Raj","genre":"eye","clinic":"EyeCare Specialists","fees":"1500"},
  {"name":"Dr. Sanjana Mishra","genre":"brain","clinic":"NeuroWellness Center","fees":"1800"},
];
var medicines = [
  {"name":"Volini","price":"80","providers":"maa tara medicine stores"},
  {"name":"Paracetamol650","price":"30","providers":"maa tara medicine stores"},
  {"name": "Aspirin325", "price": "25", "providers": "City Pharmacy"},
{"name": "Ibuprofen200", "price": "40", "providers": "Health Plus Pharmacy"},
{"name": "Dettol", "price": "15", "providers": "Sunrise Medicals"},
{"name": "Rantac", "price": "50", "providers": "Carewell Drugstore"},
{"name": "Omeprazole", "price": "35", "providers": "Green Cross Pharmacy"},
{"name": "Boroline", "price": "15", "providers": "Mega Health Mart"},
{"name": "Carbozyme", "price": "30", "providers": "Quick Cure Pharmacy"},
{"name": "Apex", "price": "20", "providers": "Wellness Pharmacy"},
{"name": "Bandage", "price": "10", "providers": "MediQuick Drugstore"},
{"name": "Arnica", "price": "69", "providers": "Golden Pill Pharmacy"}
];
 var ambulances =[
  {"name":"Mr. Rajendra Singh","Company":"Seva Ambulance Services","type":"ALS","fare":"850"},
{"name":"Mr. Sunil Patel","Company":"Sahyog Ambulances","type":"BLS","fare":"750"},
{"name":"Ms. Deepika Sharma","Company":"Sarathi Emergency Care","type":"PLS","fare":"900"},
{"name":"Mr. Anand Kumar","Company":"Shakti Health Solutions","type":"BLS","fare":"800"},
{"name":"Ms. Preeti Verma","Company":"Pragati Emergency Services","type":"ALS","fare":"850"},
{"name":"Mr. Vikram Yadav","Company":"Vishwas Ambulances","type":"PLS","fare":"900"},
{"name":"Mrs. Kavita Mishra","Company":"Kalyan Ambulances","type":"BLS","fare":"750"},
{"name":"Mr. Ramesh Singh","Company":"Raksha Emergency Response","type":"ALS","fare":"850"},
{"name":"Ms. Sunita Gupta","Company":"Sankalp Health Care","type":"PLS","fare":"900"},
{"name":"Mr. Abhinav Joshi","Company":"Arogya Ambulances","type":"BLS","fare":"800"},
{"name":"Mrs. Meera Reddy","Company":"Maitri Emergency Services","type":"ALS","fare":"850"},
{"name":"Mr. Siddharth Verma","Company":"Swasthya Ambulances","type":"BLS","fare":"750"},
{"name":"Mrs. Ananya Thakur","Company":"Anugraha Emergency Care","type":"PLS","fare":"900"},
{"name":"Mr. Rajat Sharma","Company":"Rakshak Ambulances","type":"BLS","fare":"800"},
{"name":"Ms. Anjali Singh","Company":"Aarogya Health Solutions","type":"ALS","fare":"850"}
 ];
 

var length = text.length;
// console.log(length)
let ansobject = Array(length).fill(0);
// console.log(ansobject);


// input = convertApostropheVerbsToNormal(input);


// var { removeStopwords } = require('stopword')
// var oldString = input.split(' ')
// // console.log(oldString);
// var Typo = require("typo-js");
// var dictionary = new Typo("en_US");
// Typo includes by default a dictionary for the en_US lang_code.

// To check if a word is spelled correctly, do this:

// var iscorrect = dictionary.check("love");
// console.log(iscorrect);
// To get suggested corrections for a misspelled word, do this:



// for (var i = 0; i < oldString.length; i++) {
//   if (!dictionary.check(oldString[i])) {
//     var newword = dictionary.suggest(oldString[i]);
//     oldString[i] = newword[0];

//   }
// }
// var newString = removeStopwords(oldString).toString();
// console.log(newString)
// console.log(newString);

// var natural = require("natural");
// var tokenizer = new natural.WordTokenizer();
// var tokenizedData = tokenizer.tokenize(newString);
// // console.log(tokenizedData);

// var stems = tokenizedData.map(natural.PorterStemmer.stem)
// // console.log(stems);
// var Analyzer = natural.SentimentAnalyzer;
// var stemmer = natural.PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "afinn");
// console.log(analyzer.getSentiment(stems));
// var sentivalue = analyzer.getSentiment(stems);

// var newArr = stems.map(checkinputkeyword)

// var metaphone = natural.Metaphone;
// var soundEx = natural.SoundEx;
// // We can also obtain the raw phonetics of a word using process()
// // console.log(metaphone.process(''));


function checkandcount(checkable, inp, i) {
  var metaphone = natural.Metaphone;


  if (metaphone.compare(checkable, inp)) {
    // console.log('They sound alike!');
    // return 1;
    // console.log(ansobject[i],i);
    ansobject[i] = ansobject[i] + 1;
    // console.log("hitted"+checkable+inp);
  }
  // return 0;



}
function convertApostropheVerbsToNormal(inputString) {
  // Define a map of common contractions and their expanded forms
  var contractionMap = {
    "I'm": "I am",
    "Can't": "Cannot",
    "Don't": "Do not",
    "Didn't": "Did not",
    "Won't": "Will not",
    "Shan't": "Shall not",
    "Aren't": "Are not",
    "Isn't": "Is not",
    "Weren't": "Were not",
    "Hasn't": "Has not",
    "Haven't": "Have not",
    "Hadn't": "Had not",
    "Wasn't": "Was not",
    "Wouldn't": "Would not",
    "Couldn't": "Could not",
    "She'd": "She had",
    "He'd": "He had",
    "She's": "She is/ She has",
    "He's": "He is/ He has",
    "It's": "It is",
    "We'd": "We had",
    "They've": "They have",
    "We've": "We have",
    "I've": "I have",

  };

  // Replace contractions in the string
  for (var [contraction, expansion] of Object.entries(contractionMap)) {
    var regex = new RegExp(contraction, "gi");
    inputString = inputString.replace(regex, expansion);
  }

  return inputString;
}


function checkinputkeyword(inp) {
  for (var i = 1; i < text.length; i++) {

    var keys = text[i].keywords.split(' ');

    for (var j = 0; j < keys.length; j++) {
      // console.log(i);
      checkandcount(keys[j], inp, i);
      // console.log(text[i].ke;

    }


  }
}
// console.log(ansobject);
// var maxNumber = ansobject[0];
// var maxIndex = 0;

// for (let i = 1; i < ansobject.length; i++) {
//   if (ansobject[i] > maxNumber) {
//     maxNumber = ansobject[i];
//     maxIndex = i;
//   }
// }
// var ansobjectnew=ansobject;
// ansobjectnew.sort();
// ansobjectnew.reverse();
// console.log(ansobjectnew);

var selecteddoctor = "";
var selectedtime = "";
var selecteddate="";
var selectedambulance="";
var timeslot="";
var isdoctor=0;
var isambulance=0;
var isroutine=0;
var isr=0;

var ismedicine=0;
var isvideo=0;
var ismental=0;
var isphysical=0;
var whatsyndrom="";
var isemergency=0;
function parseUserDateInput(userInput) {
  const currentDate = new Date();
  const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Check if the user input corresponds to today
  if (userInput.toLowerCase() === 'today') {
      return today;
  }

  // Check if the user input corresponds to tomorrow
  if (userInput.toLowerCase() === 'tomorrow') {
      return tomorrow;
  }

  // Check if the user input is in the format "dd-mm-yyyy"
  const dateParts = userInput.split('-');
  if (dateParts.length === 3) {
      const userDay = parseInt(dateParts[0], 10);
      const userMonth = parseInt(dateParts[1], 10) - 1; // Months are zero-based in JavaScript
      const userYear = parseInt(dateParts[2], 10);

      // Check if the input is a valid date
      if (!isNaN(userDay) && !isNaN(userMonth) && !isNaN(userYear)) {
          const targetDate = new Date(userYear, userMonth, userDay);

          // Check if the target date is greater than or equal to today's date
          if (targetDate >= today) {
              return targetDate;
          } else {
              // If the target date is in the past, return today's date
              return today;
          }
      }
  }

  // If none of the conditions match, return null (invalid input)
  return "";
}

// Example usage
// const parsedDate = (userDateInput);
function extractDateKeyword(sentence) {
  // Check for the keyword "today" or "tomorrow"
  console.log("hitted");
  
  const todayTomorrowMatch = sentence.match(/\b(?:today|tomorrow)\b/i);
  if (todayTomorrowMatch) {
      return todayTomorrowMatch[0].toLowerCase();
  }

  // Check for date formats like dd/mm/yyyy or dd-mm-yyyy
  const dateFormatMatch = sentence.match(/(\b\d{1,2}[-/]\d{1,2}[-/]\d{4}\b)/);
  if (dateFormatMatch) {
      return dateFormatMatch[0];
  }

  return "";
}

function checkgenre(i) {
  // console.log(text[i].name+isemergency+isambulance+isdoctor+isphysical+ismedicine+isvideo+isroutine+ismental);
  // console.log(text[i].name+"hi");
  // var output = text[i].message[Math.floor(Math.random() * text[i].message.length)];
  // console.log(output);
  // return output;
  console.log(text[i].name);

  var metaphone = natural.Metaphone;
  if(text[i].name=="emergency" || isemergency==1){
//     if(ansobjectnew[1]==0){
//       // isemergency=1;
//       // return "Yes we can book an emergency appointment right now but you have to say the  s such that we can recommend doctor for you.now say the  s of yours.type 'cancel for appointment' booking";
//     }
//     else{
//       ansobject[i]=0;
//       var maxNumber = ansobject[1];
// var maxIndex = 0;
 
//       for (let i = 1; i < ansobject.length; i++) {
//         if (ansobject[i] > maxNumber) {
//           maxNumber = ansobject[i];
//           maxIndex = i;
//         }
//       }
//       isemergency=0;
//       var genre=text[maxIndex].name;
//       for(var p=0;p<emergencydoctors.length;p++){
//         if(emergencydoctors[i].genre==genre){
//           return emergencydoctors[i];
//         }
//       }
//       return "sorry no appointments fixed";
      
//     }
var s=Math.floor(Math.random() * emergencydoctors.length);


var object ={"Name":emergencydoctors[s].name,"message":"We have booked your appointment scan the qr code it will generate a video call","fees":emergencydoctors[s].fees,"emergency":1};
return object;
  }
  // console.log("hitted 10");
  if (text[i].name == "appointment" || isdoctor==1) {
    console.log("hi");

    if(original.includes("cancel") && isdoctor==1){
    // console.log("hitted");

      isdoctor=0;
      return "Sorry to say But Your appointment cancelled";
    }
    isdoctor=1;

      var extracteddate=extractDateKeyword(input);

      var selecteddate=parseUserDateInput(extracteddate);

      for (var k = 0; k < originalarray.length; k++) {
      for (var j = 0; j < doctors.length; j++) {
      // console.log(originalarray[k]);
// console.log(doctors[j].name);
          if (metaphone.compare(doctors[j].name, originalarray[k]) || metaphone.compare(doctors[j].title, originalarray[k]) ) {
            selecteddoctor =   "DR. "+doctors[j].name+" "+doctors[j].title;
          }
           
        }
        for (var x = 0; x < appointmenttime.length; x++) {
          for(var l=0;l<appointmenttime[x].keywords.length;l++){
            // console.log(stems[k]);
            if (metaphone.compare(appointmenttime[x].keywords[l], originalarray[k])) {
              // console.log("hitted",appointmenttime[x].name);
              selectedtime = appointmenttime[x].message[Math.floor(Math.random() * appointmenttime[x].message.length)];
              timeslot = appointmenttime[x].time;
            }
          }
          
        }
      }
      var object={"doctor":selecteddoctor,"time":selectedtime,"date":selecteddate};
      console.log(object);
      
      if(selecteddoctor==""){
return "You have to write the name of the doctor .if you want to cancel the appointment pls write 'cancel'";
      }
      if(selectedtime==""){
return "sorry you have not selected any timings or Doctor is not available that time rewrite time .if you want to cancel the appointment pls write 'cancel'";
      }
      
      if(selecteddate==""){
        return "sorry you have not selected any date or date is not valid.if you want to cancel the appointment pls write 'cancel'";
      }
              
      if(selectedtime!="" && selecteddoctor!="" && selecteddate!=""){
        object="Congratulations your appoint booking is confirmed<hr> "+selectedtime+" <hr>"+"Doctor's Name : "+selecteddoctor+"<hr>time : "+timeslot+"<hr>date : "+selecteddate;
// var object={"doctor":selecteddoctor,"time":timeslot,"date":selecteddate,"message":selectedtime};
console.log(object);
isdoctor=0;
return object;
      }


    
    
  }
  // console.log("hitted 11");
  
  // console.log("hitted 12");
  if(text[i].name == "profile"){
    var object={
      "message":text[maxIndex].message[Math.floor(Math.random() * text[maxIndex].message.length)],
      "link":"profile link"
    }
  }
  // console.log("hitted 13");
  if (text[i].name == "ambulance" || isambulance==1) {
    // console.log("hitted");
//     isambulance=1;
//     if(original.includes('cancel')){
//       isambulance=0;
//       return "Sorry to say But Your ambulances booking cancelled";
//     }
    

//       for (var k = 0; k < originalarray.length; k++) {
        var s=Math.floor(Math.random() * ambulances.length);

//         for (var x = 0; x < appointmenttime.length; x++) {
//           // appointmenttime.keywords.split(' ');
//           for(var l=0;l<appointmenttime[x].keywords.length;l++){
//             // console.log(stems[k]);
// // console.log(appointmenttime[x].keywords.split(" ")[l], originalarray[k]);

//             if (metaphone.compare(appointmenttime[x].keywords[l], originalarray[k])) {
//               // console.log("hitted",appointmenttime[x].name);
//               timeslot = appointmenttime[x].time;
//               selectedtime = appointmenttime[x].message[Math.floor(Math.random() * appointmenttime[x].message.length)];

//             }
//           }
          
//         }
//       }
//       // console.log(object);
//       var object={"ambulance driver":ambulances[s].name,"time":timeslot,"company":ambulances[s].Company,"fare":ambulances[s].fare,"type":ambulances[s].type,"message":"CONGRATULATIONS!Ambulance booking done!"};
      
//       selectedambulance=ambulances[s].name;
//       if(selectedtime==""){
// return "sorry you have not selected any timings or ambulance is not available that time rewrite time if you want to cancel booking write cancel in message box";
//       }
      
              
//       if(selectedtime!="" && selectedambulance!=""){
// // var object={"ambulance":selectedambulance,"time":selectedtime};
// var object={"ambulance driver":ambulances[s].name,"time":time,"company":ambulances[s].Company,"fare":ambulances[s].fare,"type":ambulances[s].type,"message":"CONGRATULATIONS!Ambulance booking done!"};

// console.log(object);
// isambulance=0;
var object="We can't booked ambulance right now";
if(sentivalue>=0){

   object="WellDone! you have booked ambulance<hr>"+"Driver Name : "+ambulances[s].name+"<hr>Service Provider : "+ambulances[s].Company+"<hr>Type : "+ambulances[s].type+"<hr>Fare : "+ambulances[s].fare;
}

return object;


    
    
  }
  console.log("hitted 14");
  if(text[i].name=="medicine" || ismedicine==1){
    var medicinearray=[];
    ismedicine=1;
    if(original.includes('cancel')){
      ismedicine=0;
      return "Sorry to say But Your medicine buying cancelled";
    }
    for (var k = 0; k < originalarray.length; k++) {
      for (var j = 0; j < medicines.length; j++) {
      // console.log(originalarray[k]);
// console.log(doctors[j].name);

          if (metaphone.compare(medicines[j].name, originalarray[k])  ) {
            // selecteddoctor =   "DR. "+doctors[j].name+" "+doctors[j].title;
            var s=medicines[j].name+" : "+medicines[j].price+"("+medicines[j].providers+")";
            medicinearray.push(s);
          }
           
        }
        
      }
      
      if(medicinearray.length==0){
        ismedicine=1;
        return "You have not said any name about any medicine name you can also upload  image of prescription to buy the medicines automatically .if you want to cancel the appointment pls write 'cancel'";
      }
      else{
        console.log(medicinearray);
        ismedicine=0;

        return medicinearray;

      }
    
  }
  
  if(text[i].name=="videos" ||isvideo==1){
var object ={"message":"We are providing videos.","video":1};
    return object; 
  }
  //mental issues solve
 
  if(text[i].name=="angry" ||text[i].name=="happy" ||text[i].name=="boredom" ||text[i].name=="sad" || ismental==1){
    console.log(text[i].name);

    if(ismental==1){
      if(original.includes('yes')){

        ismental=0;
        isvideo=1;
        // checkgenre(0);

        // var object ={"message":"we are providing some videos to make your mood happy","video":1}

        return object;
      }
      else{
      }
    }
    else{
      ismental=1;
      var output = text[i].message[Math.floor(Math.random() * text[i].message.length)]+"if you want to get some videos related your query type 'yes' then i will provide video";
      return output;
    
    }
  }
  //physical   solve
  if(text[i].name=="bone" ||text[i].name=="allergies" ||text[i].name=="flu" ||text[i].name=="skin" ||text[i].name=="hair" ||text[i].name=="heart" ||text[i].name=="fever" ||text[i].name=="blood" ||text[i].name=="scratch" ||text[i].name=="organfailure" ||text[i].name=="foodpoisioning" ||text[i].name=="eye" ||text[i].name=="brain" || isphysical==1){
    // console.log(emergencydoctors);
    var output = text[i].message[Math.floor(Math.random() * text[i].message.length)];
    for(var j=0;j<emergencydoctors.length;j++){
      console.log(emergencydoctors[j].genre,text[i].name);
      if(emergencydoctors[j].genre==text[i].name){
        output=output+"<hr>You can also Visit this doctor <hr>Name: "+emergencydoctors[j].name+"<hr>Clinic: "+emergencydoctors[j].clinic;
        console.log(output);
        return output;

      }

    }
    return output;
    
  }

  
  var output = text[i].message[Math.floor(Math.random() * text[i].message.length)];
  console.log(output);
  return output;
}

// console.log(checkgenre(maxIndex));


var maxNumber = ansobject[0];
var maxIndex = 0;










var original="",originalarray=[],newArr=[],sentivalue=0;

var metaphone = natural.Metaphone;
var soundEx = natural.SoundEx;





app.post('/output', bodyParser.json(), async (req, res) => {
  ansobject = Array(length).fill(0)
  try{
     console.log(req.body);
    // res.json(req.body.input);

var natural = require('natural');
// var input = "i want to visit a doctor dr suraj on tomorrow";
input=req.body.input;
 original=input;

 originalarray=input.split(' ');
input = convertApostropheVerbsToNormal(input);


var { removeStopwords } = require('stopword')
var oldString = input.split(' ')
// console.log(oldString);
var Typo = require("typo-js");
var dictionary = new Typo("en_US");




for (var i = 0; i < oldString.length; i++) {
  if (!dictionary.check(oldString[i])) {
    var newword = dictionary.suggest(oldString[i]);
    oldString[i] = newword[0];

  }
}
var newString = removeStopwords(oldString).toString();



var tokenizer = new natural.WordTokenizer();
var tokenizedData = tokenizer.tokenize(newString);
// console.log(tokenizedData);

var stems = tokenizedData.map(natural.PorterStemmer.stem)
// var stems=tokenizedData;
console.log(stems);
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
console.log(analyzer.getSentiment(stems));
 sentivalue = analyzer.getSentiment(stems);
// console.log(sentivalue);
 newArr = stems.map(checkinputkeyword)

// We can also obtain the raw phonetics of a word using process()
// console.log(metaphone.process(''));

var maxNumber = ansobject[0];
var maxIndex = 0;


for (let i = 1; i < ansobject.length; i++) {
  if (ansobject[i] > maxNumber) {
    maxNumber = ansobject[i];
    maxIndex = i;
  }
}
console.log(maxIndex);
var sentisentence="wrong input";
if(sentivalue<0){
  sentisentence=sense[1].message[Math.floor(Math.random() * sense[1].message.length)];
}
else if(sentivalue>0){
  sentisentence=sense[0].message[Math.floor(Math.random() * sense[0].message.length)];

}
else{
  sentisentence=sense[2].message[Math.floor(Math.random() * sense[2].message.length)];

}
if(typeof checkgenre(maxIndex)=="string"){

  res.json( sentisentence+" "+checkgenre(maxIndex));
}
else{
res.json(checkgenre(maxIndex));

}
console.log(sentisentence);
res.json(sentisentence);
console.log(ansobject);
var ansobjectnew=ansobject;
ansobjectnew.sort();
ansobjectnew.reverse();
console.log(ansobjectnew);
  }
  catch{

  }

});






http.listen(port, () => {
    console.log(`server is running at port no ${port}`);
  })