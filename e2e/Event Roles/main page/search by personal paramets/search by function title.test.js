var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/215/event-participant-roles')
    },

    'search by full name of function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['Head of Commodity Management', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[6]/span", "Head of Commodity Management");
    },

    'search by 1-st letters of function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['H', browser.Keys.ENTER])
            .verify.containsText("//tr[3]/td[6]/span", "Head of Commodity Management");
    },

    'search by 3 letter of function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['Hea', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[6]/span", "Head of Commodity Management");
    },
});