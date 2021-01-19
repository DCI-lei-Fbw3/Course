
var data = require("./data.js");
// var money = require("./data.js");


const deposit = (req,res) => {
    if (req.body.token == data.tokens) {
        data.money += +req.body.add
        res.status(200).send(`your balance after deposit is ${data.money}`)
    }
    else res.status(200).send(`go away`)};


module.exports = deposit; 
       