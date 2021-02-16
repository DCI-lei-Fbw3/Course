const Product = require("../models/Product");
const { check, validationResult } = require('express-validator');


const get = async (req, res, next) => {
    try {
        const products = await Product.getProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        const products = await Product.getProduct(req.params.articleNo);
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    
    try {
        
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() })
        }
        const product = await Product.createProduct({
            articleNo: req.body.articleNo,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        });
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const product = await Product.updateProduct({
            articleNo: req.params.articleNo,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        });
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        await Product.deleteProduct({
            articleNo: req.params.articleNo,
        });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};


module.exports = {
    get,
    getOne,
    create,
    update,
    remove,
};
