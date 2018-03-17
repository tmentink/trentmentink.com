// ------------------------------------------------------------------------
// Gruntfile
// ------------------------------------------------------------------------

module.exports = function(grunt) {
  "use strict"

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    closure: {
      start: "!function() {\n",
      end: "}()"
    },


    // --------------------------------------------------------------------
    // Grunt Tasks
    // --------------------------------------------------------------------

    babel: {
      js: {
        files: {
          "<%= concat.main.dest %>" : "<%= concat.main.dest %>"
        }
      }
    },
    clean: {
      js: ["<%= concat.main.dest %>"]
    },
    concat: {
      main: {
        src: ["src/js/util/polyfills.js",
              "src/js/util/**/*.js",
             ],
        dest: "src/js/main.js"
      }
    },
    eslint: {
      target: ["src/js/**/*.js"]
    },
    sass: {
      main: {
        options: {
          outputStyle: "compressed"
        },
        files: {
          "dist/css/main.css" : "src/scss/main/master.scss"
        }
      }
    },
    stamp: {
      main: {
        options: {
          banner: "<%= closure.start %>",
          footer: "<%= closure.end %>"
        },
        files: {
          src: "<%= concat.main.dest %>"
        }
      }
    },
    uglify: {
      main: {
        src: "<%= concat.main.dest %>",
        dest: "dist/js/main.js",
      }
    },
    watch: {
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["clean", "eslint", "concat","uglify"]
      },
      css: {
        files: ["src/scss/**/*.scss"],
        tasks: ["sass"]
      }
    }
  })

  require("load-grunt-tasks")(grunt)
  require("time-grunt")(grunt)

  grunt.registerTask("default", ["clean", "eslint", "concat", "babel", "stamp", "uglify", "sass"])
  grunt.registerTask("lint", ["eslint"])
}
