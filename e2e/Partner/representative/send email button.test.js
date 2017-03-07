var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2308/representatives')
    },

    'press when partner wasnt choosen': function (browser) {
        browser
            .clickBySelectorXpath('//a[text()="Send email"]')

            .waitForElementVisible('//div[@class="simple-notification toast-notification alert"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Info!')
            .verify.containsText('//div[@class="sn-content"]', 'You need chose Partner first')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification alert"]')
    },

    'press when one partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[2]')
            .clickBySelectorXpath('//a[text()="Send email"]')

            .verify.valueContains('//select[@class="form-control ng-untouched ng-pristine ng-valid"]', '')
            .verify.containsText('//*[contains(text(), "From Email")]/../div/input', "")
            .verify.containsText('//*[contains(text(), "From Name")]/../div/input', "")
            .verify.containsText('//*[contains(text(), "Reply-To Email")]/../div/input', "")
            .verify.containsText('//*[contains(text(), "Subject")]/../div/input', "")

    },

    'verify choose Template': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value=170]')

            .verify.valueContains('//*[contains(text(), "From Email")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('//*[contains(text(), "Reply-To Email")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "Subject")]/../div/input', 'Start to book your meetings')

            .clickBySelectorXpath('//option[@value=581]')

            .verify.valueContains('//*[contains(text(), "From Email")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('//*[contains(text(), "Reply-To Email")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "Subject")]/../div/input', 'Your link to the Mobile Service')

            .clickBySelectorXpath('//option[@value=170]')

            .verify.valueContains('//*[contains(text(), "From Email")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('//*[contains(text(), "Reply-To Email")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "Subject")]/../div/input', 'Start to book your meetings')
    },

    'click by send Email': function (browser) {
            browser
                .clickBySelectorXpath('//button[text()="Send Email"]')

                .waitForElementVisible('//div[@class="simple-notification toast-notification success"]', 10000)
                .verify.containsText('//div[@class="sn-title"]', 'Success')
                .verify.containsText('//div[@class="sn-content"]', 'The email template was sent successfully')
                .clickBySelectorXpath('//div[@class="simple-notification toast-notification success"]')
    },

    'press when all partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//a[text()="Send email"]')

            .verify.valueContains('//select[@class="form-control ng-untouched ng-pristine ng-valid"]', null)
            .verify.valueContains('//*[contains(text(), "From Email")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "From Name")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Reply-To Email")]/../div/input', null)
            .verify.valueContains('//*[contains(text(), "Subject")]/../div/input', null)
    },

    'click by Cancel': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Cancel"]')

            .clickBySelectorXpath('//a[text()="Send email"]')

            .clickBySelectorXpath('//button[@class="close"]')
    },
});
