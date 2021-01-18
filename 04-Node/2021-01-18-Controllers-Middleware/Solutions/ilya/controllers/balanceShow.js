module.exports = (req, res) => {

    console.log('REQUEST:', req.body);
    
    const genHTML = require("../html/genHTML");

    const global = require("../variables/global.js");
    global.action = 'balanceHide';
    global.balanceInput = `value=${global.balance}`;
    global.balanceButton = 'Hide Balance';

    if(global.token === 'not generated yet') res.status(401).send('http://localhost:7500');
  
    res.status(200).send(genHTML('loggedIn', global));
}