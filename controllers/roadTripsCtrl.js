function RoadTripsCtrl($scope, $routeParams) {
  $scope.roadTrips = [
  	{tripId:1, 
  	tripName:"Asheville", 
  	tripDescription:"Lacrosse Tournament",
  	tripOwner:"Adrian",
  	tripStartDate:"July 27, 2013",
  	tripEndDate:"July 29, 2013",
  	people:[
  		{name:"Adrian",
  		phone:"919-656-0380",
  		currentlocation: {lat:0, lon:0},
  		pastLocations:[]
  		},
  		{name:"Mike",
  		phone:"919-656-0380",
  		currentlocation: {lat:0, lon:0},
  		pastLocations:[]
  		},
  		{name:"Turbo",
  		phone:"919-656-0380",
  		currentlocation: {lat:0, lon:0},
  		pastLocations:[]
  		}
  	]
  }
  ]
};
 
RoadTripsCtrl.$inject = ['$scope', '$routeParams'];
