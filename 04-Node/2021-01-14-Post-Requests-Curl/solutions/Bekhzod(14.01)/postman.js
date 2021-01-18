// ----- external dependencies
const express=require("express");
const bodyParser=require('body-parser');


//----- application variables

const app=express();
app.use(bodyParser.urlencoded({ extended:true}));

const port=process.env.PORT || "3000";
 
// routes

var tokens = Math.floor(Math.random()*Math.floor(1000));
var money = 1000;
//----------------------------

app.get("/test", (req,res) => {
    res.status(200).send("Hi");   
});

app.post("/login", (req,res) => {

    if(req.body.IBAN == "DE0802" && req.body.pin == "0802"){
    
        res.status(200).send(`your balance is ${money} \n and your token is ${tokens}`);

    }else{
        res.status(200).send("access denied");
    }
});

app.post("/deposit", (req,res) => {
    if (req.body.token == tokens) {
        money += +req.body.add
        res.status(200).send(`your balance after deposit is ${money}`)
    }
    else res.status(200).send(`go away`)}
    );
     
app.post("/withdraw", (req,res) => {
    money -= +req.body.minus 
    if (money <= 0 ) {
        res.status(200).send("your balance is sh** low")
    }else
    {res.status(200).send(`your balance after withdrawal is ${money}`)}
});

// server activation

app.listen(port, () => {

    console.log(`My express app is running on http://localhost:${port}`);

});

