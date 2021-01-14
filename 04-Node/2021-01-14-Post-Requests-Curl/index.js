

// ----- external dependencies
const express=require("express");
const bodyParser=require('body-parser');



//----- application variables

const app=express();
app.use(bodyParser.urlencoded({ extended:true}));




const port=process.env.PORT || "7000";

// routes

app.get("/test", (req,res) => {

    res.status(200).send("Hi");
   


});





app.post("/login", (req,res) => {

   
    //console.log(req.body.username);

    if(req.body.username == "admin" && req.body.password == "secret"){

         res.status(200).send(" Hi Boss!");

    }else{

        res.status(200).send(" I do not know you!!!");
    }
      

});





// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});




