require("dotenv").config();
//const {config} = require("dotenv"); 
//config();

const express = require('express');
const bodyParser = require("body-parser");


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");



mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => {
        console.log("connected to database")
            
            const schema = new mongoose.Schema({
                articleNo: {
                    type: String,
                    required: true,
                    unique: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
                price: {
                    type: String,
                    required: true,
                },
            })
    
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    });

    
    /* 
    function getProducts() {
        return new Promise((resolve, reject) => {
            // first connect to data base
            connect().then(() => {
                Products.find().then(products => {
                    resolve(products);
                }).catch(error => {
                    reject(error);
                })
            }).catch(error => {
                reject(error);
            })
            
        })
    }
    
    
    app.get('/Products', (req, res) => {
        res.json(getProducts())
        console.log(Products)
        res.send("It's working")
    })

    app.get("/products/:article",  async (req,res) => {
        const article = await ArticleInObject(req.params.article)
        res.json(article)
        console.log(req.params.article)
    })

 */


const newProducts = mongoose.connection.model('Products', productsSchema); // apply the schema to the 


// get and post request


function getProducts() {
    return new Promise((resolve, reject) => {
        newProducts.find({})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

app.get('/products', async(req, res) => {
    const products = await getProducts()
    res.sen(products)
    console.log(products)
})







var port = process.env.PORT || '8080';

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
