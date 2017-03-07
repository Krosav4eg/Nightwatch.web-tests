var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1600/awards')
    },

    'select project radio button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add candidate 1': function (browser) {
        browser
            .addNewCandidateProject('Ukraine');
    },

    'add candidate 2': function (browser) {
        browser
            .addSecondNewCandidateProject('Russia');
    },

    'click on winner button in Candidate 1 ': function (browser) {
        browser
            .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .moveToElement('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]', 30, 30)
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]')
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 30000);
    },

    'click Save button ': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000);
    },

    'enter winners description ': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'test winner description')
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .verify.valueContains('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'test winner description')
            .pause(1500);
    },

    'click candidate 1 save button again': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]');
    },

    'press winner button in Candidate 1 again ': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]')
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(79, 142, 220, 1)')
            .verify.elementNotPresent('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]')
            .pause(1500);
    },

    'press winner button in Candidate once more ': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 30000)
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .verify.valueContains('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'test winner description')
            .pause(1500);
    },

    'press winner button in Candidate 2 ': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidate 2"]/../../../../../..//button[text()="Winner"]')
            .waitForElementVisible('//*[text()="Candidate 2"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 30000)
            .verify.cssProperty('//*[text()="Candidate 2"]/../../../../../..//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .clickBySelectorXpath('//*[text()="Candidate 2"]/../../../../../..//button[text()="Save"]');
    },

    'enter winners description for 2-nd candidate': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 2"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'test winner description_2')
            .clickBySelectorXpath('//*[text()="Candidate 2"]/../../../../../..//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .moveToElement('//*[text()="Candidate 2"]/../../../../../..//button[text()="Winner"]', 30, 30)
            .verify.valueContains('//*[text()="Candidate 2"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'test winner description_2')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .refresh();
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidateFromProject()
            .deleteCandidateFromProject()
            .useXpath()
            .verify.elementNotPresent('//h3[text()="Candidate 2"]')
            .verify.elementNotPresent('//h3[text()="Candidate 1"]')

            .verify.elementNotPresent('//label[text()="Project local name "]')

            .verify.elementNotPresent('//label[text()="Project English name "]')

            .verify.elementNotPresent('//label[text()="Country "]')

            .verify.elementNotPresent('//label[text()="Introduction"]')

            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]');
    },
});
