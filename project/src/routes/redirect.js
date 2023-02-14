const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index");
});
router.get("/signup", (req, res) => {
	res.render("signup");
});
router.get("/index", (req, res) => {
	res.render("index");
});
router.get("/login", (req, res) => {
	res.render("login");
});
router.get("/logout", (req, res) => {
	res.render("index");
});
router.get("/post-details", (req, res) => {
	res.render("post-details");
});


module.exports = router;
