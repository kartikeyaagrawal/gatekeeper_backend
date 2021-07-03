var validator = require("email-validator");

class Message {
	constructor(data) {
		this.data = data.body;
	}
	async addToDb() {
		this.cleanup();
		const msg = require("../db").db("User").collection("msgToUser");
		var doneSignal;
		console.log("ADDING TO DB ");
		console.log(this.data);
		try {
			doneSignal = await msg.insertOne(this.data);
		} catch (e) {
			console.log(e);
		}

		// console.log(doneSignal);
		console.log("done");
	}
}
//removing bogus properties
Message.prototype.cleanup = function () {
	this.data = {
		flatNo: this.data.flatNo,
		message: this.data.message,
	};
	// console.log(this.data);
	console.log("cleanup done");
};

module.exports = Message;
