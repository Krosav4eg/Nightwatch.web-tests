module.exports.command = function(x, y, callback) {
  x = x || 0;
  y = y || 0;

  /**
   * @param {Number} x
   * @param {Number} y
   */
  var script = function(x, y) {
    return scrollBy(x, y);
  };

  this.execute(script, [x, y], callback);
  return this;
};
