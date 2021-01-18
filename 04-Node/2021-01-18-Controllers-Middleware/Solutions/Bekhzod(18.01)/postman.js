// ----- external dependencies
const express=require("express");
const bodyParser=require('body-parser');
const login = require("./modules/login.js");
const deposit = require("./modules/deposit.js");
const withdrawal = require("./modules/withdraw.js");

//----- application variables

const app=express();
app.use(bodyParser.urlencoded({ extended:true}));
const port=process.env.PORT || "3000";
 
//----------------------------

app.post("/login", login);

app.post("/deposit", deposit); 
     
app.post("/withdraw", withdrawal);

// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});

