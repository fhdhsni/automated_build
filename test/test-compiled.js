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
