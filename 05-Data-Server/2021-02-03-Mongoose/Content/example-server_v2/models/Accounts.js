const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    iban: {
        type: String,
        required: true,
    },
    pin: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
});


const Account = mongoose.connection.model("accounts", schema);

function getAccount (iban) {
    return new Promise((resolve, reject) => {
        Account.find({
                iban // is the same as "iban: iban"
            })
            .then(result => resolve(result))
            .catch(error => reject(error))
    });
}

module.exports = {
    getAccount,
    // addAccount,
};
