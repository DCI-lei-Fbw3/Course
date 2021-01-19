const db = require('../data/db');
const html = require('../data/html');

module.exports = (req, res) => {

    console.log('REQUEST:', req.body);

    db.action = 'balanceShow';
    db.balanceInput = 'placeholder="hidden"';
    db.balanceButton = 'Show Balance';

    res.status(200).send(html.loggedIn({token: db.token, action: db.action, balanceInput: db.balanceInput, balanceButton: db.balanceButton}));
}