var natural = require('natural');
var input = "i want to visit a doctor dr suraj on tomorrow";
var original=input;
const express = require('express');

const multer = require('multer');
const path = require('path');

const app = express();
const port = 6000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'medicalimages');
  },
  filename: function (req, file, cb) {
    cb(null, 'prescription.jpeg');
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('fileInput'), (req, res) => {
  res.send('File uploaded!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

var Tesseract = require('tesseract.js');

Tesseract.recognize('try4.jpeg')
  .then(function(result) {
    var text=result.data.text;
    var regex = /[^a-z0-9]/gi;
    var newStr = text.replace(regex, ' ');
    
    console.log(newStr);
    originalarray=newStr;
  });

var originalarray=input.split(' ');



var text=[
  {
    "name": "default",
    "keywords": ' Hello Hi hey hiya howdy yo ho  meet What name how chatbot',
    "message": [
      "👋 Welcome to [Chatbot's Name]! Your virtual assistant for personalized assistance and information.",
      "🌐 Explore a range of features – from answering questions to setting reminders. [Chatbot's Name] is here to make your life easier!",
      "💬 Chat with [Chatbot's Name] anytime! Whether it's advice, information, or just a friendly chat, I'm here for you.",
      "🛠️ Need a solution? [Chatbot's Name] excels at problem-solving. Describe the issue, and let's find a resolution together.",
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
    "keywords": ' Hello Hi hey hiya howdy yo ho  meet What name how chatbot',
    "message": [' Welcome to Med-AI, your health companion. Let`s embark on a journey towards a healthier and happier you!',
      '🌐 Explore a range of features by asking about symptoms, medications, appointments, and more. Let`s work together to keep you informed and healthy!',
      ` Good to see you! Feel free to ask about your recent lab results, track your medications, or even schedule your next appointment with a simple command.`,
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
      'Yes sure no problem I am always available. See you around soon',
      'Hope the chat was meaningful and your queries were answered satisfactorily ',
      ' It was a pleasure to chat with you. Be healthy,be fit',
      'Bye! Hoping to chat with you soon. Till then, keep using Med AI- your personal health companion',
      'Goodbye! Hope you enjoyed the chat and your query was cleared to the best of your interests',
      'It was a joy chatting with you. Stay fit and healthy using Med-AI. And for any information, you are most welcome to ask me. I will be happy to help.'
    ],

  }
  
  ,{
    "name":"appointment",
    "keywords":"Book Medical consult consultation Clinical schedule visit Scheduling  healthcare appointment appoint online checkup offline doctor visit See  doctor appointment  physician medical",
    "message":"",

}
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

]

var length = text.length;
// console.log(length)
let ansobject = Array(length).fill(0);
// console.log(ansobject);


input = convertApostropheVerbsToNormal(input);


var { removeStopwords } = require('stopword')
var oldString = input.split(' ')
// console.log(oldString);
var Typo = require("typo-js");
var dictionary = new Typo("en_US");
// Typo includes by default a dictionary for the en_US lang_code.

// To check if a word is spelled correctly, do this:

// var iscorrect = dictionary.check("love");
// console.log(iscorrect);
// To get suggested corrections for a misspelled word, do this:



for (var i = 0; i < oldString.length; i++) {
  if (!dictionary.check(oldString[i])) {
    var newword = dictionary.suggest(oldString[i]);
    oldString[i] = newword[0];

  }
}
var newString = removeStopwords(oldString).toString();
// console.log(newString)
// console.log(newString);

// var natural = require("natural");
var tokenizer = new natural.WordTokenizer();
var tokenizedData = tokenizer.tokenize(newString);
// console.log(tokenizedData);

var stems = tokenizedData.map(natural.PorterStemmer.stem)
// console.log(stems);
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
console.log(analyzer.getSentiment(stems));
var sentivalue = analyzer.getSentiment(stems);

var newArr = stems.map(checkinputkeyword)

var metaphone = natural.Metaphone;
var soundEx = natural.SoundEx;
// We can also obtain the raw phonetics of a word using process()
// console.log(metaphone.process(''));


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
var maxNumber = ansobject[0];
var maxIndex = 0;

for (let i = 1; i < ansobject.length; i++) {
  if (ansobject[i] > maxNumber) {
    maxNumber = ansobject[i];
    maxIndex = i;
  }
}
var ansobjectnew=ansobject;
ansobjectnew.sort();
ansobjectnew.reverse();
console.log(ansobjectnew);

var selecteddoctor = "";
var selectedtime = "";
var selecteddate="";
var selectedambulance="";
var timeslot="";
var isdoctor=0;
var isambulance=0;
var isroutine=false;
var ismedicine=0;
var isvideo=0;
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
  var metaphone = natural.Metaphone;
  if(text[i].name="emergency" || isemergency==1){
    if(ansobjectnew[1]==0){
      isemergency=1;
      return "Yes we can book an emergency appointment right now but you have to say the problems such that we can recommend doctor for you.now say the problems of yours.type 'cancel for appointment' booking";
    }
    else{
      ansobject[i]=0;
      var maxNumber = ansobject[0];
var maxIndex = 0;
 
      for (let i = 1; i < ansobject.length; i++) {
        if (ansobject[i] > maxNumber) {
          maxNumber = ansobject[i];
          maxIndex = i;
        }
      }
      isemergency=0;
      var genre=text[maxIndex].name;
      for(var p=0;p<emergencydoctors.length;p++){
        if(emergencydoctors[i].genre==genre){
          return emergencydoctors[i];
        }
      }
      return "sorry no appointments fixed";
      
    }
  }
  else if (text[i].name == "appointment" || isdoctor==1) {
    isdoctor=1;
    if(original.includes('cancel')){
      isdoctor=0;
      return "Sorry to say But Your appointment cancelled";
    }
    // console.log("hitted");

      var extracteddate=extractDateKeyword(input);
      selecteddate=parseUserDateInput(extracteddate);

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
var object={"doctor":selecteddoctor,"time":timeslot,"date":selecteddate,"message":selectedtime};
console.log(object);
isdoctor=0;
return object;
      }


    
    
  }
  else if(text[i].name == "routine" || isroutine){
    if(isroutine){
      isroutine=!isroutine;
  
      return "Say about Your Routine and upcoming to do list according to that i will create your routine list.pls differentiate the works by ,"
    }
    else{
    isroutine=!isroutine;
  
      return originalarray;
    }
  }
  else if(text[i].name == "profile"){
    var object={
      "message":text[maxIndex].message[Math.floor(Math.random() * text[maxIndex].message.length)],
      "link":"profile link"
    }
  }
  else if (text[i].name == "ambulance" || isambulance==1) {
    // console.log("hitted");
    isambulance=1;
    if(original.includes('cancel')){
      isambulance=0;
      return "Sorry to say But Your ambulances booking cancelled";
    }
    

      for (var k = 0; k < originalarray.length; k++) {
      for (var j = 0; j < ambulances.length; j++) {
      // console.log(originalarray[k]);
// console.log(doctors[j].name);
          if (metaphone.compare(ambulances[j].name, originalarray[k]) || metaphone.compare(ambulances[j].company, originalarray[k]) ) {
            selectedambulance = ambulances[j].name+" "+ ambulances[j].company;
          }
           
        }

        for (var x = 0; x < appointmenttime.length; x++) {
          for(var l=0;l<appointmenttime[x].keywords.length;l++){
            // console.log(stems[k]);
            if (metaphone.compare(appointmenttime[x].keywords[l], originalarray[k])) {
              // console.log("hitted",appointmenttime[x].name);
              timeslot = appointmenttime[x].time;
              selectedtime = appointmenttime[x].message[Math.floor(Math.random() * appointmenttime[x].message.length)];


            }
          }
          
        }
      }
      var object={"ambulance":selectedambulance,"time":timeslot,"message":selectedtime};
      console.log(object);
      
      if(selectedambulance==""){
// return "You have to write the name of the ambulance servicee or ambulance name";
// selectedambulance=ambulances[j].driver;
      }
      if(selectedtime==""){
return "sorry you have not selected any timings or ambulance is not available that time rewrite time if you want to cancel booking write cancel in message box";
      }
      
              
      if(selectedtime!="" && selectedambulance!=""){
var object={"ambulance":selectedambulance,"time":selectedtime};
console.log(object);
isambulance=0;
return object;
      }


    
    
  }
  else if(text[i].name=="medicine" || ismedicine==0){
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
  else if(text[i].name=="videos" ||isvideo==1){
  var videosarray=[];




  isvideo=0;
    return videosarray; 
  }
  //mental issues solve
  else if(text[i].name=="sad" ||ismental==1){
    if(ismental==1){
      if(original.includes('yes')){

        ismental=0;
        isvideo=1;
        checkgenre(0);
        return "we are providing some videos to make your mood happy";
      }
      else{
        return "ok lets continue the chat";
      }
    }
    else{
      ismental=1;
      var output = text[i].message[Math.floor(Math.random() * text[i].message.length)]+"if you want to get some videos related your query type 'yes' then i will provide video";
      return output;
    
    }
  }
  //physical problem solve
  else if(text[i].name=="bone-problem" ||isphysical==1){
    if(isphysical==1){
      if(original.includes('yes')){

        isphysical=0;
        // return "we are providing some videos to make your mood happy";
      }
      else{
        return "ok lets continue the chat";
      }
    }
    else{
      isphysical=1;
      var output = text[i].message[Math.floor(Math.random() * text[i].message.length)]+" if you want to get doctors suggestion related your problem type 'yes' then i will provide doctors ";
      return output;
    
    }
  }
  var output = text[i].message[Math.floor(Math.random() * text[i].message.length)];
  return output;
}

console.log(checkgenre(maxIndex));





