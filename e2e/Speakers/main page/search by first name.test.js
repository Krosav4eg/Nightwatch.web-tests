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

    'sort by first name up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[4]')
            .useXpath()
            .verify.containsText("//tr[1]/td[4]/span", "Clemens")
            .verify.containsText("//tr[2]/td[4]/span", "Jürgen")
            .verify.containsText("//tr[3]/td[4]/span", "Stefan")
            .verify.containsText("//tr[4]/td[4]/span", "Stefan");
    },

    'sort by first name down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[4]')
            .useXpath()
            .verify.containsText("//tr[1]/td[4]/span", "Werner")
            .verify.containsText("//tr[2]/td[4]/span", "Stefan")
            .verify.containsText("//tr[3]/td[4]/span", "Stefan")
            .verify.containsText("//tr[4]/td[4]/span", "Jürgen");
    },

    'search by first name ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['Stefan', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[4]/span', 3000)
            .verify.containsText("//tr[1]/td[4]/span", "Stefan")
    },
});