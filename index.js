const http = require("http");
const fs = require("fs");
const express = require("express");
const path =require("path");
const atmPage = fs.readFileSync("index.html");



const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, ()=>{
    console.log("App listening on port #"+ PORT);
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "index.html"))
})

// app.get("/atm", (req, res)=>{
//     res.sendFile(__dirname + "/index.html");
// })
