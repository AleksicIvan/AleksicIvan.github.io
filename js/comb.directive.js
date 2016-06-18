 'use strict';

angular.module('lotoratorApp')
	.directive('combination', function(arrOfBaseNumbers){
		return {
			controller: function($scope) {
				$scope.lottoCombination = function() {

				    var numbers = arrOfBaseNumbers;
  					// Fisher-Yates shuffle algorithm
  					$scope.lottoRndmCombo = randy.best.sample(numbers, 7);
  					$scope.lottoRndmCombo.sort(function(a,b){return a-b;});
  					return $scope.lottoRndmCombo;
	            }
			},
			restrict: 'E',
			templateUrl: '../templates/combination.templ.html', 
			link: function($scope, iElm, iAttrs, controller) {
				iElm.bind('click', function() {
					var divStatistika = document.getElementById('statistika');
					divStatistika.className = 'statistika_hide';
				})   
			}
		};
	});

