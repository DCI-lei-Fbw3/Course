const findUser = require("../helpers/findUser");

function displayBalance(req, res) {
  const token = req.body.token;
  if (findUser(token)) {
    let currentUser = findUser(token);
    res.status(200).send(`${currentUser.balance}`);
  } else res.status(401).send("Error. Please try again.");
}

module.exports = displayBalance;
