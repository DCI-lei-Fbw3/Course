// ----- external dependencies
const express=require("express");
const bodyParser=require('body-parser');
const validateToken = require("./middleware/validateToken.js");
const router = require("./routers/routs.js")


//----- application variables

const app=express();
app.use(bodyParser.urlencoded({ extended:true}));
const port=process.env.PORT || "3000";
 
//----------------------------

app.use("/account", validateToken,router());

// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});

