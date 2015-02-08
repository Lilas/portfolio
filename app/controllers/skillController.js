'use strict';

angular
	.module("portfolioApp")
	.controller("SkillController", ['$scope', '$http', "vCards", SkillController]);

function SkillController($scope, $http, vCards) {
	$scope.skills = vCards.getByKey('skills').then(function(skills){
		$scope.skills = skills;
	}, function(msg){ console.log(msg); });
}