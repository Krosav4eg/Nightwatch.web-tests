exports.assertion = function (selector, expectedCount) {

  /**
   * The message which will be used in the test output and
   * inside the XML reports
   * @type {string}
   */
  this.message = 'Count presetn elements for selector: "' + selector + '". [expected: ' + expectedCount + ']';

  /**
   * @type {Number}
   */
  this.expected = parseInt(expectedCount, 10);

  /**
   * The method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   * @type {function}
   */
  this.pass = function (value) {
    return value === this.expected;
  };

  /**
   * @param {Object} result
   * @returns {Number}
   */
  this.value = function (result) {
    return result.value.length;
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   * @type {function}
   */
  this.command = function (callback) {
    return this.api
      .waitForElementPresent(selector, 2000)
      .elements('css selector', selector, callback);
  };

};
