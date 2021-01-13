

// ----- external dependencies
const express=require("express");
const path=require("path");

//----- application variables

const app=express();
const port=process.env.PORT || "7000";

// routes

app.get("/", (req,res) => {

    res.status(200).send(" Hello!!!!!!");

});

app.get("/login", (req,res) => {

    res.status(200).send(" Do you want to log in?");

});




// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});




// Terminal
/* 
1- npm init
2- npm -i -d nodemon
3- npm i exepress
4- npm __filename.js
 */

 // package.json 
/* 
    "scripts": {
      "dev": "nodemon ./index.js" }, 
 */