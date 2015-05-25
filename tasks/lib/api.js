/**
 * @file
 * Type definitions for IDE parsers.
 *
 * These classes are not in use.
 */

/* eslint no-unused-vars: 0 */

'use strict';

/**
 * @class
 * @constructor
 */
function BundleDefaultArgs() {

  /**
   * @type {string|null}
   */
  this.gemFile = null;

  /**
   * @type {string|null}
   */
  this.path = null;

  /**
   * @type {number|null}
   */
  this.retry = null;

}

/**
 * @class
 * @extends BundleDefaultArgs
 * @constructor
 */
function BundleCheckArgs() {

  /**
   * @type {boolean}
   */
  this.dryRun = false;

  /**
   * @type {boolean}
   */
  this.noColor = false;

  /**
   * @type {boolean}
   */
  this.verbose = false;

}

/**
 * @class
 * @extends BundleDefaultArgs
 * @constructor
 */
function BundleInstallArgs() {

  /**
   * @type {boolean}
   */
  this.system = false;

  /**
   * @type {string|null}
   */
  this.without = null;

  /**
   * @type {boolean}
   */
  this.local = false;

  /**
   * @type {boolean}
   */
  this.deployment = false;

  /**
   * @type {string|null}
   */
  this.binStubs = null;

  /**
   * @type {string|null}
   */
  this.standalone = null;

  /**
   * @type {boolean}
   */
  this.trustPolicy = false;

  /**
   * @type {Number|null}
   */
  this.jobs = null;

  /**
   * @type {boolean}
   */
  this.noCache = false;

  /**
   * @type {boolean}
   */
  this.quiet = false;

  /**
   * @type {boolean}
   */
  this.clean = false;

  /**
   * @type {boolean}
   */
  this.fullIndex = false;

  /**
   * @type {boolean}
   */
  this.noPrune = false;

  /**
   * @type {boolean}
   */
  this.shebang = false;

}

/**
 * @class
 * @constructor
 */
function BundleDefaultOptions() {

  /**
   * @type {string}
   */
  this.rubyExecutable = '';

  /**
   * @type {string}
   */
  this.bundleExecutable = '';

  /**
   * @type {BundleDefaultArgs}
   */
  this.args = null;

}

/**
 * @class
 * @extends BundleDefaultOptions
 * @constructor
 */
function BundleCheckOptions() {

  /**
   * @type {BundleCheckArgs}
   */
  this.args = null;

  /**
   * @type {string}
   */
  this.outputNameFailed = '';

}

/**
 * @class
 * @extends BundleDefaultOptions
 * @mixes BundleDefaultOptions
 * @constructor
 */
function BundleInstallOptions() {

  /**
   * @type {BundleInstallArgs}
   */
  this.args = null;

  /**
   * @type {string}
   */
  this.inputNameFiles = '';

}
