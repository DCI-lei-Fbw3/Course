const changeBalance = require("../helpers/changeBalance");
const findUser = require("../helpers/findUser");

function depositFunds(req, res) {
  const amount = parseInt(req.body.amount);
  let currentUser = findUser(req.body.token);

  changeBalance("deposit", amount);
  res.status(200).send(`
          You have successfully deposited ${amount} into account ${currentUser.IBAN}.

          Your current balance is ${currentUser.balance}`);
}

module.exports = depositFunds;
