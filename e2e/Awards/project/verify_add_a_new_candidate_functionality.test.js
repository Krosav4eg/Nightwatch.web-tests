var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1607/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'status switcher by default': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//label[@btnradio="0"]', 30000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)')
            .pause(1000);
    },

    'choose "Project" candidate type': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'add a new candidate ': function (browser) {
        browser
            .addNewCandidateProject('Ukraine');
    },

    'status switcher is on': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="1"]', 30000)
            .click('//label[@btnradio="1"]')
            .verify.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(79, 142, 220, 1)')
            .pause(1000)

            .clickBySelectorXpath('//button[text()="Save"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000);

    },

    'added candidate is displayed': function (browser) {
        browser
            .candidateIsDispalyedInTheProject();
    },

    'add 2-nd candidate ': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add a new candidate"]')

            .verify.elementPresent('//h3[text()="Candidate 2"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')

            .verify.elementPresent('//*[text()="Candidate 2"]/../../../../../..//button[text()="Winner"]')
            .verify.elementPresent('//*[text()="Candidate 2"]/../../../../../..//button[text()="Delete"]')

            .verify.elementPresent('//label[text()="Introduction"]')
            .verify.elementPresent('//*[text()="Candidate 2"]/../../../../../..//textarea[@ngcontrol="introduction"]');

    },

    'add 3-th candidate ': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add a new candidate"]')

            .verify.elementPresent('//h3[text()="Candidate 3"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')

            .verify.elementPresent('//*[text()="Candidate 3"]/../../../../../..//button[text()="Winner"]')
            .verify.elementPresent('//*[text()="Candidate 3"]/../../../../../..//button[text()="Delete"]')

            .verify.elementPresent('//label[text()="Introduction"]')
            .verify.elementPresent('//*[text()="Candidate 3"]/../../../../../..//textarea[@ngcontrol="introduction"]');
    },

    'to return everything to its original position ': function (browser) {
        browser
            .refresh()
            .deleteCandidateFromProject()
            .deleteCandidateFromProject()
            .deleteCandidateFromProject()

            .verify.elementNotPresent('//h3[text()="Candidate 1"]')
            .verify.elementNotPresent('//h3[text()="Candidate 2"]')
            .verify.elementNotPresent('//h3[text()="Candidate 3"]')
            .pause(1500)
            .click('//label[@btnradio="0"]')
            .clickBySelectorXpath('//button[text()="Save"]')

            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 20000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)');
    },

});
