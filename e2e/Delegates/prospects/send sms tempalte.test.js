var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/2008/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check that when you open select sms template page template field is blank': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')

            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .verify.elementPresent('//h4[contains(text(),"Prospects 1/1540")]')

            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
            .verify.elementPresent('//h4[contains(text(),"Select SMS template")]')

            .verify.elementPresent('//div[contains(text(),"Template:")]')
            .verify.valueContains('(//select)[8]', '');
    },

    'visible correct templates in drop down list': function (browser) {
        browser
            .clickBySelectorXpath('(//select)[8]')

            .verify.containsText('(//option)[23]', '')
            .verify.containsText('//option[@value="73"]', 'Cms Content #62')
            .verify.containsText('//option[@value="334"]', 'English Master Template')
            .verify.containsText('//option[@value="310"]', 'Testyhh')
            .verify.containsText('//option[@value="307"]', 'This is the master temple in english')
    },

    'choose blank field': function (browser) {
        browser
            .clickBySelectorXpath('(//option)[23]')
            .verify.valueContains('(//select)[8]', '');
    },

    'click send sms button without chosen template': function (browser) {
        browser
            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[2]')
            .useXpath()
            .waitForElementVisible('//div[contains(text(),"Please choose template.")]', 5000)

            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]');
    },

    'choose sms template': function (browser) {
        browser
            .clickBySelectorXpath('//option[@value="307"]')
            .useCss()
            .verify.valueContains('div[class="modal in fade"] textarea', 'English test');
    },

    'check that information would be update after you change template': function (browser) {
        browser
            .relUrl('/sms-templates/edit/307')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[contains(text(),"Edit Sms Template (#307)")]')

            .setValueByXpath('//input[@formcontrolname="name"]', 'temple in english')
            .setValueByXpath('(//textarea)[1]', 'autotest')

            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')

            .relUrl('/event/2008/delegates')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .verify.elementPresent('//h4[contains(text(),"Prospects 1/1540")]')

            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')

            .click('//option[contains(text(),"temple in english")]')
            .useCss()
            .verify.valueContains('div[class="modal in fade"] textarea ', 'autotest');
    },

    'to return order': function (browser) {
        browser
            .relUrl('/sms-templates/edit/307')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[contains(text(),"Edit Sms Template (#307)")]')

            .setValueByXpath('//input[@formcontrolname="name"]', 'This is the master temple in english')
            .setValueByXpath('//textarea', 'English test')

            .clickBySelectorXpath('(//button[contains(text(),"Save")])[1]')
            .clickBySelectorXpath('(//button[contains(text(),"Save")])[2]')

            .verify.elementPresent('//div[contains(text(),"The Localization Template was updated successfully")]');
    },

    'verify send sms button': function (browser) {
        browser
            .relUrl('/event/2008/delegates')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .verify.elementPresent('//h4[contains(text(),"Prospects 1/1540")]')
            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')

            .clickBySelectorXpath('//option[contains(text(),"This is the master temple in english")]')
            .clickBySelectorXpath('//button[@class="btn btn-primary"]')
            .useXpath()
            .verify.elementNotPresent('//div[contains(text(),"The SMS template was sent successfully.")]')
    },

    'verify cancel  button': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Prospects")]')

            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')
            .clickBySelectorXpath('//option[contains(text(),"This is the master temple in english")]')

            .clickBySelectorXpath('//div[@class="modal in fade"]//button[@class="btn btn-default"]')

            .verify.elementNotPresent('//div[contains(text(),"The SMS template was sent successfully.")]')

            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[21]')
            .clickBySelectorXpath('(//tr/td/input[@type="checkbox"])[24]')
            .clickBySelectorXpath('(//button[contains(text(),"Send SMS")])[1]')

            .pause(2000)
            .useCss()
            .verify.elementNotPresent('div[class="modal in fade"] textarea');
    },
});