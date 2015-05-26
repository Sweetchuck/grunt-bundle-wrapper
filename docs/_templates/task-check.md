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
