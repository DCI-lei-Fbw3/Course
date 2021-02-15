const router = require("express").Router();
const products = require("../controllers/products");
const path = require('path');



module.exports = () => {
    router.get("/", products.get);
    router.get("/:articleNo", products.getOne);
    router.post("/", products.create);
    router.put("/:articleNo", products.update);
    router.delete("/:articleNo", products.remove);
    //TK:routre for index page
    router.get('/page',function(req,res){
        res.sendFile(path.join(__dirname+ '/index.html'));
      
        //__dirname : It will resolve to your project folder.
      });

    return router;
};
