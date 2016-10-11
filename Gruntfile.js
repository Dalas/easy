module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.initConfig({
        less: {
            dev: {
                paths: ['static/css'],
                files: {
                    'static/css/app.css': 'static/css/less/main.less'
                }
            }
        },
        autoprefixer: {
            prod: {
                browsers: ['last 2 versions', 'ie 10'],
                files: {
                    'static/css/app.css': 'static/css/app.css'
                }
            }
        },
        watch: {
            less: {
                files: 'static/css/**/*.less',
                tasks: ['less', 'autoprefixer'],
                options: {
                    nospawn: true
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'static/css/app.css',
                        'templates/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: '127.0.0.1:8888'
                }
            }
        }
    });

    grunt.registerTask('default', ['browserSync', 'watch']);
};
