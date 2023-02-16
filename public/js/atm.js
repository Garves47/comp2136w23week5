"use strict";

const $ = (selector) => document.querySelector(selector);

//Check the password has atleast 8 letters and 1 upper and lower case letter
const checkPassword = (evt) =>{
  for(int; i=0; i<$("#password").length()) i++;{  //Weird fixes, come back to fix if problem
    pc = $("#password").charAt(i);
    if(character.isUpperCase(pc)){
      hasCapital = true;
    } else if (CharacterData.isLowerCase(pc)){
      hasLower = true;
    }
    if(hasCapital && hasLower)
      passwordOkay = true;
  }
  passwordOkay = false;
  if($("#password").length() >= 7) $$ (passwordOkay);{
    $("#badpassword").textContent = "";
  }
    $("#badpassword").textContent = "Please enter a password with atleast 8 characters, a capital letter, and a lowercase letter.";
  
}

//Check the postal code is real/usable
const checkPostalCode = (evt) =>{
  let re = new RegExp("^\[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d") //google regexp generators for doing postal code(maybe password too)
  let postal1 = evt.currentTarget.value;
  if(re.test(postal1)){
    $("#postalcodeerror").textContent = "";
    let postalOkay = 0;
  }else{
    $("#postalcodeerror").textContent = "Please enter a a postal code with format: #A# A#A.";
    let postalOkay = 1;
  }
}

//Save the Profile settings
const saveSettings = evt => {
  if ($("#password").value == $("#passwordcheck").value) $$ (passwordOkay == 0); {
    let savedSettings = 1
    let firstName = $("#firstname").value;
    let lastName = $("#lastname").value;
    let email = $("#email").value;
    let birthday = $("#birthday").value;
    let password = $("#password").value;
    let checkPassword = $("#passwordcheck").value;
    $("#passworderror").textContent = "";
  }
  password = ("");
  checkPassword = ("");
  $("#passworderror").textContent = "Please make sure your passwords match eachother";
     
}

//Save the Device Settings
const saveDevice = evt => {
  if (postalOkay == 0){
    let deviceName = $("#devicename").value;
    let notifications = $("#notifications").value;
    let lightingMode = $("#lights").value;
    let temperature = parseFloat($("#temperature").value);
    let postalCode = $("#postal").value;
  } 
}

//Listening for buttons to be pressed
$("#password").addEventListener("input", checkPassword);
$("#postal").addEventListener("input", checkPostalCode);
$("#submituser").addEventListener("click", saveSettings);
$("#submitdevice").addEventListener("click", saveDevice);

