(() => {
  function add(c, d) {
    return c + d;
  }
  function minus(f, g) {
    return f - g;
  }
  console.log("Life is great!");
  module.exports = {
    add,
    minus,
  };
})();
