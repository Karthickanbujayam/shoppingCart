define(['./module'], function (controllers) {

	'use strict';
	
    return controllers.controller('UserCtrl', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("User.js File is loading....");
		}


	]);
});