const mongoose = require('mongoose');


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



function findProducts() {
    return new Promise((resolve, reject) => {
        myProducts.find()
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
};


function getProduct(num) {
    return new Promise((resolve, reject) => {
        myProducts.find({articleNo: num})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
};


function addProduct(articleNo, name, description, price){
    return new Promise((resolve, reject) => {
        const anotherProduct = new myProducts({
            articleNo,
            name,
            description,
            price,
        })
        anotherProduct.save()
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}



module.exports = {
    findProducts,
    getProduct,
    addProduct,
};
    