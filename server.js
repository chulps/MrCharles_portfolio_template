const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const User = require("./models/user.js");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI,
	{
		useMongoClient: true
	}
);

// app.post("/save", function(req, res) {
// 	// as long as req.body matches what the model expects, this should insert into the database
// 	User.create(req.body)
// 		.then(() => {
// 			res.json(true);
// 		})
// 		.catch((err) => {
// 			// if not, we can at least catch the error
// 			res.json(error);
// 		});
// });

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
