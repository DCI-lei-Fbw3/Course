// BANK APPLICATION

// Import dependencies

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const randomToken = require("random-token");

// Global constants

const port = process.env.PORT || 4456;

// App settings

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Set users

const userData = [
  { IBAN: "DE123456", PIN: "123456", balance: 345 },
  { IBAN: "DE234567", PIN: "234567", balance: 3115 },
  { IBAN: "DE345678", PIN: "345678", balance: 45 },
];

// Set routes

let currentUser;

// GET page requests

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/html/login.html"));
});

// POST banking requests

app.post("/authentication", authenticateUser);
app.post("/deposit", depositFunds);
app.post("/withdraw", withdrawFunds);
app.post("/balance", displayBalance);

// Define functions

function authenticateUser(req, res) {
  const enteredIBAN = req.body.IBAN;
  const enteredPIN = req.body.PIN;
  if (userData.find((user) => user.IBAN === enteredIBAN)) {
    currentUser = userData.find((user) => user.IBAN === enteredIBAN);
    if (currentUser.PIN === enteredPIN) {
      currentUser.currentToken = randomToken(16);
      res.cookie("data", currentUser.currentToken);
      res.status(200).sendFile(path.join(__dirname, "/html/banking.html"));
    } else {
      res.status(402).send("Incorrect PIN");
    }
  } else {
    res.status(401).send("User authentication failed. Please try again.");
  }
}

function depositFunds(req, res) {
  const token = req.body.token;
  const amount = parseInt(req.body.amount);
  if (findUser(token)) {
    currentUser = findUser(token);
    if (currentUser.currentToken === token) {
      changeBalance("deposit", amount);
      res.status(200).send(`
          You have successfully deposited ${amount} into account ${currentUser.IBAN}.

          Your current balance is ${currentUser.balance}`);
    }
  } else res.status(401).send("Error. Please try again.");
}

function withdrawFunds(req, res) {
  const token = req.body.token;
  const amount = req.body.amount;
  if (findUser(token)) {
    currentUser = findUser(token);
    if (currentUser.currentToken === token) {
      if (amount > currentUser.balance) {
        res
          .status(418)
          .send("You do not have the requisite funds to withdraw that amount.");
      }
      changeBalance("withdraw", amount);
      res.status(200).send(`
          You have successfully deposited ${amount} into account ${currentUser.IBAN}.

          Your current balance is ${currentUser.balance}`);
    }
  } else res.status(401).send("Error. Please try again.");
}

function displayBalance(req, res) {
  const token = req.body.token;
  if (findUser(token)) {
    currentUser = findUser(token);
    if (currentUser.currentToken === token) {
      res.status(200).send(`${currentUser.balance}`);
    }
  } else res.status(401).send("Error. Please try again.");
}

function changeBalance(action, amount) {
  switch (action) {
    case "deposit":
      currentUser.balance += amount;
      break;
    case "withdraw":
      currentUser.balance -= amount;
      break;
    default:
      break;
  }
}

function findUser(token) {
  return userData.find((user) => user.currentToken === token);
}

// Listen to port

app.listen(port, () => {
  console.log(`Server active on  http://localhost:${port}`);
});
