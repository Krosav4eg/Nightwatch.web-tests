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

    'search by last full name ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['Alphéus', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//a[contains(text(), "Alphéus")]', 3000)
    },

    'search by 3 letters last name ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['Alp', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//a[contains(text(), "Alphéus")]', 3000)
    },

    'search by 1 letters last name ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['A', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//a[contains(text(), "Alphéus")]', 3000)
    },
});