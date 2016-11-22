//BLANK CLIENT FACTORY

bidsApp.factory("appFactory", ["$http", "$cookies", function($http, $cookies){
	function factoryMethods(){
		console.log("appFactory loaded...");
		this.loginUser = function(userInfo, callback){
			console.log("Factory sending out", userInfo);
			$http.post("/login_user/", userInfo).then(function(returnedData){
				var currentUserId = returnedData.data._id;
				var currentUsername = returnedData.data.username;
				console.log(currentUserId, currentUsername);
				$cookies.put("currentUserId", currentUserId);
				$cookies.put("currentUsername", currentUsername);
				callback(returnedData);
			})
		};
		this.getCurrentUser = function(callback){
			callback($cookies.get("currentUserId"), $cookies.get("currentUsername"));
		};
		this.processBid = function(bidInfo, callback){
			$http.post("/process_bid", bidInfo).then(function(returnedData){
				console.log("appFactory processbid received back and is sending back to callback:", returnedData);
				callback(returnedData);
			});
		};
		this.getCurrentBids = function(callback){
			$http.get("/get_bids").then(function(bidList){
				var bidList1 = [];
				var bidList2 = [];
				var bidList3 = [];
				var bidAmount1 = [];
				var bidAmount2 = [];
				var bidAmount3 = [];
				for(var i = 0; i<bidList.data.length; i++){
					if(bidList.data[i].forProduct == 1){
						bidList1.push(bidList.data[i]);
						bidAmount1.push(bidList.data[i].amount);
					}
					else if(bidList.data[i].forProduct == 2){
						bidList2.push(bidList.data[i]);
						bidAmount2.push(bidList.data[i].amount);
					}
					else{
						bidList3.push(bidList.data[i]);
						bidAmount3.push(bidList.data[i].amount);
					};
				};
				callback(bidList1, bidList2, bidList3, bidAmount1, bidAmount2, bidAmount3);
			});
		};
		this.getWinner1 = function(max1, callback){
			console.log("the winning bids are:", max1);
			var winList1 = {product1: max1};
			$http.post("/get_winner1", winList1).then(function(winList){
				callback(winList);
			});
		};
		this.getWinner2 = function(max2, callback){
			console.log("the winning bids are:", max2);
			var winList2 = {product2: max2};
			$http.post("/get_winner2", winList2).then(function(winList){
				callback(winList);
			});
		};
		this.getWinner3 = function(max3, callback){
			console.log("the winning bids are:", max3);
			var winList3 = {product3: max3};
			$http.post("/get_winner3", winList3).then(function(winList){
				callback(winList);
			});
		};

	};
	return new factoryMethods;
}]);