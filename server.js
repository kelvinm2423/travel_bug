// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var data = require("./models/data");
var app = express();
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

});

// This is the route we will send POST requests to save each click.
// app.post("/submit", function(req, res) {
//   console.log(req.body);
//   db.users.insert(req.body, function(error, saved) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Otherwise, send the note back to the browser
//     // This will fire off the success function of the ajax request
//     else {
//       res.send(saved);
//     }
//   });
// });

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
