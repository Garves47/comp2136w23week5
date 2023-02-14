const http = require("http");
const fs = require("fs");
const express = require("express");
const atmPage = fs.readFileSync("index.html");

const app = express();

app.get("/atm", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/", (req, res)=>{
    
})

app.listen(3000);
