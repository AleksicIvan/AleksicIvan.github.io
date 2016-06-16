 'use strict';

angular.module('lotoratorApp')
	.directive('statistics', ['allComb', function(allComb){
		return {
			controller: function($scope) {
				$scope.getStatistics = function(){

	            var allCombs = allComb;
	            
	            function numOfAllOccurencies (arr){
	              var allNum;
	              allNum = arr.length * 7;
	              return allNum;
	            }

	            function allOccurenciesOfA (arr) {
	              var arrTemp;
	              var counterA = 0;
	              var firstA = $scope.allNums.a;

	              //console.log("first broj u objektu je: " + firstA);
	              //petlja koja ide kroz niz arr
	              for(var i = 0; i < arr.length; i++){
	                //petlja koja ide kroz niz arr[i]
	                for(var x = 0; x < arr[i].length; x++ ){
	                  arrTemp = arr[i][x];
	                  //console.log("Trenutni broj u nizu je: " + arrTemp);
	                  if(firstA === arrTemp){
	                  counterA++;
	                  //console.log("Promenljiva counter za first broj u kombinaciji je: " + counterA);
	                  $scope.numOccuranceInAllComb.a = counterA;
	                  }
	                }
	              }
	            }
	            allOccurenciesOfA(allCombs);

	            function allOccurenciesOfB (arr) {
	              var arrTemp;
	              var counterB = 0;
	              var firstB = $scope.allNums.b;

	              //console.log("Drugi broj u objektu je: " + firstB);
	              //petlja koja ide kroz niz arr
	              for(var i = 0; i < arr.length; i++){
	                //petlja koja ide kroz niz arr[i]
	                for(var x = 0; x < arr[i].length; x++ ){
	                  arrTemp = arr[i][x];
	                  //console.log("Trenutni broj u nizu je: " + arrTemp);
	                  if(firstB === arrTemp){
	                  counterB++;
	                  //console.log("Promenljiva counter za drugi broj u kombinaciji je: " + counterB);
	                  $scope.numOccuranceInAllComb.b = counterB;
	                  }
	                }
	              }
	            }
	            allOccurenciesOfB(allCombs);

	            function allOccurenciesOfC (arr) {
	              var arrTemp;
	              var counterC = 0;
	              var firstC = $scope.allNums.c;

	              //console.log("Treci broj u objektu je: " + firstC);
	              //petlja koja ide kroz niz arr
	              for(var i = 0; i < arr.length; i++){
	                //petlja koja ide kroz niz arr[i]
	                for(var x = 0; x < arr[i].length; x++ ){
	                  arrTemp = arr[i][x];
	                  //console.log("Trenutni broj u nizu je: " + arrTemp);
	                  if(firstC === arrTemp){
	                  counterC++;
	                  //console.log("Promenljiva counter za treci broj u kombinaciji je: " + counterC);
	                  $scope.numOccuranceInAllComb.c = counterC;
	                  }
	                }
	              }
	            }
	            allOccurenciesOfC(allCombs);

	            function allOccurenciesOfD (arr) {
	              var arrTemp;
	              var counterD = 0;
	              var firstD = $scope.allNums.d;

	              //console.log("Cetvrti broj u objektu je: " + firstD);
	              //petlja koja ide kroz niz arr
	              for(var i = 0; i < arr.length; i++){
	                //petlja koja ide kroz niz arr[i]
	                for(var x = 0; x < arr[i].length; x++ ){
	                  arrTemp = arr[i][x];
	                  //console.log("Trenutni broj u nizu je: " + arrTemp);
	                  if(firstD === arrTemp){
	                  counterD++;
	                  //console.log("Promenljiva counter za cetvrti broj u kombinaciji je: " + counterD);
	                  $scope.numOccuranceInAllComb.d = counterD;
	                  }
	                }
	              }
	            }
	            allOccurenciesOfD(allCombs);

	            function allOccurenciesOfE (arr) {
	              var arrTemp;
	              var counterE = 0;
	              var firstE = $scope.allNums.e;

	              //console.log("Peti broj u objektu je: " + firstE);
	              //petlja koja ide kroz niz arr
	              for(var i = 0; i < arr.length; i++){
	                //petlja koja ide kroz niz arr[i]
	                for(var x = 0; x < arr[i].length; x++ ){
	                  arrTemp = arr[i][x];
	                  //console.log("Trenutni broj u nizu je: " + arrTemp);
	                  if(firstE === arrTemp){
	                  counterE++;
	                  //console.log("Promenljiva counter za peti broj u kombinaciji je: " + counterE);
	                  $scope.numOccuranceInAllComb.e = counterE;
	                  }
	                }
	              }
	            }
	            allOccurenciesOfE(allCombs);

	            function allOccurenciesOfF (arr) {
	              var arrTemp;
	              var counterF = 0;
	              var firstF = $scope.allNums.f;

	              //console.log("Sesti broj u objektu je: " + firstF);
	              //petlja koja ide kroz niz arr
	              for(var i = 0; i < arr.length; i++){
	                //petlja koja ide kroz niz arr[i]
	                for(var x = 0; x < arr[i].length; x++ ){
	                  arrTemp = arr[i][x];
	                  //console.log("Trenutni broj u nizu je: " + arrTemp);
	                  if(firstF === arrTemp){
	                  counterF++;
	                  //console.log("Promenljiva counter za sesti broj u kombinaciji je: " + counterF);
	                  $scope.numOccuranceInAllComb.f = counterF;
	                  }
	                }
	              }
	            }
	            allOccurenciesOfF(allCombs);

	            function allOccurenciesOfG (arr) {
	              var arrTemp;
	              var counterG = 0;
	              var firstG = $scope.allNums.g;

	              //console.log("Sedmi broj u objektu je: " + firstG);
	              //petlja koja ide kroz niz arr
	              for(var i = 0; i < arr.length; i++){
	                //petlja koja ide kroz niz arr[i]
	                for(var x = 0; x < arr[i].length; x++ ){
	                  arrTemp = arr[i][x];
	                  //console.log("Trenutni broj u nizu je: " + arrTemp);
	                  if(firstG === arrTemp){
	                  counterG++;
	                  //console.log("Promenljiva counter za sedmi broj u kombinaciji je: " + counterG);
	                  $scope.numOccuranceInAllComb.g = counterG;
	                  }
	                }
	              }
	            }               
	            allOccurenciesOfG(allCombs);

	            function calcPercentageForA (){
	              var aa = (($scope.numOccuranceInAllComb.a / numOfAllOccurencies(allCombs)) * 100);
	              var procA = Math.round(aa);
	              $scope.percantageOfOccurancies.a = procA;
	            }
	            calcPercentageForA();

	            function calcPercentageForB (){
	              var bb = (($scope.numOccuranceInAllComb.b / numOfAllOccurencies(allCombs)) * 100);
	              var procB = Math.round(bb);
	              $scope.percantageOfOccurancies.b = procB;
	            }
	            calcPercentageForB();

	            function calcPercentageForC (){
	              var cc = (($scope.numOccuranceInAllComb.c / numOfAllOccurencies(allCombs)) * 100);
	              var procC = Math.round(cc);
	              $scope.percantageOfOccurancies.c = procC;
	            }
	            calcPercentageForC();

	            function calcPercentageForD (){
	              var dd = (($scope.numOccuranceInAllComb.d / numOfAllOccurencies(allCombs)) * 100);
	              var procD = Math.round(dd);
	              $scope.percantageOfOccurancies.d = procD;
	            }
	            calcPercentageForD();

	            function calcPercentageForE (){
	              var ee = (($scope.numOccuranceInAllComb.e / numOfAllOccurencies(allCombs)) * 100);
	              var procE = Math.round(ee);
	              $scope.percantageOfOccurancies.e = procE;
	            }
	            calcPercentageForE();

	            function calcPercentageForF (){
	              var ff = (($scope.numOccuranceInAllComb.f / numOfAllOccurencies(allCombs)) * 100);
	              var procF = Math.round(ff);
	              $scope.percantageOfOccurancies.f = procF;
	            }
	            calcPercentageForF();

	            function calcPercentageForG (){
	              var gg = (($scope.numOccuranceInAllComb.g / numOfAllOccurencies(allCombs)) * 100);
	              var procG = Math.round(gg);
	              $scope.percantageOfOccurancies.g = procG;
	            }
	            calcPercentageForG();
	          };
			},
			restrict: 'E', 
			templateUrl: '../templates/statistics.templ.html', 
			link: function($scope, iElm, iAttrs, controller) {
				iElm.bind('click', function() {
					var divStatistika = document.getElementById('statistika');
					divStatistika.removeAttribute('class');
				})   
			}
		};
	}]);