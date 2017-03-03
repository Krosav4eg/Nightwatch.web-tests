/**
 * @param {String} selector
 *
 * @returns {Object}
 */
module.exports.command = function(selector) {
    this
        .waitForElementVisible(selector, 10000)
        .click(selector)
        .useXpath()
        .waitForElementNotVisible('//*[@id="thisIsMainLoader"]', 100000)
        .pause(2000);

    return this;
};