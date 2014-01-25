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

.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    var windowEl = angular.element($window);
    windowEl.bind("scroll", function() {
      var scrolled = windowEl[0].scrollY;
      element.css('top', -(scrolled * 0.2) + 'px');
    });
  };
});