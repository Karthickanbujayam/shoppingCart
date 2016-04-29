/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';
     console.log("Router.js file is loading ");
    return app.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('/',{
            url: '/',
            templateUrl: 'partials/login.html',
            controller:'LoginCtrl'
        }).state('auth',{
            url: '/auth',
            templateUrl: 'partials/login.html',
            controller:'LoginCtrl'
        }).state('view1',{
            url: '/view1',
            templateUrl: 'partials/partial1.html',
            controller:'MyCtrl1'
        })
        .state('view2',{
            url: '/view2',
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        })

        $urlRouterProvider.otherwise("/");
    })
});