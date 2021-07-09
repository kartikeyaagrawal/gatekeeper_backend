var express = require("express");
var router = express.Router();
const Message = require("../../schema/MsgToUser");
// session middleware
//session.end

//auth middleware
//auth middleware

//useless
router.use("/", function (req, res, next) {
	console.log("inside router guard");
	next();
});
//useless
//routes
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});
router.get("/msg", async function (req, res, next) {
	let arr = [
		{
			name: "kartik",
		},
		{ name: "shit" },
	];
	res.send(arr);
});
router.post("/", (req, res) => {
	console.log(req.body);
	var msg = new Message(req);
	msg.addToDb();
	res.send(200, req.body);
});
module.exports = router;
//routes end
