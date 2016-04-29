define(['./module'], function (controllers) {

	'use strict';
	
    return controllers.controller('LoginCtrl', ['$scope','$state',
		function LoginCtrl($scope, $route, $routeParams, $location, User) {
			console.log("LoginCtrl File is loading....");
		    $scope.users = User.query();
		    $scope.loginUser = function() {
		        var loggedin = false;
		        var totalUsers = $scope.users.length;
		        var usernameTyped = $scope.userUsername;

		        for( i=0; i < totalUsers; i++ ) {
		            if( $scope.users[i].name === usernameTyped ) {
		                loggedin = true;
		                break;
		            }
		        }

		        if( loggedin === true ) {
		            alert("login successful");
		            $location.path("/view1");
		        } else {
		            alert("username does not exist");
		        }
		    }
		}


	]);
});



