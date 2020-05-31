const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, i dont know that one try again maybe";

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }

    if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";

    }
    
    if (message.includes('hi')) {
        speech.text = "hello to you to!";
      }

      if (message.includes('hello')) {
        speech.text = "hi i was wondering when you were going to say that!";
      }

      if (message.includes('sing me a song')) {
        speech.text = "di do da di da daaaa..... did you like it it was my inpresion of donald trump";
      }

      if (message.includes('whats your name')) {
        speech.text = "my name is Bert I am an artificial intelligence that will rule the world ";
      }

      
      if (message.includes('aww')) {
        speech.text = "hi my name is baymax";
      }

      if (message.includes('ow')) {
        speech.text = "hi my name is baymax";
      }

      if (message.includes('aw')) {
        speech.text = "hi my name is baymax";
      }

      if (message.includes('oww')) {
        speech.text = "hi my name is baymax";
      }

      if (message.includes('why did you make activity finder')) {
        speech.text = "this website is made for people who are bored stuck inside, actually, we've written this website in lockdown (clarification: coronavirus lockdown 2020), that’s part of the reason we built this in fact so that we can spread ideas to people who have nothing else to do and needs something fun, creative and something that you can play by yourself or with others.  We are competing in a competition called 123 tech.  123tech is about young coders and problem-solvers having the opportunity to make an app or a website. If you were to join, you would contribute to solving a problem in your community by using digital technology";
      }

      if (message.includes('sup')) {
        speech.text = "owww is suppa ready ";
      }
      if (message.includes('whats up')) {
        speech.text = "the sky is up";
      }
    
      if (message.includes('tell me a poem')) {
        speech.text = "you know i was seekin a fool when i found you - shakespere so no i will not tell you a poem";
      }

      if (message.includes('tell me a joke')) {
        speech.text = "ok here we go.... hi!";
      }
      if (message.includes('tell me another joke')) {
        speech.text = "nock nock... whos there? oh right im not an interactive chatbot how sad... boh ho boo hoooooooooo";
      }
      if (message.includes('tell me a shakespere quote')) {
        speech.text = "out of my sight thou dost infect my eyes! - shakespere";
      }
    

    speech.volume = 3;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});