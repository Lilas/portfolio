'use strict';

angular
	.module("portfolioApp")
	.controller("ResumeController", ['$scope', '$http', "vCards", ResumeController]);

function ResumeController($scope, $http, vCards) {
	vCards.get().then(function(objects){
		$scope.jobs = objects.jobs;
		$scope.educations = objects.educations;
	}, function(msg){
		console.log(msg);
	});
}