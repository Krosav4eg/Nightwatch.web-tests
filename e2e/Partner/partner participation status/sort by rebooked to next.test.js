var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
    },

    'sort by Rebooked to next up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 5000)
            .moveToElement('//tr/td[11]', 1298, 597)
            .clickBySelectorXpath('//*[contains(text(), "Rebooked to next")]')
            .clickBySelectorXpath('//*[contains(text(), "Rebooked to next")]')

            .verify.containsText('//tr[1]/td[11]/span', 'Empty')
            .verify.containsText('//tr[2]/td[11]/span', 'Empty')
            .verify.containsText('//tr[3]/td[11]/span', 'Empty')
            .verify.containsText('//tr[4]/td[11]/span', 'Empty')
            .verify.containsText('//tr[5]/td[11]/span', 'Empty')
    },

    'choose Empty': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Empty"]')
            .verify.containsText('//tr[1]/td[11]/span', 'Empty')

            .clickBySelectorXpath('(//option[text()="OK"])[3]')
            .verify.elementPresent('//*[contains(text(), "No results found")]')

            .clickBySelectorXpath('(//option)[10]')
            .verify.containsText('//tr[1]/td[11]/span', 'Empty')
            .verify.containsText('//tr[2]/td[11]/span', 'Empty')
            .verify.containsText('//tr[3]/td[11]/span', 'Empty')
    },
});
