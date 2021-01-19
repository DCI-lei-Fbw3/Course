const db = require("../../data/db.js");
const html = require("../../data/html");

module.exports = (req, res) => {

    db.action = 'authorized/balanceHide';
    db.balanceInput = `value=${db.balance}`;
    db.balanceButton = 'Hide Balance';

    res.status(200).send(html.authorized(
        {
            token: db.token,
            action: db.action,
            balanceInput: db.balanceInput,
            balanceButton: db.balanceButton
        }
    ));
}