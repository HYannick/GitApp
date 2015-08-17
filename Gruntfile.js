// Gruntfile.js

module.exports = function(grunt) {

    //Grunt Config -----------------------------------------------------------------------------------------------------
    grunt.initConfig({

        //Recuperation d'information sur le package.json  ========== //
        pkg: grunt.file.readJSON('package.json'),

        //Plugin de test JS  ========== //
        jshint: {
            options:{
                reporter: require('jshint-stylish')
            },
            build: ['Gruntfile.js', 'public/src/js/script.js']
        },

        //Plugin de minification  ========== //
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files:{
                    'public/dist/js/script.min.js' : ['public/src/js/script.js'],
                    'public/dist/js/app.min.js' : ['public/src/js/app.js']
                }
            }
        },
        //Plugin de compilation en less  ========== //
        less:{
            development: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "public/src/css/style.css": "public/src/css/style.less"
                }
            }
        },
        //plugin de minification css  ========== //
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'public/dist/css/style.min.css': 'public/src/css/style.css'
                }
            }
        },
        //plugin de compilation jade  ========== //
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    "public/views/index.html": ["public/views/*.jade"]
                }
            }
        }

    });

    // Chargement des plugins grunt  ----------------------------------------------------------------------------------
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Taches ========== //
    grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin', 'jade']);

};