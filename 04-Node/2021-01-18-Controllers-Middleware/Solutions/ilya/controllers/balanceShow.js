const db = require("../data/db.js");
const html = require("../data/html");

module.exports = (req, res) => {

    console.log('REQUEST:', req.body);
    
    db.action = 'balanceHide';
    db.balanceInput = `value=${db.balance}`;
    db.balanceButton = 'Hide Balance';
  
    res.status(200).send(html.loggedIn({token: db.token, action: db.action, balanceInput: db.balanceInput, balanceButton: db.balanceButton}));
}