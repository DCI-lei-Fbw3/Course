const router = require("express").Router();
const {check, validationResult} = require("express-validator")
const login = require("../controllers/login.js") 
const registarion = require("../controllers/registarion.js")
const valid = require("../express-validator/expressValidator.js")


module.exports = () => {
    router.post("/registeration", [
        check("name").isLength({min: 5})
        .withMessage("Name should be minimun of 5 chars")
        .isString(),
        check("email").isEmail(),
        check("password").isLength({min: 3})   
    ],
    (req, res, next) => {
        const error = validationResult(req).formatWith(({ msg }) => msg);
        console.log(validationResult(req))
        const hasError = !error.isEmpty();
    
        if (hasError) {
          res.status(422).json({ error: error.array() });
        } else {
          next();
        }
      } 
    , registarion);

    router.post("/login", valid, login)
    return router
}