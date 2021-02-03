
var data = require("./data.js");


const deposit = (req,res) => {
        data.money += +req.body.add
        res.status(200).send(`your balance after deposit is ${data.money}`)
}


module.exports = deposit; 
       