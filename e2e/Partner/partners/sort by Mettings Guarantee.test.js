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

    'sort by Mettings Guarantee up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[6]')
            .clickBySelectorXpath('//tr/th[6]')

            .verify.containsText('//tr[1]/td[6]/span', '0')
            .verify.containsText('//tr[2]/td[6]', '0')
            .verify.containsText('//tr[3]/td[6]', '0')
            .verify.containsText('//tr[4]/td[6]', '0')
            .verify.containsText('//tr[5]/td[6]', '0')
    },

    'sort by Mettings Guarantee down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[6]')

            .verify.containsText('//tr[1]/td[6]/span', '0')
            .verify.containsText('//tr[2]/td[6]', '0')
            .verify.containsText('//tr[3]/td[6]', '0')
            .verify.containsText('//tr[4]/td[6]', '0')
            .verify.containsText('//tr[5]/td[6]', '0')
    },

    'search by Mettings Guarantee Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['0', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[5]/span', '0')
    },
});
