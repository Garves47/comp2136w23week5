"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

const song1 = "music/WhatsNewPussycat.mp3";
const song2 = "music/ItsNotUnusual.mp3";

//This is a very dumb John Mulaney bit (context for the next line)
const songList = [song1, song1, song1, song1, song1, song1, song1, song2, song1, song1, song1];
let songPlaying = 0;
let autoplay = false;

//Clock that appears in the header
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
    setInterval(refreshTime, 1000);

function nextSong(){
  songPlaying++;
  if(songPlaying>10){
    songPlaying = 0;
  }
  $$("jukeboxSource").src = songList[songPlaying];
  $$("jukebox").currentTime = 0;
  $$("jukebox").play();

}

function previousSong(){
  songPlaying--;
  if(songPlaying<0){
    songPlaying = 10;
  }
  $$("jukeboxSource").src = songList[songPlaying];
  $$("jukebox").currentTime = 0;
  $$("jukebox").play();
  console.log($$("jukebox"));
  console.log(songPlaying);
}

function autoPlay(){ 
  if(autoplay){
    autoplay=false;
  }else{
    autoplay=true;
  } 
}

function loopCurrent(){
  if($$("jukebox").loop){
    $$("jukebox").loop = false;
  }else{
    $$("jukebox").loop = true;
  }
}

function play(){
  console.log("audio ended")
  if(autoplay){
    songPlaying++;
    if(songPlaying>10){
      songPlaying = 0;
    }
    $$("jukeboxSource").src = songList[songPlaying];
    $$("jukebox").currentTime = 0;
    $$("jukebox").play();
  }
}

document.addEventListener("DOMContentLoaded", () => {

  $("#backwards").addEventListener("click", previousSong);
  $("#forward").addEventListener("click", nextSong);
  $("#loop").addEventListener("click", loopCurrent);
  $("#auto").addEventListener("click", autoPlay);
  $("#jukebox").addEventListener("ended", play);

});