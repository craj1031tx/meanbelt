//USER BLANK MODEL

console.log("loading userModel.js...");

var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
	username: {type: String, required: [true,"A name is required"]},
},{timestamps: true});



var User = mongoose.model("User", UserSchema);
