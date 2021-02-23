const products = require("../models/products");


const home = (req, res) => {
    res.render("index") 
}

const getProducts = async(req, res) => {
    res.status(200).json(await products.getProducts())
}

const getProduct = async(req, res) => {
    // params = is an object that includes whatever comes after the : . The key is articleNo, and its value will be populated with whatever is inserted in the search bar on the browser after products/article number goes here 
        //console.log(req.params.articleNo)
        res.status(200).json(await products.getProduct(req.params.articleNo))
    }

const addProduct = async(req, res) => {
        //console.log(req.body)
        await products.addProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
        res.send("Product added successfully")
       
    }

const updateProduct = async(req, res) => {
    await products.updateProduct(req.params.articleNo, req.body.name, req.body.description, req.body.price)
    res.send("Product updated successfully")
}

const deleteProduct = async(req, res) => {
    await products.deleteProduct(req.params.articleNo)
    res.send("Product deleted successfully")
}

module.exports = {
    home,
    getProducts, 
    getProduct,  
    addProduct, 
    updateProduct,
    deleteProduct
}