var express = require("express");
var router = express.Router();
var User = require("../../schema/User");
/* GET home page. */
router.use("/", (req, res, next) => {
	// console.log(req.body);
	console.log("middlewate");
next()
});
router.get("/", function (req, res, next) {
	// res.send({ hello: "hello" });
	// var abc = new User("kartik", "password");
	// abc.addToDb();
	res.render("index", { title: "Express" });
});
router.post("/",(req,res)=>{
	console.log("routerworked");
	res.send("done")
})
router.post("/api", function (req, res, next) {
	console.log("hello");
	var bod = req;
	console.log(bod.body);
	// console.log("");
	res.send("this is the msg from the route u weere seraching ");
});

module.exports = router;
