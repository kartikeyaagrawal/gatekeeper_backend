var express = require("express");
var router = express.Router();
const MESSAGE = [
	{
		messageID: 1,
		flatID: 1,
		content: "Sir parcel aaya hain Ajio se",
		status: "pending",
	},
	{
		messageID: 2,
		flatID: 1,
		content: "Guests aaye hain Rohit naam bata rhe apna",
		status: "pending",
	},
	{
		messageID: 3,
		flatID: 1,
		content: "Parcel from Myntra",
		status: "allowed",
	},
	{
		messageID: 4,
		flatID: 1,
		content: "Sir Sharma ji aaye hain aapke bete ka result poochne",
		status: "denied",
	},
];
/* GET users listing. */
router.use("/", (req, res, next) => {
	console.log("inside useres route");
	next();
});

router.get(
	"/msgs",
	() =>
		!(async function () {
			return msgs.json({ success: true, MESSAGE });
		})()
);
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});
router.post("/", (req, res) => {
	var body = req.body;
	console.log(req.body);
});

module.exports = router;
// locahost 4000/guars
