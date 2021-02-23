const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
.then(()=> (console.log(`database connected`)))
.catch((error)=> {
    console.log(error);
    process.exit(1);
});

