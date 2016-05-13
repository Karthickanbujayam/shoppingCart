define(['./module'], function (directives) {
    'use strict';
    directives.directive('listMenu', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'partials/nav.html'
	  };
	});
});
