exports.assertion = function (selector, expectedText) {

  /**
   * The message which will be used in the test output and
   * inside the XML reports
   * @type {string}
   */
  this.message = 'Is text containt present element for selector: "' + selector + '". [expected: ' + expectedText + ']';

  /**
   * @type {Number}
   */
  this.expected = expectedText.toString();

  /**
   * The method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   * @type {function}
   */
  this.pass = function (value) {
    return value.indexOf(this.expected) > -1;
  };

  /**
   * @param {Object} result
   * @returns {String}
   */
  this.value = function (result) {
    return result.value.toString();
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   * @type {function}
   */
  this.command = function (callback) {
    return this.api
      .waitForElementPresent(selector, 2000)
      .getElementText(selector, callback);
  };

};
