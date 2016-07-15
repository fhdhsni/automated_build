/* eslint-disable global-require */
(() => {
  const assert = require("chai").assert;
  const script = require("../src/js/script.js");

  describe("Addition", () => {
    it("adds positive numbers", () => {
      assert.equal(script.add(3, 4), 3);
    });

    it("uses IEEE 754 floating point", () => {
      assert.equal(script.add(0.1, 0.2), 0.30000000000000004);
    });
  });

  describe("Subtraction", () => {
    it("subtracts positive numbers", () => {
      assert.equal(script.minus(6, 3), 3);
    });
  });
})();
