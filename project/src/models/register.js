const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	id: {
		type: String,
	},
	fullname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	Repassword: {
		type: String,
		required: true,
	},
	premiumUser: {
		type: Boolean,
		default: false,
	},
	isRejected: {
		type: Boolean,
		default: false,
	},
});

const Users = new mongoose.model("User", userSchema);

module.exports = Users;
