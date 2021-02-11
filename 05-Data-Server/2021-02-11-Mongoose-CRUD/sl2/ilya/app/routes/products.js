const router = require('express').Router();
const {getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/products.js');

module.exports = () => {

    router.get('/get-all-products', getAllProducts);
    router.get('/get-one-product', getOneProduct);
    router.post('/create-product', createProduct);
    router.put('/update-product', updateProduct);
    router.delete('/delete-product', deleteProduct);

    return router;
}

