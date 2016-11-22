//endController.js

bidsApp.controller("endController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
	console.log("endController has loaded...");

	var updateBids = function(){
		appFactory.getCurrentBids(function(bidList1, bidList2, bidList3, amount1, amount2, amount3){
			$scope.bidList1 = bidList1;
			$scope.bidList2 = bidList2;
			$scope.bidList3 = bidList3;
			$scope.max1 = Math.max.apply(Math, amount1);
			$scope.max2 = Math.max.apply(Math, amount2);
			$scope.max3 = Math.max.apply(Math, amount3);
			appFactory.getWinner1($scope.max1, function(winner1){
				console.log("endController received back:", winner1.data);
				$scope.winner1Info = winner1.data;
			});
			appFactory.getWinner2($scope.max2, function(winner2){
				console.log("endController received back:", winner2.data);
				$scope.winner2Info = winner2.data;
			});
			appFactory.getWinner3($scope.max3, function(winner3){
				console.log("endController received back:", winner3.data);
				$scope.winner3Info = winner3.data;
			});

		});
	};

	updateBids();

	
}]);