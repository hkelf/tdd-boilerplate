module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            js: {
                files: [
                    'src/**/*.js',
                    'tst/**/*.js'
                ],
                tasks: ['karma'],
            }
        },

        karma: {
            unit: {
                port: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                frameworks: ['jasmine'],
                options: {
                    files: [
                        'src/**/*.js',
                        'tst/**/*.js'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['karma:unit']);

};