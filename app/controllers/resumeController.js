'use strict';

angular
	.module("portfolioApp")
	.controller("ResumeController", ['$scope', '$http', "vCards", ResumeController])
	.directive("jobs", jobsDirective);

function ResumeController($scope, $http, vCards) {
	vCards.get().then(function(objects){
		$scope.jobs = objects.jobs;
		$scope.educations = objects.educations;
	}, function(msg){
		console.log(msg);
	});
}

function jobsDirective(){
	return {
		templateUrl: "partials/_jobs.html",
		restrict: 'EA',
        scope: {
            jobsData: '=',
        },
	}
}