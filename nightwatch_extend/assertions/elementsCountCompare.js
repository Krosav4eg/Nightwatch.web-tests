/**
 * @param {String} selector
 * @param {String} method
 * @param {Number} expected
 */
exports.assertion = function (selector, method, expected) {
  if (typeof expected !== 'undefined') {
    this.expected = expected;
  } else {
    this.expected = method;
  }

  this.message = 'Compare elements count for selector: "' + selector + '". ' +
    '[expected: ' + this.expected + ', method: ' + method + ']';

  this.pass = function pass(value) {
    switch (method) {
      case 'lt':
        return value < this.expected;
      case 'lte':
        return value <= this.expected;
      case 'gt':
        return value > this.expected;
      case 'gte':
        return value >= this.expected;
      default:
        return value === this.expected;
    }
  };

  this.value = function (result) {
    return result.value.length;
  };

  this.command = function (callback) {
    return this.api
      .waitForElementPresent(selector, 2000)
      .elements('css selector', selector, callback);
  };
};
