var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Active offering up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 5000)
            .moveToElement('//tr/td[11]', 1298, 597)

            .clickBySelectorXpath('//th[contains(text(), "Active offering")]')
            .clickBySelectorXpath('//th[contains(text(), "Active offering")]')

            .verify.containsText('//tr[1]/td[11]/span', '0')
            .verify.containsText('//tr[2]/td[11]/span', '0')
            .verify.containsText('//tr[3]/td[11]/span', '0')
            .verify.containsText('//tr[4]/td[11]/span', '0')
            .verify.containsText('//tr[5]/td[11]/span', '0')
    },

    'sort by Active offering down': function (browser) {
        browser
            .clickBySelectorXpath('//th[contains(text(), "Active offering")]')

            .verify.containsText('//tr[1]/td[11]/span', '0')
            .verify.containsText('//tr[2]/td[11]/span', '0')
            .verify.containsText('//tr[3]/td[11]/span', '0')
            .verify.containsText('//tr[4]/td[11]/span', '0')
            .verify.containsText('//tr[5]/td[11]/span', '0')
    },
});
