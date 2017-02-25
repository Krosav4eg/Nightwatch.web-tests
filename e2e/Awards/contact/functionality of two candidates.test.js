var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');


module.exports = _.assign(presteps, auth, {

    'redirection to participant-roles': function (browser) {
        browser
            .relUrl('/event/1485/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 100000)
            .waitForElementNotVisible('#thisIsMainLoader', 100000);
    },

    'add new role': function (browser) {
        browser
            .addNewRole("Alveid")
            .pause(1000)
            .addNewRole("Gloppen");
    },

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1485/awards')
    },

    'check elements availability': function (browser) {
        browser
            .useXpath()

            .waitForElementVisible('//*[text()="Candidates"]/../..', 10000)
            .clickBySelectorXpath('//*[@type="radio" and @id="1"]')
            .clickBySelectorXpath('//label[text()="On"]')
            .clickBySelectorXpath('//*[text()="Awards"]/../..//button[text()="Save"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)

            .waitForElementVisible('//*[text()="Candidates"]/../..', 10000)
            .verify.containsText('//*[text()="Candidates"]/../..', "Candidate 1")
            .verify.containsText('//*[text()="Candidates"]/../..', "Candidate 2");
    },

    'click on [Winner] button': function (browser) {
        browser
            .clickBySelectorXpath('(//button[text()="Winner"])[1]')
            .clickBySelectorXpath('(//*[text()="Candidates"]/../..//button[text()="Save"])[1]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .clickBySelectorXpath('//div[@class="toast-content"]')
            .verify.cssProperty('(//button[text()="Winner"])[1]', 'background-color', 'rgba(133, 199, 68, 1)')

            .refresh()
            .waitForElementNotVisible('//*[@id="thisIsMainLoader"]', 100000)
            .waitForElementVisible('(//button[text()="Winner"])[1]', 100000)
            .verify.cssProperty('(//button[text()="Winner"])[1]', 'background-color', 'rgba(133, 199, 68, 1)');
    },

    'click save': function (browser) {
        browser
            .clickBySelectorXpath('(//*[text()="Candidates"]/../..//button[text()="Save"])[1]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success')
            .verify.containsText('//div[@class="toast-message"]', 'Award save')
            .clickBySelectorXpath('//div[@class="toast-content"]');
    },

    'press on [Winner] button twice': function (browser) {
        browser
            .clickBySelectorXpath('(//button[text()="Winner"])[1]')
            .clickBySelectorXpath('(//*[text()="Candidates"]/../..//button[text()="Save"])[1]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .clickBySelectorXpath('//div[@class="toast-content"]')
            .verify.cssProperty('(//button[text()="Winner"])[1]', 'background-color', 'rgba(79, 142, 220, 1)')

            .clickBySelectorXpath('(//button[text()="Winner"])[1]')
            .clickBySelectorXpath('(//*[text()="Candidates"]/../..//button[text()="Save"])[1]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .clickBySelectorXpath('//div[@class="toast-content"]')
            .verify.cssProperty('(//button[text()="Winner"])[1]', 'background-color', 'rgba(133, 199, 68, 1)');
    },

    'click on [Winner] button in Candidate 2': function (browser) {
        browser
            .clickBySelectorXpath('(//button[text()="Winner"])[2]')
            .clickBySelectorXpath('(//*[text()="Candidates"]/../..//button[text()="Save"])[2]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .clickBySelectorXpath('//div[@class="toast-content"]')
            .verify.cssProperty('(//button[text()="Winner"])[2]', 'background-color', 'rgba(133, 199, 68, 1)')
            .verify.cssProperty('(//button[text()="Winner"])[1]', 'background-color', 'rgba(79, 142, 220, 1)');
    },

    'enter description ': function (browser) {
        browser
            .setValueByXpath('(//textarea[@formcontrolname="winnerDescription"])[1]', "test test test")
            .clickBySelectorXpath('(//*[text()="Candidates"]/../..//button[text()="Save"])[2]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .verify.valueContains('(//textarea[@formcontrolname="winnerDescription"])[1]', 'test test test')

            .clickBySelectorXpath('(//button[text()="Winner"])[2]')
            .clickBySelectorXpath('(//*[text()="Candidates"]/../..//button[text()="Save"])[2]')
            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .verify.cssProperty('(//button[text()="Winner"])[2]', 'background-color', 'rgba(79, 142, 220, 1)')
            .verify.cssProperty('(//button[text()="Winner"])[1]', 'background-color', 'rgba(79, 142, 220, 1)');
    },

    'redirection to role': function (browser) {
        browser
            .relUrl('/event/1485/event-participant-roles')
    },

    'delete role 1': function (browser) {
        browser
            .deleteRole("Awards candidate")
            .refresh()
    },

    'delete role 2': function (browser) {
        browser
            .deleteRole("Awards candidate");
    },

    'redirection to Awards after delete': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="EventAwardIndex"]')
    },

    'verify Delete role': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//*[text()="Candidates"]/../..', 10000)
            .verify.elementNotPresent('//*[text()="Candidates"]/../..//*[text()="Candidate 2"]')
            .verify.elementNotPresent('//*[text()="Candidates"]/../..//*[text()="Candidate 1"]');
    },

});
