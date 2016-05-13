define(['./module'], function (directives) {
    'use strict';
    directives.directive('loginDir', ['$scope', function () {
        return function ($scope) {
            
            console.log("Login Directive is loading");
            templateUrl:"partials/login.html"
        };
    }]);
});
