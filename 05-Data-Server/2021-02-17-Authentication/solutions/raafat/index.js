import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config.js";
import "./lib/db.js";
import errorHandler from "./middleware/errorHandle.js";
import verifyToken from "./middleware/verifyToken.js";

import products from "./routes/products.js";
import users from "./routes/users.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/products", verifyToken, products);
app.use("/user", users);
app.use(errorHandler);

let port = process.env.PORT || 3000;
app.listen(port, console.log(`http://loclahost:${port}`));
