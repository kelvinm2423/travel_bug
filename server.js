var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var userModel = require('./schema.js');
var bodyParser = require("body-parser");
require("./data.js");
var exphbs = require("express-handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

var mongoose = require('mongoose');
var User = require('./users.js');

if (process.env.MONGODB_URI){

mongoose.connect(process.env.MONGODB_URI);

}
else {

mongoose.connect('mongodb://localhost/userData');

}
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//post route
// //client side INTO db
app.post('/Users', function(req, res) {

      var idk = new User(req.body);

    idk.save(function(error, doc) {

        if (error) {
            console.log("DataBase POST Error" + error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }


    });

});

app.get('/Users', function(req, res) {

    User.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log("DataBase GET error" + error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);


        }

    });

});

app.get('/Users/:id', function(req, res) {

    User.findById(req.params.id, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {


            res.json(doc);


        }

    });

});

app.post('/post-feedback', function (req, res) {

  delete req.body._id; //for safety reasons, to make sure no one provides another id and delete others
  db.collection('usermodels').insertOne(req.body).then(function (r) {
    res.send({
      success: true,
      redirect: "/view-feedbacks"
    });
  });
  
});

//to view the comments
app.get('/view-feedbacks', function (req, res) {
  db.collection('usermodels').find({}).toArray().then(function (feedbacks, opinions) {
      res.render("feedback",{comment: feedbacks});
});

});

app.use(function (req, res) {
  res.sendFile(__dirname + "/views/app.html");
});


app.listen(port, function() {

    console.log('connected and listening on port ' + port);

});

