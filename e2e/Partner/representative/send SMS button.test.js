var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2008/representatives')
    },

    'press when partner wasnt choosen': function (browser) {
        browser
            .clickBySelectorXpath('//a[text()="Send SMS"]')

            .waitForElementVisible('//div[@class="simple-notification toast-notification alert"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Info!')
            .verify.containsText('//div[@class="sn-content"]', 'You need chose Partner first')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification alert"]')
    },

    'press when one partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[2]')
            .clickBySelectorXpath('//a[text()="Send SMS"]')

            .verify.valueContains('//select[@class="form-control ng-untouched ng-pristine ng-valid"]', '')
    },

    'verify select Template': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=575]')
            .verify.valueContains('//*[@class="form-control ng-untouched ng-pristine"]', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelectorXpath('//option[@value=97]')
            .verify.valueContains('//*[@class="form-control ng-untouched ng-pristine"]', 'We have booked a new meeting for you. You can check your meetings from here from your mobile service')

            .clickBySelectorXpath('//option[@value=575]')
            .verify.valueContains('//*[@class="form-control ng-untouched ng-pristine"]', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelectorXpath('//option[@value=97]')
            .verify.valueContains('//*[@class="form-control ng-untouched ng-pristine"]', 'We have booked a new meeting for you. You can check your meetings from here from your mobile service')
    },

    'press send SMS': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Send SMS"]')

    },

    'press when all partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//a[text()="Send SMS"]')

            .verify.valueContains('//select[@class="form-control ng-untouched ng-pristine ng-valid"]', '')

            .clickBySelectorXpath('//button[text()="Cancel"]')

            .clickBySelectorXpath('//a[text()="Send SMS"]')

            .verify.valueContains('//select[@class="form-control ng-untouched ng-pristine ng-valid"]', '')

            .clickBySelectorXpath('//button[@class="close"]')
    },
});
