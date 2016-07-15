/* eslint-disable global-require */
(() => {
  // const assert = require("chai").assert;
  const script = require("../src/js/script-complied.js");
  function assertEqual(actual, expected) {
    if (actual !== expected) {
      throw new Error(`expected ${expected}, but was ${actual}`);
    }
  }
  describe("Addition", () => {
    it("adds positive numbers", () => {
      // assert.equal(script.add(3, 4), 7);
      assertEqual(script.add(3, 4), 7);
    });

    it("uses IEEE 754 floating point", () => {
      // assert.equal(script.add(0.1, 0.2), 0.30000000000000004);
      assertEqual(script.add(0.1, 0.2), 0.30000000000000004);
    });
  });

  describe("Subtraction", () => {
    it("subtracts positive numbers", () => {
      assertEqual(script.minus(6, 3), 3);
    });
  });
})();
