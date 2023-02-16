"use strict";

const $ = (selector) => document.querySelector(selector);



//Check the postal code is real/usable
const checkPostalCode = (evt) =>{
  let re = new RegExp("^\[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d") //google regexp generators for doing postal code(maybe password too)
  let postal1 = evt.currentTarget.value;
  if(re.test(postal1)){
    $("#postalcodeerror").textContent = "Postal Code OK";
    let postalOkay = 0;
  }else{
    $("#postalcodeerror").textContent = "Please enter a a postal code with format: #A# A#A.";
    let postalOkay = 1;
  }
};

//Save the Device Settings
const saveDevice = evt => {
  evt.preventDefault();  
  if (postalOkay == 0){
    let deviceName = $("#devicename").value;
    let notifications = $("#notifications").value;
    let lightingMode = $("#lights").value;
    let temperature = parseFloat($("#temperature").value);
    let postalCode = $("#postal").value;
  } 
};

//Listening for buttons to be pressed
$("#postal").addEventListener("input", checkPostalCode);
$("#submitdevice").addEventListener("click", saveDevice);
