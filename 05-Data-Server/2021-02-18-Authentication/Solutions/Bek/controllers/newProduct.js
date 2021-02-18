const handling = require("../models/DBhandling.js")

const createProduct = async (req,res) => {
    await handling.AddProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
    res.send("New product has been added")
}


module.exports = createProduct;