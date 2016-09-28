module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        less: {
            mobile: {
                paths: ['static/css'],
                files: {
                    'static/css/app.css': 'static/css/less/main.less'
                }
            }
        },
        watch: {
            less: {
                files: 'static/css/**/*.less',
                tasks: ['less:mobile'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    //grunt.registerTask('watch', ['less:mobile']);
};
