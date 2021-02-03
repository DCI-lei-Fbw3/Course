const variables = require("./variables")

const login = (req, res) => {
    const token = req.cookies.token
    //req.cookies.token = variables.randomToken
    if (req.body.IBAN == "Iban" && req.body.pin == "pin"){

        res.status(200).send(`${res.cookie(variables.token)}`); 
     } else 
    res.status(200).send(`Access denied! Iban and/or pin didn't match. `); 
}

module.exports= login; 