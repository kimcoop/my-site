'use strict';

var MainCtrl = angular.module('mySiteApp').controller('MainCtrl', function ($scope) {


  $scope.nouns = [
    "Web developer",
    "Runner",
    "Green smoothie drinker",
    "CS undergraduate",
    "Philadelphia native",
    "Pittsburgh lover",
    "French speaker"
  ];


});

MainCtrl['$inject'] = ['$scope'];