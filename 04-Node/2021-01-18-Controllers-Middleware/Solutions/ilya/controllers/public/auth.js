const db = require("../../data/db");
const html = require("../../data/html");

module.exports = (req, res) => {
    console.log('iban:', req.body.iban, 'pin:', req.body.pin);
    if (req.body.iban === "12" && req.body.pin === "1") {
        db.token = Math.floor(Math.random() * 10000000000000000);
        res.status(200).send(html.authorized(
            {
                token: db.token,
                action: db.action,
                balanceInput: db.balanceInput,
                balanceButton: db.balanceButton
            }
        ));
      /*   db.token = 'not generated yet'; */
        return;
    }
    res.status(401).send(html.unauthorized);
}