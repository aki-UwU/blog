const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
	.connect("mongodb+srv://seeeio:18182112@cluster0.cte54ez.mongodb.net/test", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected "))
	.catch((err) => console.log(err));
