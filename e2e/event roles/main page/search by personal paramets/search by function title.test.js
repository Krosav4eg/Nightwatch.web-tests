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

    'search by full name of function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['Geschäftsführer', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//span[contains(text(), "Geschäftsführer")]', 3000)
    },

    'search by 1-st letters of function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['G', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//span[contains(text(), "Geschäftsführer")]', 3000)
    },

    'search by 3 letter of function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['Ges', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//span[contains(text(), "Geschäftsführer")]', 3000)
    },
});