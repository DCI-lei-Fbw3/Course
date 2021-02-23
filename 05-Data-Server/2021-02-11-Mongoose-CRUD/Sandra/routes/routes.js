// in this file we store all the routes 
// this is the way we require the router method: 
const router = require("express").Router()
const controllersProducts = require("../controllers/products.control")
const controllersUser = require("../controllers/users.control")
const validatorMiddleware = require("../middleware/validator")

//instead of app, we need to use the const router
router.get("/", controllersProducts.home)


router.get('/products', controllersProducts.getProducts);


router.get('/products/:articleNo', controllersProducts.getProduct);


router.post('/products', validatorMiddleware.validator, controllersProducts.addProduct)


router.put('/products/:articleNo', validatorMiddleware.validator, controllersProducts.updateProduct);


router.delete('/products/:articleNo', validatorMiddleware.validator, controllersProducts.deleteProduct);


router.post('/registration', validatorMiddleware.validatorReg, controllersUser.registerNewUser);


router.post('/login', controllersUser.loginUser)


module.exports = router;