var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'Cancel window Add company': function (browser) {
        browser
            .clickBySelectorXpath('(//button[text()="Add company"])[1]')

            .clickBySelectorXpath('(//button[text()="Add company"])[2]')

            .waitForElementVisible('//div[@class="simple-notification toast-notification error"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Error')
            .verify.containsText('//div[@class="sn-content"]', 'Please select a company')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification error"]')

            .clickBySelectorXpath('//button[text()="Cancel"]')
    },

    'Close window Add company': function (browser) {
        browser
            .clickBySelectorXpath('(//button[text()="Add company"])[1]')

            .clickBySelectorXpath('//input[@value-property-name="companyId"]')
            .useCss()
            .sendKeys('.auto-complete input', "ClinArt Mena")
            .pause(1000)
            .clickBySelectorXpath('//*[contains(text(),"ClinArt Mena")]')
            .pause(1000)

            .clickBySelectorXpath('(//button[@aria-label="Close"]/span)[1]')

    },

    'Add company': function (browser) {
        browser
            .clickBySelectorXpath('(//button[text()="Add company"])[1]')

            .verify.containsText('//h4[@class="modal-title"]', 'Select event participant company')
            .verify.containsText('//*[contains(text(), "Company / Search")]/../div', "")

            .clickBySelectorXpath('//input[@class="form-control autocomplete-input ng-pristine ng-valid ng-touched"]')
            .useCss()
            .sendKeys('.auto-complete input', "ClinArt Mena")
            .pause(1000)
            .clickBySelectorXpath('//*[contains(text(),"ClinArt Mena")]')
            .pause(1000)

            .clickBySelectorXpath('(//button[text()="Add company"])[2]')

            .waitForElementVisible('//div[@class="simple-notification toast-notification error"]', 10000)
            .verify.containsText('//div[@class="sn-title"]', 'Error')
            .verify.containsText('//div[@class="sn-content"]', 'Please select a company')
            .clickBySelectorXpath('//div[@class="simple-notification toast-notification error"]')
    },
});
