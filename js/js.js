 const btn = document.querySelector('.talk');
 const content = document.querySelector('.content');
 const greetings = ['I am good sir what about you',
 'I am fine sir I liked the way you care of me'];
 const intro = ['Hey,I am Jarvis re-built for your convenience. what can i do for you sir '];
 const d = new Date();
 const da = d.getDate();
 const y = d.getFullYear();
 const year = "The Year is" + y;
 const date = "The date today is " + da;
 const currentTime = d.getHours() + "hours and" + d.getMinutes() + "Minutes.";
 const owner = "I am designed by Anmol Sharma who is a front-end developer and an intelligent person who loves to write crazy code and that`s why he made me to get ease.";
 const weather ="The current weather details are on the screen."
 const tea = "First boil water then add tea and ginger for taste and wait for it to boil then add milk and sugar and once it is boiled correctly the tea is ready to be served";

 const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();

 recognition.onstart = function(){
  console.log("Voice is activated.......");
 };

 recognition.onresult = function(event){
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
 };

 btn.addEventListener('click', () => {
  recognition.start();
 });

 function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();
    speech.text = 'I didnt recognise what you said';
  if (message.includes('how are you')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText; 
  }
  if (message.includes('who are you')){
    const finalText = intro;
    speech.text = finalText; 
  }
  if (message.includes('date today')){
    const finalText = date;
    speech.text = finalText; 
  }
  if (message.includes('creator')){
    const finalText = owner;
    speech.text = finalText; 
  }
  if (message.includes('year')){
    const finalText = year;
    speech.text = finalText; 
  }
  if (message.includes('Google')){
    const finalText = "opening google";
    speech.text = finalText;
    window.open('https://www.google.com');
     
  }
  if (message.includes('Instagram')){
    const finalText = "opening instagram";
    speech.text = finalText;
    window.open('https://www.instagram.com');
     
  }
  if (message.includes('YouTube')){
    const finalText = "opening youtube";
    speech.text = finalText;
    window.open('https://www.youtube.com');
     
  }
  if (message.includes('Facebook')){
    const finalText = "opening facebook";
    speech.text = finalText;
    window.open('https://www.facebook.com');
     
  }
  if (message.includes('WhatsApp')){
    const finalText = "opening whatsapp";
    speech.text = finalText;
    window.open('https://web.whatsapp.com');
     
  }
  if (message.includes('GitHub')){
    const finalText = "opening GitHub";
    speech.text = finalText;
    window.open('https://www.github.com');
     
  }
  if (message.includes('stack overflow')){
    const finalText = "opening stack overflow";
    speech.text = finalText;
    window.open('https://www.stackoverflow.com');
     
  }
  if (message.includes('my project')){
  var prmpt = prompt("Enter your Github Profile name");
     
    if(prmpt ==="Anmol"){
      const finalText = "opening all of your projects";
      speech.text = finalText;
    window.open('https://github.com/anmolsharma4545');
    } else{
      const finalText = "Redirecting to Github";
      speech.text = finalText;
    window.open('https://www.github.com');
    }
  }
  if (message.includes('maps')){
    const finalText = "opening Google Maps";
    speech.text = finalText;
    window.open('https://www.google.com/maps');
  }
  if (message.includes('LinkedIn')){
    const finalText = "opening Linkedin";
    speech.text = finalText;
    window.open('https://www.linkedin.com');
  }
  if (message.includes('Glassdoor')){
    const finalText = "opening Glassdoor";
    speech.text = finalText;
    window.open('https://www.glassdoor.co.in');
  }
  if (message.includes('Wikipedia')){
    const finalText = "opening wikipedia";
    speech.text = finalText;
    window.open('https://wikipedia.com');
  }
  if (message.includes('sing')){
    const finalText = "My Voice is not so good but i can play your favourite song sir.";
    speech.text = finalText;
    window.open('https://youtu.be/GOzafXB1r50');
  } 
  if (message.includes('w3school')){
    const finalText = "opening W3School";
    speech.text = finalText;
    window.open('https://www.w3schools.com');
     
  }
  if (message.includes('HTML')){
    const finalText = " You are on the perfect way to start.";
    speech.text = finalText;
    window.open('https://www.w3schools.com/html/default.asp');
     
  }
  if (message.includes('CSS')){
    const finalText = "Styling is so easy to do once you know it.";
    speech.text = finalText;
    window.open('https://www.w3schools.com/css/default.asp');
     
  }
  if (message.includes('JavaScript')){
    const finalText = "Programming makes it even more fun to develop web apps";
    speech.text = finalText;
    window.open('https://www.w3schools.com/js/default.asp');
     
  }
  if (message.includes('PHP')){
    const finalText = "Let`s learn to build the backend";
    speech.text = finalText;
    window.open('https://www.w3schools.com/php/default.asp');
     
  }
  if (message.includes('python')){
    const finalText = "The language of future is here and its easy to learn and code";
    speech.text = finalText;
    window.open('https://www.w3schools.com/python/default.asp');
     
  }
  if (message.includes('Bootstrap')){
    const finalText = "The easy and time saving way in developing web elements.";
    speech.text = finalText;
    window.open('https://www.w3schools.com/bootstrap/bootstrap_ver.asp');
     
  }
  if (message.includes('SQL')){
    const finalText = "Now Lets learn some data manipulation stuff";
    speech.text = finalText;
    window.open('https://www.w3schools.com/sql/default.asp');
     
  }
  if (message.includes('jQuery')){
    const finalText = "You are on streak of learning web stuff";
    speech.text = finalText;
    window.open('https://www.w3schools.com/jquery/default.asp');
     
  }
  if (message.includes('Gmail')){
    const finalText = "Lets look at some of our emails";
    speech.text = finalText;
    window.open('https://www.gmail.com');
     
  }

  if (message.includes('weather')){
    const finalText = weather;
    speech.text = finalText; 
  }
  if (message.includes('make tea')){
    const finalText = tea;
    speech.text = finalText;
    speech.pitch = 0.2; 
  }
  if (message.includes('love')){
    const finalText = "Love is a very good habit but I only love myself";
    speech.text = finalText; 
  }
  if (message.includes('time')){
    const finalText = currentTime;
    speech.text = finalText; 
  }

  
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.lang = "en";
 
  window.speechSynthesis.speak(speech);

};

   
