angular.module('roadtripper', ['ui.bootstrap','firebase']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	  when('/trips', {templateUrl: 'partials/road-trips.html', controller: RoadTripsCtrl}).
  	  when('/jointrip', {templateUrl: 'partials/create-person.html', controller: CreatePersonCtrl}).
  	  when('/create-trip', {templateUrl: 'partials/create-person.html', controller: CreateTripCtrl}).
      
      when('/trip/:tripId', {templateUrl: 'partials/road-trip-details.html', controller: RoadTripDetailCtrl}).
      otherwise({redirectTo: '/trips'});
}]);

/*
var fbRef = new Firebase("https://road-tripper.firebaseio.com/");
var userID = null;

var auth = new FirebaseSimpleLogin(commentsRef, function(error, user) {
  if (error) {
			    // an error occurred while attempting login
			    console.log(error);
			  } else if (user) {
			    // user authenticated with Firebase
			    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);

			  } else {
			     userID = user.id;

			  }
  
});
*/	     
