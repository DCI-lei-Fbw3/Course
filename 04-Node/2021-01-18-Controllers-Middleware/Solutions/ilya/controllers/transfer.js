module.exports = (req, res) => {

    console.log('REQUEST:', req.body);  

    const global = require("../variables/global.js");
    const genHTML = require('../html/genHTML');

    if(global.token === 'not generated yet') res.redirect('http://localhost:7500', 401);  
  
    if(+req.body.transfer + global.balance >= 0) {
        global.balance += +req.body.transfer;
        global.action = 'balanceHide';
        global.balanceInput = `value=${global.balance}`;
        global.balanceButton = 'Hide Balance';
        res.status(200).send(genHTML('loggedIn', global))
    } else {
        global.transfer = +req.body.transfer;
        res.status(200).send(genHTML('invalidTransfer', global));
    }
}