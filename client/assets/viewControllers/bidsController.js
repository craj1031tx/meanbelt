//BLANK CLIENT VIEWCONTROLLER

bidsApp.controller("bidsController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
	console.log("bidsController loaded...");

	appFactory.getCurrentUser(function(userId, username){
		$scope.currentUserId = userId;
		$scope.currentUsername = username;
		console.log($scope.currentUserId);
		if(!$scope.currentUserId){
			$location.url('/');
		}
	});

	var updateBids = function(){
		appFactory.getCurrentBids(function(bidList1, bidList2, bidList3, amount1, amount2, amount3){
			$scope.bidList1 = bidList1;
			$scope.bidList2 = bidList2;
			$scope.bidList3 = bidList3;
			$scope.max1 = Math.max.apply(Math, amount1);
			$scope.max2 = Math.max.apply(Math, amount2);
			$scope.max3 = Math.max.apply(Math, amount3);
		console.log("getCurrentBids sez:", bidList1, bidList2, bidList3, $scope.max1, $scope.max2, $scope.max3);
		});
	};
	updateBids();
	

	$scope.logout = function(){
		$cookies.remove("currentUserId");
		$cookies.remove("currentUsername");
		$location.url('/')
	};

	$scope.executeBid = function(productNumber, bidAmount){
		$scope.bidError1 = false;
		$scope.bidError2 = false;
		$scope.bidError3 = false;
		$scope.bidInfo = {}
		$scope.bidInfo.forProduct = productNumber;
		$scope.bidInfo.amount = bidAmount
		$scope.bidInfo.madeByUsername = $scope.currentUsername;
		$scope.bidInfo.madeById = $scope.currentUserId;
		if($scope.bidInfo.forProduct == 1 && ($scope.bidInfo.amount <= $scope.max1 || !$scope.bidInfo.amount)){
			$scope.bidError1 = true;
		}
		else if($scope.bidInfo.forProduct == 2 && ($scope.bidInfo.amount <= $scope.max2 || !$scope.bidInfo.amount)){
			$scope.bidError2 = true;
		}
		else if($scope.bidInfo.forProduct == 3 && ($scope.bidInfo.amount <= $scope.max3 || !$scope.bidInfo.amount)){
			$scope.bidError3 = true;
		}
		else{
			appFactory.processBid($scope.bidInfo, function(returnedData){
				console.log("bidController received back bidList:", returnedData);
			});
		}
		updateBids();
	};

	$scope.endBids = function(){
		if($scope.bidList1.length <=0 || $scope.bidList2.length <=0 || $scope.bidList3.length <=0){
			$scope.prohibitEnding = true;
		}
		else{
			console.log("AUCTION HAS ENDED!!!");
			$location.url('/end');
		}
	}
}]);