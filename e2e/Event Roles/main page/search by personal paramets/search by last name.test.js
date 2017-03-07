var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/214/event-participant-roles')
    },

    'search by last full name ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['Kaminski', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[4]/span", "Kaminski");
    },

    'search by 3 letters last name ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['Kam', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[4]/span", "Kaminski");
    },

    'search by 1 letters last name ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['K', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[4]/span", "Kaminski");
    },
});