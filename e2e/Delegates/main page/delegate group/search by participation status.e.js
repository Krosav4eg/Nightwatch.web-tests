var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
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

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/32")]');
    },

    'click cancelled': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Cancelled")]')
            .verify.containsText('//tr[1]/td[8]/span', 'Cancelled')
            .verify.containsText('//tr[2]/td[8]/span', 'Cancelled')
            .verify.containsText('//tr[3]/td[8]/span', 'Cancelled')
            .verify.containsText('//tr[4]/td[8]/span', 'Cancelled')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/4")]');
    },

    'click confirmed': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Confirmed")]')
            .verify.containsText('//tr[1]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[2]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[3]/td[8]/span', 'Confirmed')
            .verify.containsText('//tr[4]/td[8]/span', 'Confirmed')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/27")]');
    },

    'click confirmed Rebook': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Confirmed Rebook")]')
            // .verify.containsText('//tr[1]/td[8]/span', 'Confirmed Rebook')
            // .verify.containsText('//tr[2]/td[8]/span', 'Confirmed')
            // .verify.containsText('//tr[3]/td[8]/span', 'Confirmed')
            // .verify.containsText('//tr[4]/td[8]/span', 'Confirmed')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },

    'click late cancellation': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Late cancellation")]')
            .verify.containsText('//tr[1]/td[8]/span', 'Late cancellation')

            .verify.elementPresent('//h4[contains(text(),"Delegates 0/1")]');
    },

    'click no show': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"No show")]')
            //.verify.containsText('//tr[1]/td[8]/span', 'Late cancellation')
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },

    'click unconfirmed': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Unconfirmed")]')
            //.verify.containsText('//tr[1]/td[8]/span', 'Late cancellation')
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },

    'click unconfirmed rebook': function (browser) {
        browser
            .clickBySelectorXpath('//tr/td[8]/select/option[contains(text(),"Unconfirmed Rebook")]')
            //.verify.containsText('//tr[1]/td[8]/span', 'Late cancellation')
            .verify.elementPresent('//h4[contains(text(),"Delegates 0/0")]');
    },


});