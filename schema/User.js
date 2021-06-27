var validator = require("email-validator");
// const user = require("../db").db("User").collection("users");
function UserLogin(email, pass, houseNo) {
	this.email = email;
	this.pass = pass;
	this.houseNo = houseNo;
}
UserLogin.prototype.checkValidity = function () {
	return validator.validate(this.email);
};
UserLogin.prototype.addToDb = function () {
	user.insertOne(this.email, this.pass);
};

module.export = UserLogin;
