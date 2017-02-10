var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to hosting roles': function (browser) {
        browser
            .relUrl('/event/150/partners/7588')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'participation info': function (browser) {
        browser
            .useXpath()
            .verify.containsText('(//h4/a/div)[7]', "Additional contacts")
            .clickBySelectorXpath('(//h4/a/div)[7]')
            .expect.element('//*[text()="Email"]/../../../tbody/tr/td/button').to.not.be.visible;

        browser
            .clickBySelectorXpath('(//h4/a/div)[7]')
            .expect.element('//*[text()="Email"]/../../../tbody/tr/td/button').to.be.visible;
    },

    'add button': function (browser) {
        browser
            .useXpath()
            .setValueByXpath('//*[text()="Email"]/../../../tbody/tr/td/input', 'test')
            .sendKeys('//*[text()="Email"]/../../../tbody/tr/td/input', '@sd')
            .sendKeys('//*[text()="Email"]/../../../tbody/tr/td/input', '.com')
            .pause(2000)
            .clickBySelectorXpath('//*[text()="Email"]/../../../tbody/tr/td/button')

            .verify.elementPresent('(//div[@class="panel panel-primary accordion-panel-view"]//button[contains(text(),"Delete")])[2]')
            .verify.elementPresent('(//div[@class="panel panel-primary accordion-panel-view"]//button[contains(text(),"Edit")])')

            .verify.elementPresent('(//input[@type="email"])[2]')
            .verify.elementPresent('(//button[contains(text(),"Add")])[1]')

            .setValueByXpath('(//input[@type="email"])[2]', 'auto')
            .sendKeys('(//input[@type="email"])[2]', '@at')
            .setValue('(//input[@type="email"])[2]', '.ru')
            .pause(2000)
            .clickBySelectorXpath('(//button[contains(text(),"Add")])[1]');
    },

    'delete button': function (browser) {
        browser
            .clickBySelectorXpath('(//div[@class="panel panel-primary accordion-panel-view"]//button[contains(text(),"Delete")])[2]')
            .verify.elementPresent('//div[contains(text(),"Additional contact person email deleted successfully")]')

            .clickBySelectorXpath('(//div[@class="panel panel-primary accordion-panel-view"]//button[contains(text(),"Delete")])[2]')
            .verify.elementNotPresent('(//input[@type="email"])[2]')
            .verify.elementPresent('//div[contains(text(),"Additional contact person email deleted successfully")]');
    },
});