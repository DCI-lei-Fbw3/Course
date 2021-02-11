const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    articleNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.connection.model("products", productSchema);

const getAllProducts = async() => await Product.find({});

const getOneProduct = async(articleNo) => await Product.findOne({articleNo});

const createProduct = async(articleNo, name, discription, price) => 
    await new Product({articleNo, name, discription, price}).save();

const updateProduct = async(articleNo, price) => 
    await Product.updateOne({articleNo}, {price});

const deleteProduct = async(articleNo) => 
    await Product.deleteOne({articleNo});


module.exports = {
    getAllProducts, 
    getOneProduct, 
    createProduct,  
    updateProduct, 
    deleteProduct
};
