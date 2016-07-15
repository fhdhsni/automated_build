(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function () {
  function add(c, d) {
    return c + d;
  }
  function minus(f, g) {
    /* subracts two numbers */
    return f - g;
  }

  module.exports = {
    add: add,
    minus: minus
  };
})();

},{}],2:[function(require,module,exports){
"use strict";

/* eslint-disable global-require */
(function () {
  // const assert = require("chai").assert;
  var script = require("../src/js/script-complied.js");
  function assertEqual(actual, expected) {
    if (actual !== expected) {
      throw new Error("expected " + expected + ", but was " + actual);
    }
  }
  describe("Addition", function () {
    it("adds positive numbers", function () {
      // assert.equal(script.add(3, 4), 7);
      assertEqual(script.add(3, 4), 7);
    });

    it("uses IEEE 754 floating point", function () {
      // assert.equal(script.add(0.1, 0.2), 0.30000000000000004);
      assertEqual(script.add(0.1, 0.2), 0.30000000000000004);
    });
  });

  describe("Subtraction", function () {
    it("subtracts positive numbers", function () {
      assertEqual(script.minus(6, 3), 3);
    });
  });
})();

},{"../src/js/script-complied.js":1}]},{},[2]);
