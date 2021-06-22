const { MongoClient } = require("mongodb");


// Replace the uri string with your MongoDB deployment's connection string.
const uri =
	"mongodb+srv://kartik:littlehearts@cluster0.khsbi.mongodb.net/User?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const conn;
async function run() {
	try {
		conn = await client.connect();		
		const app = require("./app");
		app.listen(3000);
		// const database = client.db("sample_mflix");
		// const movies = database.collection("movies");
		// Query for a movie that has the title 'Back to the Future'
		// const query = { title: "Back to the Future" };
		// const movie = await movies.findOne(query);
		// console.log(movie);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}

// module.exports = run();
run().catch(console.dir);
module.exports= conn;

