 'use strict';

angular.module('lotoratorApp')
	.directive('combination', function(){
		return {
			controller: function($scope) {
				$scope.lottoCombination = function() {

					(function rndmNumA(min, max) {
	                  var A = Math.floor(Math.random() * (max - min)) + min;
	                  $scope.allNums.a = A;
	              	})(1,40);


	                (function rndmNumB(min, max) {
	                  var B = Math.floor(Math.random() * (max - min)) + min;
	                    if ($scope.allNums.a !== B) {
	                      $scope.allNums.b = B;
	                    } else {
	                       rndmNumB(1,40);
	                    }
	                })(1,40);

	                (function rndmNumC(min, max) {
	                  var C = Math.floor(Math.random() * (max - min)) + min;
	                    if ($scope.allNums.a !== C && $scope.allNums.b !== C) {
	                      $scope.allNums.c = C;
	                    } else {
	                       rndmNumC(1,40);
	                    }
	                })(1,40);

	                (function rndmNumD(min, max) {
	                  var D = Math.floor(Math.random() * (max - min)) + min;
	                    if ($scope.allNums.a !== D && $scope.allNums.b !== D && $scope.allNums.c !== D) {
	                      $scope.allNums.d = D;
	                    } else {
	                       rndmNumD(1,40);
	                    }
	                })(1,40);

	                (function rndmNumE(min, max) {
	                  var E = Math.floor(Math.random() * (max - min)) + min;
	                    if ($scope.allNums.a !== E && $scope.allNums.b !== E && $scope.allNums.c !== E && $scope.allNums.d !== E) {
	                      $scope.allNums.e = E;
	                    } else {
	                       rndmNumE(1,40);
	                    }
	                })(1,40);

	                (function rndmNumF(min, max) {
	                  var F = Math.floor(Math.random() * (max - min)) + min;
	                    if ($scope.allNums.a !== F && $scope.allNums.b !== F && $scope.allNums.c !== F && $scope.allNums.d !== F && $scope.allNums.e !== F) {
	                      $scope.allNums.f = F;
	                    } else {
	                       rndmNumF(1,40);
	                    }
	                })(1,40);

	                (function rndmNumG(min, max) {
	                  var G = Math.floor(Math.random() * (max - min)) + min;
	                    if ($scope.allNums.a !== G && $scope.allNums.b !== G && $scope.allNums.c !== G && $scope.allNums.d !== G && $scope.allNums.e !== G && $scope.allNums.f !== G) {
	                      $scope.allNums.g = G;
	                    } else {
	                       rndmNumG(1,40);
	                    }
	                })(1,40);

	            }
			},
			restrict: 'E',
			templateUrl: '../templates/combination.templ.html', 
			link: function($scope, iElm, iAttrs, controller) {
				iElm.bind('click', function() {
					var divStatistika = document.getElementById('statistika');
					divStatistika.className = 'collapse';
				})   
			}
		};
	});