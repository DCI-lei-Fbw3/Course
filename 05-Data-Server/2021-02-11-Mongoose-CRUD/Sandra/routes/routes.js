// in this file we store all the routes 
// this is the way we require the router method: 
const router = require("express").Router()
const controllers = require("../controllers/products.control")

// instead of app, we need to use the const router
router.get("/", controllers.home)


router.get('/products', controllers.getProducts);


router.get('/products/:articleNo', controllers.getProduct);


router.post('/products', controllers.addProduct)


router.put('/products/:articleNo', controllers.updateProduct);


router.delete('/products/:articleNo', controllers.deleteProduct);


module.exports = router;