/**
  * @returns {Object}
 */
module.exports.command = function () {
    this
        .clickBySelectorXpath('//div[@class="row"][1]//button[text()="Delete"]')
        .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')

        .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000);
    return this;
};
