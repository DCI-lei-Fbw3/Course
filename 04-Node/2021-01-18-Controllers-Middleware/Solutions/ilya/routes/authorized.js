const router = require('express').Router();

const transfer = require('../controllers/authorized/transfer');
const balanceShow = require('../controllers/authorized/balanceShow');
const balanceHide = require('../controllers/authorized/balanceHide');

module.exports = () => {

    router.post("/transfer", transfer);
    router.post("/balanceShow", balanceShow);
    router.post("/balanceHide", balanceHide);

    return router;
}

