var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');


module.exports = _.assign(presteps, auth, {

    'redirection to participant-roles': function (browser) {
        browser
            .relUrl('/event/1489/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 100000)
            .waitForElementNotVisible('#thisIsMainLoader', 100000);
    },

    'add new role': function (browser) {
        browser
            .addNewRole("Dalene");
    },

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1489/awards')
    },

    'Click on MasterContact ID': function (browser) {
        browser
            .useXpath()

            .waitForElementVisible('//*[text()="Candidates"]/../..', 10000)
            .clickBySelectorXpath('//*[@type="radio" and @id="1"]')
            .clickBySelectorXpath('//label[text()="On"]')
            .clickBySelectorXpath('//*[text()="Awards"]/../..//button[text()="Save"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)

            .clickBySelectorXpath('//*[text()="Candidates"]/../..//a[contains(@href,"MasterContact")]')
            .pause(1000)
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                this.verify.urlContains("MasterContact");

                browser.closeWindow(handle);
                handle = result.value[0];
                browser.switchWindow(handle);})
    },

    'Enter "Introduction"': function (browser) {
        browser
            .setValueByCss('textarea[ngcontrol="introduction"]', "Test introduction")
            .clickBySelectorXpath('//*[text()="Candidates"]/../..//button[text()="Save"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success')

            .verify.valueContains('//textarea[@ngcontrol="introduction"]', 'Test introduction');
    },

    'Click on [Edit candidates]': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/event/1489/event-participant-roles"]/button')
            .pause(1000)
            .window_handles(function(result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                this.verify.urlContains("event-participant-roles");})
    },

    'redirection to role': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="EventRoleStatsIndex"]')
    },

    'Delete role': function (browser) {
        browser
            .deleteRole("Awards candidate");
    },
});
