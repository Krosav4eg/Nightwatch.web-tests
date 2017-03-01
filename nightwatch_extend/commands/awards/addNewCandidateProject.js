/**
 * @param {String} text
 *
 * @returns {Object}
 */
module.exports.command = function(text) {
    var locatorTextInput = '//*[contains(text(),"' + text + '")]';
    this
   .useCss()
        .clickBySelectorCss('button[class="btn btn-default"]')
        .useXpath()
        .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="localName"]', 'Тестовый проект_2')
        .waitForElementVisible('//label[text()="Project English name "]', 30000)
        .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="englishName"]', 'Test Project_2')
        .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="country"]')
        .useCss()
        .sendKeys('input[id="country"]', text)
        .pause(3000)
        .useXpath()
        .clickBySelectorXpath(locatorTextInput)
        .pause(3000)
        .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
        .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
    return this;
};
