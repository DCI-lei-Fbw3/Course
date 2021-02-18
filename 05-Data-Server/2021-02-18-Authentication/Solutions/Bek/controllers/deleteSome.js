const handling = require("../models/DBhandling.js")

const deleteOne = async (req,res) => {
    const linkArticle = req.params.article
    await handling.DeleteProduct(linkArticle)
    res.send(`Folowing product with No: ${linkArticle} has been deleted`)
}

module.exports = deleteOne;