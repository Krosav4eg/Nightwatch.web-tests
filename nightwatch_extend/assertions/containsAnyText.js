exports.assertion = function (selector) {
  this.expected = 0;
  this.message = 'Is any text contains for selector: "' + selector + '". [expected: ' + this.expected + ']';

  this.pass = function pass(value) {
    return value > this.expected;
  };

  this.value = function (result) {
    return result.value.length;
  };

  this.command = function (callback) {
    return this.api
      .waitForElementPresent(selector, 2000)
      .getText(selector, callback);
  };
};
