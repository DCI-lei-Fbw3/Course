const { login } = require("../models/users")
const jwt = require("jsonwebtoken")




const authenticated = (req,res,next) => {
    if (!req.cookies || !req.cookies.cookieJwToken
        ) {
        return res.status(500).send("you should authorize first")
    }
    // if (!req.cookies.jsToken != login.jwToken) {
    //     return res.status(500).send("token manipulation spoted on following IP #...... your ass in truble b#*!")
    // }
    jwt.verify(req.cookies.cookieJwToken, process.env.SECRET, (error, payload) => {
            if (error) {
                // console.log(error);
                return res.status(401).send("not authorized");
            }
            
            next()
        })
    
}

module.exports = authenticated;