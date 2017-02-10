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

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Info!')
            .verify.containsText('//div[@class="toast-message"]', 'You need to chose Cms Template and recipients')
            .clickBySelectorXpath('//div[@class="toast-content"]');
    },

    'cancel send sms block': function (browser) {
        browser
            .clickBySelectorXpath("(//button[text()='Cancel'])[5]")
    },

    'send sms': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[2]')

            .clickBySelectorXpath('//input[@type="checkbox"]')
            .clickBySelectorXpath('//option[@value="292"]')

            .verify.valueContains('(//textarea[@class="form-control ng-untouched ng-pristine ng-valid"])[2]', 'Testing')

            .clickBySelectorXpath("(//button[text()='Send'])[2]")

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success')
            .verify.containsText('//div[@class="toast-message"]', 'The SMS template was sent successfully.')
            .clickBySelectorXpath('//div[@class="toast-content"]')

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