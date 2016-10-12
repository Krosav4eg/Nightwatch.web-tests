module.exports.command = function(selector, sx, sy, x, y, callback) {
  x = x || 0;
  y = y || 0;
  sx = sx || 0;
  sy = sy || 0;


  /**
   * @param {String} selector
   * @param {Number} sx
   * @param {Number} sy
   * @param {Number} x
   * @param {Number} y
   */
  var script = function(selector, sx, sy, x, y) {
    var offsets = document.querySelector(selector).getBoundingClientRect();

    if (sx && typeof(sx) === 'string') {
      sx = offsets[sx];
    }

    if (sy && typeof(sy) === 'string') {
      sy = offsets[sy];
    }

    return scrollBy(x + sx, y + sy);
  };

  this.execute(script, [selector, sx, sy, x, y], callback);
  return this;
};