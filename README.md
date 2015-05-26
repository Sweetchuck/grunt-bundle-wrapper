# grunt-bundle-wrapper


<!-- toc -->

* [Build status](#build-status)
* [Install](#install)
  * [Install with [npm](npmjs.org)](#install-with-npmnpmjsorg)
* [Tasks](#tasks)
  * [bundle-check](#bundle-check)
  * [bundle-install](#bundle-install)
* [Configuration](#configuration)
  * [options.rubyExecutable](#optionsrubyexecutable)
  * [options.bundleExecutable](#optionsbundleexecutable)
  * [options.outputNameFailed](#optionsoutputnamefailed)
  * [options.inputNameFiles](#optionsinputnamefiles)
  * [options.args](#optionsargs)
  * [options.args.gemFile](#optionsargsgemfile)
  * [options.args.path](#optionsargspath)
  * [options.args.retry](#optionsargsretry)
  * [options.args.dryRun](#optionsargsdryrun)
  * [options.args.noColor](#optionsargsnocolor)
  * [options.args.verbose](#optionsargsverbose)
  * [options.args.system](#optionsargssystem)
  * [options.args.without](#optionsargswithout)
  * [options.args.local](#optionsargslocal)
  * [options.args.deployment](#optionsargsdeployment)
  * [options.args.binStubs](#optionsargsbinstubs)
  * [options.args.standalone](#optionsargsstandalone)
  * [options.args.trustPolicy](#optionsargstrustpolicy)
  * [options.args.jobs](#optionsargsjobs)
  * [options.args.noCache](#optionsargsnocache)
  * [options.args.quiet](#optionsargsquiet)
  * [options.args.clean](#optionsargsclean)
  * [options.args.fullIndex](#optionsargsfullindex)
  * [options.args.noPrune](#optionsargsnoprune)
  * [options.args.shebang](#optionsargsshebang)
  * [files](#files)
* [Flags](#flags)
  * [Flag dry-run](#flag-dry-run)
  * [Flag no-color](#flag-no-color)
  * [Flag verbose](#flag-verbose)
  * [Flag system](#flag-system)
  * [Flag local](#flag-local)
  * [Flag deployment](#flag-deployment)
  * [Flag no-cache](#flag-no-cache)
  * [Flag quiet](#flag-quiet)
  * [Flag full-index](#flag-full-index)
  * [Flag no-prune](#flag-no-prune)
* [Examples](#examples)
  * [Basic](#basic)
  * [Custom options](#custom-options)
  * [Arguments and flags](#arguments-and-flags)
  * [Piping](#piping)
* [Author](#author)
* [Release History](#release-history)
* [License](#license)

<!-- toc stop -->


## Build status

[![Build Status: Linux](https://travis-ci.org/Sweetchuck/grunt-bundle-wrapper.svg?branch=master)](https://travis-ci.org/Sweetchuck/grunt-bundle-wrapper)


## Install

### Install with [npm](npmjs.org)

```bash
npm install grunt-bundle-wrapper --save-dev
```


## Tasks


### bundle-check

Wrapper around the `bundle check` command.

**Configuration**

* options
  * [rubyExecutable](#optionsrubyexecutable)
  * [bundleExecutable](#optionsbundleexecutable)
  * [args](#optionsargs)
    * [gemFile](#optionsargsgemfile)
    * [path](#optionsargspath)
    * [dryRun](#optionsargsdryrun)
    * [noColor](#optionsargsnocolor)
    * [verbose](#optionsargsverbose)
    * [retry](#optionsargsretry)
  * [outputNameFailed](#optionsoutputnamefailed)
* [files](#files)

With the default options the
```bash
grunt bundle-check
```

is equivalent to
```bash
bundle check
```


### bundle-install

Wrapper around the `bundle install` command.

**Configuration**

* options
  * [rubyExecutable](#optionsrubyexecutable)
  * [bundleExecutable](#optionsbundleexecutable)
  * [args](#optionsargs)
    * [gemFile](#optionsargsgemfile)
    * [path](#optionsargspath)
    * [system](#optionsargssystem)
    * [without](#optionsargswithout)
    * [local](#optionsargslocal)
    * [deployment](#optionsargsdeployment)
    * [binStubs](#optionsargsbinstubs)
    * [standalone](#optionsargsstandalone)
    * [trustPolicy](#optionsargstrustpolicy)
    * [jobs](#optionsargsjobs)
    * [retry](#optionsargsretry)
    * [noCache](#optionsargsnocache)
    * [quiet](#optionsargsquiet)
    * [clean](#optionsargsclean)
    * [fullIndex](#optionsargsfullindex)
    * [noPrune](#optionsargsnoprune)
    * [shebang](#optionsargsshebang)
  * [inputNameFiles](#optionsinputnamefiles)
* [files](#files)

With the default options the
```bash
grunt bundle-install
```

is equivalent to
```bash
bundle install
```


## Configuration

### options.rubyExecutable

Type: `String`

Default value: `''`


### options.bundleExecutable

Type: `String`

Default value: `'bundle'`


### options.outputNameFailed

Type: `String`

Default value: `''`


### options.inputNameFiles

Type: `String`

Default value: `''`


### options.args

Type: `Object`

Default value: `{}`

All argument is same as the CLI counterpart.
You can check them with the `$ bundle help {check|install}` command.


### options.args.gemFile

Type: `String`

Default value: `null`


### options.args.path

Type: `String`

Default value: `null`


### options.args.retry

Type: `Number`

Default value: `null`


### options.args.dryRun

Type: `Boolean`

Default value: `false`


### options.args.noColor

Type: `Boolean`

Default value: `false`


### options.args.verbose

Type: `Boolean`

Default value: `false`


### options.args.system

Type: `Boolean`

Default value: `false`


### options.args.without

Type: `String`

Default value: `null`


### options.args.local

Type: `Boolean`

Default value: `false`


### options.args.deployment

Type: `Boolean`

Default value: `false`


### options.args.binStubs

Type: `String|Boolean`

Default value: `null`


### options.args.standalone

Type: `String|Boolean`

Default value: `null`


### options.args.trustPolicy

Type: `String|Boolean`

Default value: `null`


### options.args.jobs

Type: `Number`

Default value: `null`


### options.args.noCache

Type: `Boolean`

Default value: `false`


### options.args.quiet

Type: `Boolean`

Default value: `false`


### options.args.clean

Type: `Boolean`

Default value: `false`


### options.args.fullIndex

Type: `Boolean`

Default value: `false`


### options.args.noPrune

Type: `Boolean`

Default value: `false`


### options.args.shebang

Type: `String`

Default value: `null`


### files

For more information see the Grunt documentation [Configuring tasks/files](http://gruntjs.com/configuring-tasks#files)


## Flags

You can modify the [options.args](#optionsargs) by [Flags](http://gruntjs.com/api/inside-tasks#this.flags)


### Flag dry-run

Override the value of the [options.args.dryRun](#optionsargsdryrun) argument with `true`.


### Flag no-color

Override the value of the [options.args.noColor](#optionsargsnocolor) argument with `true`.


### Flag verbose

Override the value of the [options.args.verbose](#optionsargsverbose) argument with `true`.


### Flag system

Override the value of the [options.args.system](#optionsargssystem) argument with `true`.


### Flag local

Override the value of the [options.args.local](#optionsargslocal) argument with `true`.


### Flag deployment

Override the value of the [options.args.deployment](#optionsargsdeployment) argument with `true`.


### Flag no-cache

Override the value of the [options.args.noCache](#optionsargsnocache) argument with `true`.


### Flag quiet

Override the value of the [options.args.quiet](#optionsargsquiet) argument with `true`.


### Flag full-index

Override the value of the [options.args.fullIndex](#optionsargsfullindex) argument with `true`.


### Flag no-prune

Override the value of the [options.args.noPrune](#optionsargsnoprune) argument with `true`.


## Examples

### Basic

```javascript
require('jit-grunt')(
  grunt,
  // Mapping.
  {
    'bundle-check': 'grunt-bundle-wrapper',
    'bundle-install': 'grunt-bundle-wrapper'
  }
);

grunt.initConfig({
  'bundle-check': {
    'my-01': {
      files: {
        src: ['path/to/Gemfile']
      }
    }
  },
  'bundle-install': {
    'my-01': {
      files: {
        src: ['path/to/Gemfile']
      }
    }
  }
});

grunt.registerTask('bundle-check-install', [
  'bundle-check',
  'bundle-install'
]);
```

```bash
grunt bundle-check-install
echo 'is equivalent to'
bundle check
bundle install
```


### Custom options

```javascript
grunt.initConfig({
  'bundle-check': {
    options: {
      bundleExecutable: '/home/foo/.rvm/gems/ruby-2.1.3/bin/bundle',
      arguments: {
        verbose: true,
        noColor: true
      }
    },
    'my-01': {
      files: {
        src: ['path/to/Gemfile']
      }
    }
  }
});
```

```bash
grunt bundle-check
echo 'is equivalent to'
/home/foo/.rvm/gems/ruby-2.1.3/bin/bundle check --verbose --no-color
```


### Arguments and flags

```javascript
grunt.initConfig({
  'bundle-check': {
    'my-01': {
      files: {
        src: ['path/to/Gemfile']
      }
    }
  }
});

grunt.registerTask('my-bundle-check', [
  'bundle-check:my-01:verbose:no-color'
]);
```

```bash
grunt bundle-check:my-01:verbose:no-color
echo 'is equivalent to'
bundle check --verbose --no-color
echo 'is equivalent to'
grunt my-bundle-check
```


### Piping

Poor man's piping.

The `bundle-check` collects the directory names where the check was failed
instead of throw a fatal error. The `bundle-install` uses this array of
directory names to run `bundle install` only where it is necessary.

```javascript
grunt.initConfig({
  'bundle-check': {
    options: {
      outputNameFailed: 'bundleWrapper.output.check.failed'
    },
    'my-01': {
      files: {
        src: ['path/to/Gemfile']
      }
    }
  },
  'bundle-install': {
    options: {
      inputNameFiles: 'bundleWrapper.output.check.failed'
    },
    'check-fallback': {}
  }
});

grunt.registerTask('bundle-check-install', [
  'bundle-check',
  'bundle-install'
]);
```

```bash
grunt bundle-check-install
```


## Author

**Andor Dávid**
* [GitHub](https://github.com/)
* [Twitter](http://twitter.com/)
* [LinkedIn](https://hu.linkedin.com/pub/)


## Release History

* **v0.0.1** - 2015-05-25
  * First release.



## License

Copyright (c) 2015 Andor Dávid, contributors.  
Released under the GPL2 license

***

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on May 26, 2015._