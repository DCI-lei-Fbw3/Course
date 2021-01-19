const findUser = require("../helpers/findUser");
const changeBalance = require("../helpers/changeBalance");

function withdrawFunds(req, res) {
  const token = req.body.token;
  const amount = req.body.amount;
  if (findUser(token)) {
    let currentUser = findUser(token);
    if (amount > currentUser.balance) {
      res
        .status(418)
        .send("You do not have the requisite funds to withdraw that amount.");
    } else {
      changeBalance("withdraw", amount);
      res.status(200).send(`
          You have successfully deposited ${amount} into account ${currentUser.IBAN}.

          Your current balance is ${currentUser.balance}`);
    }
  } else res.status(401).send("Error. Please try again.");
}

module.exports = withdrawFunds;
