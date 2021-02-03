const mongoose = require("mongoose");

// connect to our database
// notice that we use our environment variable in here
// we also do not return anything fron this file because we only
// have to require mongoose wherever we need the connection
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log("connected to database"))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
