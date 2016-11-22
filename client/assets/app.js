//BLANK ANGULAR APP

var bidsApp = angular.module("bidsApp", ["ngRoute", "ngCookies"]);

bidsApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl:"/partials/loginPartial.html",
		controller: "loginController"
	})
	.when("/bids", {
		templateUrl:"/partials/bidsPartial.html",
		controller: "bidsController"
	})
	.when("/end", {
		templateUrl:"/partials/endPartial.html",
		controller: "endController"
	})
	.otherwise({redirectTo:"/"})
})