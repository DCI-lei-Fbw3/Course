const variables = require("./variables")



const withdraw = (req, res) => {
    if(req.body.token == variables.randomToken){
        if (variables.balance < variables.amount){
        res.status(200).send(`Withdrawal denied due to insufficient funds.`); 
        }else {
            res.status(200).send(`You have withdrawn ${variables.amount} from your account.Your new balance is ${variables.withdrawMoney()}. `);     
        } 
    } else   
    res.status(200).send("Withdrawal denied due to incorrect token.");  
}



module.exports = withdraw;