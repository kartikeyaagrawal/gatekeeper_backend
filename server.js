const express = require("express");
const db = require("./db");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
// 	res.send("Hello World!");
// });

// app.listen(port, () => {
// 	console.log(`Example app listening at http://localhost:${port}`);
// });

// import cors from cors;
// import users from "./routes/users";
// import { db } from "./db";

// app.use(express.json);
app.get("/", (req, res) => {
	res.send("hellos");
	console.log("routed to /");
});
db.then((app) => {
	app.listen(3000, () => console.log("server started"));
}).catch((err) => {
	console.log(err);
});
