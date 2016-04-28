define(['./module'], function (controllers) {
	
	'use strict';

    return controllers.controller('SystemCtrl', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("System.js File is loading....");
		}


	]);
});