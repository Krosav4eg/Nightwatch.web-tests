var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1503/awards')
    },

    'select company radio button ': function (browser) {
        browser
            .selectCompanyRadioButton();
    },

    'create new candidate': function (browser) {
        browser
            .addNewCandidate('Aalef');
    },

    'added candidate has been displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Candidates")]', 30000)

            .verify.elementPresent('//h3[contains(text(),"Candidate 1")]', 30000)
            .verify.elementPresent('//label[contains(text(),"Company Name")]', 30000)
            .verify.elementPresent('//span[contains(text(),"Aalef Oy")]', 30000)
            .verify.elementPresent('//a[contains(text(),"(M#92844)")]', 30000)
            .verify.elementPresent('//label[contains(text(),"Country")]', 30000)

            .verify.elementPresent('//*[text()="Candidates"]/../..//img', 30000)

            .verify.elementPresent('//label[contains(text(),"Introduction")]', 30000)
            .verify.elementPresent('//div/textarea', 30000)

            .verify.elementPresent('//button[contains(text(),"Winner")]', 30000)
            .verify.elementPresent('//button[contains(text(),"Delete")]', 30000)

            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified: ")]', 30000)
            .verify.elementPresent('//div[@class="form-group"]//div[contains(text(),"Modified by: ")]', 30000)

            .verify.elementPresent('//div[@class="form-group"]//button[text()="Save"]', 30000);
    },

    'enter introduction': function (browser) {
        browser
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)

            .setValueByXpath('//textarea', 'Very important information')
            .clickBySelectorXpath('//me-event-candidates-form//button[text()="Save"]')

            .waitForElementVisible('//div[contains(text(),"Award saved successfully")]', 30000)

            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.valueContains('//textarea', 'Very important information')
            .pause(1500);
    },

    'Enter Winners description ': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Winner"]')
            .verify.elementPresent('//*[contains(text(),"s description")]')
            .waitForElementVisible('//form//div[2]//textarea', 30000)
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .setValueByXpath('//form//div[2]//textarea', 'You are best of the best')
            .verify.valueContains('//form//div[2]//textarea', 'You are best of the best')
            .clickBySelectorXpath('//me-event-candidates-form//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]');
    },

    'refresh page and verify in introduction field': function (browser) {
        browser
            .refresh()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//me-event-candidates-form//button[text()="Save"]', 20000)
            .moveToElement('//me-event-candidates-form//button[text()="Save"]', 100, 100)

            .waitForElementVisible('//form//div[1]//textarea', 30000)
            .verify.valueContains('//form//div[1]//textarea', 'Very important information')

            .waitForElementVisible('//form//div[2]//textarea', 30000)
            .verify.valueContains('//form//div[2]//textarea', 'You are best of the best');
    },

    'click winners button again': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Winner"]')
            .pause(1000)
            .verify.elementNotPresent('//*[contains(text(),"s description")]', 30000)
            .verify.elementNotPresent('//form//div[2]//textarea', 30000)
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(41, 115, 207, 1)')
            .pause(1500);
    },

    'change winners description': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Winner"]')
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .verify.valueContains('//form//div[1]//textarea', 'Very important information')
            .verify.valueContains('//form//div[2]//textarea', 'You are best of the best')
            .setValueByXpath('//form//div[2]//textarea', 'You are best of the best of the best')

            .clickBySelectorXpath('//me-event-candidates-form//button[text()="Save"]')

            .waitForElementVisible('//div[text()="Award saved successfully"]', 20000)

            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .verify.valueContains('//form//div[2]//textarea', 'You are best of the best of the best')
            .pause(1200);
    },

    'to return everything to its original position ': function (browser) {
        browser
            .click('//button[text()="Winner"]')
            .clickBySelectorXpath('//me-event-candidates-form//button[text()="Save"]')

            .waitForElementVisible('//div[text()="Award saved successfully"]', 20000)
            .pause(3000)

            .deleteCandidate();
    },
});

