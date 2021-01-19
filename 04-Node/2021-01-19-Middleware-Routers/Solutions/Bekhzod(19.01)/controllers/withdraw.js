var data = require("./data.js");


const withdrawal= (req,res) => {
     
    if (data.money <= 0 ) {
        return res.status(200).send("your balance is sh** low")
    }
    data.money -= +req.body.minus
    res.status(200).send(`your balance after withdrawal is ${data.money}`)
}

module.exports= 
    withdrawal
;