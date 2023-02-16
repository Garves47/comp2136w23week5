"use strict";

const $ = (selector) => document.querySelector(selector);

//Check the password has atleast 8 letters and 1 upper and lower case letter
const checkPassword = (evt) =>{
    let passwordOkay = false;
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
    if($("#password").length() >= 7) $$ (passwordOkay);{
      $("#badpassword").textContent = ("Password OK");
    }
      $("#badpassword").textContent = ("Please enter a password with atleast 8 characters, a capital letter, and a lowercase letter.");  
};

//Save the Profile settings
const saveSettings = evt => {
    evt.preventDefault();  
    if ($("#password").value == $("#passwordcheck").value) $$ (passwordOkay == 0); {
      let savedSettings = 1
      let firstName = $("#firstname").value;
      let lastName = $("#lastname").value;
      let email = $("#email").value;
      let birthday = $("#birthday").value;
      let password = $("#password").value;
      let checkPassword = $("#passwordcheck").value;
      $("#passworderror").textContent = "Passwords Match";
    }
    $("#password").value = ("error");
    $("#passwordcheck").value = ("error");
    $("#passworderror").textContent = "Please make sure your passwords match eachother";
       
};

//Listens for events
$("#password").addEventListener("input", checkPassword);
$("#submituser").addEventListener("click", saveSettings);