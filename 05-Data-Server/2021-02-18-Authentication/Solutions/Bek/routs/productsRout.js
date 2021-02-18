const router = require("express").Router();
const authenticated = require("../middleware/authenticatedOnly.js");
const printAll = require("../controllers/showAll.js");
const updateOne = require("../controllers/updateSome.js");
const createProduct = require("../controllers/newProduct.js");
const deleteOne = require("../controllers/deleteSome.js");
const findOne = require("../controllers/findByNo.js");

module.exports = () => {
    router.get("/", printAll)
    router.get("/:article", findOne)
    router.post("/", authenticated, createProduct)
    router.put("/:article", authenticated, updateOne)
    router.delete("/:article", authenticated, deleteOne)
    return router;
}