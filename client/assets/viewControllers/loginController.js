//BLANK CLIENT VIEWCONTROLLER

bidsApp.controller("loginController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
	console.log("loginController loaded...");

	// $scope.register=function(){
	// 	appFactory.registerUser($scope.newUserInfo, function(returnedData){
	// 		if(returnedData.data.errors){
	// 			$scope.listOfErrors = [];
	// 			for(var key in returnedData.data.errors){
	// 				if (!returnedData.data.errors.hasOwnProperty(key)) continue;
	// 				var err = returnedData.data.errors[key];
	// 				$scope.listOfErrors.push(err.message);
	// 			};
	// 			console.log($scope.listOfErrors);
	// 		};
	// 	});
	// };
	if($cookies.get("currentUserId")){
		$scope.currentUser = $cookies.get("currentUserId");
		$scope.currentUsername = $cookies.get("currentUsername");
		$location.url('/bids')
	}
	$scope.login=function(){
		appFactory.loginUser($scope.loginInfo, function(returnedData){
			console.log("returned data is:", returnedData);
			if(returnedData.data.errors){
				$scope.listOfErrors = [];
				for(var key in returnedData.data.errors){
					$scope.listOfErrors.push(returnedData.data.errors[key]);
				};
				console.log($scope.listOfErrors);
			};
			$location.url("/bids")
		})
	}
}]);