define(['./module'], function (controllers) {

	'use strict';
	
    return controllers.controller('LogsCtrl', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("Logs.js File is loading....");
		}


	]);
});