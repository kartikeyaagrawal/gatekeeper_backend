const { MongoClient } = require("mongodb");
const Message = require("./schema/Msg");

const uri =
	"mongodb+srv://kartik:littlehearts@cluster0.khsbi.mongodb.net/User?retryWrites=true&w=majority";
var client;
async function run() {
	try {
		client = new MongoClient(uri, { useUnifiedTopology: true });
		await client.connect();
		// console.log(client);
		// await createListing(client, {
		// 	name: "hame",
		// 	summary: "asassdfdgdfg",
		// 	bedroom: "23",
		// });
		// await readDoc(client);
		// await findListing(client, 0, 0);
		module.exports = client;
		if (client) {
			console.log("dbworking");
		}
		const app = require("./app");
		app.listen(5000);

		console.log("started at port 5000");
		// const database = client.db("sample_mflix");
		// const movies = database.collection("movies");
		// Query for a movie that has the title 'Back to the Future'
		// const query = { title: "Back to the Future" };
		// const movie = await movies.findOne(query);
		// console.log(movie);
	} finally {
		console.log("client is closed");
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}

// module.exports = run();
run().catch(console.dir);
async function findListing(client, bedroom, bathroom) {
	const cursor = await client
		.db("sample_airbnb")
		.collection("listingsAndReviews")
		.find({
			bedrooms: { $gte: bedroom },
			bathrooms: { $gte: bathroom },
		})
		.limit(2);

	const result = await cursor.toArray();
	// console.log(result);
	if (result == null) console.log("no entry");
	else {
		console.log(result.length);
		result.forEach((aa) => console.log(aa));
	}
	console.log("done");
	// cursor.forEach((aa) => console.log(aa));
}
async function readDoc(client) {
	const result = await client
		.db("sample_airbnb")
		.collection("listingAndReviews")
		.findOne({ name: "hame" });
	console.log(typeof result);
	console.log(result);
}
async function createListing(client, newListing) {
	const result = await client
		.db("sample_airbnb")
		.collection("listingAndReviews")
		.insertOne(newisting);
	console.log(result);
}
async function listdatabases(client) {
	const databaseList = await client.db().admin().listDatabases();
	databaseList.databases.forEach((element) => {
		console.log(element.name);
	});
}

// module.exports = conn;
