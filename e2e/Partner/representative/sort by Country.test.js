var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Country up': function (browser) {
        browser
            .clickBySelectorXpath('//th[contains(text(), "Country")]')
            .clickBySelectorXpath('//th[contains(text(), "Country")]')

            .verify.containsText('//tr[1]/td[9]/span', 'United Arab Emirates')
            .verify.containsText('//tr[2]/td[9]/span', 'United Arab Emirates')
            .verify.containsText('//tr[3]/td[9]/span', 'United Arab Emirates')
            .verify.containsText('//tr[4]/td[9]/span', 'United Arab Emirates')
            .verify.containsText('//tr[5]/td[9]/span', 'United Arab Emirates')
    },

    'sort by Country down': function (browser) {
        browser
            .clickBySelectorXpath('//th[contains(text(), "Country")]')

            .verify.containsText('//tr[1]/td[9]/span', 'Finland')
            .verify.containsText('//tr[2]/td[9]/span', 'United Arab Emirates')
            .verify.containsText('//tr[3]/td[9]/span', 'United Arab Emirates')
            .verify.containsText('//tr[4]/td[9]/span', 'United Arab Emirates')
            .verify.containsText('//tr[5]/td[9]/span', 'United Arab Emirates')
    },

    'search by Email Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[9]/input[@type="text"]', ['Finland', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[9]/span', 'Finland')
    },

    'search by Mobile 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[9]/input[@type="text"]', ['Fin', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[9]/span', 'Finland')
    },
});
