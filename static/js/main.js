/**
 * Created by yura on 10.09.16.
 */
require.config({
    shim: {
        "angular": {
            exports: 'angular'
        },
        "angular-modals": {
            deps: ['angular']
        },
        "bootstrap": {
            deps: ['jquery']
        }
    },
    paths: {
        "angular": "bower_components/angular/angular",
        "angular-modals": "bower_components/angular-modal-service/dst/angular-modal-service.min",
        "jquery": "bower_components/jquery/dist/jquery.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",

        // application
        "homePage": "application/contollers/homePage"
    }
});

require(['angular'], function(ng){
    ng.module('Application', []);

    require(modules)
});