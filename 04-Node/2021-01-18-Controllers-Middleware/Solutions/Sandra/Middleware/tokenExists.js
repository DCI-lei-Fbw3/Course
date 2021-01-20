
const variables = require("../controllers/variables")

const tokenExists = (req, res, next) => {
    //req.body.token = variables.randomToken
    //console.log(req.body.token)
    
    if (!req.body.token){
        return res.status(200).send("Access denied. Please enter token."); 
    }
    next(); 
}

module.exports = tokenExists; 

