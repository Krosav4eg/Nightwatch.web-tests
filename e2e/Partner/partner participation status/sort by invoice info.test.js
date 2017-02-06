var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by Company info up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Invoice info")]')
            .clickBySelectorXpath('//*[contains(text(), "Invoice info")]')

            .verify.containsText('//tr[1]/td[7]/span', 'PENDING')
            .verify.containsText('//tr[2]/td[7]/span', 'PENDING')
            .verify.containsText('//tr[3]/td[7]/span', 'PENDING')
            .verify.containsText('//tr[4]/td[7]/span', 'PENDING')
            .verify.containsText('//tr[5]/td[7]/span', 'PENDING')
    },

    'sort by Company info up': function (browser) {
        browser
            .clickBySelectorXpath('(//option[text()="PENDING"])[2]')
            .verify.containsText('//tr[1]/td[7]/span', 'PENDING')

            .clickBySelectorXpath('(//option[text()="OK"])[2]')
            .verify.elementPresent('//*[contains(text(), "No results found")]')

            .clickBySelectorXpath('(//option)[7]')
            .verify.containsText('//tr[1]/td[7]/span', 'PENDING')
            .verify.containsText('//tr[2]/td[7]/span', 'PENDING')
            .verify.containsText('//tr[3]/td[7]/span', 'PENDING')
    },
});
