
var validator = require("email-validator");
class MessagetoGuard {
	constructor(data) {
		this.data = data.body;
	}
	async addToDb() {
		this.cleanup();
		const msg = require("../db").db("guard").collection("msgToGuard");
		var doneSignal;
		console.log("UPDATING TO DB ");
		console.log(this.data);
		try {
			doneSignal = await msg.updateOne({_id: this.id}, {status: this.status, time: this.time});
		} catch (e) {
			console.log(e);
		}

		// console.log(doneSignal);
		console.log("done");
	}
}
//removing bogus properties
MessagetoGuard.prototype.cleanup = function () {
	this.data = {
		status: this.data.status,
		time: this.data.time,
	};
	// console.log(this.data);
	console.log("cleanup done");
};

module.exports = MessagetoGuard;
