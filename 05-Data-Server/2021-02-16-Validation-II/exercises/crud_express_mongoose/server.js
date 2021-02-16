require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/products");
const errorHandlerMiddleware = require("./middleware/errorHandler");
require("./lib/database");
//TK: path module from Node js, allowing acces to the local path system
var path = require('path');

//TK: initilize express instance
const app = express();

//TK: parse the content of all request bodies
app.use(bodyParser.json() );  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

//TK: Router for the products API
app.use("/products", productsRouter());

//TK: Route to the index page
app.get("/",function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });

//TK: the error handling middleware
app.use(errorHandlerMiddleware);


const port = process.env.port || 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
