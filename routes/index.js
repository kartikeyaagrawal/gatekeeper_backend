var express = require("express");
var router = express.Router();
var User = require("../schema/User");
/* GET home page. */

router.use("/", (req, res) => {
	// console.log("1");
	console.log(req.body);
});

router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});
router.post("/userLogin", async (req, res) => {
	const client = require("../db");
	const fromclientInfo = req.body;
	const user = await client
		.db("GATEKEEPER")
		.collection("userInfo")
		.findOne({ name: fromclientInfo.email, password: fromclientInfo.password });
	if (!user) {
		//stop redirect to main page
	} else {
		// redirect to userpage
	}
});
router.post("/guardLogin", async (req, res) => {
	const client = require("../db");
	const fromclientInfo = req.body;
	const user = await client
		.db("GATEKEEPER")
		.collection("guardInfo")
		.findOne({ name: fromclientInfo.email, password: fromclientInfo.password });
	if (!user) {
		//stop redirect to main page
	} else {
		// redirect to userpage
	}
});
router.post("/signup", async (req, res) => {
	const client = require("../db");
	const fromclientInfo = req.body;
	const result = await client
		.db("sample_airbnb")
		.collection("listingAndReviews")
		.insertOne({
			name: fromclientInfo.name,
			email: fromclientInfo.email,
			password: fromclientInfo.password,
			status: "in",
			backby: "02/02/2000",
		});
});

module.exports = router;
