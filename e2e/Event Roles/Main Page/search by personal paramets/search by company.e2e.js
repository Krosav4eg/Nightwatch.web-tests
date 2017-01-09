var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'search by full name of the function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .waitForElementVisible('//tr[1]/td[7]/input[@type="text"]', 3000)
            .setValue('//tr[1]/td[7]/input[@type="text"]', ['RWE Service GmbH', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//span[text()="       RWE Service GmbH     "]', 3000)

    },
    'search by 1-st letter of the function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .waitForElementVisible('//tr[1]/td[7]/input[@type="text"]', 3000)
            .clearValue('//tr[1]/td[7]/input[@type="text"]')
            .setValue('//tr[1]/td[7]/input[@type="text"]', ['R', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//span[text()="       RWE Service GmbH     "]', 3000)

    },
    'search by 3 letter of the function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .waitForElementVisible('//tr[1]/td[7]/input[@type="text"]', 3000)
            .clearValue('//tr[1]/td[7]/input[@type="text"]')
            .setValue('//tr[1]/td[7]/input[@type="text"]', ['RWE', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//span[text()="       RWE Service GmbH     "]', 3000)

    },



});