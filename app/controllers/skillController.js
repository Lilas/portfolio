'use strict';

angular
	.module("portfolioApp")
	.controller("SkillController", ['$scope', '$http', "vCards", SkillController])
	.directive("skill", skillDirective);

function SkillController($scope, $http, vCards) {
	$scope.skills = vCards.getByKey('skills').then(function(skills){
		$scope.skills = skills;
	}, function(msg){ console.log(msg); });
}
function skillDirective(){
	return {
		templateUrl: "partials/_skills.html",
		restrict: 'EA',
        scope: {
            skillData: '=',
        },
	}
}