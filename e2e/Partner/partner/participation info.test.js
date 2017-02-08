var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners/25')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'verify Participation info': function (browser) {
        browser
            .verify.containsText('(//h4/a/div)[1]', "Participation info - 4power Infocom Free Zone Company LLC - (E#25)")

            .clickBySelectorXpath('(//h4/a/div)[1]')
            .verify.elementNotPresent('//label[text()="Master company name:"]')
            .clickBySelectorXpath('(//h4/a/div)[1]')
            .verify.elementPresent('//label[text()="Master company name:"]');
    },

    'verify Master company name': function (browser) {
        browser
            .verify.containsText('//label[text()="Master company name:"]/../div', "4power Infocom Free Zone Company LLC")

            .clickBySelectorXpath('//label[text()="Master company name:"]/../div/a')

            .verify.urlContains("/EW/MasterCompany/cruII/id/")
            .back()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },

    'verify Participation name': function (browser) {
        browser
            .verify.containsText('//label[text()="Participation name:"]/../div/input', "4power Infocom Free Zone Company LLC")
    },

    'verify Participation status': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value=2])[2]')
            .verify.containsText('//label[text()="Participation status:"]/../div/select', "Cancelled")

            .clickBySelectorXpath('(//option[@value=2])[3]')
            .verify.containsText('//label[text()="Participation status:"]/../div/select', "Unconfirmed (rebook)")

            .clickBySelectorXpath('(//option[@value=2])[4]')
            .verify.containsText('//label[text()="Participation status:"]/../div/select', "Confirmed (rebook)")

            .clickBySelectorXpath('(//option[@value=2])[0]')
            .verify.containsText('//label[text()="Participation status:"]/../div/select', "Unconfirmed")

            .clickBySelectorXpath('(//option[@value=2])[1]')
            .verify.containsText('//label[text()="Participation status:"]/../div/select', "Confirmed")

            .clickBySelectorXpath('(//option[@value=2])[2]')
    },

    'verify Rebook responsible': function (browser) {
    },

    'verify Guarantee Valid': function (browser) {
        browser
            .clickBySelectorXpath('(//radio-item/div/input)[2]')
    },

    'Participation notes': function (browser) {
        browser
            .setValueByXpath('//*[@ngcontrol="packageNotes"]', "test test");
    },

    'click Save': function (browser) {
        browser
            .clickBySelectorXpath('(//*[text()="Save"])[1]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success!')
            .verify.containsText('//div[@class="toast-message"]', 'Event Participant Company successfully update')
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .verify.containsText('//label[text()="Participation status:"]/../div/select', "Cancelled")
            .verify.valueContains('//*[@ngcontrol="packageNotes"]', "test test")
            .verify.attributeEquals('(//radio-item/div/input)[2]', 'checked', 'true')
            .expect.element('(//radio-item/div/input)[1]').to.not.be.selected;
    },

    'edit ': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value=2])[1]')
            .clickBySelectorXpath('(//radio-item/div/input)[1]')
            .setValueByXpath('//*[@ngcontrol="packageNotes"]', "test 2 test")
            .clickBySelectorXpath('(//*[text()="Save"])[1]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success!')
            .verify.containsText('//div[@class="toast-message"]', 'Event Participant Company successfully update')
            .clickBySelectorXpath('//div[@class="toast-content"]')

            .verify.containsText('//label[text()="Participation status:"]/../div/select', "Confirmed")
            .verify.valueContains('//*[@ngcontrol="packageNotes"]', "test 2 test")
            .verify.attributeEquals('(//radio-item/div/input)[1]', 'checked', 'true')
            .expect.element('(//radio-item/div/input)[2]').to.not.be.selected;
    },
});