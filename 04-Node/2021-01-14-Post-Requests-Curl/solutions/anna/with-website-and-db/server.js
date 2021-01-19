// BANK APPLICATION

// Extra help from this site: https://bezkoder.com/node-express-mongodb-crud-rest-api/#Configure_MongoDB_database_038_Mongoose

// Import dependencies

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import controllers
const depositFunds = require("./controllers/depositFunds");
const authenticateUser = require("./controllers/authenticateUser");
const withdrawFunds = require("./controllers/withdrawFunds");
const displayBalance = require("./controllers/displayBalance");

// Import middleware

const findUser = require("./helpers/findUser");

// Global constants

const port = process.env.PORT || 3552;

// CORS

let corsOptions = {
  origin: "http://localhost:8081",
};

// App settings

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true })); // for application/x-www-form-urlencoded requests
app.use(bodyParser.json()); // for application/json requests

// Connect to Database

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const database = db.db("bank");

  function initialiseDb(req, res, next) {
    res.myDataClient = database;
    next();
  }

  // POST banking requests
  app.post("/authentication", initialiseDb, authenticateUser);
  app.post("/deposit", initialiseDb, findUser, depositFunds);
  app.post("/withdraw", initialiseDb, findUser, withdrawFunds);
  app.post("/balance", initialiseDb, findUser, displayBalance);

  // GET page requests

  app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "/html/login.html"));
  });
});

// Listen to port

app.listen(port, () => {
  console.log(`Server active on  http://localhost:${port}`);
});
