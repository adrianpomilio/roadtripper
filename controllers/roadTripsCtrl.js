function RoadTripsCtrl($scope, $routeParams, angularFireCollection) {
	var url = 'https://road-tripper.firebaseio.com/trips';
	$scope.trips = angularFireCollection(url);
	
    console.log($scope.trips)
    
 };
 
RoadTripsCtrl.$inject = ['$scope', '$routeParams','angularFireCollection'];
