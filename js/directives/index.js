/**
 * attach directives to this module
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 **/
define(['./dashboard/menu',
		'./dashboard/info-box',
		'./template_design/header' 
	   ], function () { 

	console.log("Directives are loading");

});
