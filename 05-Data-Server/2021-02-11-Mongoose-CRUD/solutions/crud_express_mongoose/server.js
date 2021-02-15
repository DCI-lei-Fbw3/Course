require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/products");
const errorHandlerMiddleware = require("./middleware/errorHandler");
require("./lib/database");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/products", productsRouter());


app.use(errorHandlerMiddleware);


const port = process.env.port || 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
