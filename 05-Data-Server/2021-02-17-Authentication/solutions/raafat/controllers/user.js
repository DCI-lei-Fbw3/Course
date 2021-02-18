import db from "../models/user-model.js";
import jwt from "jsonwebtoken";

const login = async (req, res, next) => {
	try {
		let { name, password } = req.body;
		let user = await db.loginUser(name, password);
		let token = await jwt.sign({ user }, "secret");
		res.cookie("authCookie", token);
		res.status(200).send("done");
	} catch (err) {
		next(err);
	}
};

const create = async (req, res, next) => {
	try {
		let { name, email, password } = req.body;
		let user = await db.addUser(name, email, password);
		res.status(201).send(user);
	} catch (err) {
		next(err);
	}
};

const logout = (req, res) => {
	res.clearCookie("authCookie");
	res.send("logout");
};

export default { login, create, logout };
