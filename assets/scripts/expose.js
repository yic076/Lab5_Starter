// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  let hornList = document.getElementById("horn-select");
  let hornImage = document.querySelector("header + img");
  hornList.addEventListener('change', function(){
    hornImage.src = "assets/images/" + hornList.value + ".svg";
  });

  let playSound = document.querySelector("button");
  let hornSound = document.querySelector("audio");
  playSound.addEventListener('click',function(){
    if(hornList.value != "select"){
      hornSound.src = "assets/audio/" + hornList.value + ".mp3";
      hornSound.play();
    }
    if(hornList.value == "party-horn")
      jsConfetti.addConfetti();
  });

  let volume = document.querySelector("#volume-controls input");
  let volImage = document.querySelector("#volume-controls img");
  volume.addEventListener('input', function(){
    let value = volume.value;
    hornSound.volume = value / 100;
    if(value == 0){
      volImage.src = "assets/icons/volume-level-0.svg";
      volImage.alt = "Volume level 0";
    } else if(value < 33){
      volImage.src = "assets/icons/volume-level-1.svg";
      volImage.alt = "Volume level 1";
    } else if(value < 67){
      volImage.src = "assets/icons/volume-level-2.svg";
      volImage.alt = "Volume level 2";
    } else{
      volImage.src = "assets/icons/volume-level-3.svg";
      volImage.alt = "Volume level 3";
    }
  });
}