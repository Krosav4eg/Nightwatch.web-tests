/**
  * @returns {Object}
 */
module.exports.command = function () {
    this
        .setValueByXpath('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="introduction"]', 'new new test intro description')
        .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 30000)
        .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
        .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
        .verify.valueContains('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="introduction"]', 'new new test intro description')
        .pause(1500);
    return this;
};
