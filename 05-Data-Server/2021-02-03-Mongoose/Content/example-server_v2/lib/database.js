const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log("connected to database"))
    .catch(error => {
        // since our app relies on the database to work properly
        // we want to prevent it from running as soon as we can not establish a connection
        console.log(error);
        process.exit(0);
    });
