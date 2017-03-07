var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to table-settings': function (browser) {
        browser
            .relUrl('/events/2316/table-settings/3')
    },

    'verify Participants not in table yet befo ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//*[contains(text(), "Participants not in table yet")]/../../..//tr', 50000)
            .elements('xpath','//*[contains(text(), "Participants not in table yet")]/../../..//tr', function (result) {
                this.verify.equal(result.value.length, 5);
            })
    },

    'add Participants': function (browser) {
        browser
            .relUrl('/event/2316/partners/20048')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 80000)
            .useXpath()
            .clickBySelectorXpath('//div[contains(text(), "Representatives")]/../../../..//*[@class="form-control autocomplete-input ng-untouched ng-pristine ng-valid"]')
            .useCss()
            .sendKeys('.auto-complete input', 'Vesa Porvali')
            .pause(3000)
            .useXpath()
            .clickBySelectorXpath('//*[contains(text(),"Vesa Porvali")]')
            .clickBySelectorXpath('//div[contains(text(), "Representatives")]/../../../..//*[text()="Save"]');
    },

    'verify after add Participants': function (browser) {
        browser
            .relUrl('/events/2316/table-settings/3')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 80000)

            .elements('xpath','//*[contains(text(), "Participants not in table yet")]/../../..//tr', function (result) {
                this.verify.equal(result.value.length, 6);
            })
    },

    'delete Participants': function (browser) {
        browser
            .relUrl('/event/2316/partners/20048')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 80000)
            .clickBySelectorXpath('//*[text()="Matinlauri Arttu-Matti"]/../../td/button[contains(text(), "Cancel")]')
            .clickBySelectorXpath('(//h4[text()="Delete contact"]/../../..//button[text()="Yes"])[2]')
            .waitForElementVisible('//div[@class="toast-content"]', 10000);
    },
});