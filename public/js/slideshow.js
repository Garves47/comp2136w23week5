"use strict";

const $ = (selector) => document.querySelector(selector);
const caption =$("#caption")
const mainImage =$("#main_image")
let imageCache = [];
//Starting at a higher value to auto skip inactive list items
let imageCounter = 3;

//Swaps images based on which list item it is on the page
const swapImage = ()=>{
    imageCounter = (imageCounter+1) % (imageCache.length-1);
    mainImage.src = imageCache[imageCounter].src
    mainImage.alt = imageCache[imageCounter].alt
    caption.textContent = imageCache[imageCounter].alt
    console.log(imageCounter);
    //fixed the issue of it trying to read the footer and header as possible list items with images
    if(imageCounter>=8){
        imageCounter=3;
    }
}

//Clock that appears in header, each .js file needs this code block for time to work
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
    setInterval(refreshTime, 1000);

//Increments the image counter by -1 and force updates the image/caption
const goLeft = ()=>{
    imageCounter = imageCounter-1
    mainImage.src = imageCache[imageCounter].src
    mainImage.alt = imageCache[imageCounter].alt
    caption.textContent = imageCache[imageCounter].alt
}

//Increments the image counter by 1 and force updates the image/caption
const goRight = ()=>{
    imageCounter = imageCounter+1
    mainImage.src = imageCache[imageCounter].src
    mainImage.alt = imageCache[imageCounter].alt
    caption.textContent = imageCache[imageCounter].alt
    
}

document.addEventListener("DOMContentLoaded", () => {

    $("#left").addEventListener("click", goLeft);
    $("#right").addEventListener("click", goRight);

    const links= document.querySelectorAll("a");

    let image;
//Block for actually choosing the image, and how long it stays
    for(let link of links){
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        imageCache.push(image);
    }
    setInterval(swapImage,4000)
});