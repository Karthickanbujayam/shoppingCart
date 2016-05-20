define(['./module'], function (factories) {
    'use strict';
 
	factories.factory('loginFactory', function($q, $timeout, $http) {
	console.log("Login factory is loading");
   
   //***Read local JSON data....

   /* var avalUser = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('mock_data/users').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };
    */
 
    var avalUser = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('https://api.mlab.com/api/1/databases/click_shoppingcart_db/collections/userDetails?f={"username": 1, "password": 1}&apiKey=m6MDDZnQhLJW_-l6t04kB0bN8yM2Jtof').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };
    

    return avalUser;
	});     
});




