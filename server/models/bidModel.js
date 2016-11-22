//BLANK MONGO MODEL

console.log("loading bidModel.js...");

var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var BidSchema = new mongoose.Schema({
	forProduct: Number,
	madeByUsername: String,
	madeById: String,
	amount: Number,
}, {timestamps:true});

var Bid = mongoose.model("Bid", BidSchema);