var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2008/partners/5221')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },

    // 'add contact person': function (browser) {
    //     browser
    //        .addContactPerson('Rehab', '1');
    // },

    'send email empty fields': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(), "Send email")]')
            .clickBySelectorXpath("(//button[text()='Send'])[1]")

            .waitForElementVisible('//div[@class="simple-notification toast-notification alert"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Info!')
            .verify.containsText('//div[@class="sn-content"]', 'You need to chose Cms Template and recipients')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification alert"]')
    },

    'cancel send email block': function (browser) {
        browser
            .clickBySelectorXpath("//button[text()='Cancel']")
    },

    'send email': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(), "Send email")]')

            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//option[@value="68"]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', 'production.ns@managementevents.com')
            .verify.valueContains('//*[contains(text(), "From Name:")]/../div/input', 'Needseeker Customer Service')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', 'production.ns@managementevents.com')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'Needseeker -tapaamiset varattavissa nyt. Linkki tapaamispalveluusi')

            .clickBySelectorXpath('//option[@value="579"]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "From Name:")]/../div/input', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'Uudet Needseeker-tapaamiskreditit lisätty yrityksellenne')

            .clickBySelectorXpath('//option[@value="68"]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', 'production.ns@managementevents.com')
            .verify.valueContains('//*[contains(text(), "From Name:")]/../div/input', 'Needseeker Customer Service')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', 'production.ns@managementevents.com')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'Needseeker -tapaamiset varattavissa nyt. Linkki tapaamispalveluusi')

            .clickBySelectorXpath('//option[@value="579"]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "From Name:")]/../div/input', '{{EventVersion.PCResponsible.FirstName}} {{EventVersion.PCResponsible.LastName}}')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '{{EventVersion.PCResponsible.Email}}')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', 'Uudet Needseeker-tapaamiskreditit lisätty yrityksellenne')

            .clickBySelectorXpath("(//button[text()='Send'])[1]")

            .waitForElementVisible('//div[@class="simple-notification toast-notification success"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Success')
            .verify.containsText('//div[@class="sn-content"]', 'The email template was sent successfully')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification success"]')

            .verify.containsText('(//*[@class="col-sm-8"]/p)[1]', "Test")
            .verify.containsText('(//*[@class="col-sm-8"]/p)[1]', "Needseeker - credits added to companies")
            .containsCurrentDataInSelectorXpath('(//*[@class="col-sm-8"]/p)[1]');
    },

    'verify fields after send': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(), "Send email")]')

            .verify.valueContains('//*[contains(text(), "From Email:")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "From Name:")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "Reply-To Email:")]/../div/input', '')
            .verify.valueContains('//*[contains(text(), "Subject:")]/../div/input', '')

            .clickBySelectorXpath("//button[text()='Cancel']")
    },

    // 'delete contact person': function (browser) {
    //
    //     browser
    //         .sendKeys('//button[text()="Delete"]', [browser.Keys.HOME])
    //         .moveToElement('//button[text()="Delete"]', 10, 10)
    //         .clickBySelectorXpath('//button[text()="Delete"]')
    //         .clickBySelectorXpath('(//button[text()="Yes"])[1]');
    // },
});