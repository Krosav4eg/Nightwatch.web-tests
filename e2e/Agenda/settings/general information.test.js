var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to settings page': function (browser) {
        browser
            .useCss()
            .relUrl('/event/212/settings')
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000);
    },

    'check general information': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//span[text()="212/IndustryForum Energy - Event settings"]');
    },

    'check information about place of event': function (browser) {
        browser
            .verify.elementPresent('//div[text()="München, "]')
            .verify.elementPresent('//div[text()="Germany"]');
    },

    'event settings template. none selected': function (browser) {
        browser
            .verify.elementPresent('//div[text()="[none selected]"]')
            .verify.elementPresent('//div[text()="Event settings template"]');
    },

    'check date of event': function (browser) {
        browser
            .verify.elementPresent('//h5[text()="09.05 - 10.05.2012"]')
            .verify.elementPresent('//div[text()="Event settings template"]')

            .clickBySelectorXpath('//span[contains(text(),"Event")]')
            .clickBySelectorXpath('//span[contains(text(),"IndustryForum Energy")]')
            .click('//span[contains(text(),"General")]')

            .useXpath()
            .waitForElementVisible('//input[@data-attribute="startTime"]', 10000)
            .verify.valueContains('//input[@data-attribute="startTime"]', "2012-05-09 08:00:00")
            .verify.elementPresent('//select[@name="Event[countryId]"]')
            .verify.valueContains('//select[@name="Event[countryId]"]', "66")
            .verify.elementPresent('//input[@value="München"]', 5000)
            .verify.valueContains('//input[@value="München"]', "München");
    },

    'redirection to settings page again': function (browser) {
        browser
            .useCss()
            .relUrl('/event/212/settings')
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000)

            .useXpath()
            .verify.elementPresent('//span[text()="212/IndustryForum Energy - Event settings"]');
    },

    'press cancel button': function (browser) {
        browser
            .clickBySelectorXpath('//div/button[text()="Cancel"]')
            .useXpath()
            .verify.elementPresent('//h4[text()="Event (#212)"]');
    },

    'press save button ': function (browser) {
        browser
            .back()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 20000)

            .clickBySelectorXpath('//div/button[2][text()="Save"]');
    },
});
