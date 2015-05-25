/**
 * @file
 * Grunt plugin - Wrapper around the `bundle` CLI tool.
 */

'use strict';

module.exports = function (grunt) {
  var bundle = require('./lib/bundle').init(grunt);

  grunt.registerMultiTask('bundle-check', 'Run `bundle check` command', function () {
    var action = 'check';
    var options = this.options(bundle.defaultOptions[action]);

    bundle
      .overrideOptionsByFlags(options, this.flags, action)
      .validateOptions(options)
      .execCheck(options, this.files || bundle.defaultFiles);
  });

  grunt.registerMultiTask('bundle-install', 'Run `bundle install` command', function () {
    var action = 'install';
    var options = this.options(bundle.defaultOptions[action]);
    var files = this.files || bundle.defaultFiles;

    if (options.inputNameFiles.length) {
      files = grunt.config.get(options.inputNameFiles);
      if (typeof files === 'undefined') {
        files = [];
      }
    }

    bundle
      .overrideOptionsByFlags(options, this.flags, action)
      .validateOptions(options)
      .execInstall(options, files);

    if (options.inputNameFiles.length) {
      grunt.config.set(options.inputNameFiles, []);
    }
  });

};
