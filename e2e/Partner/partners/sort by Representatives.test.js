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

    'sort by Representatives up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[5]')
            .clickBySelectorXpath('//tr/th[5]')

            .verify.containsText('//tr[1]/td[5]/span', '45')
            .verify.containsText('//tr[2]/td[5]', '1')
            .verify.containsText('//tr[3]/td[5]', '0')
            .verify.containsText('//tr[4]/td[5]', '0')
            .verify.containsText('//tr[5]/td[5]', '0')
    },

    'sort by Representatives down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[5]')

            .verify.containsText('//tr[1]/td[5]/span', '0')
            .verify.containsText('//tr[2]/td[5]', '0')
            .verify.containsText('//tr[3]/td[5]', '0')
            .verify.containsText('//tr[4]/td[5]', '0')
            .verify.containsText('//tr[5]/td[5]', '0')
    },

    'search by Representatives Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['45', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[5]/span', '45')
    },

    'search by Representatives one numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['1', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[5]/span', '1')
    },
});
