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

            .verify.elementPresent('//p[contains(text(),"Total delegates: 542")]')
            .verify.elementPresent('//p[contains(text(),"Prospects: 498")]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 4")]')
            .verify.elementPresent('//p[contains(text(),"Confirmed Rebook: 1")]')
            .verify.elementPresent('//p[contains(text(),"Unconfirmed Rebook: 1")]')
            .verify.elementPresent('//p[contains(text(),"Total participants: 6")]')

            .verify.elementPresent('//p[contains(text(),"No show: 2")]')
            .verify.elementPresent('//p[contains(text(),"Late cancellation: 2")]')
            .verify.elementPresent('//p[contains(text(),"Cancelled: 34")]')
            .verify.elementPresent('//p[contains(text(),"Total cancelled: 38")]');
    },

    'choose unconfirmed': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Ahrend', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Ahrend")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed Rebook')
            .clickBySelectorXpath('(//option[contains(text(),"Unconfirmed")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Unconfirmed: 1")]');
    },

    'choose confirmed': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Ahrend', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Ahrend")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed')
            .clickBySelectorXpath('(//option[contains(text(),"Confirmed")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 6")]');
    },

    'choose confirmed rebook': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Ahrend', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Ahrend")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed')
            .clickBySelectorXpath('(//option[contains(text(),"Confirmed Rebook")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 5")]')
            .verify.elementPresent('//p[contains(text(),"Confirmed Rebook: 2")]');
    },

    'choose canceled': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Ahrend', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Ahrend")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed Rebook')
            .clickBySelectorXpath('(//option[contains(text(),"Cancelled")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Confirmed Rebook: 1")]')
            .verify.elementPresent('//p[contains(text(),"Cancelled: 34")]');
    },

    // 'choose no show': function (browser) {
    //     browser
    //         .setValueByXpath('(//input[@type="text"])[1]',['Baumert', browser.Keys.ENTER])
    //         .clickBySelectorXpath('//a[contains(text(),"Baumert")]')
    //         .verify.containsText('//select[@id="participationStatus"]', 'Cancelled')
    //         .clickBySelectorXpath('(//option[contains(text(),"No show")])[1]')
    //         .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
    //
    //         .verify.elementPresent('//p[contains(text(),"Cancelled: 33")]')
    //         .verify.elementPresent('//p[contains(text(),"No show: 2")]');
    // },
    //
    // 'choose late cancellation': function (browser) {
    //     browser
    //         .setValueByXpath('(//input[@type="text"])[1]',['Baumert', browser.Keys.ENTER])
    //         .clickBySelectorXpath('//a[contains(text(),"Baumert")]')
    //         .verify.containsText('//select[@id="participationStatus"]', 'No show')
    //         .clickBySelectorXpath('(//option[contains(text(),"Late cancellation")])[1]')
    //         .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
    //
    //         .verify.elementPresent('//p[contains(text(),"No show: 1")]')
    //         .verify.elementPresent('//p[contains(text(),"Late cancellation: 3")]')
    // },

    'return permanent order': function (browser) {
        browser
            .pause(3000)
            .setValueByXpath('(//input[@type="text"])[1]',['Ahrend', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Ahrend")]')
            .verify.containsText('//select[@id="participationStatus"]', 'Confirmed')
            .clickBySelectorXpath('(//option[contains(text(),"Confirmed Rebook")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')

            .verify.elementPresent('//p[contains(text(),"Confirmed: 5")]')
            .verify.elementPresent('//p[contains(text(),"Confirmed Rebook: 2")]');
    },

    'verifying fields Availability From and Availability To': function (browser) {
        browser
            .setValueByXpath('(//input[@type="text"])[1]',['Ahrend', browser.Keys.ENTER])
            .clickBySelectorXpath('//a[contains(text(),"Ahrend")]')
            .verify.elementPresent('//span[contains(text(),"2009-05-27 08:00:00")]')
            .verify.elementPresent('//span[contains(text(),"2009-05-28 18:00:00")]')
    },
});