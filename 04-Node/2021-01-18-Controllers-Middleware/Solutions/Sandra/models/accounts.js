const mongoose = require('mongoose'); 

const accountSchema = new mongoose.Schema ({
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
})

const Account = mongoose.connection.model("accounts", accountSchema); 

function addAccount (iban, pin, initialBalance) { 
    return new Promise ((resolve, reject) => {
        const newAccount = new Account ({
            iban, 
            pin, 
            balance: initialBalance,
        });
        newAccount.save()
            .then(result => resolve(result))
            .catch(error => reject (error)); 

    });
}

function getAccount (iban) {
    return new Promise((resolve, reject) => {
        Account.find({ iban })
        .then(result => resolve(result))
        .catch(error => reject (error)); 
    })
}

module.exports = {
    getAccount, 
    addAccount, 
}