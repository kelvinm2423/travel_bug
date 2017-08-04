// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
require("./models/data");
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3700;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("./public"));

// -------------------------------------------------

mongoose.connect("mongodb://localhost:27017/papertrails");
var db = mongoose.connection;

db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function () {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
// This is the route we will send GET requests to retrieve.
// We will call this route the moment our page gets rendered
app.get("/api", function (req, res) {
  res.send('hello');
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/api2", function (req, res) {
  console.log(req.body.city);

});
//to save form comments
app.post('/post-feedback', function (req, res) {
  // var name = req.body.name;
  // var comment = req.body.comment;

  delete req.body._id; //for safety reasons, to make sure no one provides another id and delete others
  db.collection('usermodels').insertOne(req.body).then(function (r) {
    res.send({
      success: true,
      redirect: "/view-feedbacks"
    });
    // res.redirect("/view-feedbacks");
  });
  // console.log(req.body.name);
  // var newUserModel = new userModel({
  //   name: name,
  //   comment: comment
  // });

});

//to view the comments
app.get('/view-feedbacks', function (req, res) {
  db.collection('usermodels').find({}).toArray().then(function (feedbacks, opinions) {
    // res.status(200).json(feedbacks);
  res.render("feedback",{comment: feedbacks, opinions: opinions});
});

});
// -------------------------------------------------

app.use(function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Starting our express server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
