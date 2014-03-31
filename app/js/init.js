'use strict';

require.config({
    baseUrl: './js',
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        fastclick: '../bower_components/fastclick/lib/fastclick',
        modernizr: '../bower_components/modernizr/modernizr',
        foundation: '../bower_components/foundation/js/foundation',
        requirejs: '../bower_components/requirejs/require',
        handlebars: '../bower_components/handlebars/handlebars'
    },
    shim: {
        jquery: {
            deps: [

            ],
            exports: '$'
        },
        underscore: {
            deps: [
                'jquery'
            ],
            exports: '_'
        },
        fastclick: {
            exports: 'FastClick'
        },
        modernizr: {
            exports: 'Modernizr'
        },
        foundation: {
            deps: [
                'jquery',
                'fastclick',
                'modernizr'
            ],
            exports: 'Foundation'
        },
    }
});

require([
    'jquery',
    'underscore',
    'foundationApp',
], function($, _, foundationApp) {
    foundationApp.init();
});
