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
            .verify.containsText('(//*[@class="panel-title card-title"])[9]', "Additional contacts")
            .clickBySelectorXpath('(//*[@class="panel-title card-title"])[9]')
            .expect.element('//*[text()="Email"]/../../../tbody/tr/td/button').to.not.be.visible;

        browser
            .clickBySelectorXpath('(//*[@class="panel-title card-title"])[9]')
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

            .verify.elementPresent('(//div[@class="panel-collapse collapse in show"]//button[contains(text(),"Delete")])[1]')
            .verify.elementPresent('(//div[@class="panel-collapse collapse in show"]//button[contains(text(),"Edit")])[1]')

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
            .clickBySelectorXpath('(//div[@class="panel-collapse collapse in show"]//button[contains(text(),"Delete")])[1]')
            .verify.elementPresent('//div[contains(text(),"Additional contact person email deleted successfully")]')

            .clickBySelectorXpath('(//div[@class="panel-collapse collapse in show"]//button[contains(text(),"Delete")])[1]')
            .verify.elementNotPresent('(//input[@type="email"])[2]')
            .verify.elementPresent('//div[contains(text(),"Additional contact person email deleted successfully")]');
    },
});