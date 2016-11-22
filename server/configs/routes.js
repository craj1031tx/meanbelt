//BLANK EXPRESS ROUTE MODULE
console.log("loading routes.js...");

var bidSSController = require("../controllers/bidSSController.js");
var userSSController = require("../controllers/userSSController.js")

module.exports = function(app){
	// app.post("/register_user", userSSController.register);
	app.post("/login_user", userSSController.login);
	app.post("/process_bid", bidSSController.processBid);
	app.get("/get_bids", bidSSController.getBids);
	app.post("/get_winner1", bidSSController.getWinner1);
	app.post("/get_winner2", bidSSController.getWinner2);
	app.post("/get_winner3", bidSSController.getWinner3);
}