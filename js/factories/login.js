define(['./module'], function (factories) {
    'use strict';
 
	factories.factory('loginFactory', function($q, $timeout, $http) {
	console.log("Login factory is loading");
    var avalUser = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('mock_data/users').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return avalUser;
	});     
});




