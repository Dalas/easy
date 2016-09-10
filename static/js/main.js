/**
 * Created by yura on 10.09.16.
 */
require.config({
    shim: {
        "bower_components/jquery/dist/jquery.min": ["jquery"]
    },
    paths: {

    }
});

requirejs(['main']);