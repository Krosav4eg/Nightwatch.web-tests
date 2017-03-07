var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Function title up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Function title")]')
            .clickBySelectorXpath('//*[contains(text(), "Function title")]')

            .verify.containsText('//tr[1]/td[5]/span', 'VP Middle East')
            .verify.containsText('//tr[2]/td[5]/span', 'Vice president- Sales')
            .verify.containsText('//tr[3]/td[5]/span', 'Vice president MENA- Sales and Marketing and head of insurance')
            .verify.containsText('//tr[4]/td[5]/span', 'Toimitusjohtaja')
            .verify.containsText('//tr[5]/td[5]/span', 'Technical Lead')
    },

    'sort by Function title down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Function title")]')

            .verify.containsText('//tr[1]/td[5]/span', '')
            .verify.containsText('//tr[2]/td[5]/span', 'Business Development Director')
            .verify.containsText('//tr[3]/td[5]/span', 'Business Development Manager')
            .verify.containsText('//tr[4]/td[5]/span', 'Business Development Manager, Middle East and South Africa')
            .verify.containsText('//tr[5]/td[5]/span', 'Business Manager')
    },

    'search by Last name Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['Toimitusjohtaja', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[5]/span', 'Toimitusjohtaja')
    },

    'search by First name 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[5]/input[@type="text"]', ['Toi', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[5]/span', 'Toimitusjohtaja')
    },
});
