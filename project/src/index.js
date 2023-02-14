const express = require("express");
const app = express();
require("./db/connection");
const path = require("path");
const hbs = require("hbs");
const Article = require("./models/article");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");

//setting paths
const staticPath = path.join(__dirname, "./public");
const templatesPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");
const articlsesPath = path.join(__dirname, "../templates/views/articles");
app.use("/styles", express.static(path.join(__dirname, "public/assets/styles")));

//Middleware
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", viewsPath);
app.use(methodOverride("_method"));

//Route for redirecting pages
const redirect = require("./routes/redirect");
app.use(redirect);

// Route for signup
const userSignup = require("./routes/signup");
app.use("/signup", userSignup);

//route for blog
// const blog = require("./routes/writeBlog");
// app.use(blog);

app.get("/blog", async (req, res) => {
	const articles = await Article.find().sort({ createdAt: "desc" });
	res.render("articles/blog", { articles: articles });
});
app.use("/articles", articleRouter);

//route for login
const login = require("./routes/login");
app.use(login);

// set the view engine
app.set("view engine", "ejs");

app.listen(8000, () => {
	console.log(`Listening at the port 8000`);
});
