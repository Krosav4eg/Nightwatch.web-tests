var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by Mettings Guarantee up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[6]')
            .clickBySelectorXpath('//tr/th[6]')

            .verify.containsText('//tr[1]/td[6]/span', '')
            .verify.containsText('//tr[2]/td[6]', '')
            .verify.containsText('//tr[3]/td[6]', '')
            .verify.containsText('//tr[4]/td[6]', '')
            .verify.containsText('//tr[5]/td[6]', '')
    },

    'sort by Mettings Guarantee down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[6]')

            .verify.containsText('//tr[1]/td[6]/span', '')
            .verify.containsText('//tr[2]/td[6]', '')
            .verify.containsText('//tr[3]/td[6]', '')
            .verify.containsText('//tr[4]/td[6]', '')
            .verify.containsText('//tr[5]/td[6]', '')
    },

    'choose Yes': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Yes"]')

            .verify.elementPresent('//*[contains(text(), "No results found")]')
    },

    'choose No': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="No"]')

            .verify.elementPresent('//*[contains(text(), "No results found")]')
    },

    'choose All': function (browser) {
        browser
            .clickBySelectorXpath('(//option)[9]')

            .verify.containsText('//tr[1]/td[6]/span', '')
            .verify.containsText('//tr[2]/td[6]', '')
            .verify.containsText('//tr[3]/td[6]', '')
            .verify.containsText('//tr[4]/td[6]', '')
            .verify.containsText('//tr[5]/td[6]', '')
    },
});
