'use strict';

var myApp = angular.module('mySiteApp', []);

myApp
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })


  // .factory('DataService', function() {
  //   return {
  //     isInverted : false
  //   };
  // });
