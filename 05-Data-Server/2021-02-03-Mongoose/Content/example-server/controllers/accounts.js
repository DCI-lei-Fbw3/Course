const Accounts = require("../models/Accounts");

const getAccount = (req, res) => {
    Accounts.getAccount("DE1234")
        .then(result => res.json(result));
};

const postAccount = (req, res) => {
    Accounts.addAccount(req.body.iban, req.body.pin, req.body.initialBalance)
        .then(result => res.json(result));
};

module.exports = {
    getAccount,
    postAccount,
};
