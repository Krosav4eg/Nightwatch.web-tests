var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
    },

    'chose show all in the filter': function (browser) {
        browser
            .clickBySelectorXpath('//select/option[contains(text(),"Show all")]');
    },

    'click blank': function (browser) {
        browser
            .useXpath()
            .moveToElement('(//tr/td[8]/select/option)[1]', 1340, 640)

            .clickBySelectorXpath('(//tr/td[8]/select/option)[1]')
            .verify.containsText('//tr[1]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[8]/span', 'Cancelled')
            .verify.containsText('//tr[3]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[5]/td[8]/span', 'Cancelled')
    },

    'click cancelled': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Cancelled")]')
            .verify.containsText('//tr[1]/td[8]/span', 'Cancelled')
            .verify.containsText('//tr[2]/td[8]/span', 'Cancelled')
            .verify.containsText('//tr[3]/td[8]/span', 'Cancelled')
            .verify.containsText('//tr[4]/td[8]/span', 'Cancelled')
    },

    'click confirmed': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Confirmed")]')
            .verify.containsText('//tr[1]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[8]/span', 'Confirmed')
    },

    'click confirmed Rebook': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Confirmed Rebook")]')
            .verify.containsText('//tr[1]/td[8]/span', 'Confirmed Rebook')
    },

    'click late cancellation': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Late cancellation")]')
            .verify.containsText('//tr[1]/td[8]/span', 'Late cancellation')
    },

    'click no show': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"No show")]')
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },

    'click unconfirmed': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Unconfirmed")]')
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },

    'click unconfirmed rebook': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Unconfirmed Rebook")]')
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },
});