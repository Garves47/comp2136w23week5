"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);
let postalOkay = false;
//Set a couple variables to global for use in multiple functions
let timer;
let timerLength;
let saveTemp;

//Clock that appears in the header
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);


//Check the postal code is real/usable
const checkPostalCode = (evt) =>{
  let re = new RegExp("^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]") //google regexp generators for doing postal code(maybe password too)re = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let postal1 = evt.currentTarget.value;
  if(re.test(postal1)){
    $("#postalcodeerror").textContent = "postal code ok";
    postalOkay = true;
  }else{
    $("#postalcodeerror").textContent = "Please enter a a postal code with format: A#A #A#.";
  }
};

//Set the Device Settings
const saveDevice = evt => {
  evt.preventDefault();  
  if (postalOkay){
    
    $("#savedevice").value = $$("devicename").value;
    $("#savenotification").value = $$("notifications").value;
    $("#savelighting").value = $$("lights").value;
    $("#savetemperature").value = parseFloat($$("temperature").value);
    $("#savepostal").value = $$("postal").value;
  } 
};

//Reset all input fields
const resetDevice = evt => {
  evt.preventDefault();
  $("#devicename").value = ("");
  $("#notifications").value = ("On");
  $("#lights").value = ("Off");
  $("#temperature").value = ("10");
  $("#postal").value = ("");
  $("#postalcodeerror").textContent = ("");

}
//What the timer does
const updateTimer = evt =>{
  console.log("happened");
  //Reduce timer time by 1 second
  timerLength -= 1000;
  //Solves for the hours, minutes, and seconds remaining
  let hours = Math.floor((timerLength % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timerLength % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timerLength % (1000 * 60)) / 1000);
  //If timerlength is longer than 0, update the timer
  if(timerLength>=0){
    $("#timerTime").textContent = (hours+":"+minutes+":"+seconds);
  }else{ //Otherwise reset the saved temp to its original value
    $("#savetemperature").value = saveTemp;
  }
}
//Prepping the timer
const timedTemperature = evt => {
  //sets how long the timer lasts in miliseconds
  timerLength = ($$("hours").value*60*60*1000) + ($$("minutes").value*60*1000);
  //Saves the current temp
  saveTemp = $("#savetemperature").value;
  //sets the new timed temp
  $("#savetemperature").value = $("#temptemp").value;
  //starts the timer
  timer = setInterval(updateTimer, 1000);
}


//Preset values and prepping events
document.addEventListener("DOMContentLoaded", () => {
  $("#postal").addEventListener("input", checkPostalCode);
  $("#submitdevice").addEventListener("click", saveDevice);
  $("#resetdevice").addEventListener("click", resetDevice);
  $("#setTempTime").addEventListener("click", timedTemperature);

  $("#savedevice").value = ("Glen");
  $("#savenotification").value = ("On")
  $("#savelighting").value = ("Off")
  $("#savepostal").value = ("L4M4J2")
  $("#savetemperature").value = ("10")

});


//console log the variable for saved temp
//