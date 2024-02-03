var text=[ 
{
      "name":"features",
      "keywords":"Aspect trait peculiarity details Resources emphasize Tool ",
      "message": '',

  },
  {
      "name":"thanking",
      "keywords":"Appreciate Thank you Thanks Pleased Glad Awesome I got this I Feel better i am glad great to see good to know ",
      "message": [" You're doing great! ",
      "We're proud of your commitment to your health.",
      "Thank you for using our app! We're happy to be a part of your journey.",
      "This made our day! Your progress is inspiring.",
      "Great! You're taking control of your health."
      ],

  },
  {
      "name":"angry",
      "keywords":"Frustrated Feeling agitated Feeling stressed out feeling out of place out of my mind Exasperated high temper on the edge of frustration Tempers running high Under pressure Strained overwhelmed Unsettled",
      "message": [

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
      "keywords":"Delighted glad Pleased Thriving Embrace Cherish i am delightful feel energized i feel great ",
      "message": ["I'm thrilled to hear you're feeling better!",
          "It's good to hear you're feeling content and healthy.",
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
      "keywords":"Monotony Dullness Restlessness Slog i don't feel like getting up it's the same every day it's boring staleness stale life",
      "message": [

      ],

  },
  {
      "name":"sad",
      "keywords":"Down Discouraged Blue Frustrated Overwhelmed Heavyhearted i feel Heavyhearted Aching Drained Unsettled my mind is not feeling well ",
      "message": ["It sounds like you're feeling down. Is there anything I can do to help?",
          "I hear you're feeling a bit blue today. Remember, everyone has tough days.",
          "Are you feeling frustrated with your progress? Let's find solutions together.",
          "It's okay to feel overwhelmed sometimes. What can I do to lighten the load?",
          "It sounds like you're carrying a heavy heart. What's weighing on you?",
          "Are you feeling tense or on edge? Take a deep breath and let's talk.",
          "Something seems to be unsettling you. Can you tell me more about it?",
          "It sounds like you might need a break. What can I do to ease your burden?",
          "Feeling lost is common. Can we explore some resources together?"
      ],

  },
  {
      "name":"allergies",
      "keywords":"Hypersensitivity Sensitivities Triggers reactions i get adverse reactions Bothering i have Medication allergies i have food allergies rashes red eyes swelling burning sensation",
      "message":"",

  },
  {
      "name":"colds-flu",
      "keywords":"Sniffles sneezes cruddy Bugged down Influenza-like illness Runny nose cough feeling feverish sore throat aching muscle fatigue headache congestion viral fever",
      "message": ["Feeling unwell? Let's assess your symptoms.",
          "Think you might have a cold/flu? Here's what to do.",
          "Worried about your symptoms? Let's Seek medical advice.",
          "Need tips for managing your cold/flu? I'm here to help.",
      "Want to know when to see a doctor? I can guide you."
      ],

  },
  {
      "name":"Eye-problem",
      "keywords":"visual disturbance problem vision problem impairment itchiness redness swelling rubby eyes inflammation inflamatory blurry eyes sight issues i see things differently",
      "message": ["Concerned about your vision? Let's see how I can help.",
          "Experiencing any visual disturbances? We can connect you with resources.",
          "Can you a little more insight about the symtomps?",
          "Need information about specific eye conditions? I'm here to guide you.",
          "Want tips for healthy eyes? I have expert advice to share.",
          "Remember, if you have severe or worsening symptoms, seek immediate medical attention."
      ],

  },
  {
      "name":"fever",
      "keywords":"illness Runny nose cough feeling feverish sore throat viral fever Running a temperature Burning up Having chills sweats Hyperthermia rapid change in temperature",
      "message": ["Worried about your temperature? Let's assess your symptoms. Keep a thermometer near you",
          "Feeling feverish? Here are some tips for managing your fever.",
          "Need information about fevers? I'm here to guide you.",
          "Remember, if your fever is high or persistent, seek medical attention.",

      ],

  }
  ,{
      "name":"Brain-Problem",
      "keywords":"Brain-related concerns Cognitive difficulties Neurological concerns conditions Memory issues Thinking differently Feeling brain foggy Something feels off in my head doing same thing over and over again attention problem always feeling irritated angered unstable",
      "message": ["Concerned about your mental health? don't worry! Let's explore together.",
          "Experiencing memory issues? We can connect you with resources.",
          "Having Issues regarding attention and focus? Call with our experts anytime",
          "Want tips for maintaining healthy brain function? I have expert advice to share.",
          "Remember, if you have severe or worsening symptoms, seek immediate medical attention.",
      "Need information about specific neurological conditions? I'm here to guide you."
      ],

  }
  ,{
      "name":"bone-problem",
      "keywords":"Skeletal issues Musculoskeletal concerns Orthopedic condition pain Aches in my bones Something's wrong with my joints Not feeling steady on my feet back pain Worried about posture Fractures Having trouble moving around freely joint inflammation neck pain acute pain in joint",
      "message": ["Concerned about your bone health? Let's assess your symptoms.",
          "Can you specify your a little bit more?",
          "having joint and muscle pain? Limit your physical activities for a while.",
          "Experiencing aches & pains? We can connect you with resources.",
          "Need information about specific bone conditions across your body? I'm here to guide you.",
          "Want tips for healthy bones & joints? I have expert advice to share.",
      "Remember, if your pain is severe or persistent, seek immediate medical attention."
      ],

  }
  ,{
      "name":"scratch",
      "keywords":"",
      "message":"",

  }
  ,{
      "name":"skin-problem",
      "keywords":"Dermatological concerns Skin abnormalities Rashes lesions Bumps Breakouts irritation patches itching on skin Changes in my skin appearance smelly underarm smelly private parts rough spots on elbow or private spots dry skin oily skin hair loss problem ",
      "message": ["Concerned about your skin? Let's explore your symptoms together.",
          "Want to get informed about your skin health? We can certainly help you in that.",
          "Experiencing itching or redness? We can connect you with resources and solution to decrease those effect.",
          "Need information about specific skin conditions? I'm here to guide you.",
          "Want tips for healthy skin? I have expert advice to share.",
      "Remember, if your skin concerns are severe or persistent, seek immediate medical attention."
      ],

  }
  ,{
      "name":"heart-problem",
      "keywords":"Cardiac conditions Circulatory issues Rhythm disturbances Chest discomfort Feeling out of breath My heart feels off Having palpitations or fluttering blood preesure fall blood pressure rise ",
      "message": ["Concerned about your heart health? We can assess your symptoms.",
          "Are you feeling pain or strain in your chest? Can you please provide some more symptomps so that we can diagnose it.",
          "Experiencing chest pain or shortness of breath? Seek immediate emergency medical attention.",
          "Need information about specific cardiac conditions? I can guide you.",
          "Remember, if you have any sudden or severe heart-related symptoms, do not delay, call emergency services or seek immediate medical help.",
      "Want tips for a healthy heart? I have expert advice to share."
      ],

  }
  ,{
      "name":"blood-problem",
      "keywords":"Circulatory disorders Clotting or bleeding issues Immune system abnormalities Feeling tired & weak Easy bruising or bleeding Having frequent infections vomiting",
      "message": ["Concerned about your blood health? We can assess your symptoms.",
          "can you specify some particular symptomps? If they are severe imeediately call ambulance for emergency.",
          "Experiencing fatigue or easy bruising? Let's find possible causes.",
          "Need information about specific blood conditions? I'm here to guide you.",
          "Want tips for healthy blood and circulation? I have expert advice to share with you.",
      "Remember, if you have any severe or persistent blood-related symptoms, seek immediate medical attention."
      ],

  }
  ,{
      "name":"failure of organs",
      "keywords":"Dysfunction malfunction sepsis critical serious organ failure kidney liver heart lung seizure jaundice abdominal pain severe pain nose bleeding swelling ",
      "message":"",

  }
  ,{
      "name":"burned organs",
      "keywords":"pain burned burn tissue  ",
      "message":"",

  }
  ,{
      "name":"accident",
      "keywords":"Accident injury severe burn cut trauma collision fall wound pain minor serious urgent critical head neck leg hand shoulder face back chest abdomen finger heavy bleeding unconscious vomiting breathing stop problem car motorcycle sports work pedestrian drowning electric shock ",
      "message":"",

  }
  ,{
      "name":"hair-problem",
      "keywords":"Scalp and hair abnormalities hair loss Scalp irritation or inflammation Hair texture changes Scalp issues dandruff or itchiness dry hair premature white hair lice",
      "message" :[""
    ]

  }
  ,{
      "name":"food-poisoning",
      "keywords":"Foodborne illness Feeling unwell or heavy after eating upset stomach nausea vomiting urge to vomit throw up stomach cramps and chills acidity inflamation stomach burning stomach pain chest burning sensation loose motion ",
      "message":"",

  }
  ,{
      "name":"routine",
      "keywords":"Dosing schedule Meal timing medication interactions Refills Pillboxes Reminders routine to do ",
      "message":"",

  }
  ,{
      "name":"ambulance",
      "keywords":"Call emergency services now urgent medical attention Do not delay call emergency services immediately send emergency immediate action",
      "message":"",

  }
  ,{
      "name":"video suggestions",
      "keywords":"",
      "message":"",

  }
  ,{
      "name":"hospital suggestion",
      "keywords":"",
      "message":"",

  }
  ,{
      "name":"medicine store suggestion",
      "keywords":"",
      "message":"",

  }
  ,{
      "name":"about",
      "keywords":"",
      "message":"",

  }
  ,{
      "name":"medicine",
      "keywords":"",
      "message":"",

  }
  ,{
      "name":"profile",
      "keywords":"",
      "message":"",

  },];
