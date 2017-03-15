var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to settings page': function (browser) {
        browser
            .relUrl('/event/212/settings')
    },

    'check general information': function (browser) {
        var settings = browser.page.settings();
        settings
            .verify.elementPresent('@totalNameFor212Event');
    },

    'check information about place of event': function (browser) {
        var settings = browser.page.settings();
        settings
            .verify.elementPresent('@munchenText')
            .verify.elementPresent('@germanyText');
    },

    'event settings template. none selected': function (browser) {
        var settings = browser.page.settings();
        settings
            .verify.elementPresent('@noneSelectedText')
            .verify.elementPresent('@eventSettingsTemplateText');
    },

    'check date of event': function (browser) {
        var settings = browser.page.settings();
        settings
            .verify.elementPresent('@timeText')

            .clickBySelector('@eventLeftMenu')
            .clickBySelector('@industryForumEnergyLeftMenu')
            .click('@generalLeftMenu');

        var eventEdit = browser.page.eventEdit();
        eventEdit

            .waitForElementVisible('@startTime', 10000)
            .verify.valueContains('@startTime', "2012-05-09 08:00:00")
            .verify.valueContains('@locationInput', "66")
            .verify.valueContains('@townInput', "München");
    },

    'redirection to settings page again': function (browser) {
        browser
            .relUrl('/event/212/settings')
    },

    'press cancel button': function (browser) {
        var settings = browser.page.settings();
        settings
            .clickBySelector('@cancleButton')
            .verify.elementPresent('@totalName212Event');
    },

    'press save button ': function (browser) {
        browser
            .back()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 20000);

        var settings = browser.page.settings();
        settings
            .clickBySelector('@saveButton');
    },
});
