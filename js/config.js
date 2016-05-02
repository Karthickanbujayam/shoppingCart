'use strict';

require(['angular'], function(angular) {

    var configModule = angular.module('app.config', []);
    
     console.log("config.js file is loading ");
     
   configModule.config(['$locationProvider', function($locationProvider) {

          $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });

    }]);

 
     
    
});
