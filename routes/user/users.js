var express = require("express");
var router = express.Router();

/* GET users listing. */
router.use("/", (req, res, next) => {
	console.log("inside useres route");
	next();
});
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});
router.post("/", (req, res) => {
	var body = req.body;
	console.log(req.body);
});

module.exports = router;
// locahost 4000/guars
