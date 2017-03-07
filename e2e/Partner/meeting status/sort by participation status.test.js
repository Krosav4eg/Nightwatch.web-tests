var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
    },

    'sort by Participation status up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Participation status")]')
            .clickBySelectorXpath('//*[contains(text(), "Participation status")]')

            .verify.containsText('//tr[1]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[2]/span', 'Confirmed')
    },

    'sort by Participation status down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Participation status")]')

            .verify.containsText('//tr[1]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[2]/span', 'Confirmed')
    },

    'choose Unconfirmed ': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Unconfirmed"]')

            .verify.elementPresent('//*[contains(text(), "No results found")]')
    },

    'choose Confirmed (rebook)': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Confirmed (rebook)"]')

            .verify.elementPresent('//*[contains(text(), "No results found")]')
    },

    'choose Unconfirmed (rebook)': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Unconfirmed (rebook)"]')

            .verify.elementPresent('//*[contains(text(), "No results found")]')
    },

    'choose Confirmed': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Confirmed"]')

            .verify.containsText('//tr[1]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[2]/span', 'Confirmed')
    },
});
