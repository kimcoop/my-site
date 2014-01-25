'use strict';

var MainCtrl = angular.module('mySiteApp').controller('MainCtrl', function ($scope) {

  $scope.invert = function() {
    $scope.isInverted = !$scope.isInverted;
  }


});

MainCtrl['$inject'] = ['$scope'];