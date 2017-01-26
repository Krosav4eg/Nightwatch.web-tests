/**
 * @param {String} selector
 *
 * @returns {Object}
 */
module.exports.command = function(selector) {
    this.useCss()
        .waitForElementVisible(selector, 10000)
        .click(selector)
        .waitForElementNotVisible('#thisIsMainLoader', 100000)
        .pause(2000);

    return this;
};
