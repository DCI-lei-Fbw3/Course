const Accounts = require("../models/Accounts");


const getAccount = (req, res) => {
    // we call the function we defined in our model to fetch accounts from the database
    Accounts.getAccount(req.params.iban)
        .then(result => {
            res.json(result);
        })
        .catch(error => res.status(400).send(error));
};


module.exports = {
    getAccount,
};
