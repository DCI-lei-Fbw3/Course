const variables = require("./variables")



const balance = (req, res) => {
    if(req.body.token == variables.randomToken){
        res.status(200).send(`${variables.balance}`); 
    } else
    res.status(200).send(`Balance check denied due to incorrect token`); 
}

module.exports = balance;