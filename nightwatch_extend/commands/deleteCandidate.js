/**
 *
 *
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 30000)
        .clickBySelectorXpath('//div[@class="row"][1]//button[text()="Delete"]')

        .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 3000)
        .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')

        .waitForElementVisible('//div[text()="Company deleted successfully"]', 30000);

    return this;

};
