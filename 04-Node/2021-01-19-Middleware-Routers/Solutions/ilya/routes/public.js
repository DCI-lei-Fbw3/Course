const router = require('express').Router();

const login = require('../controllers/public/login');
const auth = require('../controllers/public/auth');

module.exports = () => {

    router.get("/", login);
    router.get("public/login", login);
    router.post("/public/auth", auth);

    return router;
}


