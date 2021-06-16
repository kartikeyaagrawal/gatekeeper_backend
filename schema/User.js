// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uri =
	"mongodb+srv://kartik:littlehearts@cluster0.khsbi.mongodb.net/User?retryWrites=true&w=majority";
mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("db working");
});

const userLoginSchema = new Schema({
	email: String, // String is shorthand for {type: String}
	password: String,
});
const User = mongoose.model("User", userLoginSchema);

const kartik = new User({ email: "kartik@gmial.co", password: "hihihih" });
kartik.save(function (err, kartik) {
	if (err) return console.error(err);
	// kartik.speak();
	console.log("succesfully done");
});
