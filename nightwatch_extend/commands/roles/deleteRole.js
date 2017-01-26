/**
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(text) {
    var locatorTextInput = '//option[contains(text(),"' + text + '")]';
    this
        .clickBySelectorXpath('(//select[@class="ng-untouched ng-pristine ng-valid"])[1]')
        .clickBySelectorXpath(locatorTextInput)
        .pause(2000)

        .click('(//*[@class="btn btn-danger"])[1]')
        .acceptAlert()
        .pause(2000);
    return this;
};
