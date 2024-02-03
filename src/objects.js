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
  