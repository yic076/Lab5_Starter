// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynth = window.speechSynthesis;
  let voices;
  let voiceList = document.querySelector("textarea+select");
  let talk = document.querySelector("button");
  let textBox = document.querySelector("textarea");
  let face = document.querySelector("img");
  let utterance

  speechSynthesis.addEventListener("voiceschanged", function(){
    voices = speechSynth.getVoices();
    for(let i = 0; i < voices.length; i++){
      let opt = document.createElement("option");
      opt.value = voices[i].name;
      opt.text = voices[i].name;
      voiceList.add(opt);
    }
  });

  talk.addEventListener("click", function(){
    utterance = new SpeechSynthesisUtterance(textBox.value);
    utterance.voice = voices.filter(function(voice){
      return voice.name == voiceList.value;
    })[0];
    speechSynthesis.speak(utterance);
    face.src = "assets/images/smiling-open.png";
    face.alt = "Smiling open face";
  });

  setInterval(function(){
    if(textBox.value != "" && speechSynth.speaking){
      face.src = "assets/images/smiling-open.png";
      face.alt = "Smiling face";
    }else{ 
      face.src = "assets/images/smiling.png";
      face.alt = "Smiling face";
    }
  });
}



