const router = require("express").Router();
const products = require("../controllers/products");


module.exports = () => {
    router.get("/", products.get);
    router.get("/:articleNo", products.getOne);
    router.post("/", products.create);
    router.put("/:articleNo", products.update);
    router.delete("/:articleNo", products.remove);

    return router;
};
