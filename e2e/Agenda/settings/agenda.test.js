var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    // 'redirection to settings page': function (browser) {
    //     browser
    //         .useCss()
    //         .relUrl('/event/212/settings')
    //         .waitForElementVisible('#thisIsMainLoader', 20000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 20000)
    //         .useXpath()
    //         .waitForElementVisible('//span[text()="212/IndustryForum Energy - Event settings"]', 30000);
    // },
    //
    // 'select all check-boxes and radio buttons': function (browser) {
    //     browser
    //         .useXpath()
    //         .verify.elementPresent('//legend[text()="Agenda"]')
    //         .verify.elementPresent('//label[text()="Availability"]')
    //
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-availability__input__radio__1"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-me-users"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-delegates"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-me-users"]')
    //
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-solution-providers"]')
    //         .waitForElementVisible('//label[text()="Group Qty"]', 5000)
    //
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['0', browser.Keys.ENTER])
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['1', browser.Keys.ENTER])
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['2', browser.Keys.ENTER])
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['3', browser.Keys.ENTER])
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['4', browser.Keys.ENTER])
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['5', browser.Keys.ENTER])
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['6', browser.Keys.ENTER])
    //
    //         .clickBySelectorXpath('//input[@data-marker="me-groups-managed-automatically__input__checkbox__1"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-groups-managed-automatically__input__checkbox__2"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-groups-managed-automatically__input__checkbox__3"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-groups-managed-automatically__input__checkbox__4"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-groups-managed-automatically__input__checkbox__5"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-groups-managed-automatically__input__checkbox__6"]')
    //         .clickBySelectorXpath('//div[@class="panel-body"]/div//div[3]/button[2]');
    // },

    'events groups are displayed': function (browser) {
        browser
            .useXpath()
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .waitForElementVisible('//div[text()="Event Groups"]', 5000)

            .verify.elementPresent('//p[contains(text(),"Group 1")]')
            .verify.elementPresent('//p[contains(text(),"Group 2")]')
            .verify.elementPresent('//p[contains(text(),"Group 3")]')
            .verify.elementPresent('//p[contains(text(),"Group 4")]')
            .verify.elementPresent('//p[contains(text(),"Group 5")]')
            .verify.elementPresent('//p[contains(text(),"Group 6")]');
    },

    'blocking delegates of agenda assertion': function (browser) {
        browser
            .relUrl('/delegates/edit/92240')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//legend[text()="Master Contact Information"]')
            .verify.elementPresent('//a[contains(text(),"105375")]')
            .verify.elementPresent('//legend[text()="Participation Information"]')
            .verify.elementPresent('//legend[text()="Blocked Times"]')
            .verify.elementPresent('//label[text()="Blocked time(s)"]')
            .verify.elementPresent('//button[text()="Add Blocked Time"]');
    },

    'go to the settings page': function (browser) {
        browser
            .useCss()
            .relUrl('/event/212/settings')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .waitForElementVisible('//span[text()="212/IndustryForum Energy - Event settings"]', 5000);
    },

    // 'delete all check-boxes and radio buttons': function (browser) {
    //     browser
    //         .verify.elementPresent('//legend[text()="Agenda"]')
    //         .verify.elementPresent('//label[text()="Availability"]')
    //
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-availability__input__radio__1"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-me-users"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-delegates"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-me-users"]')
    //         .clickBySelectorXpath('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-solution-providers"]')
    //
    //         .waitForElementVisible('//label[text()="Group Qty"]', 5000)
    //         .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['2', browser.Keys.ENTER])
    //
    //         .verify.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__3"]')
    //         .verify.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__4"]')
    //         .verify.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__5"]')
    //         .verify.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__6"]')
    //
    //         .clickBySelectorXpath('//div[@class="panel-body"]/div//div[3]/button[2]');
    // },

    'events groups are not displayed': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .waitForElementVisible('//div[text()="Event Groups"]', 5000)
            .verify.elementNotPresent('//p[text()="Group 3 - blue - 0"]')
            .verify.elementNotPresent('//p[text()="Group 4 - green - 0"]')
            .verify.elementNotPresent('//p[text()="Group 5 - red - 0"]')
            .verify.elementNotPresent('//p[text()="Group 6 - 0"]');
    },

    'blocking delegates of agenda again': function (browser) {
        browser
            .relUrl('/delegates/edit/92240')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//legend[text()="Master Contact Information"]')
            .verify.elementPresent('//a[contains(text(),"105375")]')
            .verify.elementPresent('//legend[text()="Participation Information"]');
    },


});

