var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema and Model

var usersSchema = new Schema({
	name: String,
	email: String,
	phone_number: Number,
	comment: String
});

var userModel = mongoose.model("userModel", usersSchema);

module.exports = userModel;