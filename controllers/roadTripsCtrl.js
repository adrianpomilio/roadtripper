'use strict';

roadtripper.controller('RoadTripsCtrl',
	function RoadTripsCtrl ( $scope, $routeParams, angularFireCollection ) {
		var url = 'https://road-tripper.firebaseio.com/trips';
		$scope.trips = angularFireCollection(url);
	
 });
 
