const randomToken = require("random-token");
let userData = require("../userData");
const path = require("path");

function authenticateUser(req, res) {
  const enteredIBAN = req.body.IBAN;
  const enteredPIN = req.body.PIN;
  if (userData.find((user) => user.IBAN === enteredIBAN)) {
    currentUser = userData.find((user) => user.IBAN === enteredIBAN);
    if (currentUser.PIN === enteredPIN) {
      currentUser.currentToken = randomToken(16);
      res.cookie("data", currentUser.currentToken);
      res.status(200).sendFile(path.join(__dirname, "../html/banking.html"));
    } else {
      res.status(402).send("Incorrect PIN");
    }
  } else {
    res.status(401).send("User authentication failed. Please try again.");
  }
}

module.exports = authenticateUser;
