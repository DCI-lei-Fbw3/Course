const db = require('../../data/db');
const html = require('../../data/html');

module.exports = (req, res) => {

    db.action = 'authorized/balanceShow';
    db.balanceInput = 'placeholder="hidden"';
    db.balanceButton = 'Show Balance';

    res.status(200).send(html.authorized(
        {
            token: db.token,
            action: db.action,
            balanceInput: db.balanceInput,
            balanceButton: db.balanceButton
        }
    ));
}