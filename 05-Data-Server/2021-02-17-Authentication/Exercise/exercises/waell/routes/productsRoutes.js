const router = require('express').Router()
const { getProducts, getProduct, addProduct } = require('../controllers/productControls')




// Products


router.get('/', getProducts);

router.get('/:num', getProduct);

router.post('/', addProduct);


module.exports = router;