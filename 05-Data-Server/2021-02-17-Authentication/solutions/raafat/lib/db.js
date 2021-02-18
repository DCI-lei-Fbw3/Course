import mongoose from "mongoose";
import "dotenv/config.js";

mongoose
	.connect(process.env.MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("mongoDB connected"))
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
