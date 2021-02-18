const handling = require("../models/DBhandling.js")

const updateOne = async (req,res) => {
    const linkArticle = req.params.article
    console.log(req.body)
    await handling.UpdateProduct(linkArticle, req.body.name, req.body.description, req.body.price)
    res.send(`name, description and price for article no ${linkArticle} have been updated`)
}

module.exports = updateOne;