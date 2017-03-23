var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/177/delegates')
    },

    'verify participation status before changing': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//div[contains(text(),"Event Participants")]')

            .verify.elementPresent('//p[contains(text(),"Total delegates: 543")]')
            .verify.elementPresent('//p[contains(text(),"Prospects: 499")]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 16")]')
            // .verify.elementPresent('//p[contains(text(),"Confirmed Rebook: 1")]')
            // .verify.elementPresent('//p[contains(text(),"Unconfirmed Rebook: 1")]')
            .verify.elementPresent('//p[contains(text(),"Total participants: 17")]')

            //.verify.elementPresent('//p[contains(text(),"No show: 2")]')
            .verify.elementPresent('//p[contains(text(),"Late cancellation: 1")]')
            .verify.elementPresent('//p[contains(text(),"Cancelled: 26")]')
            .verify.elementPresent('//p[contains(text(),"Total cancelled: 27")]');
    },

    'choose unconfirmed': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Unkel', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Unkel")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed')
            .clickBySelectorXpath('(//option[contains(text(),"Unconfirmed")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Unconfirmed: 1")]');
    },

    'choose confirmed': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Unkel', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Unkel")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed')
            .clickBySelectorXpath('(//option[contains(text(),"Confirmed")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 17")]');
    },

    'choose confirmed rebook': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Unkel', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Unkel")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed')
            .clickBySelectorXpath('(//option[contains(text(),"Confirmed Rebook")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 16")]')
            //.verify.elementPresent('//p[contains(text(),"Confirmed Rebook: 2")]');
    },

    'return permanent order': function (browser) {
        browser
            .pause(3000)
            .setValueByXpath('(//input[@type="text"])[1]',['Unkel', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Unkel")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed')
            .clickBySelectorXpath('(//option[contains(text(),"Confirmed Rebook")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 16")]')
            //.verify.elementPresent('//p[contains(text(),"Confirmed Rebook: 2")]');
    },
});