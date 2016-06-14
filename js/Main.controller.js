'use strict';

/**
 * @ngdoc function
 * @name lotoratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lotoratorApp
 */
var myApp = angular.module('lotoratorApp')
  .controller('MainCtrl', ['$scope', 'allComb', function ($scope, allComb) {
    $scope.allNums = {};
    $scope.numOccuranceInAllComb = {};
    $scope.percantageOfOccurancies = {};
}]);