const handling = require("../models/DBhandling.js")


const printAll = async (req,res) => {
    const product = await handling.ArrayProduct()
    res.json(product)
}

module.exports = printAll;