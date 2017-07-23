var userModel = require('../models/schema');

var data = new userModel ({
	name: "Kelvin",
	comment: "New York is awesome"
});

data.save().then(function(){



});