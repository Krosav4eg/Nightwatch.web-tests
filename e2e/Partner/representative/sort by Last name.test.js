var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Last name up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Last name")]')
            .clickBySelectorXpath('//*[contains(text(), "Last name")]')

            .verify.containsText('//tr[1]/td[4]/span', 'Zameer')
            .verify.containsText('//tr[2]/td[4]/span', 'VS')
            .verify.containsText('//tr[3]/td[4]/span', 'Tyagi')
            .verify.containsText('//tr[4]/td[4]/span', 'Tantawi')
            .verify.containsText('//tr[5]/td[4]/span', 'Singh')
    },

    'sort by Last name down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Last name")]')

            .verify.containsText('//tr[1]/td[4]/span', 'Abdullah')
            .verify.containsText('//tr[2]/td[4]/span', 'Abdulwahid')
            .verify.containsText('//tr[3]/td[4]/span', 'Abou Rahal')
            .verify.containsText('//tr[4]/td[4]/span', 'Adeeb')
            .verify.containsText('//tr[5]/td[4]/span', 'Akash')
    },

    'search by Last name Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['Tantawi', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[4]/span', 'Tantawi')
    },

    'search by First name 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[4]/input[@type="text"]', ['Tan', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[4]/span', 'Tantawi')
    },
});
