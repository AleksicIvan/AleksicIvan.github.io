'use strict';

/**
 * @ngdoc function
 * @name lotoratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lotoratorApp
 */
var myApp = angular.module('lotoratorApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.allNums = {};
    $scope.numOccuranceInAllComb = {};
    $scope.percantageOfOccurancies = {};
}]);