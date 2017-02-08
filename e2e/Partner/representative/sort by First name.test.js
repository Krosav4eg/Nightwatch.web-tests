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

    'sort by First name up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "First name")]')
          //  .clickBySelectorXpath('//*[contains(text(), "First name")]')

            .verify.containsText('//tr[1]/td[3]/span', 'Abdulrahim')
            .verify.containsText('//tr[2]/td[3]/span', 'Abhinav')
            .verify.containsText('//tr[3]/td[3]/span', 'Alaa')
            .verify.containsText('//tr[4]/td[3]/span', 'Albert')
            .verify.containsText('//tr[5]/td[3]/span', 'Amy')
    },

    'sort by First name down': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "First name")]')

            .verify.containsText('//tr[1]/td[3]/span', 'Ville')
            .verify.containsText('//tr[2]/td[3]/span', 'Victor')
            .verify.containsText('//tr[3]/td[3]/span', 'Venki')
            .verify.containsText('//tr[4]/td[3]/span', 'Varun')
            .verify.containsText('//tr[5]/td[3]/span', 'Syed')
    },

    'search by First name Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[3]/input[@type="text"]', ['Sanaullah', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[3]/span', 'Sanaullah')
    },

    'search by First name 3 numbers': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[3]/input[@type="text"]', ['San', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[3]/span', 'Sanaullah')
    },
});
