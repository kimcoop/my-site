'use strict';

var MainCtrl = angular.module('mySiteApp').controller('MainCtrl', function ($scope) {


  $scope.nouns = [
    "Web developer",
    "CS undergraduate",
    "Green smoothie drinker",
    "Sometimes runner",
    "Philadelphia native",
    "Pittsburgh lover",
    "French speaker",
    "Northwoods fan",
    "Pinochle player"
  ];


});

MainCtrl['$inject'] = ['$scope'];