var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
    },

    'sort by Company info up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Company info")]')
            .clickBySelectorXpath('//*[contains(text(), "Company info")]')

            .verify.containsText('//tr[1]/td[6]/span', 'PENDING')
            .verify.containsText('//tr[2]/td[6]/span', 'PENDING')
            .verify.containsText('//tr[3]/td[6]/span', 'PENDING')
            .verify.containsText('//tr[4]/td[6]/span', 'PENDING')
            .verify.containsText('//tr[5]/td[6]/span', 'PENDING')
    },

    'sort by Company info up': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="PENDING"]')
            .verify.containsText('//tr[1]/td[6]/span', 'PENDING')

            .clickBySelectorXpath('//option[text()="OK"]')
            .verify.elementPresent('//*[contains(text(), "No results found")]')

            .clickBySelectorXpath('(//option)[4]')
            .verify.containsText('//tr[1]/td[6]/span', 'PENDING')
            .verify.containsText('//tr[2]/td[6]/span', 'PENDING')
            .verify.containsText('//tr[3]/td[6]/span', 'PENDING')
    },
});
