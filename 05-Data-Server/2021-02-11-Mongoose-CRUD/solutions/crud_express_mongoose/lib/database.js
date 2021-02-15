const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log("connected to database"))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
