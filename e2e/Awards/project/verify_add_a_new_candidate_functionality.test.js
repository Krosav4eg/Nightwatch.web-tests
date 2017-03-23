var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1607/awards')
    },

    'status switcher by default': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@onButton')
            .verify.cssProperty('@onButton', 'background-color', 'rgba(231, 60, 60, 1)')
            .clickBySelector('@projectRadioButton')
            .clickBySelector('@saveButton')
    },

    'add a new candidate ': function (browser) {
        browser
            .addNewCandidateProject('Ukraine');
    },

    'status switcher is on': function (browser) {
        var awardSectoin = browser.page.awards().section.awardSectoin;
        awardSectoin
            .clickBySelector('@offButton')
            .verify.cssProperty('@offButton', 'background-color', 'rgba(79, 142, 220, 1)')
            .clickBySelector('@saveButton')
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
            .verify.elementPresent('//*[text()="Candidate 2"]/../../../../../..//textarea[@formcontrolname="introduction"]');
    },

    'add 3-th candidate ': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add a new candidate"]')

            .verify.elementPresent('//h3[text()="Candidate 3"]')
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')

            .verify.elementPresent('//*[text()="Candidate 3"]/../../../../../..//button[text()="Winner"]')
            .verify.elementPresent('//*[text()="Candidate 3"]/../../../../../..//button[text()="Delete"]')

            .verify.elementPresent('//label[text()="Introduction"]')
            .verify.elementPresent('//*[text()="Candidate 3"]/../../../../../..//textarea[@formcontrolname="introduction"]');
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
            .clickBySelectorXpath('//label[@btnradio="0"]')
            .clickBySelectorXpath('//button[text()="Save"]')

            .useXpath()
            .waitForElementVisible('//div[text()="Award saved successfully"]', 20000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)');
    },
});
