const productControllers = require('../model/product');
const jwt = require('jsonwebtoken');


const getProducts = async (req, res) => {
    const products = await getProducts()
    res.json(products)
    console.log(products)
};

const getProduct = async (req, res) => {
    const products = await getProduct(req.params.num)
    res.json(products)
    console.log(products)
};

const addProduct = async (req, res) => {
    await addProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
    res.send('Product added')
};


module.exports = {
    getProducts,
    getProduct,
    addProduct,
};
   