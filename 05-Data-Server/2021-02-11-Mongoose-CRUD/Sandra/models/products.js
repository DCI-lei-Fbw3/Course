const mongoose = require("mongoose");


// with schema you are telling the database to create objects with a particular structure. With it, you are setting up a rule on how to store the data in your database. 
// the Schema class is part of the mongoose module
const laptopSchema = new mongoose.Schema ({
    articleNo: {
        type: String, 
        required: true, 
        unique: true
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
})


// in a new const we care storing the collection with the applied schema; 
// this validates whether the incoming data has matches the structure of our schema
const Products = mongoose.connection.model("computers", laptopSchema); 

// these functions are models; 
// anything that is requiring something from the database is a "model"

function getProducts() {
    return new Promise ((resolve, reject)=> {
        Products.find({})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

function addProduct(bodyArticleNo, bodyName, bodyDescription, bodyPrice){
    return new Promise ((resolve, reject)=>{
        const newLaptop = new Products ({
            articleNo: bodyArticleNo, 
            name: bodyName, 
            description: bodyDescription, 
            price: bodyPrice
        })
        newLaptop.save()
        .then(result=> resolve())
        .catch(error => reject(error))
    })
}

function updateProduct(getArticleNo, name, description, price){
    return new Promise ((resolve, reject)=> {
        Products.findOneAndUpdate({articleNo: getArticleNo}, {name, description, price}, {new: true})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

function deleteProduct(articleNo){
    return new Promise ((resolve, reject)=> {
        Products.findOneAndDelete({articleNo})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

module.exports = {
    getProducts,
    addProduct, 
    updateProduct, 
    deleteProduct
}