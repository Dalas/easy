/**
 * Created by yura on 10.09.16.
 */
require.config({
    shim: {
        "angular": {
            exports: 'angular'
        },
        "bootstrap": {
            deps: ['jquery']
        }
    },
    paths: {
        "angular": "bower_components/angular/angular",
        "jquery": "bower_components/jquery/dist/jquery.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",

        // application
        "homePage": "application/contollers/homePage"
    }
});