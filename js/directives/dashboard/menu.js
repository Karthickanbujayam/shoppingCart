define(['../module'], function (directives) {
    'use strict';
    console.log("listMenu directive is loading...");
    directives.directive('listMenu', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'partials/nav.html'
	  };
	});
});
