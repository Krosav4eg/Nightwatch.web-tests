/**
 * @param {String} selector
 *
 * @returns {Object}
 */
module.exports.command = function(selector) {
    this.useXpath()
        .waitForElementVisible(selector, 2000)
        .click(selector)
        .waitForElementNotVisible('//*[@id="thisIsMainLoader"]', 100000)
        .pause(1000);

    return this;
};