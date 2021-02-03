const variables = require("./variables.js")



const withdraw = (req, res) => {
   // if(req.body.token == variables.randomToken){
       //let withdrawAmount = +req.body.minus;
       //console.log(variables)
        if (variables.balance < variables.amount){
        return res.status(400).send(`Withdrawal denied due to insufficient funds.`); 

        }
        res.status(200).send(`You have withdrawn ${variables.amount} from your account.Your new balance is ${variables.withdrawMoney()}. `);     
        
  //  } else   
   // res.status(200).send("Withdrawal denied due to incorrect token.");  
}



module.exports = withdraw;