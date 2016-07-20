(() => {
  function add(c, d) {
    return c + d;
  }
  function minus(f, g) {
    return f - g;
  }
  console.log("yay!");
  module.exports = {
    add,
    minus,
  };
})();
