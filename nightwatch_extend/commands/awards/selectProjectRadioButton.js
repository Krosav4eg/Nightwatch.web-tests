/**
  * @returns {Object}
 */
module.exports.command = function () {
    this
        .useXpath()
        .click('//input[@id=3]')
        .click('//label[@btnradio="1"]')
        .click('//button[@type="submit"]')
        .useCss()
        .waitForElementVisible('#thisIsMainLoader', 30000)
        .waitForElementNotVisible('#thisIsMainLoader', 30000)
        .useXpath()
        .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
        .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);
    return this;
};
