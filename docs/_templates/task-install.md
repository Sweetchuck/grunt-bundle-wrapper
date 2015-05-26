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
