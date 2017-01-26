/**
 * @returns {Object}
 */
module.exports.command = function () {
    this
        .useXpath()
        .waitForElementVisible('//div[@class="row"][1]//button[text()="Delete"]', 30000)
        .click('//div[@class="row"][1]//button[text()="Delete"]')
        .waitForElementVisible('//button[@data-marker="me-confirm__button__button__no"]', 30000)
        .click('//button[@data-marker="me-confirm__button__button__no"]');
    return this;
};
