var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema and Model

var usersSchema = new Schema({
	name: "Kelvin",
	email: "kelvinm1724@gmail.com",
	phone_number: 954-778-0357,
	comment: "I think Donald is crazy"
	});
// ({
// 	name: string,
// 	email: string,
// 	phone_number: number,
// 	comment: string
// });

var userModel = mongoose.model("users", usersSchema);

module.exports = userModel;