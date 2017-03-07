var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by  Meeting requests up': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[7]')
            .clickBySelectorXpath('//tr/th[7]')

            .verify.containsText('//tr[1]/td[7]/span', '0')
            .verify.containsText('//tr[2]/td[7]', '0')
            .verify.containsText('//tr[3]/td[7]', '0')
            .verify.containsText('//tr[4]/td[7]', '0')
            .verify.containsText('//tr[5]/td[7]', '0')
    },

    'sort by  Meeting requests down': function (browser) {
        browser
            .clickBySelectorXpath('//tr/th[7]')

            .verify.containsText('//tr[1]/td[7]/span', '0')
            .verify.containsText('//tr[2]/td[7]', '0')
            .verify.containsText('//tr[3]/td[7]', '0')
            .verify.containsText('//tr[4]/td[7]', '0')
            .verify.containsText('//tr[5]/td[7]', '0')
    },

    'search by  Meeting requests Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[7]/input[@type="text"]', ['0', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[7]/span', '0')
    },
});
