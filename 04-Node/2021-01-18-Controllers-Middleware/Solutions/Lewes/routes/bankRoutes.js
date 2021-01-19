const transfer = require('../controller/transfer.js');
const withdraw = require('../controller/withdraw.js');
const balance = require('../controller/balance.js');

const router = require('express').Router();

module.exports = () => {
    router.post('/transfer', transfer);
    router.post('/withdraw', withdraw);
    router.post('/balance', balance);

    return router;
}