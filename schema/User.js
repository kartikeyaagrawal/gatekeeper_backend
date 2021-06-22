var validator = require("email-validator");


function UserLogin(email, pass) {
	this.email = email;
	this.pass = pass;
}
UserLogin.prototype.checkValidity = function () {
	return validator.validate(this.email);
};
UserLogin.prototype.checkValidity = function () {
	return validator.validate(this.email);
};

module.export = UserLogin;
