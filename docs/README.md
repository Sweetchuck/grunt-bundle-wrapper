---
toc:
  maxDepth: 4
---

# {%= name %}

<!-- toc -->

## Build status

[![Build Status: Linux](https://travis-ci.org/{%= repository.owner %}/{%= name %}.svg?branch=master)](https://travis-ci.org/{%= repository.owner %}/{%= name %})


## Install

{%= docs('install-npm') %}

## Tasks


### bundle-check

{%= docs('task-check') %}

### bundle-install

{%= docs('task-install') %}

## Options

{%= docs('options') %}

## Arguments

{%= docs('arguments') %}

## Flags

{%= docs('flags') %}

## Examples

{%= docs('examples') %}

## Author

{%= docs('author') %}

## Release History

{%= docs('release-history', {releaseHistory: arguments[0].releaseHistory}) %}

## License

{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}
