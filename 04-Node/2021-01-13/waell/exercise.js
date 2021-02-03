

// ----- external dependencies
const express=require("express");
const path=require("path");

//----- application variables

const app=express();
const port=process.env.PORT || "3001";


// routes

app.get("/", (req, res) =>
    res.status(200).sendFile(path.join(__dirname, "index.html"))
);
/* 
app.get("/", (req,res) => {

    res.status(200).send("Welcome to my fancy website ;)");

});
 */
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

})



/* 
app.get("/login", (req,res) => { 
    //res.status(200).write("< "); 
    //res.status(200).write(" ... Hellooooo"); 
res.sendFile(__dirname+'/index.html'); }); 
 */