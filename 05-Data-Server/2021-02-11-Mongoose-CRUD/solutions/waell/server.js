// requirement and connect to the server
require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 8080 ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* app.listen(port, () => {
    console.log('Server is running')
}); */

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
.then((result)=> app.listen(port, ()=> {
    console.log('server and database connected')
}))
.catch((error)=> console.log(error))

const productsSchema = new mongoose.Schema({
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
        type: Number,
        required: true,
    },
});

const myProducts = mongoose.connection.model('products', productsSchema); // apply the schema to the 


// get and post request


function getProducts() {
    return new Promise((resolve, reject) => {
        myProducts.find({})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
};

app.get('/products', async (req, res) => {
    const products = await getProducts()
    res.json(products)
    console.log(products)
})

function getProduct(num) {
    return new Promise((resolve, reject) => {
        myProducts.find({articleNo: num})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

app.get('/products/:num', async (req, res) => {
    const products = await getProduct(req.params.num)
    res.json(products)
    console.log(products)
})

function addProduct(bodyArticle, bodyName, bodyDes, bodyPrice){
    return new Promise((resolve, reject) => {
        const anotherProduct = new myProducts({
            articleNo: bodyArticle,
            name: bodyName,
            description: bodyDes,
            price: bodyPrice,
        })
        anotherProduct.save()
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

app.post('/products', async (req, res) => {
    await addProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
    res.send('Product added')
})