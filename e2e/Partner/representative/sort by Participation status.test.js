var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Participation status up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 5000)
            .moveToElement('//tr/td[10]', 1298, 597)

            .clickBySelectorXpath('//th[contains(text(), "Participation status")]')
            .clickBySelectorXpath('//th[contains(text(), "Participation status")]')

            .verify.containsText('//tr[1]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[10]/span', 'Confirmed')
    },

    'sort by Participation status down': function (browser) {
        browser
            .clickBySelectorXpath('//th[contains(text(), "Participation status")]')

            .verify.containsText('//tr[1]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[10]/span', 'Confirmed')
    },

    'choose Unconfirmed': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Unconfirmed"]')

            .verify.containsText('//div[@class="ng-grid-body"]/p', 'No results found')
    },

    'choose Confirmed': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Confirmed"]')

            .verify.containsText('//tr[1]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[10]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[10]/span', 'Confirmed')
    },

    'choose Confirmed (rebook)': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Confirmed (rebook)"]')

            .verify.containsText('//div[@class="ng-grid-body"]/p', 'No results found')
    },

    'choose Unconfirmed (rebook)': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Unconfirmed (rebook)"]')

            .verify.containsText('//div[@class="ng-grid-body"]/p', 'No results found')
    },
});
