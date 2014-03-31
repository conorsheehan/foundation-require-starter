'use strict';


require.config({
    paths: {
        'foundation.abide': '../bower_components/foundation/js/foundation/foundation.abide',
        'foundation.accordion': '../bower_components/foundation/js/foundation/foundation.accordion',
        'foundation.alert': '../bower_components/foundation/js/foundation/foundation.alert',
        'foundation.clearing': '../bower_components/foundation/js/foundation/foundation.clearing',
        'foundation.dropdown': '../bower_components/foundation/js/foundation/foundation.dropdown',
        'foundation.equalizer': '../bower_components/foundation/js/foundation/foundation.equalizer',
        'foundation.interchange': '../bower_components/foundation/js/foundation/foundation.interchange',
        'foundation.joyride': '../bower_components/foundation/js/foundation/foundation.joyride',
        'foundation.magellan': '../bower_components/foundation/js/foundation/foundation.magellan',
        'foundation.offcanvas': '../bower_components/foundation/js/foundation/foundation.offcanvas',
        'foundation.orbit': '../bower_components/foundation/js/foundation/foundation.orbit',
        'foundation.reveal': '../bower_components/foundation/js/foundation/foundation.reveal',
        'foundation.slider': '../bower_components/foundation/js/foundation/foundation.slider',
        'foundation.tab': '../bower_components/foundation/js/foundation/foundation.tab',
        'foundation.tooltip': '../bower_components/foundation/js/foundation/foundation.tooltip',
        'foundation.topbar': '../bower_components/foundation/js/foundation/foundation.topbar',
    },
    shim: {
        'foundation.abide': [
            'foundation'
        ],
        'foundation.accordion': [
            'foundation'
        ],
        'foundation.alert': [
            'foundation'
        ],
        'foundation.clearing': [
            'foundation'
        ],
        'foundation.dropdown': [
            'foundation'
        ],
        'foundation.equalizer': [
            'foundation'
        ],
        'foundation.interchange': [
            'foundation'
        ],
        'foundation.joyride': [
            'foundation'
        ],
        'foundation.magellan': [
            'foundation'
        ],
        'foundation.offcanvas': [
            'foundation'
        ],
        'foundation.orbit': [
            'foundation'
        ],
        'foundation.reveal': [
            'foundation'
        ],
        'foundation.slider': [
            'foundation'
        ],
        'foundation.tab': [
            'foundation'
        ],
        'foundation.tooltip': [
            'foundation'
        ],
        'foundation.topbar': [
            'foundation'
        ]
    }
});

define([
        'jquery',
        'foundation',
        'foundation.abide',
        'foundation.accordion',
        'foundation.alert',
        'foundation.clearing',
        'foundation.dropdown',
        'foundation.equalizer',
        'foundation.interchange',
        'foundation.joyride',
        'foundation.magellan',
        'foundation.offcanvas',
        'foundation.orbit',
        'foundation.reveal',
        'foundation.slider',
        'foundation.tab',
        'foundation.tooltip',
        'foundation.topbar',
    ], function($) {

        var docElem = document.documentElement,

            _userAgentInit = function() {
                docElem.setAttribute('data-useragent', navigator.userAgent);
            },
            _init = function() {
                $(document).foundation();
                _userAgentInit();
            };

        return {
            init: _init
        };
    }
);