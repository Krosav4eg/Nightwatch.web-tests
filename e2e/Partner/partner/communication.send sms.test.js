var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners/25')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },

    'add contact person': function (browser) {
        browser
            .addContactPerson('Rehab', '1');
    },

    'send sms empty fields': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[2]')
            .clickBySelectorXpath("(//button[text()='Send'])[2]")

            .waitForElementVisible('//div[@class="simple-notification toast-notification alert"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Info!')
            .verify.containsText('//div[@class="sn-content"]', 'You need to chose Cms Template and recipients')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification alert"]')
    },

    'cancel send sms block': function (browser) {
        browser
            .clickBySelectorXpath("(//button[text()='Cancel'])[5]")
    },

    'send sms': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[2]')

            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')

            .clickBySelectorXpath('//option[@value="575"]')
            .verify.valueContains('(//textarea[@class="form-control ng-untouched ng-pristine ng-valid"])[2]', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelectorXpath('//option[@value="97"]')
            .verify.valueContains('(//textarea[@class="form-control ng-untouched ng-pristine ng-valid"])[2]', 'We have booked a new meeting for you. You can check your meetings from here from your mobile service')

            .clickBySelectorXpath('//option[@value="575"]')
            .verify.valueContains('(//textarea[@class="form-control ng-untouched ng-pristine ng-valid"])[2]', 'This is the link to your meeting service: {{Partner.Link.Agenda-AUTO}}')

            .clickBySelectorXpath("(//button[text()='Send'])[2]")

            .waitForElementVisible('//div[@class="simple-notification toast-notification success"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Success')
            .verify.containsText('//div[@class="sn-content"]', 'The SMS template was sent successfully.')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification success"]')

            .verify.containsText('(//*[@class="col-lg-8 communication-participant-text"]/p)[2]', "Testing SMS")
            .verify.containsText('(//*[@class="col-lg-8 communication-participant-text"]/p)[2]', "Rehab E.M. Abdullah")
            .containsCurrentDataInSelectorXpath('(//*[@class="col-lg-8 communication-participant-text"]/p)[2]');
    },

    'verify fields after send': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[2]')

            .verify.valueContains('(//textarea[@class="form-control ng-untouched ng-pristine ng-valid"])[2]', null)

            .clickBySelectorXpath("(//button[text()='Cancel'])[4]")
    },

    'delete contact person': function (browser) {

        browser
            .sendKeys('//button[text()="Delete"]', [browser.Keys.HOME])
            .moveToElement('//button[text()="Delete"]', 10, 10)
            .clickBySelectorXpath('//button[text()="Delete"]')
            .clickBySelectorXpath('(//button[text()="Yes"])[1]');
    },
});