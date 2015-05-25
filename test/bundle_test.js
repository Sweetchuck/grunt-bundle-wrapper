/**
 * @file
 * Documentation missing.
 */

'use strict';

var grunt = require('grunt');
var bundle = require('../tasks/lib/bundle').init(grunt);

exports.bundle = {

  overrideOptionsByFlags: function (test) {
    test.expect(3);

    var options;
    var expected;

    options = {
      args: {}
    };
    expected = {
      args: {}
    };
    bundle.overrideOptionsByFlags(
      options,
      {},
      'check'
    );
    test.deepEqual(options, expected, 'There are no arguments and flags');

    options = {
      args: {
        verbose: false
      }
    };
    expected = {
      args: {
        verbose: false
      }
    };
    bundle.overrideOptionsByFlags(
      options,
      {},
      'check'
    );
    test.deepEqual(options, expected, 'There are no flags.');

    options = {
      args: {
        verbose: false
      }
    };
    expected = {
      args: {
        verbose: true
      }
    };
    bundle.overrideOptionsByFlags(
      options,
      {
        verbose: true
      },
      'check'
    );
    test.deepEqual(options, expected, 'Verbose is overridden');

    test.done();
  },

  filterEnabled: function (test) {
    test.expect(6);

    test.deepEqual(
      bundle.filterEnabled({}),
      [],
      '@todo'
    );

    test.deepEqual(
      bundle.filterEnabled(
        {
          item1: true,
          item2: true
        }
      ),
      [
        'item1',
        'item2'
      ],
      '@todo'
    );

    test.deepEqual(
      bundle.filterEnabled(
        {
          item1: true,
          item2: false
        }
      ),
      [
        'item1'
      ],
      '@todo'
    );

    test.deepEqual(
      bundle.filterEnabled(
        {
          item1: false,
          item2: true
        }
      ),
      [
        'item2'
      ],
      '@todo'
    );

    test.deepEqual(
      bundle.filterEnabled(
        {
          item1: {enabled: true, status: false},
          item2: {enabled: false, status: true}
        },
        'enabled'
      ),
      [
        'item1'
      ],
      '@todo'
    );

    test.deepEqual(
      bundle.filterEnabled(
        {
          item1: {enabled: true, status: false},
          item2: {enabled: false, status: true}
        },
        'status'
      ),
      [
        'item2'
      ],
      '@todo'
    );

    test.done();
  },

  buildArgs: function (test) {
    test.expect(1);

    var schema = {
      triStateNull: {type: 'tri-state'},
      triStateTrue: {type: 'tri-state'},
      triStateFalse: {type: 'tri-state'}
    };

    var args = {
      flagTrue: true,
      flagFalse: false,
      triStateNull: null,
      triStateTrue: true,
      triStateFalse: false,
      numberNegative: -42,
      numberZero: 0,
      numberPositive: 42,
      stringNull: null,
      stringEmpty: '',
      stringFoo: 'bar',
      arrayEmpty: [],
      arrayFoo: ['foo', 'bar', "foo $USER 'bar'"],
      objectEmpty: {},
      objectFoo: {
        'foo-true': true,
        'foo-false': false
      }
    };

    var cliArgsExpected = [
      '--flag-true',
      '--tri-state-true',
      '--no-tri-state-false',
      '--number-negative=-42',
      '--number-zero=0',
      '--number-positive=42',
      "--string-empty=''",
      '--string-foo=bar',
      '--array-foo=foo',
      '--array-foo=bar',
      "--array-foo='foo $USER '\"'\"'bar'\"'\"",
      '--object-foo=foo-true'
    ];

    var cliArgsActual = bundle.buildArgs(args, schema);

    test.deepEqual(cliArgsActual, cliArgsExpected, 'bundle.buildArgs() works as expected.');

    test.done();
  },

  workingDirectories: function (test) {
    test.expect(4);

    test.deepEqual(
      bundle.workingDirectories([]),
      [],
      '@todo 1'
    );

    test.deepEqual(
      bundle.workingDirectories([
        {src: [], orig: {src: []}}
      ]),
      [],
      '@todo 2'
    );

    test.deepEqual(
      bundle.workingDirectories([
        {src: ['dir1/readme.txt', 'index.php']},
        {src: ['dir1/index.html']}
      ]),
      ['dir1', '.'],
      '@todo 3'
    );

    test.deepEqual(
      bundle.workingDirectories([
        {src: ['dir1/readme.txt']},
        {src: ['dir1/readme.md', 'dir2/index.html']}
      ]),
      ['dir1', 'dir2'],
      '@todo 4'
    );

    test.done();
  },

  createCommand: function (test) {
    test.expect(3);

    var action = 'check';

    var options = {
      args: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle'
    };

    var commandExpected = {
      cmd: 'bundle',
      args: ['check'],
      opts: {
        cwd: null
      }
    };

    test.deepEqual(
      bundle.createCommand(action, options),
      commandExpected,
      'bundle.createCommand works as expected.'
    );

    options = {
      args: {},
      rubyExecutable: null,
      bundleExecutable: 'bundle'
    };
    commandExpected = {
      cmd: 'bundle',
      args: ['check'],
      opts: {
        cwd: null
      }
    };
    test.deepEqual(
      bundle.createCommand(action, options),
      commandExpected,
      'bundle.createCommand works as expected.'
    );

    options = {
      args: {},
      rubyExecutable: '/usr/bin/ruby',
      bundleExecutable: '/usr/bin/bundle'
    };
    commandExpected = {
      cmd: '/usr/bin/ruby',
      args: ['/usr/bin/bundle', 'check'],
      opts: {
        cwd: null
      }
    };
    test.deepEqual(
      bundle.createCommand(action, options),
      commandExpected,
      'bundle.createCommand works as expected.'
    );

    test.done();
  }

};
