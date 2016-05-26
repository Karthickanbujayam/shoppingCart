define(['../module'], function (directives) {
    'use strict';
    console.log("infoBox directive is loading...");
    directives.directive('infoBox', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/dashboard/info-box.html'
	  };
	});
});
