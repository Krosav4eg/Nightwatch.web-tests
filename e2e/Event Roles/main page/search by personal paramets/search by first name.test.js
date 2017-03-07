var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/216/event-participant-roles')
    },

       'search by full first name ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['Jutta', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[5]/span", "Jutta");
    },

    'search by 1-st letter first name ': function (browser) {
        browser
            .useXpath()
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['J', browser.Keys.ENTER])
            .verify.containsText("//tr[2]/td[5]/span", "Jutta");
    },

    'search by 3 letter first name ': function (browser) {
        browser
            .useXpath()
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['Jut', browser.Keys.ENTER])
            .verify.containsText("//tr[1]/td[5]/span", "Jutta");
    },
});