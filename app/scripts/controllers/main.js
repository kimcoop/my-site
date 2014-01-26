'use strict';

var MainCtrl = angular.module('mySiteApp').controller('MainCtrl', function ($scope) {

  $scope.nouns = [
    { name: "Web developer" },
    { name: "CS undergraduate" },
    { name: "Zoe Rooney team member", link: "http://zoerooney.com" },
    { name: "Green smoothie drinker" },
    { name: "Sometimes runner" },
    { name: "Philadelphia native" },
    { name: "Pittsburgh enthusiast" },
    { name: "French speaker" },
    { name: "Northwoods fan", link: "https://www.google.com/maps/preview/place/Spooner,+WI/@45.828091,-91.8919195,14z/data=!3m1!4b1!4m2!3m1!1s0x52ac3557a61a3553:0xd83287f0bddaa46a" },
    { name: "Pinochle player" }
  ];

  $scope.videoIsPlaying = true;

  $scope.toggleVideo = function() {
    $scope.videoIsPlaying = !$scope.videoIsPlaying;
  }


});

MainCtrl['$inject'] = ['$scope'];