var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
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
            .waitForElementVisible('//span[text()="212/IndustryForum Energy - Event settings"]', 5000);
    },
    'check information about place of event': function (browser) {
        browser
            .waitForElementVisible('//div[text()="München, "]', 5000)
            .waitForElementVisible('//div[text()="Germany"]', 5000);
    },
    'event settings template. none selected': function (browser) {
        browser
            .waitForElementVisible('//div[text()="[none selected]"]', 5000)
            .waitForElementVisible('//div[text()="Event settings template"]', 5000)

    },
    'check date of event': function (browser) {
        browser
            .waitForElementVisible('//h5[text()="09.05 - 10.05.2012"]', 5000)
            .waitForElementVisible('//div[text()="Event settings template"]', 5000)
            .useCss()
            .url('http://alpha.ew.managementevents.com/EW/Event/cruII/id/212')
            .useXpath()
            .waitForElementVisible('//input[@data-attribute="startTime"]', 30000)
            .assert.valueContains('//input[@data-attribute="startTime"]', "2012-05-09 08:00:00")
            .waitForElementVisible('//select[@name="Event[countryId]"]', 5000)
            .assert.valueContains('//select[@name="Event[countryId]"]', "66")
            .waitForElementVisible('//input[@value="München"]', 5000)
            .assert.valueContains('//input[@value="München"]', "München")

    },
    'redirection to settings page again': function (browser) {
        browser
            .useCss()
            .relUrl('/event/212/settings')
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000)
            .useXpath()
            .waitForElementVisible('//span[text()="212/IndustryForum Energy - Event settings"]', 5000);
    },
    'press cancel button': function (browser) {
        browser
            .waitForElementVisible('//div/button[text()="Cancel"]', 5000)
            .click('//div/button[text()="Cancel"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000)
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 5000);
    },
    'press save button ': function (browser) {
        browser
            .back()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000)
            .useXpath()
            .waitForElementVisible('//div/button[2][text()="Save"]', 5000)
            .click('//div/button[2][text()="Save"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000);

    },
});
