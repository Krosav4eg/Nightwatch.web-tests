var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1621/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check awards page info': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[text()="Awards"]')

            .verify.elementPresent('//label[text()="Award title local"]')
            .verify.elementPresent('//label[text()="Award title English"]')
            .verify.elementPresent('//label[text()="Candidate type"]')

            .verify.elementPresent('//radio-item[@id=1]')
            .verify.elementPresent('//radio-item[@id=2]')
            .verify.elementPresent('//radio-item[@id=3]')

            .verify.elementPresent('//label[text()="Status"]')

            .verify.elementPresent('//div[text()="Modified: "]')
            .verify.elementPresent('//div[text()="Modified by: "]')

            .verify.elementPresent('//button[@type="submit"]')

            .verify.elementPresent('//h4[text()="Candidates"]');
    },

    'select project radio button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add a new candidate ': function (browser) {
        browser
            .addNewCandidateProject('Russia');
    },

    'enter introduction': function (browser) {
        browser
            .enterIntroduction();
    },

    'new candidate has been added ': function (browser) {
        browser
            .clickNoDeleteCandidate()
            .waitForElementVisible('//input[@formcontrolname="localName"]', 30000)
            .verify.valueContains('//input[@formcontrolname="localName"]', 'Тестовый проект_2')

            .verify.valueContains('//input[@formcontrolname="englishName"]', 'Test Project_2')

            .verify.valueContains('//textarea[@formcontrolname="introduction"]', 'new new test intro description')

            .verify.valueContains('//input[@id="country"]', 'Russia')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .pause(1000);
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidateFromProject();
    },
})
;