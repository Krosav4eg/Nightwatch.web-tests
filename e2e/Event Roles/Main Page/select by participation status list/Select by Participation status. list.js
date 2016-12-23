var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,

    'redirection to the event-participant-roles': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    // 'Cancelled list': function (browser) {
    //     browser
    //         .useXpath()
    //         .waitForElementVisible('//option[text()="Cancelled"]', 5000)
    //         .click('//option[text()="Cancelled"]')
    //         .useCss()
    //         .waitForElementVisible('#thisIsMainLoader', 30000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 30000)
    //         .useXpath()
    //         .waitForElementVisible('//tr[1]/td[3]/span[text()="       Confirmed     "]', 30000)
    //
    //
    // },
    // 'Confirmed list ': function (browser) {
    //     browser
    //         .useXpath()
    //         .waitForElementVisible('//option[text()="Confirmed"]', 5000)
    //         .click('//option[text()="Confirmed"]')
    //         .useCss()
    //         .waitForElementVisible('#thisIsMainLoader', 30000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 30000)
    //         .useXpath()
    //         .waitForElementVisible('//tr[1]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[2]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[3]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[4]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[5]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[6]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[7]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[8]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[9]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[10]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[11]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[13]/td[3]/span[text()="       Confirmed     "]', 30000)
    //         .waitForElementVisible('//tr[14]/td[3]/span[text()="       Confirmed     "]', 30000)
    //
    // },
    // 'Confirmed Rebook list ': function (browser) {
    //     browser
    //         .useXpath()
    //         .waitForElementVisible('//option[text()="Confirmed Rebook"]', 5000)
    //         .click('//option[text()="Confirmed Rebook"]')
    //         .useCss()
    //         .waitForElementVisible('#thisIsMainLoader', 30000)
    //         .waitForElementNotVisible('#thisIsMainLoader', 30000)
    //         .useXpath()
    //         .waitForElementVisible('//tr[1]/td[3]/span[text()="       Confirmed Rebook     "]', 30000)
    //         .waitForElementVisible('//tr[2]/td[3]/span[text()="       Confirmed Rebook     "]', 30000)
    //         .waitForElementVisible('//tr[3]/td[3]/span[text()="       Confirmed Rebook     "]', 30000)
    //         .waitForElementVisible('//tr[4]/td[3]/span[text()="       Confirmed Rebook     "]', 30000)
    //         .waitForElementVisible('//tr[5]/td[3]/span[text()="       Confirmed Rebook     "]', 30000)
    //
    //
    // },

    'Late cancellation list ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Late cancellation"]', 5000)
            .click('//option[text()="Late cancellation"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementNotPresent('//tr[1]/td[3]/span[text()="       Late cancellation     "]');
    },

    'No show list': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="No show"]', 5000)
            .click('//option[text()="No show"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementNotPresent('//tr[1]/td[3]/span[text()="       No show list     "]');
    },
    'Prospect list ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Prospect"]', 5000)
            .click('//option[text()="Prospect"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementNotPresent('//tr[1]/td[3]/span[text()="       Prospect list     "]');

    },
    'Unconfirmed list ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Unconfirmed"]', 5000)
            .click('//option[text()="Unconfirmed"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementNotPresent('//tr[1]/td[3]/span[text()="       Unconfirmed      "]');

    },
    'Unconfirmed rebook list ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Unconfirmed Rebook"]', 5000)
            .click('//option[text()="Unconfirmed Rebook"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementNotPresent('//tr[1]/td[3]/span[text()="       Unconfirmed Rebook     "]');


    },


});

