const { check, validationResult} = require("express-validator")


const valid = (req,res, next) => {
    console.log(req.body)
    if([
        check("name").isLength({min: 5}).isString(),
        check("email").isEmail(),
        check("password").isLength({min: 3})   
    ]) {
        next()
    }else {
        const error = validationResult(req)
        return res.status(422).json({error: error.array()})
    }
};

module.exports = valid;