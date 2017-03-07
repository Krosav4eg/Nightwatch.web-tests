var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1620/awards')
    },

    'select project radio button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add candidate 1': function (browser) {
        browser
            .addNewCandidateProject('Ukraine');
    },

    'enter introduction': function (browser) {
        browser
            .enterIntroduction();
    },

    'change all fields': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="localName"]', 'Тестовый проект_10')
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="englishName"]', 'Test Project_10')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="country"]', 30000)
            .click('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="country"]')
            .useCss()
            .setValueByCss('input[id="country"]', "Russia")
            .pause(3000)
            .useXpath()
            .clickBySelectorXpath('//*[contains(text(),"Russia")]')
            .pause(3000)
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .pause(1000);
    },

    'change enter introduction': function (browser) {
        browser
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]', 30000)
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')
            .verify.valueContains('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="introduction"]', 'new new test intro description')
            .pause(1500);
    },

    'refresh page': function (browser) {
        browser
            .refresh()
            .clickNoDeleteCandidate()
            .waitForElementVisible('//input[@formcontrolname="localName"]', 30000)
            .verify.valueContains('//input[@formcontrolname="localName"]', 'Тестовый проект_10')
            .verify.valueContains('//input[@formcontrolname="englishName"]', 'Test Project_10')
            .verify.valueContains('//textarea[@formcontrolname="introduction"]', 'new new test intro description')
            .verify.valueContains('//input[@id="country"]', 'Russia')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .pause(1000);
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidateFromProject()
            .pause(1000);
    },
});