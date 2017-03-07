var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
    },

    'sort by company up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Company name")]')
            .clickBySelectorXpath('//*[contains(text(), "Company name")]')

            .verify.containsText('//tr[1]/td[1]/span', '3SC World')
            .verify.containsText('//tr[2]/td[1]/span', '4power Infocom Free Zone Company LLC')
            .verify.containsText('//tr[3]/td[1]/span', 'Agile Financial Technologies')
            .verify.containsText('//tr[4]/td[1]/span', 'Al Ayoubi Technologies LLC')
            .verify.containsText('//tr[5]/td[1]/span', 'Al Rostamani Communications')
    },

    'sort by company down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Company name")]')

            .verify.containsText('//tr[1]/td[1]/span', 'Workspace Oy')
            .verify.containsText('//tr[2]/td[1]/span', 'Wisdom Information Technology Solutions')
            .verify.containsText('//tr[3]/td[1]/span', 'Westcon Middle East Free Zone Company')
            .verify.containsText('//tr[4]/td[1]/span', 'VisionSoft Business Solutions JLT')
            .verify.containsText('//tr[5]/td[1]/span', 'Villen testi')
    },

    'search by company Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[1]/input[@type="text"]', ['Asbis', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[1]/span', 'Asbis Middle East Free Zone Establishment')
    },

    'search by company 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[1]/input[@type="text"]', ['Asb', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[1]/span', 'Asbis Middle East Free Zone Establishment')
    },
});
