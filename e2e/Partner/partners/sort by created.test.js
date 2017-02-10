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

    'sort by Created up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 5000)
            .moveToElement('//tr/td[11]', 1298, 597)
            .clickBySelectorXpath('//tr/th[11]')
            .clickBySelectorXpath('//tr/th[11]')

            .verify.containsText('//tr[1]/td[11]/span', '2017-02-06 11:36:35')
            .verify.containsText('//tr[2]/td[11]', '2015-03-26 14:52:31')
            .verify.containsText('//tr[3]/td[11]', '2015-03-26 14:52:31')
            .verify.containsText('//tr[4]/td[11]', '2015-03-26 14:52:31')
            .verify.containsText('//tr[5]/td[11]', '2015-03-26 14:52:31')
    },

    'sort by Created down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[11]')

            .verify.containsText('//tr[1]/td[11]/span', '2015-03-26 14:52:31')
            .verify.containsText('//tr[2]/td[11]', '2015-03-26 14:52:31')
            .verify.containsText('//tr[3]/td[11]', '2015-03-26 14:52:31')
            .verify.containsText('//tr[4]/td[11]', '2015-03-26 14:52:31')
            .verify.containsText('//tr[5]/td[11]', '2015-03-26 14:52:31')
    },

    'search by Created Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[11]/input[@type="text"]', ['2015-03-26', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[11]/span', '2015-03-26 14:52:31')
    },
});
