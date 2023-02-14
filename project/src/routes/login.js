const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/register");

router.post("/logins", async (req, res) => {
	try {
		
		const { email, psw } = req.body;
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.status(401).send("User not found");
		}
		const isPasswordMatch = await bcrypt.compare(psw, user.password);
		if (!isPasswordMatch) {
			return res.status(401).send("Incorrect password");
		}
		res.render("logged");
	} catch (error) {
		console.log(error);
	}
});
router.get("/logins", async (req, res) => {
	res.render('login')
});


module.exports = router;
