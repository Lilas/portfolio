'use strict';

angular
	.module("portfolioApp")
	.factory("vCards", vCards);

function vCards ($http, $q) {
	var factory = {
		objects : false,
		get: function(){
			var deferred = $q.defer();
			if (factory.objects !== false) {
				deferred.resolve(factory.objects);	
			}
			else{
			
				$http.get("vcards.json")
					.success(function(data, status){
						factory.objects = data;
						deferred.resolve(data);
					}).error(function(data, status){
						deferred.reject("ERROR HTTP GET DATA");
					});
			}
			return deferred.promise;
		},
		getByKey: function(key){
			var deferred = $q.defer();
			var object = {};
			var vcards = factory.get().then(function(objects){
				angular.forEach(objects, function(v, k){
					if (k == key) {
						object = v;
					};
				});
				deferred.resolve(object);
			}, function(msg){
				deferred.reject(msg);
			});
			return deferred.promise;
		}
	}
	return factory;
}