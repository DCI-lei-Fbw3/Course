const router = require("express").Router();
const db = require("../models/server");

router.get("/products", async (req, res) => {
	try {
		let result = await db.getProducts();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.get("/products/:articleNo", async (req, res) => {
	try {
		let result = await db.getOneProduct(req.params.articleNo);
		if (result.length > 0) res.status(200).send(result);
		else res.status(300).send("the Product doesn't exist");
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post("/products", async (req, res) => {
	try {
		let { articleNo, name, description, price } = req.body;
		await db.addProducts(articleNo, name, description, price);
		let result = await db.getProducts();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.put("/products/:articleNo", async (req, res) => {
	try {
		let { price } = req.body;
		let articleNo = req.params.articleNo;
		await db.updateProducts(articleNo, price);
		let result = await db.getOneProduct(articleNo);
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.delete("/products/:articleNo", async (req, res) => {
	try {
		let articleNo = req.params.articleNo;
		await db.deleteOneProduct(articleNo);
		let result = await db.getProducts();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
