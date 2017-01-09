var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to settings page': function (browser) {
        browser
            .useCss()
            .relUrl('/event/212/settings')
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000)
            .useXpath()
            .waitForElementVisible('//span[text()="212/IndustryForum Energy - Event settings"]', 10000);

    },
    'select all check-boxes and radio buttons': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//legend[text()="Agenda"]')
            .assert.elementPresent('//label[text()="Availability"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-availability__input__radio__1"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-availability__input__radio__1"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-me-users"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-me-users"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-delegates"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-delegates"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-me-users"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-me-users"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-solution-providers"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-solution-providers"]')
            .waitForElementVisible('//label[text()="Group Qty"]', 5000)
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', 5000)
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['0', browser.Keys.ENTER])
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['1', browser.Keys.ENTER])
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['2', browser.Keys.ENTER])
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['3', browser.Keys.ENTER])
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['4', browser.Keys.ENTER])
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['5', browser.Keys.ENTER])
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['6', browser.Keys.ENTER])
            .pause(1000)
            .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__1"]', 5000)
            .click('//input[@data-marker="me-groups-managed-automatically__input__checkbox__1"]')
            .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__2"]', 5000)
            .click('//input[@data-marker="me-groups-managed-automatically__input__checkbox__2"]')
            .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__3"]', 5000)
            .click('//input[@data-marker="me-groups-managed-automatically__input__checkbox__3"]')
            .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__4"]', 5000)
            .click('//input[@data-marker="me-groups-managed-automatically__input__checkbox__4"]')
            .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__5"]', 5000)
            .click('//input[@data-marker="me-groups-managed-automatically__input__checkbox__5"]')
            .waitForElementVisible('//input[@data-marker="me-groups-managed-automatically__input__checkbox__6"]', 5000)
            .click('//input[@data-marker="me-groups-managed-automatically__input__checkbox__6"]')
            .waitForElementVisible('//div[@class="panel-body"]/div//div[3]/button[2]', 5000)
            .click('//div[@class="panel-body"]/div//div[3]/button[2]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 20000)
            .waitForElementNotVisible('#thisIsMainLoader', 20000);

    },
    'events groups are displayed': function (browser) {
        browser
            .useXpath()
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Event Groups"]', 5000)
            .waitForElementVisible('//p[text()="Group 1 - orange - 22"]', 5000)
            .waitForElementVisible('//p[text()="Group 2 - violet - 21"]', 5000)
            .waitForElementVisible('//p[text()="Group 3 - blue - 0"]', 5000)
            .waitForElementVisible('//p[text()="Group 4 - green - 0"]', 5000)
            .waitForElementVisible('//p[text()="Group 5 - red - 0"]', 5000)
            .waitForElementVisible('//p[text()="Group 6 - 0"]', 5000);


    },
    'blocking delegates of agenda assertion': function (browser) {
        browser
            .relUrl('/delegates/edit/92240')
            .waitForElementVisible('//legend[text()="Master Contact Information"]', 5000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/105375"]', 5000)
            .waitForElementVisible('//legend[text()="Participation Information"]', 5000)
            .waitForElementVisible('//legend[text()="Blocked Times"]', 5000)
            .waitForElementVisible('//label[text()="Blocked time(s)"]', 5000)
            .waitForElementVisible('//button[text()="Add Blocked Time"]', 5000);

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
    'delete all check-boxes and radio buttons': function (browser) {
        browser
            .assert.elementPresent('//legend[text()="Agenda"]')
            .assert.elementPresent('//label[text()="Availability"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-availability__input__radio__1"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-availability__input__radio__1"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-me-users"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-me-users"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-delegates"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-delegates__input__checkbox__for-delegates"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-me-users"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-me-users"]')
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-solution-providers"]', 5000)
            .click('//input[@data-marker="me-event-settings-agenda-blocking-solution-provider__input__checkbox__for-solution-providers"]')

            .waitForElementVisible('//label[text()="Group Qty"]', 5000)
            .waitForElementVisible('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', 5000)
            .clearValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]')
            .setValue('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['2', browser.Keys.ENTER])
            .assert.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__3"]')
            .assert.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__4"]')
            .assert.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__5"]')
            .assert.elementNotPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__6"]')
            .waitForElementVisible('//div[@class="panel-body"]/div//div[3]/button[2]', 5000)
            .click('//div[@class="panel-body"]/div//div[3]/button[2]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);

    },
    'events groups are not displayed': function (browser) {
        browser
            .relUrl('/event/212/delegates')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//div[text()="Event Groups"]', 5000)
            .assert.elementNotPresent('//p[text()="Group 3 - blue - 0"]')
            .assert.elementNotPresent('//p[text()="Group 4 - green - 0"]')
            .assert.elementNotPresent('//p[text()="Group 5 - red - 0"]')
            .assert.elementNotPresent('//p[text()="Group 6 - 0"]');

    },

    'blocking delegates of agenda again': function (browser) {
        browser
            .relUrl('/delegates/edit/92240')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//legend[text()="Master Contact Information"]', 5000)
            .waitForElementVisible('//a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/105375"]', 5000)
            .waitForElementVisible('//legend[text()="Participation Information"]', 5000);

    },


});

