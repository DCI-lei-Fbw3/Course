require("dotenv").config();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const products = require("./routs/productsRout.js")
const users = require("./routs/userRout.js")
const app = express();
const port = process.env.PORT || 3553 ;
// var { AddProduct, ArrayProduct, ArticleInObject, UpdateProduct, DeleteProduct } = require("./DBhandling");
const { addUser, login } = require("./models/users");
const logIn = require("./controllers/login.js")
const register = require("./controllers/registarion.js")


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");



// app.get("/products", async (req,res) => {
//     const product = await ArrayProduct()
//     res.json(product);
//     // res.send("Here you go");
// })


// app.get("/products/:article",  async (req,res) => {
//     const article = await ArticleInObject(req.params.article)
//     res.json(article)
//     console.log(req.params.article)
// })


// app.post("/products", async (req,res) => {
//     await AddProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
    
//     res.send("Product Added")
// })


// app.put("/products/:article", async (req,res) => {
//     const linkArticle = req.params.article
//     await UpdateProduct(linkArticle, req.body.name, req.body.description, req.body.price)
//     res.send("Updated")
// })


// app.delete("/products/:article", async (req,res) => {
//     const linkArticle = req.params.article
//     await DeleteProduct(linkArticle)
//     res.send("deleted")
// })

app.use("/products", products());

//Registration and Login

app.use("/", users())


// app.post("/register", async (req,res) => {
//     await addUser(req.body.name, req.body.email, req.body.password)
//     res.send("New user has been added")
// })


// app.post("/login", async (req,res) => {
//     if (await login(req.body.name, req.body.password)) {
//     const secret = "1237uaeawe12312asd"
//     const jwToken = jwt.sign({name :req.body.name},secret)
//     res.cookie("cookieJwToken", jwToken, {httpOnly: true, maxAge: 120000})
//     res.send("loged in") 
//     } else {
//             res.send("user or pass not exist")
//         }
// })


app.listen(port, () => { 
    console.log(`Server is running on port ${port}`)
})


