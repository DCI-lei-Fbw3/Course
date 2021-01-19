const db = require("../data/db");
const html = require("../data/html");

module.exports = (req, res) => {

    console.log('REQUEST:', req.body);

    if (req.body.iban === "12" && req.body.pin === "1") {
        db.token = Math.floor(Math.random() * 10000000000000000);
        console.log('token:', db.token);
        console.log('action:', db.action);
        console.log('balanceInput:', db.balanceInput);
        console.log('balanceButton:', db.balanceButton);
        res.status(200).send(html.loggedIn({token: db.token, action: db.action, balanceInput: db.balanceInput, balanceButton: db.balanceButton}));
        return;
    } 
    res.status(401).send(html.invalidLogIn);
}