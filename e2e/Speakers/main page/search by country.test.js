var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2473/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2473)"]', 3000)
    },

    'sort by country up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[8]')
            .useXpath()
            .verify.containsText("//tr[1]/td[8]/span", "Finland")
            .verify.containsText("//tr[2]/td[8]/span", "Finland")
            .verify.containsText("//tr[3]/td[8]/span", "Singapore")
    },

    'sort by country down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[8]')
            .useXpath()
            .verify.containsText("//tr[1]/td[8]/span", "Singapore")
            .verify.containsText("//tr[2]/td[8]/span", "Finland")
            .verify.containsText("//tr[3]/td[8]/span", "Finland")
    },

    'search by country ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[8]/input[@type="text"]', ['Finland', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[8]/span', 3000)
            .verify.containsText("//tr[1]/td[8]/span", "Finland")
    },
});