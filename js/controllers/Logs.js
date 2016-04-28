'use strict';

define(['controllers'], function(controllers) {
    return controllers.controller('LogsCtrl', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("Logs.js File is loading....");
		}


	]);
});