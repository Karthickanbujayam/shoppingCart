/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';
     console.log("Router.js file is loading ");
    return app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            $httpProvider.defaults.headers.common["Accept"] = "application/json";

        $stateProvider.state('site', {
                'abstract': true,
        }).state('/',{
            url: '/',  
            templateUrl: 'partials/login.html',
            controller:'LoginCtrl'
            
        }).state('dashboard',{
            url: '/dashboard',
            templateUrl: 'partials/Dashboard.html',
            controller:'DashboardCtrl'
        })
        .state('view2',{
            url: '/view2',
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        })

        $urlRouterProvider.otherwise("/");

    })
});