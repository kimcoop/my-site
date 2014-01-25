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
})

.directive("liScroll", function ($window) {
  return function(scope, element, attrs) {
    var windowEl = angular.element($window);
    windowEl.bind("scroll", function() {

      var body = document.querySelector('body'),
        bodyEl = angular.element(body);

      var outerHeight = windowEl[0].outerHeight,
        elInView = ( element[0].offsetTop - windowEl[0].scrollY ) < ( outerHeight / 2),
        pageScrollComplete = (( windowEl[0].innerHeight + windowEl[0].scrollY) >= bodyEl[0].offsetHeight );

      if ( elInView || pageScrollComplete ) {
        element.addClass('in');
      } else {
        element.removeClass('in');
      }

    });
  };
});