const Accounts = require("../models/accounts")

const getAccount = (req, res) => {
    Accounts.getAccount("Iban")
    .then(result => res.json(result)); 
}; 

const postAccount = (req, res) => {
    Accounts.addAccount(req.body.iban, req.body.pin, req.body.initialBalance)
    .then(result => res.json(result)); 
}

module.exports = {
    getAccount, 
    postAccount,
}