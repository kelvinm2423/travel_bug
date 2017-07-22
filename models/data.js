var userModel = require('../models/schema');

var data = new userModel ({
	name: "Kelvin",
	email: "kelvinm1724@gmail.com",
	phone_number: 954-778-0357,
	comment: "New York is awesome"
});

data.save().then(function(){



});