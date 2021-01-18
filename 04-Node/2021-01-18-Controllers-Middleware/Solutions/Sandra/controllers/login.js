const variables = require("./variables")

const login = (req, res) => {
    if (req.body.IBAN == "Iban" && req.body.pin == "pin"){
        res.status(200).send(`${variables.randomToken}`); 
     } else 
    res.status(200).send(`Access denied! Iban and/or pin didn't match. `); 
}

module.exports= login; 