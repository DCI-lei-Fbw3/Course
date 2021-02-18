// in this file we store all the routes 
// this is the way we require the router method: 
const router = require("express").Router()
const controllersProducts = require("../controllers/products.control")
const controllersUsers = require("../controllers/users.control")
// instead of app, we need to use the const router
router.get("/", controllers.home)


router.get('/products', controllersProducts.getProducts);


router.get('/products/:articleNo', controllersProducts.getProduct);


router.post('/products', controllersProducts.addProduct)


router.put('/products/:articleNo', controllersProducts.updateProduct);


router.delete('/products/:articleNo', controllersProducts.deleteProduct);


router.post('/registration', controllersUsers.registerNewUser)


module.exports = router;