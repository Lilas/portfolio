'use strict';

angular
	.module("portfolioApp", ['ngRoute', "ngKnob"])
	.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
			when('/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeController'
			}).
			when('/resume', {
				templateUrl: 'partials/resume.html',
				controller: 'ResumeController'
			}).
			when('/skills', {
				templateUrl: 'partials/skills.html',
				controller: 'SkillController'
			}).
			when('/contacts', {
				templateUrl: 'partials/contacts.html',
			}).
			when('/feedback', {
				templateUrl: 'partials/feedback.html',
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);