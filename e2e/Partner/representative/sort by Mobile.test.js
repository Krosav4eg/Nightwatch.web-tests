var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Mobile up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Mobile")]')
            .clickBySelectorXpath('//*[contains(text(), "Mobile")]')

            .verify.containsText('//tr[1]/td[7]/span', '9714-4563983')
            .verify.containsText('//tr[2]/td[7]/span', '358405657227')
            .verify.containsText('//tr[3]/td[7]/span', '000')
            .verify.containsText('//tr[4]/td[7]/span', '+971566860672')
            .verify.containsText('//tr[5]/td[7]/span', '+971506598935')
    },

    'sort by Mobile down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Mobile")]')

            .verify.containsText('//tr[1]/td[7]/span', '+ 971 4-363-6821')
            .verify.containsText('//tr[2]/td[7]/span', '+ 971 4-370-9482')
            .verify.containsText('//tr[3]/td[7]/span', '+ 971 4-388-3913')
            .verify.containsText('//tr[4]/td[7]/span', '+ 971 4-812-2022')
            .verify.containsText('//tr[5]/td[7]/span', '+ 971 4-886-3850')
    },

    'search by Mobile Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[7]/input[@type="text"]', ['358405657227', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[7]/span', '358405657227')
    },

    'search by Mobile 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[7]/input[@type="text"]', ['358', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[7]/span', '+3589621 7070')
    },
});
