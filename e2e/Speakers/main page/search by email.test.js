var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'sort by email up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[6]')
            .useXpath()
            .verify.containsText("//tr[1]/td[6]/span", "boris.funke@citiworks.de")
            .verify.containsText("//tr[2]/td[6]/span", "holger.kink@rwe.com")
            .verify.containsText("//tr[3]/td[6]/span", "ingo.alpheus@rwe.com")
    },

    'sort by email down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[6]')
            .useXpath()
            .verify.containsText("//tr[1]/td[6]/span", "ingo.alpheus@rwe.com")
            .verify.containsText("//tr[2]/td[6]/span", "holger.kink@rwe.com")
            .verify.containsText("//tr[3]/td[6]/span", "boris.funke@citiworks.de");
    },

    'search by email ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['holger.kink@rwe.com', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[6]/span', 3000)
            .verify.containsText("//tr[1]/td[6]/span", "holger.kink@rwe.com")
    },
});