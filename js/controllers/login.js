define(['./module'], function (controllers) {

	'use strict';
	
    return controllers.controller('LoginCtrl', ['$scope','$http','$state','$location',
		function ($scope, $http, $state, $location) {
			console.log("LoginCtrl File is loading....");
 
			$http.get('http://localhost/Project_Setup/shoppingCart/mock_data/user.json')
				.success(function(data) { 					
						$scope.users = data; 
				})
				.error(function(data) {
						$scope.name = 'No connection :( Now add #?apimock=true to the browser addressbar (e.g. http://localhost:60280/#?apimock=true) and try again ;)';
				});

		    $scope.LoginUser = function(){			
			var loggedin = false; 		  
		    var totalUsers = $scope.users.length;
		    var usernameTyped = $scope.username;
		    var passwordTyped = $scope.password;

		    for( var i=0; i < totalUsers; i++ ) {
		            if( ($scope.users[i].name === usernameTyped) && ($scope.users[i].password === passwordTyped) ) {
		                loggedin = true;
		                console.log("Login Succesfully :" + $scope.users[i].name)
		                break;
		            }
		        }

		        if( loggedin === true ) {
		            alert("login successful");
		            $location.path("/dashboard");
		        } else {
		            alert("username does not exist");
		        }


			}

			   $scope.registerUser = function(){	


			   }

			

		  /*  $scope.loginUser = function() {
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
		    }*/
		}


	]);

 

});



