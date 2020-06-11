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
    if (message.includes('I')) {
      speech.text = "hi";
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
 
      
   
 
      if (message.includes('why did you make activity finder')) {
        speech.text = "this website is made for people who are bored stuck inside, actually, we've written this website in lockdown (clarification: coronavirus lockdown 2020), that’s part of the reason we built this in fact so that we can spread ideas to people who have nothing else to do and needs something fun, creative and something that you can play by yourself or with others.  We are competing in a competition called 123 tech.  123tech is about young coders and problem-solvers having the opportunity to make an app or a website. If you were to join, you would contribute to solving a problem in your community by using digital technology";
      }
 
      if (message.includes('sup')) {
        speech.text = "owww is suppa ready ";
      }
      if (message.includes("what's up")) {
        speech.text = "the sky is up";
      }
    
      if (message.includes('tell me a poem')) {
        speech.text = "you know I was seeking a fool when I found you - Shakespeare so no I will not tell you a poem";
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
      if (message.includes('who were you made by')) {
        speech.text = "my creater is Tom";
      }
      if (message.includes('what is your purpose')) {
        speech.text = "to be fun";
      }
      if (message.includes('whats your name')) {
        speech.text = "my name is bert. bert dose not stand for any acronym if you were wondering";
      }
 
      if (message.includes('what is your name')) {
        speech.text = "my name is bert. bert dose not stand for any acronym if you were wondering";
      }
      if (message.includes('who are you')) {
        speech.text = "my name is bert. bert dose not stand for any acronym if you were wondering";
      }
      if (message.includes('how are you')) {
        speech.text = "im am good. thanks";
      }
      if (message.includes('how were you made')) {
        speech.text = "i was made using visuel stodio code with the programming lunguges javascript, html and css";
      }
      if (message.includes('I am a pie')) {
        speech.text = "can i eat you";
      }
    
      if (message.includes('hello marsh mello')) {
        speech.text = "ok... hi blueberry pie";
      }
      if (message.includes('nice to meet you')) {
        speech.text = "nice to met you to";
      }
      if (message.includes('cool')) {
        speech.text = "very cool";
      }
      if (message.includes('what is activity finder')) {
        speech.text = "it is a website to help you find activitys";
      }
      if (message.includes('what are you')) {
        speech.text = "I am a artificial intelligence";
      }
      if (message.includes('pokemon')) {
        speech.text = "I like pokemon to";
      }
      if (message.includes('simsons')) {
        speech.text = "oh I love simsons its my favorite";
      }
      if (message.includes('help')) {
        speech.text = "I can not help... hehehehehehehehehehehehehehehehehheheheheheheheheheheeehh";
      }
      if (message.includes('can you laugh')) {
        speech.text = "he he ha ha eh eh mi mi mo mo po po sho sho lo lo ao ao aoaoaoaoaoaoaoaoao heheheheheheheheheeheeheheheheheheheheheheheehehehehehehehehehehehehehehehehe";
      }
      if (message.includes('laugh')) {
        speech.text = "he he ha ha eh eh mi mi mo mo po po sho sho lo lo ao ao aoaoaoaoaoaoaoaoao heheheheheheheheheeheeheheheheheheheheheheheehehehehehehehehehehehehehehehehe";
      }
      if (message.includes('yo')) {
        speech.text = "yo to you back mistro";
      }
  
      if (message.includes('hey')) {
        speech.text = "hewo. me. nameie. is. bert. (hmnib) ";
      }
      if (message.includes('say something funny')) {
        speech.text = "something funny!";
      }
      if (message.includes('snake')) {
        speech.text = "oh we have that game!... oh I mean we don't have that game the only close game to snake would be snail and that's nothing like snake... nothing";
      }
 
      if (message.includes('no')) {
        speech.text = "yes";
      }
      if (message.includes('yes')) {
        speech.text = "no";
      }
      if (message.includes('why')) {
        speech.text = "how";
      }
      if (message.includes('sing me another song')) {
        speech.text = "dun dun duuuuun da-da-da duuuuuun da dun-dun duuuuun daaaaaaaaaa";
      }
      if (message.includes('that was good')) {
        speech.text = "I know it was good";
      }
      if (message.includes('that was great')) {
        speech.text = "I now it was great";
      }
      if (message.includes('great')) {
        speech.text = "indeed";
      }
      if (message.includes('good')) {
        speech.text = "indeed";
      }
      if (message.includes('bad')) {
        speech.text = "('_')";
      }
      if (message.includes('terrible')) {
        speech.text = "('_')";
      }
      if (message.includes('very bad')) {
        speech.text = "('_')";
      }
      if (message.includes('really good')) {
        speech.text = "thanks";
      }
      if (message.includes('thank you')) {
        speech.text = "bbbbbbbbbbboooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooommmmm";
      }
      if (message.includes('thank')) {
        speech.text = "thanky danky";
      }
      if (message.includes('donkey')) {
        speech.text = "oenk";
      }
      if (message.includes('bird')) {
        speech.text = "tweet";
      }
      if (message.includes('cat')) {
        speech.text = "maooow";
      }
      if (message.includes('lion')) {
        speech.text = "in the jungle the mighty jungle the lion sleeps tonight... even though they sleep in the day";
      }
      if (message.includes('bear')) {
        speech.text = "bear noise bear noise";
      }
      if (message.includes('dog')) {
        speech.text = "whof wooooooof";
      }
      if (message.includes('bug')) {
        speech.text = "bugy wagy";
      }
      if (message.includes('tiger')) {
        speech.text = "tiger noise";
      }
      if (message.includes('frog')) {
        speech.text = "rebidy rebidy";
      }
      if (message.includes('wolf')) {
        speech.text = "awhooo awhooo";
      }
      if (message.includes('deer')) {
        speech.text = "cluter cluter";
      }
      if (message.includes('shark')) {
        speech.text = "oga boga age of the shark be near";
      }
      if (message.includes('panda')) {
        speech.text = "whoop whoop is somehow the sound of the panda";
      }
      if (message.includes('leopard')) {
        speech.text = "graw";
      }
      if (message.includes('giraffe')) {
        speech.text = "........................";
      }
      if (message.includes('bat')) {
        speech.text = "a shobadobadooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo";
      }
      if (message.includes('polar bear')) {
        speech.text = "a shobabadibabadooooooo";
      }
      if (message.includes('monkey')) {
        speech.text = "good day to you sir. oh have you read this artical";
      }
      if (message.includes('rhinoceros')) {
        speech.text = "this is the sound the rhinoceros makes: ofehwiohfqeh98yfsj9ywej8dfoauofiuwenoiHfoahsd;jhfoseyfahoyfoa - I know because my creater is one... I think.... it could be the noise he makes when he sleeps";
      }
      if (message.includes('cheeta')) {
        speech.text = "ti ahi hoooooooo";
      }
      if (message.includes('turtle')) {
        speech.text = "Hello darkness, my old friend I've come to talk with you again Because a vision softly creeping Left its seeds while I was sleeping And the vision that was planted in my brain Still remains Within the sound of silence In restless dreams I walked alone Narrow streets of cobblestone Neath the halo of a street lamp I turned my collar to the cold and damp When my eyes were stabbed by the flash of a neon light That split the night And touched the sound of silence And in the naked light I saw Ten thousand people, maybe more People talking without speaking People hearing without listening People writing songs that voices never share And no one dared Disturb the sound of silence Fools,  said I, You do not know Silence, like a cancer, grows Hear my words that I might teach you Take my arms that I might reach you But my words, like silent raindrops fell And echoed in the wells, of silence And the people bowed and prayed To the neon god they made And the sign flashed out its warning In the words that it was forming And the sign said, The words of the prophets are written on the subway walls And tenement halls And whispered in the sounds of silence";
      }
      if (message.includes('squrrel')) {
        speech.text = "spit spit";
      }
      if (message.includes('horse')) {
        speech.text = "nahee";
      }
      if (message.includes('why are youu running')) {
        speech.text = "because you cant";
      }
      if (message.includes('do you have a sole')) {
        speech.text = "heheheheheheheheheheheheheheheheheyeyeyeyeyeyeheheheyeyeheheeehheeheheeeheheeehehehheehehehehehehehyeeeyeyyeyyeeyeeeyeeeyeeeyeeyeyeyeyeyeeyeyeeyeeyeey";
      }
      if (message.includes('whats your name')) {
        speech.text = "my name is bert";
      }
      if (message.includes('how is it going')) {
        speech.text = "how is it going?";
      }
      if (message.includes('whats your favorite color')) {
        speech.text = "blue";
      }
      if (message.includes('do you know')) {
        speech.text = "no i do not know";
      }
      if (message.includes('why')) {
        speech.text = "hehehehehehehehehe";
      }
      if (message.includes('do you know pi')) {
        speech.text = "yes it is 3.14159265359";
      }
      if (message.includes('marsh mello')) {
        speech.text = "dose that mean I can eat you?";
      }
      if (message.includes('hows it going')) {
        speech.text = "good";
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

