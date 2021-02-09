var data = require("./data.js")
const jwt = require("jsonwebtoken")



const login = (req,res) => {
      
        if(req.body.IBAN == "DE0802" && req.body.pin == "0802"){
            const secret = "1237uaeawe12312asd"  
            const jwToken = jwt.sign({username : req.body.IBAN},secret)
            res.cookie("cookieJWtoken", jwToken,  { httpOnly: true, maxAge: 60000 })
            res.status(200).send(`your balance is ${data.money} \n and your token is ${jwToken}`);
    
        }else{
            res.status(200).send("access denied");
        }

        // next();
  };

module.exports = login;
