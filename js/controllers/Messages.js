define(['./module'], function (controllers) {

	'use strict';
	
    return controllers.controller('MessagesCtrl', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("Messages.js File is loading....");
		}


	]);
});