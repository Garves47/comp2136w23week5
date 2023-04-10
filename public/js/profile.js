"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

//Clock that appears in header, each .js file needs this code block for time to work
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

//Check the password has atleast 8 letters and 1 upper and lower case letter
const checkPassword = (evt) =>{
  let re = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).{8,}") //google regexp generators for doing postal code(maybe password too)re = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let password1 = evt.currentTarget.value;
  if(re.test(password1)){
    $("#badpassword").textContent = "Password ok";
    return true;
  }else{
    $("#badpassword").textContent = "Please enter a password with atleast 8 characters, an Uppercase, and lowercase letter.";
    return false;
  }
};

//Save the Profile settings
const saveSettings = (evt) => {
  evt.preventDefault();
  const p1 = $$("password").value;
  const p2 = $$("passwordcheck").value;
  if (p1 == p2) { 
    $("#savefirstname").value = $$("firstname").value;
    $("#savelastname").value = $$("lastname").value;
    $("#saveemail").value = $$("email").value;
    $("#savebirthday").value = $$("birthday").value;
    $("#submiterror").textcontent = "Saved!";
  }else{
    $("#submiterror").textcontent = "Please make sure both passwords match";
  }
}; 

//Reset all input fields
const resetSettings = evt => {
  evt.preventDefault();
  $("#firstname").value = ("");
  $("#lastname").value = ("");
  $("#email").value = ("");
  $("#birthday").value = ("");
  $("#password").value = ("");
  $("#passwordcheck").value = ("");
  $("#submiterror").value = ("");
  $("#badpassword").value = ("");


}

//Preset values and prepping events
document.addEventListener("DOMContentLoaded", () => {
  $("#password").addEventListener("input", checkPassword);
  $("#submituser").addEventListener("click", saveSettings);
  $("#resetuser").addEventListener("click", resetSettings);
  $("#savefirstname").value = ("Kevin");
  $("#savelastname").value = ("Armstrong")
  $("#savebirthday").value = ("2001-08-07")
  $("#saveemail").value = ("karmstrong02@outlook.com")
});

