var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/219/event-participant-roles')
    },

    'search by full name of the function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[7]/input[@type="text"]', ['AXA Konzern AG', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[7]/span", "AXA Konzern AG")
    },

    'search by 1-st letter of the function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[7]/input[@type="text"]', ['A', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[7]/span", "AXA Konzern AG")
    },

    'search by 3 letter of the function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[7]/input[@type="text"]', ['AXA', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[7]/span", "AXA Konzern AG")
    },
});