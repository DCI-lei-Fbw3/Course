require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to DB")
})

const productSchema = new mongoose.Schema({
    articleNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});


const Products = mongoose.connection.model("products", productSchema);



function AddProduct(articleNo, name, description, price) {
    return new Promise((resolve,reject) => {
        const newProduct = new Products({
            articleNo,
            name,
            description, 
            price
        })
        newProduct.save()
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
};


function ArrayProduct() {
    return new Promise((resolve,reject) => {
        Products.find({})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
    
};

function ArticleInObject(article) {
    return new Promise((resolve,reject) => {
        Products.find({articleNo: article})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
    
};

function UpdateProduct(number, name, description,price) {
    return new Promise((resolve,reject) => {
        Products.findOneAndUpdate({articleNo: number}, {name, description, price})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
};

function DeleteProduct(number){
    return new Promise ((resolve,reject) => {
        Products.deleteMany({articleNo: number})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
};


module.exports = {
    AddProduct,
    ArrayProduct,
    ArticleInObject,
    UpdateProduct,
    DeleteProduct
}