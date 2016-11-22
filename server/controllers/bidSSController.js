//BLANK SS CONTROLLER

console.log("loading bidSSController.js...");

var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Bid = mongoose.model("Bid");
var result1;
function bidController(){
	this.processBid = function(req,res){
		console.log(req.body);
		var newBid = new Bid({forProduct: req.body.forProduct, madeByUsername: req.body.madeByUsername, madeById: req.body.madeById, amount: req.body.amount});
		newBid.save(function(err, successInfo){
			if(err){
				console.log(err)
			}
			else{
				console.log(successInfo);
				res.json(successInfo);
			};
		});
	};
	this.getBids = function(req,res){
		Bid.find({}, function(err,bidList){
			if(err){
				console.log(err);
			}
			else{
				console.log(bidList);
				res.json(bidList);
			};
		});
	};
	this.getWinner1 = function(req,res){
		console.log(req.body)
		Bid.findOne({$and:[{forProduct:1},{amount:{$gte:req.body.product1}}]}, function(err, result){
			console.log("result1 is:", result);
			res.json(result);
		})
	};
	this.getWinner2 = function(req,res){
		Bid.findOne({$and:[{forProduct:2},{amount:{$gte:req.body.product2}}]}, function(err, result){
			console.log("result2 is:", result);
			res.json(result);
		})
	}
	this.getWinner3 = function(req,res){
		Bid.findOne({$and:[{forProduct:3},{amount:{$gte:req.body.product3}}]}, function(err, result){
			console.log("result3 is:", result);
			res.json(result);
		})
	}
};

module.exports = new bidController;