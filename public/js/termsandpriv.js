"use strict";

const $ = (selector) => document.querySelector(selector);

const acceptTerms = () =>{
    $("#terms").setAttribute("class","hidden");
}

const acceptPrivacy = () =>{
    $("#terms").setAttribute("class","hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const query = window.location.search;
    const urlParameters = new URLSearchParams(query)
    const accepted = urlParameters.get("accepted")
});