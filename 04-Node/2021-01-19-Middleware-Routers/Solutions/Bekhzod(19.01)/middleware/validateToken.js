
var data = require("../controllers/data.js");

const validateToken = (req,res,next) => {
    if (req.body.token != data.tokens) {
        
        return res.status(200).send(`token incorrect`);
    };
     
    next();
}

module.exports = validateToken;