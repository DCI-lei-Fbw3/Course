//TK: this file creates the data model 
const mongoose = require("mongoose");

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
        required: false,
    },
    price: {
        type: Number,
        required: true,

    },
});

const Product = mongoose.connection.model("products", schema);


async function getProducts () {
    return await Product.find();
}

async function getProduct (articleNo) {
    return await Product.find({ articleNo });
}

async function createProduct ({ articleNo, name, description, price }) {
    const product = new Product({
        articleNo,
        name,
        description,
        price,
    });

    return await product.save();
}

async function updateProduct ({ articleNo, name, description, price }) {
    return await Product.findOneAndUpdate({
        articleNo
    }, {
        name,
        description,
        price,
    }, {
        new: true,
    });
}

async function deleteProduct ({ articleNo }) {
    return await Product.deleteOne({ articleNo });
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
