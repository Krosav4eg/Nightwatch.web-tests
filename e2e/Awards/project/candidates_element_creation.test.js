var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1625/awards')
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

    'enter introduction': function (browser) {
        browser
            .enterIntroduction();
    },

    'click on winner button in Candidate 1 ': function (browser) {
        browser
            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Winner"]')
            .pause(1500)
            .verify.cssProperty('//button[text()="Winner"]', 'background-color', 'rgba(108, 166, 50, 1)')
            .waitForElementVisible('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 30000);
    },

    'enter winners description ': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'test winner description')
            .verify.valueContains('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'test winner description')
            .pause(1500);
    },

    'check size text area for introduction and winner description before inputting long description': function (browser) {
        browser
            .getElementSize('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="introduction"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 900);
                this.verify.equal(result.value.height, 112)
            })
            .getElementSize('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 900);
                this.verify.equal(result.value.height, 112)
            })
            .pause(1000);
    },

    'input all fields with long description': function (browser) {
        browser
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="localName"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
            .setValueByXpath('//*[text()="Candidate 1"]/../../../..//input[@formcontrolname="englishName"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')

            .setValueByXpath('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="introduction"]', 'test intro description')

            .setValueByXpath('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="introduction"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')

            .setValueByXpath('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')

            .clickBySelectorXpath('//*[text()="Candidate 1"]/../../../../../..//button[text()="Save"]')

            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)

            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .pause(1000);
    },

    'check resize text area for Introduction and winner description': function (browser) {
        browser
            .getElementSize('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="introduction"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 900);
                this.verify.equal(result.value.height, 112)
            })
            .getElementSize('//*[text()="Candidate 1"]/../../../../../..//textarea[@formcontrolname="winnerDescription"]', function (result) {
                this.verify.equal(typeof result, "object");
                this.verify.equal(result.status, 0);
                this.verify.equal(result.value.width, 900);
                this.verify.equal(result.value.height, 112)
            })
    },

    'delete candidate': function (browser) {
        browser
            .deleteCandidateFromProject();
    },
});
