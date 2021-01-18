var data = require("./data.js");



const withdrawal= (req,res) => {
    data.money -= +req.body.minus 
    if (data.money <= 0 ) {
        res.status(200).send("your balance is sh** low")
    }
    else if (req.body.token != data.tokens) 
        res.status(200).send(`token incorrect`)
    else
        res.status(200).send(`your balance after withdrawal is ${data.money}`)
}


module.exports= 
    withdrawal
;