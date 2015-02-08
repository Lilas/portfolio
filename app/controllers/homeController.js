'use strict';

angular
	.module("portfolioApp")
	.controller("HomeController", ['$scope', '$http', "vCards", HomeController]);

function HomeController($scope, $http, vCards) {
	$scope.card = vCards.getByKey('card').then(function(card){
		$scope.card = card;
	}, function(msg){ console.log(msg); });
}