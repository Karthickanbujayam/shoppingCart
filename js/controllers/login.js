define(['./module'], function (controllers) {

	'use strict';
	
    return controllers.controller('LoginCtrl', ['$scope','$http','$state','$templateCache','$location','loginFactory',
		function ($scope, $http, $state,$templateCache, $location,loginFactory) {
			console.log("LoginCtrl File is loading....");

			var loggedin = false;
			//Calling By login Factory method
			loginFactory.fetch().then(function(data) {
					        $scope.users = data;
					 });

			 	 
			$scope.LoginUser = function(){ 
					console.log("LoginUser function has called...."); 
					 
					

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
				    /* while compiling form , angular created this object*/
				    alert("registerUser");
				     
	 				var method = 'POST';
					var url = 'php/php_registerData.php';
					var FormData = {
					    				username: $scope.username,
									    password : $scope.password,
									    email: $scope.email,
									    tel: $scope.tel
		        						 		 
							      	}

					    $http({
					      method: method,
					      url: url,
					      data: FormData,
					      headers: {'Content-Type': 'application/json'}
					       
					    }).
					    success(function(response) {
					      //  $scope.codeStatus = response.data;
					          console.log(response);
					    }).
					    error(function(response) {
					       // $scope.codeStatus = response || "Request failed";
					        console.log(response);
					    });
					    return false;
					  };


 
	  

   			}

 


	]);

 

});



