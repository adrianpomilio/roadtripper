'use strict';

var roadtripper = angular.module('roadtripper', ['ui.bootstrap','firebase']);

roadtripper.config(function($routeProvider) {
  $routeProvider.
  	  when('/trips', {
  	  	templateUrl: 'partials/road-trips.html', 
  	  	controller: 'RoadTripsCtrl'
  	  }).
  	  when('/jointrip', {
  	  	templateUrl: 'partials/create-person.html', 
  	  	controller: 'CreatePersonCtrl'}).
  	  when('/create-trip', {
  	  	templateUrl: 'partials/create-person.html', 
  	  	controller: 'CreateTripCtrl'}).  
  	  when('/trip/:tripId', {
  	  	templateUrl: 'partials/road-trip-details.html', 
  	  	controller: 'RoadTripDetailCtrl'}).
      otherwise({redirectTo: '/trips'});
});


