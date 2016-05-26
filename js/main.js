/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
            
        'angular': '../lib/node_modules/angular/angular',
        'uiRouter': '../lib/node_modules/angular-ui-router/release/angular-ui-router',
        'ngResource':'../lib/node_modules/angular-resource/angular-resource',
        'jQuery':'../lib/node_modules/jquery/dist/jquery',
        'domReady': '../lib/node_modules/requirejs-domready/domReady' 

    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jQuery']
        },
        'uiRouter':{
            deps: ['angular']
        },
        'ngResource':{
            deps: ['angular']   
        },
        'angular-cookies':{
            deps: ['angular']
        },
        'domReady':{ 
            exports: 'angular',
            deps: ['jQuery']
        } 
    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap' 
    ]
});


define([], function () {
    'use strict';
     console.log("Main.js file is loading ");
     
});


