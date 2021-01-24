const transfer = require("./controllers/transfer")
const balance = require("./controllers/balance")
const withdraw = require("./controllers/withdraw")

const router = require('express').Router(); 

module.exports = () => {
    router.post("/transfer"), 
    balance.post("/balance"), 
    withdraw.post("/withdraw")

    return router
}

