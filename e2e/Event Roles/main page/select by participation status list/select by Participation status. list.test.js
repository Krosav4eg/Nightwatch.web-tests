var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to the event-participant-roles': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'cancelled list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Cancelled"]')
    },
    
    'confirmed list ': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Confirmed"]')

            .useXpath()
            .verify.containsText("//tr[1]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[2]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[3]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[4]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[5]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[6]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[7]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[8]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[9]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[10]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[11]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[13]/td[3]/span", "Confirmed")
            .verify.containsText("//tr[14]/td[3]/span", "Confirmed");
    },
    
    'confirmed Rebook list ': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Confirmed Rebook"]')
            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[3]/span[contains(text(), "Confirmed Rebook")]');
            },

    'late cancellation list ': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Late cancellation"]')
            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[3]/span[contains(text(), "Late cancellation")]');
    },

    'no show list': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="No show"]')
            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[3]/span[contains(text(), "No show list")]');
    },
/*
    'prospect list ': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Prospect"]')
            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[3]/span[contains(text(), "Prospect list")]');
    },
*/
    'unconfirmed list ': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Unconfirmed"]')
            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[3]/span[contains(text(), "Unconfirmed")]');
    },

    'unconfirmed rebook list ': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Unconfirmed Rebook"]')
            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[3]/span[contains(text(), "Unconfirmed Rebook")]');
    },
});

