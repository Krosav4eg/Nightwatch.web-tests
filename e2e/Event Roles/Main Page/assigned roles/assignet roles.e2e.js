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

    'Event Role Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[2][contains(text(), "Event role")]', 5000)
            .click('//tr/th[2][contains(text(), "Event role")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)


    },
    'Participation status Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[3][contains(text(), "Participation status")]', 5000)
            .click('//tr/th[3][contains(text(), "Participation status")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
    },
    'Last Name Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[4][contains(text(), "Last Name")]', 5000)
            .click('//tr/th[4][contains(text(), "Last Name")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
    },

    'First Name Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[5][contains(text(), "First Name")]', 5000)
            .click('//tr/th[5][contains(text(), "First Name")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
    },
    'Function Title  Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[6][contains(text(), "Function Title")]', 5000)
            .click('//tr/th[6][contains(text(), "Function Title")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
    },
    'Company name Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[7][contains(text(), "Company name")]', 5000)
            .click('//tr/th[7][contains(text(), "Company name")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
    },
    'Comment name Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[8][contains(text(), "Comment")]', 5000)
            .click('//tr/th[8][contains(text(), "Comment")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
    },
    'Created name Up Down ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[9][contains(text(), "Created")]', 5000)
            .click('//tr/th[9][contains(text(), "Created")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
    },
    'Created By Up Down ': function (browser) {
        browser
            .useXpath()
            .getLocationInView('//tr/th[10][contains(text(), "Created by")]', function (result) {
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1350)
                this.assert.equal(result.value.y, 592)
                this.click('//tr/th[10][contains(text(), "Created by")]')
                    .useCss()
                    .waitForElementVisible('#thisIsMainLoader', 30000)
                    .waitForElementNotVisible('#thisIsMainLoader', 30000)
                    .useXpath()
            });

    },

    'Action Up Down ': function (browser) {
        browser
            .useXpath()
            .getLocationInView('//tr/th[11][contains(text(), "Action")]', function (result) {
                this.assert.equal(typeof result, "object")
                this.assert.equal(result.status, 0)
                this.assert.equal(result.value.x, 1398)
                this.assert.equal(result.value.y, 592)
                // this.click('//tr/th[11][contains(text(), "Action")]')
                //     .useCss()
                //     .waitForElementVisible('#thisIsMainLoader', 30000)
                //     .waitForElementNotVisible('#thisIsMainLoader', 30000)
                //     .useXpath()

            });

    },
});

