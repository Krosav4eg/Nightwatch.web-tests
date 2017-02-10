/**
 * @param {String} selector
 *
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(selector, text) {
    this.useXpath()
        .waitForElementVisible(selector, 2000)
        .clearValue(selector)
        .setValue(selector, text)
        .pause(2000);

    return this;
};
