const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const path = require("path");
const User = require("../models/register");

const staticPath = path.join(__dirname, "../public");

router.post("/", async (req, res) => {
	try {
		const { fullName, email, psw, repsw } = req.body;
		const hasedPassword = await bcrypt.hash(psw, 10);
		const hasedReTypePassword = await bcrypt.hash(repsw, 10);

		const user = await User.findOne({ email: email });
		if (user) return res.status(400).send("user already exists!");

		if (psw === repsw) {
			const registerUser = new User({
				id: Date.now().toString(),
				fullname: fullName,
				email: email,
				password: hasedPassword,
				Repassword: hasedReTypePassword,
			});
			const done = await registerUser.save();

			res.status(201).render("login");
		} else {
			console.log("password not matching");
		}
	} catch (err) {
		res.status(400).render("signup");
		console.log(err);
	}
});

module.exports = router;
