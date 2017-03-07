var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Company name up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Company name")]')
            .clickBySelectorXpath('//*[contains(text(), "Company name")]')

            .verify.containsText('//tr[1]/td[6]/span', 'Villen testi')
            .verify.containsText('//tr[2]/td[6]/span', 'Villen testi')
            .verify.containsText('//tr[3]/td[6]/span', 'Villen testi')
            .verify.containsText('//tr[4]/td[6]/span', 'Villen testi')
            .verify.containsText('//tr[5]/td[6]/span', 'Villen testi')
    },

    'sort by Company name down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Company name")]')

            .verify.containsText('//tr[1]/td[6]/span', '4power Infocom Free Zone Company LLC')
            .verify.containsText('//tr[2]/td[6]/span', 'Management Events')
            .verify.containsText('//tr[3]/td[6]/span', 'Villen testi')
            .verify.containsText('//tr[4]/td[6]/span', 'Villen testi')
            .verify.containsText('//tr[5]/td[6]/span', 'Villen testi')
    },

    'search by Company name Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['Management', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[6]/span', 'Management Events')
    },

    'search by Company name 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[6]/input[@type="text"]', ['Man', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[6]/span', 'Management Events')
    },
});
