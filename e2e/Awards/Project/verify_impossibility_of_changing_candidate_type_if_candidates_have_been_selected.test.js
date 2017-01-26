var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1604/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'select project radio button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add candidate 1': function (browser) {
        browser
            .addNewCandidateProject('Ukraine');
    },

    'added candidate is displayed after creation': function (browser) {
        browser
            .verify.elementPresent('//h4[text()="Candidates"]')

            .verify.elementPresent('//h3[text()="Candidate 1"]')

            .verify.elementPresent('//label[text()="Project local name "]')
            .verify.elementPresent('//label[text()="Country "]')

            .verify.valueContains('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="localName"]', 'Тестовый проект_2')
            .verify.valueContains('//*[text()="Candidate 1"]/../../../..//input[@ngcontrol="englishName"]', 'Test Project_2')

            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')

            .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]')
            .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//button[text()="Delete"]')

            .verify.elementPresent('//label[text()="Introduction"]')

            .verify.elementPresent('//*[text()="Candidate 1"]/../../../../../..//textarea[@ngcontrol="introduction"]');
    },

    'change the candidate type try to click on "Contact" radio button': function (browser) {
        browser
            .sendKeys('//input[@id=1]',  browser.Keys.HOME)
            .pause(1000)
            .click('//input[@id=1]')
            .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 30000);
    },

    'change the candidate type try to click on "Company" radio button': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id=2]')
            .waitForElementVisible('//*[contains(text(),"be changed because candidates have been selected.Please remove the existing candidates before changing the candidate type of the award.")]', 30000);
    },

    'delete 1-st candidate': function (browser) {
        browser
            .deleteCandidateFromProject()
            .waitForElementVisible('//div[text()="Company deleted successfully"]', 3000);
    },

    'change the candidate type click on "Contact" radio button': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id=1]')

            .clickBySelectorXpath('//button[@type="submit"]')

            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.attributeEquals('//input[@id=1]', 'checked', 'true');
    },
});