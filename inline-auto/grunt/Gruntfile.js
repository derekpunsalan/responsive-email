module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                             
      dist: {                           
        options: {                     
          style: 'compressed',
          sourcemap:'none'
        },
        files: {                         
          '../simple.css': '../simple.scss'
        }
      }
    },

    replace: {
      scriptInclude: {
        src: '../simple.html',              
        dest: '../simple.html',             
        replacements: [{
            from: /<style[\s\S]*?>[\s\S]*?<\/style>/gi,
            to: '<style type="text/css"> \n \t\tinclude "simple.css"  \n\t</style>'
        }]
      }
    },

    includes: {
      build: {
        src: '../simple.html',
        dest: '../../simple.html',
        flatten: true,
        options: {
          includePath: '..'
        }
      }
    },

    inlinecss: {
        main: {
            options: {
            },
            files: {
                '../../simple.html': '../../simple.html'
            }
        }
    },

    clean: {
      css: ['../simple.css'],
      options: {
        force:true
      }
    },

    watch: {
      sass: {
        files: ['../simple.scss'],
        tasks: ['build'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-inline-css');
  
  grunt.registerTask('build', ['sass','includes','inlinecss','clean']);
  
};