/**
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(text) {
    var locatorTextInput = '//*[contains(text(),"' + text + '")]';
    this.useCss()
        .clickBySelectorCss('button[class="row-fluid btn btn-default"]')
        .clickBySelectorCss('input[value-property-name="companyId"]')
        .sendKeys('.auto-complete input', text)
        .pause(3000)
        .clickBySelectorXpath(locatorTextInput)
        .pause(3000)
        .clickBySelectorXpath('//button[text()="Add company"]');

    return this;

};
