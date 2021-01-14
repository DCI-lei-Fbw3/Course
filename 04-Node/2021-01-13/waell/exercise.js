

// ----- external dependencies
const express=require("express");
const path=require("path");

//----- application variables

const app=express();
const port=process.env.PORT || "7000";

// routes

app.get("/", (req,res) => {

    res.status(200).send("Welcome to my fancy website ;)");

});

app.get("/message", (req,res) => {

    res.status(200).send(" Anything ");

});

app.get("/profile", (req,res) => {

    res.status(200).send(" your name");

});app.get("/exit", (req,res) => {

    res.status(200).send("Bye Bye...!");

});


// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});




