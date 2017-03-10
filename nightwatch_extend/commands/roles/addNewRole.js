/**
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(text) {
    var locatorTextInput = '//*[contains(text(),"' + text + '")]';
    this.useCss()
        .clickBySelectorXpath('//button[text()="Add new role"]')
        .clickBySelectorXpath('//*[contains(text(), "Event Role")]/..//option[text()="Awards candidate"]')

        .useXpath()
        .sendKeys('//input[@id="eventParticipant"]', text)
        .pause(20000)
        .clickBySelectorXpath(locatorTextInput)
        .pause(10000)
        .clickBySelectorXpath('//button[text()="Save"]');

    return this;
};
