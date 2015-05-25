/**
 * @file
 * Documentation missing.
 */

/* global process: true */

/**
 * @return {{}}
 */
exports.init = function (grunt) {
  'use strict';

  var binVersionCheck = require('bin-version-check');
  var escapeShellArg = require('any-shell-escape');
  var S = require('string');
  var path = require('path');
  var shell = require('shelljs');

  var exports = {};

  exports.minimumBinaryVersion = '1.7.0';

  exports.argsSchema = {
    check: {},
    install: {
      binStubs: {cliName: 'binstubs'}
    }
  };

  exports.flagsSchema = {
    check: {
      'dry-run': {arg: 'dryRun', value: true},
      'no-color': {arg: 'noColor', value: true},
      verbose: {arg: 'verbose', value: true}
    },
    install: {
      system: {arg: 'system', value: true},
      local: {arg: 'local', value: true},
      deployment: {arg: 'deployment', value: true},
      'no-cache': {arg: 'noCache', value: true},
      quiet: {arg: 'quiet', value: true},
      'full-index': {arg: 'fullIndex', value: true},
      'no-prune': {arg: 'noPrune', value: true}
    }
  };

  exports.defaultOptions = {
    check: {
      args: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle',
      outputNameFailed: ''
    },
    install: {
      args: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle',
      inputNameFiles: ''
    }
  };

  exports.defaultFiles = [
    {
      src: ['**/Gemfile']
    }
  ];

  exports.msgPattern = {
    noMatch: S('There is no match to the following patterns: {{patterns}}'),
    currentDirectory: S('Current working directory is: {{cwd}}'),
    command: S('Execute: {{cmd}}'),
    bundleFailed: S('Failed to run: `cd {{cwd}} && {{executable}} {{args}}`')
  };

  exports.cmdPattern = {
    bundle: S('cd {{cwd}} && {{executable}} {{args}}')
  };

  /**
   * @param {String} string
   *
   * @return {String}
   */
  exports.escapeShellArgument = function (string) {
    string = string.toString();

    if (!string.length) {
      return "''";
    }

    return escapeShellArg(string);
  };

  /**
   * @param {BundleDefaultOptions} options
   * @param {Object} flags
   * @param {Object} flagsSchema
   *
   * @return {{}}
   */
  exports.overrideOptionsByFlags = function (options, flags, flagsSchema) {
    if (typeof flagsSchema === 'string') {
      flagsSchema = exports.flagsSchema[flagsSchema];
    }

    var flagName;
    for (flagName in flagsSchema) {
      if (flagsSchema.hasOwnProperty(flagName) && flags.hasOwnProperty(flagName)) {
        options.args[flagsSchema[flagName].arg] = flagsSchema[flagName].value;
      }
    }

    return exports;
  };

  /**
   * @param {BundleDefaultOptions} options
   */
  exports.validateOptions = function (options) {
    binVersionCheck(options.bundleExecutable, '>=' + exports.minimumBinaryVersion, function (error) {
      if (error) {
        grunt.warn(error);
      }
    });

    return exports;
  };

  /**
   * @param {Object} items
   * @param {String} [property]
   *   Default is "enabled"
   *
   * @return {String[]}
   *   Keys from items object.
   */
  exports.filterEnabled = function (items, property) {
    var enabledItems = [];

    if (typeof property === 'undefined') {
      property = 'enabled';
    }

    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        if (
          (items[key] === true)
          || (
            typeof items[key] === 'object'
            && items[key].hasOwnProperty(property)
            && items[key][property] === true
          )
        ) {
          enabledItems.push(key);
        }
      }
    }

    return enabledItems;
  };

  /**
   * @param {BundleDefaultArgs} args
   * @param {Object} schema
   *
   * @return {String[]}
   */
  exports.buildArgs = function (args, schema) {
    var cliArgs = [];
    var name;
    var s;
    var i;
    var filtered;

    for (name in args) {
      if (args.hasOwnProperty(name)) {
        if (args[name] === null) {
          continue;
        }

        s = schema.hasOwnProperty(name) ? schema[name] : {};
        s.type = s.type || (typeof args[name]);
        s.cliName = s.cliName || S(name).dasherize().s;
        s.keyValueSeparator = s.keyValueSeparator || '=';
        if (s.type === 'object' && Array.isArray(args[name])) {
          s.type = 'array';
        }

        switch (s.type) {
          case 'boolean':
            if (args[name]) {
              cliArgs.push('--' + s.cliName);
            }
            break;

          case 'tri-state':
            cliArgs.push('--' + (args[name] ? '' : 'no-') + s.cliName);
            break;

          case 'string':
          case 'number':
            cliArgs.push('--' + s.cliName + s.keyValueSeparator + exports.escapeShellArgument(args[name]));
            break;

          case 'array':
            for (i = 0; i < args[name].length; i++) {
              cliArgs.push('--' + s.cliName + s.keyValueSeparator + exports.escapeShellArgument(args[name][i]));
            }
            break;

          case 'object':
            filtered = exports.filterEnabled(args[name]);
            for (i = 0; i < filtered.length; i++) {
              cliArgs.push('--' + s.cliName + s.keyValueSeparator + exports.escapeShellArgument(filtered[i]));
            }
            break;
        }
      }
    }

    return cliArgs;
  };

  /**
   * @param {Array} fileDefinitions
   *
   * @return {String[]}
   */
  exports.workingDirectories = function (fileDefinitions) {
    var directories = [];
    var directory;

    fileDefinitions.forEach(function (fileDefinition) {
      if (fileDefinition.src.length === 0) {
        grunt.log.warn(
          exports.msgPattern
            .noMatch
            .template({patterns: fileDefinition.orig.src.join(', ')})
            .s
            .yellow
        );

        return;
      }

      fileDefinition.src.forEach(function (fileName) {
        if (grunt.file.isDir(fileName)) {
          directory = fileName;
        }
        else {
          directory = path.dirname(fileName) || '.';
        }

        if (directories.indexOf(directory) === -1) {
          directories.push(directory);
        }
      });
    });

    return directories;
  };

  /**
   * @param {String} action
   * @param {BundleDefaultOptions} options
   *
   * @return {Object}
   */
  exports.createCommand = function (action, options) {
    var command = {
      cmd: options.bundleExecutable,
      args: [],
      opts: {
        cwd: null
      }
    };

    if (options.rubyExecutable) {
      command.args.unshift(command.cmd);
      command.cmd = options.rubyExecutable;
    }

    command.args.push(action);
    command.args = command.args.concat(exports.buildArgs(options.args, exports.argsSchema[action]));

    return command;
  };

  /**
   * @param {BundleCheckOptions} options
   * @param {Array} fileDefinitions
   */
  exports.execCheck = function (options, fileDefinitions) {
    var directories = exports.workingDirectories(fileDefinitions);
    var command = exports.createCommand('check', options);
    var i;
    var placeholders = {
      cwd: command.opts.cwd,
      executable: command.cmd,
      args: command.args
    };
    var outputValueFailed;
    var failedSrc = [];

    for (i = 0; i < directories.length; i++) {
      command.opts.cwd = directories[i];

      grunt.log.writeln(exports.msgPattern.currentDirectory.template({
        cwd: command.opts.cwd.blue
      }).s);

      grunt.log.writeln(exports.msgPattern.command.template({
        cmd: [command.cmd].concat(command.args).join(' ').blue
      }).s);

      var result = shell.exec(
        exports.cmdPattern
          .bundle
          .template({
            cwd: command.opts.cwd,
            executable: command.cmd,
            args: command.args.join(' ')
          })
          .s
      );

      if (result.code !== 0) {
        if (options.outputNameFailed.length === 0) {
          grunt.fail.fatal(
            exports
              .msgPattern
              .bundleFailed
              .template(placeholders)
              .s
          );
        }
        else {
          failedSrc.push(command.opts.cwd);
        }
      }
    }

    if (options.outputNameFailed.length) {
      outputValueFailed = grunt.config.get(options.outputNameFailed);
      if (typeof outputValueFailed === 'undefined') {
        outputValueFailed = [];
      }

      if (failedSrc.length) {
        outputValueFailed.push({src: failedSrc});
      }

      grunt.config.set(options.outputNameFailed, outputValueFailed);
    }
  };

  /**
   * @param {BundleInstallOptions} options
   * @param {Array} fileDefinitions
   */
  exports.execInstall = function (options, fileDefinitions) {
    exports.exec('install', options, fileDefinitions);
  };

  /**
   * @param {String} action
   * @param {BundleDefaultOptions} options
   * @param {Array} fileDefinitions
   */
  exports.exec = function (action, options, fileDefinitions) {
    var directories = exports.workingDirectories(fileDefinitions);
    var command = exports.createCommand(action, options);
    var i;

    for (i = 0; i < directories.length; i++) {
      command.opts.cwd = directories[i];

      grunt.log.writeln(exports.msgPattern.currentDirectory.template({
        cwd: command.opts.cwd.blue
      }).s);

      grunt.log.writeln(exports.msgPattern.command.template({
        cmd: [command.cmd].concat(command.args).join(' ').blue
      }).s);

      exports.run(command);
    }
  };

  /**
   * @param {Object} command
   */
  exports.run = function (command) {

    var done = grunt.task.current.async();
    var myProcess = grunt.util.spawn(
      command,
      function (error, result, code) {
        if (code !== 0) {
          return grunt.fail.warn(error);
        }

        done(error);
      }
    );

    myProcess.stdout.pipe(process.stdout);
    myProcess.stderr.pipe(process.stderr);
  };

  return exports;
};
