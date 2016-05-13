define(['./module'], function (controllers) {

	'use strict';
	
    return controllers.controller('MenuCtrl', ['$scope','$http','$state','$templateCache','$location','navFactory', 
        function($scope, $http, $state,$templateCache, $location, navFactory) {

			console.log("Nav.js File is loading....");

			//$scope.menus = [ 'Dashboard','Data','Catalog','Design','Extension',
			//				  'Localization','Logs','Messages','Sales','Settings','System','User'];

					navFactory.fetch().then(function(data) {
					        $scope.menus = data;
					 });
 
		}
	]);
});