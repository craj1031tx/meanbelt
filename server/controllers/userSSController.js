//BLANK SS CONTROLLER

console.log("loading userSSController.js...");

var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var User = mongoose.model("User");

function userController(){
	// this.register = function(req,res){
	// 	console.log("userSSController received:", req.body);
	// 	if(req.body.password!=req.body.plaintext){
	// 		returnObject = {data:{errors:{message:"Password do not match."}}}
	// 		res.json(returnObject);
	// 	}
	// 	var aNewUser = new User({name: req.body.username, email: req.body.email, password: req.body.password, plaintext: req.body.plaintext});
	// 	aNewUser.save(function(err2, returnedData){
	// 		if(err2){			
	// 			res.json(err2);
	// 		}
	// 		else{
	// 			res.json(returnedData);
	// 			console.log("userSSController save successful!");
	// 		};
	// 	});
	// };
	this.login = function(req,res){
		User.findOne({username:req.body.username}, function(err, foundUser){
			if(err || !foundUser){
				//CREATE USER BECAUSE USER DOES NOT EXIST!
				// res.json({errors:{message:"Login error (debug: email not found)"}});
				var aNewUser = new User({username: req.body.username});
				aNewUser.save(function(err, returnedData){
					if(err){
						res.json({errors:{message:"Login error (debug: email not found)"}});
					}
					else{
						res.json(returnedData);
					};
				});
			}
			else{
				res.json(foundUser);
			};
		});
	};
};

module.exports = new userController;