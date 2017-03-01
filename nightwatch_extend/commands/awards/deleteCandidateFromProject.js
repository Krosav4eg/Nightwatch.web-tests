/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .clickBySelectorXpath('//div[@class="row"][1]//button[text()="Delete"]')
        .pause(2000)
        .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')

        .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
        .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000);
    return this;
};
