/**
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(text) {
    var locatorTextInput = '//*[contains(text(),"' + text + '")]';
    this.useCss()
        .clickBySelectorXpath('//button[text()="Add new role"]')
        .clickBySelectorCss('#eventRoleId')
        .clickBySelectorXpath('(//option[contains(text(),"Awards candidate")])[2]')
        .clickBySelectorCss('#eventParticipantId')
        .sendKeys('.auto-complete input', text)
        .pause(3000)
        .clickBySelectorXpath(locatorTextInput)
        .pause(2000)
        .clickBySelectorXpath('//button[text()="Save"]');

    return this;
};
