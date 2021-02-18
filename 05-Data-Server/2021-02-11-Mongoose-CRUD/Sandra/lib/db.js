//one of the ways to connect to mongodb is by using the module mongoose. It handles your mongo database. It's kind of like an assistant that helps you work with mongodb. 
const mongoose = require("mongoose"); 

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
    // this will stop the database immediately in case a problem arises
    process.exit(1)
}); 

