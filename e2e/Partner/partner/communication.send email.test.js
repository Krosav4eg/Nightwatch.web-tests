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

    'send email empty fields': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[1]')
            .clickBySelectorXpath("(//button[text()='Send'])[1]")

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Info!')
            .verify.containsText('//div[@class="toast-message"]', 'You need to chose Cms Template and recipients')
            .clickBySelectorXpath('//div[@class="toast-content"]');
    },

    'cancel send email block': function (browser) {
        browser
            .clickBySelectorXpath("(//button[text()='Cancel'])[4]")
    },

    'send email': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[1]')

            .clickBySelectorXpath('//input[@type="checkbox"]')
            .clickBySelectorXpath('//option[@value="328"]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', 'test@gmail.com')
            .verify.valueContains('//*[contains(text(), "From Name:")]/../div/input', 'Test')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', 'test@gmail.com')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'Test')

            .clickBySelectorXpath("(//button[text()='Send'])[1]")

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success')
            .verify.containsText('//div[@class="toast-message"]', 'The email template was sent successfully')
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .verify.containsText('(//*[@class="col-lg-8 communication-participant-text"]/p)[1]', "Test")
            .verify.containsText('(//*[@class="col-lg-8 communication-participant-text"]/p)[1]', "Rehab E.M. Abdullah")
            .containsCurrentDataInSelectorXpath('(//*[@class="col-lg-8 communication-participant-text"]/p)[1]');
    },

    'verify fields after send': function (browser) {
        browser
            .clickBySelectorXpath('(//button[@class="btn btn-primary btn-lg communication-participant-btn"])[1]')

            .verify.valueContains('//*[contains(text(), "Template:")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "From Name:")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', null)

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