var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'press when partner wasnt choosen': function (browser) {
        browser
            .clickBySelectorXpath('//a[text()="Send email"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Info!')
            .verify.containsText('//div[@class="toast-message"]', 'You need chose Partner first')
            .clickBySelectorXpath('//div[@class="toast-content"]')
    },

    'press when one partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[3]')
           .clickBySelectorXpath('//a[text()="Send email"]')

            .verify.elementPresent('//h4[contains(text(),"Select E-mail template")]')

            .verify.elementPresent('(//div[contains(text(),"Template:")])[1]')

            .verify.elementPresent('(//div[contains(text(),"From Email:")])[1]')
            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '')

            .verify.elementPresent('(//div[contains(text(),"From Name:")])[1]')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '')

            .verify.elementPresent('(//div[contains(text(),"Reply-To Email:")])[1]')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '')

            .verify.elementPresent('(//div[contains(text(),"Subject:")])[1]')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', '')
    },

    'choose blank field': function (browser) {
        browser
            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', '');
    },

    'choose template': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=328]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', 'test@gmail.com')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', 'Test')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', 'test@gmail.com')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'Test')
    },

    'verify send email button': function (browser) {
        browser
           .clickBySelectorXpath('//*[text()="Select E-mail template"]/../../..//button[@class="btn btn-primary"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success')
            .verify.containsText('//div[@class="toast-message"]', 'The email template was sent successfully.')
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .moveToElement('//tr[1]/td[13]/span', 5340, 640)
            .containsCurrentDataInSelectorXpath('//tr[2]/td[13]/span')
            .verify.containsText('//tr[2]/td[13]', 'Test');
    },

    'verify cancel  button': function (browser) {
        browser
            .clickBySelectorXpath('//a[text()="Send email"]')
            .clickBySelectorXpath('//option[@value=328]')

            .clickBySelectorXpath('//*[text()="Select E-mail template"]/../../..//button[@class="btn btn-default"]')
    },

    'press when all partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//a[text()="Send email"]')

            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', null)
    },
});
