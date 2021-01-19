//const token = require('../controller/user.js');

const tokenCheck = (req, res, next) => {
    //req.body.token != token.token

    if (!req.body.token) {
        res.status(401).send("not authorized. please provide a valid token.");
    }

    //res.status(200).send('Your token checks out.');
    next();
}

module.exports = tokenCheck;