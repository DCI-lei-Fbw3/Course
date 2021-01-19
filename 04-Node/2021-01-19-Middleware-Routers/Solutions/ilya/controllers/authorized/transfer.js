const db = require("../../data/db");
const html = require("../../data/html");

module.exports = (req, res) => {

    if (+req.body.transfer + db.balance >= 0) {
        db.balance += +req.body.transfer;
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
        return;
    }

    db.transfer = +req.body.transfer;
    res.status(418).send(html.invalidTransfer(
        {
            balance: db.balance,
            transfer: db.transfer,
            token: db.token,
            action: db.action,
            balanceInput: db.balanceInput,
            balanceButton: db.balanceButton
        }
    ));

}