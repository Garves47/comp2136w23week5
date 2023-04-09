const http = require("http");
const fs = require("fs");
const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path =require("path");
const app = express();
const PORT = 3000;
let user = req.session.user;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    secret:"secret key shh no tellin"
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  
app.listen(PORT, ()=>{
    console.log("App listening on port #"+ PORT);
});

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/profile", (req, res)=>{
    res.render("profile");
})
