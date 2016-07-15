(() => {
  function add(c, d) {
    return c + d;
  }
  function minus(f, g) {
    /* subracts two numbers */
    return f - g;
  }

  module.exports = {
    add: add,
    minus: minus,
  };
})();
