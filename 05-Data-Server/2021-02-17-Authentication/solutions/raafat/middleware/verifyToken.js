import jwt from "jsonwebtoken";

export default async (req, res, next) => {
	try {
		const authCookie = req.cookies.authCookie;
		if (!authCookie) {
			res.status(403).send("login first");
		} else {
			await jwt.verify(authCookie, "secret");
			next();
		}
	} catch (err) {
		console.log(err);
	}
};
