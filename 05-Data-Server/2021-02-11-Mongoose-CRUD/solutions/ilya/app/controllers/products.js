const products = require("../models/products");

const getAllProducts = async(req, res) => {
    try{ res.status(200).send(await products.getAllProducts())}
    catch(e) {res.status(404).send('can not get all the products' + e.message)}
}

const getOneProduct = async(req, res) => {
    try{ 
        res.status(200).send(await products.getOneProduct(req.body.articleNo));
    }
    catch(e) {res.status(404).send('can not get the product' + e.message)}
}

const createProduct = async(req, res) => {
    try{       
        res.status(200).send(await products.createProduct(
            req.body.articleNo,
            req.body.name,
            req.body.discription,
            req.body.price
        ));
    }
    catch(e) {res.status(404).send('can not create the product' + e.message)}
}

const updateProduct = async(req, res) => {
    try{ 
        res.status(200).send(await products.updateProduct(
            req.body.articleNo,
            req.body.price
        ));
    }
    catch(e) {res.status(404).send('can not update the price of the product' + e.message)}
}

const deleteProduct = async(req, res) => {
    try{ 
        res.status(200).send(await products.deleteProduct(req.body.articleNo));
    }
    catch(e) {res.status(404).send('can not delete the product' + e.message)}
}


module.exports = {  
    getAllProducts, 
    getOneProduct, 
    createProduct,  
    updateProduct, 
    deleteProduct
};
