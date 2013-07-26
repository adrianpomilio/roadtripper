'use strict';

var roadtripper = angular.module('roadtripper', ['ui.bootstrap','firebase','google-maps']);

roadtripper.config(function($routeProvider) {
  $routeProvider.
  	  when('/trips', {
  	  	templateUrl: 'partials/road-trips.html', 
  	  	controller: 'RoadTripsCtrl'
  	  }).
  	  when('/jointrip', {
  	  	templateUrl: 'partials/create-person.html', 
  	  	controller: 'CreatePersonCtrl'}).
  	  when('/trip/:tripId', {
  	  	templateUrl: 'partials/road-trip-details.html', 
  	  	controller: 'RoadTripDetailCtrl'}).
      otherwise({redirectTo: '/trips'});
});


