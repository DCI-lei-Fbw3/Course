//let newBalance = require('./transfer.js');
let currentBalance = require('./details.js');

const withdraw = (req, res) => {

    let amount = +req.body.minus;

    //let withdraw = currentBalance.balance - amount;
    // currentBalance.balance = withdraw;

    if (currentBalance.balance < amount) {
        res.status(400).send('Insufficient funds can not make this withdrawal!');
    } else {
        currentBalance.balance -= amount;
        res.status(200).send(`New balance after withdrawal is $${currentBalance.balance}`)
    }
}

module.exports = withdraw;