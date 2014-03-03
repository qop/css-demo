module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },
        watch: {
            styles: {
                files: '**/*.less',
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};
