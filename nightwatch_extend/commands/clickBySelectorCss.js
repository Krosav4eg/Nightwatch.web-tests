/**
 * @param {String} selector
 *
 * @returns {Object}
 */
module.exports.command = function(selector) {
    this.useCss()
        .waitForElementVisible(selector, 2000)
        .click(selector)
        .waitForElementNotVisible('#thisIsMainLoader', 100000)
        .pause(1000);

    return this;
};
