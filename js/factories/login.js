define(['./module'], function (directives) {
    'use strict';

    factories.factory("User", function($resource) {

    console.log("Login factory is loading");
    
    return $resource("user/:userId.json", {}, {

		        query: { method: "GET", params: { userId: "users" }, isArray: true }
		
		    });
	});
     
});




