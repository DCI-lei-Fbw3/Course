// first npm install dotenv 
// we use this so that we can put in a separate file (.env) sensitive data and then gitignore it. It will only be accessible to me, but it can be run on a separate machine as well. 
// makes the env variables readable 
require("dotenv").config(); 
const express = require("express"); 
const bodyParser = require("body-parser"); 
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

//one of the ways to connect to mongodb is by using the module mongoose. It handles your mongo database. It's kind of like an assistant that helps you work with mongodb. 
//const mongoose = require("mongoose"); 

//by requiring this document, we are connecting to the database
require("./lib/db"); 

const routes = require("./routes/routes")

const app = express(); 

app.use(bodyParser.urlencoded( { extended:true})); 
app.use(express.json()); 
app.set("view engine", "ejs"); 
app.use(cookieParser())
app.use(routes);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});


 
