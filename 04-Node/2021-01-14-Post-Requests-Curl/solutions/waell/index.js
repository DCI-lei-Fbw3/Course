// ----- external dependencies

const express=require("express");
const bodyParser=require('body-parser');


//----- application variables

const app=express();
app.use(bodyParser.urlencoded({ extended:true}));
const port=process.env.PORT || "3001";

// import the controllers

const login = require("./content/login.js");
const balance = require("./content/balance")
const test = require("./content/test.js")

// routes

app.get("/test", test);

app.post("/login", login);

app.get("/balance", balance);

// server activation
app.listen(port, () => {
    console.log(`My express app is running on http://localhost:${port}`);
});

// curl -d "IBAN=DE12345678&PIC=XX1234" -X POST  http://localhost:3001/login