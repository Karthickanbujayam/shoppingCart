/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../lib/node_modules/requirejs-domready/domReady',
        'angular': '../lib/node_modules/angular/angular',
        "uiRouter": "../lib/node_modules/angular-ui-router/release/angular-ui-router",
        "angular-resource": "../lib/node_modules/angular-resource/angular-resource",
        "jQuery": "../lib/node_modules/jquery/dist/jquery"
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
        }
    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap',
        './config'
    ]
});


define([], function () {
    'use strict';
     console.log("Main.js file is loading ");
     
});
