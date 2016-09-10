/**
 * Created by yura on 10.09.16.
 */
require.config({
    shim: {
        "angular": {
            exports: 'angular'
        }
    },
    paths: {
        "angular": "bower_components/angular/angular",

        // application
        "app": "app"
    }
});

requirejs(['app']);