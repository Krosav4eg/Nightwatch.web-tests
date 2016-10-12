module.exports.command = function(selector, callback) {

  /**
   * @param {Object} result
   */
  var execCb = function(callback, result) {
    if (typeof callback === 'function') {
      callback.call(this, result);
    }
  };

  /**
   * @param {string} selector
   * @returns {string}
   */
  var execute = function(selector) {
    return document.querySelectorAll(selector)[0].innerText;
  };

  this.execute(execute, [selector], execCb.bind(this, callback));

  return this;
};
