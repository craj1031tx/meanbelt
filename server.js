//BLANK EXPRESS SERVER FOR BASE MEAN APP.
var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname,"client")));
app.use(express.static(path.join(__dirname,"bower_components")));
var mongoose = require("mongoose");
//V bodyParse must be loaded before being required by routes.js
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//V require needs to be before routes and other mongo requirements...
require("./server/configs/mongoose.js")
require("./server/controllers/bidSSController.js");
require("./server/controllers/userSSController.js");
require("./server/configs/routes.js")(app);



app.listen(8000, function(){
	console.log("Now listening on port 8000");
})