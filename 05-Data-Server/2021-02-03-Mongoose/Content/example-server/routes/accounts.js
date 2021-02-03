const router = require("express").Router();
const accounts = require("../controllers/accounts");

module.exports = () => {
    router.get("/accounts", accounts.getAccount);
    router.post("/accounts", accounts.postAccount);

    return router;
};
