// load the variables from .env file
require("dotenv").config();

const mongoose = require("mongoose");

// connect to the database via the uri. Instead of setting the string directly
// we use the variable from the .env file
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => {
        console.log("connected to database");

        // create a schema for products
        //  this will define the structure we are going to expect for the products
        const productSchema = new mongoose.Schema({
            articleNo: {
                type: String,
                required: true,
                unique: true,
            },
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        });

        // link the schema to the collection products
        const Product = mongoose.connection.model("products", productSchema);


        // find products
        Product.find({})
        .then(result => {
            // log the result and exit the application.
            // by sending a 0 as the exit status we tell the system that the application worked well.
            console.log(result);
            process.exit(0);
        })
        .catch(error => console.log(error))


        // we can use regular expressions (regex) to only find products that match a certain pattern
        // here we are looking for articleNos with "HW" in it. with the slashes we define the search term /search/,
        // with the i at the end we tell the regex that this shall be a case-insensitive search
        // Product.find({ articleNo: /HW/i })
        //     .then(result => {
        //         console.log(result);
        //         process.exit(0);
        //     })
        //     .catch(error => console.log(error))

    })
    .catch(error => {
        // if anything goes wrong we log the error and exit the application with a non-zero exit status.
        // that means that something was wrong (like a try/catch or then/catch, but for the system that runs your application)
        console.log(error);
        process.exit(1);
    });
