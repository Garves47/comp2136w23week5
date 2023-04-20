const http = require("http");
const fs = require("fs");
const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path =require("path");
const app = express();
const PORT = 3000;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    secret:"very secret key"
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  
app.listen(PORT, ()=>{
    console.log("App listening on port #"+ PORT);
});

//Dashboard Page
app.get("/", (req, res)=>{
    res.render("index");
})

//Profile page and update
app.get("/profile", (req, res)=>{
    let user = req.session.user;
    res.render("profile", {user});
})


//TERMS PAGE AND UPDATED VERSION
app.get("/terms", (req, res)=>{
    res.render("terms");
})


//PRIVACY PAGE
app.get("/privacy", (req, res)=>{
    res.render("privacy");
})

//Slideshow Page
app.get("/slideshow", (req, res)=>{
    res.render("slideshow");
})


app.post("/update-profile",(req, res)=>{
    console.log(req.body);
    req.session.user = req.body;
    res.redirect("/profile");
});