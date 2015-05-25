# grunt-bundle-wrapper



<!-- toc -->

* [Build status](#build-status)
* [Install](#install)
  * [Install with [npm](npmjs.org)](#install-with-npmnpmjsorg)
* [Tasks](#tasks)
  * [bundle-check](#bundle-check)
  * [bundle-install](#bundle-install)
* [Options](#options)
  * [rubyExecutable](#rubyexecutable)
  * [bundleExecutable](#bundleexecutable)
  * [args](#args)
  * [outputNameFailed](#outputnamefailed)
  * [inputNameFiles](#inputnamefiles)
* [Arguments](#arguments)
  * [gemFile](#gemfile)
  * [path](#path)
  * [retry](#retry)
  * [dryRun](#dryrun)
  * [noColor](#nocolor)
  * [verbose](#verbose)
  * [system](#system)
  * [without](#without)
  * [local](#local)
  * [deployment](#deployment)
  * [binStubs](#binstubs)
  * [standalone](#standalone)
  * [trustPolicy](#trustpolicy)
  * [jobs](#jobs)
  * [noCache](#nocache)
  * [quiet](#quiet)
  * [clean](#clean)
  * [fullIndex](#fullindex)
  * [noPrune](#noprune)
  * [shebang](#shebang)
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

[![Build Status: Linux](https://travis-ci.org//grunt-bundle-wrapper.svg?branch=master)](https://travis-ci.org//grunt-bundle-wrapper)


## Install

### Install with [npm](npmjs.org)

```bash
npm install grunt-bundle-wrapper --save-dev
```


## Tasks


### bundle-check

Wrapper around the `bundle check` command.

**Supported options**

* [rubyExecutable](#rubyexecutable)
* [bundleExecutable](#bundleexecutable)
* [args](#args)
* [outputNameFailed](#outputnamefailed)


**Supported arguments**

* [gemFile](#gemfile)
* [path](#path)
* [dryRun](#dryrun)
* [noColor](#nocolor)
* [verbose](#verbose)
* [retry](#retry)

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

**Supported options**

* [rubyExecutable](#rubyexecutable)
* [bundleExecutable](#bundleexecutable)
* [args](#args)
* [inputNameFiles](#inputnamefiles)

**Supported arguments**

* [gemfile](#gemfile)
* [path](#path)
* [system](#system)
* [without](#without)
* [local](#local)
* [deployment](#deployment)
* [binStubs](#binstubs)
* [standalone](#standalone)
* [trustPolicy](#trustpolicy)
* [jobs](#jobs)
* [retry](#retry)
* [noCache](#nocache)
* [quiet](#quiet)
* [clean](#clean)
* [fullIndex](#fullindex)
* [noPrune](#noprune)
* [shebang](#shebang)

With the default options the
```bash
grunt bundle-install
```

is equivalent to
```bash
bundle install
```


## Options

### rubyExecutable

Type: `String`

Default value: `''`


### bundleExecutable

Type: `String`

Default value: `'bundle'`


### args

Type: `Object`

Default value: `{}`


### outputNameFailed

Type: `String`

Default value: `''`


### inputNameFiles

Type: `String`

Default value: `''`


## Arguments

All argument is same as the CLI counterpart.
You can check them with the `$ bundle help {check|install}` command.


### gemFile

Type: `String`

Default value: `null`


### path

Type: `String`

Default value: `null`


### retry

Type: `Number`

Default value: `null`


### dryRun

Type: `Boolean`

Default value: `false`


### noColor

Type: `Boolean`

Default value: `false`


### verbose

Type: `Boolean`

Default value: `false`


### system

Type: `Boolean`

Default value: `false`


### without

Type: `String`

Default value: `null`


### local

Type: `Boolean`

Default value: `false`


### deployment

Type: `Boolean`

Default value: `false`


### binStubs

Type: `String|Boolean`

Default value: `null`


### standalone

Type: `String|Boolean`

Default value: `null`


### trustPolicy

Type: `String|Boolean`

Default value: `null`


### jobs

Type: `Number`

Default value: `null`


### noCache

Type: `Boolean`

Default value: `false`


### quiet

Type: `Boolean`

Default value: `false`


### clean

Type: `Boolean`

Default value: `false`


### fullIndex

Type: `Boolean`

Default value: `false`


### noPrune

Type: `Boolean`

Default value: `false`


### shebang

Type: `String`

Default value: `null`


## Flags

You can modify the arguments by [Flags](http://gruntjs.com/api/inside-tasks#this.flags)


### Flag dry-run

Override the value of the [dryRun](#dryrun) argument with `true`.


### Flag no-color

Override the value of the [noColor](#nocolor) argument with `true`.


### Flag verbose

Override the value of the [verbose](#verbose) argument with `true`.


### Flag system

Override the value of the [system](#system) argument with `true`.


### Flag local

Override the value of the [local](#local) argument with `true`.


### Flag deployment

Override the value of the [deployment](#deployment) argument with `true`.


### Flag no-cache

Override the value of the [noCache](#nocache) argument with `true`.


### Flag quiet

Override the value of the [quiet](#quiet) argument with `true`.


### Flag full-index

Override the value of the [fullIndex](#fullindex) argument with `true`.


### Flag no-prune

Override the value of the [noPrune](#noprune) argument with `true`.


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

_This file was generated by [grunt-verb](https://github.com/assemble/grunt-verb) on May 25, 2015._