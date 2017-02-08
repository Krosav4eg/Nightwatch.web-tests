var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'choose Show all': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=1]')

            .verify.containsText('//tr[1]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[2]/span', 'Confirmed')
    },

    'choose Show cancelled': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=2]')

            .verify.containsText('//tr[1]/td[2]/span', 'Cancelled')
            .verify.containsText('//tr[2]/td[2]/span', 'Cancelled')
            .verify.containsText('//tr[3]/td[2]/span', 'Cancelled')
    },

    'choose Show only active': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=0]')

            .verify.containsText('//tr[1]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[2]/span', 'Confirmed')
    },

    'click Reset ': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=2]')
            .clickBySelectorXpath('//button[@class="btn btn-default btn-block filter-button-margins"]')

            .verify.containsText('//tr[1]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[2]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[2]/span', 'Confirmed')
    },
});
