var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by Email up': function (browser) {
        browser
            .clickBySelectorXpath('//th[contains(text(), "Email")]')
            .clickBySelectorXpath('//th[contains(text(), "Email")]')

            .verify.containsText('//tr[1]/td[8]/span', 'zameer@alrostamanigroup.ae')
            .verify.containsText('//tr[2]/td[8]/span', 'ville.kakela@managementevents.com')
            .verify.containsText('//tr[3]/td[8]/span', 'victor@cmcs-mena.com')
            .verify.containsText('//tr[4]/td[8]/span', 'venkateshm@techsource.ae')
            .verify.containsText('//tr[5]/td[8]/span', 'varun.nambiar@3i-infotech.com')
    },

    'sort by Email down': function (browser) {
        browser
            .clickBySelectorXpath('//th[contains(text(), "Email")]')

            .verify.containsText('//tr[1]/td[8]/span', 'aanand@profilesw.com')
            .verify.containsText('//tr[2]/td[8]/span', 'abhinav@pantechsystems.com')
            .verify.containsText('//tr[3]/td[8]/span', 'alaa.assem@clinart.net')
            .verify.containsText('//tr[4]/td[8]/span', 'albert@fujisoft.net')
            .verify.containsText('//tr[5]/td[8]/span', 'amy.mortlock@hds.com')
    },

    'search by Email Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[8]/input[@type="text"]', ['zameer@alrostamanigroup.ae', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[8]/span', 'zameer@alrostamanigroup.ae')
    },

    'search by Mobile 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[8]/input[@type="text"]', ['zam', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[8]/span', 'zameer@alrostamanigroup.ae')
    },
});
