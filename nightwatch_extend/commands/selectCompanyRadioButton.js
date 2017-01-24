/**
 *
 *
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .clickBySelectorXpath('//input[@id=2]')

        .clickBySelectorXpath('//label[@btnradio="1"]')

        .clickBySelectorXpath('//button[@type="submit"]')

        .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
        .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
        .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);

    return this;

};

