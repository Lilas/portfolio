'use strict';

angular
	.module("portfolioApp", ['ngRoute', "ngKnob", "ngIsActiveNav"])
	.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
			when('/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeController',
			}).
			when('/resume', {
				templateUrl: 'partials/resume.html',
				controller: 'ResumeController'
			}).
			when('/skills', {
				templateUrl: 'partials/skills.html',
				controller: 'SkillController'
			}).
			when('/feedback', {
				templateUrl: 'partials/feedback.html',
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
