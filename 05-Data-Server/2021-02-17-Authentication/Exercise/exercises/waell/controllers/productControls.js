const db = require('../model/product');
const jwt = require('jsonwebtoken');


const getProducts = async (req, res) => {
    const products = await db.findProducts();
    console.log(products);
    res.send(products);
};

const getProduct = async (req, res) => {
    const products = await db.getProduct(req.params.num)
    res.json(products)
    console.log(products)
};

const addProduct = async (req, res) => {
    await db.addProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
    res.send('Product added')
};


module.exports = {
    getProducts,
    getProduct,
    addProduct,
};
   