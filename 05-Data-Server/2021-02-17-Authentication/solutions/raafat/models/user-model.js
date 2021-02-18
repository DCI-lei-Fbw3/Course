import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.connection.model("users", schema);

const addUser = async (name, email, password) => {
	let hash = bcrypt.hashSync(password, 10);
	const user = new User({
		name,
		email,
		password: hash,
	});
	return await user.save();
};

const loginUser = async (name, password) => {
	let user = await User.findOne({ name });
	if (!user) {
		console.log("user is not registered");
	} else {
		let result = bcrypt.compareSync(password, user.password);
		if (!result) {
			console.log("password doesn't match");
		} else {
			return user;
		}
	}
};

// const updateUser = async (name, email, password) => {
// 	return await User.findOneAndUpdate(
// 		{ name },
// 		{
// 			email,
// 			password,
// 		},
// 		{ new: true }
// 	);
// };

// const deleteUser = async (name) => await User.deleteOne({ name });

export default {
	addUser,
	loginUser,
};
