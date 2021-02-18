import mongoose from "mongoose";

const schema = new mongoose.Schema({
	productsNo: {
		type: String,
		required: true,
	},
	productsName: {
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

const Product = mongoose.connection.model("shops", schema);

const addProduct = async (productsNo, productsName, description, price) => {
	const product = new Product({
		productsNo,
		productsName,
		description,
		price,
	});
	return await product.save();
};

const getAllProducts = async () => await Product.find();

const getProduct = async (productsNo) => await Product.findOne({ productsNo });

const updateProduct = async (productsNo, price) => {
	return await Product.findOneAndUpdate(
		{ productsNo },
		{ price },
		{ new: true }
	);
};

const deleteProduct = async (productsNo) => {
	return await Product.findOneAndDelete({ productsNo });
};

export default {
	addProduct,
	getAllProducts,
	getProduct,
	updateProduct,
	deleteProduct,
};
