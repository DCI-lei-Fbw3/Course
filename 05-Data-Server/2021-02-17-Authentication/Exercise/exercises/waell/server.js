require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const bcrypt = require('bcrypt');
const  user = require('./model/user.js');
const  product = require('./model/product');
const { addUser, getUser } = require('./controllers/userControls')
const { getProducts, getProduct, addProduct, } = require('./controllers/productControls')
const { checkEmail, checkIfLoggedIn } = require('./middleware/validator');


const cookieParser = require('cookie-parser')


const app = express();

const {isEmail} = require('validator');
require('./lib/db');

port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`server is connected , http://localhost:${port}`)
});

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


/* 
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
.then((result)=> app.listen(port, ()=> {
    console.log(`server and database connected, http://localhost:${port}`)
}))
.catch((error)=> {
    console.log(error);
    process.exit(1);
});

 */

//const user = mongoose.connection.model('users', userSchema);




// Registration

app.post('/register', addUser);

// login

app.post('/login', getUser);

// Products



app.get('/products', getProducts);

app.get('/products/:num', checkIfLoggedIn, getProduct);

app.post('/products', checkIfLoggedIn, addProduct);


