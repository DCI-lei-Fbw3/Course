const mongoose = require("mongoose");
require("dotenv").config();
let uri = process.env.MONGODB_URI;

const productSchema = new mongoose.Schema({
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

const Product = mongoose.model("products", productSchema);

const connect = async () => {
	try {
		if (mongoose.connection.readyState === 1) return;
		return await mongoose.connect(uri, {
			useUnifiedTopology: true,
			useCreateIndex: true,
			useNewUrlParser: true,
		});
	} catch (err) {
		console.log(err);
	}
};

const addProducts = async (articleNo, name, description, price) => {
	try {
		await connect();
		let newProduct = await new Product({
			articleNo,
			name,
			description,
			price,
		});
		await newProduct.save();
	} catch (err) {
		console.log(err);
	}
};

const getProducts = async () => {
	try {
		await connect();
		let response = await Product.find();
		return response;
	} catch (err) {
		console.log(err);
	}
};
const getOneProduct = async (articleNo) => {
	try {
		await connect();
		let response = await Product.find({ articleNo });
		return response;
	} catch (err) {
		console.log(err);
	}
};

const deleteOneProduct = async (articleNo) => {
	try {
		await connect();
		let response = await Product.findOneAndDelete({ articleNo });
		return response;
	} catch (err) {
		console.log(err);
	}
};

const updateProducts = async (articleNo, price) => {
	try {
		await connect();
		await Product.findOneAndUpdate(
			{ articleNo },
			{ price },
			{ useFindAndModify: false }
		);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	addProducts,
	getProducts,
	updateProducts,
	getOneProduct,
	deleteOneProduct,
};
