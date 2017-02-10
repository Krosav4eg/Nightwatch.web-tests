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

    'sort by Modified up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 5000)
            .moveToElement('//tr/td[13]', 1298, 597)
            .clickBySelectorXpath('//tr/th[13]')
            .clickBySelectorXpath('//tr/th[13]')

            .verify.containsText('//tr[1]/td[13]/span', '2017-02-06 17:53:48')
            .verify.containsText('//tr[2]/td[13]', '2017-02-06 11:36:35')
            .verify.containsText('//tr[3]/td[13]', '2016-11-07 17:58:37')
            .verify.containsText('//tr[4]/td[13]', '2016-11-04 09:26:36')
            .verify.containsText('//tr[5]/td[13]', '2016-07-01 15:01:16')
    },

    'sort by Modified down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[13]')

            .verify.containsText('//tr[1]/td[13]/span', '2016-07-01 15:01:14')
            .verify.containsText('//tr[2]/td[13]', '2016-07-01 15:01:14')
            .verify.containsText('//tr[3]/td[13]', '2016-07-01 15:01:14')
            .verify.containsText('//tr[4]/td[13]', '2016-07-01 15:01:15')
            .verify.containsText('//tr[5]/td[13]', '2016-07-01 15:01:15')
    },

    'search by Modified Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[13]/input[@type="text"]', ['2016-07-01', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[13]/span', '2016-07-01 15:01:14')
    },
});
