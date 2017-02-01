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

    'sort by Participation status up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Event participation name")]')
            .clickBySelectorXpath('//*[contains(text(), "Event participation name")]')

            .verify.containsText('//tr[1]/td[3]/span', '3SC World')
            .verify.containsText('//tr[2]/td[3]/span', '4power Infocom Free Zone Company LLC')
            .verify.containsText('//tr[3]/td[3]/span', 'Agile Financial Technologies')
            .verify.containsText('//tr[4]/td[3]/span', 'Al Ayoubi Technologies LLC')
            .verify.containsText('//tr[5]/td[3]/span', 'Al Rostamani Communications')
    },

    'sort by Participation status down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Event participation name")]')

            .verify.containsText('//tr[1]/td[3]/span', 'Workspace Oy')
            .verify.containsText('//tr[2]/td[3]/span', 'Wisdom Information Technology Solutions')
            .verify.containsText('//tr[3]/td[3]/span', 'Westcon Middle East Free Zone Company')
            .verify.containsText('//tr[4]/td[3]/span', 'VisionSoft Business Solutions JLT')
            .verify.containsText('//tr[5]/td[3]/span', 'Villen testi')
    },

    'search by Participation status Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[3]/input[@type="text"]', ['Asbis', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[3]/span', 'Asbis Middle East Free Zone Establishment')
    },

    'search by Participation status 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[3]/input[@type="text"]', ['Asb', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[3]/span', 'Asbis Middle East Free Zone Establishment')
    },
});
