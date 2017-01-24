/**
 * @param {String} selector
 *
 * @returns {Object}
 */
module.exports.command = function(selector) {
    this.useXpath()
        .waitForElementVisible(selector, 10000)
        .click(selector)
        .waitForElementNotVisible('//*[@id="thisIsMainLoader"]', 100000);

    return this;
};