let currentBalance = require('./details.js');
let theToken = require('./user.js');

const balance = (req, res) => {
    if (req.body.token == theToken.token) res.status(200).send(`Your balance is: $${currentBalance.balance}`);
    else res.status(200).send(`Can not get your balance sorry.`);
}

module.exports = balance;