const variables = require("./variables")



const transfer = (req, res) => {
    if (req.body.token == variables.randomToken){
            return res.status(200).send(`You have transferred ${variables.amount} to your account.Your new balance is ${variables.addMoney()}. `);     
    } else 
    res.status(200).send("Transfer denied due to incorrect token."); 
}

module.exports = transfer