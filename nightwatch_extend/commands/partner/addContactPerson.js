/**
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(name, numberOption) {
    var locatorTextInput = '//*[contains(text(),"' + name + '")]';
    var locatorOption = '(//option[@value=' + numberOption + '])[2]';
    this
        .clickBySelectorXpath('//*[text()="Contact / Search"]/../div/div/div/input')
        .useCss()
        .sendKeys('.auto-complete input', name)
        .pause(2000)
        .clickBySelectorXpath(locatorTextInput)
        .pause(2000)
        .clickBySelectorXpath(locatorOption)
        .clickBySelectorXpath('//*[@class="row-fluid btn btn-primary"]');

    return this;
};
