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

    'sort by last name up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[3]')
            .verify.containsText("//tr[1]/td[3]/span/a", "Spindler")
            .verify.containsText("//tr[2]/td[3]/span/a", "Ruhnau")
            .verify.containsText("//tr[3]/td[3]/span/a", "Dachs")
            .verify.containsText("//tr[4]/td[3]/span/a", "Bairlein")
    },

    'sort by last name down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[3]')
            .verify.containsText("//tr[1]/td[3]/span/a", "Babeck")
            .verify.containsText("//tr[2]/td[3]/span/a", "Bairlein")
            .verify.containsText("//tr[3]/td[3]/span/a", "Dachs")
            .verify.containsText("//tr[4]/td[3]/span/a", "Ruhnau")
    },

    'search by last name ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[3]/input[@type="text"]', ['Dachs', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/a', 3000)
            .verify.containsText("//tr[1]/td[3]/span/a", "Dachs")
    },
});