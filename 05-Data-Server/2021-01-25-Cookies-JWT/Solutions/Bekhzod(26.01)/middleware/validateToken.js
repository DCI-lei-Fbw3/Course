
var data = require("../controllers/data.js");

const validateToken = (req,res,next) => {
    // if (!req.body.token){
    //      throw new Error ('please specify token number')
    //     //  return res.status(500).send('please specify token number')
    // }
         // data.tokens  !=  data.tokens
    res.local = {};
    res.local.token = data.tokens; 

    if (data.tokens != req.cookies.token) {
       
        return res.status(200).send(`token incorrect`);
    };
    
    next();
}

module.exports = validateToken;