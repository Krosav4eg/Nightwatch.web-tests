var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event/212/partners/7588')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'rebooking comment field': function (browser) {
        browser
            .clickBySelectorCss('input[value-property-name=id]')
            .sendKeys('.auto-complete input', 'Mari Alén')
            .pause(2000)
            .clickBySelectorXpath('//*[contains(text(),"Mari Alén")]')

            .verify.containsText('//div[text()="Rebook responsible"]/../div/span', "Mari Alén")

            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
            .verify.elementPresent('//div[contains(text(),"Event Participant Company successfully updated")]')

            .setValueByXpath('(//textarea)[2]', 'Hi!')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[3]')
            .verify.elementPresent('//div[contains(text(),"Event Participant Rebooking successfully updated")]');
    },

    'participation info not visible': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//div[contains(text(),"Rebooking")]')

            .clickBySelectorXpath('(//h4/a/div)[3]')
            .useXpath()
            .expect.element('(//div[contains(text(),"Rebook responsible")])[1]').to.not.be.visible;
    },

    'participation info visible': function (browser) {
        !browser
            .clickBySelectorXpath('(//h4/a/div)[3]')
            .expect.element('(//div[contains(text(),"Rebook responsible")])[1]').to.be.visible;
    },

    'rebooking button': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//button)[5]', 'Rebook')
            .verify.cssProperty('(//button)[5]', 'background-color', 'rgba(241, 196, 15, 1)')
            .clickBySelectorXpath('(//button)[5]')
            .verify.containsText('(//button)[5]', 'Rebooked')
            .verify.cssProperty('(//button)[5]', 'background-color', 'rgba(108, 166, 50, 1)')
    },

});
