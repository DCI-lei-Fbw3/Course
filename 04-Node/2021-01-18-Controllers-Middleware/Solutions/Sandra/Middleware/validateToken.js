const variables = require("../controllers/variables")

const validateToken = (req, res, next) => {

//req.body.token = variables.randomToken; 

    if (req.body.token != variables.randomToken){
        return res.status(200).send("Access denied due to incorrect token."); 
    }
    next(); 
}

module.exports = validateToken; 