var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by E#ID up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "E#Id")]')
            .clickBySelectorXpath('//*[contains(text(), "E#Id")]')

            .verify.containsText('//tr[1]/td[2]/span', '#50775')
            .verify.containsText('//tr[2]/td[2]', '#50774')
            .verify.containsText('//tr[3]/td[2]', '#50773')
            .verify.containsText('//tr[4]/td[2]', '#50772')
            .verify.containsText('//tr[5]/td[2]', '#50771')
    },

    'sort by E#ID down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "E#Id")]')

            .verify.containsText('//tr[1]/td[2]/span', '#50730')
            .verify.containsText('//tr[2]/td[2]', '#50731')
            .verify.containsText('//tr[3]/td[2]', '#50732')
            .verify.containsText('//tr[4]/td[2]', '#50733')
            .verify.containsText('//tr[5]/td[2]', '#50734')
    },

    'search by E#ID. Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[2]/input[@type="text"]', ['#50', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[2]/span', '#50730')
    },

    'search by E#ID. one numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[2]/input[@type="text"]', ['#5', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[2]/span', '#50730')
    },
});
