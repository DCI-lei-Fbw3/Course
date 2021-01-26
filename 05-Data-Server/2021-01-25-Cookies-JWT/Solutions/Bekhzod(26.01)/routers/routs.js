// const express = require ("express");
// const router = express.Router();

const router = require("express").Router()
const deposit = require("../controllers/deposit.js");
const withdrawal = require("../controllers/withdraw.js");


module.exports = () => {
    
    router.post("/deposit",  deposit); 
    router.post("/withdraw", withdrawal);
    return router
}