const handling = require("../models/DBhandling.js")


const findOne = async (req,res) => {
    const article = await handling.ArticleInObject(req.params.article)
    res.json(article)
}

module.exports = findOne;