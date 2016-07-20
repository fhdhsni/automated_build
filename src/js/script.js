(() => {
  function add(c, d) {
    return c + d;
  }
  function minus(f, g) {
    /* subracts two numbers */
    return f - g;
  }
  console.log("Awesome!");
  module.exports = {
    add,
    minus,
  };
})();
