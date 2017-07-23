// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var data = require("./models/data");
var app = express();
var dbConnect = mongoose.connect("mongodb://localhost:27017/papertrails");
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

mongoose.connect("mongodb://localhost:27017/papertrails");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");

});

// This is the route we will send GET requests to retrieve.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {
  res.send('hello');
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/api2", function(req, res) {
  console.log(req.body.city);

});
//to save form comments
app.post('/post-feedback', function(req, res) {
	dbConnect.then(function(db) {
		delete req.body._id; //for safety reasons, to make sure no one provides another id and delete others
		db.collection('papertrails').insertOne(req.body);
	});
	res.send('Comment received!' + JSON.stringify(req.body));
});

//to view the comments
app.get('/view-feedbacks',  function(req, res) {
    dbConnect.then(function(db) {
        db.collection('papertrails').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
});
// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
