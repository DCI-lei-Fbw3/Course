var data = require("./data.js")


const login = (req,res) => {
        
        if(req.body.IBAN == "DE0802" && req.body.pin == "0802"){
        
            res.status(200).send(`your balance is ${data.money} \n and your token is ${data.tokens}`);
    
        }else{
            res.status(200).send("access denied");
        }
  };

module.exports = login;
