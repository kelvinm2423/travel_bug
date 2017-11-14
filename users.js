var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
First: String,
Last: String,
Username: String,
Password: String

});

var User = mongoose.model("User", userSchema);
module.exports = User; 