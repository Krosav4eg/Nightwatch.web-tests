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

    'sort by company up': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[2]')

            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", "HiQ Finland")
            .verify.containsText("//tr[2]/td[2]/span", "Management Events")
            .verify.containsText("//tr[3]/td[2]/span", "Nordea Pankki Suomi Oyj")
    },

    'sort by company down': function (browser) {
        browser
            .clickBySelectorXpath('//tr[1]/th[2]')
            .useXpath()
            .verify.containsText("//tr[1]/td[2]/span", "Nordea Pankki Suomi Oyj")
            .verify.containsText("//tr[2]/td[2]/span", "Management Events")
            .verify.containsText("//tr[3]/td[2]/span", "HiQ Finland")
    },

    'search by company ': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[2]/input[@type="text"]', ['HiQ Finland', browser.Keys.ENTER])
            .useXpath()
            .waitForElementVisible('//tr[1]/td[2]/span', 3000)
            .verify.containsText("//tr[1]/td[2]/span", "HiQ Finland")
    },
});