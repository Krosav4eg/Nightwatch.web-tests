module.exports.command = function(pageX, pageY, callback) {
  pageX = pageX || 0;
  pageY = pageY || 0;

  /**
   * @param {Number} pageX
   * @param {Number} pageY
   */
  var script = function(pageX, pageY) {
    return scrollTo(pageX, pageY);
  };

  this.execute(script, [pageX, pageY], callback);
  return this;
};
