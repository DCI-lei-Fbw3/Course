// first npm install dotenv 
// we use this so that we can put in a separate file (.env) sensitive data and then gitignore it. It will only be accessible to me, but it can be run on a separate machine as well. 
// makes the env variables readable 
require("dotenv").config(); 
const express = require("express"); 
const bodyParser = require("body-parser"); 
//one of the ways to connect to mongodb is by using the module mongoose. It handles your mongo database. It's kind of like an assistant that helps you work with mongodb. 
const mongoose = require("mongoose"); 

const app = express(); 

app.use(bodyParser.urlencoded( { extended:true})); 
app.use(express.json()); 

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

//mongoose has a connect method used to connect with the mongodb database, the first argument is the URI (taken from the .env file), second argument is an object with god knows what.  
// the connect method uses a promise,
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true, 
}).then(()=> {
    console.log("connected to database")
}).catch((error) => {
    console.log(error)
});  

// with schema you are telling the database to create objects with a particular structure. With it, you are setting up a rule on how to store the data in your database. 
// the Schema class is part of the mongoose module
const laptopSchema = new mongoose.Schema ({
    articleNo: {
        type: String, 
        required: true, 
        unique: true
    }, 
    name: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    }
})

// in a new const we care storing the collection with the applied schema; 
// this validates whether the incoming data has matches the structure of our schema
const Products = mongoose.connection.model("laptops", laptopSchema); 

function getProducts() {
    return new Promise ((resolve, reject)=> {
        Products.find({})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

app.get('/products', async(req, res) => {
    res.status(200).json(await getProducts())
});

function getProduct(article) {
    return new Promise ((resolve, reject) => {
        // even though I am specifying just one property of the object, the method find will return the entire object which contains it. 
        Products.find({articleNo: article})   
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}
app.get('/products/:articleNo', async(req, res) => {
// params = is an object that includes whatever comes after the : . The key is articleNo, and its value will be populated with whatever is inserted in the search bar on the browser after products/article number goes here 
    //console.log(req.params.articleNo)
    res.status(200).json(await getProduct(req.params.articleNo))
});

function addProduct(bodyArticleNo, bodyName, bodyDescription, bodyPrice){
    return new Promise ((resolve, reject)=>{
        const newLaptop = new Products ({
            articleNo: bodyArticleNo, 
            name: bodyName, 
            description: bodyDescription, 
            price: bodyPrice
        })
        newLaptop.save()
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}
app.post('/products', async(req, res) => {
    await addProduct(req.body.articleNo, req.body.name, req.body.description, req.body.price)
    res.send("Product added successfully")
})

function updateProduct(getArticleNo, name, description, price){
    return new Promise ((resolve, reject)=> {
        Products.findOneAndUpdate({articleNo: getArticleNo}, {name, description, price}, {new: true})
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}
app.put('/products/:articleNo', async(req, res) => {
    await updateProduct(req.params.articleNo, req.body.name, req.body.description, req.body.price)
    res.send("Product updated successfully")
});

app.delete('/products/:articleNo', (req, res) => {

});