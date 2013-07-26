'use strict';

roadtripper.controller('RoadTripDetailCtrl', 
	function RoadTripDetailCtrl( $scope, $routeParams, $timeout, $log, angularFire ) {

  		var url = 'https://road-tripper.firebaseio.com/trips/'+$routeParams.tripId;
  		$scope.trip = angularFire( url, $scope, 'trip', {} );

  	 		google.maps.visualRefresh = true;

    		

			angular.extend($scope, {

			    position: {
			      coords: {
			        latitude: 35.6008,
					longitude: -82.5542
			      }
			    },

				/** the initial center of the map */
				centerProperty: {
					latitude: 35.6008,
					longitude: -82.5542
				},

				/** the initial zoom level of the map */
				zoomProperty: 6,

				/** list of markers to put in the map */
				markersProperty: [ {
						latitude: 35.6008,
						longitude: -82.5542
					}],

				

			});
			
			$scope.mapPerson = function(obj) {
				
				$scope.markersProperty = [{
						latitude: obj.currentlocation.lat,
						longitude: obj.currentlocation.lon
					}]
			}

});
 
