// const express = require ("express");
// const router = express.Router();
const express=require("express");
const router = require("express").Router()
const deposit = require("../controllers/deposit.js");
const withdrawal = require("../controllers/withdraw.js");
const app = express();
const login = require("../controllers/login.js");


module.exports = () => {
    app.post("/login",  login);
    router.post("/deposit",  deposit); 
    router.post("/withdraw", withdrawal);
    return router
}