const router = require("express").Router()
const controllerProducts = require("../controllers/controllerProduct")
const authentication = require("../authentication/authentication")
const {check,validationResult} = require("express-validator")



module.exports = ()=>{
    router.post("/user",[
        check("name").isLength({min:4}).withMessage("You have to write the Name"),
        check("email").isEmail().withMessage("You have to write the email"),
        check("password").exists().withMessage("You forgot entering  the password")
    ],controllerProducts.postUser);
    
    router.post("/login",[
        check("email").isEmail().withMessage("You have to write the email"),
        check("password").exists().withMessage("You forgot entering  the password")
    ],controllerProducts.loginUser) ;
    router.get("/products/",authentication.authenticationUser,controllerProducts.getProducts);

    router.get("/products/:articleNo",authentication.authenticationUser,controllerProducts.getProductsByArticleNo) ;
    
    router.put("/products/:articleNo",authentication.authenticationUser,controllerProducts.updateByArticleNo);
    
    router.delete("/products/:articleNo",authentication.authenticationUser,controllerProducts.deleteByArticleNo);

    return router;
}


