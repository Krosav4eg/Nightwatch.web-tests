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

    'check hosting roles content': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Hosting Roles")]')

            .verify.elementPresent('//th[contains(text(),"Hosted agenda element")]')
            .verify.elementPresent('//th[contains(text(),"Hosting representative")]')
            .verify.elementPresent('//th[contains(text(),"Content")]')

            .verify.elementPresent('//strong[contains(text(),"Matched hosted table meeting")]')
            .verify.elementPresent('(//a[contains(text(),"link to event agenda")])[1]')

            .verify.elementPresent('(//div[@class="panel panel-primary"]//button[contains(text(),"Edit")])[1]')
            .verify.elementPresent('//div[@class="panel panel-primary"]//button[contains(text(),"Delete")]');
    },

    'edit role verify window appear': function (browser) {
        browser
            .clickBySelectorXpath('(//div[@class="panel panel-primary"]//button[contains(text(),"Edit")])[1]')
            .verify.elementPresent('//h4[contains(text(),"Edit")]')

            .verify.elementPresent('//strong[contains(text(),"Representative:")]')
            .verify.containsText('//select[@ngcontrol="representative"]', 'Schmitt Dr. Christoph')

            .verify.elementPresent('//strong[contains(text(),"Subject:")]')
            .verify.containsText('(//input)[31]', '')

            .verify.elementPresent('//strong[contains(text(),"Description:")]')
            .verify.containsText('(//textarea)[4]', '');
    },

    'edit role': function (browser) {
        browser
            .setValueByXpath('(//me-custom-text-area/div/textarea)[3]', 'test description')
            .pause(1000)
            .setValueByXpath('(//input)[31]', ['#@$%^123456/.,test subject', browser.Keys.ENTER]);
    },

    'edit info verify': function (browser) {
        browser
            .verify.elementPresent('(//div[contains(text(),"Topic data updated")])')
            .verify.elementPresent('(//strong[contains(text(),"#@$%^123456/.,test subject")])')
            .verify.elementPresent('(//tr/td[3]/br[contains(text(),"")])[1]');
    },

    'verify link to event agenda': function (browser) {
        browser
            .clickBySelectorXpath('(//a[contains(text(),"link to event agenda")])[1]')
            .window_handles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                    .verify.urlContains("http://alpha.skynet.managementevents.com/event/212/agenda")
                    .back()
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 30000);
            })
    },

    'cancel button verify': function (browser) {
        browser
            .clickBySelectorXpath('//div[@class="panel panel-primary"]//button[contains(text(),"Delete")]')
            .verify.elementPresent('(//h4[contains(text(),"Delete")])[3]')
            .clickBySelectorXpath('//input[@type="checkbox"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[contains(text(),"Cancel")]')
            .pause(2000)
            .verify.elementPresent('//td[contains(text(),"Schmitt Dr. Christoph")]')
            .verify.elementNotPresent('//div[contains(text(),"Deleted role")]');
    },

    'delete topic': function (browser) {
        browser
            .clickBySelectorXpath('//div[@class="panel panel-primary"]//button[contains(text(),"Delete")]')
            .verify.elementPresent('(//h4[contains(text(),"Delete")])[3]')
            .clickBySelectorXpath('//input[@type="checkbox"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[contains(text(),"Save")]')
            .pause(2000)
            .verify.elementNotPresent('//td[contains(text(),"Schmitt Dr. Christoph")]')
            .verify.elementPresent('//div[contains(text(),"Deleted role")]');
    },

    'create precondition for tests': function (browser) {
        browser
            .clickBySelectorXpath('(//div[@class="panel panel-primary"]//button[contains(text(),"Edit")])[1]')
            .verify.elementPresent('(//h4[contains(text(),"Edit")])')
            .clickBySelectorXpath('//option[@value="137093"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[contains(text(),"Save")]')
            .pause(2000)
            .verify.elementPresent('//td[contains(text(),"Schmitt Dr. Christoph")]')
            .verify.elementPresent('//div[contains(text(),"Topic data created")]');
    },
});