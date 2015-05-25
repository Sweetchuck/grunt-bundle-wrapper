## Basic

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


## Custom options

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


## Arguments and flags

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


## Piping

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
