"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);
let postalOkay = false;

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
}

//Preset values and prepping events
document.addEventListener("DOMContentLoaded", () => {
  $("#postal").addEventListener("input", checkPostalCode);
  $("#submitdevice").addEventListener("click", saveDevice);
  $("#resetdevice").addEventListener("click", resetDevice);
  $("#savedevice").value = ("Glen");
  $("#savenotification").value = ("On")
  $("#savelighting").value = ("Off")
  $("#savepostal").value = ("L4M4J2")
  $("#savetemperature").value = ("10")
});

