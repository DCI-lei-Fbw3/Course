require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3553 ;
var { AddProduct, ArrayProduct, ArticleInObject, UpdateProduct, DeleteProduct } = require("./DBhandling");


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/products", async (req,res) => {
    const product = await ArrayProduct()
    res.json(product);
    // res.send("Here you go");
})

app.get("/products/:article",  async (req,res) => {
    const article = await ArticleInObject(req.params.article)
    res.json(article)
    console.log(req.params.article)
})

app.post("/products", async (req,res) => {
    await AddProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
    
    res.send("Product Added")
})

app.put("/products/:article", async (req,res) => {
    await UpdateProduct(req.params.article, req.body.name, req.body.description, req.body.price)
    res.send("Updated")
})

app.delete("/products/:article", async (req,res) => {
    await DeleteProduct(req.params.article)
    res.send("deleted")
})


app.listen(port, () => { 
    console.log(`Server is running on port ${port}`)
})
