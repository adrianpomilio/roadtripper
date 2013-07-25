'use strict';

roadtripper.controller('RoadTripDetailCtrl', 
	function RoadTripDetailCtrl( $scope, $routeParams, angularFire ) {

  		var url = 'https://road-tripper.firebaseio.com/trips/'+$routeParams.tripId;
  		$scope.trip = angularFire( url, $scope, 'trip', {} );

});
 
