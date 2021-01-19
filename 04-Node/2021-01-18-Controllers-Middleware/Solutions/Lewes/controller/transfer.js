let currentBalance = require('./details.js')
const user = require('./user.js');


const transfer = (req, res) => {
    //console.log(user.token, req.body.token, currentBalance);

    if (req.body.token == user.token) {
        let newBalance = currentBalance.balance + +req.body.add;

        currentBalance.balance = newBalance;
        res.status(200).send(`New balance is $${currentBalance.balance}`)

    } else {
        res.status(400).send('Can not make transfer as token is not correct!');
    }
}

module.exports = transfer;