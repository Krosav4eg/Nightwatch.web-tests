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
            .clickBySelectorXpath('//a[text()="Send SMS"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Info!')
            .verify.containsText('//div[@class="toast-message"]', 'You need chose Partner first')
            .clickBySelectorXpath('//div[@class="toast-content"]')
    },

    'press when one partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[2]')
            .clickBySelectorXpath('//a[text()="Send SMS"]')

            .verify.elementPresent('//h4[contains(text(),"Select SMS template")]')

            .verify.elementPresent('(//div[contains(text(),"Template:")])[1]')
    },

    'verify cancel  button': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=586]')

            .clickBySelectorXpath('(//*[text()="Select SMS template"]/../../..//button[@class="btn btn-default"])[2]')
    },

    'verify send  button': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=586]')

            .verify.valueContains('//textarea[@class="form-control ng-untouched ng-pristine ng-valid"]', 'Test')
            .clickBySelectorXpath('(//*[text()="Select SMS template"]/../../..//button[@class="btn btn-primary"])[2]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success!')
            .verify.containsText('//div[@class="toast-message"]', 'The SMS template was sent successfully.')
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .moveToElement('//tr[1]/td[14]/span', 1340, 640)
            .verify.containsText('//tr[1]/td[14]/span', 'Growth Session / link to ME Sales Managers');
    },

    'press when all partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//a[text()="Send SMS"]')

            .verify.elementNotPresent('//textarea[@class="form-control ng-untouched ng-pristine ng-valid"]')
            .verify.valueContains('//*[contains(text(), "Template")]/../div/select', null)
    },
});