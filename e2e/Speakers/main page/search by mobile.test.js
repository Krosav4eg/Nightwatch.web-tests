var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/214/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#214)"]', 3000)
    },

    'sort by mobile up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[7]')
            .useXpath()
            .verify.containsText("//tr[4]/td[7]/span", "0151 19 52 66 76")
            .verify.containsText("//tr[2]/td[7]/span", "+49 (0) 173 2549926")
            .verify.containsText("//tr[3]/td[7]/span", "+491511 5049851");
    },

    'sort by mobile down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[7]')
            .useXpath()
            .verify.containsText("//tr[1]/td[7]/span", "49 151 17442523")
            .verify.containsText("//tr[2]/td[7]/span", "0151 19 52 66 76")
            .verify.containsText("//tr[3]/td[7]/span", "+491511 5049851")
            .verify.containsText("//tr[4]/td[7]/span", "+49 (0) 173 2549926")
    },

    'search by mobile ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[7]/input[@type="text"]', ['+491511 5049851', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[7]/span', 3000)
            .verify.containsText("//tr[1]/td[7]/span", "+491511 5049851")
    },
});