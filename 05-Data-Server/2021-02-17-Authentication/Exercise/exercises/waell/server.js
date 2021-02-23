require('dotenv').config();
const express = require('express')



const { addUser, getUser } = require('./controllers/userControls')
const { getProducts, getProduct, addProduct, } = require('./controllers/productControls')
const { checkEmail, checkIfLoggedIn } = require('./middleware/validator');
const userRouter = require('./routes/userRouts')
const productsRouter = require('./routes/productsRoutes')

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

app.use('/user', checkIfLoggedIn, userRouter)
app.use('/products', checkIfLoggedIn, productsRouter)

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



