// BANK APPLICATION

// Import dependencies

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Import controllers
const depositFunds = require("./controllers/depositFunds");
const authenticateUser = require("./controllers/authenticateUser");
const withdrawFunds = require("./controllers/withdrawFunds");
const displayBalance = require("./controllers/displayBalance");

// Import middleware
const doesTokenExist = require("./middleware/doesTokenExist");

// Global constants

const port = process.env.PORT || 4456;

// App settings

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// GET page requests

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/html/login.html"));
});

// POST banking requests

app.post("/authentication", authenticateUser);
app.post("/deposit", doesTokenExist, depositFunds);
app.post("/withdraw", doesTokenExist, withdrawFunds);
app.post("/balance", doesTokenExist, displayBalance);

// Listen to port

app.listen(port, () => {
  console.log(`Server active on  http://localhost:${port}`);
});
