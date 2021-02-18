import db from "../models/product-model.js";

const getAll = async (req, res, next) => {
	try {
		let products = await db.getAllProducts();
		res.status(200).send(products);
	} catch (err) {
		next(err);
	}
};

const getOne = async (req, res, next) => {
	try {
		let product = await db.getProduct(req.params.productsNo);
		res.status(200).send(product);
	} catch (err) {
		next(err);
	}
};

const create = async (req, res, next) => {
	try {
		let { productsNo, productsName, description, price } = req.body;
		let product = await db.addProduct(
			productsNo,
			productsName,
			description,
			price
		);
		res.status(201).send(product);
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		let { price } = req.body;
		let product = await db.updateProduct(req.params.productsNo, price);
		res.status(200).send(product);
	} catch (err) {
		next(err);
	}
};

const remove = async (req, res) => {
	try {
		await db.deleteProduct(req.params.productsNo);
		res.status(204).send("done");
	} catch (err) {
		res.send(err);
	}
};

export default { getAll, getOne, create, update, remove };
