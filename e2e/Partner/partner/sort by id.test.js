var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by E#ID up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "E#ID")]')
            .clickBySelectorXpath('//*[contains(text(), "E#ID")]')

            .verify.containsText('//tr[1]/td[1]/span', '#30')
            .verify.containsText('//tr[2]/td[1]', '#29')
            .verify.containsText('//tr[3]/td[1]', '#28')
            .verify.containsText('//tr[4]/td[1]', '#27')
            .verify.containsText('//tr[5]/td[1]', '#26')
    },

    'sort by E#ID down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "E#ID")]')

            .verify.containsText('//tr[1]/td[1]/span', '#1')
            .verify.containsText('//tr[2]/td[1]', '#2')
            .verify.containsText('//tr[3]/td[1]', '#3')
            .verify.containsText('//tr[4]/td[1]', '#4')
            .verify.containsText('//tr[5]/td[1]', '#5')
    },

    'search by E#ID. Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[1]/input[@type="text"]', ['25', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[1]/span', '#25')
    },

    'search by E#ID. one numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[1]/input[@type="text"]', ['2', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[1]/span', '#2')
    },
});
