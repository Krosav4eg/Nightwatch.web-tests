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
        .setValueByXpath('//*[text()="Candidate 2"]/../../../..//input[@formcontrolname="localName"]', 'Тестовый проект_2')
        .waitForElementVisible('//label[text()="Project English name "]', 30000)
        .setValueByXpath('//*[text()="Candidate 2"]/../../../..//input[@formcontrolname="englishName"]', 'Test Project_2')
        .clickBySelectorXpath('//*[text()="Candidate 2"]/../../../..//input[@formcontrolname="country"]')
        
        .sendKeys('(//input[@id="country"])[2]', text)
        .pause(3000)
        .useXpath()
        .clickBySelectorXpath(locatorTextInput)
        .pause(3000)
        .clickBySelectorXpath('//*[text()="Candidate 2"]/../../../../../..//button[text()="Save"]')
        .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
        .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
    return this;
};
